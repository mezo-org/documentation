---
title: 使用预言机读取市场数据
description: 如何使用 Mezo 的预言机基础设施访问和解读市场数据。
topic: developers
---

Mezo 通过两个预言机系统提供市场数据：[Skip Connect](https://docs.skip.build/connect/introduction) 用于 BTC/USD，[Pyth Network](https://docs.pyth.network/home) 用于额外的价格数据源。

## 概览

### Skip 预言机

Skip 预言机通过与 Chainlink 兼容的聚合器接口在 Mezo 上提供原生 BTC/USD 价格数据。

- **支持的交易对：** 仅 BTC/USD
- **更新频率：** 每个区块
- **接口：** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth 预言机

Pyth 预言机提供 BTC/USD 以外的多种价格数据源。

**更新频率：** 取决于代币交易对。

- 在 Mezo 上，请参阅[配置文件](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml)了解详情。
- 在以太坊上，请参阅[配置文件](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml)了解详情。

当 `price_deviation` 偏差超过设定阈值（以百分点为单位）或每隔 `time_difference` 秒（以先到者为准）时，价格会被更新。

## 最佳实践

在构建使用预言机数据的 dApp 时，请遵循以下准则：

- **验证新鲜度：** 始终检查时间戳和区块号以检测过时数据。根据您的用例设置适当的过时阈值。
- **设置价格边界：** 对价格值实施合理性检查，以检测异常或操纵尝试。
- **监控市场状况：** 留意市场波动、流动性变化以及潜在的操纵事件，这些情况可能需要您暂停应用。
- **安全审计：** 确保您的合约和依赖项符合安全标准。审计处理预言机数据的代码以防止漏洞利用。

## 读取价格数据

### 使用 Skip 预言机（BTC/USD）

Skip 预言机实现了与 Chainlink 兼容的接口。调用 `latestRoundData()` 来获取最新价格：

**合约：** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**返回值：**

- `roundId`：价格更新时的轮次 ID
- `answer`：BTC/USD 价格（使用 `decimals()` 获取小数精度）
- `startedAt`：轮次开始的 Unix 时间戳
- `updatedAt`：轮次最后更新的 Unix 时间戳

### 使用 Pyth 预言机（多种数据源）

Pyth 通过其 EVM 合约提供多种价格数据源。使用 `getPriceNoOlderThan(pair_id, maxAgeSeconds)` 获取带有内置过时检查的价格。

**Mezo 主网合约：** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Mezo 测试网合约：** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**以太坊主网合约：** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**以太坊 Sepolia 合约：** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**获取给定价格 ID 的价格示例：**

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

**参考：** getPriceNoOlderThan API [文档](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan)

## 链下价格数据

您可以直接从 Pyth Network 查询价格数据和元数据，而无需与区块链交互：

- **Hermes API：** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **价格数据源 ID：** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## 可用价格数据源

### Skip 预言机数据源

在 Mezo 主网和测试网上均可用：

| 交易对 | 合约地址 | 网络 |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | 主网 |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | 测试网 |

**节点 API（仅测试网）：** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth 预言机数据源

已部署于：

- Mezo [主网](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)，地址 `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [测试网](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)，地址 `0x2880aB155794e7179c9eE2e38200202908C17B43`
- 以太坊[主网](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)，地址 `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- 以太坊 [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)，地址 `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`

**Mezo 支持的价格数据源 ID：**

| 交易对 | 价格数据源 ID |
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

**以太坊支持的价格数据源 ID：**

| 交易对 | 价格数据源 ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**请求额外的价格数据源：** 要启用额外的 Pyth 价格数据源，请浏览可用[价格数据源 ID](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) 的完整列表，并联系 Mezo 团队请求链上激活。
