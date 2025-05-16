---
title: Contracts and BTC Custody
description: Several contracts are used to maintain custody of deposits for Mezo.
---

* **Mezo App deposit contract:** [**0x2dFdEb833c199ba5D166C90A3B25B0E72288076B**](https://etherscan.io/address/0x2dfdeb833c199ba5d166c90a3b25b0e72288076b)
* **Mezo App proxy contract:** [**0xAB13B8eecf5AA2460841d75da5d5D861fD5B8A39**](https://etherscan.io/address/0xab13b8eecf5aa2460841d75da5d5d861fd5b8a39)
* **Multisig:** [**0x98D8899c3030741925BE630C710A98B57F397C7a**](https://etherscan.io/address/0x98D8899c3030741925BE630C710A98B57F397C7a)
* **Timelock contract:** [**0x82f08041f1Bc1aa399320743F33f75CcA482b25a**](https://etherscan.io/address/0x82f08041f1Bc1aa399320743F33f75CcA482b25a)
* **Portal Proxy Admin contract:** [**0x260cA2abeF5d38181E2562F00FA92AD1DC681734**](https://etherscan.io/address/0x260ca2abef5d38181e2562f00fa92ad1dc681734)

## **Mezo App deposit contracts**

The Deposit Contract is a locking contract that holds funds until they are bridged to Mezo mainnet at launch. The Portal proxy contract keeps the state and deposited funds. A 5-of-9 multisig run by the Mezo team owns the contract and can upgrade the contract after a delay. The delay is defined in the timelock contract. These upgrades allow additional collateral to be included and will enable bridging at launch. The multisig itself does not retain the funds.

### BTC deposits

BTC deposits are bridged using tBTC before being deposited in the locking contract.

The locking contract securely holds BTC assets for the duration of their lock and will enable withdrawal of the original deposited currency when deposits unlock.

You can find info on tBTC bridging and its custody model [here](../user-guides/bitcoin-on-mezo/tbtc/).

### Stablecoin deposits

Deposits in stablecoins can be deployed from the Mezo App contract to various yield-generating strategies in DeFi. The Mezo treasury retains the yield. Because of that, users earn HODL Score bonuses up to 100% of their BTC deposits.&#x20;

BTC deposits are never moved from the Mezo App contract; this is unique to stablecoins.

