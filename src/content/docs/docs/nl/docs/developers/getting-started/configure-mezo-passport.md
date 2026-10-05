---
title: Handleiding voor het instellen van Mezo Passport
description: Instructies om Mezo Passport in te stellen
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) is een package dat is gebouwd op [RainbowKit](https://rainbowkit.com/) en extra opties biedt om wallets te verbinden, specifiek afgestemd op Bitcoin-wallets en Mezo. Met dit package kunnen developers ondersteuning voor Bitcoin-wallets integreren naast Ethereum-compatibele (EVM-)wallets, zodat gebruikers een veelzijdigere verbindingservaring krijgen. Passport integreert met de libraries [viem](https://viem.sh/) en [wagmi](https://wagmi.sh/) voor gestroomlijnd walletbeheer in zowel het Bitcoin- als het EVM-ecosysteem.

Download het NPM-package [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Kun je Mezo Passport niet gebruiken voor je dApp? Dan volstaan de configuratiestappen in de handleiding [Je omgeving configureren](../../../../../../docs/developers/getting-started/configure-environment) voor traditionele EVM-ontwikkeling.

### Voordat je begint



* [Configureer je omgeving](../../../../../../docs/developers/getting-started/configure-environment) voor ontwikkeling met HardHat of Foundry.
* Ben je niet bekend met RainbowKit, lees dan de [documentatie van RainbowKit](https://www.rainbowkit.com/) om de basis te leren.

### Installeren


Zie de [handleiding Aan de slag](https://mezo.org/docs/developers/getting-started) voor de officiële installatie-instructies.

### Je applicatie configureren


Zie de [handleiding Aan de slag](https://mezo.org/docs/developers/getting-started) voor de officiële configuratievoorbeelden.

### Wallets verbinden



Gebruik de standaardcomponenten van Wagmi of RainbowKit om verbinding te maken met de Mezo Passport-wallet.

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

### Volgende stappen



Meer voorbeelden vind je in de [Readme van Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
