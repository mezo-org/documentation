---
title: Ontwikkelhandleiding voor Mezo Earn
description: >-
  Uitgebreide handleiding voor bouwen op Mezo Earn, het gaugesysteem en de DEX
  van Mezo, geïnspireerd op Solidly.
topic: developers
---
Mezo Earn is het smart-contractsysteem achter het gaugesysteem en de gedecentraliseerde exchange (DEX) van Mezo. Met deze handleiding leer je hoe je met de contracten van Mezo Earn bouwt en ermee werkt.

📄 **[Download de whitepaper van Mezo Earn (pdf)](/docs/Mezo_Earn_Whitepaper.pdf)**: een uitgebreid overzicht van het economische incentivekader, het model met twee tokens en de tokenomics.

## Overzicht

Mezo Earn biedt:
- **Gedecentraliseerde exchange (DEX)**: automated market maker voor tokenswaps
- **Gaugesysteem**: mechanisme voor stemmen en het verdelen van beloningen
- **Architectuur geïnspireerd op Solidly**: efficiënte ve-tokenomics en liquiditeitsbeheer

## Structuur van de repository

De [Mezo Earn-repository](https://github.com/mezo-org/tigris.git) bevat:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: smart contracts geschreven in Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: frontendapplicatie voor interactie met de contracten
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: infrastructuurcomponenten op basis van Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: CI/CD-automatisering

## Ontwikkelomgeving opzetten

### Vereisten

- Node.js (zie [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) voor de exacte versie)
- pnpm als package manager
- Git
- Foundry (voor de ontwikkeling van smart contracts)

### Installatie

1. Kloon de repository:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Installeer de dependencies:
```bash
pnpm install
```

3. Stel de pre-commit-hooks in:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Pre-commit-hooks testen

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Smart contracts ontwikkelen

### Contractarchitectuur

De contracten van Mezo Earn staan in de map [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). De belangrijkste componenten zijn:

- **Kerncontracten van de DEX**: functionaliteit van de automated market maker
- **Gaugecontracten**: stemmen en het verdelen van beloningen
- **Tokencontracten**: ERC20-implementaties
- **Hulpcontracten**: hulpfuncties en libraries

### Ontwikkelworkflow

1. **Contracten schrijven**: maak of wijzig Solidity-bestanden in `solidity/`
2. **Contracten testen**: schrijf uitgebreide tests voor je contracten
3. **Deployen**: gebruik deploymentscripts om naar testnet/mainnet te deployen
4. **Verifiëren**: verifieer de contracten in block explorers

### Contracten compileren

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Testen

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Frontendontwikkeling

De map [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) bevat de frontendapplicatie voor interactie met de contracten van Mezo Earn.

### Belangrijkste functies

- **Swapinterface**: functionaliteit voor het swappen van tokens
- **Liquiditeitsbeheer**: liquiditeit toevoegen aan en verwijderen uit pools
- **Stemmen op gauges**: deelnemen aan stemmen op gauges en beloningen
- **Portfoliobeheer**: posities en beloningen bijhouden

### Ontwikkelcommando's

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

## Integratiehandleiding

### Verbinden met de contracten van Mezo Earn

1. **Contractadressen ophalen**: gedeployde contractadressen voor Mezo testnet/mainnet
2. **ABI-integratie**: importeer de ABI's van de contracten voor interactie
3. **Web3-provider**: maak via RPC verbinding met het Mezo-netwerk

### Voorbeeldintegratie

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

### Tokens swappen

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

### Liquiditeit toevoegen

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

## Deployment

### Deployment op testnet

1. Configureer de testnetparameters in `.env`
2. Deploy de contracten met de deploymentscripts:
```bash
pnpm deploy:testnet
```
3. Verifieer de contracten in de testnet-explorer
4. Werk de frontendconfiguratie bij

### Deployment op mainnet

1. Test grondig op testnet
2. Laat een beveiligingsaudit uitvoeren (indien nodig)
3. Deploy naar mainnet
4. Verifieer de contracten
5. Werk de productieconfiguratie bij

## Monitoring en onderhoud

### Contracten monitoren

- Stel monitoring van events in voor kritieke functies
- Monitor het gasverbruik en kansen voor optimalisatie
- Volg interacties met de contracten en gebruikersactiviteit

### Beveiligingsoverwegingen

- Regelmatige beveiligingsaudits
- Beheer van toegangsrechten
- Mechanismen voor een noodpauze
- Upgradeprocedures

## Aanvullende bronnen

- **[Mezo Earn-repository](https://github.com/mezo-org/tigris.git)** - hoofdrepository
- **[Solidly-documentatie](https://docs.solidly.com/)** - documentatie van het Solidly-protocol
- **[Documentatie over het Mezo-netwerk](/docs/nl/docs/developers/getting-started/configure-environment)** - netwerkconfiguratie
- **[Handleiding voor contractverificatie](/docs/nl/docs/developers/contracts-reference)** - contractverificatie

:::note
Raadpleeg de README en documentatie van de Mezo Earn-repository voor gedetailleerde informatie over de architectuur, tokenomics en werking van het protocol.
:::

## Ondersteuning

Voor ondersteuning bij de ontwikkeling:
- Word lid van de [Mezo Discord](https://discord.com/invite/mezo)
- Bekijk de [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Lees de [FAQ](/docs/nl/docs/developers/getting-started/FAQs)
