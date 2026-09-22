---
title: Vote FAQs
description: Frequently asked questions about voting on Mezo
topic: users
---

## General

**Do I need to vote every week?**

No. Your vote allocation persists across epochs until you change or reset it, and it keeps earning its share of fees and incentives each epoch. Re-voting is how you change the allocation, not how you keep it.

**Can I change my votes during an epoch?**

Each lock can vote once per epoch. If the lock has not voted yet this epoch, you can submit a new split at any point in the voting window and it replaces your standing allocation. Once a vote confirms, that lock's allocation is locked in until the next epoch turnover (Thursday 00:00 UTC).

**Can I split my votes across multiple gauges?**

Absolutely. You can allocate your voting power however you want—50% to BTC/MUSD, 30% to MUSD Savings Rate, 20% to another pool.

**What's the difference between voting with veBTC and veMEZO?**

veBTC holders vote on staking gauges. They earn trading fees, incentives, and passive bridging fees.

veMEZO holders vote on veBTC boost gauges. They earn incentives posted by veBTC holders seeking boost, plus rebase distributions.

---

## Boost & veMEZO

**What is boost?**

Boost is a multiplier (between 1x and 5x) that amplifies your veBTC voting power. It's provided by veMEZO votes directed to your veBTC position's boost gauge.

**Do I need veMEZO to earn as a veBTC holder?**

No. veBTC with no boost still earns trading fees, incentives, and passive bridging fees—just at a 1x multiplier. veMEZO increases your effective voting power (up to 5x) but isn't required.

**How do I get boost for my veBTC position?**

Two ways:
1. **Self-boost:** Lock MEZO into veMEZO and direct it to your own position
2. **Attract boost:** Post incentives on your boost gauge to attract veMEZO votes from others

**What do veMEZO holders earn?**

veMEZO holders earn:
- Incentives posted on boost gauges they vote for
- Rebase distributions that protect against dilution

They do **not** earn trading fees, MUSD revenue, or bridging fees—those go to veBTC holders.

**How is max boost calculated?**

You reach 5x boost when your share of total veMEZO equals or exceeds your share of total veBTC. Larger BTC positions require proportionally more veMEZO to max out.

**What happens if I have veMEZO but no veBTC?**

You can still earn yield by voting on other users' boost gauges. You earn any incentives they've posted, proportional to your share of votes on that gauge.

---

## Incentives

**How do incentives work?**

Protocols or users deposit incentives on specific gauges to attract votes. At epoch end, incentives are distributed proportionally to all voters on that gauge based on voting weight. Incentives stack on top of trading fees.

**Can I post incentives on my own boost gauge?**

Yes. This is how you attract veMEZO votes to your veBTC position if you want boost but don't hold MEZO yourself.

**What tokens can be used as incentives?**

Any ERC-20 token can be deposited as incentives.

---

## Voting Power

**Does my voting power decrease over time?**

Yes. Voting power decays linearly as your lock approaches expiration. If you locked for 28 days, at day 14 you'll have roughly 50% of your initial voting power. Extending your lock restores full weight.

**What if I have multiple veBTC positions?**

You can vote with each position separately. Each NFT has its own voting power and can be allocated to different gauges or the same ones—your choice.

**What happens if I don't extend my lock?**

Your voting power continues to decay until it reaches zero at expiration. At that point, you can no longer vote or earn rewards. You must either extend your lock prior to its expiration or create a new one.

**How long can I lock veMEZO?**

veMEZO max lock is 4 years (compared to 28 days for veBTC). The longer lock reflects MEZO's role as the chain's coordination asset.

---

## Poke

**What is poke?**

Poke is a transaction that refreshes your position's voting power to reflect its current state. Without poking, changes to your boost don't take effect.

**When do I need to poke?**

Poke after:
- Receiving new veMEZO votes on your boost gauge
- Directing your own veMEZO to your position
- Claiming veMEZO rebase distributions
- Extending your lock duration
- Adding more BTC/MEZO to your lock

**Can anyone poke my position?**

Yes. Poke is permissionless. Others may poke your position if your voting power has decayed significantly.

---

## Rewards

**When can I claim my rewards?**

Fees and incentives become claimable once the epoch ends. During the epoch, you can see your estimated rewards accruing, but you can't claim until the epoch is complete.

**Do I earn rewards on pools I don't vote for?**

No. You only earn fees and incentives from the specific gauges you allocated voting power to. If you voted 100% on BTC/MUSD, you earn zero rewards from the MUSD/USDC pool.

Exception: Passive bridging fees are distributed to all veBTC holders proportional to their boosted weight, regardless of voting.

**What are rebases and how do I claim them?**

Rebases are anti-dilution distributions for veMEZO holders. A portion of weekly emissions goes to rebases when the lock ratio is low. Claim them separately—they add to your veMEZO position weight.

---

## Gauges

**How are gauge weights calculated?**

Gauge weight = total voting power allocated to that gauge / total voting power allocated across all gauges. If the BTC/MUSD gauge receives 1,000 voting power and all gauges combined receive 10,000, BTC/MUSD gets 10% of emissions that epoch.

**Can gauges receive zero emissions?**

Yes. If nobody votes on a gauge, it receives zero emissions for that epoch. This is why incentive markets exist—protocols need votes to attract emissions.

**What are boost gauges?**

Every veBTC NFT has its own boost gauge. veMEZO holders vote on these gauges to provide boost to that specific veBTC position. The veBTC holder can post incentives on their boost gauge to attract votes.

**Where can I see current gauge weights and incentives?**

Visit the [Vote page](https://mezo.org/vote) to see real-time gauge weights, incentive amounts, projected APYs, and historical performance.
