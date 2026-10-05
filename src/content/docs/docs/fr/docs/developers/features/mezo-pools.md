---
title: Mezo Pools
topic: developers
---
Mezo Pools permet aux utilisateurs d'échanger des jetons et de fournir de la liquidité grâce à des mécanismes de pool optimisés. Mezo prend en charge deux architectures de pool : les **pools basiques** (AMM à produit constant et à courbe stable) et les **pools à liquidité concentrée (CL)** avec des plages de prix personnalisées.

## Pools basiques

Les pools basiques utilisent un AMM de type Aerodrome avec une tarification soit à produit constant (volatil), soit à courbe stable (stable).

- **Pool Factory :** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Frais de swap :** 0,30 % pour les pools volatils, 0,02 % pour les pools stables
- **Type de position :** jetons LP fongibles (ERC-20)

### Pools basiques pris en charge

| Pool | Type | Adresse |
|------|------|---------|
| MUSD/BTC | Volatil | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Stable | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Stable | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Flux de swap basique

**Contrat router :** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. L'utilisateur approuve le jeton pour le router
2. Appel de la fonction `swapExactTokensForTokens(...)` du router avec un tableau de chemin (path)
3. Le jeton de sortie est renvoyé vers le portefeuille

## Pools à liquidité concentrée (CL)

Les pools CL permettent aux fournisseurs de liquidité de déposer dans des plages de prix personnalisées, en concentrant le capital là où les échanges ont lieu. L'implémentation CL de Mezo est basée sur [Slipstream de Velodrome](https://velodrome.finance/docs/slipstream).

- **CL Factory :** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Type de position :** non fongible (NFT ERC-721 via NonfungiblePositionManager)
- **Modèle de prix :** `sqrtPriceX96` (virgule fixe Q64.96), comme dans Uniswap V3

### Pools CL pris en charge

| Pool | Tick spacing | Frais par défaut | Adresse |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0.30% | Voir l'explorateur |

### Tick spacing et frais

Les pools CL sont créés avec un tick spacing (espacement des ticks) spécifique qui détermine la granularité des plages de prix. Les pools dont le tick spacing est inférieur à 100 sont classés comme stables ; ceux à partir de 100 sont volatils.

| Tick spacing | Frais par défaut |
|---|---|
| 1 | 0.01% |
| 10 | 0.05% |
| 50 | 0.05% |
| 100 | 0.05% |
| 200 | 0.30% |
| 2,000 | 1.00% |

Des frais personnalisés peuvent être définis via un `swapFeeModule` enfichable sur la factory. Un `unstakedFeeModule` contrôle la part des frais de swap redirigée des positions non stakées vers les positions stakées (par défaut : 10 %).

### Flux de swap CL

**CL Swap Router :** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. L'utilisateur approuve le jeton pour le CL swap router
2. Appel de `exactInputSingle(...)` ou `exactInput(...)` avec la clé du pool (token0, token1, tickSpacing) et les paramètres du swap
3. Le jeton de sortie est renvoyé vers le portefeuille

### Gestion des positions CL

**NonfungiblePositionManager :** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Les positions sont gérées sous forme de NFT ERC-721. Opérations principales :

- `mint(...)` — crée une nouvelle position avec une plage de prix (tickLower, tickUpper) et dépose des jetons
- `increaseLiquidity(...)` — ajoute de la liquidité à une position existante
- `decreaseLiquidity(...)` — retire de la liquidité d'une position
- `collect(...)` — réclame les frais de swap accumulés

### Staking et gauges

Les positions CL peuvent être stakées dans des gauges pour recevoir des émissions de MEZO. La liquidité stakée dans la plage de prix active rapporte à la fois des frais de swap et des émissions. Le mécanisme de frais non stakés redirige une partie des frais des positions non stakées vers les positions stakées.

- **CL Gauge Factory :** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Fonctionnalités clés

- **Contrôle du slippage :** fourni dans le frontend ou via les paramètres `amountOutMinimum` / `sqrtPriceLimitX96`
- **Oracle TWAP intégré :** chaque pool CL maintient un oracle de prix moyen pondéré dans le temps
- **Frais dynamiques :** modules de frais enfichables pour une logique de frais personnalisée par pool

## Adresses des contrats

### Mainnet — contrats des pools basiques

| Nom | Adresse |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| Pool MUSD/BTC | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| Pool MUSD/mUSDC | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| Pool MUSD/mUSDT | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet — contrats CL

| Nom | Adresse |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (implémentation) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (implémentation) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet — contrats de gouvernance

| Nom | Adresse |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet — contrats des pools basiques

| Nom | Adresse |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| Pool MUSD/BTC | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| Pool MUSD/mUSDC | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| Pool MUSD/mUSDT | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet — contrats CL

| Nom | Adresse |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (implémentation) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (implémentation) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet — contrats de gouvernance

| Nom | Adresse |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
