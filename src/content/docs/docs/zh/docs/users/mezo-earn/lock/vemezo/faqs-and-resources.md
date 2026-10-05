---
title: veMEZO 常见问题与资源
description: 关于 veMEZO、锁仓、加成以及配对市场的常见问题
topic: users
---

## 常见问题

### 我可以提前解锁 MEZO 吗？

不可以。锁仓在到期前永久有效。请谨慎选择锁定期限——veMEZO 的锁定期限最长可达 4 年。

### 只持有 veMEZO 可以为 Gauge 投票吗？

可以，但仅限部分 Gauge。veMEZO 能以自身名义在 **veBTC Boost Gauge** 和 **[MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges)** 上投票，后者会将 MEZO 排放引导至 Curve、Uniswap 和 Aerodrome 上的 MUSD 流动性池。

veMEZO 无法单独做到的是在**质押 Gauge** 上投票——这需要 veBTC，而 veMEZO 在质押 Gauge 中的作用是放大 veBTC 的投票权。

### 如果我没有 veBTC，veMEZO 能做什么？

您仍然可以：

- 从每周排放中赚取 Rebase 奖励
- 为其他用户的 veBTC Boost Gauge 投票，赚取他们发布的激励

### 如何为我的 veBTC 仓位获得加成？

您可以选择以下任一方式：

1. 将自己的 MEZO 锁定为 veMEZO，并为您的 veBTC Gauge 投票
2. 在您的 veBTC Gauge 上发布激励，吸引其他人的 veMEZO 投票

详情请参阅[加成机制](/docs/zh/docs/users/mezo-earn/lock/vemezo/boost-mechanism)。

### 我可以拥有多个 veMEZO 仓位吗？

可以。每次锁定都会创建一个单独的 veMEZO NFT。如有需要，您之后可以将它们合并。

### 我可以转让我的 veMEZO 吗？

可以。veMEZO 仓位是 ERC-721 NFT，可以转让。但是，通过生产性归属（资助）创建的 veMEZO NFT，在资助仍可撤销期间，无法与其他 NFT 合并。

### 如果我不投票，我的 veMEZO 会怎样？

您仍然可以赚取 Rebase 奖励。但是，除非您分配 veMEZO 权重，否则您不会从 veBTC Boost Gauge 中赚取任何激励。

### 为什么我的加成低于预期？

加成公式取决于您在 veBTC 总量和 veMEZO 总量中所占的相对份额。如果（Mezo 所有用户的）锁定总量增加，您的份额就会减少，您的加成也会随之降低——即使您持有的绝对数量没有变化。
