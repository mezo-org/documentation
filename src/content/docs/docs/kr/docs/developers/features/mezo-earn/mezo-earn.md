---
title: Mezo Earn 개발 가이드
description: Solidly에서 영감을 받은 Mezo의 게이지 시스템이자 DEX인 Mezo Earn 위에서 개발하기 위한 종합 가이드입니다.
topic: developers
---
Mezo Earn은 Mezo의 게이지 시스템과 탈중앙화 거래소(DEX)를 구동하는 스마트 컨트랙트 시스템입니다. 이 가이드는 Mezo Earn 컨트랙트 위에서 개발하고 컨트랙트와 상호작용하는 방법을 이해하는 데 도움이 됩니다.

📄 **[Mezo Earn 백서 다운로드(PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — 경제적 인센티브 프레임워크, 이중 토큰 모델, 토크노믹스를 종합적으로 살펴볼 수 있습니다.

## 개요

Mezo Earn은 다음을 제공합니다.
- **탈중앙화 거래소(DEX)**: 토큰 스왑을 위한 자동화된 마켓 메이커
- **게이지 시스템**: 투표 및 보상 분배 메커니즘
- **Solidly에서 영감을 받은 아키텍처**: 효율적인 ve-토크노믹스와 유동성 관리

## 저장소 구조

[Mezo Earn 저장소](https://github.com/mezo-org/tigris.git)에는 다음이 포함되어 있습니다.

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: Solidity로 작성된 스마트 컨트랙트
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: 컨트랙트와 상호작용하기 위한 프런트엔드 애플리케이션
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: Cloudflare 기반 인프라 구성 요소
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: CI/CD 자동화

## 개발 환경 설정

### 사전 요구 사항

- Node.js(정확한 버전은 [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) 확인)
- pnpm 패키지 관리자
- Git
- Foundry(스마트 컨트랙트 개발용)

### 설치

1. 저장소를 클론하세요.
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. 종속성을 설치하세요.
```bash
pnpm install
```

3. pre-commit 훅을 설정하세요.
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### pre-commit 훅 테스트

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## 스마트 컨트랙트 개발

### 컨트랙트 아키텍처

Mezo Earn 컨트랙트는 [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity) 디렉터리에 구성되어 있습니다. 주요 구성 요소는 다음과 같습니다.

- **핵심 DEX 컨트랙트**: 자동화된 마켓 메이커 기능
- **게이지 컨트랙트**: 투표 및 보상 분배
- **토큰 컨트랙트**: ERC20 구현
- **유틸리티 컨트랙트**: 헬퍼 함수와 라이브러리

### 개발 워크플로

1. **컨트랙트 작성**: `solidity/`에서 Solidity 파일을 만들거나 수정하세요
2. **컨트랙트 테스트**: 컨트랙트에 대한 포괄적인 테스트를 작성하세요
3. **배포**: 배포 스크립트를 사용해 테스트넷/메인넷에 배포하세요
4. **검증**: 블록 탐색기에서 컨트랙트를 검증하세요

### 컨트랙트 컴파일

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### 테스트

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## 프런트엔드 개발

[`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) 디렉터리에는 Mezo Earn 컨트랙트와 상호작용하기 위한 프런트엔드 애플리케이션이 들어 있습니다.

### 주요 기능

- **스왑 인터페이스**: 토큰 스왑 기능
- **유동성 관리**: 풀에 유동성 추가/제거
- **게이지 투표**: 게이지 투표와 보상에 참여
- **포트폴리오 관리**: 포지션과 보상 추적

### 개발 명령어

```bash
# Navigate to dapp directory
cd dapp

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 통합 가이드

### Mezo Earn 컨트랙트에 연결하기

1. **컨트랙트 주소 확인**: Mezo 테스트넷/메인넷에 배포된 컨트랙트 주소
2. **ABI 통합**: 상호작용을 위해 컨트랙트 ABI 가져오기
3. **Web3 프로바이더**: RPC를 통해 Mezo 네트워크에 연결

### 통합 예시

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

### 토큰 스왑

```typescript
async function swapTokens(
  routerContract: Contract,
  wallet: Wallet,
  amountIn: bigint,
  tokenIn: string,
  tokenOut: string,
  to: string
) {
  // Approve token spending
  const tokenContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);
  await tokenContract.approve(routerContract.address, amountIn);
  
  // Execute swap
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  const minAmountOut = 0; // Calculate proper slippage in production
  
  await routerContract.connect(wallet).swapExactTokensForTokens(
    amountIn,
    minAmountOut,
    [tokenIn, tokenOut],
    to,
    deadline
  );
}
```

### 유동성 추가

```typescript
async function addLiquidity(
  routerContract: Contract,
  wallet: Wallet,
  tokenA: string,
  tokenB: string,
  amountA: bigint,
  amountB: bigint
) {
  // Approve both tokens
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, wallet);
  
  await tokenAContract.approve(routerContract.address, amountA);
  await tokenBContract.approve(routerContract.address, amountB);
  
  // Add liquidity
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
  
  await routerContract.connect(wallet).addLiquidity(
    tokenA,
    tokenB,
    amountA,
    amountB,
    0, // minAmountA - calculate proper slippage
    0, // minAmountB - calculate proper slippage
    wallet.address,
    deadline
  );
}
```

## 배포

### 테스트넷 배포

1. `.env` 파일에서 테스트넷 매개변수를 설정하세요
2. 배포 스크립트를 사용해 컨트랙트를 배포하세요.
```bash
pnpm deploy:testnet
```
3. 테스트넷 탐색기에서 컨트랙트를 검증하세요
4. 프런트엔드 설정을 업데이트하세요

### 메인넷 배포

1. 테스트넷에서 철저한 테스트를 완료하세요
2. 보안 감사(필요한 경우)
3. 메인넷에 배포하세요
4. 컨트랙트를 검증하세요
5. 프로덕션 설정을 업데이트하세요

## 모니터링 및 유지 관리

### 컨트랙트 모니터링

- 중요한 함수에 대한 이벤트 모니터링을 설정하세요
- 가스 사용량과 최적화 기회를 모니터링하세요
- 컨트랙트 상호작용과 사용자 활동을 추적하세요

### 보안 고려 사항

- 정기적인 보안 감사
- 접근 제어 관리
- 긴급 일시 중지 메커니즘
- 업그레이드 절차

## 추가 리소스

- **[Mezo Earn 저장소](https://github.com/mezo-org/tigris.git)** - 메인 저장소
- **[Solidly 문서](https://docs.solidly.com/)** - Solidly 프로토콜 문서
- **[Mezo 네트워크 문서](/docs/kr/docs/developers/getting-started/configure-environment)** - 네트워크 설정
- **[컨트랙트 검증 가이드](/docs/kr/docs/developers/contracts-reference)** - 컨트랙트 검증

:::note
자세한 아키텍처, 토크노믹스, 프로토콜 메커니즘은 Mezo Earn 저장소의 README와 문서를 참고하세요.
:::

## 지원

개발 관련 지원이 필요하면 다음을 이용하세요.
- [Mezo Discord](https://discord.com/invite/mezo)에 참여하세요
- [GitHub Issues](https://github.com/mezo-org/tigris/issues)를 확인하세요
- [자주 묻는 질문](/docs/kr/docs/developers/getting-started/FAQs)을 검토하세요

