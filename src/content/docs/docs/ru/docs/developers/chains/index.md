---
title: Руководство по конфигурации сетей
description: >-
  Полное руководство по настройке конфигураций сетей Mezo, управлению ими и
  параметрами сети.
topic: developers
---
[Репозиторий Chains](https://github.com/mezo-org/chains.git) содержит файлы конфигурации, параметры сетей и спецификации сетей экосистемы Mezo. В этом руководстве описано, как настраивать и развёртывать сети Mezo и управлять ими.

## Обзор

Репозиторий Chains содержит:

- **Конфигурации сетей**: конфигурации для основной сети, тестовой сети и локальной среды
- **Файлы генезиса**: начальное состояние и параметры блокчейна
- **Спецификации сетей**: технические параметры и константы
- **Скрипты развёртывания**: инструменты автоматического развёртывания сетей
- **Конфигурации мониторинга**: настройки наблюдаемости и мониторинга

## Структура репозитория

Структура [репозитория Chains](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Конфигурации сетей

### Конфигурация основной сети

**Параметры сети**:
- ID сети: `mezo-mainnet`
- RPC-эндпоинт: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Обозреватель блоков: `https://explorer.mezo.org`

**Конфигурация генезиса**:
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

### Конфигурация тестовой сети

**Параметры сети**:
- ID сети: `mezo-testnet`
- RPC-эндпоинт: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Обозреватель блоков: `https://testnet-explorer.mezo.org`

### Конфигурация для локальной разработки

**Параметры сети**:
- ID сети: `mezo-local`
- RPC-эндпоинт: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Параметры сети

### Параметры консенсуса

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

### Конфигурация P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Конфигурация API

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

## Конфигурация EVM

### Настройки совместимости с Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Конфигурация газа

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Скрипты развёртывания

### Автоматическое развёртывание

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

### Развёртывание в Docker

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

## Управление конфигурацией

### Конфигурации для разных сред

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

### Шаблоны конфигурации

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

## Управление сетями

### Добавление новых сетей

1. **Создайте каталог конфигурации**:
```bash
mkdir -p configs/new-network
```

2. **Добавьте конфигурацию сети**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Добавьте файл генезиса**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Обновление параметров сети

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Конфигурация мониторинга

### Настройка Prometheus

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

### Дашборды Grafana

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

## Конфигурация безопасности

### Сетевая безопасность

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

### Конфигурация SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Инструменты разработки

### CLI для конфигурации сетей

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Проверка конфигурации

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

## Устранение неполадок

### Распространённые проблемы

1. **Ошибки конфигурации**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Сетевое подключение**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Проблемы с генезисом**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Рекомендации

### Управление конфигурацией

1. **Контроль версий**: храните конфигурации в системе контроля версий
2. **Разделение сред**: используйте отдельные конфигурации для разных сред
3. **Документирование**: документируйте все нестандартные параметры
4. **Проверка**: всегда проверяйте конфигурации перед развёртыванием

### Вопросы безопасности

1. **Контроль доступа**: ограничьте доступ к RPC и API
2. **Управление ключами**: надёжно защищайте ключи валидатора
3. **Сетевая безопасность**: используйте файрволы и VPN
4. **Мониторинг**: настройте всесторонний мониторинг

## Дополнительные ресурсы

- **[Репозиторий Chains](https://github.com/mezo-org/chains.git)** — репозиторий конфигураций
- **[Документация mezod](/docs/ru/docs/developers/mezod/)** — документация клиента сети
- **[Validator Kit](/docs/ru/docs/developers/mezo-nodes/validator-kit/)** — руководство по настройке валидатора
- **[Конфигурация Cosmos SDK](https://docs.cosmos.network/)** — документация Cosmos SDK

:::note
Актуальные параметры сетей и эндпоинты всегда смотрите в последних конфигурациях в [репозитории chains](https://github.com/mezo-org/chains.git).
:::

## Поддержка

Помощь с конфигурацией:
- присоединяйтесь к [Discord Mezo](https://discord.com/invite/mezo);
- просматривайте [GitHub Issues](https://github.com/mezo-org/chains/issues);
- изучите [FAQ](/docs/ru/docs/developers/getting-started/FAQs).
