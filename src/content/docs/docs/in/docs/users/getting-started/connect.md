---
title: अपना वॉलेट Mezo से कनेक्ट करें
topic: users
---

अपना ब्राउज़र वॉलेट कनेक्ट करने के लिए, मेननेट या टेस्टनेट में से किसी एक के नेटवर्क विवरण का इस्तेमाल करें।

आप Chainlist पर **Connect Wallet** बटन का इस्तेमाल करके Mezo को अपने वॉलेट में जोड़ सकते हैं:

- मेननेट: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- टेस्टनेट: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

अगर Chainlist काम नहीं करता है, तो नीचे दिए गए नेटवर्क विवरण का इस्तेमाल करके नेटवर्क को मैन्युअल रूप से जोड़ें।

## Mezo मेननेट

### पब्लिक RPC एंडपॉइंट

| प्रोवाइडर | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

ज़्यादा रेट लिमिट के लिए, Boar [boar.network/mezo](https://boar.network/mezo) पर मुफ़्त API key देता है। Enterprise प्लान भी उपलब्ध है - शुरू करने के लिए [https://dashboard.boar.network/](https://dashboard.boar.network/) पर जाएं।

ज़्यादा रेट लिमिट के लिए [validationcloud.io/mezo](https://www.validationcloud.io/mezo) पर अपनी मुफ़्त Validation Cloud API key पाएं, या Enterprise प्लान के लिए [validationcloud.io/contact](https://validationcloud.io/contact) पर उनसे संपर्क करें।

### नेटवर्क विवरण

| पैरामीटर | मान |
|-----------|-------|
| Chain ID | `31612` |
| करेंसी | BTC (18 डेसिमल) |
| ब्लॉक एक्सप्लोरर | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo टेस्टनेट

### पब्लिक RPC एंडपॉइंट

| प्रोटोकॉल | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### नेटवर्क विवरण

| पैरामीटर | मान |
|-----------|-------|
| Chain ID | `31611` |
| करेंसी | BTC (18 डेसिमल) |
| ब्लॉक एक्सप्लोरर | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Mezo पर बिल्ड कर रहे हैं?]
Hardhat और Foundry कॉन्फ़िगरेशन के लिए [डेवलपर एनवायरनमेंट सेट अप करें](/docs/in/docs/developers/getting-started/configure-environment) गाइड देखें।
:::

## Mezo को अपने वॉलेट में मैन्युअल रूप से जोड़ना

अगर आपको नेटवर्क अपने वॉलेट में मैन्युअल रूप से जोड़ना है, तो अपने वॉलेट के अनुसार कस्टम नेटवर्क जोड़ने के लिए नीचे दिए गए निर्देशों का पालन करें:

* MetaMask: [How to add a custom network RPC](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Adding a Custom Network](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Add a Custom Network (Mobile)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC वॉलेट

BTC वॉलेट Mezo App में सपोर्ट किए जाते हैं और आपके BTC वॉलेट से जुड़ा एक Mezo नेटवर्क एड्रेस प्राप्त कर सकते हैं। फ़िलहाल BTC वॉलेट से Mezo पर ये काम किए जा सकते हैं:

- BTC एसेट ब्रिज करना
- EVM एसेट ब्रिज करना
- लोन के लिए उधार लेना, लोन चुकाना या कोलैटरल मैनेज करना
- MUSD Market पर चीज़ें खरीदना
- Mezo नेटवर्क पर एसेट प्राप्त करना और भेजना
- Mezo Earn में हिस्सा लेना (लॉक, वोट, वॉल्ट और पूल में जमा करना/उनसे निकालना, रिवॉर्ड क्लेम करना)

## डेवलपर

Mezo पर dApp डेवलप और डिप्लॉय करना सीखने के लिए, [डेवलपर के लिए शुरुआत](/docs/in/docs/developers/getting-started/) दस्तावेज़ीकरण देखें।
