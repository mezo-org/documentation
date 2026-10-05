---
title: Lire les données de marché avec les oracles
description: >-
  Comment accéder aux données de marché et les interpréter à l'aide de
  l'infrastructure d'oracles de Mezo.
topic: developers
---

Mezo fournit des données de marché via deux systèmes d'oracles : [Skip Connect](https://docs.skip.build/connect/introduction) pour BTC/USD et [Pyth Network](https://docs.pyth.network/home) pour des flux de prix supplémentaires.

## Aperçu

### Oracle Skip

L'oracle Skip fournit des flux de prix natifs BTC/USD sur Mezo via une interface d'agrégateur compatible Chainlink.

- **Paire prise en charge :** BTC/USD uniquement
- **Fréquence de mise à jour :** à chaque bloc
- **Interface :** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Oracle Pyth

L'oracle Pyth fournit plusieurs flux de prix au-delà de BTC/USD.

**Fréquence de mise à jour :** dépend de la paire de jetons.

- Sur Mezo, voir le [fichier de configuration](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml) pour plus de détails.
- Sur Ethereum, voir le [fichier de configuration](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml) pour plus de détails.

Le prix est mis à jour lorsque `price_deviation` dévie de plus d'un seuil défini (en points de pourcentage) ou toutes les `time_difference` secondes, selon ce qui se produit en premier.

## Bonnes pratiques

Lors du développement de dApps qui consomment des données d'oracle, suivez ces directives :

- **Validez la fraîcheur :** vérifiez toujours les horodatages et les numéros de bloc pour détecter les données obsolètes. Définissez des seuils d'obsolescence appropriés pour votre cas d'utilisation.
- **Définissez des limites de prix :** implémentez des vérifications de cohérence sur les valeurs de prix pour détecter les anomalies ou les tentatives de manipulation.
- **Surveillez les conditions du marché :** soyez attentif à la volatilité, la liquidité et les événements de manipulation potentiels qui peuvent nécessiter la mise en pause de votre application.
- **Audits de sécurité :** assurez-vous que vos contrats et dépendances respectent les normes de sécurité. Auditez le code qui gère les données d'oracle pour prévenir les exploits.

## Lecture des flux de prix

### Utilisation de l'oracle Skip (BTC/USD)

L'oracle Skip implémente une interface compatible Chainlink. Appelez `latestRoundData()` pour récupérer le dernier prix :

**Contrat :** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Valeurs de retour :**

- `roundId` : l'ID du round lors duquel le prix a été mis à jour
- `answer` : le prix BTC/USD (utilisez `decimals()` pour obtenir la précision décimale)
- `startedAt` : horodatage Unix du début du round
- `updatedAt` : horodatage Unix de la dernière mise à jour du round

### Utilisation de l'oracle Pyth (flux multiples)

Pyth fournit plusieurs flux de prix via ses contrats EVM. Utilisez `getPriceNoOlderThan(pair_id, maxAgeSeconds)` pour récupérer les prix avec des vérifications d'obsolescence intégrées.

**Contrat Mezo Mainnet :** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contrat Mezo Testnet :** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contrat Ethereum Mainnet :** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Contrat Ethereum Sepolia :** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Exemple pour récupérer le prix d'un identifiant de prix donné :**

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

**Référence :** [documentation](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan) de l'API getPriceNoOlderThan

## Données de prix hors chaîne

Vous pouvez interroger les flux de prix et les métadonnées directement depuis le réseau Pyth sans interagir avec la blockchain :

- **Hermes API :** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **Identifiants des flux de prix :** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Flux de prix disponibles

### Flux de l'oracle Skip

Disponibles sur Mezo mainnet et testnet :

| Paire | Adresse du contrat | Réseau |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**API du nœud (Testnet uniquement) :** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Flux de l'oracle Pyth

Disponibles sur :

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) à `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) à `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) à `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) à `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**Identifiants des flux de prix pris en charge sur Mezo :**

| Paire | Identifiant du flux de prix |
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

**Identifiants des flux de prix pris en charge sur Ethereum :**

| Paire | Identifiant du flux de prix |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Demande de flux de prix supplémentaires :** pour activer des flux de prix Pyth supplémentaires, parcourez la liste complète des [identifiants de flux de prix](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) disponibles et contactez l'équipe Mezo pour demander l'activation onchain.
