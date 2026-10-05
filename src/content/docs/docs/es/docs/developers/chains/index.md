---
title: Guía de configuración de cadenas
description: >-
  Guía completa para configurar y gestionar las configuraciones de las cadenas
  de Mezo y los parámetros de red.
topic: developers
---
El [repositorio Chains](https://github.com/mezo-org/chains.git) contiene archivos de configuración, parámetros de red y especificaciones de cadena para el ecosistema de Mezo. Esta guía explica cómo configurar, desplegar y gestionar las cadenas de Mezo.

## Descripción general

El repositorio Chains proporciona:

- **Configuraciones de red**: configuraciones de mainnet, testnet y locales
- **Archivos génesis**: estado inicial y parámetros de la blockchain
- **Especificaciones de la cadena**: parámetros técnicos y constantes
- **Scripts de despliegue**: herramientas automatizadas de despliegue de cadenas
- **Configuraciones de monitoreo**: configuraciones de observabilidad y monitoreo

## Estructura del repositorio

Estructura del [repositorio Chains](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Configuraciones de red

### Configuración de mainnet

**Detalles de la red**:
- ID de cadena: `mezo-mainnet`
- Endpoint RPC: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Explorador: `https://explorer.mezo.org`

**Configuración génesis**:
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

### Configuración de testnet

**Detalles de la red**:
- ID de cadena: `mezo-testnet`
- Endpoint RPC: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Explorador: `https://testnet-explorer.mezo.org`

### Configuración de desarrollo local

**Detalles de la red**:
- ID de cadena: `mezo-local`
- Endpoint RPC: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Parámetros de la cadena

### Parámetros de consenso

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

### Configuración P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Configuración de la API

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

## Configuración de la EVM

### Ajustes de compatibilidad con Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Configuración del gas

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Scripts de despliegue

### Despliegue automatizado

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

### Despliegue con Docker

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

## Gestión de la configuración

### Configuraciones específicas por entorno

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

### Plantillas de configuración

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

## Gestión de redes

### Agregar redes nuevas

1. **Crea el directorio de configuración**:
```bash
mkdir -p configs/new-network
```

2. **Agrega la configuración de la red**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Agrega el archivo génesis**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Actualizar los parámetros de red

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Configuración del monitoreo

### Configuración de Prometheus

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

### Dashboards de Grafana

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

## Configuración de seguridad

### Seguridad de red

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

### Configuración de SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Herramientas de desarrollo

### CLI de configuración de cadenas

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Validación de la configuración

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

## Solución de problemas

### Problemas comunes

1. **Errores de configuración**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Conectividad de red**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Problemas con el génesis**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Buenas prácticas

### Gestión de la configuración

1. **Control de versiones**: mantén las configuraciones bajo control de versiones
2. **Separación de entornos**: usa configuraciones independientes para cada entorno
3. **Documentación**: documenta todos los parámetros personalizados
4. **Validación**: valida siempre las configuraciones antes del despliegue

### Consideraciones de seguridad

1. **Control de acceso**: restringe el acceso a RPC y a la API
2. **Gestión de claves**: protege las claves del validador
3. **Seguridad de red**: usa firewalls y VPN
4. **Monitoreo**: configura un monitoreo integral

## Recursos adicionales

- **[Repositorio Chains](https://github.com/mezo-org/chains.git)**: repositorio de configuración
- **[Documentación de Mezod](/docs/es/docs/developers/mezod/)**: documentación del cliente de la cadena
- **[Validator Kit](/docs/es/docs/developers/mezo-nodes/validator-kit/)**: guía de configuración de validadores
- **[Configuración de Cosmos SDK](https://docs.cosmos.network/)**: documentación de Cosmos SDK

:::note
Consulta siempre las configuraciones más recientes en el [repositorio Chains](https://github.com/mezo-org/chains.git) para obtener los parámetros de red y los endpoints actualizados.
:::

## Soporte

Para obtener soporte con la configuración:
- Únete al [Discord de Mezo](https://discord.com/invite/mezo)
- Consulta los [issues de GitHub](https://github.com/mezo-org/chains/issues)
- Revisa las [preguntas frecuentes](/docs/es/docs/developers/getting-started/FAQs)
