---
title: Mezo Passport 설정 가이드
description: Mezo Passport 설정 방법
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport)는 [RainbowKit](https://rainbowkit.com/) 위에 구축된 패키지로, 비트코인 지갑과 Mezo에 특화된 추가 지갑 연결 옵션을 제공합니다. 이 패키지를 사용하면 개발자는 이더리움 호환(EVM) 지갑과 함께 비트코인 지갑 지원을 통합하여 사용자에게 더 다양한 연결 경험을 제공할 수 있습니다. Passport는 [viem](https://viem.sh/) 및 [wagmi](https://wagmi.sh/) 라이브러리와 통합되어 비트코인과 EVM 생태계 전반에서 지갑 관리를 간소화합니다.

[@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport) NPM 패키지를 받으세요.

dApp에서 Mezo Passport를 사용할 수 없다면 기존 EVM 개발에는 [개발자 환경 설정](../../../../../../docs/developers/getting-started/configure-environment) 가이드의 설정 단계만으로 충분합니다.

### 시작하기 전에



* HardHat 또는 Foundry로 개발할 수 있도록 [개발 환경을 설정](../../../../../../docs/developers/getting-started/configure-environment)하세요.
* RainbowKit에 익숙하지 않다면 [RainbowKit 문서](https://www.rainbowkit.com/)에서 기본 사항을 익히세요.

### 설치


공식 설치 방법은 [시작하기 가이드](https://mezo.org/docs/developers/getting-started)를 참조하세요.

### 애플리케이션 설정


공식 설정 예시는 [시작하기 가이드](https://mezo.org/docs/developers/getting-started)를 참조하세요.

### 지갑 연결



Mezo Passport 지갑에 연결하려면 표준 Wagmi 또는 RainbowKit 컴포넌트를 사용하세요.

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

### 다음 단계



더 많은 예시는 [Mezo Passport Readme](https://www.npmjs.com/package/@mezo-org/passport#installation)에서 확인할 수 있습니다.
