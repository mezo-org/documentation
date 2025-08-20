---
title: Mainnet Bridges Overview
description: >-
  Learn about using and accessing bridges on Mezo Mainnet for seamless asset
  movement.
topic: users
---

You can bridge assets to Mezo using the Mezo Native Bridge.

## Mezo native bridge

The Mezo app includes a native bridge where you can bring several assets to Mezo Mainnet. See the [Bridging Assets](/docs/users/getting-started/bridging) guide to learn how the process works, or go directly to [mezo.org/overview](https://mezo.org/overview), sign in, and click **Add funds** to get started.

### Native BTC Bridging

You can bridge BTC directly from a Bitcoin wallet to the Mezo App. Assets are automatically bridged to tBTC and to Mezo Mainnet.

Native BTC is bridged to tBTC before being bridged into the [Mezo App contract](/docs/users/resources/contracts-reference).

For BTC wallets, you can sign in with UniSat, OKX, and Xverse. Use the following addresses:

| Name           | Script Type | Address Prefix |
| -------------- | ----------- | -------------- |
| Legacy         | P2PKH       | 1              |
| Native SegWit  | P2WPKH      | bc1q           |
| Nested SegWit  | P2SH-P2WPKH | 3              |

## Withdrawals 

### Mezo Network

Third-party bridges are currently available to bridge BTC off of Mezo. For a list of which apps to use, see the "Apps on Mezo" section at [mezo.org/explore](https://mezo.org/explore). An app being listed on this page does not mean it is endorsed by Mezo.

The native bridge does not yet support BTC withdrawals from Mezo Network. 

### Deposit Portal

Deposits that are still in the portal as part of the early deposit program can be withdrawn back to the user's BTC wallet. The withdrawal fees from the portal for BTC will depend on the parameters set in the tBTC bridge. Currently, tBTC charges a 0.2% redemption fee, and these parameters are governance-controlled and can be viewed in the [tBTC fees documentation](https://docs.threshold.network/applications/tbtc-v2/fees).
