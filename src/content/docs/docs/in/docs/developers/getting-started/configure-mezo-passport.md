---
title: Mezo Passport सेटअप गाइड
description: Mezo Passport सेट अप करने के निर्देश
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) एक पैकेज है जो [RainbowKit](https://rainbowkit.com/) के ऊपर बना है और खास तौर पर बिटकॉइन वॉलेट और Mezo के लिए तैयार किए गए अतिरिक्त वॉलेट कनेक्शन विकल्प देता है। इस पैकेज की मदद से डेवलपर Ethereum-कम्पैटिबल (EVM) वॉलेट के साथ-साथ बिटकॉइन वॉलेट सपोर्ट भी इंटीग्रेट कर सकते हैं, ताकि यूज़र्स को कनेक्ट करने के ज़्यादा विकल्प मिलें। बिटकॉइन और EVM इकोसिस्टम में वॉलेट मैनेजमेंट को आसान बनाने के लिए Passport, [viem](https://viem.sh/) और [wagmi](https://wagmi.sh/) लाइब्रेरी के साथ इंटीग्रेट होता है।

[@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport) NPM पैकेज प्राप्त करें

अगर आप अपने dApp के लिए Mezo Passport का इस्तेमाल नहीं कर सकते, तो पारंपरिक EVM डेवलपमेंट के लिए [अपना एनवायरनमेंट कॉन्फ़िगर करें](../../../../../../docs/developers/getting-started/configure-environment) गाइड में दिए गए कॉन्फ़िगरेशन स्टेप काफ़ी हैं।

### शुरू करने से पहले



* HardHat या Foundry के साथ डेवलपमेंट के लिए [अपना एनवायरनमेंट कॉन्फ़िगर करें](../../../../../../docs/developers/getting-started/configure-environment)।
* अगर आप RainbowKit से परिचित नहीं हैं, तो बुनियादी बातें जानने के लिए [RainbowKit दस्तावेज़ीकरण](https://www.rainbowkit.com/) पढ़ें।

### इंस्टॉल करें


आधिकारिक इंस्टॉलेशन निर्देशों के लिए [Getting Started गाइड](https://mezo.org/docs/developers/getting-started) देखें।

### अपना एप्लिकेशन कॉन्फ़िगर करें


आधिकारिक कॉन्फ़िगरेशन उदाहरणों के लिए [Getting Started गाइड](https://mezo.org/docs/developers/getting-started) देखें।

### वॉलेट कनेक्ट करना



Mezo Passport वॉलेट से कनेक्ट करने के लिए, स्टैंडर्ड Wagmi या RainbowKit कंपोनेंट का इस्तेमाल करें।

#### Wagmi



```
import { useChainId, useConnect } from "wagmi";

export const YourApp = () => {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div>
      {connectors.map((connector) => (
        <button
          type="button"
          onClick={() => {
            connect({ connector, chainId });
          }}
          key={connector.id}
        >
          {connector.name}
        </button>
      ))}
    </div>
  );
};
```

#### RainbowKit



```
import { ConnectButton } from "@rainbow-me/rainbowkit"

export const YourApp = () => {
  return <ConnectButton label="Connect wallet"/>;
};
```

### अगले कदम



और उदाहरण आपको [Mezo Passport Readme](https://www.npmjs.com/package/@mezo-org/passport#installation) में मिल जाएंगे।
