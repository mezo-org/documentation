---
title: Aperçu de veMEZO
description: Verrouiller des MEZO pour booster votre pouvoir de vote et gagner des rebases
topic: users
---

veMEZO est la représentation tokenisée (NFT) des MEZO verrouillés sur le réseau Mezo. Verrouiller des MEZO vous permet de booster jusqu'à 5x le pouvoir de vote de vos veBTC, ce qui amplifie vos gains, et de gagner des rebases anti-dilution via les émissions de MEZO.

## Qu'est-ce que veMEZO ?

Lorsque vous verrouillez des MEZO sur Mezo, vous recevez un NFT veMEZO qui représente votre position verrouillée. Ce NFT vous donne :

- un multiplicateur de boost sur le pouvoir de vote de vos veBTC (jusqu'à 5x) ;
- des récompenses de rebase issues des émissions hebdomadaires de MEZO pour compenser la dilution ;
- la participation au marché d'appariement pour gagner des incentives (incitations) auprès des détenteurs de veBTC ;
- des votes sur les [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges), qui orientent les émissions de MEZO vers les pools MUSD sur Curve, Uniswap et Aerodrome.

:::note[Important]
veMEZO ne vote pas seul sur les **gauges de staking** : il se contente d'y multiplier le pouvoir de vote des positions veBTC. Il vote en revanche de plein droit sur les gauges de boost veBTC et sur les [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## Fonctionnement du poids veMEZO

Votre poids veMEZO dépend de deux facteurs : la quantité de MEZO verrouillés (plus de MEZO = plus de poids) et la durée de votre verrouillage (verrouillage plus long = poids plus élevé dans la durée).

Votre poids décroît de manière linéaire au fil du temps. Un utilisateur qui verrouille 1 000 MEZO pendant 4 ans commence avec un poids de 1 000 veMEZO, qui décroît à 500 au bout de 2 ans et atteint 0 à l'expiration. Vous pouvez prolonger votre verrouillage à tout moment pour conserver la totalité de votre poids.

Vous pouvez également activer le verrouillage maximum automatique (auto-max lock) de vos veMEZO, ce qui vous permet de conserver à chaque époque le poids de vote maximal correspondant à 4 ans, sans avoir à reverrouiller vos jetons en permanence.

### Paramètres de verrouillage

| Paramètre | Valeur |
|---|---|
| Verrouillage minimum | 1 semaine |
| Verrouillage maximum | 4 ans (1 456 jours) |
| Décroissance du verrouillage | Linéaire : le poids diminue en continu jusqu'à atteindre zéro |

---

## Ce que vous gagnez

### Récompenses de rebase (tous les détenteurs de veMEZO)

Les détenteurs de veMEZO reçoivent une part des émissions hebdomadaires de MEZO sous forme de rebases. Cela les protège contre la dilution due aux nouvelles émissions. La part consacrée aux rebases est dynamique : plus élevée lorsque peu de jetons sont verrouillés, plus faible à mesure que davantage de MEZO sont verrouillés.

### Incentives (via le marché d'appariement)

Les détenteurs de veMEZO peuvent voter sur des gauges veBTC pour gagner des incentives. Lorsqu'un détenteur de veBTC souhaite booster sa position mais ne dispose pas de suffisamment de veMEZO, il peut publier des incentives sur son gauge veBTC. En votant pour ce gauge, vous gagnez ces incentives en échange du boost que vous apportez.

Consultez la page [Mécanisme de boost](/docs/fr/docs/users/mezo-earn/lock/vemezo/boost-mechanism) pour savoir en détail comment fonctionne le marché d'appariement.

---

## veMEZO et veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Actif sous-jacent | BTC | MEZO |
| Verrouillage maximum | 28 jours | 4 ans |
| Pouvoir de vote | Pouvoir de vote de base | Multiplie le pouvoir de veBTC (jusqu'à 5x) |
| Gagne des frais | Oui (pont, swap, MUSD) | Non |
| Gagne des rebases | Non | Oui |
| Gagne des incentives | Oui (issus des gauges pour lesquels vous votez) | Oui (issus des gauges de boost veBTC) |
