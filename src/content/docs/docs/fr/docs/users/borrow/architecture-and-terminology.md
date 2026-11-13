---
title: Architecture et terminologie de MUSD
description: >-
  Analyse approfondie de la conception du système et de la terminologie
  fondamentale de MUSD sur Mezo.
topic: users
---

Le système [MUSD](https://mezo.org/feature/musd) se compose de quatre grands groupes de contrats :

| Groupe de contrats | Rôle |
| --- | --- |
| **Jeton (MUSD)** | Le stablecoin au cœur du système, conçu pour maintenir un ancrage au dollar américain |
| **Protocole central** | Gère l'ouverture et la clôture des positions, la gestion de la garantie et le maintien de la stabilité du système |
| **Pools d'actifs** | Gèrent les différents pools de garantie et de liquidité du système |
| **Contrats de support** | Fournissent des services essentiels comme les flux de prix, le tri des positions et la gestion de la valeur contrôlée par le protocole |

## Conservation et gestion de la garantie

Les positions MUSD peuvent être suivies onchain, et la garantie sous-jacente en Bitcoin est gérée de manière sécurisée grâce à l'infrastructure de conservation robuste et décentralisée de tBTC.

Vous pouvez consulter en temps réel l'ensemble des BTC qui adossent le MUSD sur l'explorateur de blocs Mezo :

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC, conçu par l'équipe à l'origine de Mezo, [Thesis*](https://thesis.co/?ref=blog.mezo.org), repose sur le [Threshold Network](https://threshold.network/?ref=blog.mezo.org). Threshold est un ensemble décentralisé de signataires qui exploite le pont Bitcoin de Threshold depuis début 2020 et a transféré avec succès plus de 28 000 bitcoins via ce pont. Les preuves de réserves de tBTC sont disponibles depuis la mise en service du pont et peuvent être consultées sur [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

Pour une analyse approfondie de tBTC, vous pouvez consulter le [rapport de recherche de Bitcoin Layers](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), qui compare tBTC à d'autres wrappers populaires comme WBTC et cbBTC. Une analyse des risques complémentaire a été réalisée par l'[équipe LlamaRisk](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) en amont de l'inscription de tBTC comme garantie sur Aave.

### Conservation par les contrats

Un utilisateur ouvre une position en appelant BorrowerOperations.openTrove, en fournissant des BTC et en demandant des MUSD. Les BTC sont acheminés vers l'ActivePool, où ils restent jusqu'à ce que l'une des actions suivantes se produise :

* L'utilisateur effectue un retrait (`BorrowerOperations.withdrawColl`)
* L'utilisateur rembourse sa dette (`BorrowerOperations.closeTrove`)
* La garantie est rachetée (`TroveManager.redeemCollateral`)
* La position est liquidée (`TroveManager.liquidate`)

Les positions liquidées sont soit couvertes par le StabilityPool, auquel cas les BTC sont transférés vers le Stability Pool, soit leur dette et leur garantie sont absorbées et redistribuées aux autres utilisateurs, auquel cas les BTC sont transférés vers le DefaultPool, d'où ils seront ensuite distribués.

## Emprunt à taux fixe

* Taux d'intérêt global : un taux d'intérêt global unique s'applique à tous les nouveaux prêts.
* Maintien des taux d'intérêt : une fois un prêt ouvert, il conserve le taux d'intérêt en vigueur lors de sa création, même si le taux global change. Le taux d'intérêt d'un prêt ne peut être mis à jour que par l'utilisateur, au moyen de la fonction de refinancement.

:::note
Les taux d'intérêt sont **fixes pendant toute la durée du prêt**. Le taux que vous obtenez à la création du prêt ne change jamais, sauf si vous choisissez de refinancer.
:::
* Fonction de refinancement : la fonction de refinancement permet aux utilisateurs d'aligner la dette de leur prêt sur le nouveau taux d'intérêt global. Cette opération entraîne des frais de refinancement, qui correspondent à un pourcentage configurable des frais d'émission. Le refinancement permet aux utilisateurs d'éviter tout mouvement de garantie, tout en payant des frais inférieurs à ceux qu'entraînerait la clôture puis la réouverture d'un prêt au taux mis à jour. Vous pouvez également refinancer pour augmenter votre ligne de crédit si la valeur du BTC a augmenté.
* Intérêts simples : les intérêts sont calculés selon un modèle d'intérêts simples plutôt que composés.
* Paiement des intérêts : les paiements d'intérêts sont dirigés vers le PCV (Protocol Controlled Value). L'allocation de ces paiements est soumise à la gouvernance et peut être répartie entre un destinataire arbitraire et le remboursement du prêt d'amorçage.

## Gouvernance complémentaire

* Contrôle par la gouvernance : le taux d'intérêt et d'autres paramètres critiques sont contrôlés par la gouvernance. Toute modification de ces paramètres nécessite une proposition de gouvernance et un délai minimal avant de pouvoir être appliquée.
* Propositions de taux d'intérêt : de nouveaux taux d'intérêt peuvent être proposés par la gouvernance. Ces propositions doivent être approuvées après un délai minimal afin de garantir la stabilité et la prévisibilité.

## Valeur contrôlée par le protocole (PCV)

Le contrat Protocol Controlled Value (PCV, valeur contrôlée par le protocole) est un composant clé du système, chargé de gérer les frais perçus sur les emprunts et les refinancements. Voici un aperçu du fonctionnement du PCV :

* Perception des frais : les frais d'emprunt et de refinancement sont dirigés vers le contrat PCV.
* Allocation des frais : les frais perçus par le PCV sont affectés au remboursement du prêt d'amorçage ou à l'envoi de fonds vers le système de gauges.
* Répartition soumise à la gouvernance : la répartition des frais entre le remboursement de la dette et le système de gauges est soumise à la gouvernance. Toutefois, tant que le prêt d'amorçage n'est pas entièrement remboursé, au plus 50 % des frais peuvent être envoyés vers le système de gauges.
* Après le remboursement de la dette : une fois le prêt d'amorçage entièrement remboursé, les frais s'accumulent sous forme de liquidité détenue par le protocole (Protocol-Owned Liquidity) dans le StabilityPool.

### Prêt d'amorçage du protocole

Le Stability Pool est amorcé grâce à un prêt du protocole adossé aux frais et intérêts futurs. Les MUSD frappés dans le cadre de ce prêt du protocole ne peuvent être utilisés que dans le Stability Pool. Tant que le prêt du protocole est en cours, au moins 50 % des intérêts et des frais facturés par le protocole servent à le rembourser.

## Définitions

- **Prêt :** position de dette garantie, liée à une seule adresse Ethereum. Également appelée « CDP » dans des protocoles similaires.

- **Garantie active :** montant de garantie enregistré dans la structure (struct) d'un prêt

- **Capital actif :** montant de la dette en MUSD enregistré dans la structure d'un prêt, hors intérêts

- **Intérêts actifs :** montant des intérêts en MUSD enregistré dans la structure d'un prêt

- **Dette active :** montant de la dette en MUSD enregistré dans la structure d'un prêt (capital actif plus intérêts actifs)

- **Garantie totale :** somme de la garantie active d'un prêt et de ses récompenses de garantie en attente, accumulées lors des distributions

- **Dette totale :** somme de la dette active d'un prêt et de ses récompenses de dette en attente, accumulées lors des distributions

- **Ratio de collatéralisation individuel (ICR) :** l'ICR d'un prêt est le rapport entre la valeur en dollars de sa garantie totale, au prix collatéral:USD actuel, et sa dette totale

- **Ratio de collatéralisation nominal (ICR nominal, NICR) :** l'ICR nominal d'un prêt correspond à sa garantie totale (exprimée dans l'actif de garantie) multipliée par 100e18 et divisée par sa dette totale.

- **Garantie totale du système :** somme de la garantie présente dans l'ActivePool et le DefaultPool

- **Dette totale du système :** somme de la dette présente dans l'ActivePool et le DefaultPool

- **Ratio de collatéralisation total (TCR) :** rapport entre la valeur en dollars de la garantie totale du système, au prix collatéral:USD actuel, et la dette totale du système

- **Ratio de collatéralisation critique (CCR) :** 150 %. Lorsque le TCR passe sous le CCR, le système entre en mode de récupération (Recovery Mode).

- **Rachat :** action d'échanger des jetons MUSD auprès du système contre une valeur équivalente de garantie. Tout compte détenant un solde de jetons MUSD peut les racheter, qu'il soit emprunteur ou non.

- **Liquidation :** action de clôturer de force un prêt insuffisamment garanti et de redistribuer sa garantie et sa dette. Lorsque le Stability Pool est suffisamment important, la dette liquidée est compensée par le Stability Pool, et la garantie est distribuée aux déposants. Si la dette liquidée ne peut pas être compensée par le pool, le système redistribue directement la garantie et la dette liquidées aux prêts actifs dont le ratio de collatéralisation est supérieur à 110 %. La fonctionnalité de liquidation est sans permission et accessible publiquement : n'importe qui peut liquider un prêt insuffisamment garanti, ou liquider des prêts par lots.

- **Surplus de garantie :** le surplus de garantie correspond à l'excédent de garantie des emprunteurs, qu'ils peuvent récupérer lorsque leur position a fait l'objet d'un rachat complet.

- **Compensation (offset) :** annulation de la dette liquidée au moyen des MUSD du Stability Pool, et attribution de la garantie liquidée aux déposants du Stability Pool, au prorata de leur dépôt.

- **Compensation de gaz :** remboursement en MUSD et en garantie versé automatiquement à l'appelant d'une fonction de liquidation, destiné à garantir que les liquidations restent rentables en période de tension sur les marchés. Le montant de 200 MUSD a été fixé en fonction des prix du gaz et des temps de bloc d'Ethereum. Ce mécanisme vise à ce que les liquidateurs ne soient pas dissuadés par des coûts de gaz potentiellement élevés.
