---
title: Oracle Infrastructure
---

Mezo includes an oracle as part of its validator nodes.

## Skip Connect

Mezo uses [Skip Connect](https://github.com/skip-mev/connect) as its main oracle service. Skip determines the price of an asset pair during block consensus and writes it to the onchain state of the [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos module. This module is provided by Skip and it is plugged into the Mezo client.

![A diagram showing the process where Skip aggregats market data from several sources and Mezo validators run Skip Connect and x/oracle to update onchain state with the latest values](/docs/images/oracle/mezo-oracle.avif)

For a complete description of how Skip aggregates data, see the [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) documentation.

## Data Sources

Skip uses several data [providers](https://github.com/skip-mev/connect/blob/main/providers/README.md). You can find a full list of the available providers in the Skip Connect documentation:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip Providers and Market Map references:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)