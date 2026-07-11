---
title: USDC Lending Vault
description: Supply mUSDC to the BTC-backed Morpho lending market on Mezo and earn borrower interest or MEZO emissions
topic: users
---

The USDC Lending Vault lets you supply mUSDC to a Morpho Blue lending market on Mezo — the BTC / mUSDC market, where borrowers post BTC as collateral and borrow mUSDC. Your supplied mUSDC earns the interest that borrowers pay.

Under the hood, your deposit goes into a curated ERC-4626 vault — the **Morpho BTC-mUSDC Vault** (a Morpho Vault V2 that Mezo governance deploys and curates) — which supplies the Morpho Blue market on your behalf. You don’t interact with Morpho directly: you hold a token that represents your share of that vault, and it grows in value as interest accrues.

Visit the vault at [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). To borrow mUSDC against BTC instead, see [How to Borrow mUSDC](/docs/users/borrow/how-to-borrow-musdc).

---

## How it’s different from other vaults

- **It’s a lending position, not an LP position.** Unlike DEX pool gauges (where you provide two-sided liquidity and earn swap fees), here you supply a single asset — mUSDC — and earn borrower interest. There is no impermanent loss, but there is lending-market risk (see [Risks](#risks)).
- **You choose how you get paid.** Like other Earn gauges, the Lending Vault uses the “LP-choice” model: you can keep the interest, or forgo it to earn MEZO emissions instead. You choose this per share and can do some of each.
- **The yield source is external.** Returns come from a real, third-party lending market (Morpho Blue), not from protocol emissions. Emissions are an optional overlay on top.

There is no minimum deposit and no protocol fee to enter or exit the vault.

---

## The two ways to earn

Every share you hold is in exactly one of two modes at any moment: **held** (earning interest) or **staked** (earning MEZO emissions). A single share can’t do both at once — staking it redirects that share’s interest to voters. The choice is per share, not all-or-nothing: you can stake part of your shares for emissions and keep the rest for interest.

### 1. Hold for interest

You hold the vault share token in your wallet. The share token continuously appreciates in value as borrowers pay interest — the same number of shares becomes worth more mUSDC over time. You do nothing else. Your yield is the growth in what your shares can redeem for.

### 2. Stake for MEZO emissions

You stake your position in the Lending Vault’s gauge. While staked, you earn MEZO emissions at the gauge’s rate. In exchange, the interest your position would have earned is redirected to voters (the people who direct MEZO emissions toward this gauge) instead of to you.

:::note[Why there’s no third option]
The contracts intentionally do not let you hold the staking receipt without staking it. An unstaked receipt would have its interest siphoned to voters while earning you no emissions — strictly worse than holding the vault share. The only two sensible positions are: hold the share for interest, or stake for emissions.
:::

### Interest vs. emissions

Keep this distinction straight:

- **Interest / rewards** — the mUSDC borrowers pay. This is what a holder earns, and what a staker gives up (it flows to voters).
- **Emissions** — MEZO tokens minted by the protocol and paid directly to stakers.

Different tokens, different recipients — and each individual share earns one or the other, never both.

---

## Share tokens

There are two token representations involved. Most users only ever see the first.

### Vault share token — Morpho BTC-mUSDC Vault (`morphoBTC-mUSDC`)

This is a standard ERC-4626 vault share. It represents your proportional claim on all the mUSDC the vault has supplied to Morpho, including accrued interest.

It is **not** a 1:1 receipt for your mUSDC. Its value floats: one share is worth a growing amount of mUSDC as interest accrues. If you deposit 100 mUSDC today and the vault has already earned interest, you receive fewer than 100 shares — and each share is worth more than 1 mUSDC.

This is the token you hold if you chose “hold for interest.” It shows up in your wallet under the symbol `morphoBTC-mUSDC`.

### Staking receipt token — Mezo BTC-mUSDC Lending Vault (`mlvBTC-mUSDC`)

If you choose the emissions path, the Lending Vault adapter wraps your `morphoBTC-mUSDC` shares into its own receipt token, `mlvBTC-mUSDC`, and immediately stakes it in the gauge for you.

You normally never hold `mlvBTC-mUSDC` in your wallet — it lives in the gauge while you’re staked. What you’ll see instead is a staked balance in the Lending Vault gauge plus claimable MEZO. You only handle `mlvBTC-mUSDC` directly during exit, when you unwrap it back into `morphoBTC-mUSDC` shares.

---

## Depositing and staking

Depositing and staking are **two separate actions** in the app — they are not combined into a single transaction.

1. **Deposit (interest path)** — The Deposit flow takes two wallet confirmations: approve mUSDC, then deposit it into the vault. You receive `morphoBTC-mUSDC` shares; hold them and you’re on the interest path.
2. **Stake (emissions path)** — Once you hold `morphoBTC-mUSDC` shares, the Stake flow wraps them into the `mlvBTC-mUSDC` receipt, stakes it in the gauge, and credits the stake to you.

So the emissions path is **deposit, then stake** — two distinct steps.

---

## How withdrawals work

Withdrawal returns your mUSDC (plus accrued interest for holders), but the exact steps depend on which mode you’re in.

### If you’re holding for interest

The Withdraw flow redeems your `morphoBTC-mUSDC` shares back to mUSDC at the vault. The amount is asset-denominated — you specify how much mUSDC to withdraw and the vault burns the corresponding shares.

### If you’re staked for emissions

Exit is a multi-step flow (the contracts don’t support an atomic unstake-and-unwrap). In the app it’s two steps:

1. **Unstake** — stops MEZO from accruing further and returns your `mlvBTC-mUSDC` receipt.
2. **Redeem** — burns the receipt and returns your `morphoBTC-mUSDC` shares.

That leaves you holding `morphoBTC-mUSDC` shares; to get mUSDC, run the Withdraw flow above.

Unstaking does **not** forfeit your earned MEZO — it stays claimable and is a separate action you can do before or after unstaking. The app never requires you to claim first.

### Liquidity limit — withdrawals can be capped

Your mUSDC is lent out to borrowers, so the vault can only pay out what is currently available (not borrowed). Morpho markets can be partially or fully utilized:

- There is no separately maintained idle-cash reserve. What you can withdraw at any moment is the unborrowed portion of the mUSDC supplied to the market, sourced just-in-time when you withdraw.
- If borrowers have taken out most of the supplied mUSDC, a large withdrawal may be partially fillable or temporarily blocked until borrowers repay or new suppliers add liquidity. This is normal lending-market behavior, not a failure of the vault.
- The app shows an **Available to withdraw** figure — what you can take out right now, capped by current vault liquidity and fluctuating with borrower demand. Staked balances are excluded from this figure: staked shares can’t be redeemed until you unstake them. A withdrawal larger than the available amount will revert.

---

## Vault details

| Parameter | Value |
|-----------|-------|
| Deposit token | mUSDC |
| Vault share token | `morphoBTC-mUSDC` |
| Staking receipt | `mlvBTC-mUSDC` |
| Underlying market | Morpho Blue BTC / mUSDC |
| Liquidation LTV (LLTV) | 86% |
| Curator / owner | Mezo governance |
| Withdrawal fee | None |
| Current APR | Variable — check [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Risks

Supplying to the Lending Vault carries real risk. Do not treat “earn mUSDC interest” as risk-free.

### Smart-contract risk

Your funds pass through several contracts — the Lending Vault adapter and gauge, the Morpho Vault V2, and the Morpho Blue market. As with any DeFi protocol, a bug or exploit in any of them could result in loss of funds.

### Illiquidity risk (high utilization)

When borrower utilization is high, you may not be able to withdraw all of your mUSDC on demand. In an extreme case you could be waiting for borrowers to repay or for new supply to arrive. Only supply funds you can afford to have temporarily locked.

### mUSDC depeg risk

Your entire position is denominated in mUSDC. If mUSDC loses its peg or its issuer/backing fails, your position loses value regardless of how correctly the vault behaves. This risk is external to Earn.

### Lending-market / bad-debt risk

The market runs at an **86% LLTV**: a borrower is liquidated once their loan reaches 86% of their collateral value. Automated liquidation bots close risky positions as they approach that line, so the ~14% collateral buffer is normally ample to unwind a position safely.

Only in a severe, rapid BTC drawdown could a position blow through the buffer before it can be liquidated. Any resulting bad debt is shared across all suppliers via a small drop in the vault’s share price — there is no insurance fund.

Liquidations rely on a price oracle (`BtcMusdcMorphoOracle`). A stale or manipulated oracle could delay or misprice liquidations, which is why the oracle is a key part of the market’s risk profile.

### Governance / curator risk

The underlying Morpho Vault V2 is controlled by a curator — currently Mezo governance, which also owns the vault. The curator decides which markets the vault supplies and the supply caps. A compromised or misconfigured curator could raise exposure or reallocate to a riskier market. Curator changes on Morpho Vault V2 are timelocked, giving suppliers advance notice.

The adapter’s gauge binding is set once and can’t be re-pointed with an ordinary transaction — but the adapter is a governance-controlled upgradeable proxy, so governance could still change where staker yield flows via a contract upgrade.

---

## Contract reference

Mezo mainnet (chain ID `31612`). Addresses verified onchain.

| Contract | Role | Address |
| -------- | ---- | ------- |
| ERC4626VaultAdapter | Lending Vault / staking receipt (`mlvBTC-mUSDC`) | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| VaultGauge | Stake here for MEZO emissions | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| MorphoVaultV2 | Yield-bearing share (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| MorphoMarketV1AdapterV2 | Vault → Morpho market bridge | [0xb0EE3a01d9134733155B28289c09f084Acca4F61](https://explorer.mezo.org/address/0xb0EE3a01d9134733155B28289c09f084Acca4F61) |
| Morpho Blue | Underlying lending market | [0x565834cE7E40b8987BC20EbF83E2159467bDA311](https://explorer.mezo.org/address/0x565834cE7E40b8987BC20EbF83E2159467bDA311) |
| BtcMusdcMorphoOracle | BTC/mUSDC price oracle | [0xeA0597D3d44FF2ea1E4c35501e153f4C025e48d1](https://explorer.mezo.org/address/0xeA0597D3d44FF2ea1E4c35501e153f4C025e48d1) |
| mUSDC | Loan asset (what you supply) | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |
| Curator / owner | Mezo governance | [0x98D8899c3030741925BE630C710A98B57F397C7a](https://explorer.mezo.org/address/0x98D8899c3030741925BE630C710A98B57F397C7a) |

**Market parameters:** LLTV 86%, collateral BTC, loan asset mUSDC, IRM AdaptiveCurveIrm.

Testnet (chain ID `31611`) runs the same stack — adapter [`0x172D63144446A29ac3F843B5AD4ABCa7a9478607`](https://explorer.test.mezo.org/address/0x172D63144446A29ac3F843B5AD4ABCa7a9478607), vault [`0x9F9b82ab72C3418B617357f4f5E501D22366dF08`](https://explorer.test.mezo.org/address/0x9F9b82ab72C3418B617357f4f5E501D22366dF08).

---

## External references

- [Morpho docs (Morpho Blue + Vault V2)](https://docs.morpho.org/)
- [Morpho Vault V2 contracts](https://github.com/morpho-org/vault-v2)
- [ERC-4626 tokenized vault standard](https://eips.ethereum.org/EIPS/eip-4626)
