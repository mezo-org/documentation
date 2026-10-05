---
title: "Guide du développeur\_: Infrastructure d'oracles"
description: >-
  Découvrez comment les oracles Mezo fournissent des flux de données sécurisés
  et décentralisés pour vos applications.
topic: developers
---

Mezo inclut un oracle dans ses nœuds validateurs. Des oracles tiers sont également disponibles.

## Skip Connect

Mezo utilise [Skip Connect](https://github.com/skip-mev/connect) comme service principal d'oracle. Skip détermine le prix d'une paire d'actifs lors du consensus de bloc et l'écrit dans l'état onchain du module Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Ce module est fourni par Skip et est intégré au client Mezo.

Le sidecar s'exécute sur le même système que le nœud validateur, de sorte que la récupération et l'agrégation des données sont effectuées sur le même système et transmises au nœud validateur via gRPC.

![Un diagramme montrant le processus où Skip agrège les données de marché de plusieurs sources et les validateurs Mezo exécutent Skip Connect et x/oracle pour mettre à jour l'état onchain avec les dernières valeurs](/docs/images/oracle/mezo-oracle.avif)

Pour une description complète de la façon dont Skip agrège les données, consultez la documentation [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

Skip Connect comprend plusieurs [fournisseurs](https://github.com/skip-mev/connect/blob/main/providers/README.md) qui peuvent être configurés dans le sidecar. Vous pouvez trouver une liste complète des fournisseurs disponibles dans la documentation de Skip Connect :

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Références Skip Providers et Market Map :
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork est un protocole d'oracle qui permet des connexions à latence ultra-faible entre les fournisseurs de données et les applications onchain et hors chaîne. Le cas d'utilisation le plus courant de Stork est l'obtention et la consommation de données de marché sous forme de flux de prix en temps réel pour la DeFi. Stork [est disponible sur Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Documentation Stork](https://docs.stork.network/)**
- **[Contrats déployés sur Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra est un réseau d'oracles multichaîne conçu pour alimenter les dApps à travers les écosystèmes blockchain avec des solutions de données rapides, sécurisées, décentralisées et évolutives. Le [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) de Supra est disponible sur Mezo Testnet. Consultez la page [Réseaux disponibles](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) de Supra pour trouver les bonnes adresses de contrat pull et de contrat de stockage.

- **[Documentation Supra](https://docs.supra.com/)**

## Pyth

Le [réseau Pyth](https://pyth.network/) est l'un des plus grands réseaux d'oracles de première partie et fournit des données en temps réel sur plusieurs chaînes, y compris Mezo. Pyth propose une conception innovante d'[oracle pull à faible latence](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) où les utilisateurs peuvent obtenir des mises à jour de prix onchain quand nécessaire. Cela permet à tous les acteurs de l'environnement onchain d'accéder efficacement aux données. Le réseau Pyth met à jour les prix toutes les 400 ms, faisant de Pyth l'un des oracles onchain les plus rapides.

Contrats d'oracle Pyth :
- Mezo Mainnet (proxy) : [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (proxy) : [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Consultez la [documentation Pyth](https://docs.pyth.network/home) pour apprendre à utiliser Pyth dans votre dApp.
