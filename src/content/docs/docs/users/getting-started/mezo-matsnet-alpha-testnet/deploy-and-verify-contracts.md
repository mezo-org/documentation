---
title: Deploy and Verify Contracts
---

You can deploy contracts to Mezo matsnet targeting the London EVM Version and the network details on the [Connect to Mezo matsnet](connect-to-mezo-matsnet.md) page. The examples are tested using Hardhat, Foundry, and Remix, but you can try using other frameworks if you prefer.

## Before you begin

Before you can deploy contracts, you will need an Ethereum wallet with matsnet BTC to pay for the gas fees.

* [Stack matsnet BTC](stack-matsnet-btc.md)
* [Connect to Mezo matsnet](stack-matsnet-btc.md)

## Hardhat

If you are new to Hardhat, use the [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) guide to learn how to install and initialize your project.

To configure Hardhat to work with Mezo matsnet, set the following items in your Hardhat config file:

* Add an entry under `networks` for Mezo matsnet with `url: "https://rpc.test.mezo.org"` and `chainId: 31611`.
* In the `solidity` settings, add `evmVersion: "london"`.

As an example, see these basic Hardhat config files:

### Typescript

```typescript
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "matsnet",
  networks: {
    hardhat: {
    },
    matsnet: {
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

### Javascript

```javascript
require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "matsnet",
  networks: {
    hardhat: {
    },
    matsnet: {
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

After your Hardhat project is configured, deploy the contact using [Hardhat ignition](https://hardhat.org/hardhat-runner/docs/guides/deploying) or a deploy script. For example, use `npx hardhat run` to call a deploy script and specify `matsnet` as your target network.

```sh
npx hardhat run scripts/deploy.js --network matsnet
```

## Foundry

If you are new to Foundry, use the [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) guide to learn how to install and initialize your project.

To configure a Foundry project to work with Mezo matsnet, set the following items in your Foundry TOML file under `[profile.default]` or a preferred profile:

* Chain ID: `chain_id = 31661`
* RPC: `eth_rpc_url = "https://rpc.test.mezo.org"`
* EVM Version: `evm_version = 'london'`

As an example, see the example Foundry TOML:

```toml
[profile.default]
src = "src"
out = "out"
libs = ["lib"]
chain_id = 31661
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```

After the TOML is configured, deploy your contracts using `forge create`:

```sh
forge create src/Counter.sol:Counter --private-key YOUR_PRIVATE_WALLET_KEY
```

## Remix

[Remix](https://remix.ethereum.org/) is a browser development environment. If you are new to Remix, see the [Basics of Remix](https://remix.ethereum.org/?#activate=udapp,solidity,LearnEth) embedded guide to learn how to compile and deploy a contract.

Remix requires some extra configuration to work with Mezo matsnet:

* [Connect your browser wallet](connect-to-mezo-matsnet.md) to Mezo matsnet so Remix can use it as an Injected Provider.
* In Remix under the **Solidity Compiler** tab, open the **Advanced Configurations** menu and select `london` as the EVM version.

<figure><img src="/gitbook/Screenshot from 2024-11-19 01-37-06.png" alt="" width="138"><figcaption></figcaption></figure>

* In Remix under the **Deploy & Run Transactions** tab, set the **Environment** to use an Injected Provider. Set the current network on your browser wallet to Mezo matsnet. Remix should detect the custom network with chain ID `31611`.

<figure><img src="/gitbook/Screenshot from 2024-11-19 01-20-40.png" alt="" width="276"><figcaption></figcaption></figure>

After you complete these settings, you can deploy contracts to Mezo matsnet using the standard process. See the [Remix Documentation](https://remix-ide.readthedocs.io/en/latest/) for more information about how to use Remix.

## Verifying contracts

Currently, the explorer does not issue API keys to verify contracts using development frameworks. Use the contract verification UI at [https://explorer.test.mezo.org/contract-verification](https://explorer.test.mezo.org/contract-verification).

