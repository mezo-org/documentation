---
title: Concentrated Liquidity
description: >-
  Provide liquidity within custom price ranges to earn more fees with less
  capital.
topic: users
---

Concentrated liquidity (CL) pools let you deposit liquidity within a specific price range instead of across all possible prices. By focusing your capital where trading actually happens, you can earn significantly more fees per dollar deposited compared to [basic pools](/docs/users/mezo-earn/pools).

## How concentrated liquidity differs from basic pools

In a **basic pool**, your liquidity is spread evenly across the entire price curve from zero to infinity. This means most of your capital sits idle in price ranges where trading never occurs.

In a **concentrated liquidity pool**, you choose a price range — for example, BTC between 80,000 and 120,000 MUSD. All of your capital is active within that range, making it far more capital-efficient. The tradeoff is that if the price moves outside your range, your position stops earning fees until the price returns.

| | Basic Pools | CL Pools |
|---|---|---|
| **Liquidity range** | Full price curve (0 to infinity) | Custom price range you define |
| **Capital efficiency** | Lower — most capital is idle | Higher — all capital is active in range |
| **Position type** | Fungible LP tokens (ERC-20) | NFT positions (ERC-721) |
| **Management** | Set and forget | Requires monitoring and rebalancing |
| **Impermanent loss** | Standard | Amplified within the chosen range |

## Active CL pools

| Pool | Type | Tick Spacing |
|---|---|---|
| BTC/MUSD-200 | Concentrated Volatile | 200 |

Visit [Mezo Pools](https://mezo.org/explore/pools) to see live stats including TVL, volume, fees, and APR.

## Tick spacing

CL pools use **tick spacing** to define the granularity of price ranges you can set. Smaller tick spacing allows tighter ranges (more precision), while larger tick spacing means wider minimum ranges.

Pools are classified as **stable** (tick spacing below 100) or **volatile** (tick spacing of 100 or above), following the same convention used by Aerodrome.

| Tick Spacing | Default Fee | Classification |
|---|---|---|
| 1 | 0.01% | Stable |
| 10 | 0.05% | Stable |
| 50 | 0.05% | Stable |
| 100 | 0.05% | Volatile |
| 200 | 0.30% | Volatile |
| 2,000 | 1.00% | Volatile |

The BTC/MUSD-200 pool uses tick spacing of 200 with a 0.30% swap fee.

## Getting started (Coming Soon)

1. Go to [Mezo Pools](https://mezo.org/explore/pools) and select the CL pool you want to provide liquidity for.
2. Choose your price range — set the minimum and maximum prices where your liquidity will be active.
3. Enter the amount of each token to deposit. The ratio depends on the current price relative to your chosen range.
4. Review and confirm the transaction. You'll receive an NFT representing your position.

### Choosing a price range (Coming Soon)

- **Wider range** — Earns fees more consistently but with lower capital efficiency. Better for a hands-off approach.
- **Narrower range** — Earns more fees when in range but requires active monitoring and rebalancing. Risk of going out of range is higher.
- **Current price should be inside your range** — If the current price is outside your range, your position will be entirely in one token and will not earn fees until the price moves back into range.

## Staking for emissions (Coming Soon)

CL positions can be staked into gauges to earn MEZO emissions on top of trading fees. Staked positions earn a larger share of swap fees through the unstaked fee mechanism, which redirects a portion of fees from unstaked positions to staked ones.

To stake:

1. Navigate to your CL position.
2. Click **Stake** to deposit your position NFT into the gauge.
3. Earn MEZO emissions while your liquidity is in range.

Emissions are distributed proportionally to staked, in-range liquidity. If your position goes out of range, you stop earning emissions until the price returns.

## Fees

CL pool fees work the same way as basic pool fees — they are deducted from the input token on every swap and accumulate for liquidity providers to claim.

The key difference: in CL pools, fees are only earned by positions that are **in range** at the time of the swap. Positions outside the active price range earn nothing until the price returns.

See [Pools Fees](/docs/users/mezo-earn/pools/pools-fees) for more details on the fee model.

## Risks

### Impermanent loss

Concentrated liquidity **amplifies** impermanent loss compared to basic pools. Because your capital is concentrated in a narrow range, price movements within that range have a larger impact on the ratio of tokens in your position. The tighter your range, the greater the potential impermanent loss.

### Out-of-range risk

If the market price moves outside your chosen range, your position converts entirely to one token and stops earning fees or emissions. You will need to either wait for the price to return or withdraw and reposition your liquidity.

### Smart contract risk

As with all smart contracts, inherent risk remains. Review audits at [mezo.org/docs/users/resources/audits](/docs/users/resources/audits) and only deposit amounts you're comfortable with.
