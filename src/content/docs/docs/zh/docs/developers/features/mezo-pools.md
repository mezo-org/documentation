---
title: Mezo Pools
topic: developers
---
Mezo Pools 借助经过优化的池机制，让用户能够兑换代币并提供流动性。Mezo 支持两种池架构：**基础池**（恒定乘积 AMM 和稳定曲线 AMM），以及支持自定义价格区间的**集中流动性（CL）池**。

## 基础池

基础池使用 Aerodrome 风格的 AMM，采用恒定乘积（波动）定价或稳定曲线（稳定）定价。

- **池工厂：** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **兑换手续费：** 波动池为 0.30%，稳定池为 0.02%
- **仓位类型：** 同质化 LP 代币（ERC-20）

### 支持的基础池

| 池 | 类型 | 地址 |
|------|------|---------|
| MUSD/BTC | 波动 | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | 稳定 | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | 稳定 | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### 基础池兑换流程

**Router 合约：** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. 用户向 Router 授权代币
2. 传入路径数组，调用 Router 的 `swapExactTokensForTokens(...)`
3. 输出代币返回至钱包

## 集中流动性（CL）池

CL 池允许流动性提供者在自定义价格区间内存入资金，将资本集中在实际发生交易的区间。Mezo 的 CL 实现基于 [Velodrome 的 Slipstream](https://velodrome.finance/docs/slipstream)。

- **CL 工厂：** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **仓位类型：** 非同质化（通过 NonfungiblePositionManager 铸造的 ERC-721 NFT）
- **价格模型：** `sqrtPriceX96`（Q64.96 定点数），与 Uniswap V3 相同

### 支持的 CL 池

| 池 | Tick 间距 | 默认费率 | 地址 |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0.30% | 请查看区块浏览器 |

### Tick 间距与费率

CL 池在创建时会指定 tick 间距，它决定了价格区间的粒度。tick 间距小于 100 的池归类为稳定池；100 及以上的归类为波动池。

| Tick 间距 | 默认费率 |
|---|---|
| 1 | 0.01% |
| 10 | 0.05% |
| 50 | 0.05% |
| 100 | 0.05% |
| 200 | 0.30% |
| 2,000 | 1.00% |

可以通过工厂合约上可插拔的 `swapFeeModule` 设置自定义费率。`unstakedFeeModule` 控制从未质押仓位重定向到已质押仓位的兑换手续费比例（默认：10%）。

### CL 兑换流程

**CL Swap Router：** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. 用户向 CL Swap Router 授权代币
2. 传入池键（token0、token1、tickSpacing）和兑换参数，调用 `exactInputSingle(...)` 或 `exactInput(...)`
3. 输出代币返回至钱包

### CL 仓位管理

**NonfungiblePositionManager：** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

仓位以 ERC-721 NFT 的形式进行管理。主要操作：

- `mint(...)`——以指定价格区间（tickLower、tickUpper）创建新仓位并存入代币
- `increaseLiquidity(...)`——向现有仓位追加流动性
- `decreaseLiquidity(...)`——从仓位中移除流动性
- `collect(...)`——领取累积的兑换手续费

### 质押与 Gauge

CL 仓位可以质押到 Gauge 中以获取 MEZO 排放。已质押且处于价格区间内的流动性可同时赚取兑换手续费和排放。未质押费用机制会将未质押仓位的一部分费用重定向给已质押仓位。

- **CL Gauge 工厂：** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### 主要特性

- **滑点控制：** 在前端提供，或通过 `amountOutMinimum` / `sqrtPriceLimitX96` 参数设置
- **内置 TWAP 预言机：** 每个 CL 池都维护一个时间加权平均价格预言机
- **动态费率：** 可插拔的费用模块，可为每个池实现自定义费用逻辑

## 合约地址

### 主网——基础池合约

| 名称 | 地址 |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC 池 | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC 池 | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT 池 | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### 主网——CL 合约

| 名称 | 地址 |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool（实现合约） | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge（实现合约） | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### 主网——治理合约

| 名称 | 地址 |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### 测试网——基础池合约

| 名称 | 地址 |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC 池 | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC 池 | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT 池 | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### 测试网——CL 合约

| 名称 | 地址 |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool（实现合约） | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge（实现合约） | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### 测试网——治理合约

| 名称 | 地址 |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
