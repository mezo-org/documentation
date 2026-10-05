---
title: Guia de configuração de cadeias
description: >-
  Guia completo para configurar e gerenciar as configurações de cadeia e os
  parâmetros de rede do Mezo.
topic: developers
---
O [repositório Chains](https://github.com/mezo-org/chains.git) contém arquivos de configuração, parâmetros de rede e especificações de cadeia do ecossistema Mezo. Este guia explica como configurar, implantar e gerenciar as cadeias do Mezo.

## Visão geral

O repositório Chains oferece:

- **Configurações de rede**: configurações de mainnet, testnet e local
- **Arquivos de gênese**: estado e parâmetros iniciais da blockchain
- **Especificações de cadeia**: parâmetros técnicos e constantes
- **Scripts de implantação**: ferramentas automatizadas de implantação de cadeias
- **Configurações de monitoramento**: configurações de observabilidade e monitoramento

## Estrutura do repositório

Estrutura do [repositório Chains](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Configurações de rede

### Configuração da mainnet

**Detalhes da rede**:
- Chain ID: `mezo-mainnet`
- Endpoint RPC: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Explorador: `https://explorer.mezo.org`

**Configuração de gênese**:
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

### Configuração da testnet

**Detalhes da rede**:
- Chain ID: `mezo-testnet`
- Endpoint RPC: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Explorador: `https://testnet-explorer.mezo.org`

### Configuração de desenvolvimento local

**Detalhes da rede**:
- Chain ID: `mezo-local`
- Endpoint RPC: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Parâmetros da cadeia

### Parâmetros de consenso

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

### Configuração P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Configuração da API

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

## Configuração da EVM

### Configurações de compatibilidade com o Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Configuração de gás

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Scripts de implantação

### Implantação automatizada

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

### Implantação com Docker

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

## Gerenciamento de configurações

### Configurações específicas por ambiente

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

### Modelos de configuração

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

## Gerenciamento de redes

### Adicionar novas redes

1. **Crie o diretório de configuração**:
```bash
mkdir -p configs/new-network
```

2. **Adicione a configuração da rede**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Adicione o arquivo de gênese**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Atualizar parâmetros de rede

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Configuração de monitoramento

### Configuração do Prometheus

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

### Painéis do Grafana

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

## Configuração de segurança

### Segurança de rede

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

### Configuração de SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Ferramentas de desenvolvimento

### CLI de configuração de cadeia

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Validação de configurações

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

## Solução de problemas

### Problemas comuns

1. **Erros de configuração**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Conectividade de rede**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Problemas de gênese**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Boas práticas

### Gerenciamento de configurações

1. **Controle de versão**: mantenha as configurações sob controle de versão
2. **Separação de ambientes**: use configurações separadas para ambientes diferentes
3. **Documentação**: documente todos os parâmetros personalizados
4. **Validação**: sempre valide as configurações antes da implantação

### Considerações de segurança

1. **Controle de acesso**: restrinja o acesso ao RPC e à API
2. **Gerenciamento de chaves**: proteja as chaves do validador
3. **Segurança de rede**: use firewalls e VPNs
4. **Monitoramento**: configure um monitoramento abrangente

## Recursos adicionais

- **[Repositório Chains](https://github.com/mezo-org/chains.git)**: repositório de configurações
- **[Documentação do Mezod](/docs/pt-br/docs/developers/mezod/)**: documentação do cliente da cadeia
- **[Validator Kit](/docs/pt-br/docs/developers/mezo-nodes/validator-kit/)**: guia de configuração de validadores
- **[Configuração do Cosmos SDK](https://docs.cosmos.network/)**: documentação do Cosmos SDK

:::note
Consulte sempre as configurações mais recentes no [repositório chains](https://github.com/mezo-org/chains.git) para obter parâmetros de rede e endpoints atualizados.
:::

## Suporte

Para obter suporte com a configuração:
- Participe do [Discord do Mezo](https://discord.com/invite/mezo)
- Consulte as [issues no GitHub](https://github.com/mezo-org/chains/issues)
- Leia as [perguntas frequentes](/docs/pt-br/docs/developers/getting-started/FAQs)
