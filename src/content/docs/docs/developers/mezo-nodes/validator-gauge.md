---
title: Validator Gauge
description: >-
  Guide for validators on how to manage reward beneficiaries, vote on validator
  gauges, and claim MEZO rewards.
topic: developers
---

Validators can earn MEZO emissions each week, but only if their validator gauge receives votes during each epoch. Without votes on their gauge, a validator will not receive any emissions. This guide explains how to manage reward beneficiaries, vote on your validator gauge, and claim rewards.

## Overview

Each validator has an associated gauge in the [ValidatorsVoter contract](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). Rewards are claimed through the ValidatorsVoter contract by specifying the validator's gauge address.

Each gauge has a single beneficiary address that is authorized to claim rewards. By default, the beneficiary is the validator operator address registered in the [Proof of Authority (PoA) contract](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Reward Release Schedule]
Allocated epoch rewards are not immediately available for claim—they are gradually released over the epoch. For example, if rewards are allocated to a gauge at the beginning of epoch N, 100% of epoch N rewards will be available at the epoch's end.
:::

## Changing Reward Beneficiary

Validators can designate a different address to receive MEZO rewards. This is useful for separating operational and treasury functions.

To change the reward beneficiary:

1. **Connect your operator address wallet**
   Use the wallet associated with your validator operator address.

2. **Determine your gauge address**
   Call `ValidatorsVoter.validatorToGauge()` with your operator address as the parameter.

3. **Switch beneficiary**
   Call `Gauge.switchRewardsBeneficiary()` with the new beneficiary address as the parameter.
   - Contract: Your specific Gauge contract (obtained from step 2)
   - Method: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Claim from the new beneficiary**
   After changing the beneficiary, all future claims must be executed using the new beneficiary wallet.

:::caution[Best Practice]
It's recommended to claim all available rewards with the current beneficiary before switching to a new one. If you switch beneficiaries with unclaimed rewards, those rewards will remain associated with the old beneficiary address and must be claimed separately.
:::

## Voting on Your Validator Gauge

Voting is essential for earning MEZO emissions — a validator gauge that receives no votes in an epoch will not receive any rewards for that epoch. Validators can vote on their own gauge to direct MEZO emissions. Validator gauge votes are **independent** from other Mezo Earn gauge votes. For example, if you already voted with 100% of your voting power on a pool gauge, you can still vote with 100% of your voting power on your validator gauge (or another validator's gauge).

veBTC is the core asset used for voting. veMEZO can be used to boost your vote power. Once cast, a vote rolls over to subsequent epochs automatically unless explicitly reset.

:::note[Poking Your Position]
You may need to poke your position before voting to ensure it is up to date. Poking an existing vote is also beneficial if your veBTC voting power has increased (e.g. due to a top-up), as it updates your vote weight to reflect the new power. See the [Poke documentation](/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) for details.
:::

### How to Vote

1. **Identify your validator gauge**
   Call the `validatorToGauge` function on the [ValidatorsVoter contract (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) with your validator address as the parameter.

2. **Cast your vote**
   Call the `vote` function on the [ValidatorsVoter contract (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). The `tokenId` parameter is your veBTC NFT ID. If you are only voting on your own validator gauge, you can set the weight to `100` (representing 100% of your voting power).

### Incentivizing Your Gauge

Validators can incentivize their veBTC boost gauge on platforms like [Matchbox](https://matchbox.markets/) to attract veMEZO votes that boost their veBTC voting power.
That boosted veBTC power can then be used to direct more votes to the validator gauge, increasing MEZO emissions.

Mezo Earn also includes a separate validator-gauge incentive mechanism, but that specific flow is not currently available on Matchbox.

## Claiming Rewards

To claim your MEZO rewards, follow these steps:

1. **Connect your operator address wallet**
   Use the wallet associated with your validator operator address.

2. **Determine your gauge address**
   Call `ValidatorsVoter.validatorToGauge()` with your operator address as the parameter.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Method: `validatorToGauge(address validator)`

3. **Claim rewards**
   Call `ValidatorsVoter.claimRewards()` with your gauge address as the parameter.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Method: `claimRewards(address gauge)`

## Contract Addresses

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **PoA Contract**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Additional Resources

- [Mezo Earn Overview](/docs/users/mezo-earn/overview/)
- [Mezo Blog](https://mezo.org/blog/tag/features/)
