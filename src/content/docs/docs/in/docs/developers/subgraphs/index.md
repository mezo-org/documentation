---
title: Goldsky के साथ सबग्राफ डिप्लॉयमेंट
description: >-
  Goldsky इंफ्रास्ट्रक्चर का इस्तेमाल करके Mezo पर सबग्राफ डिप्लॉय और मैनेज करने
  की गाइड।
topic: developers
---
यह गाइड बताती है कि Goldsky के इंफ्रास्ट्रक्चर का इस्तेमाल करके Mezo प्रोटोकॉल के लिए सबग्राफ कैसे डिप्लॉय और मैनेज करें। सबग्राफ GraphQL API के ज़रिए ब्लॉकचेन डेटा को कुशलता से क्वेरी करना संभव बनाते हैं।

## अवलोकन

सबग्राफ ये सुविधाएं देते हैं:
- **इंडेक्स किया गया डेटा**: ब्लॉकचेन डेटा तक तेज़ पहुंच
- **GraphQL API**: क्वेरी करने के लिए लचीला इंटरफ़ेस
- **रियल-टाइम अपडेट**: लाइव डेटा सिंक्रोनाइज़ेशन
- **कस्टम लॉजिक**: ऑन-चेन डेटा को ट्रांसफ़ॉर्म और एग्रीगेट करना

## रिपॉज़िटरी संरचना

Mezo सबग्राफ रिपॉज़िटरी में आमतौर पर ये होते हैं:

- **[schema.graphql](https://github.com/mezo-org/subgraphs/tree/main/schema)**: GraphQL स्कीमा डेफ़िनिशन
- **[subgraph.yaml](https://github.com/mezo-org/subgraphs/tree/main)**: सबग्राफ मैनिफ़ेस्ट
- **[src/](https://github.com/mezo-org/subgraphs/tree/main/src)**: मैपिंग लॉजिक (AssemblyScript)
- **[abis/](https://github.com/mezo-org/subgraphs/tree/main/abis)**: कॉन्ट्रैक्ट ABI
- **[tests/](https://github.com/mezo-org/subgraphs/tree/main/tests)**: यूनिट टेस्ट

## डेवलपमेंट सेटअप

### पूर्व-आवश्यकताएं

- Node.js 18+ (सटीक वर्ज़न के लिए रिपॉज़िटरी की `.nvmrc` देखें)
- npm या yarn पैकेज मैनेजर
- Git
- Graph CLI
- Goldsky अकाउंट

### इंस्टॉलेशन

1. सबग्राफ रिपॉज़िटरी क्लोन करें:
```bash
git clone https://github.com/mezo-org/subgraphs.git
cd subgraphs
```

2. डिपेंडेंसी इंस्टॉल करें:
```bash
npm install
# or
yarn install
```

3. Graph CLI इंस्टॉल करें:
```bash
npm install -g @graphprotocol/graph-cli
```

## सबग्राफ डेवलपमेंट

### स्कीमा डेफ़िनिशन

`schema.graphql` में अपने डेटा मॉडल डिफ़ाइन करें:

```graphql
type Token @entity {
  id: ID!
  name: String!
  symbol: String!
  decimals: Int!
  totalSupply: BigInt!
}

type Transfer @entity {
  id: ID!
  from: Bytes!
  to: Bytes!
  amount: BigInt!
  timestamp: BigInt!
  transactionHash: Bytes!
}
```

### सबग्राफ मैनिफ़ेस्ट

`subgraph.yaml` में अपना सबग्राफ कॉन्फ़िगर करें:

```yaml
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
  - kind: ethereum
    name: MUSDToken
    network: mezo-mainnet
    source:
      address: "0x..." # Contract address
      abi: MUSD
      startBlock: 0
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Token
        - Transfer
      abis:
        - name: MUSD
          file: ./abis/MUSD.json
      eventHandlers:
        - event: Transfer(indexed address,indexed address,uint256)
          handler: handleTransfer
      file: ./src/mapping.ts
```

### मैपिंग लॉजिक

`src/mapping.ts` में इवेंट हैंडलर इम्प्लीमेंट करें:

```typescript
import { Transfer as TransferEvent } from "../generated/MUSDToken/MUSD"
import { Transfer, Token } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTransfer(event: TransferEvent): void {
  // Create transfer entity
  let transfer = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  
  transfer.from = event.params.from
  transfer.to = event.params.to
  transfer.amount = event.params.value
  transfer.timestamp = event.block.timestamp
  transfer.transactionHash = event.transaction.hash
  
  transfer.save()
  
  // Update token entity
  let token = Token.load("1")
  if (token == null) {
    token = new Token("1")
    token.name = "Mezo USD"
    token.symbol = "MUSD"
    token.decimals = 18
    token.totalSupply = BigInt.fromI32(0)
  }
  
  token.save()
}
```

### कोड जनरेशन

अपने स्कीमा से TypeScript टाइप जनरेट करें:

```bash
# Generate types
graph codegen

# Build subgraph
graph build
```

## टेस्टिंग

### यूनिट टेस्ट

अपनी मैपिंग के लिए यूनिट टेस्ट लिखें:

```typescript
import { describe, test, assert } from "matchstick-as/assembly/index"
import { handleTransfer } from "../src/mapping"
import { createTransferEvent } from "./utils"

describe("MUSD Transfer", () => {
  test("Should create transfer entity", () => {
    let event = createTransferEvent(
      "0xfrom",
      "0xto",
      BigInt.fromI32(1000)
    )
    
    handleTransfer(event)
    
    assert.fieldEquals(
      "Transfer",
      event.transaction.hash.toHex(),
      "amount",
      "1000"
    )
  })
})
```

टेस्ट चलाएं:

```bash
# Run all tests
npm test

# Run specific test
graph test
```

## Goldsky के साथ डिप्लॉयमेंट

### पूर्व-आवश्यकताएं

1. **Goldsky अकाउंट बनाएं**: [goldsky.com](https://goldsky.com) पर साइन अप करें
2. **Goldsky CLI इंस्टॉल करें**:
```bash
npm install -g @goldsky/cli
```

3. **ऑथेंटिकेट करें**:
```bash
goldsky login
```

### डिप्लॉयमेंट प्रक्रिया

1. **सबग्राफ डिप्लॉय करें**:
```bash
# Deploy to Goldsky
goldsky subgraph deploy <subgraph-name> <version>

# Example
goldsky subgraph deploy musd-subgraph 1.0.0
```

2. **डिप्लॉयमेंट मॉनिटर करें**:
```bash
# Check deployment status
goldsky subgraph status <subgraph-name>

# View logs
goldsky subgraph logs <subgraph-name>
```

### कॉन्फ़िगरेशन

एक Goldsky कॉन्फ़िगरेशन फ़ाइल बनाएं:

```json
{
  "version": "1",
  "name": "musd-subgraph",
  "schema": "./schema.graphql",
  "dataSources": [
    {
      "name": "MUSD",
      "network": "mezo-mainnet",
      "address": "0x...",
      "startBlock": 0
    }
  ]
}
```

## सबग्राफ क्वेरी करना

### GraphQL क्वेरी

डिप्लॉय होने के बाद, अपना सबग्राफ क्वेरी करें:

```graphql
# Get recent transfers
{
  transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
    id
    from
    to
    amount
    timestamp
    transactionHash
  }
}

# Get token information
{
  token(id: "1") {
    name
    symbol
    decimals
    totalSupply
  }
}

# Filter transfers by address
{
  transfers(where: { from: "0x..." }) {
    id
    to
    amount
    timestamp
  }
}
```

### क्लाइंट इंटीग्रेशन

अपने dApp में सबग्राफ क्वेरी इंटीग्रेट करें:

```typescript
import { request, gql } from 'graphql-request'

const endpoint = 'https://api.goldsky.com/api/public/project_...'

const query = gql`
  {
    transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      from
      to
      amount
      timestamp
    }
  }
`

async function getTransfers() {
  const data = await request(endpoint, query)
  return data.transfers
}
```

### Apollo Client इंटीग्रेशन

```typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.goldsky.com/api/public/project_...',
  cache: new InMemoryCache()
})

const GET_TRANSFERS = gql`
  query GetTransfers {
    transfers(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      from
      to
      amount
      timestamp
    }
  }
`

client.query({ query: GET_TRANSFERS })
  .then(result => console.log(result))
```

## मॉनिटरिंग और मेंटेनेंस

### हेल्थ चेक

सबग्राफ की हेल्थ मॉनिटर करें:

```bash
# Check sync status
goldsky subgraph status <subgraph-name>

# View sync lag
goldsky subgraph info <subgraph-name>
```

### सबग्राफ अपडेट करना

नए वर्ज़न डिप्लॉय करें:

```bash
# Deploy updated version
goldsky subgraph deploy <subgraph-name> <new-version>

# Example
goldsky subgraph deploy musd-subgraph 1.1.0
```

### एरर हैंडलिंग

आम समस्याएं और उनके समाधान:

1. **सिंक लैग**: RPC एंडपॉइंट की हेल्थ जांचें
2. **फ़ेल हुए हैंडलर**: मैपिंग लॉजिक और लॉग की समीक्षा करें
3. **स्कीमा मेल न खाना**: सुनिश्चित करें कि स्कीमा डिप्लॉयमेंट से मेल खाता हो

## सबसे अच्छे तरीके

### स्कीमा डिज़ाइन

1. **एंटिटी**: एंटिटी के अर्थपूर्ण नाम इस्तेमाल करें
2. **रिलेशनशिप**: एंटिटी के बीच स्पष्ट रिलेशनशिप डिफ़ाइन करें
3. **इंडेक्सिंग**: अक्सर क्वेरी किए जाने वाले फ़ील्ड को इंडेक्स करें
4. **इम्यूटेबिलिटी**: एंटिटी के लिए इम्यूटेबल ID इस्तेमाल करें

### मैपिंग लॉजिक

1. **एरर हैंडलिंग**: null वैल्यू को सही तरीके से हैंडल करें
2. **गैस एफ़िशिएंसी**: एंटिटी को लोड और सेव करने की संख्या कम से कम रखें
3. **कंसिस्टेंसी**: डेटा को सुसंगत बनाए रखें
4. **टेस्टिंग**: व्यापक यूनिट टेस्ट लिखें

### परफ़ॉर्मेंस

1. **स्टार्ट ब्लॉक**: उचित स्टार्ट ब्लॉक सेट करें
2. **बैच प्रोसेसिंग**: इवेंट को बैच में प्रोसेस करें
3. **कैशिंग**: एंटिटी कैशिंग का प्रभावी ढंग से इस्तेमाल करें
4. **पेजिनेशन**: क्वेरी में सही पेजिनेशन इम्प्लीमेंट करें

## अतिरिक्त संसाधन

- **[Goldsky दस्तावेज़ीकरण](https://docs.goldsky.com/)** - Goldsky प्लेटफ़ॉर्म के दस्तावेज़
- **[The Graph दस्तावेज़ीकरण](https://thegraph.com/docs/)** - सबग्राफ डेवलपमेंट गाइड
- **[GraphQL दस्तावेज़ीकरण](https://graphql.org/)** - GraphQL क्वेरी लैंग्वेज
- **[AssemblyScript दस्तावेज़ीकरण](https://www.assemblyscript.org/)** - मैपिंग लैंग्वेज

:::note
विस्तृत सबग्राफ स्कीमा, डिप्लॉयमेंट कॉन्फ़िगरेशन और प्रोटोकॉल-विशिष्ट मैपिंग के लिए, Mezo ऑर्गनाइज़ेशन की अलग-अलग सबग्राफ रिपॉज़िटरी देखें।
:::

## सहायता

सबग्राफ डेवलपमेंट में सहायता के लिए:
- [Mezo Discord](https://discord.com/invite/mezo) से जुड़ें
- GitHub पर सबग्राफ रिपॉज़िटरी के इश्यू देखें
- [FAQ](/docs/in/docs/developers/getting-started/FAQs) पढ़ें
- [Goldsky Support](https://goldsky.com/support) से संपर्क करें
