---
title: 용어집
description: Mezo 생태계 전반에서 사용되는 용어를 A-Z 순으로 정리한 종합 참고 자료입니다.
topic: users
---

Mezo 생태계 전반에서 사용되는 용어를 정리한 종합 참고 자료입니다. Mezo Earn 관련 용어는 [Mezo Earn 용어집](/docs/kr/docs/users/mezo-earn/overview/glossary)을 참조하세요.

---

## AMM

자동화된 마켓 메이커(Automated Market Maker)입니다. 오더북 대신 유동성 풀과 수학 공식을 사용해 자산 가격을 결정하고 거래를 체결하는 탈중앙화 거래소의 한 유형입니다. Mezo Pools는 Aerodrome 방식의 AMM을 사용하며, 변동성 페어에는 상수곱 곡선을, 상관관계가 높은 페어에는 스테이블 곡선을 적용합니다. [Mezo Pools 개요](/docs/kr/docs/users/mezo-earn/pools)를 참조하세요.

## 블록 탐색기

트랜잭션, 주소, 온체인 데이터를 조회하는 웹 도구입니다. Mezo의 메인넷 탐색기는 [explorer.mezo.org](https://explorer.mezo.org/)에, 테스트넷 탐색기는 [explorer.test.mezo.org](https://explorer.test.mezo.org/)에 있습니다.

## 부스트

veMEZO 투표가 veBTC 포지션으로 향할 때 해당 포지션에 적용되는 배수입니다. 부스트가 없으면 veBTC는 1x로 작동하고, 최대 부스트에서는 5x로 작동합니다. 부스트는 시스템 전체 veBTC와 veMEZO에서 사용자가 차지하는 상대적 비중에 따라 달라집니다. [부스트 메커니즘](/docs/kr/docs/users/mezo-earn/lock/vemezo/boost-mechanism)을 참조하세요.

## 부스트된 가중치

veBTC와 veMEZO를 페어링했을 때의 합산 투표 가중치입니다. veBTC 가중치에 부스트 배수(1x~5x)를 곱해 계산합니다. 부스트된 가중치는 수수료 배분 몫과 에미션에 대한 영향력을 결정합니다.

## BTC

비트코인입니다. BTC는 Mezo의 네이티브 가스 토큰(소수점 18자리)이며 [MUSD](#musd) 발행을 위한 주요 담보입니다. Mezo의 모든 트랜잭션 수수료는 BTC로 지불합니다.

## BTC 지갑

BTC를 Mezo에 직접 입금할 때 사용하는 비트코인 네이티브 지갑입니다. 지원되는 지갑은 UniSat, OKX, Xverse입니다. 지원되는 주소 형식은 Legacy(P2PKH), Native SegWit(P2WPKH), Nested SegWit(P2SH-P2WPKH)입니다. [자산 입금](/docs/kr/docs/users/getting-started/deposit-assets)을 참조하세요.

## 체인 ID

블록체인 네트워크를 식별하는 숫자 식별자입니다. Mezo 메인넷은 체인 ID `31612`, Mezo 테스트넷은 체인 ID `31611`을 사용합니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## Chain Splitter

에미션 계층 구조의 첫 번째 Splitter입니다. MEZO 에미션 중 검증자(20%)와 나머지 생태계(80%)에 각각 돌아가는 비율을 결정합니다. 이 비율은 현재 고정되어 있으며 거버넌스를 통해 잠겨 있습니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## 클리프

토큰 잠금 해제가 시작되기 전의 대기 기간입니다. Mezo의 베스팅 일정에서 팀과 투자자 배분분에는 TGE로부터 1년의 클리프가 적용되므로, 처음 12개월 동안에는 토큰이 잠금 해제되지 않습니다. [토큰 배분](/docs/kr/docs/users/mezo/token-distribution)을 참조하세요.

## 담보

대출을 보증하기 위해 맡기는 자산입니다. Mezo에서는 BTC를 담보로 예치하고 [MUSD](#musd)를 대출받습니다. 부채 대비 담보 가치가 지나치게 낮아지면 포지션이 [청산](#청산)될 수 있습니다. [MUSD 대출 및 발행](/docs/kr/docs/users/borrow/mint-musd)을 참조하세요.

## 담보 잉여분

[Trove](#trove)가 전액 환매된 후 남은 초과 담보입니다. 이 잉여분은 차입자가 청구할 수 있도록 보관 컨트랙트로 전송됩니다. [MUSD 청산 및 환매](/docs/kr/docs/users/borrow/liquidation-mechanics)를 참조하세요.

## 담보 비율(ICR)

개별 담보 비율(Individual Collateralization Ratio)입니다. Trove의 담보 달러 가치를 총부채로 나눈 비율입니다. 예를 들어 BTC 담보의 가치가 \$13,000이고 부채가 \$10,000이면 ICR은 130%입니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## CometBFT

Mezo의 기반이 되는 합의 엔진으로, 이전 이름은 Tendermint입니다. CometBFT는 비잔틴 장애 허용(BFT) 합의를 제공하여 Mezo 네트워크에서 빠른 블록 완결성을 가능하게 합니다.

## Cosmos SDK

Mezo 블록체인을 구축하는 데 사용된 모듈형 프레임워크입니다. Cosmos SDK가 애플리케이션 레이어를 제공하고 [CometBFT](#cometbft)가 합의를 담당합니다. 이 아키텍처 덕분에 Mezo는 Cosmos 네이티브 기능과 [EVM](#evm) 호환 기능을 모두 지원할 수 있습니다.

## 임계 담보 비율(CCR)

150%로 설정된 시스템 전체의 담보 기준선입니다. 총 담보 비율(TCR)이 CCR 아래로 떨어지면 시스템은 [Recovery Mode](#recovery-mode)에 진입합니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## dApp

탈중앙화 애플리케이션(Decentralized Application)입니다. 중앙화된 서버가 아닌 블록체인 위에서 실행되는 소프트웨어 애플리케이션입니다. 개발자는 표준 EVM 도구로 Mezo에서 dApp을 구축할 수 있습니다. [dApp 요구 사항](/docs/kr/docs/developers/getting-started/dapp-requirements)을 참조하세요.

## 감소

잠금이 만료에 가까워질수록 투표 가중치가 점차 줄어드는 현상입니다. veBTC와 veMEZO의 투표력은 시간이 지남에 따라 선형적으로 감소합니다. 잠금을 연장하면 감소를 초기화할 수 있습니다. [veBTC 개요](/docs/kr/docs/users/mezo-earn/lock/vebtc) 및 [veMEZO 개요](/docs/kr/docs/users/mezo-earn/lock/vemezo)를 참조하세요.

## 위임자

자신의 스테이크나 투표력을 [검증자](#검증자)에게 위임하는 참여자입니다. 검증자는 위임자와 보상을 나눌 수 있지만, 반드시 그래야 하는 것은 아닙니다.

## Ecosystem Splitter

에미션 계층 구조의 두 번째 Splitter입니다. 검증자 몫을 제외한 에미션을 [스테이킹 게이지](#스테이킹-게이지)(90%)와 [비스테이킹 게이지](#비스테이킹-게이지)(10%)로 나누며, 비스테이킹 게이지 몫은 [MEZO Gauges](#mezo-gauge)의 재원이 됩니다. 이 비율은 veBTC 투표로 정해집니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## 에미션

에포크마다 스테이킹 게이지, 검증자, veMEZO 보유자(리베이스 형태)에게 분배되는 신규 MEZO 토큰입니다. 에미션은 비트코인에서 영감을 받은 반감기 일정을 따르며, 연환산 25%에서 시작해 8년 차 이후 2%로 줄어듭니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## 에포크

Mezo Earn에서 투표와 보상 분배를 관장하는 7일 주기입니다. 에포크는 매주 목요일 00:00 UTC에 시작합니다. 투표는 다음 에포크로 이월되지 않습니다. [veBTC 개요](/docs/kr/docs/users/mezo-earn/lock/vebtc)를 참조하세요.

## ERC-20

EVM 호환 블록체인에서 대체 가능 토큰에 사용하는 표준 인터페이스입니다. 이더리움에서 Mezo로 브리지된 토큰은 mERC-20 토큰(예: mUSDC, mUSDT)으로 표시됩니다. [브리지](/docs/kr/docs/users/mainnet/bridges)를 참조하세요.

## EVM

이더리움 가상 머신(Ethereum Virtual Machine)입니다. 이더리움 호환 블록체인에서 스마트 컨트랙트를 실행하는 런타임 환경입니다. Mezo는 EVM과 호환되므로 개발자는 Hardhat, Foundry 같은 익숙한 도구로 Solidity 컨트랙트를 배포할 수 있습니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## EVM 지갑

Mezo의 EVM 레이어와 상호작용하는 데 사용하는 이더리움 호환 지갑(예: MetaMask, Rabby)입니다. EVM 지갑은 Mezo에서 dApp 상호작용, 스왑, 포지션 관리에 사용됩니다. [지갑 연결하기](/docs/kr/docs/users/getting-started/connect)를 참조하세요.

## 파우셋

개발 목적으로 소량의 테스트넷 토큰을 나눠 주는 서비스입니다. Mezo 테스트넷 파우셋은 Mezo 테스트넷에서 dApp을 배포하고 테스트할 수 있도록 테스트용 BTC를 제공합니다.

## 가스 보상

[청산](#청산) 함수를 호출한 사람에게 청산된 담보의 0.5%와 함께 지급되는 200 MUSD의 환급금입니다. 네트워크 활동이 많을 때에도 청산 호출자가 수익을 낼 수 있도록 보장합니다. 200 MUSD는 대출을 개설할 때 차감되며, 대출을 정상적으로 종료하면 돌려받습니다. [MUSD 아키텍처](/docs/kr/docs/users/borrow/architecture-and-terminology)를 참조하세요.

## 게이지

투표에 따라 보상을 받고 분배하는 스마트 컨트랙트입니다. 게이지가 받는 투표 가중치가 클수록 해당 에포크의 MEZO 에미션에서 차지하는 몫도 커집니다. 게이지 유형에는 [스테이킹 게이지](#스테이킹-게이지), [veBTC 부스트 게이지](#vebtc-부스트-게이지), 그리고 [MEZO Gauges](#mezo-gauge) 같은 [비스테이킹 게이지](#비스테이킹-게이지)가 있습니다. [Mezo Earn 용어집](/docs/kr/docs/users/mezo-earn/overview/glossary)을 참조하세요.

## 글로벌 이자율

거버넌스가 설정하며 새로 개설되는 모든 MUSD 대출에 적용되는 단일 이자율입니다. 대출이 개설되면 글로벌 이자율이 바뀌더라도 개설 당시의 이자율이 유지됩니다. 사용자는 [리파이낸싱](#리파이낸싱)을 통해 현재 글로벌 이자율을 적용받을 수 있습니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## 거버넌스

veBTC 보유자가 프로토콜 파라미터와 에미션을 결정하는 시스템입니다. veMEZO는 투표력을 부스트하지만 독자적인 거버넌스 권한은 없습니다. [거버넌스](/docs/kr/docs/users/mezo/governance)를 참조하세요.

## 반감기 일정

MEZO 에미션을 관장하는, 비트코인에서 영감을 받은 모델입니다. 에미션 비율은 약 2년마다 절반으로 줄어듭니다. 0~2년 차에는 25%, 2~4년 차에는 12.5%, 4~8년 차에는 6.25%이며, 이후 2%로 영구히 안정화됩니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## 비영구적 손실

풀에 예치한 자산의 가격 비율이 변할 때, 자산을 단순히 보유했을 경우와 비교해 유동성 공급자가 입을 수 있는 잠재적 손실입니다. AMM 기반 풀에 내재된 특성이며 [변동성 풀](#변동성-풀)에서 더 두드러집니다.

## 인센티브

투표를 유치하기 위해 게이지에 게시하는 보상입니다. 프로토콜이나 사용자는 특정 게이지로 투표력을 끌어오기 위해 인센티브(모든 ERC-20 토큰 가능)를 예치합니다. 인센티브는 veBTC 보유자와 veMEZO 보유자 사이에 [매칭 마켓](#매칭-마켓)을 형성합니다. [투표 개요](/docs/kr/docs/users/mezo-earn/vote)를 참조하세요.

## 청산

담보가 부족한 [Trove](#trove)를 강제로 종료하는 것입니다. Trove의 [ICR](#담보-비율icr)이 110% 아래로 떨어지면 청산될 수 있습니다. 청산 기준선은 [Recovery Mode](#recovery-mode) 중에도 110%로 유지됩니다. [Stability Pool](#stability-pool)이 부채를 흡수하고, 청산된 담보는 Stability Pool 예치자에게 분배됩니다. [MUSD 청산 및 환매](/docs/kr/docs/users/borrow/liquidation-mechanics)를 참조하세요.

## 유동성 풀

두 토큰의 준비금을 보유하여 탈중앙화 거래를 가능하게 하는 스마트 컨트랙트입니다. 사용자는 풀에 자산을 예치해 유동성 공급자가 되고 거래 수수료를 얻습니다. [Mezo Pools 개요](/docs/kr/docs/users/mezo-earn/pools)를 참조하세요.

## 잠금

[veBTC](#vebtc)나 [veMEZO](#vemezo)를 받기 위해 BTC 또는 MEZO를 정해진 기간 동안 맡기는 행위입니다. 잠금 기간이 길수록 초기 투표 가중치가 높아집니다. veBTC 잠금 기간은 1일에서 28일, veMEZO 잠금 기간은 1주에서 4년입니다. [veBTC 개요](/docs/kr/docs/users/mezo-earn/lock/vebtc) 및 [veMEZO 개요](/docs/kr/docs/users/mezo-earn/lock/vemezo)를 참조하세요.

## LP 토큰

유동성 공급자(Liquidity Provider) 토큰입니다. [유동성 풀](#유동성-풀)에 자산을 예치하면 받는 ERC-20 토큰입니다. LP 토큰은 풀 준비금에 대한 지분 비율을 나타내며, 거래 수수료의 일부를 받을 권리를 부여합니다. [Mezo Pools 개요](/docs/kr/docs/users/mezo-earn/pools)를 참조하세요.

## 메인넷

실제 자산과 트랜잭션이 처리되는 프로덕션 블록체인 네트워크입니다. Mezo 메인넷의 체인 ID는 `31612`이며 가스로 BTC를 사용합니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## 매칭 마켓

veBTC 보유자는 자신의 부스트 게이지에 [인센티브](#인센티브)를 게시해 veMEZO 투표를 유치하고, veMEZO 보유자는 매력적인 인센티브가 있는 게이지에 투표해 수익을 얻는 경제적 메커니즘입니다. [매칭 마켓](/docs/kr/docs/users/mezo-earn/lock/vemezo/matching-market)을 참조하세요.

## MEZO

투표력을 부스트하고 프로토콜 수수료와 인센티브가 향할 곳에 영향을 미치는 데 사용되는 Mezo의 네이티브 토큰입니다. MEZO를 [veMEZO](#vemezo)로 잠그면 veBTC 투표 가중치를 최대 5x까지 높이고 리베이스 보상을 받을 수 있습니다. 제네시스 총공급량은 1,000,000,000 MEZO입니다. [MEZO 개요](/docs/kr/docs/users/mezo)를 참조하세요.

## Mezo App

Mezo 네트워크와 상호작용하기 위한 기본 웹 인터페이스로, [mezo.org](https://mezo.org)에서 이용할 수 있습니다. 사용자는 Mezo App에서 자산을 입금하고, 브리지하고, MUSD를 대출받고, 유동성을 공급하고, 토큰을 잠그고, 게이지에 투표할 수 있습니다.

## Mezo Borrow

사용자가 BTC를 담보로 예치하고 이를 바탕으로 [MUSD](#musd)를 대출받을 수 있는 Mezo App의 기능입니다. 각 대출 포지션을 [Trove](#trove)라고 합니다. [MUSD 대출 및 발행](/docs/kr/docs/users/borrow/mint-musd)을 참조하세요.

## Mezo Bridge

Mezo와 이더리움 또는 비트코인 사이에서 자산을 입금하고 출금하기 위한 네이티브 브리지입니다. BTC, tBTC, mERC-20 토큰을 지원합니다. [브리지](/docs/kr/docs/users/mainnet/bridges)를 참조하세요.

## Mezo Earn

Mezo의 종합적인 수익 및 거버넌스 시스템으로, 잠금([veBTC](#vebtc), [veMEZO](#vemezo)), [게이지](#게이지) 투표, [풀](#유동성-풀)에 유동성 공급, [볼트](#musd-savings-vault) 예치를 모두 포함합니다. [Mezo Earn 개요](/docs/kr/docs/users/mezo-earn/overview)를 참조하세요.

## MEZO Gauge

veMEZO 보유자가 투표하여 MEZO 에미션을 Mezo 외부의 MUSD 유동성 풀, 즉 이더리움의 Curve와 Uniswap, Base의 Aerodrome으로 보내는 [비스테이킹 게이지](#비스테이킹-게이지)입니다. 에미션의 비스테이킹 몫(현재 주간 에미션 보상의 8%)에서 재원을 받습니다. [MEZO Gauges](/docs/kr/docs/users/mezo-earn/vote/mezo-gauges)를 참조하세요.

## Mezo Market

토큰 스왑을 위한 Mezo App 내 마켓플레이스입니다. [라우터 컨트랙트](#라우터-컨트랙트)를 사용해 사용 가능한 [유동성 풀](#유동성-풀)을 거쳐 거래를 라우팅합니다.

## Mezo Passport

RainbowKit 기반으로 구축된 개발자 패키지로, 비트코인 지갑과 EVM 지갑 모두에 대한 지갑 연결 옵션을 제공합니다. Mezo Passport는 viem 및 wagmi와 통합되어 지갑 관리를 간소화합니다. [Mezo Passport 설정](/docs/kr/docs/developers/getting-started/configure-mezo-passport)을 참조하세요.

## Mezo Pools

Mezo의 유동성 풀 시스템으로, 토큰 스왑을 위한 자동화된 온체인 유동성 준비금 역할을 합니다. 풀은 Aerodrome 방식의 AMM을 사용하며 [변동성](#변동성-풀) 풀과 [스테이블](#스테이블-풀) 풀의 두 가지 유형이 있습니다. [Mezo Pools 개요](/docs/kr/docs/users/mezo-earn/pools)를 참조하세요.

## 최소 담보 비율(MCR)

[Trove](#trove)에 요구되는 최소 담보 비율로, 110%로 설정되어 있습니다. Trove의 [ICR](#담보-비율icr)이 MCR 아래로 떨어지면 [청산](#청산) 대상이 됩니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## MUSD

\$1 USD에 페깅된 Mezo의 비트코인 담보 스테이블코인입니다. 사용자는 [Trove](#trove)에 BTC를 담보로 예치하고 MUSD를 대출받습니다. 페그는 [환매](#환매)와 [Stability Pool](#stability-pool)을 통해 유지됩니다. [MUSD 개요](/docs/kr/docs/users/borrow)를 참조하세요.

## MUSD Bridge

Wormhole의 [네이티브 토큰 전송(NTT)](#wormhole-ntt) 프로토콜을 기반으로 Mezo와 이더리움 간에 MUSD를 전송하는 크로스체인 브리지입니다. [MUSD Bridge](/docs/kr/docs/users/borrow/musd-bridge)를 참조하세요.

## MUSD Savings Rate Gauge

[MUSD Savings Vault](#musd-savings-vault)를 위한 [스테이킹 게이지](#스테이킹-게이지)입니다. 저축 볼트에 MUSD를 예치한 사용자는 영수증 토큰인 sMUSD를 스테이킹해 MEZO 에미션을 얻을 수 있으며, 이 게이지에 투표한 veBTC 투표자는 프로토콜 수수료에서 MUSD 수익을 얻습니다. [볼트](/docs/kr/docs/users/mezo-earn/vaults)를 참조하세요.

## MUSD Savings Vault

MUSD 보유자를 위한 Mezo의 네이티브 저축 상품입니다. MUSD를 예치하면 대출 활동에서 발생하는 프로토콜 수수료(이자, 발행 수수료, 리파이낸싱 수수료)의 일부를 받습니다. 지분을 나타내는 영수증 토큰으로 sMUSD를 받습니다. [볼트](/docs/kr/docs/users/mezo-earn/vaults)를 참조하세요.

## 비스테이킹 게이지

스테이킹 토큰이 없고 veMEZO로 투표하는 [게이지](#게이지)입니다. Mezo의 스테이커에게 보상을 지급하는 대신, 게이지가 지정한 목적지로 에미션을 보냅니다. [MEZO Gauges](#mezo-gauge)의 경우 그 목적지는 다른 체인의 유동성 풀입니다. 비스테이킹 게이지에 대한 투표는 veBTC 게이지 투표 및 [부스트](#부스트) 매칭과 별개입니다. [MEZO Gauges](/docs/kr/docs/users/mezo-earn/vote/mezo-gauges)를 참조하세요.

## 노드

Mezo 체인 클라이언트(mezod)를 실행하며 네트워크에 참여하는 컴퓨터입니다. 노드 유형에는 [검증자](#검증자) 노드(합의 및 블록 생성), RPC 노드(dApp용 API 엔드포인트), 시드 노드(네트워크 부트스트래핑)가 있습니다. [Validator Kit](/docs/kr/docs/developers/mezo-nodes/validator-kit)를 참조하세요.

## 오라클

자산 가격 같은 외부 데이터를 온체인 스마트 컨트랙트에 제공하는 서비스입니다. Mezo는 검증자 노드에 직접 통합된 Skip Connect를 기본 오라클로 사용합니다. Pyth, Stork, Supra 등 서드파티 오라클도 이용할 수 있습니다. [오라클 인프라](/docs/kr/docs/developers/architecture/oracles)를 참조하세요.

## 개설 수수료

MUSD를 대출받을 때 한 번 부과되는 수수료로, 대출 금액의 0.1%로 계산됩니다. 이 수수료는 대출 원금에 더해지며 이자가 붙습니다. [리파이낸싱](#리파이낸싱)할 때는 리파이낸싱 개설 수수료(일반 수수료의 일부)가 부과됩니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## PCV

프로토콜 통제 가치(Protocol Controlled Value)입니다. MUSD 대출과 리파이낸싱에서 징수한 수수료를 관리하는 컨트랙트입니다. 수수료는 부트스트랩 대출 상환과 게이지 시스템에 나뉘어 배분됩니다. 부트스트랩 대출이 상환되면 수수료는 [Stability Pool](#stability-pool)에 프로토콜 소유 유동성으로 적립됩니다. [MUSD 아키텍처](/docs/kr/docs/users/borrow/architecture-and-terminology)를 참조하세요.

## Poke

veBTC 포지션의 부스트된 가중치를 갱신하는 트랜잭션입니다. veMEZO 투표를 변경하거나, 잠금을 연장하거나, BTC를 추가한 후에는 반드시 실행해야 합니다. Poke를 실행하지 않으면 부스트 변경 사항이 반영되지 않습니다. [Mezo Earn 용어집](/docs/kr/docs/users/mezo-earn/overview/glossary)을 참조하세요.

## 풀 팩토리

Mezo에 새로운 유동성 풀을 배포하는 스마트 컨트랙트입니다. 현재는 Mezo 팀이 관리하며, 향후 누구나 풀을 생성할 수 있도록 개방할 계획입니다. 메인넷 주소: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. [Mezo Pools(개발자)](/docs/kr/docs/developers/features/mezo-pools)를 참조하세요.

## Portal Bridge

Wormhole NTT 프로토콜을 사용해 Mezo와 이더리움 간에 MUSD를 브리지하는 사용자 인터페이스로, [portalbridge.com](https://portalbridge.com/)에서 이용할 수 있습니다. [MUSD Bridge](/docs/kr/docs/users/borrow/musd-bridge)를 참조하세요.

## 가격 피드

[오라클](#오라클)이 제공하는 온체인 데이터로, 자산의 현재 시장 가격을 보고합니다. Mezo는 Skip Connect를 사용해 블록 합의 중에 자산 가격을 결정하고 이를 온체인 상태에 기록합니다. [오라클 인프라](/docs/kr/docs/developers/architecture/oracles)를 참조하세요.

## 리베이스

주간 MEZO 에미션에서 veMEZO 보유자에게 지급하는 희석 방지 분배입니다. 잠금 비율(veMEZO 공급량 / MEZO 총공급량)이 낮으면 에미션의 더 많은 몫이 리베이스로 돌아가 초기 잠금 참여자를 희석으로부터 보호합니다. 더 많은 MEZO가 잠길수록 리베이스 몫은 줄어듭니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## Recovery Mode

시스템 전체의 총 담보 비율(TCR)이 [CCR](#임계-담보-비율ccr)인 150% 아래로 떨어지면 활성화되는 일시적인 안전 상태입니다. Recovery Mode 중에도 청산 기준선은 110%로 유지됩니다(Liquity v1과 달리 MUSD는 Recovery Mode 중에 청산 범위를 확대하지 않습니다). 다만 150% 미만으로는 새 대출을 개설할 수 없으며, 리파이낸싱이 차단됩니다. [MUSD 청산 및 환매](/docs/kr/docs/users/borrow/liquidation-mechanics)를 참조하세요.

## 환매

프로토콜에서 직접 MUSD를 동일한 달러 가치의 BTC로 교환하는 행위입니다. 차입자인지 여부와 관계없이 모든 MUSD 보유자가 환매할 수 있습니다. 환매는 담보 비율이 가장 낮은 [Trove](#trove)부터 대상으로 삼습니다. 이 메커니즘은 MUSD 페그를 \$1로 유지하는 데 도움이 됩니다. [MUSD 청산 및 환매](/docs/kr/docs/users/borrow/liquidation-mechanics)를 참조하세요.

## 리파이낸싱

대출 이자율을 현재 [글로벌 이자율](#글로벌-이자율)로 갱신하는 절차입니다. 리파이낸싱에는 인하된 개설 수수료가 부과되지만, 대출을 종료했다가 다시 개설할 필요가 없습니다. BTC 가치가 올랐다면 리파이낸싱으로 신용 한도를 늘릴 수도 있습니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## 라우터 컨트랙트

Mezo에서 사용 가능한 [유동성 풀](#유동성-풀)을 거쳐 토큰 스왑을 라우팅하는 스마트 컨트랙트입니다. 사용자는 라우터에 토큰 사용을 승인한 다음, 원하는 파라미터로 스왑 함수를 호출합니다. 메인넷 주소: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. [Mezo Pools(개발자)](/docs/kr/docs/developers/features/mezo-pools)를 참조하세요.

## RPC 엔드포인트

애플리케이션이 Mezo 블록체인과 통신하는 데 사용하는 네트워크 URL입니다. RPC 엔드포인트는 표준 이더리움 JSON-RPC 메서드를 지원합니다. 메인넷에서는 Boar, Imperator, Validation Cloud, dRPC 등 여러 제공자를 이용할 수 있습니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## RPC 제공자

Mezo 네트워크의 [RPC 엔드포인트](#rpc-엔드포인트)를 운영하는 서비스입니다. Boar, Imperator, Validation Cloud, dRPC 같은 제공자는 메인넷에 대해 HTTPS 연결과 WebSocket 연결을 모두 제공합니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## 슬리피지

거래의 예상 가격과 실제 체결 가격의 차이입니다. 유동성이 적은 풀이나 거래 규모가 클수록 슬리피지가 커집니다. [스테이블 풀](#스테이블-풀)은 상관관계가 높은 자산 페어의 슬리피지를 최소화하도록 설계되었습니다.

## Splitter

MEZO 에미션을 두 목적지로 나누는 컨트랙트입니다. 분할 비율은 현재 고정되어 있으며 거버넌스를 통해 잠겨 있습니다. [Chain Splitter](#chain-splitter) 및 [Ecosystem Splitter](#ecosystem-splitter)를 참조하세요.

## Stability Pool

[청산](#청산)에 대한 1차 방어선 역할을 하는 MUSD 준비금입니다. 사용자는 Stability Pool에 MUSD를 예치하고 그 대가로 청산된 담보의 일부를 받습니다. [PCV](#pcv) 컨트랙트가 초기 100M MUSD를 예치해 풀의 기반을 마련합니다. [MUSD 핵심 개념](/docs/kr/docs/users/borrow/concepts)을 참조하세요.

## 스테이블 풀

MUSD와 USDC처럼 가치의 상관관계가 매우 높은 자산 간 거래에 최적화된 [유동성 풀](#유동성-풀)입니다. 스테이블 풀은 특수한 공식을 사용해 [슬리피지](#슬리피지)를 크게 낮추며, 0.02%의 거래 수수료를 부과합니다. [풀 수수료](/docs/kr/docs/users/mezo-earn/pools/pools-fees)를 참조하세요.

## 스테이킹 게이지

스테이킹 토큰(LP 토큰이나 sMUSD 영수증 토큰 등)과 연결된 [게이지](#게이지)입니다. 스테이커는 MEZO 에미션을 얻고, 해당 게이지에 투표한 veBTC 투표자는 거래 수수료나 프로토콜 수익을 얻습니다. 스테이킹 게이지는 순 에미션의 약 72%를 받습니다. [Mezo Earn 용어집](/docs/kr/docs/users/mezo-earn/overview/glossary)을 참조하세요.

## 서브그래프

블록체인 데이터를 인덱싱하여 쿼리할 수 있게 만든 데이터 레이어로, GraphQL API를 통해 접근합니다. Mezo는 서브그래프 배포에 Goldsky를 사용하며, 이를 통해 dApp은 전송, 풀 활동, 프로토콜 상태 같은 온체인 데이터를 효율적으로 쿼리할 수 있습니다. [서브그래프 배포](/docs/kr/docs/developers/subgraphs)를 참조하세요.

## 스왑 수수료

[유동성 풀](#유동성-풀)에서 토큰을 스왑할 때마다 부과되는 수수료입니다. 변동성 풀은 0.30%, 스테이블 풀은 0.02%를 부과합니다. 수수료는 입력 토큰으로 징수되며, 유동성 공급자가 청구할 수 있도록 별도의 PoolFees 컨트랙트에 보관됩니다. [풀 수수료](/docs/kr/docs/users/mezo-earn/pools/pools-fees)를 참조하세요.

## tBTC

Thesis가 구축하고 [Threshold Network](#threshold-network)가 구동하는 탈중앙화 비트코인 래퍼입니다. tBTC는 네이티브 비트코인으로 1:1 담보되며, BTC가 이더리움 호환 네트워크로 브리지될 때 취하는 형태입니다. Mezo에서 입금된 BTC는 tBTC의 수탁 인프라를 거쳐 처리됩니다. [MUSD 아키텍처](/docs/kr/docs/users/borrow/architecture-and-terminology)를 참조하세요.

## 테일 에미션

[반감기 일정](#반감기-일정)의 8년 차 이후 시작되는 연 2%의 영구적인 MEZO 에미션 비율입니다. 테일 에미션은 검증자, 유동성 공급자, 거버넌스 참여자에게 무기한으로 지속적인 인센티브를 제공합니다. [에미션 일정](/docs/kr/docs/users/mezo/emissions)을 참조하세요.

## 테스트넷

개발자가 실제 자산을 사용하지 않고 애플리케이션을 배포하고 테스트할 수 있는 테스트용 네트워크입니다. Mezo 테스트넷의 체인 ID는 `31611`입니다. [환경 설정](/docs/kr/docs/developers/getting-started/configure-environment)을 참조하세요.

## TGE

토큰 생성 이벤트(Token Generation Event)입니다. MEZO 토큰이 처음 생성되어 분배된 시점입니다. 커뮤니티와 재단 배분분은 TGE에 잠금 해제되었고, 팀과 투자자 배분분에는 1년의 클리프와 3년의 선형 베스팅이 적용됩니다. [토큰 배분](/docs/kr/docs/users/mezo/token-distribution)을 참조하세요.

## Threshold Network

[tBTC](#tbtc) 브리지를 구동하는 탈중앙화 네트워크입니다. Threshold는 탈중앙화된 서명자 집합을 운영하며, 2020년 초부터 28,000 비트코인 이상을 브리지했습니다. [MUSD 아키텍처](/docs/kr/docs/users/borrow/architecture-and-terminology)를 참조하세요.

## 토큰 배분

1,000,000,000 MEZO 제네시스 공급량의 배분으로, 커뮤니티(40%), 투자자 및 파트너(30%), 팀(20%), 재단(10%)으로 구성됩니다. 모든 베스팅은 [TGE](#tge)로부터 36개월 이내에 완료됩니다. [토큰 배분](/docs/kr/docs/users/mezo/token-distribution)을 참조하세요.

## 거래 수수료

[스왑 수수료](#스왑-수수료)를 참조하세요.

## Trove

단일 이더리움 주소에 귀속되는 Mezo의 담보부 부채 포지션입니다. 사용자는 BTC를 예치하고 이를 담보로 [MUSD](#musd)를 대출받아 Trove를 개설합니다. 유사한 프로토콜에서는 "CDP"라고도 합니다. [MUSD 대출 및 발행](/docs/kr/docs/users/borrow/mint-musd)을 참조하세요.

## 검증자

Mezo 네트워크에서 합의와 블록 생성에 참여하는 노드 운영자입니다. 검증자는 mezod 클라이언트를 실행하고, 체인을 보호하며, Chain Splitter를 통해 MEZO 에미션을 받습니다. [Mezo 검증자](/docs/kr/docs/developers/mezo-nodes/validators)를 참조하세요.

## Validator Kit

Mezo 노드를 배포하고 관리하기 위한 종합 툴킷입니다. Docker, 네이티브 데몬, Kubernetes, 클라우드 배포를 지원합니다. 설정 템플릿, 모니터링, 자동화 스크립트가 포함되어 있습니다. [Validator Kit 가이드](/docs/kr/docs/developers/mezo-nodes/validator-kit)를 참조하세요.

## veBTC

투표 에스크로 BTC(Vote-escrowed BTC)입니다. 잠긴 비트코인을 나타내는 NFT로, Mezo Earn에서 투표력과 수수료 수익 권리를 부여합니다. 투표 가중치는 잠금 기간 동안 선형적으로 감소합니다. 최대 잠금 기간은 28일입니다. [veBTC 개요](/docs/kr/docs/users/mezo-earn/lock/vebtc)를 참조하세요.

## veBTC 부스트 게이지

특정 veBTC NFT에 연결된 [게이지](#게이지)입니다. veMEZO 보유자는 [인센티브](#인센티브)를 받는 대가로 이 게이지에 투표하여 해당 veBTC 포지션에 [부스트](#부스트)를 제공합니다. [매칭 마켓](/docs/kr/docs/users/mezo-earn/lock/vemezo/matching-market)을 참조하세요.

## veMEZO

투표 에스크로 MEZO(Vote-escrowed MEZO)입니다. 잠긴 MEZO 토큰을 나타내는 NFT로, veBTC 투표력을 최대 5x까지 [부스트](#부스트)할 수 있으며, [veBTC 부스트 게이지](#vebtc-부스트-게이지)와 [MEZO Gauges](#mezo-gauge)에는 독자적으로 투표합니다. 자체적인 거버넌스 가중치는 없으며, veBTC 없이는 [스테이킹 게이지](#스테이킹-게이지)에 투표할 수 없습니다. 최대 잠금 기간은 4년입니다. [veMEZO 개요](/docs/kr/docs/users/mezo-earn/lock/vemezo)를 참조하세요.

## 베스팅 일정

잠긴 토큰 배분분을 점진적으로 사용할 수 있게 되는 일정입니다. 모든 MEZO 베스팅은 [TGE](#tge)로부터 36개월 이내에 완료됩니다. 팀과 투자자 배분분에는 1년의 [클리프](#클리프)가 적용된 후 2년에 걸쳐 매월 선형적으로 잠금 해제됩니다. [토큰 배분](/docs/kr/docs/users/mezo/token-distribution)을 참조하세요.

## 변동성 풀

BTC와 MUSD처럼 가격 상관관계가 없는 자산 페어를 위해 설계된 [유동성 풀](#유동성-풀)입니다. 변동성 풀은 상수곱 공식(x * y = k)을 사용하며 0.30%의 [스왑 수수료](#스왑-수수료)를 부과합니다. [풀 수수료](/docs/kr/docs/users/mezo-earn/pools/pools-fees)를 참조하세요.

## 투표 가중치

게이지에 투표할 때 포지션이 갖는 영향력입니다. veBTC의 경우 잠긴 BTC에 남은 잠금 기간을 곱하고 최대 잠금 기간(28일)으로 나누어 계산합니다. veMEZO에도 같은 공식이 적용되지만 최대 잠금 기간은 4년입니다. [투표 개요](/docs/kr/docs/users/mezo-earn/vote)를 참조하세요.

## Wormhole

[MUSD Bridge](#musd-bridge)를 구동하는 크로스체인 메시징 프로토콜입니다. Wormhole은 Mezo와 이더리움 간의 안전한 토큰 전송을 가능하게 합니다. [MUSD Bridge](/docs/kr/docs/users/borrow/musd-bridge)를 참조하세요.

## Wormhole NTT

Wormhole 네이티브 토큰 전송(Native Token Transfer)입니다. [MUSD Bridge](#musd-bridge)에 사용되는 Wormhole 프로토콜입니다. NTT는 소스 체인에서 토큰을 잠그고 대상 체인에서 발행하여 체인 전반의 총공급량을 일정하게 유지함으로써 토큰의 대체 가능성을 보존합니다. [MUSD Bridge](/docs/kr/docs/users/borrow/musd-bridge)를 참조하세요.
