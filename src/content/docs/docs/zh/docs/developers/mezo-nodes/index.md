---
title: Mezo 节点概览
description: 了解 Mezo 节点如何运行，以及如何为基于比特币的金融提供网络功能支持。
topic: developers
---

Mezo 节点是网络的核心组成部分，并且完全开源。[Mezo Validator Kit](./validator-kit) 会安装 [mezod 客户端](https://github.com/mezo-org/mezod)及其他所需组件，使节点能够以验证者节点、RPC 节点或种子节点的身份运行。该工具包简化了多种部署方式，例如 Docker、原生守护进程以及适用于 Kubernetes 的 Helm。

- 请在 GitHub 上查看 [mezod](https://github.com/mezo-org/mezod)。
- 使用 [Validator Kit](./validator-kit) 运行您自己的本地种子节点。

## 硬件要求

不同类型节点的硬件要求各不相同。请参阅[硬件要求](./validator-kit#硬件要求)部分，了解每种节点类型的最低要求。

## 验证者

Mezo 验证者负责运行节点，以验证交易、提议和证明新区块，并参与共识机制。Mezo 验证者必须先申请[权威证明（PoA）](./validator-kit#验证者设置)，其节点才能以验证者身份参与网络。

获得批准的验证者可以按照 [Validator Kit](./validator-kit) 的说明，了解如何运行验证者节点。

## RPC 节点

RPC 节点可用于创建本地开发端点，也可作为区块链基础设施即服务（IaaS）平台的一部分。设置种子节点的流程与验证者节点相同，但您无需申请权威证明（PoA）。

要运行 RPC 节点，请按照 [Validator Kit](./validator-kit) 设置指南操作，并额外完成 [RPC 节点](./validator-kit#rpc-节点设置)设置部分中定义的配置步骤。

## 种子节点

种子节点协助网络进行对等节点发现。设置种子节点的流程与验证者节点相同，但您无需申请权威证明（PoA）。

要运行种子节点，请按照 [Validator Kit](./validator-kit) 设置指南操作，但跳过 PoA 申请，并将节点 config.toml 文件中的 `p2p.seed_mode` 参数设置为 `true`。详情请参阅[网络种子节点](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes)部分。
