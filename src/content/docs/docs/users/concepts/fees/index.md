---
title: Fees Overview
description: Fees for depositing into the Mezo Portal
---

### tBTC, WBTC, and other ERC-20 Deposits.

Depositing WBTC, tBTC, and accepted BTC-backed stables incurs a gas cost on the Ethereum network. You can track gas prices [here](https://etherscan.io/gastracker).

### BTC Deposits

Native BTC deposits are bridged to tBTC before being deposited into the [Mezo Portal contract](/docs/users/resources/contracts-and-btc-custody). [The tBTC mint process](/docs/users/concepts/bitcoin-on-mezo/tbtc/guide) involves operational costs associated with asset minting, treasury, and sweeping transactions. &#x20;

To account for these operational costs, **a fixed amount of 0.001 BTC** will be subtracted from all BTC deposits, regardless of deposit size.&#x20;

_Example: When depositing 1 BTC, the actual amount deposited will be_ 0.99&#x39;_._&#x20;

### BTC Withdrawls&#x20;

When you deposit BTC from a Bitcoin wallet to **Mezo**, it is **bridged** and deposited into the Mezo contract using tBTC (Threshold Network). When you withdraw your BTC from Mezo back to your Bitcoin wallet, the tBTC tokens are unminted through the Threshold Network. This process happens automatically as part of your BTC withdrawl from Mezo.

The Threshold Network currently charges a[ 0.2% redemption fee](https://docs.threshold.network/applications/tbtc-v2/fees) for this service. Mezo does not impose any additional fees for these withdrawals, and the fees go to Mezo. All tBTC redemption fees go directly to the [Threshold DAO](https://threshold.network/). \


The current fees for redemption are published in the [tBTC Bitcoin Bridge Fees](https://docs.threshold.network/applications/tbtc-v2/fees) documentation.

\
To learn about the steps in a standard tBTC unminting process, see the [tBTC Unmint & Redemption](/docs/users/concepts/fees/tbtc-unmint-and-redemption) guide.
