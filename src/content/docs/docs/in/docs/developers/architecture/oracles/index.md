---
title: 'डेवलपर गाइड: ऑरेकल इंफ्रास्ट्रक्चर'
description: >-
  जानें कि Mezo ऑरेकल आपके एप्लिकेशन के लिए सुरक्षित, विकेंद्रीकृत डेटा फ़ीड
  कैसे प्रदान करते हैं।
topic: developers
---

Mezo अपने वैलिडेटर नोड्स के हिस्से के रूप में एक ऑरेकल शामिल करता है। तृतीय-पक्ष ऑरेकल भी उपलब्ध हैं।

## Skip Connect

Mezo अपनी मुख्य ऑरेकल सेवा के रूप में [Skip Connect](https://github.com/skip-mev/connect) का उपयोग करता है। Skip ब्लॉक सर्वसम्मति के दौरान एक एसेट पेयर की कीमत निर्धारित करता है और इसे [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos मॉड्यूल की ऑनचेन स्टेट में लिखता है। यह मॉड्यूल Skip द्वारा प्रदान किया जाता है और इसे Mezo क्लाइंट में प्लग किया गया है।

साइडकार वैलिडेटर नोड के समान सिस्टम पर चलता है, इसलिए डेटा पुनर्प्राप्ति और एकत्रीकरण उसी सिस्टम पर पूरा होता है और gRPC का उपयोग करके वैलिडेटर नोड को पास किया जाता है।

![एक आरेख जो प्रक्रिया दिखाता है जहां Skip कई स्रोतों से बाजार डेटा एकत्र करता है और Mezo वैलिडेटर नवीनतम मूल्यों के साथ ऑनचेन स्टेट को अपडेट करने के लिए Skip Connect और x/oracle चलाते हैं](/docs/images/oracle/mezo-oracle.avif)

Skip डेटा कैसे एकत्र करता है, इसके पूर्ण विवरण के लिए, [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) दस्तावेज़ीकरण देखें।

Skip Connect में कई [प्रोवाइडर](https://github.com/skip-mev/connect/blob/main/providers/README.md) शामिल हैं जिन्हें साइडकार में कॉन्फ़िगर किया जा सकता है। आप Skip Connect दस्तावेज़ीकरण में उपलब्ध प्रोवाइडरों की पूरी सूची पा सकते हैं:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip Providers और Market Map संदर्भ:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork एक ऑरेकल प्रोटोकॉल है जो डेटा प्रोवाइडरों और ऑन-चेन तथा ऑफ-चेन दोनों एप्लिकेशन के बीच अल्ट्रा कम विलंबता कनेक्शन सक्षम करता है। Stork का सबसे सामान्य उपयोग DeFi के लिए रियल टाइम प्राइस फ़ीड के रूप में बाजार डेटा को पुल और उपभोग करना है। Stork [Mezo टेस्टनेट पर उपलब्ध है](https://docs.stork.network/resources/contract-addresses/evm#mezo)।

- **[Stork दस्तावेज़ीकरण](https://docs.stork.network/)**
- **[Mezo टेस्टनेट पर डिप्लॉय किए गए कॉन्ट्रैक्ट](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra एक क्रॉस-चेन ऑरेकल नेटवर्क है जो तेज़, सुरक्षित, विकेंद्रीकृत और स्केलेबल डेटा समाधानों के साथ ब्लॉकचेन इकोसिस्टम में dApps को शक्ति प्रदान करने के लिए डिज़ाइन किया गया है। Supra का [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) Mezo टेस्टनेट पर उपलब्ध है। सही पुल कॉन्ट्रैक्ट और स्टोरेज कॉन्ट्रैक्ट पते खोजने के लिए Supra का [उपलब्ध नेटवर्क](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) पेज देखें।

- **[Supra दस्तावेज़ीकरण](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) सबसे बड़े फर्स्ट-पार्टी ऑरेकल नेटवर्क में से एक है और Mezo सहित कई चेन पर रियल-टाइम डेटा प्रदान करता है। Pyth एक अभिनव कम-विलंबता [पुल ऑरेकल डिज़ाइन](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) पेश करता है जहां उपयोगकर्ता आवश्यकता होने पर प्राइस अपडेट ऑनचेन पुल कर सकते हैं। यह ऑनचेन वातावरण में सभी को कुशलतापूर्वक डेटा पॉइंट एक्सेस करने में सक्षम बनाता है। Pyth नेटवर्क हर 400ms में कीमतों को अपडेट करता है जो Pyth को सबसे तेज़ ऑनचेन ऑरेकल में से एक बनाता है।

Pyth के ऑरेकल कॉन्ट्रैक्ट:
- Mezo मेननेट (प्रॉक्सी): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo टेस्टनेट (प्रॉक्सी): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

अपने dApp में Pyth का उपयोग कैसे करें, यह जानने के लिए [Pyth दस्तावेज़ीकरण](https://docs.pyth.network/home) देखें।
