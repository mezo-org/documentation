---
title: Mezod Chain Client Development Guide
description: >-
  Complete guide for developing with Mezod, the reference client implementation
  for Mezo chain.
topic: developers
---

# Mezod Chain Client Development Guide

Mezod is the reference client implementation for the Mezo chain, a Bitcoin-first blockchain designed for user ownership, reliable bridging with tBTC, BTC for gas, dual staking model, and EVM compatibility.

## Overview

Mezo is a Cosmos SDK-based chain with EVM compatibility running on top of Comet BFT consensus engine. The Mezod client codebase was forked from the LGPL version of Evmos and heavily modified for Mezo's specific requirements.

### Key Features

- **Bitcoin-first Design**: Native BTC integration and gas payments
- **EVM Compatibility**: Full Ethereum Virtual Machine support
- **tBTC Bridging**: Reliable cross-chain Bitcoin transfers
- **Dual Staking Model**: Rewards and validation mechanisms
- **User Ownership**: Decentralized governance and control

## Repository Structure

The [Mezod repository](https://github.com/mezo-org/mezod.git) contains:

- **Go Modules**: Core blockchain client implementation
- **EVM Integration**: Ethereum compatibility layer
- **Consensus Engine**: Comet BFT implementation
- **Cosmos SDK**: Modified SDK for Mezo-specific features
- **Configuration**: Chain configuration and parameters

## Development Setup

### Prerequisites

- Go 1.21+ (check `go.mod` for exact version)
- Git
- Make
- Docker (optional, for containerized development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mezo-org/mezod.git
cd mezod
```

2. Install Go dependencies:
```bash
go mod download
```

3. Build the client:
```bash
make build
```

### Development Environment

1. **Local Development**:
```bash
# Start local development node
make dev

# Run tests
make test

# Lint code
make lint
```

2. **Docker Development**:
```bash
# Build Docker image
docker build -t mezod .

# Run containerized node
docker run -p 26657:26657 -p 8545:8545 mezod
```

## Chain Configuration

### Network Parameters

Mezod supports multiple network configurations:

- **Mainnet**: Production Mezo network
- **Testnet**: Public testing network
- **Local**: Development network

### Configuration Files

Key configuration files:
- `config.toml`: Node configuration
- `app.toml`: Application-specific settings
- `client.toml`: Client configuration

## EVM Integration

### Ethereum Compatibility

Mezod provides full EVM compatibility, allowing you to:

- Deploy Ethereum smart contracts
- Use Ethereum tooling (Hardhat, Truffle, etc.)
- Interact with contracts using Web3 libraries

### Gas and Fees

- **BTC for Gas**: Pay transaction fees in Bitcoin
- **Dynamic Pricing**: Gas prices adjust based on network conditions
- **EVM Gas Model**: Compatible with Ethereum gas calculations

## Node Types

### Full Node

A complete node that stores the entire blockchain:

```bash
# Start full node
mezod start
```

### Light Client

A lightweight client for mobile and resource-constrained environments:

```bash
# Start light client
mezod start --mode light
```

### Archive Node

A node that stores all historical data:

```bash
# Start archive node
mezod start --mode archive
```

## RPC Endpoints

### Cosmos SDK RPC

- **Port**: 26657
- **Endpoints**: Standard Cosmos SDK RPC methods
- **WebSocket**: Real-time updates

### EVM RPC

- **Port**: 8545
- **Endpoints**: Ethereum-compatible JSON-RPC
- **Methods**: eth_getBalance, eth_sendTransaction, etc.

## Development Workflow

### Building Contracts

1. **Write Solidity Contracts**: Use standard Ethereum tooling
2. **Compile**: Use Hardhat, Truffle, or solc directly
3. **Deploy**: Deploy to Mezo testnet/mainnet
4. **Interact**: Use Web3 libraries or direct RPC calls

### Testing

```bash
# Run unit tests
make test

# Run integration tests
make test-integration

# Run specific test package
go test ./x/evm/...
```

## Integration Examples

### Web3 Integration

```javascript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.providers.JsonRpcProvider('https://rpc.mezo.org');

// Get network info
const network = await provider.getNetwork();
console.log('Network:', network);

// Deploy contract
const factory = new ethers.ContractFactory(abi, bytecode, signer);
const contract = await factory.deploy();
```

### Cosmos SDK Integration

```go
package main

import (
    "context"
    "github.com/cosmos/cosmos-sdk/client"
    "github.com/cosmos/cosmos-sdk/client/tx"
)

func main() {
    // Create client context
    clientCtx := client.Context{}
    
    // Create transaction builder
    txBuilder := clientCtx.TxConfig.NewTxBuilder()
    
    // Build and send transaction
    // ... transaction logic
}
```

## Monitoring and Debugging

### Logging

```bash
# Enable debug logging
mezod start --log-level debug

# Log to file
mezod start --log-file /path/to/logfile
```

### Metrics

- **Prometheus**: Built-in metrics collection
- **Grafana**: Dashboard for monitoring
- **Health Checks**: HTTP endpoints for health monitoring

## Deployment

### Production Deployment

1. **Hardware Requirements**: Minimum 8GB RAM, 100GB SSD
2. **Network Configuration**: Configure firewall and ports
3. **Security**: Set up proper access controls
4. **Monitoring**: Deploy monitoring stack

### Docker Deployment

```bash
# Production Docker deployment
docker run -d \
  --name mezod \
  -p 26657:26657 \
  -p 8545:8545 \
  -v /data:/root/.mezod \
  mezod:latest
```

## Troubleshooting

### Common Issues

1. **Connection Issues**: Check RPC endpoints and network connectivity
2. **Sync Problems**: Verify blockchain synchronization
3. **Gas Issues**: Monitor gas prices and adjust accordingly

### Debug Commands

```bash
# Check node status
mezod status

# View logs
mezod logs

# Reset node (caution: deletes data)
mezod unsafe-reset-all
```

## Resources

- [Mezod Repository](https://github.com/mezo-org/mezod.git)
- [Mezo Documentation](/docs/developers/getting-started/configure-environment)
- [Cosmos SDK Documentation](https://docs.cosmos.network/)
- [EVM Documentation](https://ethereum.org/en/developers/docs/evm/)
- [Testnet Guide](/docs/developers/testnet)

## Support

For development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check the [GitHub Issues](https://github.com/mezo-org/mezod/issues)
- Review the [FAQ](/docs/developers/getting-started/FAQs)
