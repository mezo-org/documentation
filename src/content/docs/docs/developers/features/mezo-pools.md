---
title: Mezo Pools (Tigris)
description: Overview of Tigris swaps and liquidity pools on Mezo
---

## Overview

Tigris is Mezo's native decentralized exchange (DEX) infrastructure, purpose-built for BitcoinFi. It enables users to swap tokens and provide liquidity using optimized pool mechanics. Tigris currently supports selected liquidity pools and curated integrations, with plans to open up permissionless access in the future.

> Note: This page is a rough overview. More technical details will be added over the coming days.

## How Pools Work

- **Pool Factory**: Deployed by the Mezo team (not permissionless yet)
- **Supported Pools**:
  - MUSD/BTC: `0x52e604c44417233b6CcEDDDc0d640A405Caacefb`
  - MUSD/mUSDC: `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356`
  - MUSD/mUSDT: `0x10906a9E9215939561597b4C8e4b98F93c02031A`
- **Pool Logic**: Aerodrome-style AMM (either constant-product or stable-curve depending on pair)
- **Swap Fees**: Set per pool (e.g. 0.05%, 0.3%)
- **Liquidity Farming**: Fee accrual enabled; reward distributions planned later

## How Swaps Work

- **Router Contract**: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`
- **Swap Flow**:
  1. User approves token to router
  2. Call router’s `swapExactTokensForTokens(...)` with path array
  3. Receive output token in wallet
- **Slippage Control**: Provided on frontend or via parameters in the contract call
- **No Oracles Needed**: Prices derived directly from pool reserves

## Integration Examples

Examples and SDK snippets coming soon.

## Contract Addresses

### Core

| Name        | Address                                      |
|-------------|----------------------------------------------|
| Router      | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |

### Current Pools (Mainnet)

| Pool          | Address                                      |
|---------------|----------------------------------------------|
| MUSD/BTC      | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC    | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT    | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Additional Contracts

Mainnet

| Name                     | Address                                      |
|--------------------------|----------------------------------------------|
| VeBTC                    | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter               | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor  | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor       | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter         | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

Testnet

| Name                     | Address                                      |
|--------------------------|----------------------------------------------|
| Router                   | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory              | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC Pool            | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC Pool          | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT Pool          | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |
| VeBTC                    | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter               | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor  | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor       | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter         | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |

## Installation

This project uses pnpm as a package manager.

```bash
pnpm install
```

Install slither locally (macOS):

```bash
brew install slither
```

Install Foundry locally by following the official guide. See the Hardhat and Foundry section below for more information.

## Testing

```bash
pnpm test
slither .
```

## Environment Setup

This project uses dotenv-safer, which provides environment variable checking. If there is a field in `.env.example` but not `.env`, execution will halt early with an error.

Both `pnpm run deploy` and `pnpm test` will automatically create a blank `.env` from the `.env.example` template if `.env` does not exist.

To do this manually:

```bash
pnpm run prepare:env
```

## Deploying

We deploy our contracts with hardhat-deploy via:

```bash
pnpm run deploy [--network <network>]
```

Check the "networks" entry of `hardhat.config.ts` for supported networks.

Deploying to real chains will require configuring the `.env` environment, detailed in `.env.example`.

Examples:

In-memory Hardhat (great for development):

```bash
pnpm run deploy
```

Sepolia:

```bash
pnpm run deploy --network sepolia
```

Or manually trigger the Solidity workflow (this will not only deploy the contracts, but also update the values of environment variables for builds that consume them).

## Hardhat and Foundry

We use a hybrid approach with both Hardhat and Foundry for this project.

- Hardhat is the project's main build tool. It is used to compile and deploy contracts. Hardhat deployment scripts are the main deployment mechanism for real chains.
- Foundry is used as the test platform. Unit tests are written and run entirely using Foundry. System tests are written using Foundry but run in fork mode against a Hardhat network with deployment scripts applied.

Note: The Foundry test runner expects specific compilation artifacts, so Foundry is used to compile contracts for this purpose instead of Hardhat.


