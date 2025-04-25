---
title: Deposits
description: Deposits, Withrawls, and Fees
---

To earn [mats](./mats.md), assets must be bridged to Mezo Mainnet. At Mainnet launch, assets are auto-bridged unless you opted out. See the [Mainnet Overview](./index.md) for more information.

After Mainnet launch, you can bridge the assets yourself and then deposit them through the Mezo Portal. Go to [mezo.org/deposit](https://mezo.org/deposit) to get started, or see the [Depositing](/docs/users/getting-started/depositing) guide for instructions.

## Native BTC

You can deposit BTC directly from a Bitcoin wallet to the Mezo Portal. Assets are automatically bridged to tBTC and to Mezo Mainnet. See the [Deposits](#deposits) section for bridging details.

### Supported Bitcoin wallets

You can log in with UniSat, OKX, and Xverse. Use the following addresses:

| Name           | Script Type | Address Prefix |
| -------------- | ----------- | -------------- |
| Legacy         | P2PKH       | 1              |
| Native SegWit  | P2WPKH      | bc1q           |
| Nested SegWit  | P2SH-P2WPKH | 3              |

### Deposits

Native BTC deposits are bridged to tBTC before being deposited into the [Mezo Portal contract](/docs/users/resources/contracts-and-btc-custody). [The tBTC mint process](/docs/users/concepts/bitcoin-on-mezo/tbtc/guide) involves operational costs associated with asset minting, treasury, and sweeping transactions.

To account for these operational costs, **a fixed amount of 0.001 BTC** will be subtracted from all BTC deposits, regardless of deposit size.

_Example: When depositing 1 BTC, the actual amount deposited will be_ 0.99.

### Withdrawls

When you deposit BTC from a Bitcoin wallet to **Mezo**, it is **bridged** and deposited into the contract on Mezo Mainnet using tBTC (Threshold Network). When you withdraw your BTC from Mezo back to your Bitcoin wallet, the tBTC tokens are unminted through the Threshold Network. This process happens automatically as part of your BTC withdrawl from Mezo.

The Threshold Network currently charges a[ 0.2% redemption fee](https://docs.threshold.network/applications/tbtc-v2/fees) for this service. Mezo does not impose any additional fees for these withdrawals. All tBTC redemption fees go directly to the [Threshold DAO](https://threshold.network/).

The current fees for redemption are published in the [tBTC Bitcoin Bridge Fees](https://docs.threshold.network/applications/tbtc-v2/fees) documentation.

## ERC-20 and Stablecoin Deposits

A list of supported tokens is available on the [mezo.org/deposit?tab=new-deposit](https://mezo.org/deposit?tab=new-deposit) page as well as the expected mats rewards for each token type.
