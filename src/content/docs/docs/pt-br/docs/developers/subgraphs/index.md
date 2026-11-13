---
title: Implantação de subgraphs com Goldsky
description: >-
  Guia para implantar e gerenciar subgraphs no Mezo usando a infraestrutura da
  Goldsky.
topic: developers
---
Este guia explica como implantar e gerenciar subgraphs para protocolos do Mezo usando a infraestrutura da Goldsky. Os subgraphs permitem consultar dados da blockchain de forma eficiente por meio de APIs GraphQL.

## Visão geral

Os subgraphs oferecem:
- **Dados indexados**: acesso rápido aos dados da blockchain
- **API GraphQL**: interface de consulta flexível
- **Atualizações em tempo real**: sincronização de dados ao vivo
- **Lógica personalizada**: transforme e agregue dados onchain

## Estrutura do repositório

Os repositórios de subgraphs do Mezo normalmente contêm:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: definições do schema GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: manifesto do subgraph
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: lógica de mapeamento (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABIs dos contratos
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: testes unitários

## Configuração do ambiente de desenvolvimento

### Pré-requisitos

- Node.js 18+ (verifique o `.nvmrc` do repositório para saber a versão exata)
- Gerenciador de pacotes npm ou yarn
- Git
- Graph CLI
- Conta na Goldsky

### Instalação

1. Clone o repositório de subgraphs:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Instale as dependências:
```bash
npm install
# or
yarn install
```

3. Instale o Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Desenvolvimento de subgraphs

### Definição do schema

Defina seus modelos de dados em `schema.graphql`:

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

### Manifesto do subgraph

Configure seu subgraph em `subgraph.yaml`:

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

### Lógica de mapeamento

Implemente os manipuladores de eventos em `src/mapping.ts`:

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

### Geração de código

Gere tipos TypeScript a partir do seu schema:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Testes

### Testes unitários

Escreva testes unitários para seus mapeamentos:

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

Execute os testes:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Implantação com Goldsky

### Pré-requisitos

1. **Crie uma conta na Goldsky**: cadastre-se em [goldsky.com](https://goldsky.com)
2. **Instale o Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Autentique-se**:
```bash
goldsky login
```

### Processo de implantação

1. **Implante o subgraph**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Monitore a implantação**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Configuração

Crie um arquivo de configuração da Goldsky:

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

## Consulta de subgraphs

### Consultas GraphQL

Depois da implantação, consulte seu subgraph:

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

### Integração com o cliente

Integre as consultas ao subgraph no seu dApp:

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

### Integração com o Apollo Client

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

## Monitoramento e manutenção

### Verificações de integridade

Monitore a integridade do subgraph:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Atualização de subgraphs

Implante novas versões:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Tratamento de erros

Problemas comuns e soluções:

1. **Atraso de sincronização**: verifique a integridade do endpoint RPC
2. **Falhas nos manipuladores**: revise a lógica de mapeamento e os logs
3. **Incompatibilidades de schema**: verifique se o schema corresponde à implantação

## Boas práticas

### Design do schema

1. **Entidades**: use nomes de entidade significativos
2. **Relacionamentos**: defina relacionamentos claros entre entidades
3. **Indexação**: indexe os campos consultados com frequência
4. **Imutabilidade**: use IDs imutáveis para as entidades

### Lógica de mapeamento

1. **Tratamento de erros**: trate valores nulos de forma adequada
2. **Eficiência de gás**: minimize carregamentos e salvamentos de entidades
3. **Consistência**: mantenha a consistência dos dados
4. **Testes**: escreva testes unitários abrangentes

### Desempenho

1. **Bloco inicial**: defina blocos iniciais adequados
2. **Processamento em lote**: processe eventos em lotes
3. **Cache**: use o cache de entidades de forma eficaz
4. **Paginação**: implemente uma paginação adequada nas consultas

## Recursos adicionais

- **[Documentação da Goldsky](https://docs.goldsky.com/)** - documentação da plataforma Goldsky
- **[Documentação do The Graph](https://thegraph.com/docs/)** - guia de desenvolvimento de subgraphs
- **[Documentação do GraphQL](https://graphql.org/)** - linguagem de consulta GraphQL
- **[Documentação do AssemblyScript](https://www.assemblyscript.org/)** - linguagem de mapeamento

:::note
Para ver schemas de subgraph detalhados, configurações de implantação e mapeamentos específicos de cada protocolo, consulte os repositórios de subgraphs individuais na organização do Mezo.
:::

## Suporte

Para obter suporte no desenvolvimento de subgraphs:
- Participe do [Discord do Mezo](https://discord.com/invite/mezo)
- Confira as issues do repositório de subgraphs no GitHub
- Consulte as [perguntas frequentes](/docs/pt-br/docs/developers/getting-started/FAQs)
- Entre em contato com o [suporte da Goldsky](https://goldsky.com/support)
