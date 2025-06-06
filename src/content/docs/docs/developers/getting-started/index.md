---
title: Overview
---

Developers are strongly encouraged to use [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) in their dApps to provide additional wallet connection options specifically tailored for Bitcoin wallets and Mezo Matsnet. Passport does not require a specific development environment, and is a React library that works with [RainbowKit](https://rainbowkit.com/).

To get started developing on Mezo:

1. [Configure your development environment](/docs/developers/getting-started/configure-environment) to enable standard EVM development.
1. [Install and configure Mezo Passport](/docs/developers/getting-started/configure-passport) in your applications.
1. Build a testnet dApp with Mezo Passport and begin building on Mezo. When you are ready, deploy to Mainnet. 

## Mezo Mainnet

* Public JSON RPC Endpoints:
  * Boar:
    * HTTPS: `https://jsonrpc-mezo.boar.network`
    * WSS: `wss://jsonrpcws-mezo.boar.network`
    * Enterprise plan available - Contact [hello@boar.network](hello@boar.network) to get started.
  * Imperator:
    * HTTPS: `https://rpc_evm-mezo.imperator.co`
    * WSS: `wss://ws_evm-mezo.imperator.co`
  * Validation Cloud:
    * HTTPS: `https://mainnet.mezo.public.validationcloud.io`
    * WSS: `wss://mainnet.mezo.public.validationcloud.io`
    * For higher rate limits and low-latency Mezo RPC, get your free API key at [validationcloud.io/mezo](https://www.validationcloud.io/mezo) or visit contact [validationcloud.io/contact](https://validationcloud.io/contact) for Enterprise plans.
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