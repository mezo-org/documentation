---
title: Configurar o ambiente de desenvolvimento
description: >-
  Configure seu ambiente de desenvolvimento para criar e implantar aplicações no
  Mezo.
topic: developers
---

Configure seu ambiente de desenvolvimento Hardhat ou Foundry para o Mezo.

### Antes de começar

Antes de implantar aplicações, você vai precisar de uma carteira Ethereum com BTC para pagar as taxas de gás.

* [Conecte sua carteira ao Mezo](/docs/pt-br/docs/users/getting-started/connect/)

Para configurações avançadas de cadeia e parâmetros de rede, consulte o [Guia de configuração de cadeias](/docs/pt-br/docs/developers/chains/).

---

## Mainnet

### Dados da rede

| Parâmetro | Valor |
|-----------|-------|
| Nome da rede | Mezo Mainnet |
| ID da cadeia (Chain ID) | `31612` |
| Moeda | BTC (18 casas decimais) |
| Explorador de blocos | [explorer.mezo.org](https://explorer.mezo.org/) |

### Provedores de RPC

| Provedor | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Para configurar o Hardhat para a Mezo Mainnet, altere o arquivo `hardhat.config.js` (ou `.ts`):

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

Para configurar um projeto Foundry para a Mezo Mainnet, defina o seguinte no seu `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Dados da rede

| Parâmetro | Valor |
|-----------|-------|
| Nome da rede | Mezo Testnet |
| ID da cadeia (Chain ID) | `31611` |
| Moeda | BTC (18 casas decimais) |
| Explorador de blocos | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### Endpoints RPC

| Protocolo | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Se você ainda não conhece o Hardhat, use o guia [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) para aprender a instalar e inicializar seu projeto.

Para configurar o Hardhat para a Mezo Testnet, altere o arquivo `hardhat.config.js` (ou `.ts`):

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

Se você ainda não conhece o Foundry, use o guia [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) para aprender a instalar e inicializar seu projeto.

Para configurar um projeto Foundry para a Mezo Testnet, defina o seguinte no seu `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
