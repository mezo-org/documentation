---
title: Guide de configuration de Mezo Passport
description: Instructions pour configurer Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) est un package construit sur [RainbowKit](https://rainbowkit.com/) qui offre des options de connexion de portefeuille supplémentaires, spécialement adaptées aux portefeuilles Bitcoin et à Mezo. Grâce à ce package, les développeurs peuvent intégrer la prise en charge des portefeuilles Bitcoin aux côtés des portefeuilles compatibles Ethereum (EVM) afin d'offrir aux utilisateurs une expérience de connexion plus polyvalente. Passport s'intègre aux bibliothèques [viem](https://viem.sh/) et [wagmi](https://wagmi.sh/) pour simplifier la gestion des portefeuilles dans les écosystèmes Bitcoin et EVM.

Obtenez le package NPM [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Si vous ne pouvez pas utiliser Mezo Passport pour votre dApp, les étapes de configuration du guide [Configurer votre environnement](../../../../../../docs/developers/getting-started/configure-environment) suffisent pour un développement EVM classique.

### Avant de commencer



* [Configurez votre environnement](../../../../../../docs/developers/getting-started/configure-environment) pour développer avec HardHat ou Foundry.
* Si vous ne connaissez pas RainbowKit, lisez la [documentation de RainbowKit](https://www.rainbowkit.com/) pour en apprendre les bases.

### Installation


Consultez le [guide de démarrage](https://mezo.org/docs/developers/getting-started) pour les instructions d'installation de référence.

### Configurer votre application


Consultez le [guide de démarrage](https://mezo.org/docs/developers/getting-started) pour les exemples de configuration de référence.

### Connecter des portefeuilles



Pour vous connecter au portefeuille Mezo Passport, utilisez les composants standard de Wagmi ou de RainbowKit.

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

### Étapes suivantes



Vous trouverez d'autres exemples dans le [Readme de Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
