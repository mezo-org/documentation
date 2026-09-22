---
title: veBTC Overview
description: Locking BTC to earn with veBTC
topic: users
---

veBTC is the tokenized (NFT) representation of BTC locked on Mezo Network. Locking BTC gives you governance power and a share of protocol fees.

## What is veBTC?

When you lock BTC on Mezo, you receive a veBTC NFT that represents your locked position. This NFT gives you:

- **Voting power** to direct emissions across the ecosystem
- **Protocol fees** from chain activity and bridging
- **Governance rights** to shape Mezo's economic future

---

## How Voting Power Works

Your veBTC weight depends on two factors: the amount of BTC locked (more BTC = more voting power) and your lock duration (longer locks = higher sustained weight).

Your voting power decays linearly over time. A user who locks 1 BTC for 28 days starts with 1 veBTC, which decays to 0.5 after 14 days, and reaches 0 at expiration. You can extend your lock at any time to maintain full voting power.

### Lock Parameters

| Parameter | Value |
|-----------|-------|
| Minimum lock | 1 day |
| Maximum lock | 28 days |
| Lock decay | Linear — weight decreases continuously until reaching zero |

---

## What You Earn

### Passive Earnings (All veBTC Holders)

All veBTC holders automatically receive a share of **chain and bridging fees** proportional to their voting weight. This is passive yield that accrues simply by holding veBTC — no voting required.

### Active Earnings (Requires Voting)

By [voting for gauges](/docs/users/mezo-earn/vote), you earn additional rewards based on your vote allocation:

- **Swap fees** from pools you vote for (when LPs stake in those gauges)
- **MUSD interest/fee revenue** if you vote for the MUSD Savings Rate gauge
- **Incentives** that protocols or users post to attract votes to specific gauges

The more voting weight you allocate to a gauge, the larger your share of that gauge's fees and incentives.

:::note[Important]
Your allocation persists across epochs and keeps earning until you change it — you do not need to re-vote every week. See [Epochs](#epochs) below.
:::


---

## Epochs

Mezo Earn operates in **7-day cycles called epochs**. Each epoch begins on Thursday at 00:00 UTC.

### Why Epochs Matter

- **Votes persist.** Your allocation carries across epochs until you change or reset it. Each lock can vote once per epoch, so a confirmed allocation cannot be changed until the next turnover.
- **Votes cast in epoch N** determine emission allocation for epoch N+1
- **Fees generated in epoch N** are distributed based on votes cast in epoch N

### Lock Duration and Epoch Alignment

Lock durations are aligned to epoch boundaries, not calendar days. When you create a lock, **your lock time is rounded down to the nearest full week**.

This means:

- A 28-day lock created mid-epoch will have an effective duration of approximately 21–28 days, depending on when you lock
- Locks always expire at epoch transitions (Thursday 00:00 UTC)

**Example:** If you select a 28-day max lock mid-epoch, your effective lock duration will be reduced based on the remaining time in the week — resulting in a lock of approximately 21–28 days, depending on when you lock.

This normalization ensures all locks expire cleanly at epoch boundaries and simplifies voting weight calculations across the system.

| Epoch Parameter | Value |
|-----------------|-------|
| Duration | 7 days |
| Start time | Thursday 00:00 UTC |
| Lock alignment | Rounded down to full weeks |
