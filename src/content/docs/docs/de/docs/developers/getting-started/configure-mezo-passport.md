---
title: Einrichtungsanleitung für Mezo Passport
description: Anleitung zur Einrichtung von Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) ist ein Paket, das auf [RainbowKit](https://rainbowkit.com/) aufbaut und zusätzliche Optionen für die Wallet-Verbindung bietet, die speziell auf Bitcoin-Wallets und Mezo zugeschnitten sind. Mit diesem Paket können Entwickler die Unterstützung von Bitcoin-Wallets neben Ethereum-kompatiblen (EVM-)Wallets integrieren und so ihren Nutzern eine vielseitigere Verbindungsmöglichkeit bieten. Passport lässt sich mit den Bibliotheken [viem](https://viem.sh/) und [wagmi](https://wagmi.sh/) integrieren, um die Wallet-Verwaltung über die Bitcoin- und EVM-Ökosysteme hinweg zu vereinfachen.

Laden Sie das NPM-Paket [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport) herunter.

Wenn Sie Mezo Passport für Ihre dApp nicht verwenden können, reichen die Konfigurationsschritte aus der Anleitung [Umgebung konfigurieren](../../../../../../docs/developers/getting-started/configure-environment) für die klassische EVM-Entwicklung aus.

### Bevor Sie beginnen



* [Konfigurieren Sie Ihre Umgebung](../../../../../../docs/developers/getting-started/configure-environment) für die Entwicklung mit HardHat oder Foundry.
* Wenn Sie mit RainbowKit nicht vertraut sind, lesen Sie die [RainbowKit-Dokumentation](https://www.rainbowkit.com/), um die Grundlagen kennenzulernen.

### Installieren


Die maßgebliche Installationsanleitung finden Sie im [Leitfaden „Erste Schritte“](https://mezo.org/docs/developers/getting-started).

### Ihre Anwendung konfigurieren


Maßgebliche Konfigurationsbeispiele finden Sie im [Leitfaden „Erste Schritte“](https://mezo.org/docs/developers/getting-started).

### Wallets verbinden



Verwenden Sie die Standardkomponenten von Wagmi oder RainbowKit, um eine Verbindung mit der Mezo-Passport-Wallet herzustellen.

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

### Nächste Schritte



Weitere Beispiele finden Sie in der [Readme von Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
