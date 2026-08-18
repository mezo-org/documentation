---
title: Connect your wallet to Mezo
topic: users
---

To connect your browser wallet, use the network details for either Mainnet or the Testnet.

You can add Mezo to your wallet using the **Connect Wallet** button at Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

If Chainlist does not work, add the network manually using the network details below.

## Mezo Mainnet

### Public RPC Endpoints

| Provider | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

For higher rate limits, Boar offers a free API key at [boar.network/mezo](https://boar.network/mezo). Enterprise plan available - go to [https://dashboard.boar.network/](https://dashboard.boar.network/) to get started.

For higher rate limits get your free Validation Cloud API key at [validationcloud.io/mezo](https://www.validationcloud.io/mezo) or contact them at [validationcloud.io/contact](https://validationcloud.io/contact) for Enterprise plans.

### Network Details

| Parameter | Value |
|-----------|-------|
| Chain ID | `31612` |
| Currency | BTC (18 decimals) |
| Block Explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Public RPC Endpoints

| Protocol | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Network Details

| Parameter | Value |
|-----------|-------|
| Chain ID | `31611` |
| Currency | BTC (18 decimals) |
| Block Explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Building on Mezo?]
See the [Set Up Developer Environment](/docs/developers/getting-started/configure-environment) guide for Hardhat and Foundry configuration.
:::

## Adding Mezo to your wallet manually

If you need to add the network to your wallet manually, use the following instructions to add a custom network depending on your wallet:

* MetaMask: [How to add a custom network RPC](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Adding a Custom Network](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Add a Custom Network (Mobile)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC Wallets

BTC wallets are supported in the Mezo App and can receive a Mezo network address associated with your BTC wallet. BTC wallets can currently complete the following tasks on Mezo:

- Bridge BTC Assets
- Bridge EVM Assets
- Borrow, repay, or manage collateral for a loan
- Purchase items on the MUSD Market
- Receive and send assets on the Mezo Network
- Participate in Mezo Earn (lock, vote, deposit/withdraw to/from vaults and pools, claim rewards)

## Developers

To learn how to develop and deploy dApps on Mezo, see the [Developer Getting Started](/docs/developers/getting-started/) documentation.
