---
title: 'Ontwikkelaarsgids: Orakel-infrastructuur'
description: >-
  Leer hoe Mezo-orakels veilige, gedecentraliseerde datafeeds bieden voor je
  applicaties.
topic: developers
---

Mezo bevat een orakel als onderdeel van zijn validatornodes. Orakels van derden zijn ook beschikbaar.

## Skip Connect

Mezo gebruikt [Skip Connect](https://github.com/skip-mev/connect) als zijn belangrijkste orakeldienst. Skip bepaalt de prijs van een activapaar tijdens de blokconsensus en schrijft deze naar de onchain-status van de [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos-module. Deze module wordt geleverd door Skip en is aangesloten op de Mezo-client.

De sidecar draait op hetzelfde systeem als de validatornode. Zo worden de gegevens op hetzelfde systeem opgehaald en geaggregeerd en via gRPC aan de validatornode doorgegeven.

![Een diagram dat het proces toont waarbij Skip marktgegevens uit meerdere bronnen aggregeert en Mezo-validators Skip Connect en x/oracle uitvoeren om de onchain-status bij te werken met de nieuwste waarden](/docs/images/oracle/mezo-oracle.avif)

Zie de documentatie van [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) voor een volledige beschrijving van hoe Skip gegevens aggregeert.

Skip Connect bevat verschillende [providers](https://github.com/skip-mev/connect/blob/main/providers/README.md) die in de sidecar geconfigureerd kunnen worden. Je vindt een volledige lijst van beschikbare providers in de Skip Connect-documentatie:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Referenties voor Skip Providers en de Market Map:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork is een orakelprotocol dat ultrasnelle verbindingen met lage latentie mogelijk maakt tussen dataproviders en zowel onchain- als offchain-applicaties. Het meest voorkomende gebruik van Stork is het ophalen en consumeren van marktgegevens in de vorm van realtime prijsfeeds voor DeFi. Stork [is beschikbaar op Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Stork-documentatie](https://docs.stork.network/)**
- **[Gedeployde contracten op Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra is een cross-chain orakelnetwerk dat dApps in verschillende blockchain-ecosystemen ondersteunt met snelle, veilige, gedecentraliseerde en schaalbare dataoplossingen. De [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) van Supra is beschikbaar op Mezo Testnet. Op de pagina [Beschikbare netwerken](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) van Supra vind je de juiste adressen van het pull-contract en het storage-contract.

- **[Supra-documentatie](https://docs.supra.com/)**
​
## Pyth

Het [Pyth Network](https://pyth.network/) is een van de grootste first-party orakelnetwerken en levert realtime gegevens op meerdere chains, waaronder Mezo. Pyth introduceert een innovatief [pull-orakelontwerp](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) met lage latentie waarbij gebruikers prijsupdates onchain kunnen ophalen wanneer nodig. Dit stelt iedereen in de onchain-omgeving in staat om efficiënt toegang te krijgen tot datapunten. Het Pyth-netwerk werkt de prijzen elke 400 ms bij, waardoor Pyth een van de snelste onchain-orakels is.

Orakelcontracten van Pyth:
- Mezo Mainnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Zie de [Pyth-documentatie](https://docs.pyth.network/home) om te leren hoe je Pyth in je dApp gebruikt.
