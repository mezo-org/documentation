---
title: Mezo Pools
topic: developers
---
Met Mezo Pools kunnen gebruikers tokens swappen en liquiditeit verschaffen via geoptimaliseerde poolmechanismen. Mezo ondersteunt twee poolarchitecturen: **basic pools** (AMM's met constant product en stable curve) en **pools met geconcentreerde liquiditeit (CL)** met aangepaste prijsbereiken.

## Basic pools

Basic pools gebruiken een AMM in Aerodrome-stijl met prijsvorming via constant product (volatiel) of stable curve (stabiel).

- **Poolfactory:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Swapkosten:** 0,30% voor volatiele pools, 0,02% voor stabiele pools
- **Type positie:** fungibele LP-tokens (ERC-20)

### Ondersteunde basic pools

| Pool | Type | Adres |
|------|------|---------|
| MUSD/BTC | Volatiel | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Stabiel | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Stabiel | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Swapflow bij basic pools

**Routercontract:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. De gebruiker keurt het token goed voor de router
2. Roep `swapExactTokensForTokens(...)` van de router aan met een path-array
3. Het outputtoken wordt naar de wallet teruggestuurd

## Pools met geconcentreerde liquiditeit (CL)

Met CL-pools kunnen liquiditeitsverschaffers storten binnen aangepaste prijsbereiken, zodat kapitaal wordt geconcentreerd waar de handel plaatsvindt. De CL-implementatie van Mezo is gebaseerd op [Slipstream van Velodrome](https://velodrome.finance/docs/slipstream).

- **CL-factory:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Type positie:** niet-fungibel (ERC-721-NFT's via NonfungiblePositionManager)
- **Prijsmodel:** `sqrtPriceX96` (Q64.96 fixed-point), hetzelfde als bij Uniswap V3

### Ondersteunde CL-pools

| Pool | Tick spacing | Standaardtarief | Adres |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0,30% | Zie de explorer |

### Tick spacing en kosten

CL-pools worden aangemaakt met een specifieke tick spacing die bepaalt hoe fijnmazig de prijsbereiken zijn. Pools met een tick spacing onder 100 gelden als stabiel; vanaf 100 gelden ze als volatiel.

| Tick spacing | Standaardtarief |
|---|---|
| 1 | 0,01% |
| 10 | 0,05% |
| 50 | 0,05% |
| 100 | 0,05% |
| 200 | 0,30% |
| 2.000 | 1,00% |

Aangepaste tarieven kun je instellen via een inplugbare `swapFeeModule` op de factory. Een `unstakedFeeModule` bepaalt welk deel van de swapvergoedingen van niet-gestakete naar gestakete posities wordt doorgesluisd (standaard: 10%).

### Swapflow bij CL-pools

**CL-swaprouter:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. De gebruiker keurt het token goed voor de CL-swaprouter
2. Roep `exactInputSingle(...)` of `exactInput(...)` aan met de poolsleutel (token0, token1, tickSpacing) en de swapparameters
3. Het outputtoken wordt naar de wallet teruggestuurd

### CL-posities beheren

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Posities worden beheerd als ERC-721-NFT's. De belangrijkste bewerkingen:

- `mint(...)`: maak een nieuwe positie aan met een prijsbereik (tickLower, tickUpper) en stort tokens
- `increaseLiquidity(...)`: voeg meer liquiditeit toe aan een bestaande positie
- `decreaseLiquidity(...)`: haal liquiditeit uit een positie
- `collect(...)`: claim opgebouwde swapvergoedingen

### Staking en gauges

CL-posities kunnen in gauges worden gestaket voor MEZO-emissies. Gestakete liquiditeit binnen het bereik verdient zowel swapvergoedingen als emissies. Het mechanisme voor niet-gestakete vergoedingen sluist een deel van de vergoedingen van niet-gestakete posities door naar gestakete posities.

- **CL-gaugefactory:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Belangrijkste functies

- **Slippagebeheer:** via de frontend of via de parameters `amountOutMinimum` / `sqrtPriceLimitX96`
- **Ingebouwd TWAP-orakel:** elke CL-pool houdt een orakel bij voor de tijdgewogen gemiddelde prijs
- **Dynamische tarieven:** inplugbare kostenmodules voor eigen tarieflogica per pool

## Contractadressen

### Mainnet: contracten voor basic pools

| Naam | Adres |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC-pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC-pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT-pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet: CL-contracten

| Naam | Adres |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (implementatie) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (implementatie) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet: governancecontracten

| Naam | Adres |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet: contracten voor basic pools

| Naam | Adres |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC-pool | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC-pool | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT-pool | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet: CL-contracten

| Naam | Adres |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (implementatie) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (implementatie) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet: governancecontracten

| Naam | Adres |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
