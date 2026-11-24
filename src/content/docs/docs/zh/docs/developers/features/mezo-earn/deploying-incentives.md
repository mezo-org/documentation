---
title: 部署激励
description: 如何在 Mezo Earn 上为白名单内的流动性池资产创建投票 Gauge。
topic: developers
---

所有 Mezo 资产（BTC、MEZO 以及主网合约代币）均已加入 PoolsVoter 合约的白名单。现在，任何人都可以为两种资产均在白名单内的流动性池创建投票 Gauge。

如需查看可作为激励添加到 Gauge 上的白名单代币地址完整列表，请参阅[合约参考](/docs/zh/docs/users/resources/contracts-reference#portal-合约地址)。

## 创建流动性池 Gauge

1. 前往 [Mezo Explorer 上的 PoolsVoter 合约](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03)并连接您的钱包。

2. 点击 **Contract** 标签页，然后选择 **Write proxy**，再选择 `createPoolGauge`。

3. 对于 `_poolFactory` 参数，请使用以下地址之一：
   - **基础池：** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **CL 池：** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. 在 `_pool` 下输入流动性池地址。

5. 执行交易。如果该流动性池已列在流动性池概览中，它也应开始出现在投票界面中。
