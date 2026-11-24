---
title: Чтение рыночных данных с помощью оракулов
description: >-
  Как получать и интерпретировать рыночные данные с помощью инфраструктуры
  оракулов Mezo.
topic: developers
---

Mezo предоставляет рыночные данные через две системы оракулов: [Skip Connect](https://docs.skip.build/connect/introduction) для BTC/USD и [Pyth Network](https://docs.pyth.network/home) для дополнительных ценовых потоков.

## Обзор

### Оракул Skip

Оракул Skip предоставляет нативные ценовые потоки BTC/USD в Mezo через интерфейс агрегатора, совместимый с Chainlink.

- **Поддерживаемая пара:** только BTC/USD
- **Частота обновления:** каждый блок
- **Интерфейс:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Оракул Pyth

Оракул Pyth предоставляет множество ценовых потоков помимо BTC/USD.

**Частота обновления:** зависит от пары токенов.

- Для Mezo подробности см. в [файле конфигурации](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml).
- Для Ethereum подробности см. в [файле конфигурации](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml).

Цена обновляется, когда `price_deviation` превышает заданный порог (в процентных пунктах), или каждые `time_difference` секунд — в зависимости от того, что наступит раньше.

## Рекомендации

При создании dApp, использующих данные оракулов, следуйте этим рекомендациям:

- **Проверяйте актуальность данных:** всегда проверяйте временные метки и номера блоков, чтобы обнаруживать устаревшие данные. Задайте пороги устаревания, подходящие для вашего сценария.
- **Задавайте ценовые границы:** реализуйте проверки допустимости цен, чтобы обнаруживать аномалии или попытки манипулирования.
- **Следите за рыночными условиями:** учитывайте волатильность, ликвидность и возможные манипуляции, при которых может потребоваться приостановить работу приложения.
- **Проводите аудиты безопасности:** убедитесь, что ваши контракты и зависимости соответствуют стандартам безопасности. Проводите аудит кода, обрабатывающего данные оракулов, чтобы предотвратить эксплойты.

## Чтение ценовых потоков

### Использование оракула Skip (BTC/USD)

Оракул Skip реализует интерфейс, совместимый с Chainlink. Чтобы получить последнюю цену, вызовите `latestRoundData()`:

**Контракт:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Возвращаемые значения:**

- `roundId`: ID раунда, в котором была обновлена цена
- `answer`: цена BTC/USD (точность в десятичных знаках можно получить через `decimals()`)
- `startedAt`: Unix-время начала раунда
- `updatedAt`: Unix-время последнего обновления раунда

### Использование оракула Pyth (несколько потоков)

Pyth предоставляет множество ценовых потоков через свои EVM-контракты. Чтобы получать цены со встроенной проверкой устаревания, используйте `getPriceNoOlderThan(pair_id, maxAgeSeconds)`.

**Контракт в основной сети Mezo:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Контракт в тестовой сети Mezo:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Контракт в основной сети Ethereum:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Контракт в Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Пример получения цены по заданному ID ценового потока:**

```solidity
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract ReadPythPrice {
    IPyth public immutable pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract); // 0x2880aB155794e7179c9eE2e38200202908C17B43 on Mezo
    }

    function getPrice(bytes32 priceId, uint256 maxAgeSeconds)
        external
        view
        returns (int64 price, uint64 conf, int32 expo, uint256 publishTime)
    {
        PythStructs.Price memory priceData = pyth.getPriceNoOlderThan(priceId, maxAgeSeconds);
        return (priceData.price, priceData.conf, priceData.expo, priceData.publishTime);
    }

    // Example: Get MUSD/USD price
    function getMUSDPrice() external view returns (int64, uint256) {
        bytes32 musdPriceId = 0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de;
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(musdPriceId, 3600); // Max 1 hour old
        return (price.price, price.publishTime);
    }
}
```

**Справка:** [документация](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan) по API getPriceNoOlderThan

## Офчейн-данные о ценах

Ценовые потоки и метаданные можно запрашивать напрямую из Pyth Network, не взаимодействуя с блокчейном:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **ID ценовых потоков:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Доступные ценовые потоки

### Потоки оракула Skip

Доступны как в основной, так и в тестовой сети Mezo:

| Пара | Адрес контракта | Сеть |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Основная сеть |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Тестовая сеть |

**API узла (только тестовая сеть):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Потоки оракула Pyth

Доступны в следующих сетях:

- [Основная сеть](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) Mezo по адресу `0x2880aB155794e7179c9eE2e38200202908C17B43`
- [Тестовая сеть](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) Mezo по адресу `0x2880aB155794e7179c9eE2e38200202908C17B43`
- [Основная сеть](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) Ethereum по адресу `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) по адресу `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`

**Поддерживаемые ID ценовых потоков в Mezo:**

| Пара | ID ценового потока |
|------|---------------|
| SolvBTC/USD | `0xf253cf87dc7d5ed5aa14cba5a6e79aee8bcfaef885a0e1b807035a0bbecc36fa` |
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| MEZO/USD | `0x80beaaedbdd228e77c5d62dfcd74b0305674b7e27a5cc6a46e71bd3a696826df` |
| BTC/USD | `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43` |
| cbBTC/USD | `0x2817d7bfe5c64b8ea956e9a26f573ef64e72e4d7891f2d6af9bcc93f7aff9a97` |
| USDC/USD | `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |
| T/USD | `0x7a072b799215196b0ecb6a58636ec312bce8461dcc33c28c3a046b1e636d121d` |
| NVDA/USD | `0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593` |
| GOOGL/USD | `0x5a48c03e9b9cb337801073ed9d166817473697efff0d138874e0f6a33d6d5aa6` |
| TSLA/USD | `0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1` |
| MSTR/USD | `0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09` |
| COIN/USD | `0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245` |
| CRCL/USD | `0x92b8527aabe59ea2b12230f7b532769b133ffb118dfbd48ff676f14b273f1365` |

**Поддерживаемые ID ценовых потоков в Ethereum:**

| Пара | ID ценового потока |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Запрос дополнительных ценовых потоков:** чтобы подключить дополнительные ценовые потоки Pyth, изучите полный список доступных [ID ценовых потоков](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) и свяжитесь с командой Mezo, чтобы запросить их ончейн-активацию.
