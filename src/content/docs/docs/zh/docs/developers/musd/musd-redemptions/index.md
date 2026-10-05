---
title: MUSD 赎回
topic: developers
---

# 如何在 Mezo 上赎回 MUSD

## 快速概览
赎回允许您销毁 1 MUSD，以获得价值 `$1` 的 BTC（需扣除 0.75% 的赎回费和 Gas 费）。系统会从抵押率高于 110% 且最低的 Trove 开始赎回。如果 MUSD 数量超过单个 Trove 的额度，系统将按抵押率从低到高的顺序继续赎回。

抵押率低于 110% 的 Trove 可被清算，且不能被赎回。

---

## 前提条件

开始之前，请确认：

1. **系统正在接受赎回**：前往 TroveManager →“Read as Proxy”→ 使用当前 BTC 价格调用 `getTCR()`。结果必须 ≥ `1100000000000000000`（110%）
2. **您持有 MUSD**：在 MUSD 代币合约上查看您的余额
3. **获取当前 BTC 价格**：前往 PriceFeed →“Read as Proxy”→ 调用 `fetchPrice()`
4. **获取正确的合约地址**：请查看页面底部的主网和测试网合约地址。

---

## 分步说明

### 1. 前往 TroveManager 合约
在区块浏览器中打开 TroveManager 合约，然后点击 **“Write as Proxy”** 标签页。

### 2. 找到函数 11：`redeemCollateral`

您会看到 6 个输入字段。填写方法如下：

---

## 方案 A：快速简便（Gas 较高）

如果您希望快速赎回而无需计算提示（hint），请使用此方案。

- `_amount`：[您的数量，以 wei 为单位——请参阅下方的换算]   
- `_firstRedemptionHint`：0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`：[您的钱包地址]   
- `_lowerPartialRedemptionHint`：[您的钱包地址]   
- `_partialRedemptionHintNICR`：1100000000000000000000   
- `_maxIterations`：0

**将 MUSD 换算为 Wei：**
- 100 MUSD = `100000000000000000000`
- 5,005 MUSD = `5005000000000000000000`

**公式**：您的数量 × 1000000000000000000

---

## 方案 B：使用提示（Gas 较低）

使用此方案可节省 Gas 费用。

### 第 1 步：获取赎回提示

前往 HintHelpers →“Read as Proxy”→ `getRedemptionHints()`

填写：
- `_amount`：您的数量，以 wei 为单位（与上文相同）
- `_price`：来自 PriceFeed 的当前 BTC 价格
- `_maxIterations`：50

复制返回值：
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### 第 2 步：获取位置提示

前往 SortedTroves →“Read as Proxy”→ `findInsertPosition()`

填写：
- `_NICR`：使用第 1 步中得到的 `partialRedemptionHintNICR`
- `_prevId`：您的钱包地址
- `_nextId`：您的钱包地址

复制返回值：
- `upperHint`
- `lowerHint`

### 第 3 步：调用 redeemCollateral

返回 TroveManager →“Write as Proxy”→ `redeemCollateral`

- `_amount`：[您的数量，以 wei 为单位]
- `_firstRedemptionHint`：[来自第 1 步]
- `_upperPartialRedemptionHint`：[来自第 2 步的 upperHint]
- `_lowerPartialRedemptionHint`：[来自第 2 步的 lowerHint]
- `_partialRedemptionHintNICR`：[来自第 1 步]
- `_maxIterations`：50

---

## 您将获得什么

**示例：赎回 100 MUSD**
- 您销毁：100 MUSD
- 您获得：价值 `$99.25` 的 BTC（0.75% 的费用归协议所有）

**公式**：（您的 MUSD 数量 ÷ BTC 价格）× 0.9925 = 获得的 BTC

---

## 常见问题

**"Cannot redeem when TCR < MCR"**
→ 系统 TCR 低于 110%。请等待其恢复。

**"Unable to redeem any amount"**
→ 这可能由以下几个原因导致：
- 没有抵押率高于 110% 的可用 Trove
- 提示已过期（特别是 NICR 提示）
- 该赎回数量会使目标 Trove 的债务低于 1,800 MUSD 的最低债务要求
- 最大迭代次数相对于赎回规模设置得过低

**交易 Gas 耗尽**
→ 将 `_maxIterations` 降低至 10，或拆分为多笔较小的赎回。

**交易意外回滚**
→ 重新获取提示后再试一次。可能有人在您之前完成了赎回。

**收到的数量少于预期**
→ 请检查您交易中的 `Redemption` 事件。如果最后一个 Trove 的债务会低于 1,800 MUSD 的最低要求，部分 MUSD 可能已被退回。

---

## 提示

- **在赎回前立即生成提示**——如果其他人先完成赎回，提示就会过期
- **小额赎回请使用方案 A**（< `$10,000`）——较高的 Gas 成本可以忽略不计
- **大额赎回请使用方案 B**——大额赎回时可显著节省 Gas
- **赎回规模越大，maxIterations 应设置得越高**：
  - 小规模（< 10 个 Trove）：10
  - 中等规模（10-30 个 Trove）：50
  - 大规模（30 个以上 Trove）：100

---

## 合约地址

| 合约 | 主网 | 测试网 |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| MUSD 代币 | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

所有地址均为代理合约。请始终使用“Read as Proxy”或“Write as Proxy”标签页。

---

## 需要帮助？

- 在区块浏览器上查看您的交易，以了解相关事件和错误信息
- 加入我们的 Discord 并提交工单：https://discord.com/invite/mezo
