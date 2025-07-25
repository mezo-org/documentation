---
title: Configure your Environment
---

# Configure your Environment

AFSDFDSFSDF



Configure your Hardhat or Foundry development environment for Mezo Testnet.

### Before you begin

Before you can deploy applications, you will need an Ethereum wallet with testnet BTC to pay for the gas fees.

* [Connect to Mezo Testnet](../../../../../../docs/users/getting-started/connect/)

### Hardhat

If you are new to Hardhat, use the [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) guide to learn how to install and initialize your project.

To configure Hardhat to work with Mezo Testnet, set the following items in your Hardhat config file:

* Add an entry under `networks` for Mezo Testnet with `url: "https://rpc.test.mezo.org"` and `chainId: 31611`.
* In the `solidity` settings, add `evmVersion: "london"`.

As an example, see these basic Hardhat config files:

#### Typescript

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "mezotestnet",
  networks: {
    hardhat: {
    },
    mezotestnet: {
      url: "https://rpc.test.mezo.org",
      chainId: 31611,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"]
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

export default config;
```

#### Javascript

```javascript
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "mezotestnet",
  networks: {
    hardhat: {
    },
    mezotestnet: {
      url: "https://rpc.test.mezo.org",
      chainId: 31611,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"]
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

To configure a Foundry project to work with Mezo Testnet, set the following items in your Foundry TOML file under `[profile.default]` or a preferred profile:

* Chain ID: `chain_id = 31611`
* RPC: `eth_rpc_url = "https://rpc.test.mezo.org"`
* EVM Version: `evm_version = 'london'`

As an example, see the example Foundry TOML:

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
