---
title: Ditto MUSD Savings Vault
description: Deposit MUSD on Mezo and receive dMUSD for an automated cross-chain vault with an initial allocation to Spark Savings
topic: users
---

The Ditto MUSD Savings Vault gives MUSD holders another way to put their assets to work through Mezo Earn. Deposit MUSD on Mezo and receive **dMUSD**, a receipt token representing your vault position. Ditto Network handles the swaps, bridging, and allocation behind the vault, with an initial allocation to **Spark Savings on Ethereum**.

You hold a vault position on Mezo while Ditto manages the steps needed to access the underlying yield on another chain.

Explore the [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## How it works

1. **Deposit MUSD on Mezo.** You receive dMUSD representing your position in the vault.
2. **Ditto allocates the assets.** Operators handle the swaps and bridging to Ethereum, then allocate to Spark Savings.
3. **The underlying strategy earns yield.** Your dMUSD represents a claim on the vault's assets. Returns depend on the underlying strategy and are variable.
4. **Request redemption to exit.** Ditto reverses the process and returns MUSD on Mezo after the withdrawal has been processed.

### How the automation works

Multiple operators independently verify proposed vault actions before signing them. Execution requires a minimum number of operator approvals, and smart contracts enforce additional checks on-chain. Vault valuation (net asset value, or NAV) is also published on-chain through the signed pipeline.

These checks govern automated execution; they do not eliminate smart contract, bridge, operator, or strategy risk.

## Vault details

| Parameter          | Value                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| Deposit asset      | MUSD on Mezo                                                                                               |
| Receipt token      | dMUSD                                                                                                      |
| Vault operator     | Ditto Network                                                                                              |
| Initial allocation | Spark Savings on Ethereum                                                                                  |
| Redemption asset   | MUSD on Mezo                                                                                               |
| Withdrawals        | Asynchronous — allow time for processing                                                                   |
| Current APY        | Variable — check the [vault page](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

Past performance does not reflect current performance or guarantee future returns. Review the current rate, any fees, withdrawal terms, and risks in the app before depositing.

## How to deposit

1. Open the [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) and connect your wallet on Mezo.
2. Review the strategy, current rate, and withdrawal terms.
3. Enter the amount of MUSD you want to deposit and follow the app's approval and deposit prompts.
4. Confirm the required transactions in your wallet. Your dMUSD receipt tokens represent your vault position.

## Withdrawals

Request a redemption through the vault page and follow the prompts for your dMUSD position. Ditto unwinds the underlying allocation, bridges and swaps as needed, and returns MUSD on Mezo.

**Withdrawals are asynchronous.** Submitting a redemption request does not mean that MUSD is immediately available in your wallet. Allow time for the underlying strategy and cross-chain operations to process, and follow any completion steps shown in the app. Processing time can vary; do not assume a fixed withdrawal window.

If you need help with a pending redemption, contact [Mezo support](/docs/users/resources/support) with your wallet address, transaction hash, and the time of your request.

## How dMUSD differs from sMUSD

The Ditto vault is a separate product from Mezo's native [MUSD Savings Vault](/docs/users/mezo-earn/vaults/musd-savings-vault):

- **dMUSD:** A position in the Ditto-operated vault, initially allocated to Spark Savings on Ethereum. Redemptions return MUSD on Mezo through an asynchronous process.
- **sMUSD:** A position in Mezo's native savings vault, which earns yield from MUSD protocol activity.

The receipt tokens represent different vaults. Review each vault's own terms before depositing or redeeming.

## Risks

- **Smart contract risk:** A bug or exploit in the vault, automation contracts, or underlying protocols could result in loss of funds.
- **Cross-chain risk:** Swaps and bridging add dependencies. Bridge failures, network delays, or unfavorable execution can affect the position and redemption process.
- **Strategy and stablecoin risk:** Returns depend on Spark Savings and the assets used by the strategy. Rates can change, and stablecoins can lose their peg.
- **Operator risk:** Processing depends on sufficient operator approvals and successful execution. Operator downtime or failures can delay vault actions.
- **Withdrawal risk:** Assets must be made available from the underlying allocation and returned to Mezo. You may be unable to access your MUSD immediately after requesting redemption.

## Links and resources

- [Ditto MUSD Savings Vault on Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Ditto Network documentation](https://docs.dittonetwork.io/)
- [Spark Savings documentation](https://docs.spark.finance/products/spark-savings)
- [Mezo support](/docs/users/resources/support)
