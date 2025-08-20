---
title: Deploy your dApp to Mezo
topic: developers
---


Use this guide to learn how to deploy applications on Mezo. This guide walks you through the steps for deploying an example dApp to Mezo Mainnet. Later, you can use this same process for your own dApp. You will learn how to complete the following tasks:

1. Configure a dApp with Passport.
2. Deploy the dApp to Mezo Testnet.
3. Test the dApp as an end-user.
4. Deploy the dApp to product on Mezo Mainnet.

### Before you begin <a href="#before-you-begin" id="before-you-begin"></a>

* [Configure your development environment](configure-environment.md) for Mezo Testnet.
* Install browser wallets for both Ethereum and Bitcoin.
* Get native testnet BTC for development and testing from a [BTC faucet](https://bitcoinfaucet.uo1.net/)
* [Get testnet BTC](https://faucet.test.mezo.org/) on the Mezo testnet. This BTC is on Mezo testnet and is different from the native BTC in your Bitcoin wallet.

### Step 1: Enabling the dApp with Mezo Passport <a href="#step-1-enabling-the-dapp-with-mezo-passport" id="step-1-enabling-the-dapp-with-mezo-passport"></a>

#### Install Passport <a href="#install-passport" id="install-passport"></a>

Install the Mezo Passport library, RainbowKit, and dependencies:

```
npm install @mezo-org/passport @rainbow-me/rainbowkit wagmi viem@2.x @tanstack/react-query
```

#### Configure your application <a href="#configure-your-application" id="configure-your-application"></a>

The configuration process is similar to RainbowKit but uses the `getConfig` method from passport, which returns a default configuration for Mezo Testnet. Pass `getConfig` to `WagmiProvider`.

```
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";import { QueryClient, QueryClientProvider } from "@tanstack/react-query";import { WagmiProvider } from "wagmi";import { getConfig, matsnetTestnetChain } from "@mezo-org/passport";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(  <React.StrictMode>    <WagmiProvider config={getConfig({ appName: "Your app name" })}>      <QueryClientProvider client={queryClient}>        <RainbowKitProvider initialChain={matsnetTestnetChain}>          {/* Your App component */}        </RainbowKitProvider>      </QueryClientProvider>    </WagmiProvider>  </React.StrictMode>,);
```

#### Connecting wallets <a href="#connecting-wallets" id="connecting-wallets"></a>

To connect to the Mezo Passport wallet, use the standard Wagmi or RainbowKit components.

**Wagmi**

```
import { useChainId, useConnect } from "wagmi";
export const YourApp = () => {  const chainId = useChainId();  const { connectors, connect } = useConnect();
  return (    <div>      {connectors.map((connector) => (        <button          type="button"          onClick={() => {            connect({ connector, chainId });          }}          key={connector.id}        >          {connector.name}        </button>      ))}    </div>  );};
```

**RainbowKit**

```
import { ConnectButton } from "@rainbow-me/rainbowkit"
export const YourApp = () => {  return <ConnectButton label="Connect wallet"/>;};
```

### Step 2: Deploying to Mezo Testnet <a href="#step-2-deploying-to-mezo-testnet" id="step-2-deploying-to-mezo-testnet"></a>

### Step 3: End-to-end testing <a href="#step-3-end-to-end-testing" id="step-3-end-to-end-testing"></a>

### Step 4: Deploying to Mezo Mainnet <a href="#step-4-deploying-to-mezo-mainnet" id="step-4-deploying-to-mezo-mainnet"></a>

After you’ve completed development, you can deploy your dApp to Mezo Mainnet as a production application. You will need BTC on Mezo Mainnet to operate the dApp on Mezo Mainnet. [Get Mezo Mainnet BTC](https://deploy-preview-48--mezo-docs.netlify.app/docs/users/getting-started/bridging) by bridging assets to Mezo.

### What’s next <a href="#whats-next" id="whats-next"></a>

Now that you’ve deployed a testnet dApp
