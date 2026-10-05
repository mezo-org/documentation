---
title: Enclaves
description: 机构 BTC 如何通过 Enclave（隔离区）存入 Mezo
topic: users
---

Mezo Enclaves 是一种面向机构的存款途径，可让有监管托管要求的机构无需使用标准跨链桥即可在 Mezo 上部署 BTC。

## Enclave 的运作方式

受托管法规约束的机构可能无法通过 Mezo 的标准跨链桥存入 BTC。Enclave 解决了这一问题：BTC 可以在 Mezo 上得到表示，而底层比特币仍保留在符合监管要求的托管安排中。

要点：

- 每个 Enclave 都需由 Mezo 治理多签单独加入白名单
- Enclave 存款以相关法律协议为支撑，这些协议规定了桥接金额和使用限制
- 所有 Enclave 存款仍由比特币链上真实的比特币 UTXO 提供支持

## 验证 Enclave 的 BTC 支持

每笔 Enclave 存款都由比特币区块链上的 UTXO 提供支持。这些 UTXO 记录在三方跨链桥存款交易中，并保存在链上状态里，这意味着底层 BTC 支持是透明且可验证的。

开发者可以使用 `getTripartyUtxos` 函数查询 Enclave 的 UTXO 数据，以验证任意 Enclave 仓位背后的比特币支持。有关技术细节，请参阅[开发者跨链桥文档](/docs/zh/docs/developers/bridge/mezo-bridge)。
