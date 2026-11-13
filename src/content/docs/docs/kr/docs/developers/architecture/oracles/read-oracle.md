---
title: 오라클을 사용한 시장 데이터 읽기
description: Mezo의 오라클 인프라를 사용하여 시장 데이터에 접근하고 해석하는 방법.
topic: developers
---

Mezo는 두 가지 오라클 시스템을 통해 시장 데이터를 제공합니다: BTC/USD를 위한 [Skip Connect](https://docs.skip.build/connect/introduction)와 추가 가격 피드를 위한 [Pyth Network](https://docs.pyth.network/home).

## 개요

### Skip 오라클

Skip 오라클은 Chainlink 호환 어그리게이터 인터페이스를 통해 Mezo에서 네이티브 BTC/USD 가격 피드를 제공합니다.

- **지원 쌍:** BTC/USD만 해당
- **업데이트 빈도:** 매 블록마다
- **인터페이스:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth 오라클

Pyth 오라클은 BTC/USD 외에도 여러 가격 피드를 제공합니다.

**업데이트 빈도:** 토큰 쌍에 따라 다릅니다.

- Mezo에서는 자세한 내용을 [설정 파일](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml)에서 확인하세요.
- 이더리움에서는 자세한 내용을 [설정 파일](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml)에서 확인하세요.

가격은 `price_deviation`이 설정된 임계값(퍼센트 포인트)을 초과하거나 `time_difference` 초마다(먼저 충족되는 조건에 따라) 업데이트됩니다.

## 모범 사례

오라클 데이터를 사용하는 dApp을 구축할 때 다음 가이드라인을 따르세요:

- **최신성 검증:** 항상 타임스탬프와 블록 번호를 확인하여 오래된 데이터를 감지하세요. 사용 사례에 적합한 데이터 유효 기간 임계값을 설정하세요.
- **가격 범위 설정:** 이상 징후나 조작 시도를 감지하기 위해 가격 값에 대한 검증 로직을 구현하세요.
- **시장 상황 모니터링:** 변동성, 유동성 및 애플리케이션 일시 중지가 필요할 수 있는 잠재적 조작 이벤트에 유의하세요.
- **보안 감사:** 컨트랙트와 종속성이 보안 표준을 충족하는지 확인하세요. 오라클 데이터를 처리하는 코드를 감사하여 취약점을 방지하세요.

## 가격 피드 읽기

### Skip 오라클 사용하기 (BTC/USD)

Skip 오라클은 Chainlink 호환 인터페이스를 구현합니다. 최신 가격을 가져오려면 `latestRoundData()`를 호출하세요:

**컨트랙트:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**반환 값:**

- `roundId`: 가격이 업데이트된 라운드 ID
- `answer`: BTC/USD 가격 (소수점 정밀도를 얻으려면 `decimals()`를 사용하세요)
- `startedAt`: 라운드가 시작된 Unix 타임스탬프
- `updatedAt`: 라운드가 마지막으로 업데이트된 Unix 타임스탬프

### Pyth 오라클 사용하기 (다중 피드)

Pyth는 EVM 컨트랙트를 통해 여러 가격 피드를 제공합니다. 내장된 유효 기간 검사를 통해 가격을 가져오려면 `getPriceNoOlderThan(pair_id, maxAgeSeconds)`를 사용하세요.

**Mezo 메인넷 컨트랙트:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Mezo 테스트넷 컨트랙트:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**이더리움 메인넷 컨트랙트:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**이더리움 Sepolia 컨트랙트:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**주어진 가격 ID에 대한 가격 조회 예제:**

```solidity
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract ReadPythPrice {
    IPyth public immutable pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract); // 0x2880aB155794e7179c9eE2e38200202908C17B43 on Mezo
    }

    function getPrice(bytes32 priceId, uint256 maxAgeSeconds)
        external
        view
        returns (int64 price, uint64 conf, int32 expo, uint256 publishTime)
    {
        PythStructs.Price memory priceData = pyth.getPriceNoOlderThan(priceId, maxAgeSeconds);
        return (priceData.price, priceData.conf, priceData.expo, priceData.publishTime);
    }

    // Example: Get MUSD/USD price
    function getMUSDPrice() external view returns (int64, uint256) {
        bytes32 musdPriceId = 0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de;
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(musdPriceId, 3600); // Max 1 hour old
        return (price.price, price.publishTime);
    }
}
```

**참조:** getPriceNoOlderThan API [문서](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan)

## 오프체인 가격 데이터

블록체인과 상호작용하지 않고 Pyth Network에서 직접 가격 피드와 메타데이터를 조회할 수 있습니다:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **가격 피드 ID:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## 사용 가능한 가격 피드

### Skip 오라클 피드

Mezo 메인넷과 테스트넷 모두에서 사용 가능:

| 쌍 | 컨트랙트 주소 | 네트워크 |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | 메인넷 |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | 테스트넷 |

**노드 API (테스트넷 전용):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth 오라클 피드

사용 가능한 네트워크:

- Mezo [메인넷](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [테스트넷](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) `0x2880aB155794e7179c9eE2e38200202908C17B43`
- 이더리움 [메인넷](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- 이더리움 [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`

**Mezo 지원 가격 피드 ID:**

| 쌍 | 가격 피드 ID |
|------|---------------|
| SolvBTC/USD | `0xf253cf87dc7d5ed5aa14cba5a6e79aee8bcfaef885a0e1b807035a0bbecc36fa` |
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| MEZO/USD | `0x80beaaedbdd228e77c5d62dfcd74b0305674b7e27a5cc6a46e71bd3a696826df` |
| BTC/USD | `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43` |
| cbBTC/USD | `0x2817d7bfe5c64b8ea956e9a26f573ef64e72e4d7891f2d6af9bcc93f7aff9a97` |
| USDC/USD | `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |
| T/USD | `0x7a072b799215196b0ecb6a58636ec312bce8461dcc33c28c3a046b1e636d121d` |
| NVDA/USD | `0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593` |
| GOOGL/USD | `0x5a48c03e9b9cb337801073ed9d166817473697efff0d138874e0f6a33d6d5aa6` |
| TSLA/USD | `0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1` |
| MSTR/USD | `0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09` |
| COIN/USD | `0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245` |
| CRCL/USD | `0x92b8527aabe59ea2b12230f7b532769b133ffb118dfbd48ff676f14b273f1365` |

**이더리움 지원 가격 피드 ID:**

| 쌍 | 가격 피드 ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**추가 가격 피드 요청:** 추가 Pyth 가격 피드를 활성화하려면 사용 가능한 [가격 피드 ID](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) 전체 목록을 확인하고 Mezo 팀에 온체인 활성화를 요청하세요.
