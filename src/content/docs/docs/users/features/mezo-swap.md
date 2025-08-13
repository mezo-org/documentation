---
title: Mezo Swap
description: Learn about Mezo Swap and how to trade assets in the Mezo ecosystem
---
# Overview

[Mezo Swap](https://mezo.org/overview?modal=swap) is the integrated decentralized exchange (DEX) of the Mezo ecosystem. It allows users to seamlessly trade between assets like BTC, MUSD, and USDC, without intermediaries, order books, or leaving the BitcoinFi economy. The feature powered by [Mezo Pools](https://mezo.org/docs/users/features/mezo-pools), enabling instant, decentralized token swaps using smart contract-based liquidity reserves.

## Key Features

- **Permissionless**: Swap between supported assets 24/7, without relying on intermediaries or approvals.
- **Low Slippage**: Stable pools (e.g., MUSD and USDC) use a specialized curve to minimize price impact on trades between like-assets.
- **Instant Liquidity**: Trading is always available via the Automated Market Maker (AMM) model, no order books or market makers required.
- **LP Rewards**: Provide liquidity to pools and earn a share of swap fees. LP tokens track your pro-rata earnings.
- **On-chain Transparency**: Every swap, fee, and liquidity position is recorded on-chain and viewable by anyone.

## Supported Assets

Mezo Swap currently supports trades between the following assets. This list will be updated with additional tokens as they are added:

- BTC
- MUSD
- USDC
- USDT

## How It Works

### Pricing Mechanism

Mezo Swap uses an Automated Market Maker (AMM) model with two distinct pricing curves:

- **Volatile Pools**: Use the constant product formula `(x × y = k)` for assets like BTC/USDC, optimized for price discovery between uncorrelated assets.
- **Stable Pools**: Use a specialized stable swap curve `(x³y + y³x ≥ k)` for like-assets such as MUSD/USDC, designed to minimize slippage for trades between similarly-valued tokens.

Prices are determined by the ratio of tokens in each pool, updating automatically with every trade.  

### Slippage

Slippage occurs when the actual swap price differs from the quoted price due to either:

- Trades being completed before yours
- Lack of liquidity for selected assets

When using Mezo Swap, you can set a maximum slippage tolerance (default: 0.5% for stable pairs, 1% for volatile pairs).

![Slippage Example](/docs/images/mainnet/slippage-example.png)

If market conditions change beyond your tolerance, the transaction will revert to protect you from unfavorable trades. Large trades will experience more slippage due to their price impact on the pool.

To view the total available liquidity, head to [Mezo Pools](https://mezo.org/explore/pools) where you’ll find all pools with associated stats, including total liquidity (TVL).

## Fees

- **Protocol Fees**: 0.05% for stable pools, 0.3% for volatile pools (paid to liquidity providers)
- **Network Fees**: Standard gas fees for executing the swap transaction on-chain

When you preview a swap in the Mezo app, you will see the associated fees, slippage, network costs, and swap rate.

![Swap Example](/docs/images/mainnet/Swap-MUSD-to-BTC.png)
