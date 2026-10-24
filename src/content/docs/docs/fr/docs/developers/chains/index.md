---
title: Guide de configuration des chaînes
description: >-
  Guide complet pour configurer et gérer les configurations de chaîne et les
  paramètres réseau de Mezo.
topic: developers
---
Le [dépôt Chains](https://github.com/mezo-org/chains.git) contient les fichiers de configuration, les paramètres réseau et les spécifications de chaîne de l'écosystème Mezo. Ce guide explique comment configurer, déployer et gérer les chaînes Mezo.

## Aperçu

Le dépôt Chains fournit :

- **Configurations réseau** : configurations mainnet, testnet et locales
- **Fichiers genesis** : état initial de la blockchain et paramètres
- **Spécifications de chaîne** : paramètres techniques et constantes
- **Scripts de déploiement** : outils de déploiement automatisé des chaînes
- **Configurations de supervision** : configurations d'observabilité et de supervision

## Structure du dépôt

Structure du [dépôt Chains](https://github.com/mezo-org/chains.git) :

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Configurations réseau

### Configuration du Mainnet

**Détails du réseau** :
- Chain ID : `mezo-mainnet`
- Endpoint RPC : `https://rpc.mezo.org`
- WebSocket : `wss://rpc.mezo.org/websocket`
- Explorateur : `https://explorer.mezo.org`

**Configuration genesis** :
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

### Configuration du Testnet

**Détails du réseau** :
- Chain ID : `mezo-testnet`
- Endpoint RPC : `https://testnet-rpc.mezo.org`
- WebSocket : `wss://testnet-rpc.mezo.org/websocket`
- Explorateur : `https://testnet-explorer.mezo.org`

### Configuration pour le développement local

**Détails du réseau** :
- Chain ID : `mezo-local`
- Endpoint RPC : `http://localhost:26657`
- WebSocket : `ws://localhost:26657/websocket`

## Paramètres de la chaîne

### Paramètres de consensus

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

### Configuration P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Configuration de l'API

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

## Configuration EVM

### Paramètres de compatibilité Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Configuration du gaz

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Scripts de déploiement

### Déploiement automatisé

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

### Déploiement avec Docker

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

## Gestion de la configuration

### Configurations par environnement

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

### Modèles de configuration

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

## Gestion des réseaux

### Ajouter de nouveaux réseaux

1. **Créer le répertoire de configuration** :
```bash
mkdir -p configs/new-network
```

2. **Ajouter la configuration réseau** :
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Ajouter le fichier genesis** :
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Mettre à jour les paramètres réseau

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Configuration de la supervision

### Mise en place de Prometheus

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

### Tableaux de bord Grafana

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

## Configuration de la sécurité

### Sécurité réseau

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

### Configuration SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Outils de développement

### CLI de configuration des chaînes

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Validation de la configuration

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

## Dépannage

### Problèmes courants

1. **Erreurs de configuration** :
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Connectivité réseau** :
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Problèmes de genesis** :
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Bonnes pratiques

### Gestion de la configuration

1. **Gestion de versions** : conservez les configurations dans un système de gestion de versions
2. **Séparation des environnements** : utilisez des configurations distinctes pour chaque environnement
3. **Documentation** : documentez tous les paramètres personnalisés
4. **Validation** : validez toujours les configurations avant le déploiement

### Considérations de sécurité

1. **Contrôle d'accès** : restreignez l'accès au RPC et à l'API
2. **Gestion des clés** : sécurisez les clés de validateur
3. **Sécurité réseau** : utilisez des pare-feu et des VPN
4. **Supervision** : mettez en place une supervision complète

## Ressources supplémentaires

- **[Dépôt Chains](https://github.com/mezo-org/chains.git)** – dépôt de configuration
- **[Documentation de mezod](/docs/fr/docs/developers/mezod/)** – documentation du client de la chaîne
- **[Validator Kit](/docs/fr/docs/developers/mezo-nodes/validator-kit/)** – guide de configuration d'un validateur
- **[Configuration du Cosmos SDK](https://docs.cosmos.network/)** – documentation du Cosmos SDK

:::note
Reportez-vous toujours aux dernières configurations du [dépôt Chains](https://github.com/mezo-org/chains.git) pour obtenir les paramètres réseau et les endpoints à jour.
:::

## Assistance

Pour obtenir de l'aide sur la configuration :
- Rejoignez le [Discord Mezo](https://discord.com/invite/mezo)
- Consultez les [GitHub Issues](https://github.com/mezo-org/chains/issues)
- Parcourez la [FAQ](/docs/fr/docs/developers/getting-started/FAQs)
