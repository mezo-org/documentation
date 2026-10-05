---
title: Guía de configuración de Mezo Passport
description: Instrucciones para configurar Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) es un paquete construido sobre [RainbowKit](https://rainbowkit.com/) que ofrece opciones adicionales de conexión de billeteras, diseñadas específicamente para billeteras de Bitcoin y para Mezo. Con este paquete, los desarrolladores pueden integrar compatibilidad con billeteras de Bitcoin junto con billeteras compatibles con Ethereum (EVM) para ofrecer a los usuarios una experiencia de conexión más versátil. Passport se integra con las bibliotecas [viem](https://viem.sh/) y [wagmi](https://wagmi.sh/) para simplificar la gestión de billeteras en los ecosistemas de Bitcoin y EVM.

Obtén el paquete de NPM [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Si no puedes usar Mezo Passport en tu dApp, los pasos de configuración de la guía [Configurar tu entorno](../../../../../../docs/developers/getting-started/configure-environment) son suficientes para el desarrollo EVM tradicional.

### Antes de empezar



* [Configura tu entorno](../../../../../../docs/developers/getting-started/configure-environment) para desarrollar con HardHat o Foundry.
* Si no conoces RainbowKit, lee la [documentación de RainbowKit](https://www.rainbowkit.com/) para aprender lo básico.

### Instalación


Consulta la [Guía de primeros pasos](https://mezo.org/docs/developers/getting-started) para ver las instrucciones de instalación de referencia.

### Configurar tu aplicación


Consulta la [Guía de primeros pasos](https://mezo.org/docs/developers/getting-started) para ver los ejemplos de configuración de referencia.

### Conectar billeteras



Para conectarte a la billetera de Mezo Passport, usa los componentes estándar de Wagmi o RainbowKit.

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

### Próximos pasos



Encontrarás más ejemplos en el [README de Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
