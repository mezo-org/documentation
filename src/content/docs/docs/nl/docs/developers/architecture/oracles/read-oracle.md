---
title: Marktgegevens lezen met orakels
description: >-
  Zo raadpleeg en interpreteer je marktgegevens met de orakelinfrastructuur van
  Mezo.
topic: developers
---

Mezo biedt marktgegevens via twee orakelsystemen: [Skip Connect](https://docs.skip.build/connect/introduction) voor BTC/USD en [Pyth Network](https://docs.pyth.network/home) voor aanvullende prijsfeeds.

## Overzicht

### Skip-orakel

Het Skip-orakel biedt native BTC/USD-prijsfeeds op Mezo via een Chainlink-compatibele aggregator-interface.

- **Ondersteund paar:** Alleen BTC/USD
- **Updatefrequentie:** Elk blok
- **Interface:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth-orakel

Het Pyth-orakel biedt meerdere prijsfeeds naast BTC/USD.

**Updatefrequentie:** Afhankelijk van het tokenpaar.

- Details voor Mezo vind je in het [configuratiebestand](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml).
- Details voor Ethereum vind je in het [configuratiebestand](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml).

De prijs wordt bijgewerkt wanneer de `price_deviation` meer dan een ingestelde drempel (in procentpunten) afwijkt of elke `time_difference` seconden, afhankelijk van wat het eerst optreedt.

## Best practices

Volg deze richtlijnen als je dApps bouwt die orakelgegevens gebruiken:

- **Versheid valideren:** Controleer altijd tijdstempels en bloknummers om verouderde gegevens te detecteren. Stel verouderingsdrempels in die passen bij jouw toepassing.
- **Prijsgrenzen instellen:** Implementeer plausibiliteitscontroles op prijswaarden om anomalieën of manipulatiepogingen te detecteren.
- **Marktomstandigheden monitoren:** Houd rekening met volatiliteit, liquiditeit en mogelijke manipulatie, waardoor je je applicatie misschien moet pauzeren.
- **Beveiligingsaudits:** Zorg ervoor dat je contracten en afhankelijkheden aan beveiligingsnormen voldoen. Laat code die orakelgegevens verwerkt auditen om exploits te voorkomen.

## Prijsfeeds lezen

### Skip-orakel gebruiken (BTC/USD)

Het Skip-orakel implementeert een Chainlink-compatibele interface. Roep `latestRoundData()` aan om de laatste prijs op te halen:

**Contract:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Retourwaarden:**

- `roundId`: De ronde-ID waarin de prijs werd bijgewerkt
- `answer`: De BTC/USD-prijs (gebruik `decimals()` om de decimale precisie te krijgen)
- `startedAt`: Unix-tijdstempel van het begin van de ronde
- `updatedAt`: Unix-tijdstempel van de laatste update van de ronde

### Pyth-orakel gebruiken (meerdere feeds)

Pyth biedt meerdere prijsfeeds via zijn EVM-contracten. Gebruik `getPriceNoOlderThan(pair_id, maxAgeSeconds)` om prijzen op te halen met ingebouwde versheidscontroles.

**Contract Mezo Mainnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Mezo Testnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Ethereum Mainnet:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Contract Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Voorbeeld om de prijs op te halen voor een gegeven prijs-ID:**

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

**Referentie:** getPriceNoOlderThan API-[documentatie](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan)

## Offchain-prijsgegevens

Je kunt prijsfeeds en metadata rechtstreeks van het Pyth Network opvragen zonder interactie met de blockchain:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **Prijsfeed-ID's:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Beschikbare prijsfeeds

### Skip-orakelfeeds

Beschikbaar op zowel Mezo Mainnet als Testnet:

| Paar | Contractadres | Netwerk |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**Node API (alleen testnet):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth-orakelfeeds

Beschikbaar op:

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) op `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) op `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) op `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) op `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**Ondersteunde prijsfeed-ID's Mezo:**

| Paar | Prijsfeed-ID |
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

**Ondersteunde prijsfeed-ID's Ethereum:**

| Paar | Prijsfeed-ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Aanvullende prijsfeeds aanvragen:** Wil je extra Pyth-prijsfeeds inschakelen? Bekijk dan de volledige lijst met beschikbare [prijsfeed-ID's](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) en neem contact op met het Mezo-team om onchain-activering aan te vragen.
