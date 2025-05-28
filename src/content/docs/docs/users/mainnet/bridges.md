---
title: Bridges
---

To earn [mats](./mats), assets must be bridged to Mezo Mainnet. You can bridge the assets yourself through the Mezo App or via a third-party bridge.

## Available bridges

- [Mezo native bridge](#mezo-native-bridge)
- [Wormhole](#wormhole)

## Mezo native bridge

The Mezo app includes a native bridge where you can bring several assets to Mezo Mainnet. See the [Bridging Assets](/docs/users/getting-started/bridging) guide to learn how the process works, or go directly to [mezo.org/overview](https://mezo.org/overview), sign in, and click **Add funds** to get started.

### Native BTC Bridging

You can bridge BTC directly from a Bitcoin wallet to the Mezo App. Assets are automatically bridged to tBTC and to Mezo Mainnet.

Native BTC is bridged to tBTC before being bridgeed into the [Mezo App contract](/docs/users/resources/contracts-reference). [The tBTC mint process](/docs/users/concepts/bitcoin-on-mezo/tbtc/guide) involves operational costs associated with asset minting, treasury, and sweeping transactions.

To account for these operational costs, **a fixed amount of 0.001 BTC** will be subtracted from all bridged BTC, regardless of the size.

_Example: When bridging 1 BTC, the actual amount bridged will be_ 0.99.

For BTC wallets, you can sign in with UniSat, OKX, and Xverse. Use the following addresses:

| Name           | Script Type | Address Prefix |
| -------------- | ----------- | -------------- |
| Legacy         | P2PKH       | 1              |
| Native SegWit  | P2WPKH      | bc1q           |
| Nested SegWit  | P2SH-P2WPKH | 3              |

## Wormhole

The Wormhole bridge is available at [portalbridge.com](https://portalbridge.com/).

