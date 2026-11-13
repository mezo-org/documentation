---
title: Frais des pools
description: Modèle de frais de Mezo Pools
topic: users
---

## Frais

[Mezo Pools](https://mezo.org/explore/pools) applique un modèle de frais dynamique, optimisé selon les paires échangées :

### Taux de frais standard

- **Pools volatils** : 0,30 %
- **Pools stables** : 0,02 %

### Frais de pool personnalisés

Certains pools peuvent avoir des taux de frais personnalisés fixés par la gouvernance. Ces taux spéciaux s'appliquent généralement aux :

- **pools de partenariats stratégiques** ;
- **pools promotionnels pendant les périodes de lancement** ;
- **paires de trading institutionnel à fort volume**.

### Mode de perception des frais

Lorsqu'un trader exécute un swap via un Mezo Pool :

1. **Prélèvement des frais** : les frais sont automatiquement déduits du montant du jeton d'entrée.
   - Exemple : un swap de 1 000 MUSD dans un pool stable entraîne le prélèvement de 0,2 MUSD de frais.
2. **Isolement immédiat** : les frais perçus sont immédiatement transférés vers un contrat PoolFees dédié.
   - Les frais ne se mélangent jamais aux réserves de liquidité principales du pool

### En quels jetons les frais sont-ils payés ?

Les frais sont toujours perçus dans le jeton vendu (jeton d'entrée) lors de chaque swap. En tant que LP, vous gagnez des frais dans les deux jetons de la paire :

- Lorsque des traders échangent le jeton A → le jeton B, les frais sont perçus en jeton A
- Lorsque des traders échangent le jeton B → le jeton A, les frais sont perçus en jeton B
- Vous accumulez et pouvez réclamer des frais dans les deux jetons, en fonction de votre part du pool

Exemple dans un pool MUSD/tBTC :

- Un trader échange MUSD → BTC : des MUSD sont perçus en frais (pour tous les LP)
- Un trader échange BTC → MUSD : des BTC sont perçus en frais (pour tous les LP)
- En tant que LP, vous percevez une part des frais en MUSD et en BTC

### Réclamer vos frais

1. Accédez à votre position dans l'interface de Mezo Pools
2. Cliquez sur **Claim Fees**
3. Confirmez la transaction
4. Les frais sont envoyés directement dans votre portefeuille

### Exemples de calcul des frais

#### Exemple 1 : pool volatil (BTC/MUSD)

- **Volume quotidien** : 1 000 000 $
- **Taux de frais** : 0,30 %
- **Frais générés par jour** : 3 000 $
- **Votre part** : 5 % du pool
- **Vos frais quotidiens** : ~150 $

#### Exemple 2 : pool stable (MUSD/USDC)

- **Volume quotidien** : 5 000 000 $
- **Taux de frais** : 0,02 %
- **Frais générés par jour** : 1 000 $
- **Votre part** : 2 % du pool
- **Vos frais quotidiens** : ~20 $

### FAQ

#### Dans quelle devise ou quel jeton les frais sont-ils payés ?
Les frais sont payés dans le jeton d'entrée de chaque swap (le jeton vendu). Dans un pool USDC/MEZO, les swaps de USDC → MEZO génèrent des frais en USDC, tandis que les swaps de MEZO → USDC génèrent des frais en MEZO. En tant que LP, vous accumulez et réclamez des frais dans les deux jetons.

#### Puis-je perdre les frais que j'ai accumulés ?
Non. Les frais sont stockés séparément dans des contrats PoolFees et ne peuvent être réclamés que par les détenteurs de jetons LP.

#### Les frais sont-ils capitalisés automatiquement ?
Non. Vous devez réclamer et redéposer les frais manuellement pour obtenir un effet de capitalisation.
