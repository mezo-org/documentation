---
title: 将钱包连接到 Mezo
topic: users
---

要连接浏览器钱包，请使用主网或测试网的网络信息。

您可以在 Chainlist 上通过 **Connect Wallet** 按钮将 Mezo 添加到钱包：

- 主网：[https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- 测试网：[https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

如果 Chainlist 无法使用，请根据下方的网络信息手动添加网络。

## Mezo 主网

### 公共 RPC 端点

| 提供商 | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

如需更高的速率限制，Boar 在 [boar.network/mezo](https://boar.network/mezo) 提供免费 API 密钥。另有企业版套餐，请前往 [https://dashboard.boar.network/](https://dashboard.boar.network/) 开始使用。

如需更高的速率限制，可在 [validationcloud.io/mezo](https://www.validationcloud.io/mezo) 获取免费的 Validation Cloud API 密钥；如需企业版套餐，请通过 [validationcloud.io/contact](https://validationcloud.io/contact) 联系他们。

### 网络信息

| 参数 | 值 |
|-----------|-------|
| 链 ID | `31612` |
| 货币 | BTC（18 位小数） |
| 区块浏览器 | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo 测试网

### 公共 RPC 端点

| 协议 | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### 网络信息

| 参数 | 值 |
|-----------|-------|
| 链 ID | `31611` |
| 货币 | BTC（18 位小数） |
| 区块浏览器 | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[在 Mezo 上开发？]
有关 Hardhat 和 Foundry 的配置，请参阅[设置开发者环境](/docs/zh/docs/developers/getting-started/configure-environment)指南。
:::

## 手动将 Mezo 添加到钱包

如果需要手动将网络添加到钱包，请根据您使用的钱包，按照以下说明添加自定义网络：

* MetaMask：[如何添加自定义网络 RPC](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet：[添加自定义网络](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet：[添加自定义网络（移动端）](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC 钱包

Mezo App 支持 BTC 钱包，您的 BTC 钱包可获得一个与之关联的 Mezo 网络地址。目前，BTC 钱包可以在 Mezo 上完成以下操作：

- 桥接 BTC 资产
- 桥接 EVM 资产
- 借款、还款或管理贷款的抵押品
- 在 MUSD Market 购买商品
- 在 Mezo 网络上接收和发送资产
- 参与 Mezo Earn（锁定、投票、存入或提取金库和流动性池中的资产、领取奖励）

## 开发者

要了解如何在 Mezo 上开发和部署 dApp，请参阅[开发者入门](/docs/zh/docs/developers/getting-started/)文档。
