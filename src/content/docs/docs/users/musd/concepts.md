---
title: Concepts
---

Before you [Borrow and Mint MUSD](./mint-musd.md), understand the core concepts for how the MUSD stablecoin works.

## Borrow limits

The calculation for the borrowing limit uses the following equation:

$$
\begin{split} \text{Maximum debt} = \text{Min} ( & \text{Amount that puts system into recovery mode}, \\ &  \text{Amount that puts user below MCR}, \\ & \text{Amount that puts user over max borrow amount}) \end{split}
$$

This system prevents risky levels of debts at the loan level and the system-wide level. To prevent risk from individual loans, individual deposits can be liquidated when the individual collateralization ratio (ICR) is less than the minimum collateralization ratio (MCR) as described in the MUSD borrow mechanics.

### Recovery mode

The system enters recovery mode if following condition is met:

$$
\frac{\text{total collateral}}{\text{total debt}} \leq \text{CCR} = 1.5
$$

If the system is in the recovery mode, it operates with additional restrictions:

* Users cannot open new loans that have ICR under the Critical Collateral Ratio (CCR).
* Users cannot adjust existing loans if it causes their ICR to fall under the CCR.
* Refinancing is blocked.

### User minimum collateralization

Users can borrow MUSD against provided BTC collateral only if the following equation is satisfied:

$$
\frac{\text{amount of deposited BTC} \times \text{BTC price}}{\text{amount of borrowed MUSD}} \geq \text{MCR} = 1.1
$$

This condition prevents users from borrowing more MUSD than is required by the minimum collateralization ratio. Consider the following example:

- The BTC price is 100k USD.
- A user deposits 0.03 BTC as collateral.
- The user will be able to borrow only up to 2727 MUSD ($0.03 * 100000 / 1.1$) minus any fees, which are included in ICR calculations.

### User maximum borrow amounts

The user's final maximum borrow amount is calculated using the following equation:

$$
\text{Max borrow amount at loan open} = \frac{\text{amount of deposited BTC} \times \text{BTC price}}{1.1} 
$$

## Fees structure

When a user borrows MUSD and provides BTC as collateral, the following fees are charged:

* Gas compensation per loan, which is returned when the loan is closed: 200 MUSD
* Origination fee for every new borrow and borrow increase: 0.1% of the borrowed amount, which includes the total debt if the users is adjusting an existing loan.

Consider an example where a user wants to borrow 4000 MUSD.

- Their original borrow amount is 4000 MUSD.
- Gas compensation is 200 MUSD.
- The origination fee is $0.5\% * 4000 MUSD =20 MUSD$

The principal amount is:

$$
4000 MUSD + 200 MUSD + 20 MUSD = 4220 MUSD
$$

The 4220 MUSD accrues interest.

## Interest rates

When you borrow MUSD, you accrue interest on the amount that you borrow. Interest rates on loans are set when a loan is opened. The global interest rate is separate, and does not change the interest rate on existing loans.

- **Global interest rate:** Set by governance
- **loan interest rate:** A snapshot of the global interest rate value at the moment when the loan is created

To understand how this works, consider the following example:

1. Governance sets global interest rate at 3%
1. Alice opens loan , so the Alice's new loan has an interest rate of 3%
1. Governance sets the global interest rate to 6%.
1. Bob opens a loan , so Bob’s new loan has an interest rate of 6%.

In this scenario, the interest rate on Alice's loan remains at 3% and Bob's loan remains at 6%.

Additionally, borrowing MUSD after global interest have changed does not change the rate for the loan . Consider the following example:

1. Governance sets global interest rate at 3%.
1. Alice opens a loan , so Alice’s new loan has an interest rate of 3%.
1. Governance sets global interest rate at 6%.
1. Alice borrows MUSD.

In this scenario, Alice’s loan maintains an interest rate of 3%. However, the collateralization ratio is calculated based on increased principal now that the interest rate is higher.

To prevent changes in the global interest rate from being unfavorable for users, [refinancing](#refinancing) is available.

## Refinancing

In the first example, the changes of interest have been beneficial for Alice. But if governance set the global interest rate at an amount lower than 3%, Alice would be now paying higher interest than users who just opened their loans. To mitigate that we are allowing for refinancing, which updates the Alice’s loan interest rate based on the current global interest rate. When refinancing we’re also updating the the user’s principal:

$$
\text{new principal} = \text{old principal} + \text{old interest} + \text{refinancing origination fee}
$$

The refinancing origination fee is a fraction of the regular origination fee. Both of these fees are set by governance.

## Liquidations

To prevent risk on individual loans, deposits can be liquidated any time their individual collateralization ratio is less than the minimum collateralization ratio of 1.1. Liquidation can happen any time during normal operation and also while the system is in recovery mode.

$$
\text{ICR} (\text{Individual's Collateralization Ratio}) < \text{MCR} (\text{Minimum Collateralization Ratio})
$$

Liquidation must be initiated by a caller. Callers are rewarded with the following items:

- 0.5% of the collateral
- Gas compensation (200 MUSD)

Callers compete to obtain a valid liquidation and earn the reward.

During liquidation, the Stability pool pays the debt and receives the remaining collateral of 99.5%.

As an example, if a user’s debt is 85k MUSD and user deposited 1 BTC as collateral while the price of BTC is 100k USD, the ICR is $100k / 85k = 1.18$ and is still above the MCR. Liquidation cannot occur.

If the BTC price drops to \$90k USD, the ICR is now $90k / 85k = 1.06$. This is below the MCR and liquidation can occur.

If a caller initiates liquidation, the user looses the collateral of 1 BTC but keeps the borrowed 85k MUSD. The liquidation caller receives the following reward:

$$
\text{0.5\% x 90000 worth of BTC} + \text{200 MUSD} = \text{450 USD worth of BTC + 200 MUSD}. 
$$

The stability pool looses 85000 MUSD, but it gains $99.5\% * 90000 \text{USD worth of BTC} = 89550 \text{USD worth of BTC}$. In total, the Stability pool gained ~4550 USD worth of BTC. It can then sell the BTC immediately for MUSD and put MUSD back to the pool. To understand stability pool mechanics and scenarios, see the [stability pool](#stability-pooltability pool) section.

## Stability pool

Users deposit MUSD into the stability pool (SP) and receive shares. Those users gain from the liquidations of other users. Liquidations result in the stability pool paying the MUSD debt, but the stability pool also receives 95,5% of the BTC collateral of the liquidated loan .

Consider the following example:

1. Alice deposited 20k MUSD into the SP. Alice owns 100% of the SP.
1. Bob deposits 10k MUSD into SP. Alice now owns 2/3 of the SP and Bob owns 1/3 of the SP. The SP has 30k MUSD and 0 BTC.
1. Carol is liquidated for 5k MUSD. 5400 USD worth of BTC from the collateral goes to the SP. The SP has now 25k MUSD and 5400 USD worth of BTC.
1. Alice leaves the LP with 2/3 of the SP shares. Alice profits with a return calculated by the following equation:

$$
2/3 * (25000 MUSD + 5400 \text{USD worth of BTC}) = \\
\text{16.67k MUSD} + 3600\text{USD worth of BTC} = \text{\~20.27k USD}
$$

If the stability pool is empty, the debt and collateral are redistributed proportionally to all the existing loans. This means that the ICR of existing loans will lower, which may trigger additional liquidations. The MUSD and borrow mechanics seed the SP with significant initial funds to decrease additional risk.

## PCV loan

The Protocol Controlled Value (PCV) contract mints itself 100M MUSD on contract creation. Then, it deposits it into the SP. At this point, the PCV owns almost all shares of the SP. It gains from other users liquidations. With that gained value, the PCV pays back the 100M MUSD debt.