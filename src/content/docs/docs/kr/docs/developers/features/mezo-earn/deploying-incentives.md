---
title: 인센티브 배포
description: Mezo Earn에서 화이트리스트에 등록된 풀 자산에 대한 투표 게이지를 생성하는 방법입니다.
topic: developers
---

모든 Mezo 자산(BTC, MEZO 및 메인넷 컨트랙트 토큰)이 PoolsVoter 컨트랙트의 화이트리스트에 등록되었습니다. 이제 두 자산이 모두 화이트리스트에 있는 풀이라면 누구나 해당 풀의 투표 게이지를 생성할 수 있습니다.

게이지에 인센티브로 추가할 수 있는 화이트리스트 토큰 주소의 전체 목록은 [컨트랙트 레퍼런스](/docs/kr/docs/users/resources/contracts-reference#portal-컨트랙트-주소)를 참조하세요.

## 풀 게이지 생성

1. [Mezo Explorer의 PoolsVoter 컨트랙트](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03)로 이동해 지갑을 연결하세요.

2. **Contract** 탭을 클릭한 다음 **Write proxy**를 선택하고 `createPoolGauge`를 고르세요.

3. `_poolFactory` 파라미터에는 다음 주소 중 하나를 사용하세요.
   - **기본 풀:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **CL 풀:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. `_pool` 아래에 풀 주소를 입력하세요.

5. 트랜잭션을 실행하세요. 풀이 풀 개요에 표시되어 있다면 투표 UI에도 나타나기 시작할 것입니다.
