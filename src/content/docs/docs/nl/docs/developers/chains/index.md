---
title: Handleiding voor chainconfiguratie
description: >-
  Volledige handleiding voor het configureren en beheren van
  Mezo-chainconfiguraties en netwerkparameters.
topic: developers
---
De [Chains-repository](https://github.com/mezo-org/chains.git) bevat configuratiebestanden, netwerkparameters en chainspecificaties voor het Mezo-ecosysteem. Deze handleiding beschrijft hoe je Mezo-chains configureert, deployt en beheert.

## Overzicht

De Chains-repository biedt:

- **Netwerkconfiguraties**: configuraties voor mainnet, testnet en lokaal gebruik
- **Genesisbestanden**: de begintoestand en -parameters van de blockchain
- **Chainspecificaties**: technische parameters en constanten
- **Deploymentscripts**: tools voor geautomatiseerde chaindeployment
- **Monitoringconfiguraties**: opstellingen voor observability en monitoring

## Structuur van de repository

Structuur van de [Chains-repository](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Netwerkconfiguraties

### Mainnetconfiguratie

**Netwerkgegevens**:
- Chain-ID: `mezo-mainnet`
- RPC-endpoint: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Explorer: `https://explorer.mezo.org`

**Genesisconfiguratie**:
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

### Testnetconfiguratie

**Netwerkgegevens**:
- Chain-ID: `mezo-testnet`
- RPC-endpoint: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Explorer: `https://testnet-explorer.mezo.org`

### Configuratie voor lokale ontwikkeling

**Netwerkgegevens**:
- Chain-ID: `mezo-local`
- RPC-endpoint: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Chainparameters

### Consensusparameters

```toml
[consensus]
timeout_commit = "1s"
timeout_propose = "3s"
timeout_propose_delta = "500ms"
timeout_prevote = "1s"
timeout_prevote_delta = "500ms"
timeout_precommit = "1s"
timeout_precommit_delta = "500ms"
```

### P2P-configuratie

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API-configuratie

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

## EVM-configuratie

### Instellingen voor Ethereum-compatibiliteit

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Gasconfiguratie

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Deploymentscripts

### Geautomatiseerde deployment

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

### Deployment met Docker

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

## Configuratiebeheer

### Configuraties per omgeving

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

### Configuratiesjablonen

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

## Netwerkbeheer

### Nieuwe netwerken toevoegen

1. **Configuratiemap aanmaken**:
```bash
mkdir -p configs/new-network
```

2. **Netwerkconfiguratie toevoegen**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Genesisbestand toevoegen**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Netwerkparameters bijwerken

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Monitoringconfiguratie

### Prometheus instellen

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

### Grafana-dashboards

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

## Beveiligingsconfiguratie

### Netwerkbeveiliging

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

### SSL/TLS-configuratie

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Ontwikkeltools

### CLI voor chainconfiguratie

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Configuratie valideren

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

echo "Configuration is valid"
```

## Probleemoplossing

### Veelvoorkomende problemen

1. **Configuratiefouten**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Netwerkconnectiviteit**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Problemen met genesis**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Best practices

### Configuratiebeheer

1. **Versiebeheer**: bewaar configuraties in versiebeheer
2. **Gescheiden omgevingen**: gebruik aparte configuraties voor verschillende omgevingen
3. **Documentatie**: documenteer alle aangepaste parameters
4. **Validatie**: valideer configuraties altijd vóór de deployment

### Beveiligingsoverwegingen

1. **Toegangsbeheer**: beperk de toegang tot RPC en API
2. **Sleutelbeheer**: beveilig validatorsleutels
3. **Netwerkbeveiliging**: gebruik firewalls en VPN's
4. **Monitoring**: zet uitgebreide monitoring op

## Aanvullende bronnen

- **[Chains-repository](https://github.com/mezo-org/chains.git)** - configuratierepository
- **[Mezod-documentatie](/docs/nl/docs/developers/mezod/)** - documentatie van de chainclient
- **[Validator Kit](/docs/nl/docs/developers/mezo-nodes/validator-kit/)** - handleiding voor het instellen van een validator
- **[Configuratie van de Cosmos SDK](https://docs.cosmos.network/)** - documentatie van de Cosmos SDK

:::note
Raadpleeg altijd de nieuwste configuraties in de [Chains-repository](https://github.com/mezo-org/chains.git) voor actuele netwerkparameters en endpoints.
:::

## Ondersteuning

Voor ondersteuning bij de configuratie:
- Word lid van de [Mezo Discord](https://discord.com/invite/mezo)
- Bekijk de [GitHub Issues](https://github.com/mezo-org/chains/issues)
- Lees de [FAQ](/docs/nl/docs/developers/getting-started/FAQs)
