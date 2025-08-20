---
title: 'Developer Guide: Oracle Infrastructure'
description: >-
  Learn how Mezo Oracles provide secure, decentralized data feeds for your
  applications.
topic: developers
---

Mezo includes an oracle as part of its validator nodes. Third-party oracles are also available.

## Skip Connect

Mezo uses [Skip Connect](https://github.com/skip-mev/connect) as its main oracle service. Skip determines the price of an asset pair during block consensus and writes it to the onchain state of the [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos module. This module is provided by Skip and it is plugged into the Mezo client.

The sidecar runs on the same system as the validator node, so data retrieval and aggregation are completed on the same system and passed to the validator node using gRPC.

![A diagram showing the process where Skip aggregats market data from several sources and Mezo validators run Skip Connect and x/oracle to update onchain state with the latest values](/docs/images/oracle/mezo-oracle.avif)

For a complete description of how Skip aggregates data, see the [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) documentation.

Skip Connect includes several [providers](https://github.com/skip-mev/connect/blob/main/providers/README.md) that can be configured in the sidecar. You can find a full list of the available providers in the Skip Connect documentation:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip Providers and Market Map references:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork is an oracle protocol that enables ultra low latency connections between data providers and both on and off-chain applications. The most common use-case for Stork is pulling and consuming market data in the form of real time price feeds for DeFi. Stork [is available on Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Stork Documentation](https://docs.stork.network/)**
- **[Deployed Contracts on Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra 

Supra is a cross-chain oracle network designed to power dApps across blockchain ecosystems with fast, secure, decentralized, and scalable data solutions. Supra's [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) is available on Mezo Testnet. See the Supra's [Available Networks](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) page to find the correct pull contract and storage contract addresses.

- **[Supra Documentation](https://docs.supra.com/)**
​
## Pyth

The [Pyth Network](https://pyth.network/) is one of the largest first-party Oracle networks and delivers real-time data across several chains including Mezo. Pyth introduces an innovative low-latency [pull oracle design](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) where users can pull price updates onchain when needed. This enables everyone in the onchain environment to access data points efficiently. The Pyth network updates the prices every 400ms to make Pyth one of the fastest onchain oracles.

Pyth's oracle contracts:
- Mezo Mainnet: [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet: [0xA2aa501b19aff244D90cc15a4Cf739D2725B5729](https://explorer.test.mezo.org/address/0xA2aa501b19aff244D90cc15a4Cf739D2725B5729)

See the [Pyth Documentation](https://docs.pyth.network/home) to learn how to use Pyth in your dApp.
