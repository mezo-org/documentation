---
title: Configurer l'environnement de développement
description: >-
  Configurez votre environnement de développement pour développer et déployer
  sur Mezo.
topic: developers
---

Configurez votre environnement de développement Hardhat ou Foundry pour Mezo.

### Avant de commencer

Avant de pouvoir déployer des applications, vous aurez besoin d'un portefeuille Ethereum contenant des BTC pour payer les frais de gaz.

* [Connecter votre portefeuille à Mezo](/docs/fr/docs/users/getting-started/connect/)

Pour la configuration avancée de la chaîne et les paramètres réseau, consultez le [guide de configuration des chaînes](/docs/fr/docs/developers/chains/).

---

## Mainnet

### Détails du réseau

| Paramètre | Valeur |
|-----------|-------|
| Nom du réseau | Mezo Mainnet |
| Chain ID | `31612` |
| Devise | BTC (18 décimales) |
| Explorateur de blocs | [explorer.mezo.org](https://explorer.mezo.org/) |

### Fournisseurs RPC

| Fournisseur | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Pour configurer Hardhat pour Mezo Mainnet, modifiez votre fichier `hardhat.config.js` (ou `.ts`) :

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

Pour configurer un projet Foundry pour Mezo Mainnet, définissez les paramètres suivants dans votre fichier `foundry.toml` :

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Détails du réseau

| Paramètre | Valeur |
|-----------|-------|
| Nom du réseau | Mezo Testnet |
| Chain ID | `31611` |
| Devise | BTC (18 décimales) |
| Explorateur de blocs | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### Endpoints RPC

| Protocole | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Si vous découvrez Hardhat, suivez le guide [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) pour apprendre à installer Hardhat et à initialiser votre projet.

Pour configurer Hardhat pour Mezo Testnet, modifiez votre fichier `hardhat.config.js` (ou `.ts`) :

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

Si vous découvrez Foundry, suivez le guide [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) pour apprendre à installer Foundry et à initialiser votre projet.

Pour configurer un projet Foundry pour Mezo Testnet, définissez les paramètres suivants dans votre fichier `foundry.toml` :

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
