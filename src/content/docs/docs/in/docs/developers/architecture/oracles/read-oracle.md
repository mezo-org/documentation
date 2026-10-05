---
title: ऑरेकल से बाज़ार डेटा पढ़ना
description: Mezo के ऑरेकल इंफ्रास्ट्रक्चर से बाज़ार डेटा को एक्सेस करने और समझने का तरीका।
topic: developers
---

Mezo दो ऑरेकल सिस्टम के ज़रिए बाज़ार डेटा देता है: BTC/USD के लिए [Skip Connect](https://docs.skip.build/connect/introduction) और अतिरिक्त प्राइस फ़ीड के लिए [Pyth Network](https://docs.pyth.network/home)।

## अवलोकन

### Skip ऑरेकल

Skip ऑरेकल Chainlink-संगत एग्रीगेटर इंटरफ़ेस के ज़रिए Mezo पर नेटिव BTC/USD प्राइस फ़ीड देता है।

- **समर्थित पेयर:** केवल BTC/USD
- **अपडेट फ़्रीक्वेंसी:** हर ब्लॉक
- **इंटरफेस:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth ऑरेकल

Pyth ऑरेकल BTC/USD के अलावा कई और प्राइस फ़ीड देता है।

**अपडेट फ़्रीक्वेंसी:** टोकन पेयर पर निर्भर करती है।

- Mezo पर विवरण के लिए [कॉन्फ़िगरेशन फ़ाइल](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml) देखें।
- Ethereum पर विवरण के लिए [कॉन्फ़िगरेशन फ़ाइल](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml) देखें।

कीमत तब अपडेट होती है जब `price_deviation` तय थ्रेशोल्ड (प्रतिशत अंकों में) से ज़्यादा हो जाए, या हर `time_difference` सेकंड पर, इनमें से जो भी पहले हो।

## सबसे अच्छे तरीके

ऑरेकल डेटा इस्तेमाल करने वाले dApps बनाते समय, इन दिशानिर्देशों का पालन करें:

- **डेटा कितना ताज़ा है, यह जांचें:** पुराने (stale) डेटा का पता लगाने के लिए हमेशा टाइमस्टैम्प और ब्लॉक नंबर जांचें। अपने यूज़ केस के हिसाब से staleness की उचित थ्रेशोल्ड सेट करें।
- **कीमत की सीमाएं तय करें:** असामान्य बदलाव या हेरफेर की कोशिशों का पता लगाने के लिए कीमतों पर सैनिटी चेक लागू करें।
- **बाज़ार की स्थितियों पर नज़र रखें:** वोलैटिलिटी, लिक्विडिटी और संभावित हेरफेर की घटनाओं से अवगत रहें, जिनकी वजह से आपके एप्लिकेशन को रोकना पड़ सकता है।
- **सिक्योरिटी ऑडिट:** सुनिश्चित करें कि आपके कॉन्ट्रैक्ट और डिपेंडेंसी सुरक्षा मानकों को पूरा करते हैं। एक्सप्लॉइट रोकने के लिए ऑरेकल डेटा को हैंडल करने वाले कोड का ऑडिट करें।

## प्राइस फ़ीड पढ़ना

### Skip ऑरेकल का उपयोग (BTC/USD)

Skip ऑरेकल Chainlink-संगत इंटरफ़ेस इम्प्लीमेंट करता है। सबसे नई कीमत पाने के लिए `latestRoundData()` कॉल करें:

**कॉन्ट्रैक्ट:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**रिटर्न वैल्यू:**

- `roundId`: वह राउंड ID जिसमें कीमत अपडेट हुई थी
- `answer`: BTC/USD कीमत (डेसिमल प्रिसिज़न जानने के लिए `decimals()` का इस्तेमाल करें)
- `startedAt`: राउंड शुरू होने का Unix टाइमस्टैम्प
- `updatedAt`: राउंड के अंतिम अपडेट का Unix टाइमस्टैम्प

### Pyth ऑरेकल का उपयोग (एकाधिक फ़ीड)

Pyth अपने EVM कॉन्ट्रैक्ट के ज़रिए कई प्राइस फ़ीड देता है। बिल्ट-इन staleness जांच के साथ कीमतें पाने के लिए `getPriceNoOlderThan(pair_id, maxAgeSeconds)` का इस्तेमाल करें।

**कॉन्ट्रैक्ट Mezo मेननेट:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**कॉन्ट्रैक्ट Mezo टेस्टनेट:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**कॉन्ट्रैक्ट Ethereum मेननेट:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**कॉन्ट्रैक्ट Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**किसी प्राइस ID के लिए कीमत पाने का उदाहरण:**

```solidity
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract ReadPythPrice {
    IPyth public immutable pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract); // 0x2880aB155794e7179c9eE2e38200202908C17B43 on Mezo
    }

    function getPrice(bytes32 priceId, uint256 maxAgeSeconds)
        external
        view
        returns (int64 price, uint64 conf, int32 expo, uint256 publishTime)
    {
        PythStructs.Price memory priceData = pyth.getPriceNoOlderThan(priceId, maxAgeSeconds);
        return (priceData.price, priceData.conf, priceData.expo, priceData.publishTime);
    }

    // Example: Get MUSD/USD price
    function getMUSDPrice() external view returns (int64, uint256) {
        bytes32 musdPriceId = 0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de;
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(musdPriceId, 3600); // Max 1 hour old
        return (price.price, price.publishTime);
    }
}
```

**संदर्भ:** getPriceNoOlderThan API [दस्तावेज़ीकरण](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan)

## ऑफचेन प्राइस डेटा

आप ब्लॉकचेन के साथ इंटरैक्ट किए बिना सीधे Pyth Network से प्राइस फ़ीड और मेटाडेटा क्वेरी कर सकते हैं:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **प्राइस फ़ीड ID:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## उपलब्ध प्राइस फ़ीड

### Skip ऑरेकल फ़ीड

Mezo मेननेट और टेस्टनेट, दोनों पर उपलब्ध:

| पेयर | कॉन्ट्रैक्ट एड्रेस | नेटवर्क |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | मेननेट |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | टेस्टनेट |

**नोड API (केवल टेस्टनेट):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth ऑरेकल फ़ीड

इन पर उपलब्ध:

- Mezo [मेननेट](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) पर `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [टेस्टनेट](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) पर `0x2880aB155794e7179c9eE2e38200202908C17B43`।
- Ethereum [मेननेट](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) पर `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) पर `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`।

**Mezo पर समर्थित प्राइस फ़ीड ID:**

| पेयर | प्राइस फ़ीड ID |
|------|---------------|
| SolvBTC/USD | `0xf253cf87dc7d5ed5aa14cba5a6e79aee8bcfaef885a0e1b807035a0bbecc36fa` |
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| MEZO/USD | `0x80beaaedbdd228e77c5d62dfcd74b0305674b7e27a5cc6a46e71bd3a696826df` |
| BTC/USD | `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43` |
| cbBTC/USD | `0x2817d7bfe5c64b8ea956e9a26f573ef64e72e4d7891f2d6af9bcc93f7aff9a97` |
| USDC/USD | `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |
| T/USD | `0x7a072b799215196b0ecb6a58636ec312bce8461dcc33c28c3a046b1e636d121d` |
| NVDA/USD | `0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593` |
| GOOGL/USD | `0x5a48c03e9b9cb337801073ed9d166817473697efff0d138874e0f6a33d6d5aa6` |
| TSLA/USD | `0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1` |
| MSTR/USD | `0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09` |
| COIN/USD | `0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245` |
| CRCL/USD | `0x92b8527aabe59ea2b12230f7b532769b133ffb118dfbd48ff676f14b273f1365` |

**Ethereum पर समर्थित प्राइस फ़ीड ID:**

| पेयर | प्राइस फ़ीड ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**अतिरिक्त प्राइस फ़ीड का अनुरोध:** और Pyth प्राइस फ़ीड चालू करवाने के लिए, उपलब्ध [प्राइस फ़ीड ID](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) की पूरी सूची देखें और ऑनचेन एक्टिवेशन के अनुरोध के लिए Mezo टीम से संपर्क करें।
