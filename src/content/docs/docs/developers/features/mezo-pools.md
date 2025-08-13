---
title: Mezo Pools (Tigris)
description: Overview of Tigris - Mezo's native DEX infrastructure for swaps and liquidity pools
---

## Overview

Tigris is Mezo's native decentralized exchange (DEX) infrastructure, purpose-built for BitcoinFi. It enables users to swap tokens and provide liquidity using optimized pool mechanics. Tigris currently supports selected liquidity pools and curated integrations, with plans to open up permissionless access in the future.

> **Note:** This documentation is a rough overview. More technical details will be added over the coming days.

## How Pools Work

- **Pool Factory:** Deployed by the Mezo team (not permissionless yet)

### Supported Pools

| Pool | Address |
|------|---------|
| MUSD/BTC | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Pool Mechanics

- **Pool Logic:** Aerodrome-style AMM (either constant-product or stable-curve depending on pair)
- **Swap Fees:** Set per pool (e.g. 0.05%, 0.3%)
- **Liquidity Farming:** Fee accrual enabled; reward distributions planned later

## How Swaps Work

**Router Contract:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

### Swap Flow

1. User approves token to router
2. Call router's `swapExactTokensForTokens(...)` with path array
3. Receive output token returned to wallet

### Key Features

- **Slippage Control:** Provided on frontend or via parameters in the contract call
- **No Oracles Needed:** Prices derived from pool reserves directly

## Contract Addresses

### Core Contracts

| Name | Address |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC Pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC Pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT Pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet Contracts

| Name | Address |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC Pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC Pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT Pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet Contracts

| Name | Address |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC Pool | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC Pool | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT Pool | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
