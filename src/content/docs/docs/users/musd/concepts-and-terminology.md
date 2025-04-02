---
title: Concepts and Terminology
---

The MUSD system consists of four main contract groups:

* Token (MUSD): The stablecoin at the heart of the system, designed to maintain a peg to USD.
* Core Protocol: Handles the main operations like opening/closing positions, managing collateral, and maintaining system stability
* Asset Pools: Manages the system’s various collateral and liquidity pools
* Supporting Contracts: Provides essential services like price feeds, position sorting, and protocol-controlled value management

## Custody and collateral management

MUSD positions can be tracked onchain, and the underlying Bitcoin collateral is securely managed using tBTC’s robust, decentralized custody infrastructure.

You can see all BTC backing MUSD in real time on the [Mezo block explorer](https://explorer.test.mezo.org/address/0x637e22A1EBbca50EA2d34027c238317fD10003eB).

tBTC, which is built by the same team behind Mezo, [Thesis*](https://thesis.co/?ref=blog.mezo.org), is powered by the [Threshold Network](https://threshold.network/?ref=blog.mezo.org). Threshold is a decentralized signer set that has operated the Threshold Bitcoin bridge since early 2020 and successfully bridged over 18k Bitcoin. Proof of reserves for tBTC have been live for the entire life of the bridge and are viewable are [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

For a thorough dive into tBTC, you can see the [Bitcoin Layers research report](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org) analyzing tBTC against other popular wrappers such as WBTC and cbBTC. Additional risk analysis has been done by the [LlamaRisk team](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) in advance of tBTC’s listing as collateral on Aave.

### Contract Custody

A user opens up a position by calling BorrowerOperations.openTrove, providing BTC, and requesting MUSD. The BTC is routed to the ActivePool, where it stays until one of the following actions occurs:

* Withdraws (`BorrowerOperations.withdrawColl`)
* Pays off their debt (`BorrowerOperations.closeTrove`)
* Redeems collateral (`TroveManager.redeemCollateral`)
* Is liquidated (`TroveManager.liquidate`)

Liquidated positions are either paid for by the StabilityPool, in which case the BTC is transferred to the Stability Pool, or the debt and collateral are absorbed and redistributed to other users, in which case the BTC is transferred to the DefaultPool, where it will then be distributed.

## Fixed-Interest Borrowing

* Global Interest Rate: A single global interest rate applies to all newly opened troves.
* Maintaining Interest Rates: Once a trove is opened, it retains the interest rate at which it was created, even if the global rate changes. The interest rate on a trove can only be updated by the user through the refinance function.
* Refinance Function: The refinance function allows users to adjust their trove’s debt to the new global interest rate. This process incurs a refinancing fee, which is a configurable percentage of the issuance fee. Refinancing offers users the advantage of avoiding collateral movement while incurring lower fees compared to closing and reopening a trove at the updated rate.
* Simple Interest: Interest is calculated using a simple interest model rather than a compounding one.
* Interest Payments: Interest payments are directed to the PCV (Protocol Controlled Value). The allocation of these payments is governed and can be split between an arbitrary recipient and repayment of the bootstrap loan.

## Additional Governance

* Governance Control: The interest rate and other critical parameters are controlled by governance. Changes to these parameters require a governance proposal and a minimum delay before they can be enacted.
* Interest Rate Proposals: New interest rates can be proposed by governance. These proposals must be approved after a minimum delay to ensure stability and predictability.

## Protocol Controlled Value (PCV)

The Protocol Controlled Value (PCV) contract is a key component of the system, responsible for managing fees collected from borrowing and refinancing. Below is an overview of how the PCV operates:

* Fee Collection: Borrowing fees and refinancing fees are directed to the PCV contract.
* Fee Allocation: Fees collected by the PCV are allocated to two purposes: paying down the bootstrap loan and sending funds to the gauge system.
* Governable Split: The allocation of fees between paying down the debt and the gauge system is governable. However, until the bootstrap loan is fully repaid, no more than 50% of the fees can be sent to the gauge system.
* Post-Debt Repayment: Once the bootstrap loan is fully repaid, 100% of the fees collected by the PCV are automatically sent to the gauge system.

## Definitions

Trove: a collateralized debt position, bound to a single Ethereum address. Also referred to as a “CDP” in similar protocols.

- **Active collateral:** the amount of collateral recorded on a Trove’s struct

- **Active principal:** the amount of MUSD debt recorded on a Trove’s struct, not including any interest

- **Active interest:**:** the amount of MUSD interest recorded on a Trove’s struct

- **Active debt:** the amount of MUSD debt recorded on a Trove’s struct (active principal plus active interest)

- **Entire collateral:** the sum of a Trove’s active collateral plus its pending collateral rewards accumulated from distributions

- **Entire debt:** the sum of a Trove’s active debt plus its pending debt rewards accumulated from distributions

- **Individual collateralization ratio (ICR):** a Trove’s ICR is the ratio of the dollar value of its entire collateral at the current collateral:**USD price, to its entire debt

- **Nominal collateralization ratio (nominal ICR, NICR):** a Trove’s nominal ICR is its entire collateral (in collateral) multiplied by 100e18 and divided by its entire debt.

- **Entire system collateral:** the sum of the collateral in the ActivePool and DefaultPool

- **Entire system debt:** the sum of the debt in the ActivePool and DefaultPool

- **Total collateralization ratio (TCR):** the ratio of the dollar value of the entire system collateral at the current collateral:USD price, to the entire system debt

- **Critical collateralization ratio (CCR):** 150%. When the TCR is below the CCR, the system enters Recovery Mode.

- **Redemption:** the act of swapping MUSD tokens with the system, in return for an equivalent value of collateral. Any account with an MUSD token balance may redeem them, regardless of whether they are a borrower.

- **Liquidation:** the act of force-closing an undercollateralized Trove and redistributing its collateral and debt. When the Stability Pool is sufficiently large, the liquidated debt is offset with the Stability Pool, and the collateral distributed to depositors. If the liquidated debt can not be offset with the Pool, the system redistributes the liquidated collateral and debt directly to the active Troves with >110% collateralization ratio. Liquidation functionality is permissionless and publically available - anyone may liquidate an undercollateralized Trove, or batch liquidate Troves in ascending order of collateralization ratio.

- **Collateral Surplus:** The difference between the dollar value of a Troves’s collateral, and the dollar value of its MUSD debt. In a full liquidation, this is the net gain earned by the recipients of the liquidation.

- **Offset:** cancellation of liquidated debt with MUSD in the Stability Pool, and assignment of liquidated collateral to Stability Pool depositors, in proportion to their deposit.

- **Gas compensation:** A refund, in MUSD and collateral, automatically paid to the caller of a liquidation function, intended to at least cover the gas cost of the transaction. Designed to ensure that liquidators are not dissuaded by potentially high gas costs.