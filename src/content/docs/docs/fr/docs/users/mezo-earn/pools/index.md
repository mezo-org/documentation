---
title: Aperçu de Mezo Pools
description: Découvrez Mezo Pools et comment fournir de la liquidité
topic: users
---

Les [Mezo Pools](https://mezo.org/explore/pools) sont le moteur central de l'écosystème Mezo : ils fonctionnent comme des réserves de liquidité onchain automatisées pour Mezo Pools. Chaque pool contient une paire de deux jetons distincts, ce qui permet des échanges instantanés et décentralisés. Au lieu de s'appuyer sur un carnet d'ordres traditionnel pour faire correspondre acheteurs et vendeurs, les utilisateurs échangent directement avec la liquidité détenue dans le pool.

![Schéma de Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

Les [Mezo Pools](https://mezo.org/explore/pools) vous permettent de gagner des frais en fournissant de la liquidité pour les swaps de jetons. Lorsque vous déposez deux jetons dans un pool, les traders peuvent échanger l'un contre l'autre, et vous percevez une partie des frais de trading.

Lorsqu'un utilisateur dépose une valeur proportionnelle des jetons requis dans un pool, il devient fournisseur de liquidité (LP). Cette action est essentielle au fonctionnement du système, car elle approfondit la liquidité disponible et réduit le slippage (glissement de prix) pour les traders. En échange de leur contribution, les LP reçoivent des jetons LP. Ces jetons LP représentent la part au prorata d'un LP dans l'ensemble des actifs du pool. Ils donnent algorithmiquement droit à leur détenteur à une partie des frais de trading générés par le pool et servent de mécanisme pour racheter les actifs sous-jacents déposés.

Mezo propose trois types de pools, optimisés pour différents cas d'usage :

* **Pools volatils** : conçus pour les paires d'actifs dont les prix ne sont pas corrélés, comme BTC et MUSD.
* **Pools stables** : conçus pour les actifs dont les valeurs sont fortement corrélées, comme MUSD et USDC. Ils utilisent une formule spécialisée qui offre un slippage bien plus faible pour les échanges entre actifs similaires.
* **Pools de liquidité concentrée (CL)** : vous permettent de fournir de la liquidité dans une fourchette de prix personnalisée plutôt que sur toute la courbe, ce qui améliore considérablement l'efficacité du capital. Les positions CL sont représentées par des NFT (ERC-721) et non par des jetons LP fongibles. Consultez [Liquidité concentrée](/docs/fr/docs/users/mezo-earn/pools/concentrated-liquidity) pour plus de détails.

## Comprendre les jetons LP

Lorsque vous déposez des actifs dans un [Mezo Pool](https://mezo.org/explore/pools), le contrat frappe des jetons LP et vous les envoie. Il s'agit de jetons ERC20 standard qui quantifient votre part de propriété proportionnelle dans les réserves totales du pool.

Le nombre de jetons LP que vous recevez dépend de votre part du pool. Pour le tout premier dépôt dans un nouveau pool, ce montant est calculé comme sqrt(x * y), où x et y sont les quantités des deux jetons déposés.

Pour chaque swap exécuté via le pool, des frais de trading (par exemple 0,30 % dans les pools volatils) sont prélevés sur l'actif d'entrée. Ces frais sont immédiatement isolés dans un contrat distinct, où les fournisseurs de liquidité de ce pool peuvent les réclamer.

Pour récupérer votre part des actifs sous-jacents, vous devez « brûler » vos jetons LP ; en revanche, vous pouvez réclamer vos frais à tout moment. Lorsque vous réclamez les actifs que vous avez initialement déposés, vos jetons LP sont restitués au contrat intelligent en échange de votre part au prorata des deux jetons du pool.

## L'avantage de Mezo Pools

Le protocole Mezo a été conçu sans s'appuyer sur des structures financières traditionnelles comme les carnets d'ordres. Si les carnets d'ordres sont efficaces dans la finance centralisée, ils posent des difficultés importantes dans un environnement décentralisé : ils nécessitent souvent une gestion active par des teneurs de marché professionnels et une infrastructure centralisée pour héberger et faire correspondre les ordres.

Les [Mezo Pools](https://mezo.org/explore/pools) sont conçus spécifiquement pour un environnement décentralisé et tirent parti des atouts propres à la technologie blockchain :

* **Autonomes et sans permission** : chaque pool est un contrat intelligent en libre accès. Tout utilisateur ou toute application peut interagir avec lui sans permission en appelant des fonctions comme swap() pour échanger ou mint() pour fournir de la liquidité.
* **Fonctionnalités avancées** : un Mezo Pool fait office d'oracle TWAP (Time-Weighted Average Price, prix moyen pondéré dans le temps) onchain et fournit à d'autres protocoles des données de prix résistantes à la manipulation. Les pools prennent également en charge les prêts flash (flash loans), qui permettent des stratégies DeFi complexes en une seule transaction.

Ces avantages architecturaux constituent le fondement de la mission principale de Mezo : bâtir une économie circulaire robuste pour Bitcoin. En permettant aux utilisateurs de prendre leurs BTC, de les utiliser comme garantie (par exemple via Mezo Borrow pour frapper des MUSD), puis de déployer ces deux actifs dans des pools de liquidité, le protocole transforme Bitcoin, simple réserve de valeur passive, en un instrument actif générateur de rendement. Il en résulte une boucle autoentretenue dans laquelle la fourniture de liquidité génère non seulement des rendements pour l'utilisateur, mais approfondit aussi le marché des actifs adossés à Bitcoin, rendant l'ensemble de l'écosystème plus liquide et plus utile.

## Premiers pas

### Démarrer en 3 étapes simples

Prêt à devenir fournisseur de liquidité ? Il est facile de commencer. Rendez-vous sur [Mezo Pools](https://mezo.org/explore/pools) pour démarrer.

1. **Préparez vos actifs** : pour fournir de la liquidité, vous aurez besoin d'une valeur égale des deux actifs d'une paire (par exemple, `$50 of BTC` et `$50 of MUSD`).
   * Besoin de MUSD ? Frappez-en avec vos BTC sur Mezo Borrow.
   * Besoin d'autres actifs ou de MUSD ? Utilisez [Mezo Pools](https://mezo.org/explore/pools) pour les obtenir par échange.
2. **Ajoutez de la liquidité** : accédez à la [page Pools de Mezo Explore](https://mezo.org/explore/pools). Sélectionnez le pool souhaité, indiquez le montant que vous voulez déposer et confirmez la transaction. Vous recevrez dans votre portefeuille des jetons LP représentant votre part du pool.
3. **Stakez et gagnez (bientôt disponible)** : une fois le staking disponible, il vous suffira de revenir sur la [page Pools](https://mezo.org/explore/pools), de sélectionner votre position et de staker vos jetons LP pour commencer à gagner davantage de récompenses. Restez à l'écoute.

## Ressources pour les développeurs

Pour intégrer les [Mezo Pools](https://mezo.org/explore/pools) à votre application, consultez [Fournir de la liquidité](../../../developers/getting-started/) dans notre documentation pour développeurs.
