---
title: USDC Lending Vault
description: 将 mUSDC 存入 Mezo 上以 BTC 为抵押的 Morpho 借贷市场，赚取借款人支付的利息或 MEZO 排放
topic: users
---

USDC Lending Vault 让您可以直接参与一个透明的、以 BTC 为抵押的信贷市场。存入 mUSDC 后，您的资金将提供给以 BTC 作为抵押品的借款人。借款人支付的利息就是存款人收益的来源。

在底层，存款会进入一个经过管理的 Morpho Vault V2（即 Morpho BTC-mUSDC Vault），由它代表您向 Morpho Blue BTC / mUSDC 市场提供资金。您无需直接与 Morpho 交互——您持有的份额代币会随着利息累积而增值。

访问金库：[mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)。如需以 BTC 为抵押借入 mUSDC，请参阅[如何借入 mUSDC](/docs/zh/docs/users/borrow/how-to-borrow-musdc)。

**运作原理：**

- 存入 mUSDC 并获得 `morphoBTC-mUSDC`——一种代表您对金库索取权的份额代币
- 收益体现在份额价格中：随着时间推移，相同数量的份额可赎回更多的 mUSDC
- 贷款由 BTC 超额抵押（清算 LTV 为 86%）。存入的资产不会被再抵押
- 没有最低存款要求，进入或退出时也不收取协议费用
- APR 根据借款需求而浮动——请在 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) 查看当前利率

---

## 了解您的份额

`morphoBTC-mUSDC` 是您的金库份额代币。以下几点需要了解：

- **收益体现在汇率中，而不是您的余额中。** 存款后，您的份额余额保持不变，但随着借款人支付利息，每份份额可赎回的 mUSDC 会越来越多。提取时您就会看到差额。
- **份额与 mUSDC 并非 1:1 对应。** 如果金库已经赚取了利息，那么存入 100 mUSDC 获得的份额将少于 100 份——而每份份额的价值都高于 1 mUSDC。
- **如果您质押以获取排放，您的利息将被重新分配。** 已质押的份额赚取的是 MEZO，而不是借款人支付的利息。原本归您所有的利息会被重新分配给 Lending Vault Gauge 上的 veBTC 投票者。

---

## 金库详情

| 参数 | 值 |
|-----------|-------|
| 存入代币 | mUSDC |
| 份额代币 | `morphoBTC-mUSDC` |
| 底层市场 | Morpho Blue BTC / mUSDC |
| 清算 LTV | 86% |
| 管理方 | Mezo 治理 |
| 提款费 | 无 |
| 当前 APR | 浮动——请查看 [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## 两种赚取收益的方式

与 Mezo 上的其他 Earn 产品一样，您可以选择每份份额的收益方式：

- **持有以赚取利息**——将 `morphoBTC-mUSDC` 保留在您的钱包中。随着借款人支付利息，您的份额会增值。
- **质押以赚取 MEZO 排放**——将您的份额质押到 Lending Vault Gauge 中。您将赚取 MEZO；这些份额原本可赚取的利息则归投票者所有。

同一份份额无法同时获得这两种收益，但您可以拆分持仓——将一部分质押以赚取排放，其余部分持有以赚取利息。在应用中，存款和质押是两个独立的步骤：先存款以获得份额，然后再选择是否质押。

**要退出已质押的仓位：** 先解除质押，再赎回为金库份额，然后提取为 mUSDC。解除质押不会导致您失去可领取的 MEZO。

---

## 提款

提款时将返还您的 mUSDC（如果您选择持有，还包括累积的利息）。由于您的 mUSDC 已借给借款人，金库只能支付当前可用的部分——即未被借出的部分。

- 应用会根据金库当前的流动性显示 **Available to withdraw**（可提取）金额
- 当资金利用率较高时，大额提款可能只能部分完成，或暂时无法进行，直到借款人还款或有新的资金存入
- 已质押的份额必须先解除质押才能提取

这是借贷市场的正常现象，并非金库出现故障。

---

## 风险

### 智能合约风险

资金会经过 Lending Vault 适配器、Morpho Vault V2 以及 Morpho Blue 市场。其中任何一个环节出现漏洞或遭到攻击，都可能导致资金损失。

### 流动性不足风险

当借款人资金利用率较高时，您可能无法按需提取全部 mUSDC。请只投入您能够承受暂时被锁定的资金。

### 借贷市场风险

借款人会在 LTV 达到 86% 时被清算。在 BTC 价格急剧、快速下跌的情况下，可能会出现坏账，坏账将通过份额价格下跌的方式由所有资金提供者共同承担——这里没有保险基金。您的仓位以 mUSDC 计价，因此脱锚也会影响您的持仓。

### 管理方风险

Mezo 治理负责管理金库向哪些市场提供资金以及供应上限。Morpho Vault V2 上的管理方变更受时间锁约束。

---

## 合约

| 合约 | 地址 |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Lending Vault 适配器 | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| 金库 Gauge | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

有关 Morpho Blue 市场的详情，请参阅 [Morpho 文档](https://docs.morpho.org/)。
