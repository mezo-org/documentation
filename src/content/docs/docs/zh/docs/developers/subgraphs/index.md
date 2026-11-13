---
title: 使用 Goldsky 部署子图
description: 使用 Goldsky 基础设施在 Mezo 上部署和管理子图的指南。
topic: developers
---
本指南介绍如何使用 Goldsky 的基础设施为 Mezo 协议部署和管理子图。子图可以通过 GraphQL API 高效查询区块链数据。

## 概览

子图提供：
- **索引数据**：快速访问区块链数据
- **GraphQL API**：灵活的查询接口
- **实时更新**：数据实时同步
- **自定义逻辑**：转换和聚合链上数据

## 仓库结构

Mezo 子图仓库通常包含：

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**：GraphQL 模式定义
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**：子图清单
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**：映射逻辑（AssemblyScript）
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**：合约 ABI
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**：单元测试

## 开发环境设置

### 前提条件

- Node.js 18+（具体版本请查看仓库中的 `.nvmrc`）
- npm 或 yarn 包管理器
- Git
- Graph CLI
- Goldsky 账户

### 安装

1. 克隆子图仓库：
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. 安装依赖项：
```bash
npm install
# or
yarn install
```

3. 安装 Graph CLI：
```bash
npm install -g @graphprotocol/graph-cli
```

## 子图开发

### 模式定义

在 `schema.graphql` 中定义数据模型：

```graphql
type Token @entity {
  id: ID!
  name: String!
  symbol: String!
  decimals: Int!
  totalSupply: BigInt!
}

type Transfer @entity {
  id: ID!
  from: Bytes!
  to: Bytes!
  amount: BigInt!
  timestamp: BigInt!
  transactionHash: Bytes!
}
```

### 子图清单

在 `subgraph.yaml` 中配置子图：

```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: MUSDToken
    network: mezo-mainnet
    source:
      address: "0x..." # Contract address
      abi: MUSD
      startBlock: 0
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Token
        - Transfer
      abis:
        - name: MUSD
          file: ./abis/MUSD.json
      eventHandlers:
        - event: Transfer(indexed address,indexed address,uint256)
          handler: handleTransfer
      file: ./src/mapping.ts
```

### 映射逻辑

在 `src/mapping.ts` 中实现事件处理函数：

```typescript
import { Transfer as TransferEvent } from "../generated/MUSDToken/MUSD"
import { Transfer, Token } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTransfer(event: TransferEvent): void {
  // Create transfer entity
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.amount = event.params.value
  transfer.timestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash
  
  transfer.save()
  
  // Update token entity
  let token = Token.load("1")
  if (token == null) {
    token = new Token("1")
    token.name = "Mezo USD"
    token.symbol = "MUSD"
    token.decimals = 18
    token.totalSupply = BigInt.fromI32(0)
  }
  
  token.save()
}
```

### 代码生成

根据模式生成 TypeScript 类型：

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## 测试

### 单元测试

为映射编写单元测试：

```typescript
import { describe, test, assert } from "matchstick-as/assembly/index"
import { handleTransfer } from "../src/mapping"
import { createTransferEvent } from "./utils"

describe("MUSD Transfer", () => {
  test("Should create transfer entity", () => {
    let event = createTransferEvent(
      "0xfrom",
      "0xto",
      BigInt.fromI32(1000)
    )
    
    handleTransfer(event)
    
    assert.fieldEquals(
      "Transfer",
      event.transaction.hash.toHex(),
      "amount",
      "1000"
    )
  })
})
```

运行测试：

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## 使用 Goldsky 部署

### 前提条件

1. **创建 Goldsky 账户**：在 [goldsky.com](https://goldsky.com) 注册
2. **安装 Goldsky CLI**：
```bash
npm install -g @goldsky/cli
```

3. **身份验证**：
```bash
goldsky login
```

### 部署流程

1. **部署子图**：
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **监控部署**：
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### 配置

创建 Goldsky 配置文件：

```json
{
  "version": "1",
  "name": "musd-subgraph",
  "schema": "./schema.graphql",
  "dataSources": [
    {
      "name": "MUSD",
      "network": "mezo-mainnet",
      "address": "0x...",
      "startBlock": 0
    }
  ]
}
```

## 查询子图

### GraphQL 查询

部署完成后，即可查询您的子图：

```graphql
# Get recent transfers
{
  transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
    id
    from
    to
    amount
    timestamp
    transactionHash
  }
}

# Get token information
{
  token(id: "1") {
    name
    symbol
    decimals
    totalSupply
  }
}

# Filter transfers by address
{
  transfers(where: { from: "0x..." }) {
    id
    to
    amount
    timestamp
  }
}
```

### 客户端集成

在您的 dApp 中集成子图查询：

```typescript
import { request, gql } from 'graphql-request'

const endpoint = 'https://api.goldsky.com/api/public/project_...'

const query = gql`
  {
    transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      from
      to
      amount
      timestamp
    }
  }
`

async function getTransfers() {
  const data = await request(endpoint, query)
  return data.transfers
}
```

### Apollo Client 集成

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.goldsky.com/api/public/project_...',
  cache: new InMemoryCache()
})

const GET_TRANSFERS = gql`
  query GetTransfers {
    transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      from
      to
      amount
      timestamp
    }
  }
`

client.query({ query: GET_TRANSFERS })
  .then(result => console.log(result))
```

## 监控与维护

### 健康检查

监控子图的健康状况：

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### 更新子图

部署新版本：

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### 错误处理

常见问题及解决方法：

1. **同步延迟**：检查 RPC 端点的健康状况
2. **处理函数失败**：检查映射逻辑和日志
3. **模式不匹配**：确保模式与部署一致

## 最佳实践

### 模式设计

1. **实体**：使用有意义的实体名称
2. **关系**：定义清晰的实体关系
3. **索引**：为经常查询的字段建立索引
4. **不可变性**：为实体使用不可变的 ID

### 映射逻辑

1. **错误处理**：妥善处理空值
2. **Gas 效率**：尽量减少实体的加载和保存次数
3. **一致性**：保持数据一致性
4. **测试**：编写全面的单元测试

### 性能

1. **起始区块**：设置合适的起始区块
2. **批处理**：批量处理事件
3. **缓存**：有效利用实体缓存
4. **分页**：在查询中正确实现分页

## 其他资源

- **[Goldsky 文档](https://docs.goldsky.com/)** - Goldsky 平台文档
- **[The Graph 文档](https://thegraph.com/docs/)** - 子图开发指南
- **[GraphQL 文档](https://graphql.org/)** - GraphQL 查询语言
- **[AssemblyScript 文档](https://www.assemblyscript.org/)** - 映射语言

:::note
如需详细的子图模式、部署配置以及各协议专用的映射，请参阅 Mezo 组织下的各个子图仓库。
:::

## 支持

获取子图开发支持：
- 加入 [Mezo Discord](https://discord.com/invite/mezo)
- 查看 GitHub 上子图仓库的 issue
- 查阅[常见问题](/docs/zh/docs/developers/getting-started/FAQs)
- 联系 [Goldsky 支持](https://goldsky.com/support)
