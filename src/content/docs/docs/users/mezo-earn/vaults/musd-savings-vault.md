---
title: MUSD Savings Vault
description: Earn fee-backed yield on MUSD through the Mezo Savings Vault
topic: users
---

The MUSD Savings Vault is Mezo's native savings product for MUSD holders.

**How it works:**

- Deposit MUSD and receive sMUSD — a receipt token representing your share of the vault
- Yield accumulates in the sMUSD exchange rate: over time, 1 sMUSD becomes redeemable for more than 1 MUSD. When you withdraw, you'll receive more MUSD than you deposited.
- Yield comes from two sources within the MUSD system: MUSD protocol fees (lending interest, origination fees, refinancing fees) and BTC fees from MUSD loan operations, which are converted to MUSD and distributed weekly
- Both streams are distributed to the vault on a weekly cadence by the protocol
- APR is variable based on protocol activity — check the current rate at [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Fee split

MUSD protocol fees are split 50/50 between two destinations:

- **MUSD Savings Vault** — distributed to sMUSD holders, or redirected to veBTC voters for staked sMUSD
- **[Protocol bootstrap loan](/docs/users/borrow/architecture-and-terminology/#protocol-bootstrap-loan) repayment**

This split is governable via the MUSD splitter, with a minimum of 50% going toward loan repayment until the bootstrap loan is fully repaid. After repayment, all fees flow to the Savings Vault. See [MUSD Fees](/docs/users/borrow/fees/) for full details.

---

## Understanding sMUSD

sMUSD is your receipt token for the Mezo MUSD Savings Vault. A few things to know:

- **Yield is in the exchange rate, not your balance.** Your sMUSD balance stays the same after depositing, but each sMUSD becomes redeemable for more MUSD over time as the vault accumulates fees. You'll see the difference when you withdraw.
- **Yield is distributed weekly.** The protocol distributes accumulated fees to the vault each week. The sMUSD/MUSD exchange rate updates at each distribution.
- **sMUSD is transferable.** You can send or hold sMUSD like any other token. Whoever holds it at withdrawal redeems the accumulated yield.
- **If you stake sMUSD in the gauge, your yield is redirected.** Staked sMUSD earns MEZO emissions instead of direct fee revenue. The fee revenue that would have gone to you is redirected to veBTC voters who voted for the MUSD Savings gauge. Unstaking restores direct yield accrual.

---

## Vault Details

| Parameter | Value |
|-----------|-------|
| Deposit token | MUSD |
| Receipt token | sMUSD |
| Strategist | Mezo |
| Withdrawal fee | None |
| Withdrawal time-lock | 0h |
| Current APR | Variable — check [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## Staking sMUSD in the Gauge

You can optionally stake your sMUSD receipt token in the MUSD Savings gauge to earn MEZO token emissions.

**The tradeoff:**

- **Unstaked sMUSD:** You earn your proportional share of vault yield and MUSD interest/fee revenue directly
- **Staked sMUSD:** Your portion of interest and fee revenue is redirected to veBTC voters on the gauge. In exchange, you earn emissions based on how many votes the gauge receives

This mirrors how LP staking works in liquidity pools on Mezo's native DEX — stakers give up fee revenue in exchange for emissions, while voters earn the redirected fees.

The MUSD Savings Rate gauge competes for votes alongside LP pool gauges. These are collectively called "staking gauges" — a vote allocated to the savings rate gauge cannot also be allocated to an LP gauge.

With MEZO emissions live, staking sMUSD in the gauge now earns MEZO on top of your base position. The MUSD Savings gauge competes for veBTC votes alongside LP pool gauges — more votes directed to the savings gauge means more MEZO emissions routed to stakers. veBTC voters who support the gauge earn the MUSD fees that stakers redirect. Current gauge APR for stakers and voters is visible on the Vote page at [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Risks

### Strategy Risk
Each vault deploys assets differently. Understand the underlying strategy before depositing — some strategies carry more risk than others.

### Smart Contract Risk
Vaults interact with multiple smart contracts. While Mezo vaults are audited, all smart contracts carry inherent risk. Only deposit amounts you're comfortable with.
