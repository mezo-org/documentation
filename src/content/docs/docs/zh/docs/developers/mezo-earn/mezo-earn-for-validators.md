---
title: 面向验证者的 Mezo Earn
description: 验证者如何参与 Mezo 的经济引擎、获得激励，以及如何与 veBTC、veMEZO、Gauge 和 LP 质押交互。
topic: developers
---

本页介绍验证者如何参与 Mezo 的经济引擎（Mezo Earn）、如何获得激励，以及这些机制与 veBTC、veMEZO、Gauge 和 LP 质押之间的关联。

本页面向以下读者：

- 现有及潜在的 Mezo 验证者
- 基础设施提供商和合作伙伴
- 希望了解验证者奖励运作方式的 veBTC/veMEZO 持有者和 LP

:::note

有关 veBTC、veMEZO、Gauge、Splitter 和排放背后的机制与公式，以 Mezo 白皮书为准。

:::

---

## 总体概览

总体而言：

- 验证者保障 Mezo 链的安全，并通过 Mezo Earn 中的 Chain Splitter 赚取 MEZO 奖励。
- veBTC 持有者是治理的锚点。他们为质押 Gauge 投票，以引导排放的流向。

**关键机制：**

- **排放分配：** Splitter 比例（Chain Splitter 和 Ecosystem Splitter）目前是固定的，并已通过治理锁定。未来可能会通过治理机制变为可调整。
- **veMEZO 的作用：** veMEZO 为 veBTC 的投票权提供加成（最高不超过倍数上限），但绝不会取代 BTC 的锚点地位。

---

## 核心概念

### 关键定义

为了理解 Mezo Earn，我们区分以下三个经济学术语：

- **奖励：** 参与者因其工作而获得的回报（例如 MEZO 排放）。
- **激励：** 为鼓励特定行为而设计的规则或好处（例如因持有 veMEZO 而获得加成）。
- **贿赂：** 由协议或用户提供的临时预算，用于推动某一特定行为（例如为某个特定 Gauge 投票）。

### Mezo Earn 中的参与者

Mezo Earn 协调五类主要参与者：

1. **终端用户 / veBTC 和 veMEZO 锁仓者：** 锁定 BTC 或 MEZO，获得 veBTC 和 veMEZO NFT，在 Gauge 中投票，并领取费用/排放。
2. **流动性提供者（LP）：** 为 DEX 提供流动性，获得 LP 代币和手续费；他们可以选择将 LP 代币质押到质押 Gauge 中，以手续费换取 MEZO 排放。
3. **验证者：** 运行 Mezo 链节点，参与共识，并通过 Chain Splitter 获得 MEZO 排放。
4. **协议：** 在 Gauge 上投放贿赂，以吸引流动性或治理投票。
5. **链本身：** 收取兑换手续费以及链上/跨链桥费用，并通过 Earn 重新分配。

---

## 验证者如何获得排放

Chain Splitter 将奖励排放中的固定份额发送给验证者，目前设定为奖励排放的 20%。该比例已通过治理锁定。

验证者排放在活跃验证者之间平均分配。目前没有任何机制允许 veBTC 持有者为单个验证者投票，或将排放引导至特定验证者。

---

## veBTC Boost Gauge 与配对市场

虽然 veBTC Boost Gauge 和配对市场并非专门针对验证者，但它们会直接影响验证者和 LP 吸引投票的效率。

- 每个 veBTC NFT 都有自己的 Boost Gauge（非质押 Gauge）。
- veMEZO 持有者使用其 veMEZO 权重为这些 Gauge 投票。

**市场动态：**

- **重 BTC / 轻 MEZO 的参与者：** 在其 veBTC Boost Gauge 上提供激励（贿赂），以吸引 veMEZO 投票，从而提高自己的倍数（最高 5 倍）。
- **重 MEZO / 轻 BTC 的参与者：** 将 veMEZO 投票投向 veBTC Boost Gauge，无需持有 BTC 即可赚取这些激励。

---

## LP 质押及其与验证者的关系

### 什么是 LP 质押？

LP 为 Mezo 上的 DEX 流动性池提供流动性，并获得代表其池中份额的 LP 代币。他们可以在两种模式之间进行选择：

**1. 未质押 LP：**

- LP 将 LP 代币保留在自己的钱包中。
- 他们直接从池中按比例赚取兑换手续费。
- 不会有 MEZO 排放分配给他们。

**2. 已质押 LP：**

- LP 将 LP 代币质押到质押 Gauge 中。
- 已质押 LP 代币对应的底层手续费份额会转给为该 Gauge 投票的 veBTC 投票者。
- 作为替代，LP 获得分配给该 Gauge 的 MEZO 排放。

**经济交换：**

- LP 以直接的真实收益（手续费）换取 MEZO 排放。
- veBTC + veMEZO 投票者以其投票权换取对这些被转移的手续费以及添加到该 Gauge 上的任何激励的权利。

### LP 质押如何影响验证者

通过 Splitter 树：

- **Chain Splitter** 决定奖励资金池中有多少分配给验证者活动、多少分配给非验证者活动。该比例目前固定为验证者 20% / 生态系统 80%，并已通过治理锁定。
- **Ecosystem Splitter** 将非验证者资金池引导至质押 Gauge（LP 流动性池 + MUSD 储蓄）。该比例目前是固定的，并已通过治理锁定。
- 随后，LP Gauge 会与 MUSD 储蓄 Gauge 以及其他 LP Gauge 竞争其所在分支内的排放。

---

## 分步指南：LP 质押

1. **提供流动性：** 在 Mezo DEX 上选择一个流动性池，存入资产，并获得 LP 代币。

2. **找到质押 Gauge：** 打开 Earn 或 DEX 前端，找到该流动性池的质押 Gauge，并确认它接受 LP 代币。

3. **质押 LP 代币：** 授权合约并质押所需数量。这会将流动性池的手续费转入该 Gauge 的费用资金池，并将 MEZO 排放分配给 LP 代币质押者。

4. **veBTC 为 LP Gauge 投票：** veBTC（+veMEZO）持有者可以为 LP Gauge 投票。投票权重越高，分配给该 Gauge 的 MEZO 排放越多，分配给投票者的流动性池手续费/贿赂也越多。

5. **领取奖励：**
   - **LP：** 领取 MEZO 排放（按周期分配）。
   - **veBTC 投票者：** 领取被转移的兑换手续费和激励中属于自己的份额。

---

## MUSD 储蓄 Gauge

MUSD 储蓄利率以另一个质押 Gauge 的形式实现。

- 用户将 MUSD 存入储蓄金库，并获得一个凭证代币。
- 如果他们将凭证代币质押到 MUSD 储蓄 Gauge 中：
  - 他们直接获得的 MUSD 收益会被转入该 Gauge 的费用资金池。
  - 作为替代，他们赚取分配给该 Gauge 的 MEZO 排放。
- 为 MUSD 储蓄 Gauge 投票的 veBTC 持有者将获得：
  - MUSD 收益（来自利息、开仓费和再融资费用）。
  - 分配给该 Gauge 的任何 MEZO 激励。

该 Gauge 与 LP Gauge 直接竞争质押分支的排放和投票关注度。

---

## 联系方式与 Discord 支持

如有验证者相关问题、入驻或协调事宜：请加入 [Mezo Discord](https://discord.mezo.org)，并在 #developers 频道与我们交流。
