---
title: USDC Lending Vault
description: Supply mUSDC to the BTC-backed Morpho lending market on Mezo and earn borrower interest or MEZO emissions
topic: users
---

The USDC Lending Vault gives you direct exposure to a transparent market for BTC-backed credit. Deposit mUSDC, and your capital is supplied to borrowers who post BTC as collateral. Interest paid by borrowers is the source of depositor yield.

Under the hood, deposits go into a curated Morpho Vault V2 (the Morpho BTC-mUSDC Vault), which supplies the Morpho Blue BTC / mUSDC market on your behalf. You don’t interact with Morpho directly — you hold a share token that grows in value as interest accrues.

Visit the vault at [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). To borrow mUSDC against BTC, see [How to Borrow mUSDC](/docs/users/borrow/how-to-borrow-musdc).

**How it works:**

- Deposit mUSDC and receive `morphoBTC-mUSDC` — a share token representing your claim on the vault
- Yield accumulates in the share price: the same number of shares becomes redeemable for more mUSDC over time
- Loans are overcollateralized by BTC (86% liquidation LTV). Deposited assets are not rehypothecated
- There is no minimum deposit and no protocol fee to enter or exit
- APR is variable based on borrower demand — check the current rate at [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Understanding your shares

`morphoBTC-mUSDC` is your vault share token. A few things to know:

- **Yield is in the exchange rate, not your balance.** Your share balance stays the same after depositing, but each share becomes redeemable for more mUSDC as borrowers pay interest. You’ll see the difference when you withdraw.
- **Shares are not 1:1 with mUSDC.** If the vault has already earned interest, depositing 100 mUSDC gives you fewer than 100 shares — and each share is worth more than 1 mUSDC.
- **If you stake for emissions, your interest is redirected.** Staked shares earn MEZO instead of borrower interest. The interest that would have gone to you is redirected to veBTC voters on the Lending Vault gauge.

---

## Vault details

| Parameter | Value |
|-----------|-------|
| Deposit token | mUSDC |
| Share token | `morphoBTC-mUSDC` |
| Underlying market | Morpho Blue BTC / mUSDC |
| Liquidation LTV | 86% |
| Curator | Mezo governance |
| Withdrawal fee | None |
| Current APR | Variable — check [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Two ways to earn

Like other Earn products on Mezo, you choose how each share gets paid:

- **Hold for interest** — Keep `morphoBTC-mUSDC` in your wallet. Your shares appreciate as borrowers pay interest.
- **Stake for MEZO emissions** — Stake your shares in the Lending Vault gauge. You earn MEZO; the interest those shares would have earned goes to voters instead.

A single share can’t earn both at once, but you can split your holdings — stake some for emissions and hold the rest for interest. Deposit and stake are separate steps in the app: deposit first to receive shares, then optionally stake.

**To exit a staked position:** unstake, then redeem back to vault shares, then withdraw to mUSDC. Unstaking does not forfeit claimable MEZO.

---

## Withdrawals

Withdrawals return your mUSDC (plus accrued interest if you were holding). Because your mUSDC is lent to borrowers, the vault can only pay out what is currently available — not borrowed.

- The app shows an **Available to withdraw** amount based on current vault liquidity
- When utilization is high, a large withdrawal may be partially fillable or temporarily blocked until borrowers repay or new supply arrives
- Staked shares must be unstaked before they can be withdrawn

This is normal lending-market behavior, not a failure of the vault.

---

## Risks

### Smart contract risk

Funds pass through the Lending Vault adapter, Morpho Vault V2, and the Morpho Blue market. A bug or exploit in any of them could result in loss of funds.

### Illiquidity risk

When borrower utilization is high, you may not be able to withdraw all of your mUSDC on demand. Only supply funds you can afford to have temporarily locked.

### Lending-market risk

Borrowers are liquidated at 86% LTV. In a severe, rapid BTC drawdown, bad debt can occur and is shared across suppliers via a drop in share price — there is no insurance fund. Your position is also denominated in mUSDC, so a depeg affects your holdings.

### Curator risk

Mezo governance curates which markets the vault supplies and the supply caps. Curator changes on Morpho Vault V2 are timelocked.

---

## Contracts

| Contract | Address |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Lending Vault adapter | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Vault gauge | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

For Morpho Blue market details, see the [Morpho docs](https://docs.morpho.org/).
