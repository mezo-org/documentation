---
title: Overview
---

Follow the [Developer onboarding](#developer-onboarding) process to bring your dApp to Mezo.

## Developer onboarding

To bring your dApp to Mezo, follow the standard Developer onboarding process:

1. Read the [requirements](#dapp-requirements) for a dApp to be fully-enabled on Mezo and featured in the [Mezo Market](https://mezo.org/market).

1. If you need onboarding support from the Mezo team, [submit an audit report]() before you begin deploying to Mezo.

1. [Configure your development environment](/docs/developers/getting-started/configure-environment) for Mezo.

1. Complete the [Deploy your dApp to Mezo](/docs/developers/getting-started/deploy-example-dapp) tutorial to learn the full dApp development and Passport integration process on Mezo.

1. Deploy your dApp to the Mezo testnet. Use the [Mezo Testnet network details](/docs/developers/getting-started#mezo-mainnet).

1. Stress test the dApp to make sure it functions as expected. Mezo testnet is the best place to find issues early before deploying to Mezo Mainnet.

1. Deploy your dApp to Mainnet. Use the [Mezo Mainnet network details](/docs/developers/getting-started#mezo-mainnet).

1. Monitor your dApp. Set up monitoring and alerts to track the health of your dApp and alert you to any issues. See the [Monitoring]() guide for details.

## dApp requirements

Although the netowork is permissionless and anybody can deploy to Mezo Mainnet, dApps on Mezo must meet the following requirements to be featured in the [Mezo Market](https://mezo.org/market):

- Mezo Passport: Developers must use [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) in their dApps to provide additional wallet connection options specifically tailored for Bitcoin wallets and Mezo Matsnet. Passport does not require a specific development environment, and is a React library that works with [RainbowKit](https://rainbowkit.com/).

## Network details

### Mezo Mainnet

* Public JSON RPC Endpoints:
  * Boar:
    * HTTPS: `https://jsonrpc-mezo.boar.network`
    * WSS: `wss://jsonrpcws-mezo.boar.network`
    * For higher rate limits get your free API key at [boar.network/mezo](https://boar.network/mezo). Enterprise plan available - contact [hello@boar.network](hello@boar.network) to get started.
  * Imperator:
    * HTTPS: `https://rpc_evm-mezo.imperator.co`
    * WSS: `wss://ws_evm-mezo.imperator.co`
  * Validation Cloud:
    * HTTPS: `https://mainnet.mezo.public.validationcloud.io`
    * WSS: `wss://mainnet.mezo.public.validationcloud.io`
    * For higher rate limits get your free API key at [validationcloud.io/mezo](https://www.validationcloud.io/mezo) or contact them at [validationcloud.io/contact](https://validationcloud.io/contact) for Enterprise plans.
* Chain ID: `31612`
* Native Currency:
  * Name: Bitcoin
  * Symbol: `BTC`
  * Decimals: `18`
* Block explorer: [https://explorer.mezo.org/](https://explorer.mezo.org/)

### Mezo Testnet

* Public JSON RPC Endpoint:
  * HTTPS: `https://rpc.test.mezo.org`
  * WSS: `wss://rpc-ws.test.mezo.org`
* Chain ID: `31611`
* Native Currency:
  * Name: Bitcoin
  * Symbol: `BTC`
  * Decimals: `18`
* Block explorer: [https://explorer.test.mezo.org/](https://explorer.test.mezo.org/)
