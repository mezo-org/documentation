---
title: Посібник із конфігурації мереж (Chains)
description: >-
  Повний посібник із налаштування конфігурацій мереж Mezo та параметрів мережі й
  керування ними.
topic: developers
---
[Репозиторій Chains](https://github.com/mezo-org/chains.git) містить конфігураційні файли, параметри мережі та специфікації ланцюгів для екосистеми Mezo. У цьому посібнику описано, як налаштовувати, розгортати мережі Mezo й керувати ними.

## Огляд

Репозиторій Chains містить:

- **Конфігурації мереж**: конфігурації для Mainnet, testnet і локального середовища
- **Genesis-файли**: початковий стан і параметри блокчейну
- **Специфікації ланцюгів**: технічні параметри й константи
- **Скрипти розгортання**: інструменти для автоматизованого розгортання мережі
- **Конфігурації моніторингу**: налаштування спостережуваності (observability) і моніторингу

## Структура репозиторію

Структура [репозиторію Chains](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Конфігурації мереж

### Конфігурація Mainnet

**Параметри мережі**:
- Ідентифікатор мережі (Chain ID): `mezo-mainnet`
- RPC-ендпоінт: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Оглядач блоків: `https://explorer.mezo.org`

**Конфігурація genesis**:
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

### Конфігурація Testnet

**Параметри мережі**:
- Ідентифікатор мережі (Chain ID): `mezo-testnet`
- RPC-ендпоінт: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Оглядач блоків: `https://testnet-explorer.mezo.org`

### Конфігурація для локальної розробки

**Параметри мережі**:
- Ідентифікатор мережі (Chain ID): `mezo-local`
- RPC-ендпоінт: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Параметри мережі

### Параметри консенсусу

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

### Конфігурація P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Конфігурація API

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

## Конфігурація EVM

### Налаштування сумісності з Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Конфігурація газу

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Скрипти розгортання

### Автоматизоване розгортання

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

### Розгортання в Docker

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

## Керування конфігураціями

### Конфігурації для окремих середовищ

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

### Шаблони конфігурацій

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

## Керування мережами

### Додавання нових мереж

1. **Створіть каталог конфігурації**:
```bash
mkdir -p configs/new-network
```

2. **Додайте конфігурацію мережі**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Додайте genesis-файл**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Оновлення параметрів мережі

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Конфігурація моніторингу

### Налаштування Prometheus

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

### Дашборди Grafana

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

## Конфігурація безпеки

### Безпека мережі

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

### Конфігурація SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Інструменти розробника

### CLI для конфігурації мережі

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Перевірка конфігурації

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

## Усунення несправностей

### Типові проблеми

1. **Помилки конфігурації**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Мережеве з'єднання**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Проблеми з genesis**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Найкращі практики

### Керування конфігураціями

1. **Контроль версій**: зберігайте конфігурації в системі контролю версій
2. **Розділення середовищ**: використовуйте окремі конфігурації для різних середовищ
3. **Документування**: документуйте всі нестандартні параметри
4. **Перевірка**: завжди перевіряйте конфігурації перед розгортанням

### Міркування безпеки

1. **Контроль доступу**: обмежте доступ до RPC та API
2. **Керування ключами**: захистіть ключі валідатора
3. **Безпека мережі**: використовуйте брандмауери та VPN
4. **Моніторинг**: налаштуйте всебічний моніторинг

## Додаткові ресурси

- **[Репозиторій Chains](https://github.com/mezo-org/chains.git)** - репозиторій конфігурацій
- **[Документація Mezod](/docs/ua/docs/developers/mezod/)** - документація клієнта мережі
- **[Validator Kit](/docs/ua/docs/developers/mezo-nodes/validator-kit/)** - посібник із налаштування валідатора
- **[Конфігурація Cosmos SDK](https://docs.cosmos.network/)** - документація Cosmos SDK

:::note
Актуальні параметри мережі та ендпоінти завжди звіряйте з останніми конфігураціями в [репозиторії chains](https://github.com/mezo-org/chains.git).
:::

## Підтримка

Щоб отримати допомогу з конфігурацією:
- Приєднуйтеся до [Discord Mezo](https://discord.com/invite/mezo)
- Перегляньте [GitHub Issues](https://github.com/mezo-org/chains/issues)
- Ознайомтеся з [FAQ](/docs/ua/docs/developers/getting-started/FAQs)
