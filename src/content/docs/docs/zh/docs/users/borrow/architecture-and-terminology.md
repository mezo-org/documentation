---
title: MUSD 架构与术语
description: 深入了解 Mezo 上 MUSD 的系统设计与核心术语。
topic: users
---

[MUSD](https://mezo.org/feature/musd) 系统由四大合约组构成：

| 合约组 | 用途 |
| --- | --- |
| **代币（MUSD）** | 系统核心的稳定币，旨在维持与美元的锚定 |
| **核心协议** | 负责开立/关闭仓位、管理抵押品以及维护系统稳定 |
| **资产池** | 管理系统中的各类抵押品池和流动性池 |
| **辅助合约** | 提供价格数据源、仓位排序以及协议控制价值管理等基础服务 |

## 托管与抵押品管理

MUSD 仓位可在链上追踪，底层比特币抵押品则由 tBTC 稳健的去中心化托管基础设施进行安全管理。

您可以在 Mezo 区块浏览器上实时查看所有为 MUSD 提供支持的 BTC：

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC 由 Mezo 的同一支团队 [Thesis*](https://thesis.co/?ref=blog.mezo.org) 构建，并由 [Threshold Network](https://threshold.network/?ref=blog.mezo.org) 提供支持。Threshold 是一个去中心化签名者集合，自 2020 年初起运营 Threshold 比特币跨链桥，已成功桥接超过 28k 枚比特币。tBTC 的储备证明自跨链桥上线以来一直公开可查，可在 [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org) 上查看。

如需深入了解 tBTC，可以参阅 [Bitcoin Layers 研究报告](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org)，该报告将 tBTC 与 WBTC、cbBTC 等其他主流包装资产进行了对比分析。在 tBTC 于 Aave 上架为抵押品之前，[LlamaRisk 团队](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org)也对其进行了额外的风险分析。

### 合约托管

用户通过调用 BorrowerOperations.openTrove、提供 BTC 并申请 MUSD 来开立仓位。BTC 会被转入 ActivePool，并一直保留在其中，直到发生以下任一操作：

* 提取（`BorrowerOperations.withdrawColl`）
* 还清债务（`BorrowerOperations.closeTrove`）
* 赎回抵押品（`TroveManager.redeemCollateral`）
* 被清算（`TroveManager.liquidate`）

被清算的仓位要么由 StabilityPool 承接，此时 BTC 会转入稳定池；要么其债务和抵押品被吸收并重新分配给其他用户，此时 BTC 会转入 DefaultPool，随后再进行分配。

## 固定利率借款

* 全局利率：所有新开立的贷款均适用同一个全局利率。
* 利率保持不变：贷款一经开立，即保留其创建时的利率，即使全局利率发生变化也不受影响。贷款的利率只能由用户通过再融资功能进行更新。

:::note
利率**在贷款存续期内固定不变**。您在开立贷款时锁定的利率永远不会改变，除非您选择再融资。
:::
* 再融资功能：再融资功能允许用户将贷款债务调整为新的全局利率。此过程会产生再融资费用，该费用为发行费的一个可配置百分比。与按新利率关闭并重新开立贷款相比，再融资的优势在于无需移动抵押品，且费用更低。如果 BTC 价格上涨，您还可以通过再融资来扩大信用额度。
* 单利：利息按单利模型计算，而非复利。
* 利息支付：利息付款将流向 PCV（协议控制价值）。这些付款的分配方式由治理决定，可以在任意接收方与偿还启动贷款之间进行分配。

## 其他治理事项

* 治理控制：利率及其他关键参数由治理控制。修改这些参数需要提交治理提案，并经过一段最短延迟期后方可生效。
* 利率提案：新的利率可由治理提出。这些提案必须在最短延迟期之后获得批准，以确保稳定性和可预测性。

## 协议控制价值（PCV）

协议控制价值（PCV）合约是系统的关键组件，负责管理借款和再融资所收取的费用。以下是 PCV 运作方式的概述：

* 费用收取：借款费用和再融资费用会流向 PCV 合约。
* 费用分配：PCV 收取的费用会用于偿还启动贷款，或将资金发送至 Gauge 系统。
* 可治理的分配比例：费用在偿还债务与 Gauge 系统之间的分配比例可通过治理调整。但在启动贷款全部还清之前，发送至 Gauge 系统的费用不得超过 50%。
* 债务还清后：启动贷款全部还清后，费用将作为协议自有流动性累积在 StabilityPool 中。

### 协议启动贷款

稳定池通过一笔以未来费用和利息为担保的协议贷款完成启动。由这笔协议贷款铸造的 MUSD 仅限在稳定池中使用。在协议贷款存续期间，协议收取的利息和费用中至少有 50% 用于偿还该贷款。

## 定义

- **贷款（Loan）：** 绑定到单个以太坊地址的抵押债务仓位。在类似协议中也称为“CDP”。

- **活跃抵押品（Active collateral）：** 记录在贷款结构体中的抵押品数量

- **活跃本金（Active principal）：** 记录在贷款结构体中的 MUSD 债务金额，不包括任何利息

- **活跃利息（Active interest）：** 记录在贷款结构体中的 MUSD 利息金额

- **活跃债务（Active debt）：** 记录在贷款结构体中的 MUSD 债务金额（活跃本金加上活跃利息）

- **全部抵押品（Entire collateral）：** 贷款的活跃抵押品与其从分配中累积的待领取抵押品奖励之和

- **全部债务（Entire debt）：** 贷款的活跃债务与其从分配中累积的待计入债务奖励之和

- **个人抵押率（ICR）：** 贷款的 ICR 是其全部抵押品按当前抵押品:USD 价格计算的美元价值与其全部债务之比

- **名义抵押率（名义 ICR，NICR）：** 贷款的名义 ICR 是其全部抵押品（以抵押品计）乘以 100e18 再除以其全部债务。

- **系统全部抵押品（Entire system collateral）：** ActivePool 与 DefaultPool 中抵押品的总和

- **系统全部债务（Entire system debt）：** ActivePool 与 DefaultPool 中债务的总和

- **系统总抵押率（TCR）：** 系统全部抵押品按当前抵押品:USD 价格计算的美元价值与系统全部债务之比

- **临界抵押率（CCR）：** 150%。当 TCR 低于 CCR 时，系统将进入恢复模式。

- **赎回（Redemption）：** 用 MUSD 代币与系统进行兑换，以换取等值抵押品的行为。任何持有 MUSD 代币余额的账户都可以赎回，无论其是否为借款人。

- **清算（Liquidation）：** 强制关闭抵押不足的贷款，并重新分配其抵押品和债务的行为。当稳定池规模足够大时，被清算的债务会与稳定池相抵消，抵押品则分配给存款人。如果被清算的债务无法与稳定池相抵消，系统会将被清算的抵押品和债务直接重新分配给抵押率 >110% 的活跃贷款。清算功能无需许可且向所有人开放——任何人都可以清算抵押不足的贷款，或批量清算多笔贷款。

- **抵押品盈余（Collateral Surplus）：** 抵押品盈余是指借款人在其贷款被全额赎回时可以取回的多余抵押品。

- **抵消（Offset）：** 用稳定池中的 MUSD 抵消被清算的债务，并按存款比例将被清算的抵押品分配给稳定池存款人。

- **Gas 补偿（Gas compensation）：** 自动支付给清算函数调用者的 MUSD 和抵押品退款，旨在确保清算在市场承压时仍然有利可图。200 MUSD 这一数额是根据以太坊 Gas 价格和出块时间设定的，旨在确保清算人不会因可能高昂的 Gas 成本而却步。
