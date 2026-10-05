---
title: Mezo Pools
topic: developers
---
Mezo Pools를 사용하면 최적화된 풀 메커니즘으로 토큰을 스왑하고 유동성을 공급할 수 있습니다. Mezo는 두 가지 풀 아키텍처를 지원합니다. 바로 **기본 풀**(상수곱 및 스테이블 커브 AMM)과 사용자 지정 가격 범위를 지원하는 **집중 유동성(CL) 풀**입니다.

## 기본 풀

기본 풀은 상수곱(변동성) 또는 스테이블 커브(스테이블) 가격 책정을 사용하는 Aerodrome 방식의 AMM을 사용합니다.

- **풀 팩토리:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **스왑 수수료:** 변동성 풀 0.30%, 스테이블 풀 0.02%
- **포지션 유형:** 대체 가능한 LP 토큰(ERC-20)

### 지원되는 기본 풀

| 풀 | 유형 | 주소 |
|------|------|---------|
| MUSD/BTC | 변동성 | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | 스테이블 | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | 스테이블 | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### 기본 스왑 흐름

**라우터 컨트랙트:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. 사용자가 라우터에 토큰 사용을 승인합니다
2. 경로 배열과 함께 라우터의 `swapExactTokensForTokens(...)`를 호출합니다
3. 출력 토큰이 지갑으로 반환됩니다

## 집중 유동성(CL) 풀

CL 풀에서는 유동성 공급자가 사용자 지정 가격 범위 안에 예치하여 거래가 일어나는 구간에 자본을 집중할 수 있습니다. Mezo의 CL 구현은 [Velodrome의 Slipstream](https://velodrome.finance/docs/slipstream)을 기반으로 합니다.

- **CL 팩토리:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **포지션 유형:** 대체 불가능(NonfungiblePositionManager를 통한 ERC-721 NFT)
- **가격 모델:** `sqrtPriceX96`(Q64.96 고정소수점), Uniswap V3와 동일

### 지원되는 CL 풀

| 풀 | 틱 간격 | 기본 수수료 | 주소 |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0.30% | 탐색기 참조 |

### 틱 간격과 수수료

CL 풀은 가격 범위의 세분성을 결정하는 특정 틱 간격으로 생성됩니다. 틱 간격이 100 미만인 풀은 스테이블로, 100 이상인 풀은 변동성으로 분류됩니다.

| 틱 간격 | 기본 수수료 |
|---|---|
| 1 | 0.01% |
| 10 | 0.05% |
| 50 | 0.05% |
| 100 | 0.05% |
| 200 | 0.30% |
| 2,000 | 1.00% |

팩토리의 플러그형 `swapFeeModule`을 통해 사용자 지정 수수료를 설정할 수 있습니다. `unstakedFeeModule`은 스테이킹되지 않은 포지션에서 스테이킹된 포지션으로 재분배되는 스왑 수수료의 비율을 제어합니다(기본값: 10%).

### CL 스왑 흐름

**CL 스왑 라우터:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. 사용자가 CL 스왑 라우터에 토큰 사용을 승인합니다
2. 풀 키(token0, token1, tickSpacing)와 스왑 파라미터를 사용해 `exactInputSingle(...)` 또는 `exactInput(...)`을 호출합니다
3. 출력 토큰이 지갑으로 반환됩니다

### CL 포지션 관리

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

포지션은 ERC-721 NFT로 관리됩니다. 주요 작업은 다음과 같습니다.

- `mint(...)` — 가격 범위(tickLower, tickUpper)를 지정해 새 포지션을 만들고 토큰을 예치합니다
- `increaseLiquidity(...)` — 기존 포지션에 유동성을 추가합니다
- `decreaseLiquidity(...)` — 포지션에서 유동성을 제거합니다
- `collect(...)` — 누적된 스왑 수수료를 청구합니다

### 스테이킹과 게이지

CL 포지션은 MEZO 에미션을 받기 위해 게이지에 스테이킹할 수 있습니다. 스테이킹된 범위 내 유동성은 스왑 수수료와 에미션을 모두 얻습니다. 미스테이킹 수수료 메커니즘은 스테이킹되지 않은 포지션의 수수료 일부를 스테이킹된 포지션으로 재분배합니다.

- **CL 게이지 팩토리:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### 주요 기능

- **슬리피지 제어:** 프런트엔드에서 제공되거나 `amountOutMinimum` / `sqrtPriceLimitX96` 파라미터로 설정합니다
- **내장 TWAP 오라클:** 각 CL 풀은 시간 가중 평균 가격 오라클을 유지합니다
- **동적 수수료:** 플러그형 수수료 모듈로 풀별 사용자 지정 수수료 로직을 적용할 수 있습니다

## 컨트랙트 주소

### 메인넷 — 기본 풀 컨트랙트

| 이름 | 주소 |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC 풀 | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC 풀 | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT 풀 | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### 메인넷 — CL 컨트랙트

| 이름 | 주소 |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool(구현) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge(구현) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### 메인넷 — 거버넌스 컨트랙트

| 이름 | 주소 |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### 테스트넷 — 기본 풀 컨트랙트

| 이름 | 주소 |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC 풀 | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC 풀 | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT 풀 | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### 테스트넷 — CL 컨트랙트

| 이름 | 주소 |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool(구현) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge(구현) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### 테스트넷 — 거버넌스 컨트랙트

| 이름 | 주소 |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
