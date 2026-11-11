---
title: Mezo Earn Development Guide
description: >-
  Comprehensive guide for building on Mezo Earn, the Mezo gauge system and DEX
  inspired by Solidly.
topic: developers
---
Mezo Earn is the smart contract system powering the Mezo gauge system and decentralized exchange (DEX). This guide will help you understand how to build and interact with Mezo Earn contracts.

📄 **[Download the Mezo Earn Whitepaper (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — For a comprehensive overview of the economic incentive framework, dual-token model, and tokenomics.

## Overview

Mezo Earn provides:
- **Decentralized Exchange (DEX)**: Automated market maker for token swaps
- **Gauge System**: Voting and reward distribution mechanism
- **Solidly-inspired Architecture**: Efficient ve-tokenomics and liquidity management

## Repository Structure

The [Mezo Earn repository](https://github.com/mezo-org/tigris.git) contains:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: Smart contracts written in Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: Frontend application for interacting with contracts
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: Cloudflare-based infrastructure components
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: CI/CD automation

## Development Setup

### Prerequisites

- Node.js (check [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) for exact version)
- pnpm package manager
- Git
- Foundry (for smart contract development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up pre-commit hooks:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Testing Pre-commit Hooks

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Smart Contract Development

### Contract Architecture

Mezo Earn contracts are organized in the [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity) directory. Key components include:

- **Core DEX Contracts**: Automated market maker functionality
- **Gauge Contracts**: Voting and reward distribution
- **Token Contracts**: ERC20 implementations
- **Utility Contracts**: Helper functions and libraries

### Development Workflow

1. **Write Contracts**: Create or modify Solidity files in `solidity/`
2. **Test Contracts**: Write comprehensive tests for your contracts
3. **Deploy**: Use deployment scripts to deploy to testnet/mainnet
4. **Verify**: Verify contracts on block explorers

### Compiling Contracts

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Frontend Development

The [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) directory contains the frontend application for interacting with Mezo Earn contracts.

### Key Features

- **Swap Interface**: Token swapping functionality
- **Liquidity Management**: Add/remove liquidity from pools
- **Gauge Voting**: Participate in gauge voting and rewards
- **Portfolio Management**: Track positions and rewards

### Development Commands

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

## Integration Guide

### Connecting to Mezo Earn Contracts

1. **Get Contract Addresses**: Deployed contract addresses for Mezo testnet/mainnet
2. **ABI Integration**: Import contract ABIs for interaction
3. **Web3 Provider**: Connect to Mezo network via RPC

### Example Integration

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

### Swapping Tokens

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

### Adding Liquidity

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

### Testnet Deployment

1. Configure testnet parameters in `.env`
2. Deploy contracts using deployment scripts:
```bash
pnpm deploy:testnet
```
3. Verify contracts on testnet explorer
4. Update frontend configuration

### Mainnet Deployment

1. Complete thorough testing on testnet
2. Security audit (if required)
3. Deploy to mainnet
4. Verify contracts
5. Update production configuration

## Monitoring and Maintenance

### Contract Monitoring

- Set up event monitoring for critical functions
- Monitor gas usage and optimization opportunities
- Track contract interactions and user activity

### Security Considerations

- Regular security audits
- Access control management
- Emergency pause mechanisms
- Upgrade procedures

## Additional Resources

- **[Mezo Earn Repository](https://github.com/mezo-org/tigris.git)** - Main repository
- **[Solidly Documentation](https://docs.solidly.com/)** - Solidly protocol documentation
- **[Mezo Network Documentation](/docs/developers/getting-started/configure-environment)** - Network configuration
- **[Contract Verification Guide](/docs/users/resources/contracts-reference)** - Contract verification

:::note
For detailed architecture, tokenomics, and protocol mechanics, refer to the Mezo Earn repository README and documentation.
:::

## Support

For development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check the [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Review the [FAQ](/docs/developers/getting-started/FAQs)

