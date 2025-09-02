---
title: MUSD Liquidations & Redemptions
description: >-
  Learn how liquidations protect the system and how redemptions maintain the
  MUSD peg.
topic: users
---

## Overview
When you borrow MUSD using your Bitcoin as collateral, you create a loan position (also called a "Trove"). Two key system events can affect your loan:

- **Liquidation**: A forced closure of your loan that happens only if its health, measured by the collateral ratio, drops below a critical minimum of 110%. In a liquidation, you lose your collateral.
- **Redemption**: When other users exchange MUSD for BTC from the system to help keep the MUSD price at \$1. This can affect your loan even if it's healthy (above 110%), but it is not a loss. It pays down your debt and makes your loan safer.

---

## Liquidations ⚠️

### What is a Liquidation?
A liquidation is a safety mechanism that automatically closes a loan when it becomes too risky. This protects the entire MUSD system from becoming unstable.

### When Does a Liquidation Happen?
Your loan is at risk of liquidation if its collateral ratio falls below 110%. Think of this as the absolute minimum safety buffer required for your loan.

### What Happens During a Liquidation?
There are two ways the system handles a liquidation:

#### Using the Stability Pool (Default Method):
- The system uses MUSD from its safety reserve, the Stability Pool, to completely pay off your debt.
- The person or bot who triggered the liquidation receives a small reward (a 200 MUSD gas fee and 0.5% of your collateral).
- The rest of your collateral (99.5%) is transferred to the Stability Pool to repay its depositors.
- Your loan is closed, and you lose all of your collateral.

#### Redistribution (Fallback Method):
- If the Stability Pool is empty, the system shares your debt and collateral among all other active loan holders.
- This is a backup method to ensure the system always remains balanced.

### Example of a Liquidation:
- Imagine your loan has 10,000 MUSD of debt.
- The value of your BTC collateral drops to \$10,900.
- Your collateral ratio is now 109%, which is below the 110% minimum.
- Outcome: Your loan is liquidated. Your 10,000 MUSD debt is cleared, but you lose your entire \$10,900 worth of BTC collateral.

---

## Redemptions 🛡️

### What is a Redemption?
A redemption is a feature that allows anyone holding MUSD to swap it for an equal dollar value of BTC directly from the protocol. This process ensures MUSD always holds its \$1 peg. It is not a penalty and does not mean your loan is unsafe.

### When Does a Redemption Happen?
Redemptions can happen at any time. When a user wants to redeem their MUSD for BTC, the system looks for loans to source the collateral from.

### Which Loans Are Chosen for Redemption?
The system always starts with the loan that has the lowest collateral ratio—even if that ratio is healthy and well above 110%. If your loan is less collateralized than others, it is more likely to be chosen for a redemption.

### What Happens During a Redemption?

#### Full Redemption:
- If a redemption pays off your entire debt, your loan is closed.
- An equivalent value of your BTC is given to the redeemer.
- Any leftover BTC is yours to keep. This is called your Surplus Collateral and is sent to a special holding account for you to claim.

#### Partial Redemption (More Common):
- A portion of your debt is paid off by the redeemer.
- An equivalent value of your BTC collateral is given to them.
- Outcome: Your loan remains open but is now smaller and healthier, with a higher collateral ratio.

### Example of a Redemption:
- Imagine your loan has 10,000 MUSD of debt and \$13,000 in BTC collateral (a healthy 130% ratio).
- Another user redeems 5,000 MUSD, and your loan is chosen.
- Outcome:
  - Your debt is reduced to 5,000 MUSD.
  - Your collateral is reduced to \$8,000.
  - Your new collateral ratio is now 160% (\$8,000 / 5,000 MUSD), making your loan much safer!

### How to Get Your Leftover Collateral After a Full Redemption
If your loan is fully paid off through a redemption, your surplus collateral is safe. You can reclaim it at any time.

Important Note: The current user interface may not show your available surplus. To recover it, you may need to interact directly with the protocol's smart contracts or contact the support team for assistance.

---

## Key Differences at a Glance

| Feature | Liquidation (Forced Closure) | Redemption (Debt Paydown) |
| --- | --- | --- |
| When it happens | Only when your ratio is below 110% | Can happen when your ratio is above 110% |
| Who starts it? | Anyone (usually bots) | Any user holding MUSD |
| Effect on debt | Completely eliminated | Reduced or eliminated |
| Effect on collateral | Complete loss | Partially removed, with any surplus claimable by you |
| Effect on you | Negative event; loan is closed and assets lost | Neutral or positive; loan gets smaller and healthier |

---

## What is Recovery Mode?
Recovery Mode is a temporary safety state that activates if the entire MUSD system's total collateral ratio drops below 150%.

During Recovery Mode:
- The minimum collateral ratio for liquidations increases from 110% to 150%.
- This means loans with ratios below 150% can be liquidated.
- The system encourages users to add collateral or repay debt to improve its overall health.

---

## How to Keep Your Loan Safe

### To Avoid Liquidation:
- Maintain a healthy buffer. Aim for a collateral ratio well above 150% to be safe from market volatility and Recovery Mode.
- Monitor your loan's health regularly, especially if the BTC price is dropping.
- Be proactive: Add more collateral or repay some of your MUSD debt if your ratio gets too low.

### To Reduce the Likelihood of Redemption:
- Keep a high collateral ratio. The higher your ratio is compared to others, the less likely you are to be chosen first for redemptions. A ratio above 150% is a good target.