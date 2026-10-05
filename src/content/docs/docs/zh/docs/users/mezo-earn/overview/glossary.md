---
title: 术语表
description: Mezo Earn 相关术语表
topic: users
---

以下是与 Mezo Earn 系统相关的术语列表。

---

## veBTC

投票托管（vote-escrowed）BTC。一种代表已锁定比特币的 NFT，在 Mezo Earn 中提供基础投票权（1x 倍数）和赚取费用的权利。投票权重在锁定期内线性衰减。最长锁定期限为 28 天。

## veMEZO

投票托管（vote-escrowed）MEZO。一种代表已锁定 MEZO 代币的 NFT，可将 veBTC 的投票权最高提升至 5x，并能以自身名义在 veBTC Boost Gauge 和 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges) 上投票。它本身不具备治理权重，且没有 veBTC 就无法在质押 Gauge 上投票。最长锁定期限为 4 年。

## 加成

当 veMEZO 投票指向某个 veBTC 仓位时，应用于该仓位的倍数。没有加成时，veBTC 以 1x 运作；获得最大加成时，veBTC 以 5x 运作。加成取决于您在系统中 veBTC 总量和 veMEZO 总量中所占的相对份额。

## 加成后权重

veBTC 与 veMEZO 配对后的合并投票权重，计算方式为您的 veBTC 权重乘以您的加成倍数（介于 1x 和 5x 之间）。加成后权重决定您可获得的费用份额以及您对排放的影响力。

## 周期

管理投票和奖励分配的 7 天循环。每个周期从周四 00:00 UTC 开始。

## Gauge

根据投票接收并分配奖励的智能合约。某个 Gauge 获得的投票权重越多，它在该周期内获得的奖励份额就越大。

## 锁定

将 BTC 或 MEZO 投入一段固定期限，以获得 veBTC 或 veMEZO 的行为。锁定期限越长，初始投票权重越高。

## 质押 Gauge

与某种质押代币（如 LP 代币或 MUSD 储蓄凭证）绑定的 Gauge。质押者赚取 MEZO 排放，投票者赚取交易手续费。

## veBTC Boost Gauge

附属于特定 veBTC NFT 的 Gauge。veMEZO 持有者在这些 Gauge 上投票，为该 veBTC 仓位提供加成，以换取激励。

## 非质押 Gauge

没有质押代币、使用 veMEZO 投票的 Gauge。其排放会被发送到该 Gauge 指定的目的地，而不是支付给 Mezo 上的质押者。在非质押 Gauge 上投票独立于 veBTC Gauge 投票，也独立于加成配对。

## MEZO Gauge

一种非质押 Gauge，将 MEZO 排放引导至 Mezo 之外的 MUSD 流动性池——以太坊上的 Curve 和 Uniswap，以及 Base 上的 Aerodrome。请参阅 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges)。

## 投票权重

某个仓位在为 Gauge 投票时所具有的影响力。对于 veBTC，计算方式为锁定的 BTC 乘以剩余锁定期限，再除以最长锁定期限。对于 veMEZO，适用相同公式，但最长锁定期限为 4 年。

## 衰减

随着锁仓临近到期，投票权重逐渐减少的过程。可以通过延长锁定期限来重置。

## Poke

刷新 veBTC 仓位加成后权重的交易。在 veMEZO 投票发生变化、延长锁定期限或追加 BTC 后，都需要执行 Poke。如果不执行 Poke，加成变化将不会生效。

## 配对市场

一种经济机制：veBTC 持有者可以通过在其 Boost Gauge 上发布激励来吸引 veMEZO 投票，veMEZO 持有者则可以通过为激励有吸引力的 Gauge 投票来赚取收益。

## 激励

发布在 Gauge 上用于吸引投票的奖励。协议或用户存入激励（可以是任意 ERC-20 代币），以将投票权吸引到特定 Gauge。

## Rebase

向 veMEZO 持有者进行的反稀释分配。当锁仓比率（veMEZO 供应量 / MEZO 总供应量）较低时，更大比例的排放将用于 Rebase，从而保护早期锁仓者免遭稀释。

## Splitter

在两个目的地之间（例如验证者与生态系统）分配排放的合约。分配比例目前是固定的，并已通过治理锁定。

## MUSD

Mezo 的比特币支持的稳定币。用户可以用 BTC 作为抵押品借入 MUSD。

## MUSD Savings Rate Gauge

MUSD 储蓄金库的质押 Gauge。将 MUSD 存入储蓄金库的用户可以质押其凭证代币来赚取 MEZO 排放，而为该 Gauge 投票的投票者则赚取 MUSD 收益。

## 排放

每个周期分配给质押 Gauge、验证者和 veMEZO 持有者（以 Rebase 形式）的新 MEZO 代币。排放遵循减半计划：第 0–2 年年化 25%，第 8 年后逐步降至约 2%。

## Chain Splitter

排放层级中的第一个 Splitter。控制分配给验证者的排放比例（初始为 20%）与分配给系统其余部分的比例。

## Ecosystem Splitter

第二个 Splitter。将非验证者排放引导至质押 Gauge。该比例目前是固定的，并已通过治理锁定。
