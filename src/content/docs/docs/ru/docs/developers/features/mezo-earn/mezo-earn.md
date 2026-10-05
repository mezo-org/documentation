---
title: Руководство по разработке для Mezo Earn
description: >-
  Полное руководство по разработке на базе Mezo Earn — системы гейджей и DEX
  Mezo, вдохновлённых Solidly.
topic: developers
---
Mezo Earn — система смарт-контрактов, на которой работают система гейджей (gauges) Mezo и децентрализованная биржа (DEX). Это руководство поможет разобраться, как разрабатывать решения на базе контрактов Mezo Earn и взаимодействовать с ними.

📄 **[Скачать whitepaper Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — подробный обзор системы экономических стимулов, модели с двумя токенами и токеномики.

## Обзор

Mezo Earn предоставляет:
- **Децентрализованную биржу (DEX)**: автоматизированный маркетмейкер для свопа токенов
- **Систему гейджей**: механизм голосования и распределения вознаграждений
- **Архитектуру, вдохновлённую Solidly**: эффективная ve-токеномика и управление ликвидностью

## Структура репозитория

[Репозиторий Mezo Earn](https://github.com/mezo-org/tigris.git) содержит:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: смарт-контракты на Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: фронтенд-приложение для взаимодействия с контрактами
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: инфраструктурные компоненты на базе Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: автоматизация CI/CD

## Настройка среды разработки

### Предварительные требования

- Node.js (точную версию см. в файле [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc))
- Менеджер пакетов pnpm
- Git
- Foundry (для разработки смарт-контрактов)

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Установите зависимости:
```bash
pnpm install
```

3. Настройте pre-commit-хуки:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Проверка pre-commit-хуков

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Разработка смарт-контрактов

### Архитектура контрактов

Контракты Mezo Earn находятся в каталоге [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Ключевые компоненты:

- **Основные контракты DEX**: функциональность автоматизированного маркетмейкера
- **Контракты гейджей**: голосование и распределение вознаграждений
- **Контракты токенов**: реализации ERC20
- **Вспомогательные контракты**: вспомогательные функции и библиотеки

### Процесс разработки

1. **Напишите контракты**: создайте или измените файлы Solidity в `solidity/`
2. **Протестируйте контракты**: напишите исчерпывающие тесты для своих контрактов
3. **Разверните**: разверните контракты в тестовой/основной сети с помощью скриптов развёртывания
4. **Верифицируйте**: верифицируйте контракты в обозревателях блоков

### Компиляция контрактов

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Тестирование

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Фронтенд-разработка

В каталоге [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) находится фронтенд-приложение для взаимодействия с контрактами Mezo Earn.

### Основные возможности

- **Интерфейс свопа**: обмен токенов
- **Управление ликвидностью**: добавление ликвидности в пулы и её вывод
- **Голосование за гейджи**: участие в голосовании за гейджи и получение вознаграждений
- **Управление портфелем**: отслеживание позиций и вознаграждений

### Команды для разработки

```bash
# Navigate to dapp directory
cd dapp

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Руководство по интеграции

### Подключение к контрактам Mezo Earn

1. **Получите адреса контрактов**: адреса развёрнутых контрактов в тестовой/основной сети Mezo
2. **Интегрируйте ABI**: импортируйте ABI контрактов для взаимодействия
3. **Web3-провайдер**: подключитесь к сети Mezo через RPC

### Пример интеграции

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

### Своп токенов

```typescript
async function swapTokens(
  routerContract: Contract,
  wallet: Wallet,
  amountIn: bigint,
  tokenIn: string,
  tokenOut: string,
  to: string
) {
  // Approve token spending
  const tokenContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);
  await tokenContract.approve(routerContract.address, amountIn);
  
  // Execute swap
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  const minAmountOut = 0; // Calculate proper slippage in production
  
  await routerContract.connect(wallet).swapExactTokensForTokens(
    amountIn,
    minAmountOut,
    [tokenIn, tokenOut],
    to,
    deadline
  );
}
```

### Добавление ликвидности

```typescript
async function addLiquidity(
  routerContract: Contract,
  wallet: Wallet,
  tokenA: string,
  tokenB: string,
  amountA: bigint,
  amountB: bigint
) {
  // Approve both tokens
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, wallet);
  
  await tokenAContract.approve(routerContract.address, amountA);
  await tokenBContract.approve(routerContract.address, amountB);
  
  // Add liquidity
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
  
  await routerContract.connect(wallet).addLiquidity(
    tokenA,
    tokenB,
    amountA,
    amountB,
    0, // minAmountA - calculate proper slippage
    0, // minAmountB - calculate proper slippage
    wallet.address,
    deadline
  );
}
```

## Развёртывание

### Развёртывание в тестовой сети

1. Укажите параметры тестовой сети в `.env`
2. Разверните контракты с помощью скриптов развёртывания:
```bash
pnpm deploy:testnet
```
3. Верифицируйте контракты в обозревателе блоков тестовой сети
4. Обновите конфигурацию фронтенда

### Развёртывание в основной сети

1. Проведите тщательное тестирование в тестовой сети
2. Пройдите аудит безопасности (при необходимости)
3. Разверните контракты в основной сети
4. Верифицируйте контракты
5. Обновите конфигурацию продакшена

## Мониторинг и обслуживание

### Мониторинг контрактов

- Настройте мониторинг событий для критически важных функций
- Отслеживайте расход газа и возможности оптимизации
- Отслеживайте взаимодействия с контрактами и активность пользователей

### Вопросы безопасности

- Регулярные аудиты безопасности
- Управление контролем доступа
- Механизмы экстренной приостановки
- Процедуры обновления

## Дополнительные ресурсы

- **[Репозиторий Mezo Earn](https://github.com/mezo-org/tigris.git)** — основной репозиторий
- **[Документация Solidly](https://docs.solidly.com/)** — документация протокола Solidly
- **[Документация по сети Mezo](/docs/ru/docs/developers/getting-started/configure-environment)** — настройка сети
- **[Руководство по верификации контрактов](/docs/ru/docs/developers/contracts-reference)** — верификация контрактов

:::note
Подробное описание архитектуры, токеномики и механики протокола см. в README и документации репозитория Mezo Earn.
:::

## Поддержка

Чтобы получить поддержку при разработке:
- Присоединяйтесь к [Discord Mezo](https://discord.com/invite/mezo)
- Просмотрите [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Ознакомьтесь с разделом [FAQ](/docs/ru/docs/developers/getting-started/FAQs)
