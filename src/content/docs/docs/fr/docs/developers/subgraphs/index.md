---
title: Déployer des subgraphs avec Goldsky
description: >-
  Guide pour déployer et gérer des subgraphs sur Mezo à l'aide de
  l'infrastructure Goldsky.
topic: developers
---
Ce guide explique comment déployer et gérer des subgraphs pour les protocoles Mezo à l'aide de l'infrastructure de Goldsky. Les subgraphs permettent d'interroger efficacement les données de la blockchain via des API GraphQL.

## Aperçu

Les subgraphs offrent :
- **Données indexées** : accès rapide aux données de la blockchain
- **API GraphQL** : interface de requête flexible
- **Mises à jour en temps réel** : synchronisation des données en direct
- **Logique personnalisée** : transformation et agrégation des données onchain

## Structure du dépôt

Les dépôts de subgraphs Mezo contiennent généralement :

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)** : définitions du schéma GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)** : manifeste du subgraph
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)** : logique de mapping (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)** : ABI des contrats
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)** : tests unitaires

## Configuration de l'environnement de développement

### Prérequis

- Node.js 18+ (consultez le fichier `.nvmrc` du dépôt pour connaître la version exacte)
- Gestionnaire de paquets npm ou yarn
- Git
- Graph CLI
- Compte Goldsky

### Installation

1. Clonez le dépôt du subgraph :
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Installez les dépendances :
```bash
npm install
# or
yarn install
```

3. Installez Graph CLI :
```bash
npm install -g @graphprotocol/graph-cli
```

## Développement du subgraph

### Définition du schéma

Définissez vos modèles de données dans `schema.graphql` :

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

### Manifeste du subgraph

Configurez votre subgraph dans `subgraph.yaml` :

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

### Logique de mapping

Implémentez les gestionnaires d'événements dans `src/mapping.ts` :

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

### Génération de code

Générez les types TypeScript à partir de votre schéma :

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Tests

### Tests unitaires

Écrivez des tests unitaires pour vos mappings :

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

Exécutez les tests :

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Déploiement avec Goldsky

### Prérequis

1. **Créez un compte Goldsky** : inscrivez-vous sur [goldsky.com](https://goldsky.com)
2. **Installez Goldsky CLI** :
```bash
npm install -g @goldsky/cli
```

3. **Authentifiez-vous** :
```bash
goldsky login
```

### Processus de déploiement

1. **Déployez le subgraph** :
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Surveillez le déploiement** :
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Configuration

Créez un fichier de configuration Goldsky :

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

## Interroger les subgraphs

### Requêtes GraphQL

Une fois votre subgraph déployé, interrogez-le :

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

### Intégration côté client

Intégrez les requêtes de subgraph dans votre dApp :

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

### Intégration avec Apollo Client

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

## Surveillance et maintenance

### Vérifications de l'état

Surveillez l'état de santé de votre subgraph :

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Mettre à jour les subgraphs

Déployez de nouvelles versions :

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Gestion des erreurs

Problèmes courants et solutions :

1. **Retard de synchronisation** : vérifiez l'état de l'endpoint RPC
2. **Échec des gestionnaires** : examinez la logique de mapping et les journaux
3. **Incohérences de schéma** : assurez-vous que le schéma correspond au déploiement

## Bonnes pratiques

### Conception du schéma

1. **Entités** : utilisez des noms d'entités explicites
2. **Relations** : définissez des relations claires entre les entités
3. **Indexation** : indexez les champs fréquemment interrogés
4. **Immuabilité** : utilisez des identifiants immuables pour les entités

### Logique de mapping

1. **Gestion des erreurs** : gérez correctement les valeurs nulles
2. **Efficacité en gaz** : réduisez au minimum les chargements et enregistrements d'entités
3. **Cohérence** : préservez la cohérence des données
4. **Tests** : écrivez des tests unitaires complets

### Performances

1. **Bloc de départ** : définissez des blocs de départ appropriés
2. **Traitement par lots** : traitez les événements par lots
3. **Mise en cache** : utilisez efficacement la mise en cache des entités
4. **Pagination** : implémentez une pagination adaptée dans vos requêtes

## Ressources supplémentaires

- **[Documentation Goldsky](https://docs.goldsky.com/)** : documentation de la plateforme Goldsky
- **[Documentation The Graph](https://thegraph.com/docs/)** : guide de développement de subgraphs
- **[Documentation GraphQL](https://graphql.org/)** : langage de requête GraphQL
- **[Documentation AssemblyScript](https://www.assemblyscript.org/)** : langage de mapping

:::note
Pour les schémas de subgraph détaillés, les configurations de déploiement et les mappings propres à chaque protocole, consultez les dépôts de subgraphs individuels de l'organisation Mezo.
:::

## Assistance

Pour obtenir de l'aide sur le développement de subgraphs :
- Rejoignez le [Discord Mezo](https://discord.com/invite/mezo)
- Consultez les issues des dépôts de subgraphs sur GitHub
- Consultez la [FAQ](/docs/fr/docs/developers/getting-started/FAQs)
- Contactez l'[assistance Goldsky](https://goldsky.com/support)
