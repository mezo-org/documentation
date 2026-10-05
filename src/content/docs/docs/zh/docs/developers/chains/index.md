---
title: Chains 配置指南
description: 配置和管理 Mezo 链配置及网络参数的完整指南。
topic: developers
---
[Chains 仓库](https://github.com/mezo-org/chains.git)包含 Mezo 生态系统的配置文件、网络参数和链规范。本指南介绍如何配置、部署和管理 Mezo 链。

## 概览

Chains 仓库提供：

- **网络配置**：主网、测试网和本地配置
- **创世文件**：区块链的初始状态和参数
- **链规范**：技术参数和常量
- **部署脚本**：自动化链部署工具
- **监控配置**：可观测性与监控设置

## 仓库结构

[Chains 仓库](https://github.com/mezo-org/chains.git)的结构：

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## 网络配置

### 主网配置

**网络详情**：
- 链 ID：`mezo-mainnet`
- RPC 端点：`https://rpc.mezo.org`
- WebSocket：`wss://rpc.mezo.org/websocket`
- 区块浏览器：`https://explorer.mezo.org`

**创世配置**：
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

### 测试网配置

**网络详情**：
- 链 ID：`mezo-testnet`
- RPC 端点：`https://testnet-rpc.mezo.org`
- WebSocket：`wss://testnet-rpc.mezo.org/websocket`
- 区块浏览器：`https://testnet-explorer.mezo.org`

### 本地开发配置

**网络详情**：
- 链 ID：`mezo-local`
- RPC 端点：`http://localhost:26657`
- WebSocket：`ws://localhost:26657/websocket`

## 链参数

### 共识参数

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

### P2P 配置

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API 配置

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

## EVM 配置

### 以太坊兼容性设置

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### Gas 配置

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## 部署脚本

### 自动化部署

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

### Docker 部署

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

## 配置管理

### 特定环境的配置

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

### 配置模板

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

## 网络管理

### 添加新网络

1. **创建配置目录**：
```bash
mkdir -p configs/new-network
```

2. **添加网络配置**：
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **添加创世文件**：
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### 更新网络参数

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## 监控配置

### Prometheus 设置

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

### Grafana 仪表板

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

## 安全配置

### 网络安全

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

### SSL/TLS 配置

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## 开发工具

### 链配置 CLI

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### 配置验证

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

## 故障排除

### 常见问题

1. **配置错误**：
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **网络连接**：
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **创世问题**：
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## 最佳实践

### 配置管理

1. **版本控制**：将配置纳入版本控制
2. **环境隔离**：为不同环境使用各自独立的配置
3. **文档记录**：记录所有自定义参数
4. **验证**：部署前务必验证配置

### 安全注意事项

1. **访问控制**：限制 RPC 和 API 访问
2. **密钥管理**：妥善保护验证者密钥
3. **网络安全**：使用防火墙和 VPN
4. **监控**：建立全面的监控

## 其他资源

- **[Chains 仓库](https://github.com/mezo-org/chains.git)** - 配置仓库
- **[Mezod 文档](/docs/zh/docs/developers/mezod/)** - 链客户端文档
- **[Validator Kit](/docs/zh/docs/developers/mezo-nodes/validator-kit/)** - 验证者设置指南
- **[Cosmos SDK 配置](https://docs.cosmos.network/)** - Cosmos SDK 文档

:::note
如需获取最新的网络参数和端点，请始终参考 [Chains 仓库](https://github.com/mezo-org/chains.git)中的最新配置。
:::

## 支持

获取配置支持：
- 加入 [Mezo Discord](https://discord.com/invite/mezo)
- 查看 [GitHub Issues](https://github.com/mezo-org/chains/issues)
- 阅读[常见问题](/docs/zh/docs/developers/getting-started/FAQs)
