---
title: Goldsky를 사용한 서브그래프 배포
description: Goldsky 인프라를 사용해 Mezo에서 서브그래프를 배포하고 관리하는 가이드입니다.
topic: developers
---
이 가이드에서는 Goldsky 인프라를 사용해 Mezo 프로토콜용 서브그래프를 배포하고 관리하는 방법을 설명합니다. 서브그래프를 사용하면 GraphQL API를 통해 블록체인 데이터를 효율적으로 쿼리할 수 있습니다.

## 개요

서브그래프는 다음을 제공합니다.
- **인덱싱된 데이터**: 블록체인 데이터에 빠르게 접근
- **GraphQL API**: 유연한 쿼리 인터페이스
- **실시간 업데이트**: 라이브 데이터 동기화
- **사용자 지정 로직**: 온체인 데이터 변환 및 집계

## 저장소 구조

Mezo 서브그래프 저장소에는 일반적으로 다음이 포함됩니다.

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: GraphQL 스키마 정의
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: 서브그래프 매니페스트
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: 매핑 로직(AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: 컨트랙트 ABI
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: 단위 테스트

## 개발 환경 설정

### 사전 요구 사항

- Node.js 18 이상(정확한 버전은 저장소의 `.nvmrc` 확인)
- npm 또는 yarn 패키지 관리자
- Git
- Graph CLI
- Goldsky 계정

### 설치

1. 서브그래프 저장소를 클론하세요.
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. 종속성을 설치하세요.
```bash
npm install
# or
yarn install
```

3. Graph CLI를 설치하세요.
```bash
npm install -g @graphprotocol/graph-cli
```

## 서브그래프 개발

### 스키마 정의

`schema.graphql` 파일에서 데이터 모델을 정의하세요.

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

### 서브그래프 매니페스트

`subgraph.yaml` 파일에서 서브그래프를 설정하세요.

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

### 매핑 로직

`src/mapping.ts` 파일에서 이벤트 핸들러를 구현하세요.

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

### 코드 생성

스키마에서 TypeScript 타입을 생성하세요.

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## 테스트

### 단위 테스트

매핑에 대한 단위 테스트를 작성하세요.

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

테스트를 실행하세요.

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Goldsky로 배포하기

### 사전 요구 사항

1. **Goldsky 계정 만들기**: [goldsky.com](https://goldsky.com)에서 가입하세요
2. **Goldsky CLI 설치**:
```bash
npm install -g @goldsky/cli
```

3. **인증**:
```bash
goldsky login
```

### 배포 과정

1. **서브그래프 배포**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **배포 모니터링**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### 설정

Goldsky 설정 파일을 만드세요.

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

## 서브그래프 쿼리

### GraphQL 쿼리

배포가 완료되면 서브그래프를 쿼리하세요.

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

### 클라이언트 통합

dApp에 서브그래프 쿼리를 통합하세요.

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

### Apollo Client 통합

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

## 모니터링 및 유지 관리

### 상태 점검

서브그래프 상태를 모니터링하세요.

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### 서브그래프 업데이트

새 버전을 배포하세요.

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### 오류 처리

일반적인 문제와 해결 방법은 다음과 같습니다.

1. **동기화 지연**: RPC 엔드포인트 상태를 확인하세요
2. **핸들러 실패**: 매핑 로직과 로그를 검토하세요
3. **스키마 불일치**: 스키마가 배포와 일치하는지 확인하세요

## 모범 사례

### 스키마 설계

1. **엔티티**: 의미 있는 엔티티 이름을 사용하세요
2. **관계**: 엔티티 간 관계를 명확하게 정의하세요
3. **인덱싱**: 자주 쿼리하는 필드를 인덱싱하세요
4. **불변성**: 엔티티에 변경 불가능한 ID를 사용하세요

### 매핑 로직

1. **오류 처리**: null 값을 안전하게 처리하세요
2. **가스 효율성**: 엔티티 로드와 저장을 최소화하세요
3. **일관성**: 데이터 일관성을 유지하세요
4. **테스트**: 포괄적인 단위 테스트를 작성하세요

### 성능

1. **시작 블록**: 적절한 시작 블록을 설정하세요
2. **일괄 처리**: 이벤트를 배치 단위로 처리하세요
3. **캐싱**: 엔티티 캐싱을 효과적으로 활용하세요
4. **페이지네이션**: 쿼리에 적절한 페이지네이션을 구현하세요

## 추가 리소스

- **[Goldsky 문서](https://docs.goldsky.com/)** - Goldsky 플랫폼 문서
- **[The Graph 문서](https://thegraph.com/docs/)** - 서브그래프 개발 가이드
- **[GraphQL 문서](https://graphql.org/)** - GraphQL 쿼리 언어
- **[AssemblyScript 문서](https://www.assemblyscript.org/)** - 매핑 언어

:::note
자세한 서브그래프 스키마, 배포 설정, 프로토콜별 매핑은 Mezo 조직의 개별 서브그래프 저장소를 참조하세요.
:::

## 지원

서브그래프 개발 지원이 필요하다면 다음을 이용하세요.
- [Mezo Discord](https://discord.com/invite/mezo)에 참여하세요
- GitHub에서 서브그래프 저장소의 이슈를 확인하세요
- [자주 묻는 질문](/docs/kr/docs/developers/getting-started/FAQs)을 검토하세요
- [Goldsky 지원팀](https://goldsky.com/support)에 문의하세요
