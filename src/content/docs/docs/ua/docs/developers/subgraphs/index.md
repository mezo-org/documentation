---
title: Розгортання субграфів за допомогою Goldsky
description: >-
  Посібник з розгортання субграфів у Mezo та керування ними за допомогою
  інфраструктури Goldsky.
topic: developers
---
У цьому посібнику описано, як розгортати субграфи для протоколів Mezo та керувати ними за допомогою інфраструктури Goldsky. Субграфи дають змогу ефективно запитувати дані блокчейну через GraphQL API.

## Огляд

Субграфи надають:
- **Індексовані дані**: швидкий доступ до даних блокчейну
- **GraphQL API**: гнучкий інтерфейс для запитів
- **Оновлення в реальному часі**: синхронізація даних наживо
- **Власна логіка**: перетворення й агрегування ончейн-даних

## Структура репозиторію

Репозиторії субграфів Mezo зазвичай містять:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: визначення схеми GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: маніфест субграфа
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: логіка мапінгу (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABI контрактів
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: модульні тести

## Налаштування для розробки

### Передумови

- Node.js 18+ (точну версію див. у файлі `.nvmrc` репозиторію)
- менеджер пакетів npm або yarn
- Git
- Graph CLI
- обліковий запис Goldsky

### Встановлення

1. Клонуйте репозиторій субграфів:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Установіть залежності:
```bash
npm install
# or
yarn install
```

3. Установіть Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Розробка субграфа

### Визначення схеми

Визначте моделі даних у `schema.graphql`:

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

### Маніфест субграфа

Налаштуйте субграф у `subgraph.yaml`:

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

### Логіка мапінгу

Реалізуйте обробники подій у `src/mapping.ts`:

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

### Генерування коду

Згенеруйте типи TypeScript на основі схеми:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Тестування

### Модульні тести

Напишіть модульні тести для своїх мапінгів:

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

Запустіть тести:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Розгортання за допомогою Goldsky

### Передумови

1. **Створіть обліковий запис Goldsky**: зареєструйтеся на [goldsky.com](https://goldsky.com)
2. **Установіть Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Пройдіть автентифікацію**:
```bash
goldsky login
```

### Процес розгортання

1. **Розгорніть субграф**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Відстежуйте розгортання**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Конфігурація

Створіть файл конфігурації Goldsky:

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

## Запити до субграфів

### Запити GraphQL

Після розгортання надсилайте запити до свого субграфа:

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

### Інтеграція з клієнтом

Інтегруйте запити до субграфа у свій dApp:

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

### Інтеграція з Apollo Client

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

## Моніторинг і обслуговування

### Перевірки стану

Відстежуйте стан субграфа:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Оновлення субграфів

Розгорніть нові версії:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Обробка помилок

Поширені проблеми та способи їх розв'язання:

1. **Відставання синхронізації**: перевірте стан RPC-ендпоінта
2. **Збої обробників**: перегляньте логіку мапінгу та журнали
3. **Невідповідність схеми**: переконайтеся, що схема відповідає розгортанню

## Найкращі практики

### Проєктування схеми

1. **Сутності**: використовуйте змістовні назви сутностей
2. **Зв'язки**: визначайте чіткі зв'язки між сутностями
3. **Індексування**: індексуйте поля, які часто запитуються
4. **Незмінність**: використовуйте незмінні ідентифікатори сутностей

### Логіка мапінгу

1. **Обробка помилок**: коректно обробляйте значення null
2. **Ефективність використання газу**: мінімізуйте завантаження та збереження сутностей
3. **Узгодженість**: підтримуйте узгодженість даних
4. **Тестування**: пишіть вичерпні модульні тести

### Продуктивність

1. **Початковий блок**: задавайте відповідні початкові блоки
2. **Пакетна обробка**: обробляйте події пакетами
3. **Кешування**: ефективно використовуйте кешування сутностей
4. **Пагінація**: реалізуйте належну пагінацію в запитах

## Додаткові ресурси

- **[Документація Goldsky](https://docs.goldsky.com/)** — документація платформи Goldsky
- **[Документація The Graph](https://thegraph.com/docs/)** — посібник з розробки субграфів
- **[Документація GraphQL](https://graphql.org/)** — мова запитів GraphQL
- **[Документація AssemblyScript](https://www.assemblyscript.org/)** — мова мапінгів

:::note
Докладні схеми субграфів, конфігурації розгортання та мапінги для окремих протоколів див. в окремих репозиторіях субграфів організації Mezo.
:::

## Підтримка

Щоб отримати допомогу з розробки субграфів:
- Приєднайтеся до [Discord Mezo](https://discord.com/invite/mezo)
- Перегляньте issues у репозиторії субграфів на GitHub
- Ознайомтеся з [FAQ](/docs/ua/docs/developers/getting-started/FAQs)
- Зверніться до [служби підтримки Goldsky](https://goldsky.com/support)
