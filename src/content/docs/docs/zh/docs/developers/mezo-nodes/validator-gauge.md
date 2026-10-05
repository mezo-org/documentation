---
title: 验证者 Gauge
description: 面向验证者的指南，介绍如何管理奖励受益人、为验证者 Gauge 投票以及领取 MEZO 奖励。
topic: developers
---

验证者每周都可以赚取 MEZO 排放，但前提是其验证者 Gauge 在每个周期（epoch）内都获得了投票。如果其 Gauge 没有获得投票，验证者将不会获得任何排放。本指南介绍如何管理奖励受益人、为您的验证者 Gauge 投票以及领取奖励。

## 概览

每个验证者在 [ValidatorsVoter 合约](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)中都有一个关联的 Gauge。领取奖励时，需通过 ValidatorsVoter 合约并指定该验证者的 Gauge 地址。

每个 Gauge 都有唯一一个获授权领取奖励的受益人地址。默认情况下，受益人是在[权威证明（PoA）合约](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)中注册的验证者运营者地址。

:::note[奖励释放时间表]
已分配的周期奖励并不能立即领取——它们会在该周期内逐步释放。例如，如果奖励在第 N 个周期开始时分配给某个 Gauge，那么第 N 个周期的奖励将在该周期结束时 100% 可供领取。
:::

## 更改奖励受益人

验证者可以指定另一个地址来接收 MEZO 奖励。这有助于将运营职能与资金管理职能分开。

更改奖励受益人的步骤：

1. **连接您的运营者地址钱包**
   使用与您的验证者运营者地址关联的钱包。

2. **确定您的 Gauge 地址**
   以您的运营者地址作为参数，调用 `ValidatorsVoter.validatorToGauge()`。

3. **切换受益人**
   以新的受益人地址作为参数，调用 `Gauge.switchRewardsBeneficiary()`。
   - 合约：您专属的 Gauge 合约（在第 2 步中获取）
   - 方法：`switchRewardsBeneficiary(address newBeneficiary)`

4. **使用新受益人领取**
   更改受益人后，之后的所有领取操作都必须使用新的受益人钱包执行。

:::caution[最佳实践]
建议在切换到新受益人之前，先使用当前受益人领取所有可领取的奖励。如果您在仍有未领取奖励的情况下切换受益人，这些奖励将仍与旧受益人地址关联，必须单独领取。
:::

## 为您的验证者 Gauge 投票

投票是赚取 MEZO 排放的关键——在某个周期内未获得任何投票的验证者 Gauge，将不会获得该周期的任何奖励。验证者可以为自己的 Gauge 投票，以引导 MEZO 排放。验证者 Gauge 的投票与其他 Mezo Earn Gauge 的投票**相互独立**。例如，如果您已经用 100% 的投票权为某个池 Gauge 投票，您仍然可以用 100% 的投票权为您的验证者 Gauge（或其他验证者的 Gauge）投票。

veBTC 是用于投票的核心资产。veMEZO 可用于为您的投票权提供加成。投票一旦投出，就会自动延续到后续周期，除非被明确重置。

:::note[对您的仓位执行 Poke]
您可能需要在投票前对仓位执行 Poke，以确保其处于最新状态。如果您的 veBTC 投票权有所增加（例如因追加锁仓），对现有投票执行 Poke 也会有所帮助，因为它会更新您的投票权重以反映新的投票权。详情请参阅 [Poke 文档](/docs/zh/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke)。
:::

### 如何投票

1. **确定您的验证者 Gauge**
   以您的验证者地址作为参数，调用 [ValidatorsVoter 合约（Read Proxy）](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy)上的 `validatorToGauge` 函数。

2. **投出您的投票**
   调用 [ValidatorsVoter 合约（Write Proxy）](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy)上的 `vote` 函数。`tokenId` 参数是您的 veBTC NFT ID。如果您只为自己的验证者 Gauge 投票，可以将权重设置为 `100`（代表 100% 的投票权）。

### 为您的 Gauge 提供激励

验证者可以在 [Matchbox](https://matchbox.markets/) 等平台上为其 veBTC Boost Gauge 提供激励，以吸引 veMEZO 投票，从而为其 veBTC 投票权提供加成。
随后，可以利用加成后的 veBTC 投票权将更多投票引导至验证者 Gauge，从而增加 MEZO 排放。

Mezo Earn 还包含一个独立的验证者 Gauge 激励机制，但该特定流程目前在 Matchbox 上尚不可用。

## 领取奖励

要领取您的 MEZO 奖励，请按以下步骤操作：

1. **连接您的运营者地址钱包**
   使用与您的验证者运营者地址关联的钱包。

2. **确定您的 Gauge 地址**
   以您的运营者地址作为参数，调用 `ValidatorsVoter.validatorToGauge()`。
   - 合约：[ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - 方法：`validatorToGauge(address validator)`

3. **领取奖励**
   以您的 Gauge 地址作为参数，调用 `ValidatorsVoter.claimRewards()`。
   - 合约：[ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - 方法：`claimRewards(address gauge)`

## 合约地址

- **ValidatorsVoter**：[`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **PoA 合约**：[`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## 其他资源

- [Mezo Earn 概览](/docs/zh/docs/users/mezo-earn/overview/)
- [Mezo 博客](https://mezo.org/blog/tag/features/)
