---
title: 체인 설정 가이드
description: Mezo 체인 설정과 네트워크 매개변수를 구성하고 관리하기 위한 종합 가이드입니다.
topic: developers
---
[Chains 저장소](https://github.com/mezo-org/chains.git)에는 Mezo 생태계의 설정 파일, 네트워크 매개변수, 체인 사양이 들어 있습니다. 이 가이드에서는 Mezo 체인을 설정하고 배포하고 관리하는 방법을 다룹니다.

## 개요

Chains 저장소는 다음을 제공합니다.

- **네트워크 설정**: 메인넷, 테스트넷, 로컬 설정
- **제네시스 파일**: 블록체인의 초기 상태와 매개변수
- **체인 사양**: 기술 매개변수와 상수
- **배포 스크립트**: 체인 배포 자동화 도구
- **모니터링 설정**: 관측성 및 모니터링 구성

## 저장소 구조

[Chains 저장소](https://github.com/mezo-org/chains.git)의 구조는 다음과 같습니다.

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## 네트워크 설정

### 메인넷 설정

**네트워크 세부 정보**:
- 체인 ID: `mezo-mainnet`
- RPC 엔드포인트: `https://rpc.mezo.org`
- 웹소켓: `wss://rpc.mezo.org/websocket`
- 탐색기: `https://explorer.mezo.org`

**제네시스 설정**:
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

### 테스트넷 설정

**네트워크 세부 정보**:
- 체인 ID: `mezo-testnet`
- RPC 엔드포인트: `https://testnet-rpc.mezo.org`
- 웹소켓: `wss://testnet-rpc.mezo.org/websocket`
- 탐색기: `https://testnet-explorer.mezo.org`

### 로컬 개발 설정

**네트워크 세부 정보**:
- 체인 ID: `mezo-local`
- RPC 엔드포인트: `http://localhost:26657`
- 웹소켓: `ws://localhost:26657/websocket`

## 체인 매개변수

### 합의 매개변수

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

### P2P 설정

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API 설정

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

## EVM 설정

### 이더리움 호환성 설정

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### 가스 설정

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## 배포 스크립트

### 자동 배포

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

### Docker 배포

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

## 설정 관리

### 환경별 설정

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

### 설정 템플릿

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

## 네트워크 관리

### 새 네트워크 추가

1. **설정 디렉터리 만들기**:
```bash
mkdir -p configs/new-network
```

2. **네트워크 설정 추가**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **제네시스 파일 추가**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### 네트워크 매개변수 업데이트

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## 모니터링 설정

### Prometheus 설정

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

### Grafana 대시보드

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

## 보안 설정

### 네트워크 보안

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

### SSL/TLS 설정

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## 개발 도구

### 체인 설정 CLI

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### 설정 검증

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

## 문제 해결

### 자주 발생하는 문제

1. **설정 오류**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **네트워크 연결**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **제네시스 문제**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## 모범 사례

### 설정 관리

1. **버전 관리**: 설정을 버전 관리 시스템에 보관하세요
2. **환경 분리**: 환경마다 별도의 설정을 사용하세요
3. **문서화**: 모든 사용자 지정 매개변수를 문서화하세요
4. **검증**: 배포 전에 항상 설정을 검증하세요

### 보안 고려 사항

1. **접근 제어**: RPC 및 API 접근을 제한하세요
2. **키 관리**: 검증자 키를 안전하게 보호하세요
3. **네트워크 보안**: 방화벽과 VPN을 사용하세요
4. **모니터링**: 포괄적인 모니터링을 설정하세요

## 추가 리소스

- **[Chains 저장소](https://github.com/mezo-org/chains.git)** - 설정 저장소
- **[Mezod 문서](/docs/kr/docs/developers/mezod/)** - 체인 클라이언트 문서
- **[Validator Kit](/docs/kr/docs/developers/mezo-nodes/validator-kit/)** - 검증자 설정 가이드
- **[Cosmos SDK 설정](https://docs.cosmos.network/)** - Cosmos SDK 문서

:::note
최신 네트워크 매개변수와 엔드포인트는 항상 [chains 저장소](https://github.com/mezo-org/chains.git)의 최신 설정을 참고하세요.
:::

## 지원

설정 관련 지원이 필요하면 다음을 이용하세요.
- [Mezo Discord](https://discord.com/invite/mezo)에 참여하세요
- [GitHub Issues](https://github.com/mezo-org/chains/issues)를 확인하세요
- [자주 묻는 질문](/docs/kr/docs/developers/getting-started/FAQs)을 검토하세요
