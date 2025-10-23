---
title: Subgraph Deployment with Goldsky
description: >-
  Complete guide for deploying and managing subgraphs on Mezo using Goldsky's
  infrastructure.
topic: developers
---

# Subgraph Deployment with Goldsky

This guide covers how to deploy and manage subgraphs for Mezo applications using [Goldsky's subgraph infrastructure](https://docs.goldsky.com/subgraphs/guides/subgraph-deploy-wizard). Goldsky provides a powerful platform for indexing blockchain data and making it easily queryable.

## Overview

Subgraphs are a way to index blockchain data and make it easily queryable through GraphQL APIs. Goldsky provides:

- **Fast Indexing**: Optimized indexing infrastructure
- **GraphQL API**: Easy-to-use query interface
- **Real-time Updates**: Live data synchronization
- **Scalable Infrastructure**: Handle high-volume applications
- **Multi-chain Support**: Deploy across multiple networks

## What are Subgraphs?

Subgraphs define how to extract, transform, and store blockchain data:

1. **Data Sources**: Smart contracts to monitor
2. **Event Handlers**: Functions that process contract events
3. **Entity Schema**: Data structure definitions
4. **GraphQL Schema**: API interface for queries

## Getting Started

### Prerequisites

- Node.js 16+
- Git
- Goldsky account
- Mezo testnet/mainnet access

### Account Setup

1. **Create Goldsky Account**:
   - Visit [Goldsky Dashboard](https://app.goldsky.com)
   - Sign up with GitHub or email
   - Verify your account

2. **Get API Key**:
   - Navigate to API Keys section
   - Generate a new API key
   - Save the key securely

### Installation

1. **Install Goldsky CLI**:
```bash
npm install -g @goldskycom/cli
```

2. **Authenticate**:
```bash
goldsky auth
# Enter your API key when prompted
```

## Subgraph Development

### Project Structure

```
my-subgraph/
├── subgraph.yaml          # Subgraph configuration
├── schema.graphql         # GraphQL schema
├── src/
│   ├── mappings/          # Event handlers
│   └── utils.ts           # Utility functions
├── package.json
└── tsconfig.json
```

### Basic Subgraph Configuration

**subgraph.yaml**:
```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: MezoContract
    network: mezo-mainnet
    source:
      address: "0x1234567890123456789012345678901234567890"
      abi: MezoContract
      startBlock: 1000000
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Transfer
        - Approval
      abis:
        - name: MezoContract
          file: ./abis/MezoContract.json
      eventHandlers:
        - event: Transfer(indexed address,indexed address,uint256)
          handler: handleTransfer
        - event: Approval(indexed address,indexed address,uint256)
          handler: handleApproval
      file: ./src/mappings.ts
```

### GraphQL Schema

**schema.graphql**:
```graphql
type Transfer @entity {
  id: ID!
  from: Bytes!
  to: Bytes!
  value: BigInt!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}

type Approval @entity {
  id: ID!
  owner: Bytes!
  spender: Bytes!
  value: BigInt!
  blockNumber: BigInt!
  blockTimestamp: BigInt!
  transactionHash: Bytes!
}
```

### Event Handlers

**src/mappings.ts**:
```typescript
import { Transfer, Approval } from "../generated/schema";
import { Transfer as TransferEvent, Approval as ApprovalEvent } from "../generated/MezoContract/MezoContract";

export function handleTransfer(event: TransferEvent): void {
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  
  transfer.from = event.params.from;
  transfer.to = event.params.to;
  transfer.value = event.params.value;
  transfer.blockNumber = event.block.number;
  transfer.blockTimestamp = event.block.timestamp;
  transfer.transactionHash = event.transaction.hash;
  
  transfer.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let approval = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  
  approval.owner = event.params.owner;
  approval.spender = event.params.spender;
  approval.value = event.params.value;
  approval.blockNumber = event.block.number;
  approval.blockTimestamp = event.block.timestamp;
  approval.transactionHash = event.transaction.hash;
  
  approval.save();
}
```

## Mezo-Specific Examples

### MUSD Subgraph

**subgraph.yaml** for MUSD:
```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: MUSD
    network: mezo-mainnet
    source:
      address: "0xMUSD_CONTRACT_ADDRESS"
      abi: MUSD
      startBlock: 1000000
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Mint
        - Redeem
        - Liquidation
      abis:
        - name: MUSD
          file: ./abis/MUSD.json
      eventHandlers:
        - event: Mint(address,uint256,uint256)
          handler: handleMint
        - event: Redeem(address,uint256,uint256)
          handler: handleRedeem
        - event: Liquidation(address,uint256,uint256)
          handler: handleLiquidation
      file: ./src/mappings.ts
```

### Tigris DEX Subgraph

**subgraph.yaml** for Tigris:
```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: TigrisDEX
    network: mezo-mainnet
    source:
      address: "0xTIGRIS_CONTRACT_ADDRESS"
      abi: TigrisDEX
      startBlock: 1000000
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Swap
        - LiquidityAdded
        - LiquidityRemoved
      abis:
        - name: TigrisDEX
          file: ./abis/TigrisDEX.json
      eventHandlers:
        - event: Swap(address,address,uint256,uint256)
          handler: handleSwap
        - event: LiquidityAdded(address,uint256,uint256)
          handler: handleLiquidityAdded
        - event: LiquidityRemoved(address,uint256,uint256)
          handler: handleLiquidityRemoved
      file: ./src/mappings.ts
```

## Deployment Process

### Using Goldsky Deploy Wizard

1. **Access Deploy Wizard**:
   - Visit [Goldsky Deploy Wizard](https://docs.goldsky.com/subgraphs/guides/subgraph-deploy-wizard)
   - Click "Create New Subgraph"

2. **Configure Subgraph**:
   - Enter subgraph name
   - Select Mezo network
   - Upload subgraph files
   - Configure indexing parameters

3. **Deploy**:
   - Review configuration
   - Click "Deploy"
   - Monitor deployment progress

### CLI Deployment

1. **Initialize Project**:
```bash
goldsky init my-mezo-subgraph
cd my-mezo-subgraph
```

2. **Configure Network**:
```bash
# Add Mezo network configuration
goldsky network add mezo-mainnet \
  --rpc-url https://rpc.mezo.org \
  --chain-id mezo-mainnet
```

3. **Deploy Subgraph**:
```bash
goldsky deploy \
  --subgraph my-mezo-subgraph \
  --network mezo-mainnet
```

### Programmatic Deployment

```typescript
import { GoldskyClient } from '@goldskycom/client';

const client = new GoldskyClient({
  apiKey: process.env.GOLDSKY_API_KEY
});

async function deploySubgraph() {
  const deployment = await client.deploySubgraph({
    name: 'my-mezo-subgraph',
    network: 'mezo-mainnet',
    subgraphYaml: './subgraph.yaml',
    schema: './schema.graphql',
    mappings: './src/mappings.ts'
  });
  
  console.log('Deployment ID:', deployment.id);
  console.log('GraphQL URL:', deployment.graphqlUrl);
}
```

## Querying Data

### GraphQL Queries

**Basic Query**:
```graphql
query GetTransfers($first: Int!, $skip: Int!) {
  transfers(
    first: $first
    skip: $skip
    orderBy: blockTimestamp
    orderDirection: desc
  ) {
    id
    from
    to
    value
    blockNumber
    blockTimestamp
    transactionHash
  }
}
```

**Complex Query with Filters**:
```graphql
query GetMUSDMints($user: Bytes!, $fromBlock: BigInt!) {
  mints(
    where: {
      user: $user
      blockNumber_gte: $fromBlock
    }
    orderBy: blockTimestamp
    orderDirection: desc
  ) {
    id
    user
    collateralAmount
    musdAmount
    blockTimestamp
  }
}
```

### JavaScript Integration

```typescript
import { request } from 'graphql-request';

const GRAPHQL_URL = 'https://api.goldsky.com/api/public/subgraph/your-subgraph-id';

async function queryTransfers() {
  const query = `
    query GetTransfers {
      transfers(first: 10, orderBy: blockTimestamp, orderDirection: desc) {
        id
        from
        to
        value
        blockTimestamp
      }
    }
  `;
  
  const data = await request(GRAPHQL_URL, query);
  return data.transfers;
}

// Usage
const transfers = await queryTransfers();
console.log(transfers);
```

### React Integration

```tsx
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

const GET_TRANSFERS = gql`
  query GetTransfers($first: Int!) {
    transfers(first: $first, orderBy: blockTimestamp, orderDirection: desc) {
      id
      from
      to
      value
      blockTimestamp
    }
  }
`;

function TransfersList() {
  const { loading, error, data } = useQuery(GET_TRANSFERS, {
    variables: { first: 10 }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.transfers.map((transfer: any) => (
        <div key={transfer.id}>
          <p>From: {transfer.from}</p>
          <p>To: {transfer.to}</p>
          <p>Value: {transfer.value}</p>
        </div>
      ))}
    </div>
  );
}
```

## Monitoring and Maintenance

### Health Monitoring

```typescript
async function checkSubgraphHealth(subgraphId: string) {
  const response = await fetch(`https://api.goldsky.com/api/public/subgraph/${subgraphId}/health`);
  const health = await response.json();
  
  console.log('Indexing Status:', health.status);
  console.log('Last Block:', health.lastBlock);
  console.log('Sync Progress:', health.syncProgress);
}
```

### Performance Optimization

1. **Entity Design**:
   - Use appropriate indexes
   - Avoid unnecessary fields
   - Optimize data types

2. **Query Optimization**:
   - Use pagination
   - Implement caching
   - Optimize GraphQL queries

3. **Indexing Performance**:
   - Monitor sync progress
   - Optimize event handlers
   - Use efficient data structures

## Troubleshooting

### Common Issues

1. **Sync Issues**:
```bash
# Check sync status
goldsky status my-subgraph

# Restart sync
goldsky restart my-subgraph
```

2. **Query Errors**:
```bash
# Validate GraphQL schema
goldsky validate schema.graphql

# Test queries
goldsky query "query { _meta { hasIndexingErrors } }"
```

3. **Performance Issues**:
```bash
# Check indexing metrics
goldsky metrics my-subgraph

# Optimize mappings
goldsky optimize my-subgraph
```

### Debug Commands

```bash
# View logs
goldsky logs my-subgraph

# Check configuration
goldsky config my-subgraph

# Test deployment
goldsky test my-subgraph
```

## Best Practices

### Development Workflow

1. **Local Testing**: Test subgraph locally before deployment
2. **Incremental Development**: Start with simple events, add complexity gradually
3. **Version Control**: Use Git for subgraph code management
4. **Documentation**: Document schema and query patterns

### Security Considerations

1. **Access Control**: Restrict API access appropriately
2. **Data Validation**: Validate all input data
3. **Rate Limiting**: Implement query rate limiting
4. **Monitoring**: Set up alerts for unusual activity

## Resources

- [Goldsky Documentation](https://docs.goldsky.com/)
- [Subgraph Deploy Wizard](https://docs.goldsky.com/subgraphs/guides/subgraph-deploy-wizard)
- [Graph Protocol Documentation](https://thegraph.com/docs/)
- [Mezo Network Documentation](/docs/developers/getting-started/configure-environment)

## Support

For subgraph development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check [Goldsky Support](https://docs.goldsky.com/support)
- Review the [FAQ](/docs/developers/getting-started/FAQs)
