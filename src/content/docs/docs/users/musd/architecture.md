---
title: mUSD Architecture
---

mUSD is currently available only on Mezo matsnet (Testnet), but the details here will apply to Mezo Mainnet.

The protocol allows Bitcoin holders to [Borrow and Mint](./mint-musd) mUSD (Mezo USD stablecoins) by using their BTC as collateral. This means users can access USD-denominated liquidity while keeping their Bitcoin investment intact.

### Custody

A user opens up a position by calling `BorrowerOperations.openTrove`, providing BTC, and requesting mUSD. The BTC is routed to the `ActivePool`, where it stays until one of the following actions occurs:

- Withdraws (`BorrowerOperations.withdrawColl`)
- Pays off their debt (`BorrowerOperations.closeTrove`)
- Redeems collateral (`TroveManager.redeemCollateral`)
- Is liquidated (`TroveManager.liquidate`)

Liquidated positions are either paid for by the `StabilityPool`, in which case the BTC is transferred there, or the debt and collateral are absorbed and redistributed to other users, in which case the BTC is transferred to the `DefaultPool`.

### Maintaining the Peg

The **price floor of $1** is maintained through arbitrage, an external USD <-> BTC price oracle, and the ability to redeem mUSD for BTC $1 for $1 via `TroveManager.redeemCollateral`. As an example, if mUSD trades for $0.80 on an exchange and Bitcoin is selling for 1 BTC = $100k, a arbitrageur with $800 could take the following action:

1. Trade $800 for 1000 mUSD
1. Redeem 1000 mUSD for 0.01 BTC ($1000 worth of BTC)
1. Sell 0.01 BTC for $1000

The arbitrageur started with $800 and ended with $1000 (ignoring fees). This trade _buys_ mUSD and _burns_ it (for the backing BTC), causing upwards price pressure. This trade continues to be effective until the price resets to $1.

The **price ceiling of $1.10** is maintained using the minimum 110% collateralization ratio. If mUSD trades for $1.20 on an exchange, and Bitcoin is selling for 1 BTC = $100k, an arbitrageur with $100k could take the following action:

1. Buy 1 BTC (worth $100k)
1. Open up a trove with 1 BTC as collateral, and the maximum 90,909 mUSD as debt.
1. Sell 90,909 mUSD for $109,091.

The arbitrageur started with $100k and ended with $109k (ignoring fees). This trade _sells_ and _mints_ mUSD, causing downward price pressure. This trade continues to be effective until the price reaches $1.10.