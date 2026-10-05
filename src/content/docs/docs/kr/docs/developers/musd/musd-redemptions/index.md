---
title: MUSD 환매
topic: developers
---

# Mezo에서 MUSD를 환매하는 방법

## 간단한 개요
환매를 하면 1 MUSD를 소각하고 `$1` 상당의 BTC를 받을 수 있습니다(0.75%의 환매 수수료와 가스 수수료는 차감). 시스템은 담보 비율이 110%를 초과하는 Trove 중 담보 비율이 가장 낮은 Trove부터 환매합니다. MUSD 수량이 단일 Trove를 초과하면 담보 비율이 낮은 순서대로 계속 환매합니다.

담보 비율이 110% 미만인 Trove는 청산 대상이 되며, 환매 대상이 될 수 없습니다.

---

## 사전 요구 사항

시작하기 전에 다음을 확인하세요.

1. **시스템이 환매를 받고 있는지 확인**: TroveManager → "Read as Proxy"로 이동해 현재 BTC 가격으로 `getTCR()`을 호출하세요. 결과가 `1100000000000000000`(110%) 이상이어야 합니다
2. **MUSD 보유 확인**: MUSD 토큰 컨트랙트에서 잔액을 확인하세요
3. **현재 BTC 가격 조회**: PriceFeed → "Read as Proxy"로 이동해 `fetchPrice()`를 호출하세요
4. **올바른 컨트랙트 주소 확인**: 메인넷과 테스트넷의 컨트랙트 주소는 페이지 하단을 참조하세요.

---

## 단계별 안내

### 1. TroveManager 컨트랙트로 이동하기
블록 탐색기에서 TroveManager 컨트랙트를 열고 **"Write as Proxy"** 탭을 클릭하세요.

### 2. 함수 11 찾기: `redeemCollateral`

입력 필드 6개가 표시됩니다. 입력 방법은 다음과 같습니다.

---

## 옵션 A: 빠르고 간단한 방법(가스 높음)

힌트를 계산하지 않고 빠르게 환매하려면 이 방법을 사용하세요.

- `_amount`: [wei 단위 금액 - 아래 변환 방법 참조]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [내 지갑 주소]   
- `_lowerPartialRedemptionHint`: [내 지갑 주소]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**MUSD를 Wei로 변환하기:**
- 100 MUSD = `100000000000000000000`
- 5,005 MUSD = `5005000000000000000000`

**공식**: 금액 × 1000000000000000000

---

## 옵션 B: 힌트 사용(가스 낮음)

가스 비용을 절약하려면 이 방법을 사용하세요.

### 1단계: 환매 힌트 조회

HintHelpers → "Read as Proxy" → `getRedemptionHints()`로 이동하세요

입력 값:
- `_amount`: wei 단위 금액(위와 동일)
- `_price`: PriceFeed에서 조회한 현재 BTC 가격
- `_maxIterations`: 50

반환된 값을 복사하세요.
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### 2단계: 위치 힌트 조회

SortedTroves → "Read as Proxy" → `findInsertPosition()`으로 이동하세요

입력 값:
- `_NICR`: 1단계에서 얻은 `partialRedemptionHintNICR` 사용
- `_prevId`: 내 지갑 주소
- `_nextId`: 내 지갑 주소

반환된 값을 복사하세요.
- `upperHint`
- `lowerHint`

### 3단계: redeemCollateral 호출

TroveManager → "Write as Proxy" → `redeemCollateral`로 돌아가세요

- `_amount`: [wei 단위 금액]
- `_firstRedemptionHint`: [1단계에서 얻은 값]
- `_upperPartialRedemptionHint`: [2단계에서 얻은 upperHint]
- `_lowerPartialRedemptionHint`: [2단계에서 얻은 lowerHint]
- `_partialRedemptionHintNICR`: [1단계에서 얻은 값]
- `_maxIterations`: 50

---

## 받게 되는 금액

**예시: 100 MUSD 환매**
- 소각: 100 MUSD
- 수령: `$99.25` 상당의 BTC(0.75% 수수료는 프로토콜로 귀속)

**공식**: (MUSD 금액 ÷ BTC 가격) × 0.9925 = 받는 BTC

---

## 자주 발생하는 문제

**"Cannot redeem when TCR < MCR"**
→ 시스템 TCR이 110% 미만입니다. 회복될 때까지 기다리세요.

**"Unable to redeem any amount"**
→ 다음과 같은 여러 이유로 발생할 수 있습니다.
- 담보 비율이 110%를 초과하는 Trove가 없음
- 힌트가 오래됨(특히 NICR 힌트)
- 환매 후 대상 Trove의 부채가 최소 부채 요건인 1,800 MUSD 미만이 됨
- 환매 규모에 비해 최대 반복 횟수가 너무 낮게 설정됨

**트랜잭션의 가스가 부족함**
→ `_maxIterations`를 10으로 낮추거나 더 작은 환매로 나누세요.

**트랜잭션이 예기치 않게 되돌려짐(revert)**
→ 새 힌트를 조회하고 다시 시도하세요. 다른 사람이 먼저 환매했을 수 있습니다.

**예상보다 적게 받음**
→ 트랜잭션의 `Redemption` 이벤트를 확인하세요. 마지막 Trove가 최소 1,800 MUSD 미만이 될 경우 일부 MUSD가 반환되었을 수 있습니다.

---

## 팁

- **환매 직전에 힌트를 생성하세요** - 다른 사람이 먼저 환매하면 힌트가 오래된 값이 됩니다
- **소액(< `$10,000`)에는 옵션 A를 사용하세요** - 늘어나는 가스 비용은 무시할 만한 수준입니다
- **고액에는 옵션 B를 사용하세요** - 대규모 환매에서 가스를 크게 절약할 수 있습니다
- **환매 규모가 클수록 maxIterations를 높게 설정하세요**:
  - 소규모(Trove 10개 미만): 10
  - 중규모(Trove 10-30개): 50
  - 대규모(Trove 30개 이상): 100

---

## 컨트랙트 주소

| 컨트랙트 | 메인넷 | 테스트넷 |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| MUSD 토큰 | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

모든 주소는 프록시 컨트랙트입니다. 항상 "Read as Proxy" 또는 "Write as Proxy" 탭을 사용하세요.

---

## 도움이 필요하신가요?

- 블록 탐색기에서 트랜잭션을 확인하여 이벤트와 오류 메시지를 살펴보세요
- Discord에 참여해 티켓을 여세요: https://discord.com/invite/mezo
