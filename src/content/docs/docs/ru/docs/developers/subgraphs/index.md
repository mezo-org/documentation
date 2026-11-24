---
title: Развёртывание сабграфов с Goldsky
description: >-
  Руководство по развёртыванию сабграфов в Mezo и управлению ими с помощью
  инфраструктуры Goldsky.
topic: developers
---
В этом руководстве описано, как развёртывать сабграфы для протоколов Mezo и управлять ими с помощью инфраструктуры Goldsky. Сабграфы позволяют эффективно запрашивать данные блокчейна через GraphQL API.

## Обзор

Сабграфы обеспечивают:
- **Индексированные данные**: быстрый доступ к данным блокчейна
- **GraphQL API**: гибкий интерфейс для запросов
- **Обновления в реальном времени**: синхронизацию данных в реальном времени
- **Собственную логику**: преобразование и агрегирование ончейн-данных

## Структура репозитория

Репозитории сабграфов Mezo обычно содержат:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: определения схемы GraphQL
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: манифест сабграфа
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: логика маппинга (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: ABI контрактов
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: модульные тесты

## Настройка среды разработки

### Предварительные требования

- Node.js 18+ (точную версию см. в файле `.nvmrc` репозитория)
- Менеджер пакетов npm или yarn
- Git
- Graph CLI
- Аккаунт Goldsky

### Установка

1. Клонируйте репозиторий сабграфов:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. Установите зависимости:
```bash
npm install
# or
yarn install
```

3. Установите Graph CLI:
```bash
npm install -g @graphprotocol/graph-cli
```

## Разработка сабграфа

### Определение схемы

Определите модели данных в `schema.graphql`:

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

### Манифест сабграфа

Настройте сабграф в `subgraph.yaml`:

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

### Логика маппинга

Реализуйте обработчики событий в `src/mapping.ts`:

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

### Генерация кода

Сгенерируйте типы TypeScript на основе схемы:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## Тестирование

### Модульные тесты

Напишите модульные тесты для маппингов:

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

Запустите тесты:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Развёртывание с Goldsky

### Предварительные требования

1. **Создайте аккаунт Goldsky**: зарегистрируйтесь на [goldsky.com](https://goldsky.com)
2. **Установите Goldsky CLI**:
```bash
npm install -g @goldsky/cli
```

3. **Пройдите аутентификацию**:
```bash
goldsky login
```

### Процесс развёртывания

1. **Разверните сабграф**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **Отслеживайте развёртывание**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### Конфигурация

Создайте файл конфигурации Goldsky:

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

## Запросы к сабграфам

### Запросы GraphQL

После развёртывания отправляйте запросы к своему сабграфу:

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

### Интеграция с клиентом

Интегрируйте запросы к сабграфу в свой dApp:

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

### Интеграция с Apollo Client

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

## Мониторинг и обслуживание

### Проверки работоспособности

Отслеживайте работоспособность сабграфа:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### Обновление сабграфов

Развёртывайте новые версии:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### Обработка ошибок

Распространённые проблемы и способы их решения:

1. **Отставание синхронизации**: проверьте работоспособность RPC-эндпоинта
2. **Сбои обработчиков**: проверьте логику маппинга и логи
3. **Несоответствие схемы**: убедитесь, что схема соответствует развёртыванию

## Рекомендации

### Проектирование схемы

1. **Сущности**: используйте осмысленные имена сущностей
2. **Связи**: определяйте понятные связи между сущностями
3. **Индексирование**: индексируйте поля, которые часто запрашиваются
4. **Неизменяемость**: используйте неизменяемые ID для сущностей

### Логика маппинга

1. **Обработка ошибок**: корректно обрабатывайте значения null
2. **Эффективность по газу**: минимизируйте количество загрузок и сохранений сущностей
3. **Согласованность**: поддерживайте согласованность данных
4. **Тестирование**: пишите исчерпывающие модульные тесты

### Производительность

1. **Начальный блок**: задавайте подходящие начальные блоки
2. **Пакетная обработка**: обрабатывайте события пакетами
3. **Кеширование**: эффективно используйте кеширование сущностей
4. **Пагинация**: реализуйте корректную пагинацию в запросах

## Дополнительные ресурсы

- **[Документация Goldsky](https://docs.goldsky.com/)** — документация платформы Goldsky
- **[Документация The Graph](https://thegraph.com/docs/)** — руководство по разработке сабграфов
- **[Документация GraphQL](https://graphql.org/)** — язык запросов GraphQL
- **[Документация AssemblyScript](https://www.assemblyscript.org/)** — язык маппингов

:::note
Подробные схемы сабграфов, конфигурации развёртывания и маппинги для конкретных протоколов см. в отдельных репозиториях сабграфов в организации Mezo.
:::

## Поддержка

Поддержка по разработке сабграфов:
- Присоединяйтесь к [Discord Mezo](https://discord.com/invite/mezo)
- Просматривайте issues в репозиториях сабграфов на GitHub
- Изучите [FAQ](/docs/ru/docs/developers/getting-started/FAQs)
- Свяжитесь с [поддержкой Goldsky](https://goldsky.com/support)
