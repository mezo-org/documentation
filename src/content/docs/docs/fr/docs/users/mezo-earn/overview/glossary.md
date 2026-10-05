---
title: Glossaire
description: Glossaire des termes de Mezo Earn
topic: users
---

Vous trouverez ci-dessous une liste de termes liés au système Mezo Earn.

---

## veBTC

BTC placés sous séquestre de vote (« vote-escrowed BTC »). Un NFT représentant des bitcoins verrouillés, qui confère un pouvoir de vote de base (multiplicateur de 1x) et des droits à percevoir des frais dans Mezo Earn. Le poids de vote décroît de manière linéaire sur la période de verrouillage. Le verrouillage maximum est de 28 jours.

## veMEZO

MEZO placés sous séquestre de vote (« vote-escrowed MEZO »). Un NFT représentant des jetons MEZO verrouillés, qui peut booster le pouvoir de vote de veBTC jusqu'à 5x et qui vote de plein droit sur les gauges de boost veBTC et les [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges). Il ne dispose d'aucun poids de gouvernance propre et ne peut pas voter sur les gauges de staking sans veBTC. Le verrouillage maximum est de 4 ans.

## Boost

Le multiplicateur appliqué à une position veBTC lorsque des votes veMEZO lui sont attribués. Sans boost, veBTC fonctionne à 1x. Avec le boost maximum, veBTC fonctionne à 5x. Le boost dépend de votre part relative du total de veBTC et du total de veMEZO dans le système.

## Poids boosté

Le poids de vote combiné lorsque veBTC et veMEZO sont appariés. Il se calcule en multipliant votre poids veBTC par votre multiplicateur de boost (entre 1x et 5x). Le poids boosté détermine votre part des frais et votre influence sur les émissions.

## Époque

Un cycle de 7 jours qui régit le vote et la distribution des récompenses. Les époques commencent chaque jeudi à 00:00 UTC.

## Gauge

Un contrat intelligent qui reçoit et distribue des récompenses en fonction des votes. Plus un gauge reçoit de poids de vote, plus sa part des récompenses pour cette époque est importante.

## Verrouillage

Le fait d'engager des BTC ou des MEZO pour une période déterminée afin de recevoir des veBTC ou des veMEZO. Les verrouillages plus longs confèrent un poids de vote initial plus élevé.

## Gauge de staking

Un gauge lié à un jeton de staking (comme les jetons LP ou les reçus d'épargne MUSD). Les stakers gagnent des émissions de MEZO ; les votants gagnent des frais de trading.

## Gauge de boost veBTC

Un gauge rattaché à un NFT veBTC spécifique. Les détenteurs de veMEZO votent sur ces gauges pour apporter un boost à cette position veBTC en échange d'incentives.

## Gauge sans staking

Un gauge sans jeton de staking, sur lequel on vote avec des veMEZO. Ses émissions sont acheminées vers une destination désignée par le gauge, au lieu d'être versées à des stakers sur Mezo. Voter sur un tel gauge est indépendant du vote sur les gauges veBTC et de l'appariement des boosts.

## MEZO Gauge

Un gauge sans staking qui oriente les émissions de MEZO vers des pools de liquidité MUSD hors de Mezo : Curve et Uniswap sur Ethereum, et Aerodrome sur Base. Consultez [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges).

## Poids de vote

L'influence dont dispose une position lors du vote pour des gauges. Pour veBTC, il se calcule ainsi : BTC verrouillés multipliés par la durée de verrouillage restante, divisés par la durée de verrouillage maximale. Pour veMEZO, la même formule s'applique, mais avec un verrouillage maximum de 4 ans.

## Décroissance

La réduction progressive du poids de vote à mesure qu'un verrouillage approche de son expiration. Elle peut être réinitialisée en prolongeant le verrouillage.

## Poke

Une transaction qui actualise le poids boosté d'une position veBTC. Elle est nécessaire après toute modification des votes veMEZO, toute prolongation de verrouillage ou tout ajout de BTC. Sans poke, les modifications de boost ne prennent pas effet.

## Marché d'appariement

Le mécanisme économique par lequel les détenteurs de veBTC peuvent attirer des votes veMEZO en publiant des incentives sur leurs gauges de boost, et les détenteurs de veMEZO peuvent obtenir du rendement en votant sur des gauges proposant des incentives attractifs.

## Incentives

Des récompenses (incitations) publiées sur des gauges pour attirer des votes. Des protocoles ou des utilisateurs déposent des incentives (sous la forme de n'importe quel jeton ERC-20) pour attirer du pouvoir de vote vers des gauges spécifiques.

## Rebase

Des distributions anti-dilution versées aux détenteurs de veMEZO. Lorsque le ratio de verrouillage (offre de veMEZO / offre totale de MEZO) est faible, une plus grande part des émissions est consacrée aux rebases, ce qui protège les premiers à verrouiller contre la dilution.

## Répartiteur

Un contrat (splitter) qui répartit les émissions entre deux destinations (par exemple, les validateurs et l'écosystème). Les ratios de répartition sont actuellement fixes et verrouillés par la gouvernance.

## MUSD

Le stablecoin adossé au bitcoin de Mezo. Les utilisateurs peuvent emprunter des MUSD en utilisant leurs BTC en garantie.

## Gauge MUSD Savings Rate

Un gauge de staking pour le coffre d'épargne MUSD. Les utilisateurs qui déposent des MUSD dans le coffre d'épargne peuvent staker leurs jetons de reçu pour gagner des émissions de MEZO, tandis que les votants sur ce gauge gagnent du rendement en MUSD.

## Émissions

Nouveaux jetons MEZO distribués à chaque époque aux gauges de staking, aux validateurs et aux détenteurs de veMEZO (sous forme de rebases). Les émissions suivent un calendrier de halving : 25 % annualisés de l'année 0 à l'année 2, puis une baisse jusqu'à environ 2 % après l'année 8.

## Répartiteur de chaîne

Le premier répartiteur de la hiérarchie des émissions. Il détermine le pourcentage des émissions attribué aux validateurs (initialement 20 %) par rapport au reste du système.

## Répartiteur d'écosystème

Le second répartiteur. Il oriente les émissions non destinées aux validateurs vers les gauges de staking. Ce ratio est actuellement fixe et verrouillé par la gouvernance.
