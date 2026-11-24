---
title: Subgraphs deployen met Goldsky
description: >-
  Handleiding voor het deployen en beheren van subgraphs op Mezo met de
  infrastructuur van Goldsky.
topic: developers
---
Deze handleiding beschrijft hoe je subgraphs voor Mezo-protocollen deployt en beheert met de infrastructuur van Goldsky. Met subgraphs kun je blockchaingegevens efficiënt opvragen via GraphQL-API's.

## Overzicht

Subgraphs bieden:
- **Geïndexeerde gegevens**: snelle toegang tot blockchaingegevens
- **GraphQL-API**: een flexibele query-interface
- **Realtime updates**: live synchronisatie van gegevens
- **Eigen logica**: onchain-gegevens transformeren en aggregeren

## Structuur van de repository

Subgraph-repository's van Mezo bevatten doorgaans:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: definities van het GraphQL-schema
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: subgraphmanifest
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: mappinglogica (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABI's van de contracten
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: unittests

## Ontwikkelomgeving opzetten

### Vereisten

- Node.js 18+ (zie `.nvmrc` in de repository voor de exacte versie)
- npm of yarn als package manager
- Git
- Graph CLI
- Goldsky-account

### Installatie

1. Kloon de subgraph-repository:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Installeer de dependencies:
```bash
npm install
# or
yarn install
```

3. Installeer Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Subgraphs ontwikkelen

### Schema definiëren

Definieer je datamodellen in `schema.graphql`:

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

### Subgraphmanifest

Configureer je subgraph in `subgraph.yaml`:

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

### Mappinglogica

Implementeer eventhandlers in `src/mapping.ts`:

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

### Code genereren

Genereer TypeScript-types op basis van je schema:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Testen

### Unittests

Schrijf unittests voor je mappings:

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

Voer de tests uit:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Deployen met Goldsky

### Vereisten

1. **Goldsky-account aanmaken**: registreer je op [goldsky.com](https://goldsky.com)
2. **Goldsky CLI installeren**:
```bash
npm install -g @goldsky/cli
```

3. **Authenticeren**:
```bash
goldsky login
```

### Deploymentproces

1. **Subgraph deployen**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Deployment monitoren**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Configuratie

Maak een Goldsky-configuratiebestand aan:

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

## Subgraphs bevragen

### GraphQL-query's

Zodra je subgraph is gedeployd, kun je hem bevragen:

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

### Integratie in je client

Integreer subgraph-query's in je dApp:

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

### Integratie met Apollo Client

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

## Monitoring en onderhoud

### Statuscontroles

Controleer de status van je subgraph:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Subgraphs bijwerken

Deploy nieuwe versies:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Foutafhandeling

Veelvoorkomende problemen en oplossingen:

1. **Synchronisatieachterstand**: controleer de status van het RPC-endpoint
2. **Mislukte handlers**: controleer de mappinglogica en de logs
3. **Schema komt niet overeen**: zorg dat het schema overeenkomt met de deployment

## Best practices

### Schemaontwerp

1. **Entiteiten**: gebruik betekenisvolle namen voor entiteiten
2. **Relaties**: definieer duidelijke relaties tussen entiteiten
3. **Indexering**: indexeer velden die vaak worden opgevraagd
4. **Onveranderlijkheid**: gebruik onveranderlijke ID's voor entiteiten

### Mappinglogica

1. **Foutafhandeling**: ga zorgvuldig om met null-waarden
2. **Gasefficiëntie**: beperk het laden en opslaan van entiteiten tot een minimum
3. **Consistentie**: houd je gegevens consistent
4. **Testen**: schrijf uitgebreide unittests

### Prestaties

1. **Startblok**: stel geschikte startblokken in
2. **Batchverwerking**: verwerk events in batches
3. **Caching**: maak effectief gebruik van entity-caching
4. **Paginering**: implementeer correcte paginering in je query's

## Aanvullende bronnen

- **[Goldsky-documentatie](https://docs.goldsky.com/)** - documentatie van het Goldsky-platform
- **[The Graph-documentatie](https://thegraph.com/docs/)** - handleiding voor subgraphontwikkeling
- **[GraphQL-documentatie](https://graphql.org/)** - de querytaal GraphQL
- **[AssemblyScript-documentatie](https://www.assemblyscript.org/)** - de taal voor mappings

:::note
Raadpleeg de afzonderlijke subgraph-repository's in de Mezo-organisatie voor gedetailleerde subgraphschema's, deploymentconfiguraties en protocolspecifieke mappings.
:::

## Ondersteuning

Ondersteuning bij het ontwikkelen van subgraphs:
- Word lid van de [Mezo Discord](https://discord.com/invite/mezo)
- Bekijk de issues van de subgraph-repository op GitHub
- Lees de [veelgestelde vragen](/docs/nl/docs/developers/getting-started/FAQs)
- Neem contact op met [Goldsky Support](https://goldsky.com/support)
