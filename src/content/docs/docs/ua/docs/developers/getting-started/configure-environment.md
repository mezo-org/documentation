---
title: Налаштування середовища розробки
description: >-
  Налаштуйте середовище розробки, щоб створювати й розгортати застосунки на
  Mezo.
topic: developers
---

Налаштуйте своє середовище розробки Hardhat або Foundry для роботи з Mezo.

### Перш ніж почати

Щоб розгортати застосунки, вам знадобиться гаманець Ethereum з BTC для оплати газу.

* [Під'єднайте гаманець до Mezo](/docs/ua/docs/users/getting-started/connect/)

Розширене налаштування ланцюга та параметри мережі описано в [посібнику з налаштування ланцюгів](/docs/ua/docs/developers/chains/).

---

## Mainnet

### Параметри мережі

| Параметр | Значення |
|-----------|-------|
| Назва мережі | Mezo Mainnet |
| Chain ID | `31612` |
| Валюта | BTC (18 десяткових знаків) |
| Оглядач блоків | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC-провайдери

| Провайдер | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Щоб налаштувати Hardhat для Mezo Mainnet, змініть файл `hardhat.config.js` (або `.ts`):

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

Щоб налаштувати проєкт Foundry для Mezo Mainnet, задайте такі параметри у `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Параметри мережі

| Параметр | Значення |
|-----------|-------|
| Назва мережі | Mezo Testnet |
| Chain ID | `31611` |
| Валюта | BTC (18 десяткових знаків) |
| Оглядач блоків | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC-ендпоінти

| Протокол | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Якщо ви раніше не працювали з Hardhat, скористайтеся посібником [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start), щоб дізнатися, як установити Hardhat та ініціалізувати проєкт.

Щоб налаштувати Hardhat для Mezo Testnet, змініть файл `hardhat.config.js` (або `.ts`):

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

Якщо ви раніше не працювали з Foundry, скористайтеся посібником [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation), щоб дізнатися, як установити Foundry та ініціалізувати проєкт.

Щоб налаштувати проєкт Foundry для Mezo Testnet, задайте такі параметри у `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
