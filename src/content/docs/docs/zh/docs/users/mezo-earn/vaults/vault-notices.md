---
title: 金库公告
description: 当前 Mezo 金库的关停与迁移公告
topic: users
---

本页列出 Mezo Earn 上各金库当前的迁移与关停公告。

| 金库                 | 状态                                                       | 您需要做什么                               |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| **BTC Vault**        | 正在关停。存款已关闭。                                     | 请在 **2026 年 10 月 28 日**前提取         |
| **cbBTC Vault**      | 存款已关闭。向 BTC Vault 的迁移已结束。                    | 提取您在 cbBTC Vault 中的剩余资金          |
| **Stablecoin Vault** | 存款已暂停，金库正在关停                                   | 请在 **2026 年 7 月 31 日**前发起提取      |

:::caution[提取需要时间]
Stablecoin Vault 的提取不是即时到账的。提取采用提取队列，处理可能需要大约 48 小时。
:::

## BTC Vault 关停

与 Mellow 和 Sense Capital 共同运营的 BTC Vault（mbhBTC）正在关停。存款已关闭。请在 **2026 年 10 月 28 日**前提取您的资金。

提取需要排队，因此请尽早开始。您必须在 10 月 28 日前提交提取申请；处理和领取可以在此之后进行。提交提取申请并不会立即将资金返还到您的钱包。

### 从 BTC Vault 提取

1. 打开 [BTC Vault](https://mezo.org/earn/vaults/0xE2232789D4cF5bb1ffaDA1a105Cc59B18d639318)，连接持有您仓位的钱包。
2. 选择 **Withdraw**，选择金额并按照交易提示操作。
3. 等待您的提取申请处理完成。
4. 待代币准备就绪后，返回金库页面领取您的代币。

如果您之前已将 cbBTC Vault 份额迁移至 BTC Vault，这些说明同样适用于该仓位。此次关停不提供替代金库。

### 查找您的仓位

关停公告发布后，BTC Vault 仅会对仍持有剩余仓位的钱包显示在金库列表中。持有者在 10 月 28 日之后仍可看到该金库，包括提取处于待处理或可领取状态期间。您也可以通过上方链接直接打开该金库。

### 10 月 28 日之后的帮助

如需在 10 月 28 日之后获得提取帮助，请联系 [Discord 上的 Mellow 支持](https://discord.com/invite/mellow)。

## cbBTC Vault 提取

cbBTC Vault 的存款已关闭，向 BTC Vault 的迁移已经结束。如果您仍持有 cbBTC Vault 份额（mbhcbBTC），请从 cbBTC Vault 中提取您的剩余资金。应用中仍可进行提取。

打开 [Mezo Vaults](https://mezo.org/earn/vaults)，连接持有您 cbBTC Vault 仓位的钱包，然后在 cbBTC Vault 页面上选择 **Withdraw**。

## Stablecoin Vault 关停

由 Lhava 基于 Mellow 金库框架运营的 Stablecoin Vault 正在关停。存款已经暂停。

如果您在该金库中持有仓位，请在 **2026 年 7 月 31 日**前发起提取。该金库支持以 mUSDC、mUSDT 或 MUSD 注资的仓位，并发行 **msvUSD** 凭证代币。无论您的仓位是以 mUSDC、mUSDT 还是 MUSD 注资，提取均以 mUSDC 处理。

### 如何提取

1. 前往 [Mezo Vaults](https://mezo.org/earn/vaults)，打开 **Stablecoin Vault**。
2. 选择 **Withdraw**，并按照针对您仓位的提示操作。
3. 确认交易，并为提取队列预留大约 48 小时的处理时间。

2026 年 7 月 31 日之后，Stablecoin Vault 将不再显示在应用中。Mellow 将管理剩余资金并处理逾期提取。如果您错过了提取窗口，请[在 Mellow 的 Discord 中提交支持工单](https://discord.com/invite/mellow)。

## 稳定币的下一步去向

在转移资金之前，请在应用中比较所支持的资产、策略、提取条款和当前利率。利率是浮动的，每个选项都存在智能合约风险和策略风险。

| 选项                          | 运作方式                                                                                                            | 需要考虑的事项                                                                                                                                                                                                     | 访问                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **MUSD Savings Vault**        | 存入 MUSD 并获得 sMUSD。收益来自 MUSD 协议活动，并体现在 sMUSD 汇率中。                                             | 单一资产选项，无提取费，也无时间锁。利率随协议活动而变化。质押 sMUSD 会改变您赚取奖励的方式。                                                                                                                     | [查看 MUSD Savings Vault](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)       |
| **USDC Lending Vault**        | 将 mUSDC 存入 Morpho BTC/mUSDC 借贷市场。赚取借款人支付的利息，或质押以赚取 MEZO 排放。                             | 请查看实时利率、可提取的流动性以及借贷风险。当资金利用率较高时，提取可能会受到限制。请参阅 [USDC Lending Vault](/docs/zh/docs/users/mezo-earn/vaults/usdc-lending-vault) 指南。                                   | [查看 USDC Lending Vault](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)       |
| **mUSDC/MUSD 稳定型 CL 池**     | 在所选价格区间内提供 mUSDC 和 MUSD 流动性，以赚取交易手续费和任何可用的激励。                                       | 需要主动管理价格区间。超出区间的仓位将停止赚取费用，流动性提供者还面临无常损失和智能合约风险。                                                                                                                     | [查看 mUSDC/MUSD 稳定型 CL 池](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a)     |

在 [Mezo Pools](https://mezo.org/earn/pools) 和 [Mezo Vaults](https://mezo.org/earn/vaults) 总览页面上查看更多赚取收益的方式。
