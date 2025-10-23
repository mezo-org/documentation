---
title: Tigris DEX Development Guide
description: >-
  Comprehensive guide for building on Tigris, the Mezo gauge system and DEX
  inspired by Solidly.
topic: developers
---

# Tigris DEX Development Guide

Tigris is the smart contract system powering the Mezo gauge system and decentralized exchange (DEX), inspired by Solidly. This guide will help you understand how to build and interact with Tigris contracts.

## Overview

Tigris provides:
- **Decentralized Exchange (DEX)**: Automated market maker for token swaps
- **Gauge System**: Voting and reward distribution mechanism
- **Solidly-inspired Architecture**: Efficient ve-tokenomics and liquidity management

## Repository Structure

The [Tigris repository](https://github.com/mezo-org/tigris.git) contains:

- `solidity/`: Smart contracts written in Solidity
- `dapp/`: Frontend application for interacting with contracts
- `infrastructure/`: Cloudflare-based infrastructure components
- `.github/workflows/`: CI/CD automation

## Development Setup

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- pnpm package manager
- Git

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

Tigris contracts are organized in the `solidity/` directory. Key components include:

- **Core DEX Contracts**: Automated market maker functionality
- **Gauge Contracts**: Voting and reward distribution
- **Token Contracts**: ERC20 implementations
- **Utility Contracts**: Helper functions and libraries

### Development Workflow

1. **Write Contracts**: Create or modify Solidity files in `solidity/`
2. **Test Contracts**: Write comprehensive tests for your contracts
3. **Deploy**: Use deployment scripts to deploy to testnet/mainnet
4. **Verify**: Verify contracts on block explorers

### Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>
```

## Frontend Development

The `dapp/` directory contains the frontend application for interacting with Tigris contracts.

### Key Features

- **Swap Interface**: Token swapping functionality
- **Liquidity Management**: Add/remove liquidity from pools
- **Gauge Voting**: Participate in gauge voting and rewards
- **Portfolio Management**: Track positions and rewards

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Integration Guide

### Connecting to Tigris Contracts

1. **Get Contract Addresses**: Deployed contract addresses for Mezo testnet/mainnet
2. **ABI Integration**: Import contract ABIs for interaction
3. **Web3 Provider**: Connect to Mezo network via RPC

### Example Integration

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.providers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

## Deployment

### Testnet Deployment

1. Configure testnet parameters
2. Deploy contracts using deployment scripts
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

## Resources

- [Tigris Repository](https://github.com/mezo-org/tigris.git)
- [Solidly Documentation](https://docs.solidly.com/)
- [Mezo Network Documentation](/docs/developers/getting-started/configure-environment)
- [Contract Verification Guide](/docs/developers/contracts-reference)

## Support

For development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check the [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Review the [FAQ](/docs/developers/getting-started/FAQs)
