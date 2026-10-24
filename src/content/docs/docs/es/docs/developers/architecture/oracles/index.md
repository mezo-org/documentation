---
title: 'Guía para desarrolladores: infraestructura de oráculos'
description: >-
  Aprende cómo los oráculos de Mezo proporcionan feeds de datos seguros y
  descentralizados para tus aplicaciones.
topic: developers
---

Mezo incluye un oráculo como parte de sus nodos validadores. También están disponibles oráculos de terceros.

## Skip Connect

Mezo utiliza [Skip Connect](https://github.com/skip-mev/connect) como su servicio principal de oráculos. Skip determina el precio de un par de activos durante el consenso de bloques y lo escribe en el estado onchain del módulo Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Skip proporciona este módulo, que está integrado en el cliente de Mezo.

El sidecar se ejecuta en el mismo sistema que el nodo validador, por lo que la obtención y agregación de datos se completan en el mismo sistema y se pasan al nodo validador mediante gRPC.

![Un diagrama que muestra el proceso donde Skip agrega datos de mercado de varias fuentes y los validadores de Mezo ejecutan Skip Connect y x/oracle para actualizar el estado onchain con los valores más recientes](/docs/images/oracle/mezo-oracle.avif)

Para una descripción completa de cómo Skip agrega datos, consulta la documentación de [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

Skip Connect incluye varios [proveedores](https://github.com/skip-mev/connect/blob/main/providers/README.md) que pueden configurarse en el sidecar. Puedes encontrar una lista completa de los proveedores disponibles en la documentación de Skip Connect:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Referencias de Skip Providers y Market Map:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork es un protocolo de oráculos que permite conexiones de latencia ultra baja entre proveedores de datos y aplicaciones tanto onchain como offchain. El caso de uso más común de Stork es obtener y consumir datos de mercado en forma de feeds de precios en tiempo real para DeFi. Stork [está disponible en Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Documentación de Stork](https://docs.stork.network/)**
- **[Contratos desplegados en Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra es una red de oráculos cross-chain diseñada para potenciar dApps en ecosistemas blockchain con soluciones de datos rápidas, seguras, descentralizadas y escalables. El [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) de Supra está disponible en Mezo Testnet. Consulta la página de [Redes disponibles](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) de Supra para encontrar las direcciones correctas del contrato pull y del contrato de almacenamiento.

- **[Documentación de Supra](https://docs.supra.com/)**
​
## Pyth

[Pyth Network](https://pyth.network/) es una de las mayores redes de oráculos con datos de primera mano y ofrece datos en tiempo real en varias cadenas, entre ellas Mezo. Pyth introduce un innovador diseño de [oráculo pull de baja latencia](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) donde los usuarios pueden obtener actualizaciones de precios onchain cuando lo necesiten. Esto permite que todos en el entorno onchain accedan a los datos de manera eficiente. La red Pyth actualiza los precios cada 400ms, lo que convierte a Pyth en uno de los oráculos onchain más rápidos.

Contratos de oráculo de Pyth:
- Mezo Mainnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Consulta la [Documentación de Pyth](https://docs.pyth.network/home) para aprender a usar Pyth en tu dApp.
