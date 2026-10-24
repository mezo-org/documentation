---
title: 자주 묻는 질문
topic: developers
---

#### Mezo란 무엇인가요? 빌더를 위한 가치 제안 <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo는 비트코인을 수동적인 가치 저장 수단에서 생산적이고 역동적인 금융 자산으로 바꾸도록 설계된 무허가형, 은행 없는(bank-free) 비트코인 금융 플랫폼입니다. 이 플랫폼의 핵심 사명은 전 세계 1억 명이 넘는 비트코인 보유자가 자산을 팔지 않고도 그 가치를 활용하여 목적 있는 HODL을 할 수 있도록 하는 것입니다. 이를 위해 Mezo는 다양한 실제 애플리케이션에서 저렴하고 빠르며 안전한 트랜잭션을 지원하는 견고한 인프라를 구축합니다.

Mezo의 궁극적인 비전은 비트코인 사용을 supernormal하게 만드는 것입니다. 즉, 일상적인 금융 활동에 비트코인을 사용하는 일이 매우 매끄럽고 자연스럽게 통합되어, 직불 카드를 쓰는 것처럼 당연하고 특별할 것 없는 생활의 일부가 되는 상태입니다.

개발자에게 Mezo는 뚜렷하고 매력적인 가치를 제공합니다. Mezo를 만든 스튜디오인 Thesis는 최대 규모의 탈중앙화 비트코인 브리지인 tBTC, 네이티브 비트코인 수익 프로토콜인 Acre, 소비자 지출 애플리케이션인 Fold의 개발사이기도 합니다. 서로 연결된 이 제품군은 개발자에게 첫날부터 강력하고 사전 검증되었으며 상호 운용성이 높은 "머니 레고" 세트를 제공합니다. 브리지, 스테이블코인, 수익원 같은 필수 프리미티브를 서로 무관한 여러 제3자가 제공하는 경우가 많은 다른 플랫폼에서 빌드하는 것과 비교하면, 이렇게 통합된 스택은 개발 마찰과 시스템 리스크를 크게 줄여 줍니다. Mezo에서 빌드하면 개발자는 세계에서 가장 안전하고 탈중앙화된 자산을 중심으로 새로운 경제 활동 계층을 구동하도록 설계된, 완전하고 자기 강화적인 금융 생태계를 활용할 수 있습니다.

#### MUSD란 무엇인가요?

Mezo 생태계의 중심에는 네이티브 스테이블코인인 MUSD가 있습니다. MUSD는 100% 비트코인 준비금으로 뒷받침되고 미국 달러와 1:1 페그를 안정적으로 유지하도록 설계되었습니다. MUSD의 주요 기능은 Mezo 경제를 움직이는 유동적인 교환 수단 역할을 하여, 사용자가 보유한 비트코인의 가치를 활용할 수 있게 하는 것입니다. 메커니즘은 간단합니다. 사용자는 비트코인(tBTC 형태)을 안전한 온체인 볼트에 예치하고 이를 담보로 MUSD를 발행할 수 있습니다. 새로 발행된 MUSD는 상품 및 서비스 결제, 탈중앙화 거래소에서의 거래, 유동성을 공급해 수익 얻기, 기타 DeFi 프로토콜 참여 등 생태계 전반의 다양한 활동에 사용할 수 있습니다.

개발자에게 Mezo와 MUSD는 다음과 같은 전략적 이점을 제공하는 "모든 것이 갖춰진(batteries-included)" 생태계를 만들어 줍니다.

* **익숙한 도구로 마찰을 획기적으로 줄임(EVM 및 RainbowKit):** Mezo는 EVM과 완전히 호환되므로 Solidity 개발자는 학습 곡선 없이 기존 컨트랙트를 배포하고 Hardhat, Foundry 같은 익숙한 도구를 그대로 사용할 수 있습니다.
* **Mezo Passport를 통한 매끄러운 사용자 온보딩:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport)는 사용자가 네이티브 비트코인 지갑(Xverse, Unisat 등)으로 EVM 트랜잭션에 서명할 수 있게 하여 지갑 단절이라는 핵심 문제를 해결합니다. 이러한 계정 추상화 덕분에 복잡한 맞춤형 지갑 로직을 작성하지 않고도 하나의 깔끔한 UX로 비트코인 커뮤니티 전체에 다가갈 수 있습니다.
* [MUSD를 활용한 강력한 금융 프리미티브:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow)는 강력한 빌딩 블록입니다. 낮은 고정 이자율과 높은 LTV(최대 90%)는 예측 가능한 금융 상품(예: 고정 기간 대출)을 가능하게 하는 기반 기술입니다.

#### 순환형 비트코인 경제란 무엇인가요?

순환형 비트코인 경제는 비트코인을 법정 화폐로 바꿀 필요 없이 벌고 쓰는 데 모두 사용하는 자급자족 시스템입니다. 개인과 기업이 급여, 상품, 서비스를 BTC로 직접 거래하는 폐쇄 루프를 만듭니다.

Mezo와 MUSD의 결합은 다음과 같은 자기 강화적 경제 루프를 만듭니다.

1. **잠금 해제:** 비트코인 보유자는 BTC를 입금하고 MUSD를 발행하여, 핵심 자산을 팔지 않고도 자본을 활성화합니다.
2. **거래:** 이렇게 받은 MUSD를 트레이딩과 대출부터 일상적인 결제까지 모든 곳에 사용합니다.
3. **강화:** 이러한 온체인 활동은 트랜잭션 수수료(BTC로 지불)를 발생시켜 네트워크를 보호하고, 가치 저장 수단일 뿐 아니라 거래 자산으로서 비트코인의 유용성을 강화합니다.

Mezo가 레일을 깔고 MUSD가 연료를 공급하여, 개발자는 거대하지만 충분한 서비스를 받지 못하는 비트코인 사용자 시장에 실질적인 가치를 제공하는 애플리케이션을 만들 수 있는 독보적인 플랫폼을 얻게 됩니다.

#### Mezo 체인의 아키텍처는 어떻게 되어 있나요?

Mezo 체인은 개발자 접근성과 네트워크 성능을 모두 극대화하도록 설계된 하이브리드 아키텍처로 구축되었습니다. Cosmos SDK로 구축되고 CometBFT 합의 엔진에서 작동하는, EVM과 완전히 호환되는 블록체인입니다. 코드베이스는 Evmos를 대폭 수정한 포크입니다.

이 기술 스택은 다음과 같은 강력한 기능 조합을 제공합니다.

* **EVM 호환성**: 전 세계의 방대한 이더리움 및 Solidity 개발자 커뮤니티가 기존 스마트 컨트랙트와 탈중앙화 애플리케이션(dApp)을 코드 변경 없이 또는 최소한의 변경만으로 Mezo에 배포할 수 있습니다. MetaMask, Hardhat, Remix, Foundry 등 익숙하고 성숙한 툴체인을 계속 사용할 수 있어 비트코인 생태계에서 빌드하기 위한 진입 장벽이 크게 낮아집니다.
* **Cosmos SDK**: Cosmos SDK를 기반으로 구축되어 Mezo는 체인 주권을 확보하고 자체 로직과 거버넌스를 맞춤화할 수 있습니다.

#### Mezo에서 가스 수수료로 사용하는 토큰은 무엇인가요? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC입니다(내부적으로는 [tBTC를 통해](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/) 처리됩니다).

#### Mezo용 테스트넷 BTC는 어떻게 받나요? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Mezo 파우셋에서 테스트넷 자금을 받으세요: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Mezo Passport와 어떻게 통합하나요? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport)는 Mezo 네트워크에서 매끄럽고 일관된 사용자 경험을 제공하기 위해 만들어진 공식 지갑 연결 라이브러리입니다. 비트코인 네이티브 지갑(Xverse, Unisat 등)과 표준 EVM 지갑(MetaMask 등)을 dApp에 연결하는 복잡한 과정을 처리합니다. 설치 방법, 설정, 사용 가능한 훅, 코드 예시를 포함한 최신 상세 통합 가이드는 [**공식 Mezo Passport 문서**](https://www.npmjs.com/package/@mezo-org/passport)**를 참조하세요.**

#### 프로젝트 자금과 지원은 어떻게 받을 수 있나요? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**Supernormal Foundation**

​[Supernormal Foundation](https://www.supernormal.foundation/)은 Mezo 네트워크와 MUSD 경제를 구축하고 관리하며 성장시키는 일을 전담하는 조직입니다. 커뮤니티 중심의 정신으로 운영되며, 빌더를 위한 공식 지원의 주요 창구입니다.

**Mezo Founder Program**

​[Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program)은 Mezo에서 빌드하고 MUSD를 통합하려는 초기 단계 개발자와 프로젝트(MVP가 테스트넷에서 운영 중이어야 함)를 위한 대표 이니셔티브입니다. 이 프로그램은 BitcoinFi 분야의 혁신을 촉진하도록 설계되었습니다.

* **혜택:** 자격을 갖춘 팀은 다음을 포함한 종합적인 리소스를 우선적으로 이용할 수 있습니다.
  * **그랜트:** 개발 가속화를 위한 재정 지원.
  * **공동 마케팅:** 프로젝트 인지도를 높이기 위한 협업 마케팅.
  * **네트워킹:** 생태계의 다른 빌더 및 리더와의 연결.
  * **실무 통합 지원:** Mezo에 원활하게 배포할 수 있도록 돕는 직접적인 기술 지원.

​[**지금 신청하기**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

더 성숙했거나 야심 찬 성장 계획을 가진 프로젝트를 위해 Supernormal Foundation은 선도적인 벤처 캐피털 **Boost VC, Draper Associates, Thesis**와 협력하여 전용 액셀러레이터 프로그램을 제공합니다. 이 집중 프로그램은 초기 투자와 맞춤형 지원을 제공하며, 여기에는 제품 전략과 시장 진출(go-to-market) 실행에 대한 심층 멘토링이 포함되어 팀이 작동하는 제품에서 확장 가능한 비즈니스로 나아가는 과정을 돕습니다.

#### 커뮤니티 지원을 받고 기술 질문을 할 수 있는 곳은 어디인가요? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

Mezo 생태계의 모든 커뮤니티 및 개발자 소통의 중심지는 [공식 Discord 서버](https://discord.com/invite/mezo)입니다.​

#### 파트너는 누구이며 어떻게 통합하나요? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

최신 목록은 [통합 및 파트너](https://mezo.org/docs/developers/getting-started/integrations-and-partners)에서 확인하세요.
