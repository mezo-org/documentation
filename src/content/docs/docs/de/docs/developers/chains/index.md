---
title: Leitfaden zur Chain-Konfiguration
description: >-
  Vollständiger Leitfaden zum Konfigurieren und Verwalten von
  Mezo-Chain-Konfigurationen und Netzwerkparametern.
topic: developers
---
Das [Chains-Repository](https://github.com/mezo-org/chains.git) enthält Konfigurationsdateien, Netzwerkparameter und Chain-Spezifikationen für das Mezo-Ökosystem. Dieser Leitfaden beschreibt, wie Sie Mezo-Chains konfigurieren, deployen und verwalten.

## Übersicht

Das Chains-Repository bietet:

- **Netzwerkkonfigurationen**: Konfigurationen für Mainnet, Testnet und lokale Umgebungen
- **Genesis-Dateien**: Anfangszustand und Parameter der Blockchain
- **Chain-Spezifikationen**: technische Parameter und Konstanten
- **Deployment-Skripte**: Tools für das automatisierte Deployment von Chains
- **Monitoring-Konfigurationen**: Setups für Observability und Monitoring

## Repository-Struktur

Struktur des [Chains-Repositorys](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Netzwerkkonfigurationen

### Mainnet-Konfiguration

**Netzwerkdetails**:
- Chain-ID: `mezo-mainnet`
- RPC-Endpoint: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Explorer: `https://explorer.mezo.org`

**Genesis-Konfiguration**:
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

### Testnet-Konfiguration

**Netzwerkdetails**:
- Chain-ID: `mezo-testnet`
- RPC-Endpoint: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Explorer: `https://testnet-explorer.mezo.org`

### Konfiguration für die lokale Entwicklung

**Netzwerkdetails**:
- Chain-ID: `mezo-local`
- RPC-Endpoint: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Chain-Parameter

### Konsensparameter

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

### P2P-Konfiguration

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API-Konfiguration

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

## EVM-Konfiguration

### Einstellungen für die Ethereum-Kompatibilität

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Gas-Konfiguration

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Deployment-Skripte

### Automatisiertes Deployment

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

### Deployment mit Docker

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

## Konfigurationsverwaltung

### Umgebungsspezifische Konfigurationen

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

### Konfigurationsvorlagen

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

## Netzwerkverwaltung

### Neue Netzwerke hinzufügen

1. **Konfigurationsverzeichnis erstellen**:
```bash
mkdir -p configs/new-network
```

2. **Netzwerkkonfiguration hinzufügen**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Genesis-Datei hinzufügen**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Netzwerkparameter aktualisieren

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Monitoring-Konfiguration

### Prometheus einrichten

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

### Grafana-Dashboards

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

## Sicherheitskonfiguration

### Netzwerksicherheit

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

### SSL/TLS-Konfiguration

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Entwicklungstools

### CLI für die Chain-Konfiguration

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Konfigurationsvalidierung

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

## Fehlerbehebung

### Häufige Probleme

1. **Konfigurationsfehler**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Netzwerkkonnektivität**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Probleme mit der Genesis**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Best Practices

### Konfigurationsverwaltung

1. **Versionskontrolle**: Bewahren Sie Konfigurationen in einer Versionskontrolle auf
2. **Trennung der Umgebungen**: Verwenden Sie separate Konfigurationen für verschiedene Umgebungen
3. **Dokumentation**: Dokumentieren Sie alle benutzerdefinierten Parameter
4. **Validierung**: Validieren Sie Konfigurationen immer vor dem Deployment

### Sicherheitsaspekte

1. **Zugriffskontrolle**: Beschränken Sie den Zugriff auf RPC und API
2. **Schlüsselverwaltung**: Sichern Sie die Validator-Schlüssel
3. **Netzwerksicherheit**: Verwenden Sie Firewalls und VPNs
4. **Monitoring**: Richten Sie ein umfassendes Monitoring ein

## Weitere Ressourcen

- **[Chains-Repository](https://github.com/mezo-org/chains.git)** – Konfigurations-Repository
- **[Mezod-Dokumentation](/docs/de/docs/developers/mezod/)** – Dokumentation des Chain-Clients
- **[Validator Kit](/docs/de/docs/developers/mezo-nodes/validator-kit/)** – Anleitung zur Einrichtung eines Validators
- **[Cosmos-SDK-Konfiguration](https://docs.cosmos.network/)** – Dokumentation zum Cosmos SDK

:::note
Aktuelle Netzwerkparameter und Endpoints finden Sie stets in den neuesten Konfigurationen im [Chains-Repository](https://github.com/mezo-org/chains.git).
:::

## Support

Unterstützung bei der Konfiguration:
- Treten Sie dem [Mezo Discord](https://discord.com/invite/mezo) bei
- Sehen Sie sich die [GitHub Issues](https://github.com/mezo-org/chains/issues) an
- Lesen Sie die [FAQ](/docs/de/docs/developers/getting-started/FAQs)
