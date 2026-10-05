---
title: Mezo Earn – Entwicklungsleitfaden
description: >-
  Umfassender Leitfaden für die Entwicklung auf Mezo Earn, dem von Solidly
  inspirierten Gauge-System und der DEX von Mezo.
topic: developers
---
Mezo Earn ist das Smart-Contract-System hinter dem Gauge-System und der dezentralen Börse (DEX) von Mezo. Dieser Leitfaden hilft Ihnen zu verstehen, wie Sie mit den Mezo-Earn-Contracts entwickeln und interagieren.

📄 **[Mezo-Earn-Whitepaper herunterladen (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** – für einen umfassenden Überblick über das ökonomische Anreizsystem, das Dual-Token-Modell und die Tokenomics.

## Übersicht

Mezo Earn bietet:
- **Dezentrale Börse (DEX)**: Automated Market Maker für Token-Swaps
- **Gauge-System**: Mechanismus für Abstimmungen und die Verteilung von Belohnungen
- **Von Solidly inspirierte Architektur**: effiziente ve-Tokenomics und Liquiditätsverwaltung

## Repository-Struktur

Das [Mezo-Earn-Repository](https://github.com/mezo-org/tigris.git) enthält:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: in Solidity geschriebene Smart Contracts
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: Frontend-Anwendung für die Interaktion mit den Contracts
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: Cloudflare-basierte Infrastrukturkomponenten
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: CI/CD-Automatisierung

## Einrichtung der Entwicklungsumgebung

### Voraussetzungen

- Node.js (die genaue Version finden Sie in der [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc))
- Paketmanager pnpm
- Git
- Foundry (für die Smart-Contract-Entwicklung)

### Installation

1. Klonen Sie das Repository:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Installieren Sie die Abhängigkeiten:
```bash
pnpm install
```

3. Richten Sie die Pre-Commit-Hooks ein:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Pre-Commit-Hooks testen

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Smart-Contract-Entwicklung

### Contract-Architektur

Die Mezo-Earn-Contracts sind im Verzeichnis [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity) organisiert. Zu den wichtigsten Komponenten gehören:

- **Zentrale DEX-Contracts**: Funktionen des Automated Market Makers
- **Gauge-Contracts**: Abstimmungen und Verteilung von Belohnungen
- **Token-Contracts**: ERC20-Implementierungen
- **Utility-Contracts**: Hilfsfunktionen und Bibliotheken

### Entwicklungsablauf

1. **Contracts schreiben**: Erstellen oder ändern Sie Solidity-Dateien in `solidity/`
2. **Contracts testen**: Schreiben Sie umfassende Tests für Ihre Contracts
3. **Deployen**: Deployen Sie mit den Deployment-Skripten ins Testnet/Mainnet
4. **Verifizieren**: Verifizieren Sie die Contracts in Block-Explorern

### Contracts kompilieren

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Tests

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Frontend-Entwicklung

Das Verzeichnis [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) enthält die Frontend-Anwendung für die Interaktion mit den Mezo-Earn-Contracts.

### Wichtige Funktionen

- **Swap-Oberfläche**: Funktionen zum Tauschen von Token
- **Liquiditätsverwaltung**: Liquidität zu Pools hinzufügen bzw. daraus entfernen
- **Gauge-Abstimmung**: An Gauge-Abstimmungen und Belohnungen teilnehmen
- **Portfolioverwaltung**: Positionen und Belohnungen verfolgen

### Entwicklungsbefehle

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

## Integrationsleitfaden

### Verbindung zu den Mezo-Earn-Contracts herstellen

1. **Contract-Adressen beschaffen**: Adressen der deployten Contracts für das Mezo Testnet/Mainnet
2. **ABI-Integration**: Importieren Sie die Contract-ABIs für die Interaktion
3. **Web3-Provider**: Verbinden Sie sich über RPC mit dem Mezo-Netzwerk

### Integrationsbeispiel

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

### Token tauschen

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

### Liquidität hinzufügen

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

### Deployment im Testnet

1. Konfigurieren Sie die Testnet-Parameter in `.env`
2. Deployen Sie die Contracts mit den Deployment-Skripten:
```bash
pnpm deploy:testnet
```
3. Verifizieren Sie die Contracts im Testnet-Explorer
4. Aktualisieren Sie die Frontend-Konfiguration

### Deployment im Mainnet

1. Testen Sie gründlich im Testnet
2. Sicherheitsaudit (falls erforderlich)
3. Deployen Sie ins Mainnet
4. Verifizieren Sie die Contracts
5. Aktualisieren Sie die Produktionskonfiguration

## Überwachung und Wartung

### Contract-Überwachung

- Richten Sie eine Event-Überwachung für kritische Funktionen ein
- Überwachen Sie den Gasverbrauch und Optimierungsmöglichkeiten
- Verfolgen Sie Contract-Interaktionen und Nutzeraktivität

### Sicherheitsaspekte

- Regelmäßige Sicherheitsaudits
- Verwaltung der Zugriffskontrolle
- Mechanismen für Notfallpausen
- Upgrade-Verfahren

## Weitere Ressourcen

- **[Mezo-Earn-Repository](https://github.com/mezo-org/tigris.git)** – Haupt-Repository
- **[Solidly-Dokumentation](https://docs.solidly.com/)** – Dokumentation des Solidly-Protokolls
- **[Dokumentation zum Mezo-Netzwerk](/docs/de/docs/developers/getting-started/configure-environment)** – Netzwerkkonfiguration
- **[Leitfaden zur Contract-Verifizierung](/docs/de/docs/developers/contracts-reference)** – Contract-Verifizierung

:::note
Ausführliche Informationen zu Architektur, Tokenomics und Protokollmechanismen finden Sie in der README und der Dokumentation des Mezo-Earn-Repositorys.
:::

## Support

Unterstützung bei der Entwicklung:
- Treten Sie dem [Mezo Discord](https://discord.com/invite/mezo) bei
- Sehen Sie sich die [GitHub Issues](https://github.com/mezo-org/tigris/issues) an
- Lesen Sie die [FAQ](/docs/de/docs/developers/getting-started/FAQs)
