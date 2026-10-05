---
title: MUSD Savings Vault
description: 通过 Mezo Savings Vault 赚取以费用为支撑的 MUSD 收益
topic: users
---

MUSD Savings Vault 是 Mezo 面向 MUSD 持有者推出的原生储蓄产品。

**运作原理：**

- 存入 MUSD 并获得 sMUSD——一种代表您在金库中所占份额的凭证代币
- 收益体现在 sMUSD 汇率中：随着时间推移，1 sMUSD 可赎回的 MUSD 将超过 1 MUSD。当您提取时，您收到的 MUSD 将多于您存入的数量。
- 收益来自 MUSD 体系内的两个来源：MUSD 协议费用（借贷利息、开仓费、再融资费）以及 MUSD 贷款操作产生的 BTC 费用；后者会被兑换为 MUSD 并每周分配
- 这两部分收益均由协议按每周的节奏分配给金库
- APR 根据协议活动而浮动——请在 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) 查看当前利率

### 费用分配

MUSD 协议费用按 50/50 的比例分配到两个去向：

- **MUSD Savings Vault**——分配给 sMUSD 持有者；对于已质押的 sMUSD，则重新分配给 veBTC 投票者
- **偿还[协议启动贷款](/docs/zh/docs/users/borrow/architecture-and-terminology/#协议启动贷款)**

这一分配比例可通过 MUSD Splitter 进行治理调整，在启动贷款全部还清之前，至少 50% 的费用必须用于偿还贷款。还清之后，所有费用都将流入 Savings Vault。完整详情请参阅 [MUSD 费用](/docs/zh/docs/users/borrow/fees/)。

---

## 了解 sMUSD

sMUSD 是您在 Mezo MUSD Savings Vault 中的凭证代币。以下几点需要了解：

- **收益体现在汇率中，而不是您的余额中。** 存款后，您的 sMUSD 余额保持不变，但随着金库不断累积费用，每个 sMUSD 可赎回的 MUSD 会越来越多。提取时您就会看到差额。
- **收益每周分配。** 协议每周将累积的费用分配给金库。sMUSD/MUSD 汇率会在每次分配时更新。
- **sMUSD 可以转让。** 您可以像其他任何代币一样发送或持有 sMUSD。提取时持有 sMUSD 的人将赎回其累积的收益。
- **如果您将 sMUSD 质押到 Gauge 中，您的收益将被重新分配。** 已质押的 sMUSD 赚取的是 MEZO 排放，而不是直接的费用收入。原本归您所有的费用收入会被重新分配给为 MUSD Savings Gauge 投票的 veBTC 投票者。解除质押后即可恢复直接累积收益。

---

## 金库详情

| 参数 | 值 |
|-----------|-------|
| 存入代币 | MUSD |
| 凭证代币 | sMUSD |
| 策略管理方 | Mezo |
| 提款费 | 无 |
| 提款时间锁 | 0h |
| 当前 APR | 浮动——请查看 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## 将 sMUSD 质押到 Gauge 中

您可以选择将您的 sMUSD 凭证代币质押到 MUSD Savings Gauge 中，以赚取 MEZO 代币排放。

**取舍：**

- **未质押的 sMUSD：** 您直接获得按比例应得的金库收益以及 MUSD 利息/费用收入
- **已质押的 sMUSD：** 您应得的利息和费用收入会被重新分配给该 Gauge 上的 veBTC 投票者。作为交换，您将根据该 Gauge 获得的投票数赚取排放

这与 Mezo 原生 DEX 上流动性池中 LP 质押的运作方式相同——质押者放弃费用收入以换取排放，而投票者则赚取被重新分配的费用。

MUSD Savings Rate Gauge 与 LP 流动性池 Gauge 一同竞争投票。它们统称为“质押 Gauge”——分配给储蓄利率 Gauge 的投票不能同时分配给 LP Gauge。

随着 MEZO 排放上线，将 sMUSD 质押到 Gauge 中现在可以在您的基础仓位之外额外赚取 MEZO。MUSD Savings Gauge 与 LP 流动性池 Gauge 一同竞争 veBTC 投票——引导至储蓄 Gauge 的投票越多，流向质押者的 MEZO 排放就越多。支持该 Gauge 的 veBTC 投票者将赚取质押者重新分配的 MUSD 费用。质押者和投票者当前的 Gauge APR 可在 Vote 页面查看，网址为 [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote)。

---

## 风险

### 策略风险
每个金库部署资产的方式各不相同。存款前请先了解底层策略——有些策略的风险比其他策略更高。

### 智能合约风险
金库会与多个智能合约交互。虽然 Mezo 金库已经过审计，但所有智能合约都存在固有风险。请只存入您能够承受的金额。
