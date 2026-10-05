---
title: 검증자 게이지
description: '보상 수령인 관리, 검증자 게이지 투표, MEZO 보상 청구 방법에 관한 검증자용 가이드입니다.'
topic: developers
---

검증자는 매주 MEZO 에미션을 받을 수 있지만, 이는 매 에포크마다 해당 검증자 게이지가 투표를 받은 경우에 한합니다. 게이지에 투표가 없으면 검증자는 에미션을 전혀 받지 못합니다. 이 가이드에서는 보상 수령인을 관리하고, 검증자 게이지에 투표하고, 보상을 청구하는 방법을 설명합니다.

## 개요

각 검증자에게는 [ValidatorsVoter 컨트랙트](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)에 연결된 게이지가 있습니다. 보상은 검증자의 게이지 주소를 지정하여 ValidatorsVoter 컨트랙트를 통해 청구합니다.

각 게이지에는 보상을 청구할 권한이 있는 수령인 주소가 하나 있습니다. 기본적으로 수령인은 [Proof of Authority(PoA) 컨트랙트](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)에 등록된 검증자 운영자 주소입니다.

:::note[보상 지급 일정]
배정된 에포크 보상은 즉시 청구할 수 있는 것이 아니라 에포크 동안 점진적으로 지급됩니다. 예를 들어 에포크 N이 시작될 때 게이지에 보상이 배정되면, 에포크 N 보상의 100%는 해당 에포크가 끝날 때 청구할 수 있습니다.
:::

## 보상 수령인 변경하기

검증자는 MEZO 보상을 받을 다른 주소를 지정할 수 있습니다. 이는 운영 기능과 자금 관리 기능을 분리할 때 유용합니다.

보상 수령인을 변경하려면 다음을 수행하세요.

1. **운영자 주소 지갑 연결하기**
   검증자 운영자 주소와 연결된 지갑을 사용하세요.

2. **게이지 주소 확인하기**
   운영자 주소를 매개변수로 하여 `ValidatorsVoter.validatorToGauge()`를 호출하세요.

3. **수령인 변경하기**
   새 수령인 주소를 매개변수로 하여 `Gauge.switchRewardsBeneficiary()`를 호출하세요.
   - 컨트랙트: 내 Gauge 컨트랙트(2단계에서 확인)
   - 메서드: `switchRewardsBeneficiary(address newBeneficiary)`

4. **새 수령인으로 청구하기**
   수령인을 변경한 후에는 이후의 모든 청구를 새 수령인 지갑으로 실행해야 합니다.

:::caution[모범 사례]
새 수령인으로 변경하기 전에 현재 수령인으로 청구 가능한 보상을 모두 청구하는 것이 좋습니다. 청구하지 않은 보상이 있는 상태에서 수령인을 변경하면 해당 보상은 이전 수령인 주소에 연결된 채로 남아 있으므로 따로 청구해야 합니다.
:::

## 검증자 게이지에 투표하기

MEZO 에미션을 받으려면 투표가 필수입니다. 한 에포크 동안 투표를 받지 못한 검증자 게이지는 해당 에포크의 보상을 전혀 받지 못합니다. 검증자는 자신의 게이지에 투표하여 MEZO 에미션을 배분할 수 있습니다. 검증자 게이지 투표는 다른 Mezo Earn 게이지 투표와 **독립적**입니다. 예를 들어 이미 투표력의 100%로 풀 게이지에 투표했더라도 검증자 게이지(또는 다른 검증자의 게이지)에 투표력의 100%로 다시 투표할 수 있습니다.

veBTC는 투표에 사용되는 핵심 자산입니다. veMEZO는 투표력을 부스트하는 데 사용할 수 있습니다. 한 번 행사한 투표는 명시적으로 초기화하지 않는 한 다음 에포크로 자동 이월됩니다.

:::note[포지션에 Poke 실행하기]
투표하기 전에 포지션이 최신 상태인지 확인하기 위해 Poke를 실행해야 할 수 있습니다. veBTC 투표력이 늘어난 경우(예: 추가 예치) 기존 투표에 Poke를 실행하면 새 투표력이 반영되도록 투표 가중치가 업데이트되므로 유용합니다. 자세한 내용은 [Poke 문서](/docs/kr/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke)를 참조하세요.
:::

### 투표 방법

1. **검증자 게이지 확인하기**
   검증자 주소를 매개변수로 하여 [ValidatorsVoter 컨트랙트(Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy)의 `validatorToGauge` 함수를 호출하세요.

2. **투표하기**
   [ValidatorsVoter 컨트랙트(Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy)의 `vote` 함수를 호출하세요. `tokenId` 매개변수는 veBTC NFT ID입니다. 자신의 검증자 게이지에만 투표한다면 가중치를 `100`(투표력의 100%)으로 설정할 수 있습니다.

### 게이지에 인센티브 제공하기

검증자는 [Matchbox](https://matchbox.markets/) 같은 플랫폼에서 자신의 veBTC 부스트 게이지에 인센티브를 걸어, veBTC 투표력을 부스트해 줄 veMEZO 투표를 유치할 수 있습니다.
이렇게 부스트된 veBTC 투표력으로 검증자 게이지에 더 많은 투표를 배분하여 MEZO 에미션을 늘릴 수 있습니다.

Mezo Earn에는 별도의 검증자 게이지 인센티브 메커니즘도 있지만, 해당 흐름은 현재 Matchbox에서 지원되지 않습니다.

## 보상 청구하기

MEZO 보상을 청구하려면 다음 단계를 따르세요.

1. **운영자 주소 지갑 연결하기**
   검증자 운영자 주소와 연결된 지갑을 사용하세요.

2. **게이지 주소 확인하기**
   운영자 주소를 매개변수로 하여 `ValidatorsVoter.validatorToGauge()`를 호출하세요.
   - 컨트랙트: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - 메서드: `validatorToGauge(address validator)`

3. **보상 청구하기**
   게이지 주소를 매개변수로 하여 `ValidatorsVoter.claimRewards()`를 호출하세요.
   - 컨트랙트: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - 메서드: `claimRewards(address gauge)`

## 컨트랙트 주소

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **PoA 컨트랙트**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## 추가 리소스

- [Mezo Earn 개요](/docs/kr/docs/users/mezo-earn/overview/)
- [Mezo 블로그](https://mezo.org/blog/tag/features/)
