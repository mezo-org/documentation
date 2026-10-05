---
title: 'डेवलपर गाइड: ऑरेकल इंफ्रास्ट्रक्चर'
description: >-
  जानें कि Mezo ऑरेकल आपके एप्लिकेशन के लिए सुरक्षित, विकेंद्रीकृत डेटा फ़ीड
  कैसे प्रदान करते हैं।
topic: developers
---

Mezo के वैलिडेटर नोड्स में एक ऑरेकल पहले से शामिल है। थर्ड-पार्टी ऑरेकल भी उपलब्ध हैं।

## Skip Connect

Mezo अपनी मुख्य ऑरेकल सेवा के रूप में [Skip Connect](https://github.com/skip-mev/connect) का इस्तेमाल करता है। Skip ब्लॉक कंसेंसस के दौरान किसी एसेट पेयर की कीमत तय करता है और इसे [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos मॉड्यूल की ऑनचेन स्टेट में लिखता है। यह मॉड्यूल Skip देता है और इसे Mezo क्लाइंट में प्लग किया गया है।

साइडकार उसी सिस्टम पर चलता है जिस पर वैलिडेटर नोड चलता है, इसलिए डेटा लाने और एग्रीगेट करने का काम उसी सिस्टम पर पूरा होता है और नतीजा gRPC के ज़रिए वैलिडेटर नोड को भेजा जाता है।

![डायग्राम: Skip कई स्रोतों से मार्केट डेटा एग्रीगेट करता है, और Mezo वैलिडेटर Skip Connect और x/oracle चलाकर ऑनचेन स्टेट को नई वैल्यू से अपडेट करते हैं](/docs/images/oracle/mezo-oracle.avif)

Skip डेटा को कैसे एग्रीगेट करता है, इसकी पूरी जानकारी के लिए [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) दस्तावेज़ीकरण देखें।

Skip Connect में कई [प्रोवाइडर](https://github.com/skip-mev/connect/blob/main/providers/README.md) शामिल हैं जिन्हें साइडकार में कॉन्फ़िगर किया जा सकता है। उपलब्ध प्रोवाइडरों की पूरी सूची Skip Connect दस्तावेज़ीकरण में देखें:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip Providers और Market Map संदर्भ:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork एक ऑरेकल प्रोटोकॉल है जो डेटा प्रोवाइडरों और ऑन-चेन व ऑफ-चेन, दोनों तरह के एप्लिकेशन के बीच बेहद कम लेटेंसी वाले कनेक्शन देता है। Stork का सबसे आम इस्तेमाल DeFi के लिए रियल-टाइम प्राइस फ़ीड के रूप में मार्केट डेटा को पुल करना और इस्तेमाल करना है। Stork [Mezo टेस्टनेट पर उपलब्ध है](https://docs.stork.network/resources/contract-addresses/evm#mezo)।

- **[Stork दस्तावेज़ीकरण](https://docs.stork.network/)**
- **[Mezo टेस्टनेट पर डिप्लॉय किए गए कॉन्ट्रैक्ट](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra एक क्रॉस-चेन ऑरेकल नेटवर्क है जिसे तेज़, सुरक्षित, विकेंद्रीकृत और स्केलेबल डेटा सॉल्यूशन के ज़रिए अलग-अलग ब्लॉकचेन इकोसिस्टम के dApps को चलाने के लिए डिज़ाइन किया गया है। Supra का [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) Mezo टेस्टनेट पर उपलब्ध है। सही पुल कॉन्ट्रैक्ट और स्टोरेज कॉन्ट्रैक्ट एड्रेस जानने के लिए Supra का [उपलब्ध नेटवर्क](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) पेज देखें।

- **[Supra दस्तावेज़ीकरण](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) सबसे बड़े फर्स्ट-पार्टी ऑरेकल नेटवर्क में से एक है और Mezo सहित कई चेन पर रियल-टाइम डेटा प्रदान करता है। Pyth एक नया, कम लेटेंसी वाला [पुल ऑरेकल डिज़ाइन](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) पेश करता है जिसमें यूज़र ज़रूरत पड़ने पर प्राइस अपडेट ऑनचेन पुल कर सकते हैं। इससे ऑनचेन एनवायरनमेंट में हर कोई डेटा पॉइंट कुशलता से एक्सेस कर सकता है। Pyth नेटवर्क हर 400ms में कीमतें अपडेट करता है, जिससे Pyth सबसे तेज़ ऑनचेन ऑरेकल में से एक बन जाता है।

Pyth के ऑरेकल कॉन्ट्रैक्ट:
- Mezo मेननेट (प्रॉक्सी): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo टेस्टनेट (प्रॉक्सी): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

अपने dApp में Pyth का इस्तेमाल कैसे करें, यह जानने के लिए [Pyth दस्तावेज़ीकरण](https://docs.pyth.network/home) देखें।
