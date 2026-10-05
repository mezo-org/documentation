---
title: Ditto MUSD Savings Vault
description: 在 Mezo 上存入 MUSD 并获得 dMUSD，参与一个初始配置于 Spark Savings 的自动化跨链金库
topic: users
---

Ditto MUSD Savings Vault 为 MUSD 持有者提供了另一种通过 Mezo Earn 让资产发挥作用的方式。在 Mezo 上存入 MUSD，即可获得 **dMUSD**——一种代表您金库仓位的凭证代币。Ditto Network 负责金库背后的兑换、桥接和资产配置，初始配置于**以太坊上的 Spark Savings**。

您在 Mezo 上持有金库仓位，而 Ditto 负责管理在另一条链上获取底层收益所需的各项步骤。

浏览 [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)。

## 运作原理

1. **在 Mezo 上存入 MUSD。** 您将获得代表您金库仓位的 dMUSD。
2. **Ditto 配置资产。** 运营方负责兑换并桥接到以太坊，然后配置到 Spark Savings。
3. **底层策略赚取收益。** 您的 dMUSD 代表对金库资产的索取权。回报取决于底层策略，且是浮动的。
4. **申请赎回以退出。** Ditto 会反向执行上述流程，并在提款处理完成后在 Mezo 上返还 MUSD。

### 自动化的运作方式

多个运营方会在签名前独立验证拟执行的金库操作。执行需要达到最低数量的运营方批准，并且智能合约会在链上执行额外检查。金库估值（资产净值，即 NAV）也会通过经签名的流程发布到链上。

这些检查用于约束自动化执行；它们并不能消除智能合约、跨链桥、运营方或策略方面的风险。

## 金库详情

| 参数               | 值                                                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 存入资产           | Mezo 上的 MUSD                                                                                                                                                                 |
| 凭证代币           | dMUSD                                                                                                                                                                          |
| 金库运营方         | Ditto Network                                                                                                                                                                  |
| 初始配置           | 以太坊上的 Spark Savings                                                                                                                                                       |
| 赎回资产           | Mezo 上的 MUSD                                                                                                                                                                 |
| 提款               | 异步处理——请预留处理时间                                                                                                                                                       |
| 当前 APY           | 截至 2026 年 9 月 29 日约为 3.60%，与 Spark Savings 保持一致——浮动利率；请查看[金库页面](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

过往表现不代表当前表现，也不保证未来回报。存款前，请在应用中查看当前利率、任何费用、提款条款和风险。

## 如何存款

1. 打开 [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)，并在 Mezo 上连接您的钱包。
2. 查看策略、当前利率和提款条款。
3. 输入您要存入的 MUSD 数量，并按照应用中的授权和存款提示操作。
4. 在钱包中确认所需的交易。您的 dMUSD 凭证代币即代表您的金库仓位。

## 提款

通过金库页面申请赎回，并按照提示处理您的 dMUSD 仓位。Ditto 会解除底层配置，根据需要进行桥接和兑换，然后在 Mezo 上返还 MUSD。

**提款以异步方式处理。** 提交赎回申请并不意味着 MUSD 会立即出现在您的钱包中。请为底层策略和跨链操作预留处理时间，并按照应用中显示的任何完成步骤操作。处理时间可能有所不同；请勿假定存在固定的提款时间窗口。

如果您在处理待完成的赎回时需要帮助，请联系 [Mezo 支持](/docs/zh/docs/users/resources/support)，并提供您的钱包地址、交易哈希以及申请时间。

## dMUSD 与 sMUSD 的区别

Ditto 金库是独立于 Mezo 原生 [MUSD Savings Vault](/docs/zh/docs/users/mezo-earn/vaults/musd-savings-vault) 的另一款产品：

- **dMUSD：** 由 Ditto 运营的金库中的仓位，初始配置于以太坊上的 Spark Savings。赎回时通过异步流程在 Mezo 上返还 MUSD。
- **sMUSD：** Mezo 原生储蓄金库中的仓位，从 MUSD 协议活动中赚取收益。

这两种凭证代币代表不同的金库。在存款或赎回之前，请查看各个金库的具体条款。

## 风险

- **智能合约风险：** 金库、自动化合约或底层协议中的漏洞或攻击可能导致资金损失。
- **跨链风险：** 兑换和桥接会增加依赖项。跨链桥故障、网络延迟或不利的执行情况都可能影响仓位和赎回流程。
- **策略与稳定币风险：** 回报取决于 Spark Savings 以及策略所使用的资产。利率可能发生变化，稳定币也可能脱锚。
- **运营方风险：** 处理流程依赖于足够的运营方批准和成功执行。运营方停机或故障可能导致金库操作延迟。
- **提款风险：** 资产必须先从底层配置中释放出来并返回 Mezo。在申请赎回后，您可能无法立即取用您的 MUSD。

## 链接与资源

- [Mezo 上的 Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Ditto Network 文档](https://docs.dittonetwork.io/)
- [Spark Savings 文档](https://docs.spark.finance/products/spark-savings)
- [Mezo 支持](/docs/zh/docs/users/resources/support)
