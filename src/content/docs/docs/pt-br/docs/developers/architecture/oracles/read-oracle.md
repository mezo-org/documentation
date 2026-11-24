---
title: Leitura de dados de mercado com oráculos
description: >-
  Como acessar e interpretar dados de mercado usando a infraestrutura de
  oráculos do Mezo.
topic: developers
---

O Mezo fornece dados de mercado por meio de dois sistemas de oráculos: [Skip Connect](https://docs.skip.build/connect/introduction) para BTC/USD e [Pyth Network](https://docs.pyth.network/home) para feeds de preço adicionais.

## Visão geral

### Oráculo Skip

O oráculo Skip fornece feeds de preço nativos BTC/USD no Mezo por meio de uma interface de agregador compatível com Chainlink.

- **Par compatível:** apenas BTC/USD
- **Frequência de atualização:** a cada bloco
- **Interface:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Oráculo Pyth

O oráculo Pyth fornece múltiplos feeds de preço além de BTC/USD.

**Frequência de atualização:** depende do par de tokens.

- No Mezo, veja o [arquivo de configuração](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml) para detalhes.
- No Ethereum, veja o [arquivo de configuração](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml) para detalhes.

O preço é atualizado quando `price_deviation` ultrapassa um limite definido (em pontos percentuais) ou a cada `time_difference` segundos, o que ocorrer primeiro.

## Boas práticas

Ao desenvolver dApps que consomem dados de oráculos, siga estas diretrizes:

- **Valide a atualidade:** sempre verifique timestamps e números de bloco para detectar dados obsoletos. Defina limites de obsolescência apropriados para seu caso de uso.
- **Defina limites de preço:** implemente verificações de sanidade nos valores de preço para detectar anomalias ou tentativas de manipulação.
- **Monitore condições de mercado:** esteja atento à volatilidade, liquidez e potenciais eventos de manipulação que podem exigir a pausa de sua aplicação.
- **Auditorias de segurança:** certifique-se de que seus contratos e dependências atendem aos padrões de segurança. Audite o código que lida com dados de oráculos para prevenir exploits.

## Leitura de feeds de preço

### Como usar o oráculo Skip (BTC/USD)

O oráculo Skip implementa uma interface compatível com Chainlink. Chame `latestRoundData()` para recuperar o preço mais recente:

**Contrato:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Valores de retorno:**

- `roundId`: o ID da rodada quando o preço foi atualizado
- `answer`: o preço BTC/USD (use `decimals()` para obter a precisão decimal)
- `startedAt`: timestamp Unix de quando a rodada começou
- `updatedAt`: timestamp Unix de quando a rodada foi atualizada pela última vez

### Como usar o oráculo Pyth (múltiplos feeds)

O Pyth fornece múltiplos feeds de preço por meio de seus contratos EVM. Use `getPriceNoOlderThan(pair_id, maxAgeSeconds)` para buscar preços com verificações de obsolescência integradas.

**Contrato Mezo Mainnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contrato Mezo Testnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contrato Ethereum Mainnet:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Contrato Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Exemplo para buscar o preço de um determinado ID de preço:**

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

**Referência:** [documentação](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan) da API getPriceNoOlderThan

## Dados de preço offchain

Você pode consultar feeds de preço e metadados diretamente da Pyth Network sem interagir com a blockchain:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **IDs dos feeds de preço:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Feeds de preço disponíveis

### Feeds do oráculo Skip

Disponíveis na mainnet e na testnet do Mezo:

| Par | Endereço do contrato | Rede |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**Node API (apenas Testnet):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Feeds do oráculo Pyth

Disponíveis em:

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) em `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) em `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) em `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) em `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**IDs de feeds de preço compatíveis no Mezo:**

| Par | ID do feed de preço |
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

**IDs de feeds de preço compatíveis no Ethereum:**

| Par | ID do feed de preço |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Como solicitar feeds de preço adicionais:** para habilitar feeds de preço Pyth adicionais, navegue pela lista completa de [IDs de feeds de preço](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) disponíveis e entre em contato com a equipe Mezo para solicitar a ativação onchain.
