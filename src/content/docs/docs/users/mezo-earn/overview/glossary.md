---
title: Glossary
description: Glossary of terms for Mezo Earn
topic: users
---

Below is a list of terms related to the Mezo Earn system.

---

## veBTC

Vote-escrowed BTC. An NFT representing locked Bitcoin that grants base voting power (1x multiplier) and fee-earning rights in Mezo Earn. Voting weight decays linearly over the lock period. Max lock is 28 days.

## veMEZO

Vote-escrowed MEZO. An NFT representing locked MEZO tokens that can boost veBTC voting power up to 5x, and that votes in its own right on veBTC boost gauges and [MEZO Gauges](/docs/users/mezo-earn/vote/mezo-gauges). It carries no governance weight of its own and cannot vote on staking gauges without veBTC. Max lock is 4 years.

## Boost

The multiplier applied to a veBTC position when veMEZO votes are directed to it. Without boost, veBTC operates at 1x. With maximum boost, veBTC operates at 5x. The boost depends on your relative share of total veBTC and total veMEZO in the system.

## Boosted Weight

The combined voting weight when veBTC and veMEZO are paired. Calculated as your veBTC weight multiplied by your boost multiplier (between 1x and 5x). Boosted weight determines your share of fees and your influence over emissions.

## Epoch

A 7-day cycle that governs voting and reward distribution. Epochs begin every Thursday at 00:00 UTC.

## Gauge

A smart contract that receives and distributes rewards based on votes. The more voting weight a gauge receives, the larger its share of rewards for that epoch.

## Lock

The act of committing BTC or MEZO for a set period to receive veBTC or veMEZO. Longer locks grant higher initial voting weight.

## Staking Gauge

A gauge tied to a staking token (like LP tokens or MUSD savings receipts). Stakers earn MEZO emissions; voters earn trading fees.

## veBTC Boost Gauge

A gauge attached to a specific veBTC NFT. veMEZO holders vote on these gauges to provide boost to that veBTC position in exchange for incentives.

## Non-Staking Gauge

A gauge with no staking token, voted on with veMEZO. Its emissions are routed to a destination the gauge names rather than paid to stakers on Mezo. Voting on one is independent of veBTC gauge voting and of boost matching.

## MEZO Gauge

A non-staking gauge that directs MEZO emissions to MUSD liquidity pools outside Mezo — Curve and Uniswap on Ethereum, and Aerodrome on Base. See [MEZO Gauges](/docs/users/mezo-earn/vote/mezo-gauges).

## Voting Weight

The influence a position has when voting for gauges. For veBTC, calculated as locked BTC multiplied by remaining lock duration divided by max lock duration. For veMEZO, the same formula applies but with 4-year max lock.

## Decay

The gradual reduction in voting weight as a lock approaches expiration. Can be reset by extending the lock.

## Poke

A transaction that refreshes a veBTC position's boosted weight. Required after changes to veMEZO votes, lock extensions, or adding BTC. Without poking, boost changes don't take effect.

## Matching Market

The economic mechanism where veBTC holders can attract veMEZO votes by posting incentives on their boost gauges, and veMEZO holders can earn yield by voting on gauges with attractive incentives.

## Incentives

Rewards posted on gauges to attract votes. Protocols or users deposit incentives (in any ERC-20 token) to attract voting power to specific gauges.

## Rebase

Anti-dilution distributions to veMEZO holders. When the lock ratio (veMEZO supply / total MEZO supply) is low, a larger share of emissions goes to rebases, protecting early lockers from dilution.

## Splitter

A contract that divides emissions between two destinations (e.g., validators vs. ecosystem). Split ratios are currently fixed and locked via governance.

## MUSD

Mezo's bitcoin-backed stablecoin. Users can borrow MUSD against their BTC collateral.

## MUSD Savings Rate Gauge

A staking gauge for the MUSD savings vault. Users who deposit MUSD into the savings vault can stake their receipt tokens to earn MEZO emissions, while voters on this gauge earn MUSD yield.

## Emissions

New MEZO tokens distributed each epoch to staking gauges, validators, and veMEZO holders (as rebases). Emissions follow a halving schedule: 25% annualized in years 0-2, declining to ~2% after year 8.

## Chain Splitter

The first splitter in the emissions hierarchy. Controls what percentage of emissions go to validators (initially 20%) versus the rest of the system.

## Ecosystem Splitter

The second splitter. Directs non-validator emissions to staking gauges. This ratio is currently fixed and locked via governance.
