---
title: Chains Configuration Guide
description: >-
  Complete guide for configuring and managing Mezo chain configurations and
  network parameters.
topic: developers
---

# Chains Configuration Guide

The [Chains repository](https://github.com/mezo-org/chains.git) contains configuration files, network parameters, and chain specifications for the Mezo ecosystem. This guide covers how to configure, deploy, and manage Mezo chains.

## Overview

The Chains repository provides:

- **Network Configurations**: Mainnet, testnet, and local configurations
- **Genesis Files**: Initial blockchain state and parameters
- **Chain Specifications**: Technical parameters and constants
- **Deployment Scripts**: Automated chain deployment tools
- **Monitoring Configs**: Observability and monitoring setups

## Repository Structure

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Network Configurations

### Mainnet Configuration

**Network Details**:
- Chain ID: `mezo-mainnet`
- RPC Endpoint: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Explorer: `https://explorer.mezo.org`

**Genesis Configuration**:
```json
{
  "chain_id": "mezo-mainnet",
  "genesis_time": "2024-01-01T00:00:00Z",
  "consensus_params": {
    "block": {
      "max_bytes": "22020096",
      "max_gas": "-1"
    },
    "evidence": {
      "max_age_num_blocks": "100000",
      "max_age_duration": "172800000000000"
    }
  }
}
```

### Testnet Configuration

**Network Details**:
- Chain ID: `mezo-testnet`
- RPC Endpoint: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Explorer: `https://testnet-explorer.mezo.org`

### Local Development Configuration

**Network Details**:
- Chain ID: `mezo-local`
- RPC Endpoint: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Chain Parameters

### Consensus Parameters

```toml
[consensus]
timeout_commit = "1s"
timeout_propose = "3s"
timeout_propose_delta = "500ms"
timeout_prevote = "1s"
timeout_prevote_delta = "500ms"
timeout_precommit = "1s"
timeout_precommit_delta = "500ms"
timeout_precommit_delta = "500ms"
```

### P2P Configuration

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API Configuration

```toml
[api]
enable = true
swagger = false
address = "tcp://0.0.0.0:1317"
max_open_connections = 1000
rpc_read_timeout = "10s"
rpc_write_timeout = "10s"
rpc_max_body_bytes = 1000000
```

## EVM Configuration

### Ethereum Compatibility Settings

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Gas Configuration

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Deployment Scripts

### Automated Deployment

```bash
#!/bin/bash
# deploy-chain.sh

set -e

CHAIN_ID=${1:-"mezo-testnet"}
NODE_TYPE=${2:-"validator"}

echo "Deploying $NODE_TYPE node for chain $CHAIN_ID"

# Clone chains repository
git clone https://github.com/mezo-org/chains.git
cd chains

# Copy configuration
cp configs/$CHAIN_ID/config.toml ~/.mezod/config/
cp configs/$CHAIN_ID/app.toml ~/.mezod/config/

# Initialize node
mezod init $NODE_TYPE --chain-id $CHAIN_ID

# Start node
mezod start
```

### Docker Deployment

```yaml
# docker-compose.yml
version: '3.8'

services:
  mezod:
    image: mezod:latest
    container_name: mezod-node
    ports:
      - "26656:26656"
      - "26657:26657"
      - "1317:1317"
      - "8545:8545"
    volumes:
      - ./config:/root/.mezod/config
      - ./data:/root/.mezod/data
    environment:
      - CHAIN_ID=mezo-testnet
      - NODE_TYPE=validator
    command: mezod start
```

## Configuration Management

### Environment-Specific Configs

```bash
# Production configuration
export CHAIN_ID="mezo-mainnet"
export RPC_ENDPOINT="https://rpc.mezo.org"
export EXPLORER_URL="https://explorer.mezo.org"

# Testnet configuration
export CHAIN_ID="mezo-testnet"
export RPC_ENDPOINT="https://testnet-rpc.mezo.org"
export EXPLORER_URL="https://testnet-explorer.mezo.org"

# Local development
export CHAIN_ID="mezo-local"
export RPC_ENDPOINT="http://localhost:26657"
export EXPLORER_URL="http://localhost:1317"
```

### Configuration Templates

```toml
# config.toml template
[consensus]
timeout_commit = "{{ .ConsensusTimeoutCommit }}"
timeout_propose = "{{ .ConsensusTimeoutPropose }}"

[p2p]
laddr = "{{ .P2PAddress }}"
external_address = "{{ .ExternalAddress }}"
persistent_peers = "{{ .PersistentPeers }}"

[api]
enable = {{ .APIEnabled }}
address = "{{ .APIAddress }}"
```

## Network Management

### Adding New Networks

1. **Create Configuration Directory**:
```bash
mkdir -p configs/new-network
```

2. **Add Network Config**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Add Genesis File**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Updating Network Parameters

```bash
# Update consensus parameters
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Monitoring Configuration

### Prometheus Setup

```yaml
# monitoring/prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'mezod-mainnet'
    static_configs:
      - targets: ['rpc.mezo.org:26660']
    metrics_path: /metrics

  - job_name: 'mezod-testnet'
    static_configs:
      - targets: ['testnet-rpc.mezo.org:26660']
    metrics_path: /metrics
```

### Grafana Dashboards

```json
{
  "dashboard": {
    "title": "Mezo Chain Monitoring",
    "panels": [
      {
        "title": "Block Height",
        "type": "graph",
        "targets": [
          {
            "expr": "mezod_block_height",
            "legendFormat": "{{chain_id}}"
          }
        ]
      }
    ]
  }
}
```

## Security Configuration

### Network Security

```bash
# Firewall rules
ufw allow 26656/tcp  # P2P
ufw allow 26657/tcp  # RPC
ufw allow 1317/tcp   # API
ufw allow 8545/tcp   # EVM RPC

# Restrict access
iptables -A INPUT -p tcp --dport 26657 -s TRUSTED_IP -j ACCEPT
iptables -A INPUT -p tcp --dport 26657 -j DROP
```

### SSL/TLS Configuration

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Development Tools

### Chain Configuration CLI

```bash
# Install chains CLI
npm install -g @mezo/chains-cli

# List available networks
chains list

# Get network configuration
chains config mezo-mainnet

# Validate configuration
chains validate config.toml
```

### Configuration Validation

```bash
#!/bin/bash
# validate-config.sh

CONFIG_FILE=$1

if [ -z "$CONFIG_FILE" ]; then
    echo "Usage: $0 <config-file>"
    exit 1
fi

# Validate TOML syntax
if ! python3 -c "import toml; toml.load('$CONFIG_FILE')"; then
    echo "Invalid TOML syntax"
    exit 1
fi

# Validate required fields
required_fields=("chain_id" "consensus" "p2p" "api")
for field in "${required_fields[@]}"; do
    if ! grep -q "^\[$field\]" "$CONFIG_FILE"; then
        echo "Missing required section: $field"
        exit 1
    fi
done

echo "Configuration is valid"
```

## Troubleshooting

### Common Issues

1. **Configuration Errors**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Network Connectivity**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Genesis Issues**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

### Debug Commands

```bash
# View current configuration
mezod config

# Check node status
mezod status

# View logs
journalctl -u mezod -f

# Test API endpoints
curl http://localhost:1317/cosmos/base/tendermint/v1beta1/node_info
```

## Best Practices

### Configuration Management

1. **Version Control**: Keep configurations in version control
2. **Environment Separation**: Use separate configs for different environments
3. **Documentation**: Document all custom parameters
4. **Validation**: Always validate configurations before deployment

### Security Considerations

1. **Access Control**: Restrict RPC and API access
2. **Key Management**: Secure validator keys
3. **Network Security**: Use firewalls and VPNs
4. **Monitoring**: Set up comprehensive monitoring

## Resources

- [Chains Repository](https://github.com/mezo-org/chains.git)
- [Mezod Documentation](/docs/developers/mezod/)
- [Validator Kit](/docs/developers/validator-kit/)
- [Cosmos SDK Configuration](https://docs.cosmos.network/)

## Support

For configuration support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check the [GitHub Issues](https://github.com/mezo-org/chains/issues)
- Review the [FAQ](/docs/developers/getting-started/FAQs)
