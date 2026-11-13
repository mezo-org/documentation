---
title: Настройка Mezo Passport
description: Инструкции по настройке Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) — пакет, построенный на базе [RainbowKit](https://rainbowkit.com/), который предоставляет дополнительные варианты подключения кошельков, специально адаптированные для Bitcoin-кошельков и Mezo. С помощью этого пакета разработчики могут добавить поддержку Bitcoin-кошельков наряду с кошельками, совместимыми с Ethereum (EVM), и сделать подключение для пользователей более гибким. Passport интегрируется с библиотеками [viem](https://viem.sh/) и [wagmi](https://wagmi.sh/), упрощая управление кошельками в экосистемах Bitcoin и EVM.

Установите NPM-пакет [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Если вы не можете использовать Mezo Passport в своём dApp, для традиционной EVM-разработки достаточно шагов настройки из руководства [Настройка окружения](../../../../../../docs/developers/getting-started/configure-environment).

### Перед началом работы



* [Настройте окружение](../../../../../../docs/developers/getting-started/configure-environment) для разработки с HardHat или Foundry.
* Если вы не знакомы с RainbowKit, изучите основы в [документации RainbowKit](https://www.rainbowkit.com/).

### Установка


Актуальные инструкции по установке см. в [руководстве по началу работы](https://mezo.org/docs/developers/getting-started).

### Настройка приложения


Актуальные примеры конфигурации см. в [руководстве по началу работы](https://mezo.org/docs/developers/getting-started).

### Подключение кошельков



Для подключения к кошельку Mezo Passport используйте стандартные компоненты Wagmi или RainbowKit.

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

### Дальнейшие шаги



Дополнительные примеры можно найти в [README Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
