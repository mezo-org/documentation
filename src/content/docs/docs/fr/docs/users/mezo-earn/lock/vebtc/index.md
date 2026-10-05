---
title: Aperçu de veBTC
description: Verrouiller des BTC pour gagner des revenus avec veBTC
topic: users
---

veBTC est la représentation tokenisée (NFT) des BTC verrouillés sur le réseau Mezo. Verrouiller des BTC vous confère un pouvoir de gouvernance et une part des frais du protocole.

## Qu'est-ce que veBTC ?

Lorsque vous verrouillez des BTC sur Mezo, vous recevez un NFT veBTC qui représente votre position verrouillée. Ce NFT vous donne :

- un **pouvoir de vote** pour orienter les émissions dans l'ensemble de l'écosystème ;
- des **frais du protocole** issus de l'activité de la chaîne et des transferts via le pont ;
- des **droits de gouvernance** pour façonner l'avenir économique de Mezo.

---

## Fonctionnement du pouvoir de vote

Le poids de votre veBTC dépend de deux facteurs : la quantité de BTC verrouillés (plus de BTC = plus de pouvoir de vote) et la durée de votre verrouillage (verrouillage plus long = poids plus élevé dans la durée).

Votre pouvoir de vote décroît de manière linéaire au fil du temps. Un utilisateur qui verrouille 1 BTC pendant 28 jours commence avec 1 veBTC, qui décroît à 0,5 au bout de 14 jours et atteint 0 à l'expiration. Vous pouvez prolonger votre verrouillage à tout moment pour conserver la totalité de votre pouvoir de vote.

### Paramètres de verrouillage

| Paramètre | Valeur |
|-----------|-------|
| Verrouillage minimum | 1 jour |
| Verrouillage maximum | 28 jours |
| Décroissance du verrouillage | Linéaire : le poids diminue en continu jusqu'à atteindre zéro |

---

## Ce que vous gagnez

### Revenus passifs (tous les détenteurs de veBTC)

Tous les détenteurs de veBTC reçoivent automatiquement une part des **frais de la chaîne et du pont**, proportionnelle à leur poids de vote. Il s'agit d'un rendement passif qui s'accumule du simple fait de détenir des veBTC, sans qu'aucun vote soit nécessaire.

### Revenus actifs (vote requis)

En [votant pour des gauges](/docs/fr/docs/users/mezo-earn/vote), vous gagnez des récompenses supplémentaires en fonction de votre allocation de vote :

- des **frais de swap** issus des pools pour lesquels vous votez (lorsque des LP stakent dans ces gauges) ;
- des **revenus d'intérêts/de frais MUSD** si vous votez pour le gauge MUSD Savings Rate ;
- des **incentives** (incitations) que des protocoles ou des utilisateurs publient pour attirer des votes vers des gauges spécifiques.

Plus vous allouez de poids de vote à un gauge, plus votre part des frais et des incentives de ce gauge est importante.

:::note[Important]
Votre allocation est conservée d'une époque à l'autre et continue de générer des revenus jusqu'à ce que vous la modifiiez : vous n'avez pas besoin de revoter chaque semaine. Consultez la section [Époques](#époques) ci-dessous.
:::


---

## Époques

Mezo Earn fonctionne par **cycles de 7 jours appelés époques**. Chaque époque commence le jeudi à 00:00 UTC.

### Pourquoi les époques sont importantes

- **Les votes sont conservés.** Votre allocation est reportée d'une époque à l'autre jusqu'à ce que vous la modifiiez ou la réinitialisiez. Chaque verrouillage ne peut voter qu'une fois par époque : une allocation confirmée ne peut donc pas être modifiée avant le prochain changement d'époque.
- **Les votes exprimés pendant l'époque N** déterminent l'allocation des émissions pour l'époque N+1
- **Les frais générés pendant l'époque N** sont distribués en fonction des votes exprimés pendant l'époque N

### Durée de verrouillage et alignement sur les époques

Les durées de verrouillage sont alignées sur les limites des époques, et non sur les jours calendaires. Lorsque vous créez un verrouillage, **sa durée est arrondie à la semaine complète inférieure**.

Cela signifie que :

- un verrouillage de 28 jours créé en milieu d'époque aura une durée effective d'environ 21 à 28 jours, selon le moment où vous verrouillez ;
- les verrouillages expirent toujours lors d'un changement d'époque (jeudi 00:00 UTC).

**Exemple :** si vous sélectionnez un verrouillage maximum de 28 jours en milieu d'époque, la durée effective de votre verrouillage sera réduite en fonction du temps restant dans la semaine, ce qui donne un verrouillage d'environ 21 à 28 jours selon le moment où vous verrouillez.

Cette normalisation garantit que tous les verrouillages expirent proprement aux limites des époques et simplifie le calcul des poids de vote dans l'ensemble du système.

| Paramètre d'époque | Valeur |
|-----------------|-------|
| Durée | 7 jours |
| Heure de début | Jeudi 00:00 UTC |
| Alignement du verrouillage | Arrondi à la semaine complète inférieure |
