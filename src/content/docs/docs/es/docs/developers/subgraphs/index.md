---
title: Despliegue de subgraphs con Goldsky
description: >-
  Guía para desplegar y gestionar subgraphs en Mezo con la infraestructura de
  Goldsky.
topic: developers
---
Esta guía explica cómo desplegar y gestionar subgraphs para los protocolos de Mezo con la infraestructura de Goldsky. Los subgraphs permiten consultar de forma eficiente los datos de la blockchain mediante APIs GraphQL.

## Descripción general

Los subgraphs ofrecen:
- **Datos indexados**: acceso rápido a los datos de la blockchain
- **API GraphQL**: interfaz de consultas flexible
- **Actualizaciones en tiempo real**: sincronización de datos en vivo
- **Lógica personalizada**: transforma y agrega datos onchain

## Estructura del repositorio

Los repositorios de subgraphs de Mezo suelen contener:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: definiciones del esquema GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: manifiesto del subgraph
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: lógica de mapping (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABIs de los contratos
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: pruebas unitarias

## Configuración del entorno de desarrollo

### Requisitos previos

- Node.js 18+ (consulta el archivo `.nvmrc` del repositorio para ver la versión exacta)
- Gestor de paquetes npm o yarn
- Git
- Graph CLI
- Cuenta de Goldsky

### Instalación

1. Clona el repositorio de subgraphs:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Instala las dependencias:
```bash
npm install
# or
yarn install
```

3. Instala Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Desarrollo de subgraphs

### Definición del esquema

Define tus modelos de datos en `schema.graphql`:

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

### Manifiesto del subgraph

Configura tu subgraph en `subgraph.yaml`:

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

### Lógica de mapping

Implementa los manejadores de eventos en `src/mapping.ts`:

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

### Generación de código

Genera los tipos de TypeScript a partir de tu esquema:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Pruebas

### Pruebas unitarias

Escribe pruebas unitarias para tus mappings:

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

Ejecuta las pruebas:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Despliegue con Goldsky

### Requisitos previos

1. **Crea una cuenta de Goldsky**: regístrate en [goldsky.com](https://goldsky.com)
2. **Instala Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Autentícate**:
```bash
goldsky login
```

### Proceso de despliegue

1. **Despliega el subgraph**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Supervisa el despliegue**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Configuración

Crea un archivo de configuración de Goldsky:

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

## Consultar subgraphs

### Consultas GraphQL

Una vez desplegado, consulta tu subgraph:

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

### Integración en el cliente

Integra las consultas al subgraph en tu dApp:

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

### Integración con Apollo Client

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

## Supervisión y mantenimiento

### Comprobaciones de estado

Supervisa el estado del subgraph:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Actualizar subgraphs

Despliega nuevas versiones:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Gestión de errores

Problemas comunes y soluciones:

1. **Retraso de sincronización**: comprueba el estado del endpoint RPC
2. **Manejadores fallidos**: revisa la lógica de mapping y los logs
3. **Discrepancias de esquema**: asegúrate de que el esquema coincida con el despliegue

## Buenas prácticas

### Diseño del esquema

1. **Entidades**: usa nombres de entidad significativos
2. **Relaciones**: define relaciones claras entre entidades
3. **Indexación**: indexa los campos que se consultan con frecuencia
4. **Inmutabilidad**: usa IDs inmutables para las entidades

### Lógica de mapping

1. **Gestión de errores**: maneja correctamente los valores nulos
2. **Eficiencia de gas**: minimiza las cargas y los guardados de entidades
3. **Consistencia**: mantén la consistencia de los datos
4. **Pruebas**: escribe pruebas unitarias exhaustivas

### Rendimiento

1. **Bloque inicial**: establece bloques iniciales adecuados
2. **Procesamiento por lotes**: procesa los eventos en lotes
3. **Caché**: usa la caché de entidades de forma eficaz
4. **Paginación**: implementa una paginación adecuada en las consultas

## Recursos adicionales

- **[Documentación de Goldsky](https://docs.goldsky.com/)**: documentación de la plataforma Goldsky
- **[Documentación de The Graph](https://thegraph.com/docs/)**: guía de desarrollo de subgraphs
- **[Documentación de GraphQL](https://graphql.org/)**: lenguaje de consultas GraphQL
- **[Documentación de AssemblyScript](https://www.assemblyscript.org/)**: lenguaje de los mappings

:::note
Para ver en detalle los esquemas de subgraphs, las configuraciones de despliegue y los mappings específicos de cada protocolo, consulta los repositorios de subgraphs individuales de la organización de Mezo.
:::

## Soporte

Para obtener soporte con el desarrollo de subgraphs:
- Únete al [Discord de Mezo](https://discord.com/invite/mezo)
- Consulta los issues del repositorio de subgraphs en GitHub
- Revisa las [preguntas frecuentes](/docs/es/docs/developers/getting-started/FAQs)
- Ponte en contacto con el [soporte de Goldsky](https://goldsky.com/support)
