---
title: Посібник із розробки для Mezo Earn
description: >-
  Вичерпний посібник із розробки на Mezo Earn — системі gauges і DEX від Mezo,
  натхненних Solidly.
topic: developers
---
Mezo Earn — це система смарт-контрактів, на якій працюють система gauges і децентралізована біржа (DEX) Mezo. Цей посібник допоможе вам зрозуміти, як розробляти рішення на основі контрактів Mezo Earn і взаємодіяти з ними.

📄 **[Завантажити Whitepaper Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — вичерпний огляд економічної моделі стимулів, двотокенної моделі та токеноміки.

## Огляд

Mezo Earn надає:
- **Децентралізована біржа (DEX)**: автоматизований маркетмейкер для обміну токенів
- **Система gauges**: механізм голосування й розподілу винагород
- **Архітектура, натхненна Solidly**: ефективна ve-токеноміка й керування ліквідністю

## Структура репозиторію

[Репозиторій Mezo Earn](https://github.com/mezo-org/tigris.git) містить:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: смарт-контракти, написані на Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: фронтенд-застосунок для взаємодії з контрактами
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: інфраструктурні компоненти на базі Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: автоматизація CI/CD

## Налаштування для розробки

### Передумови

- Node.js (точну версію див. у [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc))
- менеджер пакетів pnpm
- Git
- Foundry (для розробки смарт-контрактів)

### Встановлення

1. Клонуйте репозиторій:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Установіть залежності:
```bash
pnpm install
```

3. Налаштуйте pre-commit-хуки:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Тестування pre-commit-хуків

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Розробка смарт-контрактів

### Архітектура контрактів

Контракти Mezo Earn розміщено в каталозі [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Ключові компоненти:

- **Основні контракти DEX**: функціональність автоматизованого маркетмейкера
- **Контракти gauges**: голосування й розподіл винагород
- **Контракти токенів**: реалізації ERC20
- **Допоміжні контракти**: допоміжні функції та бібліотеки

### Процес розробки

1. **Напишіть контракти**: створіть або змініть файли Solidity у `solidity/`
2. **Протестуйте контракти**: напишіть вичерпні тести для своїх контрактів
3. **Розгорніть**: скористайтеся скриптами розгортання, щоб розгорнути контракти в testnet/mainnet
4. **Верифікуйте**: верифікуйте контракти в оглядачах блоків

### Компіляція контрактів

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Тестування

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Розробка фронтенду

Каталог [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) містить фронтенд-застосунок для взаємодії з контрактами Mezo Earn.

### Ключові можливості

- **Інтерфейс обміну**: функціональність обміну токенів
- **Керування ліквідністю**: додавання та вилучення ліквідності з пулів
- **Голосування за gauges**: участь у голосуванні за gauges і отриманні винагород
- **Керування портфелем**: відстеження позицій і винагород

### Команди для розробки

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

## Посібник з інтеграції

### Під'єднання до контрактів Mezo Earn

1. **Отримайте адреси контрактів**: адреси розгорнутих контрактів для Mezo testnet/mainnet
2. **Інтеграція ABI**: імпортуйте ABI контрактів для взаємодії
3. **Web3-провайдер**: під'єднайтеся до мережі Mezo через RPC

### Приклад інтеграції

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

### Обмін токенів

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

### Додавання ліквідності

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

## Розгортання

### Розгортання в testnet

1. Налаштуйте параметри testnet у `.env`
2. Розгорніть контракти за допомогою скриптів розгортання:
```bash
pnpm deploy:testnet
```
3. Верифікуйте контракти в оглядачі блоків testnet
4. Оновіть конфігурацію фронтенду

### Розгортання в mainnet

1. Проведіть ретельне тестування в testnet
2. Аудит безпеки (за потреби)
3. Розгортання в mainnet
4. Верифікація контрактів
5. Оновлення продакшн-конфігурації

## Моніторинг і обслуговування

### Моніторинг контрактів

- Налаштуйте моніторинг подій для критичних функцій
- Відстежуйте використання газу й можливості оптимізації
- Відстежуйте взаємодію з контрактами та активність користувачів

### Міркування безпеки

- Регулярні аудити безпеки
- Керування контролем доступу
- Механізми екстреного призупинення
- Процедури оновлення

## Додаткові ресурси

- **[Репозиторій Mezo Earn](https://github.com/mezo-org/tigris.git)** - основний репозиторій
- **[Документація Solidly](https://docs.solidly.com/)** - документація протоколу Solidly
- **[Документація мережі Mezo](/docs/ua/docs/developers/getting-started/configure-environment)** - конфігурація мережі
- **[Посібник з верифікації контрактів](/docs/ua/docs/developers/contracts-reference)** - верифікація контрактів

:::note
Докладніше про архітектуру, токеноміку та механіку протоколу див. у README і документації репозиторію Mezo Earn.
:::

## Підтримка

Щоб отримати допомогу з розробкою:
- Приєднуйтеся до [Discord Mezo](https://discord.com/invite/mezo)
- Перегляньте [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Ознайомтеся з [FAQ](/docs/ua/docs/developers/getting-started/FAQs)

