---
title: Guide de développement Mezo Earn
description: >-
  Guide complet pour développer sur Mezo Earn, le système de gauges et le DEX de
  Mezo inspirés de Solidly.
topic: developers
---
Mezo Earn est le système de contrats intelligents qui alimente le système de gauges et la plateforme d'échange décentralisée (DEX) de Mezo. Ce guide vous aide à comprendre comment développer sur les contrats Mezo Earn et interagir avec eux.

📄 **[Télécharger le livre blanc Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — pour un aperçu complet du cadre d'incitations économiques, du modèle à deux jetons et de la tokenomics.

## Aperçu

Mezo Earn fournit :
- **Plateforme d'échange décentralisée (DEX)** : teneur de marché automatisé (AMM) pour les swaps de jetons
- **Système de gauges** : mécanisme de vote et de distribution des récompenses
- **Architecture inspirée de Solidly** : ve-tokenomics et gestion de la liquidité efficaces

## Structure du dépôt

Le [dépôt Mezo Earn](https://github.com/mezo-org/tigris.git) contient :

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)** : contrats intelligents écrits en Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)** : application frontend pour interagir avec les contrats
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)** : composants d'infrastructure basés sur Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)** : automatisation CI/CD

## Configuration de l'environnement de développement

### Prérequis

- Node.js (consultez [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) pour la version exacte)
- Gestionnaire de paquets pnpm
- Git
- Foundry (pour le développement de contrats intelligents)

### Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Installez les dépendances :
```bash
pnpm install
```

3. Configurez les hooks pre-commit :
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Tester les hooks pre-commit

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Développement de contrats intelligents

### Architecture des contrats

Les contrats Mezo Earn sont organisés dans le répertoire [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Les principaux composants sont :

- **Contrats DEX principaux** : fonctionnalités de teneur de marché automatisé
- **Contrats de gauges** : vote et distribution des récompenses
- **Contrats de jetons** : implémentations ERC20
- **Contrats utilitaires** : fonctions d'aide et bibliothèques

### Flux de travail de développement

1. **Écrire les contrats** : créez ou modifiez des fichiers Solidity dans `solidity/`
2. **Tester les contrats** : écrivez des tests complets pour vos contrats
3. **Déployer** : utilisez les scripts de déploiement pour déployer sur le testnet/mainnet
4. **Vérifier** : vérifiez les contrats sur les explorateurs de blocs

### Compiler les contrats

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

## Développement frontend

Le répertoire [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) contient l'application frontend permettant d'interagir avec les contrats Mezo Earn.

### Fonctionnalités clés

- **Interface de swap** : fonctionnalité d'échange de jetons
- **Gestion de la liquidité** : ajout et retrait de liquidité dans les pools
- **Vote sur les gauges** : participation au vote sur les gauges et aux récompenses
- **Gestion de portefeuille** : suivi des positions et des récompenses

### Commandes de développement

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

## Guide d'intégration

### Se connecter aux contrats Mezo Earn

1. **Obtenir les adresses des contrats** : adresses des contrats déployés sur le testnet/mainnet Mezo
2. **Intégration des ABI** : importez les ABI des contrats pour interagir avec eux
3. **Fournisseur Web3** : connectez-vous au réseau Mezo via RPC

### Exemple d'intégration

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

### Échanger des jetons

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

### Ajouter de la liquidité

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

## Déploiement

### Déploiement sur le testnet

1. Configurez les paramètres du testnet dans `.env`
2. Déployez les contrats à l'aide des scripts de déploiement :
```bash
pnpm deploy:testnet
```
3. Vérifiez les contrats sur l'explorateur du testnet
4. Mettez à jour la configuration du frontend

### Déploiement sur le mainnet

1. Effectuez des tests approfondis sur le testnet
2. Audit de sécurité (si nécessaire)
3. Déployez sur le mainnet
4. Vérifiez les contrats
5. Mettez à jour la configuration de production

## Supervision et maintenance

### Supervision des contrats

- Mettez en place une surveillance des événements pour les fonctions critiques
- Surveillez la consommation de gaz et les possibilités d'optimisation
- Suivez les interactions avec les contrats et l'activité des utilisateurs

### Considérations de sécurité

- Audits de sécurité réguliers
- Gestion du contrôle d'accès
- Mécanismes de pause d'urgence
- Procédures de mise à niveau

## Ressources supplémentaires

- **[Dépôt Mezo Earn](https://github.com/mezo-org/tigris.git)** – dépôt principal
- **[Documentation Solidly](https://docs.solidly.com/)** – documentation du protocole Solidly
- **[Documentation du réseau Mezo](/docs/fr/docs/developers/getting-started/configure-environment)** – configuration du réseau
- **[Guide de vérification des contrats](/docs/fr/docs/developers/contracts-reference)** – vérification des contrats

:::note
Pour en savoir plus sur l'architecture, la tokenomics et les mécanismes du protocole, consultez le README et la documentation du dépôt Mezo Earn.
:::

## Assistance

Pour obtenir de l'aide sur le développement :
- Rejoignez le [Discord Mezo](https://discord.com/invite/mezo)
- Consultez les [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Parcourez la [FAQ](/docs/fr/docs/developers/getting-started/FAQs)

