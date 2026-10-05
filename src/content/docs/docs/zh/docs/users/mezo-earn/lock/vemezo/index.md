---
title: veMEZO 概览
description: 锁定 MEZO，为投票权提供加成并赚取 Rebase
topic: users
---

veMEZO 是在 Mezo 网络上锁定的 MEZO 的代币化（NFT）表示。锁定 MEZO 可将您的 veBTC 投票权最高提升至 5x，从而放大您的收益，并通过 MEZO 排放获得反稀释的 Rebase。

## 什么是 veMEZO？

在 Mezo 上锁定 MEZO 后，您会收到一个代表您锁仓仓位的 veMEZO NFT。该 NFT 为您提供：

- 作用于 veBTC 投票权的加成倍数（最高 5x）
- 来自每周 MEZO 排放的 Rebase 奖励，用于抵消稀释
- 参与配对市场，从 veBTC 持有者处赚取激励
- 在 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges) 上投票，将 MEZO 排放引导至 Curve、Uniswap 和 Aerodrome 上的 MUSD 流动性池

:::note[重要]
veMEZO 不会单独在**质押 Gauge** 上投票——在质押 Gauge 上，它只会放大 veBTC 仓位的投票权。它确实能以自身名义在 veBTC Boost Gauge 和 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges) 上投票。
:::

---

## veMEZO 权重的运作方式

您的 veMEZO 权重取决于两个因素：锁定的 MEZO 数量（MEZO 越多，权重越大）和锁定期限（锁定越久，可持续的权重越高）。

您的权重会随时间线性衰减。例如，用户锁定 1,000 MEZO 4 年，初始拥有 1,000 veMEZO 权重，2 年后衰减至 500，到期时降为 0。您可以随时延长锁定期限，以保持完整的权重。

您还可以为 veMEZO 开启自动最长锁定（auto-max lock），这样无需持续重新锁定代币，即可在每个周期都保持 4 年最长锁定期限对应的投票权重。

### 锁仓参数

| 参数 | 值 |
|---|---|
| 最短锁定期限 | 1 周 |
| 最长锁定期限 | 4 年（1,456 天） |
| 锁仓衰减 | 线性——权重持续下降，直至归零 |

---

## 您的收益

### Rebase 奖励（所有 veMEZO 持有者）

veMEZO 持有者会以 Rebase 的形式获得每周 MEZO 排放中的一部分，以防止新排放带来的稀释。Rebase 份额是动态的——锁定的代币越少，份额越高；锁定的 MEZO 越多，份额越低。

### 激励（通过配对市场）

veMEZO 持有者可以为 veBTC Gauge 投票来赚取激励。当 veBTC 持有者希望为其仓位获得加成、但缺少足够的 veMEZO 时，他们可能会在自己的 veBTC Gauge 上发布激励。通过为该 Gauge 投票，您可以赚取这些激励，作为提供加成的回报。

有关配对市场运作方式的详细信息，请参阅[加成机制](/docs/zh/docs/users/mezo-earn/lock/vemezo/boost-mechanism)。

---

## veMEZO 与 veBTC 对比

|  | veBTC | veMEZO |
|---|---|---|
| 底层资产 | BTC | MEZO |
| 最长锁定期限 | 28 天 | 4 年 |
| 投票权 | 基础投票权 | 放大 veBTC 投票权（最高 5x） |
| 赚取费用 | 是（跨链桥费用、兑换手续费、MUSD） | 否 |
| 赚取 Rebase | 否 | 是 |
| 赚取激励 | 是（来自您所投票的 Gauge） | 是（来自 veBTC Boost Gauge） |
