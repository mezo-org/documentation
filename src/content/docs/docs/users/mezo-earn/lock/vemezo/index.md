---
title: veMEZO Overview
description: Locking MEZO to boost voting power and earn rebases
topic: users
---

veMEZO is the tokenized (NFT) representation of MEZO locked on Mezo Network. Locking MEZO lets you boost your veBTC voting power by up to 5x, amplifying your earnings, and earn anti-dilution rebases via MEZO emissions.

## What is veMEZO?

When you lock MEZO on Mezo, you receive a veMEZO NFT that represents your locked position. This NFT gives you:

- Boost multiplier on your veBTC voting power (up to 5x)
- Rebase rewards from weekly MEZO emissions to offset dilution
- Participation in the matching market to earn incentives from veBTC holders
- Votes on [MEZO Gauges](/docs/users/mezo-earn/vote/mezo-gauges), directing MEZO emissions to MUSD pools on Curve, Uniswap, and Aerodrome

:::note[Important]
veMEZO does not vote on **staking gauges** on its own — there it only multiplies the voting power of veBTC positions. It does vote in its own right on veBTC boost gauges and on [MEZO Gauges](/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## How veMEZO Weight Works

Your veMEZO weight depends on two factors: the amount of MEZO locked (more MEZO = more weight) and your lock duration (longer locks = higher sustained weight).

Your weight decays linearly over time. A user who locks 1,000 MEZO for 4 years starts with 1,000 veMEZO weight, which decays to 500 after 2 years, and reaches 0 at expiration. You can extend your lock at any time to maintain full weight.

You can also auto-max lock your veMEZO, which will let you sustain the maximum 4-year voting weight every epoch without needing to relock your tokens continuously.

### Lock Parameters

| Parameter | Value |
|---|---|
| Minimum lock | 1 week |
| Maximum lock | 4 years (1,456 days) |
| Lock decay | Linear — weight decreases continuously until reaching zero |

---

## What You Earn

### Rebase Rewards (All veMEZO Holders)

veMEZO holders receive a share of weekly MEZO emissions as rebases. This protects against dilution from new emissions. The rebase share is dynamic—higher when fewer tokens are locked, lower as more MEZO locks.

### Incentives (Via the Matching Market)

veMEZO holders can vote on veBTC gauges to earn incentives. When a veBTC holder wants to boost their position but lacks sufficient veMEZO, they may post incentives on their veBTC gauge. By voting for that gauge, you earn those incentives in exchange for providing boost.

See [Boost Mechanism](/docs/users/mezo-earn/lock/vemezo/boost-mechanism) for details on how the matching market works.

---

## veMEZO vs veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Underlying asset | BTC | MEZO |
| Max lock | 28 days | 4 years |
| Voting power | Base voting power | Multiplies veBTC power (up to 5x) |
| Earns fees | Yes (bridging, swap, MUSD) | No |
| Earns rebases | No | Yes |
| Earns incentives | Yes (from gauges you vote for) | Yes (from veBTC boost gauges) |
