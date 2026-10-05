---
title: Entwicklungsumgebung einrichten
description: >-
  Konfigurieren Sie Ihre Entwicklungsumgebung, um auf Mezo zu entwickeln und zu
  deployen.
topic: developers
---

Konfigurieren Sie Ihre Hardhat- oder Foundry-Entwicklungsumgebung für Mezo.

### Bevor Sie beginnen

Bevor Sie Anwendungen deployen können, benötigen Sie eine Ethereum-Wallet mit BTC, um die Gasgebühren zu bezahlen.

* [Wallet mit Mezo verbinden](/docs/de/docs/users/getting-started/connect/)

Erweiterte Chain-Konfiguration und Netzwerkparameter finden Sie im [Leitfaden zur Chain-Konfiguration](/docs/de/docs/developers/chains/).

---

## Mainnet

### Netzwerkdetails

| Parameter | Wert |
|-----------|-------|
| Netzwerkname | Mezo Mainnet |
| Chain-ID | `31612` |
| Währung | BTC (18 Dezimalstellen) |
| Block-Explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC-Anbieter

| Anbieter | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Um Hardhat für das Mezo Mainnet zu konfigurieren, passen Sie Ihre Datei `hardhat.config.js` (bzw. `.ts`) an:

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

Um ein Foundry-Projekt für das Mezo Mainnet zu konfigurieren, legen Sie Folgendes in Ihrer `foundry.toml` fest:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Netzwerkdetails

| Parameter | Wert |
|-----------|-------|
| Netzwerkname | Mezo Testnet |
| Chain-ID | `31611` |
| Währung | BTC (18 Dezimalstellen) |
| Block-Explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC-Endpoints

| Protokoll | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Wenn Sie neu bei Hardhat sind, erfahren Sie in der Anleitung [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start), wie Sie Hardhat installieren und Ihr Projekt initialisieren.

Um Hardhat für das Mezo Testnet zu konfigurieren, passen Sie Ihre Datei `hardhat.config.js` (bzw. `.ts`) an:

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

Wenn Sie neu bei Foundry sind, erfahren Sie in der Anleitung [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation), wie Sie Foundry installieren und Ihr Projekt initialisieren.

Um ein Foundry-Projekt für das Mezo Testnet zu konfigurieren, legen Sie Folgendes in Ihrer `foundry.toml` fest:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
