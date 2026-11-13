---
title: Subgraph-Deployment mit Goldsky
description: >-
  Leitfaden zum Deployen und Verwalten von Subgraphen auf Mezo mit der
  Goldsky-Infrastruktur.
topic: developers
---
Dieser Leitfaden beschreibt, wie Sie Subgraphen für Mezo-Protokolle mit der Infrastruktur von Goldsky deployen und verwalten. Subgraphen ermöglichen effiziente Abfragen von Blockchain-Daten über GraphQL-APIs.

## Übersicht

Subgraphen bieten:
- **Indexierte Daten**: schneller Zugriff auf Blockchain-Daten
- **GraphQL-API**: flexible Abfrageschnittstelle
- **Echtzeit-Updates**: Live-Synchronisierung der Daten
- **Eigene Logik**: Onchain-Daten transformieren und aggregieren

## Repository-Struktur

Mezo-Subgraph-Repositorys enthalten in der Regel:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: GraphQL-Schemadefinitionen
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: Subgraph-Manifest
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: Mapping-Logik (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: Contract-ABIs
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: Unit-Tests

## Einrichtung der Entwicklungsumgebung

### Voraussetzungen

- Node.js 18+ (die genaue Version finden Sie in der `.nvmrc` des Repositorys)
- Paketmanager npm oder yarn
- Git
- Graph CLI
- Goldsky-Konto

### Installation

1. Klonen Sie das Subgraph-Repository:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Installieren Sie die Abhängigkeiten:
```bash
npm install
# or
yarn install
```

3. Installieren Sie die Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Subgraph-Entwicklung

### Schemadefinition

Definieren Sie Ihre Datenmodelle in `schema.graphql`:

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

### Subgraph-Manifest

Konfigurieren Sie Ihren Subgraph in `subgraph.yaml`:

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

### Mapping-Logik

Implementieren Sie Event-Handler in `src/mapping.ts`:

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

### Codegenerierung

Generieren Sie TypeScript-Typen aus Ihrem Schema:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Tests

### Unit-Tests

Schreiben Sie Unit-Tests für Ihre Mappings:

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

Tests ausführen:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Deployment mit Goldsky

### Voraussetzungen

1. **Goldsky-Konto erstellen**: Registrieren Sie sich unter [goldsky.com](https://goldsky.com)
2. **Goldsky CLI installieren**:
```bash
npm install -g @goldsky/cli
```

3. **Authentifizieren**:
```bash
goldsky login
```

### Deployment-Prozess

1. **Subgraph deployen**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Deployment überwachen**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Konfiguration

Erstellen Sie eine Goldsky-Konfigurationsdatei:

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

## Subgraphen abfragen

### GraphQL-Abfragen

Nach dem Deployment können Sie Ihren Subgraph abfragen:

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

### Client-Integration

Binden Sie Subgraph-Abfragen in Ihre dApp ein:

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

### Integration mit Apollo Client

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

## Überwachung und Wartung

### Health Checks

Überwachen Sie den Zustand Ihres Subgraphen:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Subgraphen aktualisieren

Deployen Sie neue Versionen:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Fehlerbehandlung

Häufige Probleme und Lösungen:

1. **Sync-Verzögerung**: Prüfen Sie den Zustand des RPC-Endpoints
2. **Fehlgeschlagene Handler**: Überprüfen Sie die Mapping-Logik und die Logs
3. **Schema-Abweichungen**: Stellen Sie sicher, dass das Schema zum Deployment passt

## Best Practices

### Schemadesign

1. **Entitäten**: Verwenden Sie aussagekräftige Entitätsnamen
2. **Beziehungen**: Definieren Sie klare Beziehungen zwischen Entitäten
3. **Indexierung**: Indexieren Sie häufig abgefragte Felder
4. **Unveränderlichkeit**: Verwenden Sie unveränderliche IDs für Entitäten

### Mapping-Logik

1. **Fehlerbehandlung**: Behandeln Sie Nullwerte robust
2. **Gas-Effizienz**: Minimieren Sie das Laden und Speichern von Entitäten
3. **Konsistenz**: Sorgen Sie für konsistente Daten
4. **Tests**: Schreiben Sie umfassende Unit-Tests

### Performance

1. **Startblock**: Legen Sie geeignete Startblöcke fest
2. **Batch-Verarbeitung**: Verarbeiten Sie Events in Batches
3. **Caching**: Nutzen Sie das Caching von Entitäten effektiv
4. **Paginierung**: Implementieren Sie eine saubere Paginierung in Abfragen

## Weitere Ressourcen

- **[Goldsky-Dokumentation](https://docs.goldsky.com/)** – Dokumentation der Goldsky-Plattform
- **[The-Graph-Dokumentation](https://thegraph.com/docs/)** – Leitfaden zur Subgraph-Entwicklung
- **[GraphQL-Dokumentation](https://graphql.org/)** – GraphQL-Abfragesprache
- **[AssemblyScript-Dokumentation](https://www.assemblyscript.org/)** – Sprache für Mappings

:::note
Detaillierte Subgraph-Schemas, Deployment-Konfigurationen und protokollspezifische Mappings finden Sie in den einzelnen Subgraph-Repositorys der Mezo-Organisation.
:::

## Support

Unterstützung bei der Subgraph-Entwicklung erhalten Sie hier:
- Treten Sie dem [Mezo-Discord](https://discord.com/invite/mezo) bei
- Sehen Sie sich die Issues im Subgraph-Repository auf GitHub an
- Lesen Sie die [FAQ](/docs/de/docs/developers/getting-started/FAQs)
- Wenden Sie sich an den [Goldsky-Support](https://goldsky.com/support)
