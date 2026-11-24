---
title: Настройка окружения разработки
description: Настройте окружение разработки для создания и развёртывания приложений в Mezo.
topic: developers
---

Настройте окружение разработки Hardhat или Foundry для работы с Mezo.

### Перед началом работы

Чтобы развёртывать приложения, вам понадобится Ethereum-кошелёк с BTC для оплаты комиссий за газ.

* [Подключение кошелька к Mezo](/docs/ru/docs/users/getting-started/connect/)

Расширенная конфигурация сети и сетевые параметры описаны в [руководстве по настройке сетей](/docs/ru/docs/developers/chains/).

---

## Основная сеть

### Параметры сети

| Параметр | Значение |
|-----------|-------|
| Название сети | Mezo Mainnet |
| ID сети | `31612` |
| Валюта | BTC (18 десятичных знаков) |
| Обозреватель блоков | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC-провайдеры

| Провайдер | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Чтобы настроить Hardhat для основной сети Mezo, измените файл `hardhat.config.js` (или `.ts`):

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

Чтобы настроить проект Foundry для основной сети Mezo, задайте следующие параметры в файле `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Тестовая сеть

### Параметры сети

| Параметр | Значение |
|-----------|-------|
| Название сети | Mezo Testnet |
| ID сети | `31611` |
| Валюта | BTC (18 десятичных знаков) |
| Обозреватель блоков | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC-эндпоинты

| Протокол | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Если вы впервые работаете с Hardhat, узнать, как установить его и инициализировать проект, можно в руководстве [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start).

Чтобы настроить Hardhat для тестовой сети Mezo, измените файл `hardhat.config.js` (или `.ts`):

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

Если вы впервые работаете с Foundry, узнать, как установить его и инициализировать проект, можно в руководстве [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation).

Чтобы настроить проект Foundry для тестовой сети Mezo, задайте следующие параметры в файле `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
