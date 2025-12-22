---
title: Vote FAQs
description: Frequently asked questions about voting on Mezo
topic: users
---

## General

**Do I need to vote every week?**

No. However, if you don't vote in a given week, you forfeit your share of fees and incentives for that epoch. Votes don't carry over between epochs.

**Can I change my votes during an epoch?**

Yes. You can update your vote allocation as many times as you want during the 7-day epoch. Your final allocation at epoch end determines your rewards.

**Can I split my votes across multiple gauges?**

Absolutely. You can allocate your voting power however you want—50% to BTC/MUSD, 30% to MUSD Savings Rate, 20% to another pool.

---

## Incentives

**How do incentives work?**

Protocols deposit incentives on specific gauges to attract votes. At epoch end, incentives are distributed proportionally to all voters on that gauge based on voting weight. Incentives stack on top of trading fees.

---

## Voting Power

**Does my voting power decrease over time?**

Yes. Voting power decays linearly as your lock approaches expiration. If you locked for 28 days, at day 14 you'll have roughly 50% of your initial voting power. Extending your lock restores full weight.

**What if I have multiple veBTC positions?**

You can vote with each position separately. Each NFT has its own voting power and can be allocated to different gauges or the same ones—your choice.

**What happens if I don't extend my lock?**

Your voting power continues to decay until it reaches zero at expiration. At that point, you can no longer vote or earn rewards. You must either extend your lock prior to its expiration or create a new one.

---

## Rewards

**When can I claim my rewards?**

Fees and incentives become claimable once the epoch ends. During the epoch, you can see your estimated rewards accruing, but you can't claim until the epoch is complete.

**Do I earn rewards on pools I don't vote for?**

No. You only earn fees and incentives from the specific gauges you allocated voting power to. If you voted 100% on BTC/MUSD, you earn zero rewards from the MUSD/USDC pool.

---

## Gauges

**How are gauge weights calculated?**

Gauge weight = total voting power allocated to that gauge / total voting power allocated across all gauges. If the BTC/MUSD gauge receives 1,000 voting power and all gauges combined receive 10,000, BTC/MUSD gets 10% of emissions that epoch.

**Can gauges receive zero emissions?**

Yes. If nobody votes on a gauge, it receives zero emissions for that epoch. This is why incentive markets exist—protocols need votes to attract emissions.

**Where can I see current gauge weights and incentives?**

Visit the [Vote page](https://mezo.org/vote) to see real-time gauge weights, incentive amounts, projected APYs, and historical performance.
