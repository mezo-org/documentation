---
title: Mezo Pools
description: Developer reference for Mezo Pools swaps and liquidity across basic and concentrated liquidity pool types.
topic: developers
---
Mezo Pools enable users to swap tokens and provide liquidity using optimized pool mechanics. Mezo supports two pool architectures: **basic pools** (constant-product and stable-curve AMMs) and **concentrated liquidity (CL) pools** with custom price ranges.

## Basic Pools

Basic pools use an Aerodrome-style AMM with either constant-product (volatile) or stable-curve (stable) pricing.

- **Pool Factory:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Swap Fees:** 0.30% for volatile pools, 0.02% for stable pools
- **Position Type:** Fungible LP tokens (ERC-20)

### Supported Basic Pools

| Pool | Type | Address |
|------|------|---------|
| MUSD/BTC | Volatile | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Stable | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Stable | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Basic Swap Flow

**Router Contract:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. User approves token to router
2. Call router's `swapExactTokensForTokens(...)` with path array
3. Output token returned to wallet

## Concentrated Liquidity (CL) Pools

CL pools allow liquidity providers to deposit within custom price ranges, concentrating capital where trading occurs. Mezo's CL implementation is based on [Velodrome's Slipstream](https://velodrome.finance/docs/slipstream).

- **CL Factory:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Position Type:** Non-fungible (ERC-721 NFTs via NonfungiblePositionManager)
- **Price Model:** `sqrtPriceX96` (Q64.96 fixed-point), same as Uniswap V3

### Supported CL Pools

| Pool | Tick Spacing | Default Fee | Address |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0.30% | See explorer |

### Tick Spacing and Fees

CL pools are created with a specific tick spacing that determines the granularity of price ranges. Pools with tick spacing below 100 are classified as stable; 100 and above are volatile.

| Tick Spacing | Default Fee |
|---|---|
| 1 | 0.01% |
| 10 | 0.05% |
| 50 | 0.05% |
| 100 | 0.05% |
| 200 | 0.30% |
| 2,000 | 1.00% |

Custom fees can be set via a pluggable `swapFeeModule` on the factory. An `unstakedFeeModule` controls the portion of swap fees redirected from unstaked to staked positions (default: 10%).

### CL Swap Flow

**CL Swap Router:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. User approves token to CL swap router
2. Call `exactInputSingle(...)` or `exactInput(...)` with pool key (token0, token1, tickSpacing) and swap parameters
3. Output token returned to wallet

### CL Position Management

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Positions are managed as ERC-721 NFTs. Key operations:

- `mint(...)` — Create a new position with a price range (tickLower, tickUpper) and deposit tokens
- `increaseLiquidity(...)` — Add more liquidity to an existing position
- `decreaseLiquidity(...)` — Remove liquidity from a position
- `collect(...)` — Claim accumulated swap fees

### Staking and Gauges

CL positions can be staked into gauges for MEZO emissions. Staked in-range liquidity earns both swap fees and emissions. The unstaked fee mechanism redirects a portion of fees from unstaked positions to staked ones.

- **CL Gauge Factory:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Key Features

- **Slippage Control:** Provided on frontend or via `amountOutMinimum` / `sqrtPriceLimitX96` parameters
- **Built-in TWAP Oracle:** Each CL pool maintains a time-weighted average price oracle
- **Dynamic Fees:** Pluggable fee modules for custom fee logic per pool

## Contract Addresses

### Mainnet — Basic Pool Contracts

| Name | Address |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC Pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC Pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT Pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet — CL Contracts

| Name | Address |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (implementation) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (implementation) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet — Governance Contracts

| Name | Address |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet — Basic Pool Contracts

| Name | Address |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC Pool | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC Pool | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT Pool | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet — CL Contracts

| Name | Address |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (implementation) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (implementation) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet — Governance Contracts

| Name | Address |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
