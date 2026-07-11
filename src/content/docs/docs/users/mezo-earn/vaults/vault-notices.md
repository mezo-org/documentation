---
title: Vault Notices
description: Current Mezo Vault wind-down and migration notices
topic: users
---

This page lists current migration and wind-down notices for vaults on Mezo Earn.

| Vault                | Status                                                              | What you need to do                                |
| -------------------- | ------------------------------------------------------------------- | -------------------------------------------------- |
| **cbBTC Vault**      | Deposits are paused while the vault consolidates into the BTC Vault | Migrate your cbBTC Vault shares into the BTC Vault |
| **Stablecoin Vault** | Deposits are paused and the vault is winding down                   | Start your withdrawal by **July 31, 2026**         |

:::caution[Withdrawals take time]
Stablecoin Vault withdrawals are not instant. They use a withdrawal queue that can take approximately 48 hours to process.
:::

## cbBTC Vault migration

The cbBTC Vault, operated by Sense Capital, is consolidating into the BTC Vault. New mcbBTC deposits into the cbBTC Vault are paused.

If you hold **mbhcbBTC** receipt tokens from the cbBTC Vault, you can deposit those shares directly into the BTC Vault. You do not need to withdraw the underlying mcbBTC or bridge assets first.

### How to migrate

1. Go to [Mezo Vaults](https://mezo.org/earn/vaults) and open the **BTC Vault**.
2. Select **Deposit**.
3. In the asset picker, select your cbBTC Vault shares (**mbhcbBTC**).
4. Approve and confirm the deposit.
5. You will receive BTC Vault shares (**mbhBTC**) in exchange.

The BTC Vault's yield is variable. Review its current strategy, rate, and risks in the app before migrating.

## Stablecoin Vault wind-down

The Stablecoin Vault, operated by Lhava on Mellow's vault framework, is winding down. Deposits are already paused.

If you have a position in the vault, start your withdrawal by **July 31, 2026**. The vault supports positions funded with mUSDC, mUSDT, or MUSD and issues **msvUSD** receipt tokens.

### How to withdraw

1. Go to [Mezo Vaults](https://mezo.org/earn/vaults) and open the **Stablecoin Vault**.
2. Select **Withdraw** and follow the prompts for your position.
3. Confirm the transaction and allow approximately 48 hours for the withdrawal queue to process.

After July 31, 2026, the Stablecoin Vault will no longer appear in the app. Mellow will manage the remaining funds and process late withdrawals. If you miss the withdrawal window, [open a support ticket in Mellow's Discord](https://discord.com/invite/mellow).

## Where to put stablecoins next

Before moving funds, compare the supported asset, strategy, withdrawal terms, and current rate in the app. Rates are variable, and every option carries smart contract and strategy risk.

| Option                        | How it works                                                                                                        | What to consider                                                                                                                                                | Visit                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **MUSD Savings Vault**        | Deposit MUSD and receive sMUSD. Yield comes from MUSD protocol activity and accumulates in the sMUSD exchange rate. | A single-asset option with no withdrawal fee or time-lock. The rate varies with protocol activity. Staking sMUSD changes how your rewards are earned.           | [View MUSD Savings Vault](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)       |
| **USDC Lending Vault**        | Deposit mUSDC into the Morpho BTC/mUSDC lending market. Earn borrower interest, or stake for MEZO emissions.        | Review the live rate, available withdrawal liquidity, and lending risks. Withdrawals can be limited when utilization is high. See the [USDC Lending Vault](/docs/users/mezo-earn/vaults/usdc-lending-vault) guide. | [View USDC Lending Vault](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)       |
| **mUSDC/MUSD Stable CL Pool** | Provide mUSDC and MUSD liquidity within a selected price range to earn trading fees and any available incentives.   | Requires active range management. A position that moves out of range stops earning fees, and liquidity providers face impermanent loss and smart contract risk. | [View mUSDC/MUSD Stable CL Pool](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a) |

View more ways to earn on the general [Mezo Pools](https://mezo.org/earn/pools) and [Mezo Vaults](https://mezo.org/earn/vaults) pages.
