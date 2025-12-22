---
title: Subgraph Deployment with Goldsky
description: >-
  Guide for deploying and managing subgraphs on Mezo using Goldsky
  infrastructure.
topic: developers
---

This guide covers how to deploy and manage subgraphs for Mezo protocols using Goldsky's infrastructure. Subgraphs enable efficient querying of blockchain data through GraphQL APIs.

## Overview

Subgraphs provide:
- **Indexed Data**: Fast access to blockchain data
- **GraphQL API**: Flexible querying interface
- **Real-time Updates**: Live data synchronization
- **Custom Logic**: Transform and aggregate on-chain data

## Repository Structure

Mezo subgraph repositories typically contain:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: GraphQL schema definitions
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: Subgraph manifest
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: Mapping logic (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: Contract ABIs
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: Unit tests

## Development Setup

### Prerequisites

- Node.js 18+ (check repository's `.nvmrc` for exact version)
- npm or yarn package manager
- Git
- Graph CLI
- Goldsky account

### Installation

1. Clone the subgraph repository:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Subgraph Development

### Schema Definition

Define your data models in `schema.graphql`:

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

### Subgraph Manifest

Configure your subgraph in `subgraph.yaml`:

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

### Mapping Logic

Implement event handlers in `src/mapping.ts`:

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

### Code Generation

Generate TypeScript types from your schema:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Testing

### Unit Tests

Write unit tests for your mappings:

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

Run tests:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Deployment with Goldsky

### Prerequisites

1. **Create Goldsky Account**: Sign up at [goldsky.com](https://goldsky.com)

2. **Install Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Authenticate**:
```bash
goldsky login
```

### Deployment Process

1. **Deploy Subgraph**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Monitor Deployment**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Configuration

Create a Goldsky configuration file:

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

## Querying Subgraphs

### GraphQL Queries

Once deployed, query your subgraph:

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

### Client Integration

Integrate subgraph queries in your dApp:

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

### Apollo Client Integration

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

## Monitoring and Maintenance

### Health Checks

Monitor subgraph health:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Updating Subgraphs

Deploy new versions:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Error Handling

Common issues and solutions:

1. **Sync Lag**: Check RPC endpoint health
2. **Failed Handlers**: Review mapping logic and logs
3. **Schema Mismatches**: Ensure schema matches deployment

## Best Practices

### Schema Design

1. **Entities**: Use meaningful entity names
2. **Relationships**: Define clear entity relationships
3. **Indexing**: Index frequently queried fields
4. **Immutability**: Use immutable IDs for entities

### Mapping Logic

1. **Error Handling**: Handle null values gracefully
2. **Gas Efficiency**: Minimize entity loads and saves
3. **Consistency**: Maintain data consistency
4. **Testing**: Write comprehensive unit tests

### Performance

1. **Start Block**: Set appropriate start blocks
2. **Batch Processing**: Process events in batches
3. **Caching**: Use entity caching effectively
4. **Pagination**: Implement proper pagination in queries

## Additional Resources

- **[Goldsky Documentation](https://docs.goldsky.com/)** - Goldsky platform docs
- **[The Graph Documentation](https://thegraph.com/docs/)** - Subgraph development guide
- **[GraphQL Documentation](https://graphql.org/)** - GraphQL query language
- **[AssemblyScript Documentation](https://www.assemblyscript.org/)** - Mapping language

:::note
For detailed subgraph schemas, deployment configurations, and protocol-specific mappings, refer to the individual subgraph repositories in the Mezo organization.
:::

## Support

For subgraph development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check subgraph repository issues on GitHub
- Review the [FAQ](/docs/developers/getting-started/FAQs)
- Contact [Goldsky Support](https://goldsky.com/support)
