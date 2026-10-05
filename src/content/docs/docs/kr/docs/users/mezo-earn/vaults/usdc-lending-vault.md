---
title: USDC Lending Vault
description: Mezo의 BTC 담보 Morpho 대출 마켓에 mUSDC를 공급하고 차입자 이자 또는 MEZO 에미션 받기
topic: users
---

USDC Lending Vault를 사용하면 투명한 BTC 담보 신용 시장에 직접 참여할 수 있습니다. mUSDC를 예치하면 자본이 BTC를 담보로 제공한 차입자에게 공급됩니다. 차입자가 지불하는 이자가 예치자 수익의 원천입니다.

내부적으로 예치금은 큐레이션된 Morpho Vault V2(Morpho BTC-mUSDC Vault)로 들어가며, 이 볼트가 사용자를 대신해 Morpho Blue BTC / mUSDC 마켓에 공급합니다. Morpho와 직접 상호작용할 필요는 없으며, 이자가 쌓임에 따라 가치가 오르는 지분 토큰을 보유하게 됩니다.

볼트는 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)에서 확인하세요. BTC를 담보로 mUSDC를 대출받으려면 [mUSDC 대출받는 방법](/docs/kr/docs/users/borrow/how-to-borrow-musdc)을 참조하세요.

**작동 방식:**

- mUSDC를 예치하면 볼트에 대한 청구권을 나타내는 지분 토큰인 `morphoBTC-mUSDC`를 받습니다
- 수익은 지분 가격에 누적됩니다. 같은 수의 지분으로 시간이 지날수록 더 많은 mUSDC를 환매할 수 있게 됩니다
- 대출은 BTC로 초과 담보됩니다(청산 LTV 86%). 예치된 자산은 재담보로 사용되지 않습니다
- 최소 예치 금액이 없으며, 예치하거나 인출할 때 프로토콜 수수료가 없습니다
- APR은 차입 수요에 따라 변동됩니다. 현재 이율은 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)에서 확인하세요

---

## 지분 이해하기

`morphoBTC-mUSDC`는 볼트 지분 토큰입니다. 알아 두어야 할 사항은 다음과 같습니다.

- **수익은 잔액이 아니라 교환 비율에 반영됩니다.** 예치 후 지분 잔액은 그대로 유지되지만, 차입자가 이자를 지불함에 따라 각 지분으로 더 많은 mUSDC를 환매할 수 있게 됩니다. 그 차이는 인출할 때 확인할 수 있습니다.
- **지분은 mUSDC와 1:1이 아닙니다.** 볼트가 이미 이자를 얻은 상태라면 100 mUSDC를 예치해도 받는 지분은 100개보다 적으며, 각 지분의 가치는 1 mUSDC보다 큽니다.
- **에미션을 위해 스테이킹하면 이자가 다른 곳으로 돌아갑니다.** 스테이킹된 지분은 차입자 이자 대신 MEZO를 얻습니다. 원래 내게 돌아왔을 이자는 Lending Vault 게이지의 veBTC 투표자에게 돌아갑니다.

---

## 볼트 세부 정보

| 매개변수 | 값 |
|-----------|-------|
| 예치 토큰 | mUSDC |
| 지분 토큰 | `morphoBTC-mUSDC` |
| 기초 마켓 | Morpho Blue BTC / mUSDC |
| 청산 LTV | 86% |
| 큐레이터 | Mezo 거버넌스 |
| 인출 수수료 | 없음 |
| 현재 APR | 변동 — [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)에서 확인 |

---

## 수익을 얻는 두 가지 방법

Mezo의 다른 Earn 상품과 마찬가지로 각 지분이 어떻게 보상받을지 선택할 수 있습니다.

- **이자를 위해 보유** — `morphoBTC-mUSDC`를 지갑에 보관하세요. 차입자가 이자를 지불함에 따라 지분 가치가 오릅니다.
- **MEZO 에미션을 위해 스테이킹** — 지분을 Lending Vault 게이지에 스테이킹하세요. MEZO를 얻는 대신, 해당 지분이 얻었을 이자는 투표자에게 돌아갑니다.

하나의 지분으로 두 가지를 동시에 얻을 수는 없지만, 보유량을 나눌 수는 있습니다. 일부는 에미션을 위해 스테이킹하고 나머지는 이자를 위해 보유하세요. 앱에서 예치와 스테이킹은 별도의 단계입니다. 먼저 예치하여 지분을 받은 다음, 원하면 스테이킹하세요.

**스테이킹된 포지션에서 나가려면:** 언스테이킹한 다음 볼트 지분으로 환매하고, 이후 mUSDC로 인출하세요. 언스테이킹해도 청구 가능한 MEZO는 소멸되지 않습니다.

---

## 인출

인출하면 mUSDC(보유 중이었다면 누적 이자 포함)가 반환됩니다. mUSDC는 차입자에게 대출되어 있으므로, 볼트는 현재 대출되지 않고 남아 있는 금액만 지급할 수 있습니다.

- 앱은 현재 볼트 유동성을 기준으로 **Available to withdraw** 금액을 표시합니다
- 이용률이 높을 때는 대규모 인출이 일부만 처리되거나, 차입자가 상환하거나 새 공급이 들어올 때까지 일시적으로 막힐 수 있습니다
- 스테이킹된 지분은 인출하기 전에 언스테이킹해야 합니다

이는 대출 마켓의 정상적인 동작이며, 볼트의 오류가 아닙니다.

---

## 위험

### 스마트 컨트랙트 위험

자금은 Lending Vault 어댑터, Morpho Vault V2, Morpho Blue 마켓을 거칩니다. 이 중 어느 하나에서든 버그나 익스플로잇이 발생하면 자금을 잃을 수 있습니다.

### 유동성 부족 위험

차입 이용률이 높으면 원할 때 mUSDC 전액을 인출하지 못할 수 있습니다. 일시적으로 묶여도 괜찮은 자금만 공급하세요.

### 대출 마켓 위험

차입자는 LTV 86%에서 청산됩니다. BTC 가격이 급격하고 크게 하락하면 부실 부채가 발생할 수 있으며, 이는 지분 가격 하락을 통해 공급자 전체가 분담합니다. 보험 기금은 없습니다. 또한 포지션이 mUSDC로 표시되므로 디페그가 발생하면 보유 자산에 영향을 미칩니다.

### 큐레이터 위험

볼트가 어떤 마켓에 공급할지와 공급 한도는 Mezo 거버넌스가 큐레이션합니다. Morpho Vault V2의 큐레이터 변경에는 타임락이 적용됩니다.

---

## 컨트랙트

| 컨트랙트 | 주소 |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Lending Vault 어댑터 | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| 볼트 게이지 | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Morpho Blue 마켓에 관한 자세한 내용은 [Morpho 문서](https://docs.morpho.org/)를 참조하세요.
