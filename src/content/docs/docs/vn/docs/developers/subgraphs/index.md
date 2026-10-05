---
title: Triển khai subgraph với Goldsky
description: Hướng dẫn triển khai và quản lý subgraph trên Mezo bằng hạ tầng của Goldsky.
topic: developers
---
Hướng dẫn này trình bày cách triển khai và quản lý subgraph cho các giao thức của Mezo bằng hạ tầng của Goldsky. Subgraph giúp truy vấn dữ liệu blockchain hiệu quả thông qua API GraphQL.

## Tổng quan

Subgraph mang lại:
- **Dữ liệu được lập chỉ mục**: Truy cập nhanh vào dữ liệu blockchain
- **API GraphQL**: Giao diện truy vấn linh hoạt
- **Cập nhật theo thời gian thực**: Đồng bộ dữ liệu trực tiếp
- **Logic tùy chỉnh**: Chuyển đổi và tổng hợp dữ liệu onchain

## Cấu trúc kho mã

Các kho mã (repository) subgraph của Mezo thường gồm:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: Định nghĩa schema GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: Manifest của subgraph
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: Logic mapping (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABI của hợp đồng
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: Unit test

## Thiết lập môi trường phát triển

### Điều kiện tiên quyết

- Node.js 18+ (xem tệp `.nvmrc` của kho mã để biết phiên bản chính xác)
- Trình quản lý gói npm hoặc yarn
- Git
- Graph CLI
- Tài khoản Goldsky

### Cài đặt

1. Clone kho mã subgraph:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Cài đặt các gói phụ thuộc:
```bash
npm install
# or
yarn install
```

3. Cài đặt Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Phát triển subgraph

### Định nghĩa schema

Định nghĩa các mô hình dữ liệu của bạn trong `schema.graphql`:

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

### Manifest của subgraph

Cấu hình subgraph của bạn trong `subgraph.yaml`:

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

### Logic mapping

Triển khai các trình xử lý sự kiện (event handler) trong `src/mapping.ts`:

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

### Sinh mã

Sinh các kiểu TypeScript từ schema của bạn:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Kiểm thử

### Unit test

Viết unit test cho các mapping của bạn:

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

Chạy test:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Triển khai với Goldsky

### Điều kiện tiên quyết

1. **Tạo tài khoản Goldsky**: Đăng ký tại [goldsky.com](https://goldsky.com)
2. **Cài đặt Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Xác thực**:
```bash
goldsky login
```

### Quy trình triển khai

1. **Triển khai subgraph**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Theo dõi quá trình triển khai**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Cấu hình

Tạo tệp cấu hình Goldsky:

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

## Truy vấn subgraph

### Truy vấn GraphQL

Sau khi triển khai, hãy truy vấn subgraph của bạn:

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

### Tích hợp phía client

Tích hợp các truy vấn subgraph vào dApp của bạn:

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

### Tích hợp Apollo Client

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

## Giám sát và bảo trì

### Kiểm tra tình trạng

Giám sát tình trạng hoạt động của subgraph:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Cập nhật subgraph

Triển khai phiên bản mới:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Xử lý lỗi

Các sự cố thường gặp và cách khắc phục:

1. **Độ trễ đồng bộ**: Kiểm tra tình trạng của endpoint RPC
2. **Handler bị lỗi**: Xem lại logic mapping và log
3. **Schema không khớp**: Đảm bảo schema khớp với bản triển khai

## Các phương pháp hay nhất

### Thiết kế schema

1. **Entity**: Đặt tên entity có ý nghĩa
2. **Quan hệ**: Định nghĩa rõ ràng quan hệ giữa các entity
3. **Lập chỉ mục**: Lập chỉ mục cho các trường thường được truy vấn
4. **Tính bất biến**: Dùng ID bất biến cho các entity

### Logic mapping

1. **Xử lý lỗi**: Xử lý giá trị null một cách an toàn
2. **Tối ưu gas**: Giảm thiểu số lần tải và lưu entity
3. **Tính nhất quán**: Duy trì tính nhất quán của dữ liệu
4. **Kiểm thử**: Viết unit test đầy đủ

### Hiệu năng

1. **Khối bắt đầu**: Đặt khối bắt đầu phù hợp
2. **Xử lý theo lô**: Xử lý sự kiện theo lô
3. **Bộ nhớ đệm**: Tận dụng hiệu quả bộ nhớ đệm cho entity
4. **Phân trang**: Triển khai phân trang hợp lý trong truy vấn

## Tài nguyên bổ sung

- **[Tài liệu Goldsky](https://docs.goldsky.com/)** - Tài liệu về nền tảng Goldsky
- **[Tài liệu The Graph](https://thegraph.com/docs/)** - Hướng dẫn phát triển subgraph
- **[Tài liệu GraphQL](https://graphql.org/)** - Ngôn ngữ truy vấn GraphQL
- **[Tài liệu AssemblyScript](https://www.assemblyscript.org/)** - Ngôn ngữ viết mapping

:::note
Để xem chi tiết schema subgraph, cấu hình triển khai và các mapping dành riêng cho từng giao thức, hãy tham khảo từng kho mã subgraph trong tổ chức Mezo.
:::

## Hỗ trợ

Để được hỗ trợ phát triển subgraph:
- Tham gia [Discord của Mezo](https://discord.com/invite/mezo)
- Xem các issue trong kho mã subgraph trên GitHub
- Xem [Câu hỏi thường gặp](/docs/vn/docs/developers/getting-started/FAQs)
- Liên hệ [bộ phận hỗ trợ của Goldsky](https://goldsky.com/support)
