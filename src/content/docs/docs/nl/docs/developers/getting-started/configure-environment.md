---
title: Ontwikkelomgeving instellen
description: Configureer je ontwikkelomgeving om op Mezo te bouwen en te deployen.
topic: developers
---

Configureer je Hardhat- of Foundry-ontwikkelomgeving voor Mezo.

### Voordat je begint

Voordat je applicaties kunt deployen, heb je een Ethereum-wallet met BTC nodig om de gaskosten te betalen.

* [Je wallet verbinden met Mezo](/docs/nl/docs/users/getting-started/connect/)

Zie de [handleiding voor chainconfiguratie](/docs/nl/docs/developers/chains/) voor geavanceerde chainconfiguratie en netwerkparameters.

---

## Mainnet

### Netwerkgegevens

| Parameter | Waarde |
|-----------|-------|
| Netwerknaam | Mezo Mainnet |
| Chain-ID | `31612` |
| Valuta | BTC (18 decimalen) |
| Block explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC-providers

| Provider | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Pas je bestand `hardhat.config.js` (of `.ts`) aan om Hardhat te configureren voor Mezo Mainnet:

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

Neem het volgende op in je `foundry.toml` om een Foundry-project te configureren voor Mezo Mainnet:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Netwerkgegevens

| Parameter | Waarde |
|-----------|-------|
| Netwerknaam | Mezo Testnet |
| Chain-ID | `31611` |
| Valuta | BTC (18 decimalen) |
| Block explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC-endpoints

| Protocol | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Ben je nieuw met Hardhat? Gebruik dan de handleiding [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) om te leren hoe je je project installeert en initialiseert.

Pas je bestand `hardhat.config.js` (of `.ts`) aan om Hardhat te configureren voor Mezo Testnet:

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

Ben je nieuw met Foundry? Gebruik dan de handleiding [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) om te leren hoe je je project installeert en initialiseert.

Neem het volgende op in je `foundry.toml` om een Foundry-project te configureren voor Mezo Testnet:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
