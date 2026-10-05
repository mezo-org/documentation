---
title: Hướng dẫn cấu hình chuỗi
description: >-
  Hướng dẫn đầy đủ về cách thiết lập và quản lý cấu hình chuỗi Mezo cùng các
  tham số mạng.
topic: developers
---
[Kho mã Chains](https://github.com/mezo-org/chains.git) chứa các tệp cấu hình, tham số mạng và đặc tả chuỗi cho hệ sinh thái Mezo. Hướng dẫn này trình bày cách cấu hình, triển khai và quản lý các chuỗi Mezo.

## Tổng quan

Kho mã Chains cung cấp:

- **Cấu hình mạng**: Cấu hình cho mainnet, testnet và môi trường cục bộ
- **Tệp genesis**: Trạng thái và tham số ban đầu của blockchain
- **Đặc tả chuỗi**: Các tham số kỹ thuật và hằng số
- **Script triển khai**: Công cụ triển khai chuỗi tự động
- **Cấu hình giám sát**: Thiết lập khả năng quan sát (observability) và giám sát

## Cấu trúc kho mã

Cấu trúc của [kho mã Chains](https://github.com/mezo-org/chains.git):

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## Cấu hình mạng

### Cấu hình mainnet

**Thông tin mạng**:
- Chain ID: `mezo-mainnet`
- Endpoint RPC: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- Trình khám phá: `https://explorer.mezo.org`

**Cấu hình genesis**:
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

### Cấu hình testnet

**Thông tin mạng**:
- Chain ID: `mezo-testnet`
- Endpoint RPC: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- Trình khám phá: `https://testnet-explorer.mezo.org`

### Cấu hình phát triển cục bộ

**Thông tin mạng**:
- Chain ID: `mezo-local`
- Endpoint RPC: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## Tham số chuỗi

### Tham số đồng thuận

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

### Cấu hình P2P

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### Cấu hình API

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

## Cấu hình EVM

### Thiết lập tương thích Ethereum

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Cấu hình gas

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## Script triển khai

### Triển khai tự động

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

### Triển khai bằng Docker

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

## Quản lý cấu hình

### Cấu hình theo từng môi trường

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

### Mẫu cấu hình

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

## Quản lý mạng

### Thêm mạng mới

1. **Tạo thư mục cấu hình**:
```bash
mkdir -p configs/new-network
```

2. **Thêm cấu hình mạng**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **Thêm tệp genesis**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### Cập nhật tham số mạng

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## Cấu hình giám sát

### Thiết lập Prometheus

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

### Bảng điều khiển Grafana

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

## Cấu hình bảo mật

### Bảo mật mạng

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

### Cấu hình SSL/TLS

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## Công cụ phát triển

### CLI cấu hình chuỗi

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### Kiểm tra cấu hình

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

## Khắc phục sự cố

### Các sự cố thường gặp

1. **Lỗi cấu hình**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **Kết nối mạng**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **Sự cố genesis**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## Các phương pháp hay nhất

### Quản lý cấu hình

1. **Quản lý phiên bản**: Lưu cấu hình trong hệ thống quản lý phiên bản
2. **Tách biệt môi trường**: Dùng cấu hình riêng cho từng môi trường
3. **Tài liệu hóa**: Ghi lại tài liệu cho mọi tham số tùy chỉnh
4. **Kiểm tra**: Luôn kiểm tra cấu hình trước khi triển khai

### Lưu ý về bảo mật

1. **Kiểm soát truy cập**: Hạn chế quyền truy cập RPC và API
2. **Quản lý khóa**: Bảo vệ khóa của validator
3. **Bảo mật mạng**: Dùng tường lửa và VPN
4. **Giám sát**: Thiết lập hệ thống giám sát toàn diện

## Tài nguyên bổ sung

- **[Kho mã Chains](https://github.com/mezo-org/chains.git)** - Kho mã cấu hình
- **[Tài liệu Mezod](/docs/vn/docs/developers/mezod/)** - Tài liệu về client của chuỗi
- **[Validator Kit](/docs/vn/docs/developers/mezo-nodes/validator-kit/)** - Hướng dẫn thiết lập validator
- **[Cấu hình Cosmos SDK](https://docs.cosmos.network/)** - Tài liệu Cosmos SDK

:::note
Luôn tham khảo các cấu hình mới nhất trong [kho mã chains](https://github.com/mezo-org/chains.git) để có tham số mạng và endpoint cập nhật.
:::

## Hỗ trợ

Để được hỗ trợ về cấu hình:
- Tham gia [Discord của Mezo](https://discord.com/invite/mezo)
- Xem [GitHub Issues](https://github.com/mezo-org/chains/issues)
- Xem [câu hỏi thường gặp](/docs/vn/docs/developers/getting-started/FAQs)
