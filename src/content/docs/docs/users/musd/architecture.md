---
title: mUSD Architecture
---

The protocol allows Bitcoin holders to mint mUSD (mezo USD stablecoins) by using their BTC as collateral. This means users can access USD-denominated liquidity while keeping their Bitcoin investment intact.

### Custody

A user opens up a position by calling `BorrowerOperations.openTrove`, providing BTC, and requesting mUSD. The BTC is routed to the `ActivePool`, where it stays until a user either...

- withdraws (via `BorrowerOperations.withdrawColl`)
- pays off their debt (via `BorrowerOperations.closeTrove`)
- is redeemed against (via `TroveManager.redeemCollateral`)
- gets liquidated (via `TroveManager.liquidate`)

Liquidated positions are either paid for by the `StabilityPool`, in which case the BTC is transferred there, or the debt and collateral are absorbed and redistributed to other users, in which case the BTC is transferred to the `DefaultPool`.

### Maintaining the Peg

We maintain the **price floor of $1** through arbitrage, an external USD <-> BTC price oracle, and the ability to redeem mUSD for BTC $1 for $1 (via `TroveManager.redeemCollateral`). Imagine that mUSD was trading for $0.80 on an exchange and that bitcoin is selling for 1 BTC = $100k. A arbitrageur with $800 could:

1. Trade $800 for 1000 mUSD
1. Redeem 1000 mUSD for 0.01 BTC ($1000 worth of BTC)
1. Sell 0.01 BTC for $1000

The arbitrageur started with $800 and ended with $1000 (ignoring fees). This trade _buys_ mUSD and _burns_ it (for the backing BTC), causing upwards price pressure. This trade continues to be effective until the price resets to $1.

We maintain a **price ceiling of $1.10** via the minimum 110% collateralization ratio. Imagine that mUSD for trading for $1.20 on an exchange, and that bitcoin is selling for 1 BTC = $100k. An arbitrageur with $100k could:

1. Buy 1 BTC (worth $100k)
1. Open up a trove with 1 BTC as collateral, and the maximum 90,909 mUSD as debt.
1. Sell 90,909 mUSD for $109,091.

The arbitrageur started with $100k and ended with $109k (ignoring fees). This trade _sells_ and _mints_ mUSD, causing downward price pressure. This trade continues to be effective until the price reaches $1.10.