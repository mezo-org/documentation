---
title: Configurar el entorno de desarrollo
description: Configura tu entorno de desarrollo para crear y desplegar en Mezo.
topic: developers
---

Configura tu entorno de desarrollo de Hardhat o Foundry para Mezo.

### Antes de empezar

Antes de poder desplegar aplicaciones, necesitarás una billetera de Ethereum con BTC para pagar las comisiones de gas.

* [Conectar tu billetera a Mezo](/docs/es/docs/users/getting-started/connect/)

Para la configuración avanzada de la cadena y los parámetros de red, consulta la [Guía de configuración de cadenas](/docs/es/docs/developers/chains/).

---

## Mainnet

### Datos de la red

| Parámetro | Valor |
|-----------|-------|
| Nombre de la red | Mezo Mainnet |
| Chain ID | `31612` |
| Moneda | BTC (18 decimales) |
| Explorador de bloques | [explorer.mezo.org](https://explorer.mezo.org/) |

### Proveedores de RPC

| Proveedor | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Para configurar Hardhat para Mezo Mainnet, modifica tu archivo `hardhat.config.js` (o `.ts`):

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

Para configurar un proyecto de Foundry para Mezo Mainnet, establece lo siguiente en tu `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Datos de la red

| Parámetro | Valor |
|-----------|-------|
| Nombre de la red | Mezo Testnet |
| Chain ID | `31611` |
| Moneda | BTC (18 decimales) |
| Explorador de bloques | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### Endpoints RPC

| Protocolo | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Si es la primera vez que usas Hardhat, consulta la guía [Inicio rápido de Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) para aprender a instalar e inicializar tu proyecto.

Para configurar Hardhat para Mezo Testnet, modifica tu archivo `hardhat.config.js` (o `.ts`):

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

Si es la primera vez que usas Foundry, consulta la guía [Primeros pasos con Foundry](https://book.getfoundry.sh/getting-started/installation) para aprender a instalar e inicializar tu proyecto.

Para configurar un proyecto de Foundry para Mezo Testnet, establece lo siguiente en tu `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
