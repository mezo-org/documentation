---
title: Guia de configuração do Mezo Passport
description: Instruções para configurar o Mezo Passport
topic: developers
---

O [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) é um pacote construído sobre o [RainbowKit](https://rainbowkit.com/) que oferece opções adicionais de conexão de carteira, feitas especificamente para carteiras Bitcoin e para o Mezo. Com esse pacote, os desenvolvedores podem integrar o suporte a carteiras Bitcoin junto com carteiras compatíveis com Ethereum (EVM) para criar uma experiência de conexão mais versátil para os usuários. O Passport se integra às bibliotecas [viem](https://viem.sh/) e [wagmi](https://wagmi.sh/) para simplificar o gerenciamento de carteiras nos ecossistemas Bitcoin e EVM.

Obtenha o pacote NPM [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Se você não puder usar o Mezo Passport no seu dApp, as etapas de configuração do guia [Configurar seu ambiente](../../../../../../docs/developers/getting-started/configure-environment) são suficientes para o desenvolvimento EVM tradicional.

### Antes de começar



* [Configure seu ambiente](../../../../../../docs/developers/getting-started/configure-environment) para desenvolver com HardHat ou Foundry.
* Se você não conhece o RainbowKit, leia a [documentação do RainbowKit](https://www.rainbowkit.com/) para aprender o básico.

### Instalação


Consulte o [guia de primeiros passos](https://mezo.org/docs/developers/getting-started) para ver as instruções de instalação de referência.

### Configurar sua aplicação


Consulte o [guia de primeiros passos](https://mezo.org/docs/developers/getting-started) para ver os exemplos de configuração de referência.

### Conectar carteiras



Para se conectar à carteira do Mezo Passport, use os componentes padrão do Wagmi ou do RainbowKit.

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

### Próximos passos



Você encontra mais exemplos no [README do Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
