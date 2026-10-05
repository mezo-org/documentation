---
title: Посібник з налаштування Mezo Passport
description: Інструкції з налаштування Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) — це пакет, створений на основі [RainbowKit](https://rainbowkit.com/), який надає додаткові варіанти під'єднання гаманців, спеціально адаптовані для біткоїн-гаманців і Mezo. За допомогою цього пакета розробники можуть інтегрувати підтримку біткоїн-гаманців поряд із гаманцями, сумісними з Ethereum (EVM), і зробити під'єднання для користувачів гнучкішим. Passport інтегрується з бібліотеками [viem](https://viem.sh/) і [wagmi](https://wagmi.sh/), що спрощує керування гаманцями в екосистемах Bitcoin і EVM.

Отримайте NPM-пакет [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Якщо ви не можете використовувати Mezo Passport у своєму dApp, для традиційної EVM-розробки достатньо кроків конфігурації з посібника [Налаштування середовища](../../../../../../docs/developers/getting-started/configure-environment).

### Перш ніж почати



* [Налаштуйте середовище](../../../../../../docs/developers/getting-started/configure-environment) для розробки з HardHat або Foundry.
* Якщо ви не знайомі з RainbowKit, ознайомтеся з основами в [документації RainbowKit](https://www.rainbowkit.com/).

### Встановлення


Канонічні інструкції зі встановлення наведено в [посібнику з початку роботи](https://mezo.org/docs/developers/getting-started).

### Налаштування застосунку


Канонічні приклади конфігурації наведено в [посібнику з початку роботи](https://mezo.org/docs/developers/getting-started).

### Під'єднання гаманців



Щоб під'єднатися до гаманця Mezo Passport, використовуйте стандартні компоненти Wagmi або RainbowKit.

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

### Наступні кроки



Додаткові приклади можна знайти в [README Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
