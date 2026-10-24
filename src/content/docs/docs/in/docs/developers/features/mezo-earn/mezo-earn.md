---
title: Mezo Earn डेवलपमेंट गाइड
description: >-
  Mezo Earn पर बिल्ड करने के लिए विस्तृत गाइड, जो Solidly से प्रेरित Mezo गेज
  सिस्टम और DEX है।
topic: developers
---
Mezo Earn वह स्मार्ट कॉन्ट्रैक्ट सिस्टम है जो Mezo गेज सिस्टम और डिसेंट्रलाइज़्ड एक्सचेंज (DEX) को चलाता है। यह गाइड आपको समझने में मदद करेगी कि Mezo Earn कॉन्ट्रैक्ट्स पर कैसे बिल्ड करें और उनसे कैसे इंटरैक्ट करें।

📄 **[Mezo Earn व्हाइटपेपर (PDF) डाउनलोड करें](/docs/Mezo_Earn_Whitepaper.pdf)** — आर्थिक इंसेंटिव फ़्रेमवर्क, ड्यूल-टोकन मॉडल और टोकनॉमिक्स के विस्तृत अवलोकन के लिए।

## अवलोकन

Mezo Earn ये सुविधाएं देता है:
- **डिसेंट्रलाइज़्ड एक्सचेंज (DEX)**: टोकन स्वैप के लिए ऑटोमेटेड मार्केट मेकर
- **गेज सिस्टम**: वोटिंग और रिवॉर्ड बांटने का मैकेनिज़्म
- **Solidly से प्रेरित आर्किटेक्चर**: कुशल ve-टोकनॉमिक्स और लिक्विडिटी मैनेजमेंट

## रिपॉज़िटरी की संरचना

[Mezo Earn रिपॉज़िटरी](https://github.com/mezo-org/tigris.git) में ये शामिल हैं:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: Solidity में लिखे गए स्मार्ट कॉन्ट्रैक्ट
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: कॉन्ट्रैक्ट्स से इंटरैक्ट करने के लिए फ़्रंटएंड ऐप्लिकेशन
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: Cloudflare-आधारित इंफ्रास्ट्रक्चर कंपोनेंट
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: CI/CD ऑटोमेशन

## डेवलपमेंट सेटअप

### पूर्व-आवश्यकताएं

- Node.js (सटीक वर्ज़न के लिए [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) देखें)
- pnpm पैकेज मैनेजर
- Git
- Foundry (स्मार्ट कॉन्ट्रैक्ट डेवलपमेंट के लिए)

### इंस्टॉलेशन

1. रिपॉज़िटरी क्लोन करें:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. डिपेंडेंसी इंस्टॉल करें:
```bash
pnpm install
```

3. pre-commit हुक सेट अप करें:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### pre-commit हुक की टेस्टिंग

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## स्मार्ट कॉन्ट्रैक्ट डेवलपमेंट

### कॉन्ट्रैक्ट आर्किटेक्चर

Mezo Earn कॉन्ट्रैक्ट [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity) डायरेक्टरी में व्यवस्थित हैं। मुख्य कंपोनेंट ये हैं:

- **कोर DEX कॉन्ट्रैक्ट**: ऑटोमेटेड मार्केट मेकर की कार्यक्षमता
- **गेज कॉन्ट्रैक्ट**: वोटिंग और रिवॉर्ड का वितरण
- **टोकन कॉन्ट्रैक्ट**: ERC20 इम्प्लीमेंटेशन
- **यूटिलिटी कॉन्ट्रैक्ट**: हेल्पर फ़ंक्शन और लाइब्रेरी

### डेवलपमेंट वर्कफ़्लो

1. **कॉन्ट्रैक्ट लिखें**: `solidity/` में Solidity फ़ाइलें बनाएं या बदलें
2. **कॉन्ट्रैक्ट टेस्ट करें**: अपने कॉन्ट्रैक्ट्स के लिए व्यापक टेस्ट लिखें
3. **डिप्लॉय करें**: टेस्टनेट/मेननेट पर डिप्लॉय करने के लिए डिप्लॉयमेंट स्क्रिप्ट का इस्तेमाल करें
4. **वेरिफ़ाई करें**: ब्लॉक एक्सप्लोरर पर कॉन्ट्रैक्ट वेरिफ़ाई करें

### कॉन्ट्रैक्ट कंपाइल करना

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### टेस्टिंग

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## फ़्रंटएंड डेवलपमेंट

[`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) डायरेक्टरी में Mezo Earn कॉन्ट्रैक्ट्स से इंटरैक्ट करने के लिए फ़्रंटएंड ऐप्लिकेशन है।

### मुख्य फ़ीचर

- **स्वैप इंटरफ़ेस**: टोकन स्वैप करने की सुविधा
- **लिक्विडिटी मैनेजमेंट**: पूल में लिक्विडिटी जोड़ें/हटाएं
- **गेज वोटिंग**: गेज वोटिंग और रिवॉर्ड में हिस्सा लें
- **पोर्टफ़ोलियो मैनेजमेंट**: पोज़िशन और रिवॉर्ड पर नज़र रखें

### डेवलपमेंट कमांड

```bash
# Navigate to dapp directory
cd dapp

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## इंटीग्रेशन गाइड

### Mezo Earn कॉन्ट्रैक्ट्स से कनेक्ट करना

1. **कॉन्ट्रैक्ट एड्रेस प्राप्त करें**: Mezo टेस्टनेट/मेननेट के लिए डिप्लॉय किए गए कॉन्ट्रैक्ट एड्रेस
2. **ABI इंटीग्रेशन**: इंटरैक्शन के लिए कॉन्ट्रैक्ट ABI इम्पोर्ट करें
3. **Web3 प्रोवाइडर**: RPC के ज़रिए Mezo नेटवर्क से कनेक्ट करें

### इंटीग्रेशन का उदाहरण

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

### टोकन स्वैप करना

```typescript
async function swapTokens(
  routerContract: Contract,
  wallet: Wallet,
  amountIn: bigint,
  tokenIn: string,
  tokenOut: string,
  to: string
) {
  // Approve token spending
  const tokenContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);
  await tokenContract.approve(routerContract.address, amountIn);
  
  // Execute swap
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  const minAmountOut = 0; // Calculate proper slippage in production
  
  await routerContract.connect(wallet).swapExactTokensForTokens(
    amountIn,
    minAmountOut,
    [tokenIn, tokenOut],
    to,
    deadline
  );
}
```

### लिक्विडिटी जोड़ना

```typescript
async function addLiquidity(
  routerContract: Contract,
  wallet: Wallet,
  tokenA: string,
  tokenB: string,
  amountA: bigint,
  amountB: bigint
) {
  // Approve both tokens
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, wallet);
  
  await tokenAContract.approve(routerContract.address, amountA);
  await tokenBContract.approve(routerContract.address, amountB);
  
  // Add liquidity
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
  
  await routerContract.connect(wallet).addLiquidity(
    tokenA,
    tokenB,
    amountA,
    amountB,
    0, // minAmountA - calculate proper slippage
    0, // minAmountB - calculate proper slippage
    wallet.address,
    deadline
  );
}
```

## डिप्लॉयमेंट

### टेस्टनेट डिप्लॉयमेंट

1. `.env` में टेस्टनेट पैरामीटर कॉन्फ़िगर करें
2. डिप्लॉयमेंट स्क्रिप्ट से कॉन्ट्रैक्ट डिप्लॉय करें:
```bash
pnpm deploy:testnet
```
3. टेस्टनेट एक्सप्लोरर पर कॉन्ट्रैक्ट वेरिफ़ाई करें
4. फ़्रंटएंड कॉन्फ़िगरेशन अपडेट करें

### मेननेट डिप्लॉयमेंट

1. टेस्टनेट पर पूरी तरह टेस्टिंग करें
2. सिक्योरिटी ऑडिट (अगर ज़रूरी हो)
3. मेननेट पर डिप्लॉय करें
4. कॉन्ट्रैक्ट वेरिफ़ाई करें
5. प्रोडक्शन कॉन्फ़िगरेशन अपडेट करें

## मॉनिटरिंग और मेंटेनेंस

### कॉन्ट्रैक्ट मॉनिटरिंग

- अहम फ़ंक्शन के लिए इवेंट मॉनिटरिंग सेट अप करें
- गैस के इस्तेमाल और ऑप्टिमाइज़ेशन के मौकों पर नज़र रखें
- कॉन्ट्रैक्ट इंटरैक्शन और यूज़र गतिविधि को ट्रैक करें

### सुरक्षा से जुड़ी बातें

- नियमित सिक्योरिटी ऑडिट
- एक्सेस कंट्रोल मैनेजमेंट
- इमरजेंसी पॉज़ मैकेनिज़्म
- अपग्रेड की प्रक्रियाएं

## अतिरिक्त संसाधन

- **[Mezo Earn रिपॉज़िटरी](https://github.com/mezo-org/tigris.git)** - मुख्य रिपॉज़िटरी
- **[Solidly दस्तावेज़ीकरण](https://docs.solidly.com/)** - Solidly प्रोटोकॉल का दस्तावेज़ीकरण
- **[Mezo नेटवर्क दस्तावेज़ीकरण](/docs/in/docs/developers/getting-started/configure-environment)** - नेटवर्क कॉन्फ़िगरेशन
- **[कॉन्ट्रैक्ट वेरिफ़िकेशन गाइड](/docs/in/docs/developers/contracts-reference)** - कॉन्ट्रैक्ट वेरिफ़िकेशन

:::note
विस्तृत आर्किटेक्चर, टोकनॉमिक्स और प्रोटोकॉल मैकेनिक्स के लिए, Mezo Earn रिपॉज़िटरी का README और दस्तावेज़ीकरण देखें।
:::

## सहायता

डेवलपमेंट में मदद के लिए:
- [Mezo Discord](https://discord.com/invite/mezo) से जुड़ें
- [GitHub Issues](https://github.com/mezo-org/tigris/issues) देखें
- [अक्सर पूछे जाने वाले प्रश्न (FAQ)](/docs/in/docs/developers/getting-started/FAQs) पढ़ें
