---
title: चेन कॉन्फ़िगरेशन गाइड
description: >-
  Mezo चेन कॉन्फ़िगरेशन और नेटवर्क पैरामीटर को कॉन्फ़िगर और मैनेज करने के लिए
  पूरी गाइड।
topic: developers
---
[Chains रिपॉज़िटरी](https://github.com/mezo-org/chains.git) में Mezo इकोसिस्टम के लिए कॉन्फ़िगरेशन फ़ाइलें, नेटवर्क पैरामीटर और चेन स्पेसिफ़िकेशन हैं। यह गाइड बताती है कि Mezo चेन को कैसे कॉन्फ़िगर, डिप्लॉय और मैनेज करें।

## अवलोकन

Chains रिपॉज़िटरी ये चीज़ें देती है:

- **नेटवर्क कॉन्फ़िगरेशन**: मेननेट, टेस्टनेट और लोकल कॉन्फ़िगरेशन
- **जेनेसिस फ़ाइलें**: ब्लॉकचेन की शुरुआती स्टेट और पैरामीटर
- **चेन स्पेसिफ़िकेशन**: तकनीकी पैरामीटर और कॉन्स्टेंट
- **डिप्लॉयमेंट स्क्रिप्ट**: चेन डिप्लॉयमेंट के ऑटोमेटेड टूल
- **मॉनिटरिंग कॉन्फ़िग**: ऑब्ज़र्वेबिलिटी और मॉनिटरिंग सेटअप

## रिपॉज़िटरी की संरचना

[Chains रिपॉज़िटरी](https://github.com/mezo-org/chains.git) की संरचना:

```
chains/
├── configs/           # Network configuration files
├── genesis/           # Genesis files for different networks
├── scripts/           # Deployment and management scripts
├── monitoring/        # Monitoring and observability configs
├── docs/             # Documentation and guides
└── tools/            # Utility tools and helpers
```

## नेटवर्क कॉन्फ़िगरेशन

### मेननेट कॉन्फ़िगरेशन

**नेटवर्क विवरण**:
- Chain ID: `mezo-mainnet`
- RPC एंडपॉइंट: `https://rpc.mezo.org`
- WebSocket: `wss://rpc.mezo.org/websocket`
- एक्सप्लोरर: `https://explorer.mezo.org`

**जेनेसिस कॉन्फ़िगरेशन**:
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

### टेस्टनेट कॉन्फ़िगरेशन

**नेटवर्क विवरण**:
- Chain ID: `mezo-testnet`
- RPC एंडपॉइंट: `https://testnet-rpc.mezo.org`
- WebSocket: `wss://testnet-rpc.mezo.org/websocket`
- एक्सप्लोरर: `https://testnet-explorer.mezo.org`

### लोकल डेवलपमेंट कॉन्फ़िगरेशन

**नेटवर्क विवरण**:
- Chain ID: `mezo-local`
- RPC एंडपॉइंट: `http://localhost:26657`
- WebSocket: `ws://localhost:26657/websocket`

## चेन पैरामीटर

### कंसेंसस पैरामीटर

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

### P2P कॉन्फ़िगरेशन

```toml
[p2p]
laddr = "tcp://0.0.0.0:26656"
external_address = "YOUR_EXTERNAL_IP:26656"
persistent_peers = "peer1@ip1:26656,peer2@ip2:26656"
unconditional_peer_ids = ""
```

### API कॉन्फ़िगरेशन

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

## EVM कॉन्फ़िगरेशन

### Ethereum कम्पैटिबिलिटी सेटिंग्स

```toml
[evm]
rpc_address = "0.0.0.0:8545"
ws_address = "0.0.0.0:8546"
api_address = "0.0.0.0:1317"
max_gas_price = "1000000000000"
min_gas_price = "1000000000"
```

### गैस कॉन्फ़िगरेशन

```toml
[evm.gas]
base_fee = "1000000000"
min_gas_price = "1000000000"
max_gas_price = "1000000000000"
```

## डिप्लॉयमेंट स्क्रिप्ट

### ऑटोमेटेड डिप्लॉयमेंट

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

### Docker डिप्लॉयमेंट

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

## कॉन्फ़िगरेशन मैनेजमेंट

### एनवायरनमेंट के हिसाब से कॉन्फ़िग

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

### कॉन्फ़िगरेशन टेम्पलेट

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

## नेटवर्क मैनेजमेंट

### नए नेटवर्क जोड़ना

1. **कॉन्फ़िगरेशन डायरेक्टरी बनाएं**:
```bash
mkdir -p configs/new-network
```

2. **नेटवर्क कॉन्फ़िग जोड़ें**:
```toml
# configs/new-network/config.toml
[consensus]
timeout_commit = "1s"

[p2p]
laddr = "tcp://0.0.0.0:26656"
```

3. **जेनेसिस फ़ाइल जोड़ें**:
```json
{
  "chain_id": "new-network",
  "genesis_time": "2024-01-01T00:00:00Z"
}
```

### नेटवर्क पैरामीटर अपडेट करना

```bash
# Update consensus parameters via governance
mezod tx gov submit-proposal param-change proposal.json

# Vote on proposal
mezod tx gov vote 1 yes --from validator
```

## मॉनिटरिंग कॉन्फ़िगरेशन

### Prometheus सेटअप

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

### Grafana डैशबोर्ड

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

## सुरक्षा कॉन्फ़िगरेशन

### नेटवर्क सुरक्षा

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

### SSL/TLS कॉन्फ़िगरेशन

```toml
[api]
tls_cert_file = "/path/to/cert.pem"
tls_key_file = "/path/to/key.pem"
```

## डेवलपमेंट टूल

### चेन कॉन्फ़िगरेशन CLI

```bash
# List available networks
# (Check repository for specific CLI tool)

# Get network configuration
cat configs/mezo-mainnet/config.toml

# Validate configuration
mezod config validate
```

### कॉन्फ़िगरेशन की जांच

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

## ट्रबलशूटिंग

### आम समस्याएं

1. **कॉन्फ़िगरेशन एरर**:
```bash
# Check configuration syntax
mezod config validate

# Test configuration
mezod start --dry-run
```

2. **नेटवर्क कनेक्टिविटी**:
```bash
# Test RPC connectivity
curl -s http://localhost:26657/status | jq

# Check peer connections
mezod tendermint show-peers
```

3. **जेनेसिस से जुड़ी समस्याएं**:
```bash
# Validate genesis file
mezod validate-genesis

# Reset with new genesis
mezod tendermint unsafe-reset-all
```

## सबसे अच्छे तरीके

### कॉन्फ़िगरेशन मैनेजमेंट

1. **वर्ज़न कंट्रोल**: कॉन्फ़िगरेशन को वर्ज़न कंट्रोल में रखें
2. **एनवायरनमेंट का अलगाव**: अलग-अलग एनवायरनमेंट के लिए अलग कॉन्फ़िग इस्तेमाल करें
3. **दस्तावेज़ीकरण**: सभी कस्टम पैरामीटर को डॉक्यूमेंट करें
4. **जांच**: डिप्लॉयमेंट से पहले कॉन्फ़िगरेशन को हमेशा जांचें

### सुरक्षा से जुड़ी बातें

1. **एक्सेस कंट्रोल**: RPC और API एक्सेस को सीमित रखें
2. **की मैनेजमेंट**: वैलिडेटर कीज़ को सुरक्षित रखें
3. **नेटवर्क सुरक्षा**: फ़ायरवॉल और VPN का इस्तेमाल करें
4. **मॉनिटरिंग**: हर पहलू की मॉनिटरिंग सेट अप करें

## अतिरिक्त संसाधन

- **[Chains रिपॉज़िटरी](https://github.com/mezo-org/chains.git)** - कॉन्फ़िगरेशन रिपॉज़िटरी
- **[Mezod दस्तावेज़ीकरण](/docs/in/docs/developers/mezod/)** - चेन क्लाइंट का दस्तावेज़ीकरण
- **[Validator Kit](/docs/in/docs/developers/mezo-nodes/validator-kit/)** - वैलिडेटर सेटअप गाइड
- **[Cosmos SDK कॉन्फ़िगरेशन](https://docs.cosmos.network/)** - Cosmos SDK दस्तावेज़

:::note
अप-टू-डेट नेटवर्क पैरामीटर और एंडपॉइंट के लिए हमेशा [chains रिपॉज़िटरी](https://github.com/mezo-org/chains.git) में मौजूद नवीनतम कॉन्फ़िगरेशन देखें।
:::

## सहायता

कॉन्फ़िगरेशन में मदद के लिए:
- [Mezo Discord](https://discord.com/invite/mezo) से जुड़ें
- [GitHub Issues](https://github.com/mezo-org/chains/issues) देखें
- [अक्सर पूछे जाने वाले प्रश्न (FAQ)](/docs/in/docs/developers/getting-started/FAQs) पढ़ें
