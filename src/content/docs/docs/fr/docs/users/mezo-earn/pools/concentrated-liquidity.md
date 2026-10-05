---
title: Liquidité concentrée
description: >-
  Fournissez de la liquidité dans des fourchettes de prix personnalisées pour
  gagner plus de frais avec moins de capital.
topic: users
---

Les pools de liquidité concentrée (CL) vous permettent de déposer de la liquidité dans une fourchette de prix précise plutôt que sur l'ensemble des prix possibles. En concentrant votre capital là où les échanges ont réellement lieu, vous pouvez gagner nettement plus de frais par dollar déposé qu'avec les [pools basiques](/docs/fr/docs/users/mezo-earn/pools).

## En quoi la liquidité concentrée diffère des pools basiques

Dans un **pool basique**, votre liquidité est répartie uniformément sur toute la courbe de prix, de zéro à l'infini. La majeure partie de votre capital reste donc inactive dans des fourchettes de prix où aucun échange n'a jamais lieu.

Dans un **pool de liquidité concentrée**, vous choisissez une fourchette de prix, par exemple BTC entre 80 000 et 120 000 MUSD. La totalité de votre capital est active dans cette fourchette, ce qui le rend beaucoup plus efficace. En contrepartie, si le prix sort de votre fourchette, votre position cesse de générer des frais jusqu'à ce que le prix y revienne.

| | Pools basiques | Pools CL |
|---|---|---|
| **Fourchette de liquidité** | Courbe de prix complète (de 0 à l'infini) | Fourchette de prix personnalisée que vous définissez |
| **Efficacité du capital** | Plus faible : la majeure partie du capital est inactive | Plus élevée : tout le capital est actif dans la fourchette |
| **Type de position** | Jetons LP fongibles (ERC-20) | Positions NFT (ERC-721) |
| **Gestion** | Passive, une fois configurée | Nécessite une surveillance et un rééquilibrage |
| **Perte impermanente** | Standard | Amplifiée dans la fourchette choisie |

## Pools CL actifs

| Pool | Type | Tick spacing |
|---|---|---|
| BTC/MUSD-200 | Volatil concentré | 200 |

Rendez-vous sur [Mezo Pools](https://mezo.org/explore/pools) pour consulter les statistiques en direct, notamment la TVL, le volume, les frais et l'APR.

## Tick spacing

Les pools CL utilisent le **tick spacing** (espacement des ticks) pour définir la granularité des fourchettes de prix que vous pouvez fixer. Un tick spacing plus petit permet des fourchettes plus serrées (plus de précision), tandis qu'un tick spacing plus grand impose des fourchettes minimales plus larges.

Les pools sont classés comme **stables** (tick spacing inférieur à 100) ou **volatils** (tick spacing de 100 ou plus), selon la même convention que celle utilisée par Aerodrome.

| Tick spacing | Frais par défaut | Classification |
|---|---|---|
| 1 | 0.01% | Stable |
| 10 | 0.05% | Stable |
| 50 | 0.05% | Stable |
| 100 | 0.05% | Volatil |
| 200 | 0.30% | Volatil |
| 2,000 | 1.00% | Volatil |

Le pool BTC/MUSD-200 utilise un tick spacing de 200 avec des frais de swap de 0,30 %.

## Premiers pas (bientôt disponible)

1. Rendez-vous sur [Mezo Pools](https://mezo.org/explore/pools) et sélectionnez le pool CL auquel vous souhaitez fournir de la liquidité.
2. Choisissez votre fourchette de prix : définissez les prix minimum et maximum entre lesquels votre liquidité sera active.
3. Saisissez le montant de chaque jeton à déposer. Le ratio dépend du prix actuel par rapport à la fourchette choisie.
4. Vérifiez puis confirmez la transaction. Vous recevrez un NFT représentant votre position.

### Choisir une fourchette de prix (bientôt disponible)

- **Fourchette plus large** : génère des frais de manière plus régulière, mais avec une efficacité du capital moindre. Préférable pour une approche passive.
- **Fourchette plus étroite** : génère davantage de frais tant que le prix reste dans la fourchette, mais nécessite une surveillance et un rééquilibrage actifs. Le risque de sortir de la fourchette est plus élevé.
- **Le prix actuel doit se situer dans votre fourchette** : si le prix actuel est en dehors de votre fourchette, votre position sera entièrement constituée d'un seul jeton et ne générera pas de frais tant que le prix ne sera pas revenu dans la fourchette.

## Staker pour obtenir des émissions (bientôt disponible)

Les positions CL peuvent être stakées dans des gauges pour gagner des émissions de MEZO en plus des frais de trading. Les positions stakées perçoivent une plus grande part des frais de swap grâce au mécanisme des frais non stakés, qui redirige une partie des frais des positions non stakées vers les positions stakées.

Pour staker :

1. Accédez à votre position CL.
2. Cliquez sur **Stake** pour déposer le NFT de votre position dans le gauge.
3. Gagnez des émissions de MEZO tant que votre liquidité est dans la fourchette.

Les émissions sont distribuées proportionnellement à la liquidité stakée et située dans la fourchette. Si votre position sort de la fourchette, vous cessez de gagner des émissions jusqu'à ce que le prix y revienne.

## Frais

Les frais des pools CL fonctionnent de la même manière que ceux des pools basiques : ils sont prélevés sur le jeton d'entrée à chaque swap et s'accumulent pour que les fournisseurs de liquidité puissent les réclamer.

La différence essentielle : dans les pools CL, seules les positions qui sont **dans la fourchette** au moment du swap gagnent des frais. Les positions situées en dehors de la fourchette de prix active ne gagnent rien jusqu'à ce que le prix y revienne.

Consultez [Frais des pools](/docs/fr/docs/users/mezo-earn/pools/pools-fees) pour plus de détails sur le modèle de frais.

## Risques

### Perte impermanente

La liquidité concentrée **amplifie** la perte impermanente par rapport aux pools basiques. Comme votre capital est concentré dans une fourchette étroite, les variations de prix au sein de cette fourchette ont un impact plus important sur la proportion de jetons dans votre position. Plus votre fourchette est serrée, plus la perte impermanente potentielle est élevée.

### Risque de sortie de fourchette

Si le prix du marché sort de la fourchette choisie, votre position est entièrement convertie en un seul jeton et cesse de générer des frais ou des émissions. Vous devrez alors soit attendre que le prix revienne, soit retirer et repositionner votre liquidité.

### Risque lié aux contrats intelligents

Comme pour tous les contrats intelligents, un risque inhérent subsiste. Consultez les audits sur [mezo.org/audits](https://mezo.org/audits) et ne déposez que des montants avec lesquels vous êtes à l'aise.
