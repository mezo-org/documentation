---
title: 'Entwicklerleitfaden: Orakel-Infrastruktur'
description: >-
  Erfahren Sie, wie Mezo-Orakel sichere, dezentrale Datenfeeds für Ihre
  Anwendungen bereitstellen.
topic: developers
---

Mezo beinhaltet ein Orakel als Teil seiner Validator-Nodes. Orakel von Drittanbietern sind ebenfalls verfügbar.

## Skip Connect

Mezo verwendet [Skip Connect](https://github.com/skip-mev/connect) als seinen Haupt-Orakeldienst. Skip bestimmt den Preis eines Asset-Paares während des Blockkonsenses und schreibt ihn in den Onchain-Zustand des Cosmos-Moduls [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Dieses Modul wird von Skip bereitgestellt und ist in den Mezo-Client eingebunden.

Der Sidecar läuft auf demselben System wie der Validator-Node, sodass Datenabruf und Aggregation auf demselben System durchgeführt und über gRPC an den Validator-Node weitergegeben werden.

![Ein Diagramm, das den Prozess zeigt, bei dem Skip Marktdaten aus mehreren Quellen aggregiert und Mezo-Validatoren Skip Connect und x/oracle ausführen, um den Onchain-Zustand mit den neuesten Werten zu aktualisieren](/docs/images/oracle/mezo-oracle.avif)

Eine vollständige Beschreibung, wie Skip Daten aggregiert, finden Sie in der [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)-Dokumentation.

Skip Connect enthält mehrere [Anbieter](https://github.com/skip-mev/connect/blob/main/providers/README.md), die im Sidecar konfiguriert werden können. Eine vollständige Liste der verfügbaren Anbieter finden Sie in der Skip-Connect-Dokumentation:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Referenzen zu Skip Providers und Market Map:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork ist ein Orakel-Protokoll, das Verbindungen mit extrem niedriger Latenz zwischen Datenanbietern und Onchain- wie Offchain-Anwendungen ermöglicht. Der häufigste Anwendungsfall für Stork ist das Abrufen und Nutzen von Marktdaten in Form von Echtzeit-Preisfeeds für DeFi. Stork [ist auf dem Mezo Testnet verfügbar](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Stork-Dokumentation](https://docs.stork.network/)**
- **[Bereitgestellte Contracts im Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra ist ein Cross-Chain-Orakelnetzwerk, das dApps über Blockchain-Ökosysteme hinweg mit schnellen, sicheren, dezentralen und skalierbaren Datenlösungen unterstützt. Supras [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) ist auf dem Mezo Testnet verfügbar. Auf der Seite [Verfügbare Netzwerke](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) von Supra finden Sie die korrekten Pull-Contract- und Storage-Contract-Adressen.

- **[Supra-Dokumentation](https://docs.supra.com/)**
​
## Pyth

Das [Pyth Network](https://pyth.network/) ist eines der größten First-Party-Orakelnetzwerke und liefert Echtzeitdaten über mehrere Chains hinweg, einschließlich Mezo. Pyth führt ein innovatives [Pull-Orakel-Design](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) mit niedriger Latenz ein, bei dem Benutzer Preisaktualisierungen bei Bedarf onchain abrufen können. Dies ermöglicht es jedem in der Onchain-Umgebung, effizient auf Datenpunkte zuzugreifen. Das Pyth-Netzwerk aktualisiert die Preise alle 400 ms, was Pyth zu einem der schnellsten Onchain-Orakel macht.

Orakel-Contracts von Pyth:
- Mezo Mainnet (Proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (Proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Lesen Sie die [Pyth-Dokumentation](https://docs.pyth.network/home), um zu erfahren, wie Sie Pyth in Ihrer dApp verwenden.
