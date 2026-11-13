---
title: 'Guia do desenvolvedor: infraestrutura de oráculos'
description: >-
  Saiba como os oráculos do Mezo fornecem feeds de dados seguros e
  descentralizados para suas aplicações.
topic: developers
---

O Mezo inclui um oráculo como parte de seus nós validadores. Oráculos de terceiros também estão disponíveis.

## Skip Connect

O Mezo usa o [Skip Connect](https://github.com/skip-mev/connect) como seu principal serviço de oráculo. O Skip determina o preço de um par de ativos durante o consenso do bloco e o grava no estado onchain do módulo Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Esse módulo é fornecido pelo Skip e está integrado ao cliente do Mezo.

O sidecar é executado no mesmo sistema que o nó validador, portanto a obtenção e a agregação dos dados são concluídas no mesmo sistema e repassadas ao nó validador via gRPC.

![Diagrama mostrando o processo em que o Skip agrega dados de mercado de várias fontes e os validadores do Mezo executam o Skip Connect e o x/oracle para atualizar o estado onchain com os valores mais recentes](/docs/images/oracle/mezo-oracle.avif)

Para uma descrição completa de como o Skip agrega dados, consulte a documentação [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

O Skip Connect inclui vários [provedores](https://github.com/skip-mev/connect/blob/main/providers/README.md) que podem ser configurados no sidecar. Você encontra a lista completa dos provedores disponíveis na documentação do Skip Connect:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Referências de Skip Providers e Market Map:
    - [Provedores](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Mercados](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

O Stork é um protocolo de oráculo que permite conexões de latência ultrabaixa entre provedores de dados e aplicações onchain e offchain. O caso de uso mais comum do Stork é obter e consumir dados de mercado na forma de feeds de preço em tempo real para DeFi. O Stork [está disponível na Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Documentação do Stork](https://docs.stork.network/)**
- **[Contratos implantados na Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

A Supra é uma rede de oráculos cross-chain projetada para dar suporte a dApps em diversos ecossistemas blockchain com soluções de dados rápidas, seguras, descentralizadas e escaláveis. O [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) da Supra está disponível na Mezo Testnet. Consulte a página [Available Networks](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) da Supra para encontrar os endereços corretos do contrato pull e do contrato de armazenamento.

- **[Documentação da Supra](https://docs.supra.com/)**

## Pyth

A [Pyth Network](https://pyth.network/) é uma das maiores redes de oráculos com dados primários (first-party) e fornece dados em tempo real em várias redes, incluindo o Mezo. O Pyth introduz um design inovador de [oráculo pull](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) de baixa latência, no qual os usuários podem trazer atualizações de preço para a cadeia (onchain) quando necessário. Isso permite que todos no ambiente onchain acessem dados de forma eficiente. A rede Pyth atualiza os preços a cada 400ms, o que torna o Pyth um dos oráculos onchain mais rápidos.

Contratos de oráculo do Pyth:
- Mezo Mainnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Consulte a [documentação do Pyth](https://docs.pyth.network/home) para aprender a usar o Pyth no seu dApp.
