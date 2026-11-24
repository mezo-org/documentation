---
title: 개발자 환경 설정
description: Mezo에서 빌드하고 배포할 수 있도록 개발 환경을 설정하세요.
topic: developers
---

Mezo용 Hardhat 또는 Foundry 개발 환경을 설정하세요.

### 시작하기 전에

애플리케이션을 배포하려면 가스 수수료를 지불할 BTC가 있는 이더리움 지갑이 필요합니다.

* [Mezo에 지갑 연결하기](/docs/kr/docs/users/getting-started/connect/)

고급 체인 설정과 네트워크 매개변수는 [체인 설정 가이드](/docs/kr/docs/developers/chains/)를 참조하세요.

---

## 메인넷

### 네트워크 세부 정보

| 매개변수 | 값 |
|-----------|-------|
| 네트워크 이름 | Mezo Mainnet |
| 체인 ID | `31612` |
| 통화 | BTC (소수점 18자리) |
| 블록 탐색기 | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC 제공자

| 제공자 | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Mezo 메인넷용으로 Hardhat을 설정하려면 `hardhat.config.js`(또는 `.ts`) 파일을 다음과 같이 수정하세요.

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

Mezo 메인넷용으로 Foundry 프로젝트를 설정하려면 `foundry.toml` 파일에서 다음 값을 지정하세요.

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## 테스트넷

### 네트워크 세부 정보

| 매개변수 | 값 |
|-----------|-------|
| 네트워크 이름 | Mezo Testnet |
| 체인 ID | `31611` |
| 통화 | BTC (소수점 18자리) |
| 블록 탐색기 | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC 엔드포인트

| 프로토콜 | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

Hardhat을 처음 사용한다면 [Hardhat 빠른 시작](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) 가이드에서 설치 방법과 프로젝트 초기화 방법을 알아보세요.

Mezo 테스트넷용으로 Hardhat을 설정하려면 `hardhat.config.js`(또는 `.ts`) 파일을 다음과 같이 수정하세요.

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

Foundry를 처음 사용한다면 [Foundry 시작하기](https://book.getfoundry.sh/getting-started/installation) 가이드에서 설치 방법과 프로젝트 초기화 방법을 알아보세요.

Mezo 테스트넷용으로 Foundry 프로젝트를 설정하려면 `foundry.toml` 파일에서 다음 값을 지정하세요.

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
