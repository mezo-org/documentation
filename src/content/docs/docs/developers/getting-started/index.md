---
title: Overview
---

Developers are strongly encouraged to use [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) in their dApps to provide additional wallet connection options specifically tailored for Bitcoin wallets and Mezo Matsnet. Passport does not require a specific development environment, and is a React library that works with [RainbowKit](https://rainbowkit.com/).

To get started developing on Mezo:

1. [Configure your development environment](/docs/developers/getting-started/configure-environment) to enable standard EVM development.
1. [Install and configure Mezo Passport](/docs/developers/getting-started/configure-passport) in your applications.
1. [Deploy a Testnet dApp](/docs/developers/getting-started/testnet-dapp).

## Mezo Mainnet

* Public JSON RPC Endpoints:
  * Boar:
    * HTTPS: `https://jsonrpc-mezo.boar.network`
    * WSS: `wss://jsonrpcws-mezo.boar.network`
  * Imperator:
    * HTTPS: `https://rpc_evm-mezo.imperator.co`
    * WSS: `wss://ws_evm-mezo.imperator.co`
  * Validation Cloud:
    * HTTPS: `https://mainnet.mezo.public.validationcloud.io`
    * WSS: `wss://mainnet.mezo.public.validationcloud.io`
* Chain ID: `31612`
* Native Currency:
  * Name: Bitcoin
  * Symbol: `BTC`
  * Decimals: `18`
* Block explorer: [https://explorer.mezo.org/](https://explorer.mezo.org/)

## Mezo Testnet

* Public JSON RPC Endpoint:
  * HTTPS: `https://rpc.test.mezo.org`
  * WSS: `wss://rpc-ws.test.mezo.org`
* Chain ID: `31611`
* Native Currency:
  * Name: Bitcoin
  * Symbol: `BTC`
  * Decimals: `18`
* Block explorer: [https://explorer.test.mezo.org/](https://explorer.test.mezo.org/)