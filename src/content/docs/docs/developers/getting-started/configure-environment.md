---
title: Set Up Developer Environment
description: Configure your development environment to build and deploy on Mezo.
topic: developers
---

Configure your Hardhat or Foundry development environment for Mezo.

### Before you begin

Before you can deploy applications, you will need an Ethereum wallet with BTC to pay for gas fees.

* [Connect your wallet to Mezo](/docs/users/getting-started/connect/)

For advanced chain configuration and network parameters, see the [Chains Configuration Guide](/docs/developers/chains/).

---

## Mainnet

### Network Details

| Parameter | Value |
|-----------|-------|
| Network Name | Mezo Mainnet |
| Chain ID | `31612` |
| Currency | BTC (18 decimals) |
| Block Explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC Providers

| Provider | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

To configure Hardhat for Mezo Mainnet, modify your `hardhat.config.js` (or `.ts`) file:

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

To configure a Foundry project for Mezo Mainnet, set the following in your `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Network Details

| Parameter | Value |
|-----------|-------|
| Network Name | Mezo Testnet |
| Chain ID | `31611` |
| Currency | BTC (18 decimals) |
| Block Explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC Endpoints

| Protocol | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

If you are new to Hardhat, use the [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) guide to learn how to install and initialize your project.

To configure Hardhat for Mezo Testnet, modify your `hardhat.config.js` (or `.ts`) file:

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

If you are new to Foundry, use the [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) guide to learn how to install and initialize your project.

To configure a Foundry project for Mezo Testnet, set the following in your `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
