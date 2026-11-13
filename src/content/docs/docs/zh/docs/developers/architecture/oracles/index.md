---
title: 开发者指南：预言机基础设施
description: 了解 Mezo 预言机如何为您的应用程序提供安全、去中心化的数据源。
topic: developers
---

Mezo 在其验证者节点中内置了预言机，同时也可使用第三方预言机。

## Skip Connect

Mezo 使用 [Skip Connect](https://github.com/skip-mev/connect) 作为其主要的预言机服务。Skip 在区块共识过程中确定资产对的价格，并将其写入 [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos 模块的链上状态。该模块由 Skip 提供，并集成到 Mezo 客户端中。

侧车（sidecar）与验证者节点运行在同一系统上，因此数据检索和聚合在同一系统上完成，并通过 gRPC 传递给验证者节点。

![展示 Skip 从多个来源聚合市场数据的流程图，Mezo 验证者运行 Skip Connect 和 x/oracle 以最新值更新链上状态](/docs/images/oracle/mezo-oracle.avif)

有关 Skip 如何聚合数据的完整说明，请参阅 [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) 文档。

Skip Connect 包含多个可在侧车中配置的[提供者](https://github.com/skip-mev/connect/blob/main/providers/README.md)。您可以在 Skip Connect 文档中找到可用提供者的完整列表：

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip Providers 和 Market Map 参考：
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork 是一个预言机协议，能够在数据提供者与链上和链下应用之间实现超低延迟连接。Stork 最常见的用途是为 DeFi 拉取并使用实时价格数据源形式的市场数据。Stork [已在 Mezo 测试网上可用](https://docs.stork.network/resources/contract-addresses/evm#mezo)。

- **[Stork 文档](https://docs.stork.network/)**
- **[Mezo 测试网上的已部署合约](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra 是一个跨链预言机网络，旨在通过快速、安全、去中心化和可扩展的数据解决方案为各区块链生态系统的 dApp 提供支持。Supra 的[分布式预言机协议（DORA）](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora)已在 Mezo 测试网上可用。请参阅 Supra 的[可用网络](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks)页面，获取正确的拉取合约和存储合约地址。

- **[Supra 文档](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) 是最大的第一方预言机网络之一，为包括 Mezo 在内的多条链提供实时数据。Pyth 引入了创新的低延迟[拉取预言机设计](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand)，用户可以在需要时将价格更新拉取到链上。这使得链上环境中的每个人都能高效地访问数据点。Pyth 网络每 400 毫秒更新一次价格，使 Pyth 成为最快的链上预言机之一。

Pyth 的预言机合约：
- Mezo 主网（代理）：[0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo 测试网（代理）：[0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

请参阅 [Pyth 文档](https://docs.pyth.network/home)了解如何在您的 dApp 中使用 Pyth。
