---
title: Guía de desarrollo de Mezo Earn
description: >-
  Guía completa para construir sobre Mezo Earn, el sistema de gauges y el DEX de
  Mezo inspirados en Solidly.
topic: developers
---
Mezo Earn es el sistema de contratos inteligentes que impulsa el sistema de gauges y el exchange descentralizado (DEX) de Mezo. Esta guía te ayudará a entender cómo construir con los contratos de Mezo Earn e interactuar con ellos.

📄 **[Descarga el whitepaper de Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)**: para obtener una visión completa del marco de incentivos económicos, el modelo de doble token y la tokenómica.

## Descripción general

Mezo Earn proporciona:
- **Exchange descentralizado (DEX)**: creador de mercado automatizado (AMM) para swaps de tokens
- **Sistema de gauges**: mecanismo de votación y distribución de recompensas
- **Arquitectura inspirada en Solidly**: ve-tokenómica y gestión de liquidez eficientes

## Estructura del repositorio

El [repositorio de Mezo Earn](https://github.com/mezo-org/tigris.git) contiene:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: contratos inteligentes escritos en Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: aplicación frontend para interactuar con los contratos
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: componentes de infraestructura basados en Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: automatización de CI/CD

## Configuración del entorno de desarrollo

### Requisitos previos

- Node.js (consulta [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) para ver la versión exacta)
- Gestor de paquetes pnpm
- Git
- Foundry (para el desarrollo de contratos inteligentes)

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Configura los hooks de pre-commit:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Probar los hooks de pre-commit

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Desarrollo de contratos inteligentes

### Arquitectura de los contratos

Los contratos de Mezo Earn están organizados en el directorio [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Entre los componentes clave se incluyen:

- **Contratos principales del DEX**: funcionalidad de creador de mercado automatizado
- **Contratos de gauges**: votación y distribución de recompensas
- **Contratos de tokens**: implementaciones de ERC20
- **Contratos de utilidades**: funciones auxiliares y bibliotecas

### Flujo de trabajo de desarrollo

1. **Escribe los contratos**: crea o modifica archivos de Solidity en `solidity/`
2. **Prueba los contratos**: escribe pruebas exhaustivas para tus contratos
3. **Despliega**: usa los scripts de despliegue para desplegar en testnet/mainnet
4. **Verifica**: verifica los contratos en exploradores de bloques

### Compilar los contratos

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Pruebas

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Desarrollo del frontend

El directorio [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) contiene la aplicación frontend para interactuar con los contratos de Mezo Earn.

### Funcionalidades clave

- **Interfaz de swap**: funcionalidad de intercambio de tokens
- **Gestión de liquidez**: agregar/retirar liquidez de los pools
- **Votación de gauges**: participa en la votación de gauges y en las recompensas
- **Gestión del portafolio**: haz seguimiento de posiciones y recompensas

### Comandos de desarrollo

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

## Guía de integración

### Conectarse a los contratos de Mezo Earn

1. **Obtén las direcciones de los contratos**: direcciones de los contratos desplegados en la testnet/mainnet de Mezo
2. **Integración de ABI**: importa las ABI de los contratos para interactuar con ellos
3. **Proveedor Web3**: conéctate a la red Mezo mediante RPC

### Ejemplo de integración

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

### Hacer swap de tokens

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

### Agregar liquidez

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

## Despliegue

### Despliegue en testnet

1. Configura los parámetros de testnet en `.env`
2. Despliega los contratos con los scripts de despliegue:
```bash
pnpm deploy:testnet
```
3. Verifica los contratos en el explorador de testnet
4. Actualiza la configuración del frontend

### Despliegue en mainnet

1. Completa pruebas exhaustivas en testnet
2. Auditoría de seguridad (si es necesaria)
3. Despliega en mainnet
4. Verifica los contratos
5. Actualiza la configuración de producción

## Monitoreo y mantenimiento

### Monitoreo de contratos

- Configura el monitoreo de eventos para las funciones críticas
- Monitorea el uso de gas y las oportunidades de optimización
- Haz seguimiento de las interacciones con los contratos y de la actividad de los usuarios

### Consideraciones de seguridad

- Auditorías de seguridad periódicas
- Gestión del control de acceso
- Mecanismos de pausa de emergencia
- Procedimientos de actualización

## Recursos adicionales

- **[Repositorio de Mezo Earn](https://github.com/mezo-org/tigris.git)**: repositorio principal
- **[Documentación de Solidly](https://docs.solidly.com/)**: documentación del protocolo Solidly
- **[Documentación de la red Mezo](/docs/es/docs/developers/getting-started/configure-environment)**: configuración de la red
- **[Guía de verificación de contratos](/docs/es/docs/developers/contracts-reference)**: verificación de contratos

:::note
Para obtener detalles sobre la arquitectura, la tokenómica y la mecánica del protocolo, consulta el README y la documentación del repositorio de Mezo Earn.
:::

## Soporte

Para obtener soporte de desarrollo:
- Únete al [Discord de Mezo](https://discord.com/invite/mezo)
- Consulta los [issues de GitHub](https://github.com/mezo-org/tigris/issues)
- Revisa las [preguntas frecuentes](/docs/es/docs/developers/getting-started/FAQs)

