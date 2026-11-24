---
title: Marktdaten mit Orakeln lesen
description: >-
  So greifen Sie mit der Orakel-Infrastruktur von Mezo auf Marktdaten zu und
  interpretieren sie.
topic: developers
---

Mezo stellt Marktdaten über zwei Orakelsysteme bereit: [Skip Connect](https://docs.skip.build/connect/introduction) für BTC/USD und [Pyth Network](https://docs.pyth.network/home) für weitere Preisfeeds.

## Übersicht

### Skip-Orakel

Das Skip-Orakel bietet native BTC/USD-Preisfeeds auf Mezo über eine Chainlink-kompatible Aggregator-Schnittstelle.

- **Unterstütztes Paar:** Nur BTC/USD
- **Aktualisierungsfrequenz:** Bei jedem Block
- **Schnittstelle:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth-Orakel

Das Pyth-Orakel bietet zahlreiche Preisfeeds über BTC/USD hinaus.

**Aktualisierungsfrequenz:** Abhängig vom Token-Paar.

- Details zu Mezo finden Sie in der [Konfigurationsdatei](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml).
- Details zu Ethereum finden Sie in der [Konfigurationsdatei](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml).

Der Preis wird aktualisiert, wenn `price_deviation` um mehr als einen festgelegten Schwellenwert (in Prozentpunkten) abweicht, spätestens jedoch alle `time_difference` Sekunden – je nachdem, was zuerst eintritt.

## Best Practices

Wenn Sie dApps entwickeln, die Orakeldaten nutzen, beachten Sie diese Richtlinien:

- **Aktualität validieren:** Überprüfen Sie immer Zeitstempel und Blocknummern, um veraltete Daten zu erkennen. Legen Sie für Ihren Anwendungsfall geeignete Schwellenwerte fest, ab denen Daten als veraltet gelten.
- **Preisgrenzen setzen:** Implementieren Sie Plausibilitätsprüfungen für Preiswerte, um Anomalien oder Manipulationsversuche zu erkennen.
- **Marktbedingungen überwachen:** Achten Sie auf Volatilität, Liquidität und potenzielle Manipulationsereignisse, die ein Pausieren Ihrer Anwendung erfordern könnten.
- **Sicherheitsaudits:** Stellen Sie sicher, dass Ihre Contracts und Abhängigkeiten Sicherheitsstandards erfüllen. Auditieren Sie Code, der Orakeldaten verarbeitet, um Exploits zu verhindern.

## Preisfeeds lesen

### Skip-Orakel verwenden (BTC/USD)

Das Skip-Orakel implementiert eine Chainlink-kompatible Schnittstelle. Rufen Sie `latestRoundData()` auf, um den neuesten Preis abzurufen:

**Contract:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Rückgabewerte:**

- `roundId`: Die ID der Runde, in der der Preis aktualisiert wurde
- `answer`: Der BTC/USD-Preis (verwenden Sie `decimals()`, um die Dezimalpräzision zu erhalten)
- `startedAt`: Unix-Zeitstempel des Rundenbeginns
- `updatedAt`: Unix-Zeitstempel der letzten Aktualisierung der Runde

### Pyth-Orakel verwenden (mehrere Feeds)

Pyth bietet zahlreiche Preisfeeds über seine EVM-Contracts. Verwenden Sie `getPriceNoOlderThan(pair_id, maxAgeSeconds)`, um Preise mit integrierten Aktualitätsprüfungen abzurufen.

**Contract Mezo Mainnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Mezo Testnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Ethereum Mainnet:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Contract Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Beispiel zum Abrufen des Preises für eine bestimmte Preisfeed-ID:**

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

**Referenz:** [Dokumentation](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan) der getPriceNoOlderThan-API

## Offchain-Preisdaten

Sie können Preisfeeds und Metadaten direkt vom Pyth Network abfragen, ohne mit der Blockchain zu interagieren:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **Preisfeed-IDs:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Verfügbare Preisfeeds

### Skip-Orakel-Feeds

Verfügbar auf Mezo Mainnet und Testnet:

| Paar | Contract-Adresse | Netzwerk |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**Node-API (nur Testnet):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth-Orakel-Feeds

Verfügbar auf:

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) unter `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) unter `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) unter `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) unter `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**Unterstützte Preisfeed-IDs auf Mezo:**

| Paar | Preisfeed-ID |
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

**Unterstützte Preisfeed-IDs auf Ethereum:**

| Paar | Preisfeed-ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Zusätzliche Preisfeeds anfordern:** Um zusätzliche Pyth-Preisfeeds zu aktivieren, durchsuchen Sie die vollständige Liste der verfügbaren [Preisfeed-IDs](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) und wenden Sie sich an das Mezo-Team, um die Aktivierung onchain zu beantragen.
