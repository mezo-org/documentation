---
title: BitcoinDollar MUSD Vault
description: >-
  Deposit MUSD on Mezo for a vault that keeps a reserve in sMUSD and deploys the
  rest into BitcoinDollar's bdUSD on Ethereum
topic: users
---

<!-- TODO before merge: replace every [BRACKETED] placeholder, swap the /earn/vaults links for the vault's own page, and confirm the vault name and branding with BitcoinDollar. -->

The BitcoinDollar MUSD Vault gives MUSD holders a way to earn bitcoin-dollar yield without leaving Mezo. Deposit MUSD on Mezo and receive **[RECEIPT TOKEN]**, a receipt token representing your vault position. The vault keeps part of its assets as a liquid reserve in Mezo's [MUSD Savings Vault](/docs/users/mezo-earn/vaults/musd-savings-vault) (sMUSD) and deploys the rest into **bdUSD**, BitcoinDollar's USD vault on Ethereum.

You hold one MUSD-denominated position on Mezo while the vault handles the swaps and bridging needed to earn bdUSD yield on Ethereum.

Explore the [BitcoinDollar MUSD Vault](https://mezo.org/earn/vaults).

## How it works

### Deposits

1. **Deposit MUSD on Mezo.** Your deposit enters a queue, and you receive [RECEIPT TOKEN] at the vault's next price update.
2. **Part of the vault is kept in reserve.** The vault keeps a target share of its assets, about 10%, in sMUSD so that smaller withdrawals can be paid quickly.
3. **The rest is deployed to Ethereum.** MUSD is converted and bridged to Ethereum in batches, through either the Mezo native bridge or Wormhole. For each batch, the vault uses whichever route offers the better price, and it can split a batch across both.
4. **bdUSD earns yield.** Gains in bdUSD flow into the vault's share price, so the value of your [RECEIPT TOKEN] grows without any action from you.

### Withdrawals

1. **Request a withdrawal.** Requests are queued and priced at the vault's next price update.
2. **Smaller withdrawals are paid from the reserve.** If the sMUSD reserve covers the request, it settles from the reserve.
3. **Larger withdrawals are funded from bdUSD.** The vault withdraws from bdUSD on Ethereum and bridges the funds back to Mezo.
4. **You receive MUSD on Mezo.**

### How yield accrues

Because deposits are converted, bridged and deployed in batches, yield accrues in steps rather than continuously. The reserve held in sMUSD earns the MUSD Savings Vault rate, which is lower than bdUSD's, so the vault's overall rate is below bdUSD's own rate.

### How funds are controlled

Every operator action is checked against an on-chain allowlist that limits where funds can go. Both bridges can only deliver funds to the vault's own contracts on the other chain.

These checks govern how funds move; they do not eliminate smart contract, bridge, strategy or stablecoin risk.

## Vault details

| Parameter        | Value                                                                                         |
| ---------------- | --------------------------------------------------------------------------------------------- |
| Deposit asset    | MUSD on Mezo                                                                                  |
| Receipt token    | [RECEIPT TOKEN]                                                                               |
| Vault operator   | BitcoinDollar, on Mellow vault infrastructure                                                 |
| Reserve          | About 10% of vault assets in sMUSD (MUSD Savings Vault)                                       |
| Strategy         | bdUSD, BitcoinDollar's USD vault on Ethereum                                                  |
| Bridges          | Mezo native bridge and Wormhole                                                               |
| Redemption asset | MUSD on Mezo                                                                                  |
| Withdrawals      | Queued; paid from the reserve when possible, otherwise processed in batches                   |
| Fees             | [FEES]                                                                                        |
| Current APY      | [APY] as of [DATE]. Variable; check the [vault page](https://mezo.org/earn/vaults) for the latest rate |

Past performance does not reflect current performance or guarantee future returns. Review the current rate, any fees, withdrawal terms, and risks in the app before depositing.

## How to deposit

1. Open the [BitcoinDollar MUSD Vault](https://mezo.org/earn/vaults) and connect your wallet on Mezo.
2. Review the strategy, current rate, and withdrawal terms.
3. Enter the amount of MUSD you want to deposit and follow the app's approval and deposit prompts.
4. Confirm the required transactions in your wallet. You receive [RECEIPT TOKEN] at the vault's next price update.

## Withdrawals

Request a withdrawal through the vault page and follow the prompts for your [RECEIPT TOKEN] position. The vault pays smaller requests from its sMUSD reserve. Larger requests wait while the vault withdraws from bdUSD and bridges the funds back to Mezo.

**Withdrawals are queued.** Submitting a request does not mean that MUSD is immediately available in your wallet. Allow time for the request to be priced and, for larger amounts, for funds to return from Ethereum. Follow any completion steps shown in the app. [CONFIRM typical processing times with BitcoinDollar.]

If you need help with a pending withdrawal, contact [Mezo support](/docs/users/resources/support) with your wallet address, transaction hash, and the time of your request.

## How it differs from sMUSD

The vault holds sMUSD as its reserve, but your [RECEIPT TOKEN] is a different position from sMUSD:

- **[RECEIPT TOKEN]:** A position in the BitcoinDollar-operated vault. Most of its assets are deployed into bdUSD on Ethereum, with a reserve in sMUSD. Withdrawals are queued.
- **sMUSD:** A position in Mezo's native [MUSD Savings Vault](/docs/users/mezo-earn/vaults/musd-savings-vault), which earns yield from MUSD protocol activity.

Review each vault's own terms before depositing or withdrawing.

## Risks

- **Smart contract risk:** A bug or exploit in the vault, the Mellow vault infrastructure, bdUSD, or the bridges could result in loss of funds.
- **Bridge risk:** The vault moves funds between Mezo and Ethereum over the Mezo native bridge and Wormhole. A bridge failure, pause or delay can affect deployment and withdrawals.
- **Conversion and liquidity risk:** MUSD is swapped for dollars on the way out and back on the way in. Thin markets or unfavorable prices can reduce the value of the position.
- **Strategy and stablecoin risk:** Returns depend on bdUSD and the assets in BitcoinDollar's strategy. Rates can change, and stablecoins can lose their peg.
- **Withdrawal risk:** Large withdrawals depend on funds returning from Ethereum. You may be unable to access your MUSD immediately after requesting a withdrawal.

## Links and resources

- [BitcoinDollar MUSD Vault on Mezo](https://mezo.org/earn/vaults)
- [BitcoinDollar](https://btcd.fi/)
- [MUSD Savings Vault](/docs/users/mezo-earn/vaults/musd-savings-vault)
- [Mezo support](/docs/users/resources/support)
