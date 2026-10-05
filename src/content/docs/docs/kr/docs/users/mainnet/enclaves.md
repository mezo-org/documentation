---
title: Enclaves
description: Enclave를 통해 Mezo에서 기관 BTC 입금이 이루어지는 방식
topic: users
---

Mezo Enclaves는 규제상 수탁 요건이 있는 기관이 표준 브리지를 사용하지 않고도 Mezo에서 BTC를 운용할 수 있도록 하는 기관용 입금 경로입니다.

## Enclave의 작동 방식

수탁 관련 규제를 받는 기관은 Mezo의 표준 브리지를 통해 BTC를 입금하지 못할 수 있습니다. Enclave는 기초 비트코인을 규제 요건을 충족하는 수탁 방식으로 보관한 상태에서 BTC가 Mezo에 표시되도록 하여 이 문제를 해결합니다.

핵심 사항은 다음과 같습니다.

- 각 Enclave는 Mezo 거버넌스 멀티시그가 개별적으로 허용 목록에 추가합니다
- Enclave 입금은 브리지 금액과 사용 제한을 정의하는 관련 법적 계약으로 뒷받침됩니다
- 모든 Enclave 입금은 여전히 비트코인 체인의 실제 비트코인 UTXO로 뒷받침됩니다

## Enclave BTC 준비금 검증

모든 Enclave 입금은 비트코인 블록체인의 UTXO로 뒷받침됩니다. 이 UTXO는 3자간 브리지 입금 트랜잭션에 기록되고 온체인 상태로 유지되므로, 기초 BTC 준비금은 투명하게 공개되며 검증할 수 있습니다.

개발자는 `getTripartyUtxos` 함수로 Enclave UTXO 데이터를 쿼리해 모든 Enclave 포지션을 뒷받침하는 비트코인을 검증할 수 있습니다. 기술적인 세부 정보는 [개발자용 브리지 문서](/docs/kr/docs/developers/bridge/mezo-bridge)를 참조하세요.
