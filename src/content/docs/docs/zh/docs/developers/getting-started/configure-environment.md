---
title: 设置开发者环境
description: 配置开发环境，以便在 Mezo 上构建和部署。
topic: developers
---

为 Mezo 配置 Hardhat 或 Foundry 开发环境。

### 开始之前

在部署应用之前，您需要一个持有 BTC 的以太坊钱包，用于支付 Gas 费。

* [将钱包连接到 Mezo](/docs/zh/docs/users/getting-started/connect/)

有关高级链配置和网络参数，请参阅[链配置指南](/docs/zh/docs/developers/chains/)。

---

## 主网

### 网络信息

| 参数 | 值 |
|-----------|-------|
| 网络名称 | Mezo Mainnet |
| 链 ID | `31612` |
| 货币 | BTC（18 位小数） |
| 区块浏览器 | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC 提供商

| 提供商 | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

要为 Mezo 主网配置 Hardhat，请修改您的 `hardhat.config.js`（或 `.ts`）文件：

```javascript
module.exports = {
  defaultNetwork: "mezomainnet",
  networks: {
    mezomainnet: {
      url: "https://mezo-mainnet.boar.network",
      chainId: 31612,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"] // Use environment variables for security
    }
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "london",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
```

### Foundry

要为 Mezo 主网配置 Foundry 项目，请在 `foundry.toml` 中设置以下内容：

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## 测试网

### 网络信息

| 参数 | 值 |
|-----------|-------|
| 网络名称 | Mezo Testnet |
| 链 ID | `31611` |
| 货币 | BTC（18 位小数） |
| 区块浏览器 | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC 端点

| 协议 | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

如果您刚开始使用 Hardhat，请参阅 [Hardhat 快速入门](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start)指南，了解如何安装和初始化项目。

要为 Mezo 测试网配置 Hardhat，请修改您的 `hardhat.config.js`（或 `.ts`）文件：

```javascript
module.exports = {
  defaultNetwork: "mezotestnet",
  networks: {
    mezotestnet: {
      url: "https://rpc.test.mezo.org",
      chainId: 31611,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"] // Use environment variables for security
    }
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "london",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
```

### Foundry

如果您刚开始使用 Foundry，请参阅 [Foundry 入门](https://book.getfoundry.sh/getting-started/installation)指南，了解如何安装和初始化项目。

要为 Mezo 测试网配置 Foundry 项目，请在 `foundry.toml` 中设置以下内容：

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
