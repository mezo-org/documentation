---
title: MUSD Fees & Costs
description: See all fee structures and costs involved in using MUSD on Mezo.
topic: users
---

The MUSD system fees are split between the MUSD treasury stability pool (which covers liquidations and bad debt). The initial portion is 50/50, but this is subject to change based on the MUSD splitter. 

![](/docs/images/musd/musd-economy.webp)

## Interest Fees (1–5% APR)

Interest on MUSD loans is fixed for the life of the loan. When credit is increased, the new credit will be added at the current interest rate.

At launch, interest fees fund the MUSD treasury stability pool, which covers liquidations and bad debt.

## Redemption Fees (0.75%)

This fee is paid when exchanging MUSD for the BTC collateral. When a user has an outstanding loan, the redemption fee is zero. Users who do not have an outstanding MUSD loan must pay the 0.75% redemption fee. 

At launch, redemption fees fund the MUSD treasury stability pool, which covers liquidations and bad debt.

## Issuance fee (0.1%)

The issuance fee is paid when an MUSD loan is opened. The fee is 0.1% of borrowed MUSD and is paid in MUSD. A \$10k MUSD loan would pay a \$50 issuance fee in MUSD. If you increase your loan, you pay the issuance fee on the newly borrowed MUSD.

## Refinance fee (0.1%) 

The refinance fee is incurred when a MUSD loan holder extends their line of credit or reduces the amount of collateral backing their loan. Refinancing fees are paid in MUSD. 

## Gas Deposit ($200 flat fee)

A \$200 deposit ensures that liquidations are viable. It is returned when the loan is closed. The Gas deposit is minted as extra debt in the loan and held in escrow until the loan is closed. This debt counts towards calculating the collateralisation ratio.

## Other Gas & Transaction Fees

Users interacting with the MUSD system will have to pay transaction fees for each transaction broadcasted to Mezo Network. This includes actions such as minting, redeeming, staking, and claiming.
