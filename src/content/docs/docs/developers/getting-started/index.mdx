---
title: Developer Getting Started Guide
description: >-
  Step-by-step onboarding guide for developers building on the Mezo
  Bitcoin-centric platform.
topic: developers
---

## 1. Introduction to Mezo

Mezo is engineered to transform Bitcoin from a passive store of value into a productive, dynamic financial asset. By combining the security of Bitcoin with the flexibility of a modern blockchain, Mezo provides a robust platform for decentralized applications (dApps) that serve the massive, underserved Bitcoin community.

### 1.1 Core Architecture

The Mezo chain is built on a hybrid architecture designed for maximum developer accessibility and performance.

- EVM Compatibility: Mezo is a fully EVM-compatible blockchain, allowing Solidity developers to deploy existing smart contracts and use familiar tools like Hardhat and Foundry with minimal code changes.
- Cosmos SDK Base: The core client, `mezod`, is a heavily modified fork of Evmos, built using the Cosmos SDK and operating on the CometBFT consensus engine. This provides chain sovereignty and high throughput.
- BTC as Gas: All transaction fees on Mezo are paid in BTC, reinforcing Bitcoin’s utility as a transactional asset.
- Core Client: The reference client implementation for the Mezo chain is `mezod`.

## 2. Quickstart: Time to First Transaction (TTFT)

This section provides the fastest path to deploying a contract and interacting with the Mezo Testnet.

### 2.1 Network Details (Testnet)

To configure your wallet (e.g., MetaMask, RainbowKit) or development environment, use the following Testnet parameters:

| Parameter | Value |
| --- | --- |
| Network Name | Mezo Testnet |
| RPC Endpoint (HTTPS) | `https://rpc.test.mezo.org` |
| RPC Endpoint (WSS) | `wss://rpc-ws.test.mezo.org` |
| Chain ID | `31611` |
| Native Currency | BTC |
| Decimals | 18 |
| Block Explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### 2.2 Get Testnet BTC

To pay for gas fees on the Testnet, you will need Testnet BTC.

1. Mezo Faucet: Obtain Testnet BTC from the official [Mezo Faucet](https://faucet.test.mezo.org/).
   - Note: The faucet is protected by a CAPTCHA to prevent abuse.
2. Wallet Setup: Ensure you have a browser wallet installed that supports Ethereum (EVM).

### 2.3 Environment Setup (Hardhat Example)

For Solidity developers, Mezo is fully compatible with Hardhat and Foundry.

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

## 3. Core Development Components

### 3.1 MUSD Stablecoin

MUSD is the native, Bitcoin-backed stablecoin of the Mezo ecosystem. Developers can integrate MUSD for payments, liquidity, and financial products.

- Repository: The smart contracts and dApp implementation are available in the MUSD GitHub repository: [mezo-org/musd](https://github.com/mezo-org/musd).
- Development Environment (pnpm):

```bash
pnpm install --frozen-lockfile
cd solidity
pnpm install --frozen-lockfile
```

- Testing Contracts:

```bash
cd solidity
pnpm test
```

- Deployment (Example): Contracts can be deployed using the `pnpm run deploy` command within the `solidity` directory. See the repository for details: [mezo-org/musd](https://github.com/mezo-org/musd).

### 3.2 Mezo Passport Integration (optional)

Mezo Passport is the official wallet connection library, built on top of RainbowKit, that enables seamless connection for both native Bitcoin wallets (e.g., Xverse, Unisat) and standard EVM wallets (e.g., MetaMask). Integration is optional and not required to build on Mezo.

Installation:

```bash
npm install @mezo-org/passport @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query
```

Configuration (React/TypeScript):

Use the `getConfig` method from `@mezo-org/passport` to configure your `WagmiProvider`.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
// Note: We use the consistent 'mezoTestnet' chain name for clarity.
import { getConfig, mezoTestnet } from "@mezo-org/passport";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={getConfig({ appName: "Your Mezo dApp" })}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider initialChain={mezoTestnet}>
          {/* Your App component */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
```

## 4. Infrastructure and Node Operation

The Validator Kit is the primary resource for setting up and running a Mezo node: [mezo-org/validator-kit](https://github.com/mezo-org/validator-kit).

### 4.1 Node Hardware Requirements

The following are the minimum recommended hardware specifications for running different types of Mezo nodes:

| Node Type | vCPU | RAM | Disk |
| --- | --- | --- | --- |
| Validator | 4 | 16 GB | 256 GB |
| RPC | 8 | 32 GB | 512 GB |
| Seed | 2 | 8 GB | 128 GB |

### 4.2 Deployment Options

The Validator Kit supports multiple deployment methods, catering to different levels of operational complexity:

1. Docker: Recommended for the easiest setup using Docker Compose.
2. Native: Running the `mezod` binary directly.
3. Helm: For deployment on Kubernetes clusters.
4. Manual: Step-by-step guide for complete manual control.

### 4.3 Validator Onboarding (Proof of Authority)

Mezo Validators must apply for Proof of Authority (PoA) to participate in consensus.

- Application Command: Once your node is set up, submit your application using the `mezod` CLI:

```bash
mezod --home=<mezod_home_path> --rpc-url <rpc_url> poa submit-application <key_name>
```

## 5. Mainnet Network Details

For production deployments, use the following Mainnet details. It is recommended to use a dedicated RPC provider for higher rate limits and stability.

| Parameter | Value |
| --- | --- |
| Network Name | Mezo Mainnet |
| Chain ID | `31612` |
| Native Currency | BTC |
| Decimals | 18 |
| Block Explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

### 5.1 Recommended RPC Providers

| Provider | HTTPS Endpoint | WSS Endpoint | Notes |
| --- | --- | --- | --- |
| Boar | `https://rpc-http.mezo.boar.network` | `wss://rpc-ws.mezo.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |
