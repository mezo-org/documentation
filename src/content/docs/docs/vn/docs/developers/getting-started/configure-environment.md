---
title: Thiết lập môi trường phát triển
description: Cấu hình môi trường phát triển để xây dựng và triển khai trên Mezo.
topic: developers
---

Cấu hình môi trường phát triển Hardhat hoặc Foundry của bạn cho Mezo.

### Trước khi bắt đầu

Trước khi triển khai ứng dụng, bạn cần có một ví Ethereum chứa BTC để trả phí gas.

* [Kết nối ví của bạn với Mezo](/docs/vn/docs/users/getting-started/connect/)

Để biết cấu hình chuỗi nâng cao và các tham số mạng, hãy xem [Hướng dẫn cấu hình chuỗi](/docs/vn/docs/developers/chains/).

---

## Mainnet

### Thông tin mạng

| Tham số | Giá trị |
|-----------|-------|
| Tên mạng | Mezo Mainnet |
| Chain ID | `31612` |
| Đơn vị tiền tệ | BTC (18 chữ số thập phân) |
| Trình khám phá khối | [explorer.mezo.org](https://explorer.mezo.org/) |

### Nhà cung cấp RPC

| Nhà cung cấp | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Để cấu hình Hardhat cho Mezo Mainnet, hãy sửa tệp `hardhat.config.js` (hoặc `.ts`) của bạn:

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

Để cấu hình dự án Foundry cho Mezo Mainnet, hãy đặt các giá trị sau trong tệp `foundry.toml`:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## Testnet

### Thông tin mạng

| Tham số | Giá trị |
|-----------|-------|
| Tên mạng | Mezo Testnet |
| Chain ID | `31611` |
| Đơn vị tiền tệ | BTC (18 chữ số thập phân) |
| Trình khám phá khối | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### Endpoint RPC

| Giao thức | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Nếu bạn mới dùng Hardhat, hãy xem hướng dẫn [Bắt đầu nhanh với Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) để biết cách cài đặt và khởi tạo dự án.

Để cấu hình Hardhat cho Mezo Testnet, hãy sửa tệp `hardhat.config.js` (hoặc `.ts`) của bạn:

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

Nếu bạn mới dùng Foundry, hãy xem hướng dẫn [Bắt đầu với Foundry](https://book.getfoundry.sh/getting-started/installation) để biết cách cài đặt và khởi tạo dự án.

Để cấu hình dự án Foundry cho Mezo Testnet, hãy đặt các giá trị sau trong tệp `foundry.toml`:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
