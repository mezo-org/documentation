---
title: MUSD Fees & Costs
description: See all fee structures and costs involved in using MUSD on Mezo.
topic: users
---

## Fee Summary

| Fee | Amount | When Charged |
| --- | --- | --- |
| **Issuance fee** | 0.1% of borrowed MUSD | Opening or increasing a loan |
| **Interest** | 1–5% APR (fixed at open) | Accrues on outstanding debt |
| **Redemption fee** | 0.75% | Exchanging MUSD for BTC collateral |
| **Refinance fee** | 0.02% of debt | Refinancing a loan to a new rate |
| **Gas deposit** | 200 MUSD (flat) | Opening a loan (returned on close) |

## Fee Distribution

:::note
Fees are split between two destinations: **(1)** repaying the protocol bootstrap loan and **(2)** the MUSD Savings Vault. The initial split is 50/50 and is governable via the MUSD splitter. A minimum of 50% of fees must go toward loan repayment until the bootstrap loan is fully repaid. After repayment, all fees flow to the Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Interest Fees (1–5% APR)

Interest on [MUSD](https://mezo.org/feature/musd) loans is fixed for the life of the loan. When credit is increased, the new credit will be added at the current interest rate.

At launch, interest fees fund the MUSD treasury stability pool, which covers liquidations and bad debt.

## Redemption Fees (0.75%)

This 0.75% fee is paid by the redeemer during redemption (operation of paying up someone else's MUSD debt in exchange for that borrower's BTC collateral).

At launch, redemption fees fund the MUSD treasury stability pool, which covers liquidations and bad debt.

## Issuance Fee (0.1%)

The issuance fee is paid when an MUSD loan is opened. The fee is 0.1% of borrowed MUSD and is paid in MUSD. A $10,000 MUSD loan would pay a $10 issuance fee in MUSD. If you increase your loan, you pay the issuance fee on the newly borrowed MUSD.

## Refinance Fee (0.02% of debt)

The refinance fee is incurred when a MUSD loan holder requests to update the loan's interest rate. The borrower may want to refinance their loan if the interest rate offered for new loans is better than the fixed interest rate on the user's loan. Refinancing allows to update the loan's rate to the new rate. Each refinance request incurs a refinance fee of 0.02% of the debt and is paid in MUSD.  

## Gas Deposit (`$200` flat fee)

A $200 deposit ensures that liquidations are viable. It is returned when the loan is closed. The gas deposit is minted as extra debt in the loan and held in escrow until the loan is closed. This debt counts towards calculating the collateralization ratio.

## Other Gas & Transaction Fees

Users interacting with the MUSD system will have to pay transaction fees for each transaction broadcasted to Mezo Network. This includes actions such as minting, redeeming, staking, and claiming.

## Risks to Know

:::caution
Borrowing MUSD carries risk. Understanding these risks helps you protect your position.

**Redemption risk** — To maintain the MUSD peg, the protocol can redeem MUSD against collateral, starting with the loans that have the **lowest collateral ratio**. If your loan is redeemed against, you lose exposure to BTC price upside and may face tax implications. To reduce this risk, keep your collateral ratio higher than other borrowers.

**Liquidation risk** — If your loan's collateral ratio falls **below 110%**, your position can be liquidated. You lose your collateral and keep the borrowed MUSD. To reduce this risk, monitor your loan regularly and add collateral when needed. For full details, see [Liquidations & Redemptions](/docs/users/borrow/liquidation-mechanics).
:::
