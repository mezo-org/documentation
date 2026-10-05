---
title: Mezo Passport 设置指南
description: 设置 Mezo Passport 的说明
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) 是一个基于 [RainbowKit](https://rainbowkit.com/) 构建的软件包，提供专为比特币钱包和 Mezo 定制的额外钱包连接选项。借助该软件包，开发者可以在支持以太坊兼容（EVM）钱包的同时集成比特币钱包支持，为用户打造更加灵活的连接体验。Passport 与 [viem](https://viem.sh/) 和 [wagmi](https://wagmi.sh/) 库集成，可简化跨比特币和 EVM 生态的钱包管理。

获取 [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport) NPM 软件包

如果您的 dApp 无法使用 Mezo Passport，那么[配置开发环境](../../../../../../docs/developers/getting-started/configure-environment)指南中的配置步骤已足以满足传统 EVM 开发的需要。

### 开始之前



* [配置开发环境](../../../../../../docs/developers/getting-started/configure-environment)，以便使用 HardHat 或 Foundry 进行开发。
* 如果您不熟悉 RainbowKit，请阅读 [RainbowKit 文档](https://www.rainbowkit.com/)了解基础知识。

### 安装


有关标准安装说明，请参阅[入门指南](https://mezo.org/docs/developers/getting-started)。

### 配置您的应用


有关标准配置示例，请参阅[入门指南](https://mezo.org/docs/developers/getting-started)。

### 连接钱包



要连接到 Mezo Passport 钱包，请使用标准的 Wagmi 或 RainbowKit 组件。

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

### 后续步骤



您可以在 [Mezo Passport Readme](https://www.npmjs.com/package/@mezo-org/passport#installation) 中找到更多示例。
