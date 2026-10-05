---
title: 金库概览
description: 通过金库实现自动化的 MUSD 和比特币收益策略
topic: users
---

Mezo 金库（Mezo Vaults）是能够产生收益的策略，它们会将您的资产部署到 DeFi 中以赚取回报。您只需存入金库，获得代表您仓位的凭证代币，然后交由策略管理方优化收益。

访问 [mezo.org/earn/vaults](https://mezo.org/earn/vaults) 浏览可用的金库。

---

## 金库的运作方式

1. **选择金库**——浏览 Mezo 上的可用金库，每个金库都有不同的策略和收益来源
2. **存入资产**——将所需代币（例如 MUSD、BTC）存入金库
3. **获得凭证代币**——获得代表您在金库中所占份额的代币
4. **策略管理方优化收益**——金库策略管理方按照所描述的策略部署资产以产生收益
5. **赚取收益**——累积收益，并可选择质押以获得额外奖励

---

## 了解金库表格

| 列 | 含义 |
|--------|---------------|
| **Vault** | 金库策略的名称和描述 |
| **TVL** | 总锁仓价值（Total Value Locked）——存入金库的资产总额 |
| **APY** | 年化收益率（Annual Percentage Yield）——您的预估年回报 |
| **Reward** | 您从金库中赚取的代币 |
| **Strategist** | 管理金库策略的团队或协议 |

---

## 金库类型

### Mezo 金库

由 Mezo 构建和管理的金库，例如 [MUSD Savings Vault](/docs/zh/docs/users/mezo-earn/vaults/musd-savings-vault) 和 [USDC Lending Vault](/docs/zh/docs/users/mezo-earn/vaults/usdc-lending-vault)。

### 外部金库

[Ditto MUSD Savings Vault](/docs/zh/docs/users/mezo-earn/vaults/ditto-musd-savings-vault) 在 Mezo 上接受 MUSD 存款并发行 dMUSD。Ditto Network 负责兑换、桥接以及在以太坊上向 Spark Savings 进行初始配置。赎回时会在 Mezo 上返还 MUSD，并以异步方式处理。

由合作伙伴协议（例如 August、UWI、Upshift）构建的金库，会将资产部署到它们自己的策略中。这些金库也可能以推荐横幅的形式出现在金库页面上，并链接到合作伙伴的平台进行存款。

---

## 风险

### 策略风险
每个金库部署资产的方式各不相同。存款前请先了解底层策略——有些策略的风险比其他策略更高。

### 智能合约风险
金库会与多个智能合约交互。虽然 Mezo 金库已经过审计，但所有智能合约都存在固有风险。请只存入您能够承受的金额。

### 外部金库风险
外部金库由第三方协议管理，Mezo 不控制这些策略。存款前请查看合作伙伴的文档和审计报告。
