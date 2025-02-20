---
title: Fees
---

The protocol collects fees using the following mechanisms:

- Origination Fee: A governable origination fee of 0.5%, which is added as debt to a trove but minted to governance
- Redemption Fee: Flat 0.5% fee taken as a percentage of the total collateral drawn from the system when redeeming mUSD for collateral (BTC)
- Gas Compensation Fee: A refinancing fee, which operates like the origination fee
- Loan Interest: A fixed-interest on the principal of the loan

There is a global, governable interest rate that all new troves use when they are opened. After the trove is opened, changes to the global interest rate do not impact any existing troves. At any time, users can refinance to the global rate.

Simple interest is non-compounding. As an example, when a user owes a principal of $10,000 at a 3% annual interest rate, the user owes $300 in interest after a year. After another year without paying, the users owes $600 in interest.

## Origination Fee

Flat 0.5% fee (governable) charged when starting a loan

Example: For $10,000 mUSD loan, $50 fee is charged

User receives $10,000, protocol receives $50, total debt is $10,050

## Redemption Fee

Flat 0.5% fee taken as a percentage of the total collateral drawn from the system when redeeming mUSD for collateral (BTC)

Example: Redeeming $1000 of mUSD results in the redeemer receiving $995 worth of collateral, and paying a $5 fee.

## Gas Compensation Fee

Flat $200 (governable) held in reserve. This acts as a reward for liquidators and is not included in loan repayment amount. The fee is included in collateral ratio calculations. If you close your loan, this fee is returned.

## Loan Interest

Interest on the mUSD loan accrues every block at a governable APR. This is simple interest based only on the principal and is not compound interest.

Example: $10,000 loan for 1 year = $100 interest

Interest must be paid before principal payments.