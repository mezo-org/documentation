---
title: डेवलपर एनवायरनमेंट सेट अप करें
description: >-
  Mezo पर बिल्ड और डिप्लॉय करने के लिए अपना डेवलपमेंट एनवायरनमेंट कॉन्फ़िगर
  करें।
topic: developers
---

Mezo के लिए अपना Hardhat या Foundry डेवलपमेंट एनवायरनमेंट कॉन्फ़िगर करें।

### शुरू करने से पहले

एप्लिकेशन डिप्लॉय करने से पहले, आपको गैस फीस चुकाने के लिए BTC वाला एक Ethereum वॉलेट चाहिए होगा।

* [अपना वॉलेट Mezo से कनेक्ट करें](/docs/in/docs/users/getting-started/connect/)

एडवांस्ड चेन कॉन्फ़िगरेशन और नेटवर्क पैरामीटर के लिए, [चेन कॉन्फ़िगरेशन गाइड](/docs/in/docs/developers/chains/) देखें।

---

## मेननेट

### नेटवर्क विवरण

| पैरामीटर | मान |
|-----------|-------|
| नेटवर्क का नाम | Mezo Mainnet |
| Chain ID | `31612` |
| करेंसी | BTC (18 डेसिमल) |
| ब्लॉक एक्सप्लोरर | [explorer.mezo.org](https://explorer.mezo.org/) |

### RPC प्रोवाइडर

| प्रोवाइडर | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |
| dRPC NodeCloud | `https://mezo.drpc.org` | `wss://mezo.drpc.org` |

### Hardhat

Mezo मेननेट के लिए Hardhat कॉन्फ़िगर करने के लिए, अपनी `hardhat.config.js` (या `.ts`) फ़ाइल में बदलाव करें:

```javascript
module.exports = {
  defaultNetwork: "mezomainnet",
  networks: {
    mezomainnet: {
      url: "https://mezo-mainnet.boar.network",
      chainId: 31612,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"] // Use environment variables for security
    }
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "london",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
```

### Foundry

Mezo मेननेट के लिए Foundry प्रोजेक्ट कॉन्फ़िगर करने के लिए, अपनी `foundry.toml` में नीचे दी गई सेटिंग करें:

```toml
[profile.default]
chain_id = 31612
eth_rpc_url = "https://mezo-mainnet.boar.network"
evm_version = 'london'
```

---

## टेस्टनेट

### नेटवर्क विवरण

| पैरामीटर | मान |
|-----------|-------|
| नेटवर्क का नाम | Mezo Testnet |
| Chain ID | `31611` |
| करेंसी | BTC (18 डेसिमल) |
| ब्लॉक एक्सप्लोरर | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

### RPC एंडपॉइंट

| प्रोटोकॉल | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Hardhat

अगर आप Hardhat में नए हैं, तो Hardhat इंस्टॉल करने और अपना प्रोजेक्ट इनिशियलाइज़ करने का तरीका जानने के लिए [Hardhat Quick Start](https://hardhat.org/hardhat-runner/docs/getting-started#quick-start) गाइड देखें।

Mezo टेस्टनेट के लिए Hardhat कॉन्फ़िगर करने के लिए, अपनी `hardhat.config.js` (या `.ts`) फ़ाइल में बदलाव करें:

```javascript
module.exports = {
  defaultNetwork: "mezotestnet",
  networks: {
    mezotestnet: {
      url: "https://rpc.test.mezo.org",
      chainId: 31611,
      accounts: ["YOUR_PRIVATE_WALLET_KEY"] // Use environment variables for security
    }
  },
  solidity: {
    version: "0.8.28",
    settings: {
      evmVersion: "london",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};
```

### Foundry

अगर आप Foundry में नए हैं, तो Foundry इंस्टॉल करने और अपना प्रोजेक्ट इनिशियलाइज़ करने का तरीका जानने के लिए [Foundry Getting Started](https://book.getfoundry.sh/getting-started/installation) गाइड देखें।

Mezo टेस्टनेट के लिए Foundry प्रोजेक्ट कॉन्फ़िगर करने के लिए, अपनी `foundry.toml` में नीचे दी गई सेटिंग करें:

```toml
[profile.default]
chain_id = 31611
eth_rpc_url = "https://rpc.test.mezo.org"
evm_version = 'london'
```
