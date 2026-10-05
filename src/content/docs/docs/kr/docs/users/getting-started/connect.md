---
title: Mezo에 지갑 연결하기
topic: users
---

브라우저 지갑을 연결하려면 메인넷 또는 테스트넷의 네트워크 세부 정보를 사용하세요.

Chainlist의 **Connect Wallet** 버튼을 사용해 지갑에 Mezo를 추가할 수 있습니다.

- 메인넷: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- 테스트넷: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Chainlist가 작동하지 않으면 아래 네트워크 세부 정보를 사용해 네트워크를 수동으로 추가하세요.

## Mezo 메인넷

### 퍼블릭 RPC 엔드포인트

| 제공자 | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

더 높은 요청 한도가 필요하다면 Boar가 [boar.network/mezo](https://boar.network/mezo)에서 무료 API 키를 제공합니다. 엔터프라이즈 플랜도 이용할 수 있으며, [https://dashboard.boar.network/](https://dashboard.boar.network/)에서 시작하세요.

더 높은 요청 한도가 필요하다면 [validationcloud.io/mezo](https://www.validationcloud.io/mezo)에서 무료 Validation Cloud API 키를 받거나, 엔터프라이즈 플랜은 [validationcloud.io/contact](https://validationcloud.io/contact)를 통해 문의하세요.

### 네트워크 세부 정보

| 매개변수 | 값 |
|-----------|-------|
| 체인 ID | `31612` |
| 통화 | BTC (소수점 18자리) |
| 블록 탐색기 | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo 테스트넷

### 퍼블릭 RPC 엔드포인트

| 프로토콜 | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### 네트워크 세부 정보

| 매개변수 | 값 |
|-----------|-------|
| 체인 ID | `31611` |
| 통화 | BTC (소수점 18자리) |
| 블록 탐색기 | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Mezo에서 개발하시나요?]
Hardhat 및 Foundry 설정 방법은 [개발자 환경 설정](/docs/kr/docs/developers/getting-started/configure-environment) 가이드를 참조하세요.
:::

## 지갑에 Mezo 수동으로 추가하기

네트워크를 지갑에 수동으로 추가해야 하는 경우, 사용하는 지갑에 맞는 아래 안내에 따라 사용자 지정 네트워크를 추가하세요.

* MetaMask: [사용자 지정 네트워크 RPC를 추가하는 방법](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [사용자 지정 네트워크 추가하기](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [사용자 지정 네트워크 추가하기(모바일)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC 지갑

BTC 지갑은 Mezo App에서 지원되며, BTC 지갑에 연결된 Mezo 네트워크 주소를 받을 수 있습니다. 현재 BTC 지갑으로 Mezo에서 할 수 있는 작업은 다음과 같습니다.

- BTC 자산 브리지
- EVM 자산 브리지
- 대출받기, 상환하기 또는 대출 담보 관리하기
- MUSD Market에서 상품 구매하기
- Mezo 네트워크에서 자산 받기 및 보내기
- Mezo Earn 참여하기(잠금, 투표, 볼트 및 풀 예치/인출, 보상 청구)

## 개발자

Mezo에서 dApp을 개발하고 배포하는 방법은 [개발자 시작하기](/docs/kr/docs/developers/getting-started/) 문서를 참조하세요.
