---
title: MUSD Liquidations & Redemptions
description: >-
  Learn about liquidations and redemptions.
topic: users
---

## Overview
When you borrow against your Bitcoin as collateral, you create a loan position (also called a "Trove"). Two key system events can affect your loan:

- **Liquidation**: A forced closure of your loan that happens only if its health, measured by the collateral ratio, drops below a critical minimum of 110%. In a liquidation, you lose your collateral.
- **Redemption**: Anyone holding MUSD can exchange it with the protocol for BTC at \$1 per MUSD (minus a redemption fee, currently 0.75%), which keeps MUSD's price close to \$1 through arbitrage. Redemptions pull BTC from the trove with the lowest collateral ratio first (as long as it's still above the 110% liquidation threshold), so a redemption can shrink your loan even while your trove is safe from liquidation. If the redemption amount is smaller than that trove's debt, it's a partial redemption — only some of the debt is cancelled. If it's larger, the trove is fully redeemed and the leftover amount rolls over to the next-lowest-CR trove. Either way, debt and collateral are removed in equal dollar amounts, which raises the affected trove's collateralization ratio — though the borrower loses BTC exposure in the process.

---

## Liquidations ⚠️

### What is a Liquidation?
A liquidation is a safety mechanism that automatically closes a loan when it becomes too risky. This protects the entire system from becoming unstable.

### When Does a Liquidation Happen?

:::danger
Your loan is at risk of liquidation if its collateral ratio falls below 110%. Think of this as the absolute minimum safety buffer required for your loan.
:::

### What Happens During a Liquidation?
There are two ways the system handles a liquidation:

#### Using the Stability Pool (Default Method):
- The system uses stablecoins from its safety reserve, the Stability Pool, to completely pay off your debt.
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
A redemption is a feature that allows anyone holding a stablecoin to swap it for an equal dollar value of BTC (minus the redemption fee) directly from the protocol. This process helps keeping the stablecoin near its \$1 peg. It is not a penalty and does not mean your loan is unsafe.

### When Does a Redemption Happen?
Redemptions can happen at any time. When a user wants to redeem their stablecoin for BTC, the system looks for loans to source the collateral from.

### Which Loans Are Chosen for Redemption?
The system always starts with the loan that has the lowest collateral ratio, but is still above the 110% liquidation threshold — even if that ratio is healthy and well above 110%. If your loan is less collateralized than others, it is more likely to be chosen for a redemption.

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
If your loan is fully paid off through a redemption, your surplus collateral is safe. You can reclaim it at any time via Mezo app.

Important Note: The current user interface may not show your available surplus. If you do not see a "Loan redeemed" alert on the Borrow page, follow our [How To Claim Your Collateral After a Full Redemption](/docs/users/borrow/claim-collateral-after-redemption/) guide to manually claim it through the Mezo Explorer.

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

:::note
Recovery Mode is a temporary safety state that activates if the entire system's total collateral ratio (TCR) drops below 150%. It is a special system state with stricter borrowing rules.
:::

During Recovery Mode:
- **Liquidations are not affected.** The liquidation threshold remains at 110% — the same as in Normal Mode. Unlike Liquity v1, MUSD does not expand liquidations to higher collateral ratios during Recovery Mode.
- New loans cannot be opened below 150% collateral ratio.
- Refinancing is blocked.
- The system encourages users to add collateral or repay debt to restore the TCR above 150%.

---

## How to Keep Your Loan Safe

:::tip
The best defense against both liquidation and redemption is maintaining a high collateral ratio — aim for well above 150%.
:::

### To Avoid Liquidation:
- Maintain a healthy buffer. Aim for a collateral ratio well above 110% to stay safe from market volatility. A ratio above 150% also ensures you can borrow and refinance freely even if the system enters Recovery Mode.
- Monitor your loan's health regularly, especially if the BTC price is dropping.
- Be proactive: Add more collateral or repay some of your debt if your ratio gets too low.

### To Reduce the Likelihood of Redemption:
- Keep a high collateral ratio. Unlike liquidations, which are triggered at a fixed threshold, redemptions are relative—the system selects troves with the lowest collateral ratios first. The higher your ratio is compared to other troves, the less likely yours is to be redeemed. While 150% is typically a good baseline target, optimal positioning depends on current market conditions and the collateral ratios of other open troves. It's worth monitoring outstanding troves periodically and adjusting your ratio accordingly to stay well above the bottom of the pack.

### Keep Tabs on your Loan with MUSD Monitor
For advanced monitoring, you can use [mezotools.cc](https://mezotools.cc).

This tool allows you to:
- Check real-time Trove health and Collateral Ratios.
- View recent system-wide redemptions and liquidations.
- Track BTC and stablecoin prices directly from Mezo's on-chain oracles.

---

For a complete list of MUSD terms and definitions, see [Architecture & Terminology](/docs/users/borrow/architecture-and-terminology#definitions).
