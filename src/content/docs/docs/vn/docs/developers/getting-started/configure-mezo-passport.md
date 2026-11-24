---
title: Hướng dẫn thiết lập Mezo Passport
description: Hướng dẫn thiết lập Mezo Passport
topic: developers
---

[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) là một gói được xây dựng trên [RainbowKit](https://rainbowkit.com/), cung cấp thêm các tùy chọn kết nối ví được thiết kế riêng cho ví Bitcoin và Mezo. Với gói này, nhà phát triển có thể tích hợp hỗ trợ ví Bitcoin bên cạnh các ví tương thích Ethereum (EVM) để mang lại trải nghiệm kết nối linh hoạt hơn cho người dùng. Passport tích hợp với các thư viện [viem](https://viem.sh/) và [wagmi](https://wagmi.sh/) để quản lý ví một cách gọn gàng trên cả hệ sinh thái Bitcoin và EVM.

Tải gói NPM [@mezo-org/passport](https://www.npmjs.com/package/@mezo-org/passport)

Nếu không thể dùng Mezo Passport cho dApp của mình, bạn chỉ cần làm theo các bước cấu hình trong hướng dẫn [Cấu hình môi trường của bạn](../../../../../../docs/developers/getting-started/configure-environment) là đủ cho việc phát triển EVM thông thường.

### Trước khi bắt đầu



* [Cấu hình môi trường của bạn](../../../../../../docs/developers/getting-started/configure-environment) để phát triển với HardHat hoặc Foundry.
* Nếu chưa quen với RainbowKit, hãy đọc [tài liệu RainbowKit](https://www.rainbowkit.com/) để nắm những kiến thức cơ bản.

### Cài đặt


Xem [Hướng dẫn bắt đầu](https://mezo.org/docs/developers/getting-started) để biết hướng dẫn cài đặt chính thức.

### Cấu hình ứng dụng của bạn


Xem [Hướng dẫn bắt đầu](https://mezo.org/docs/developers/getting-started) để biết các ví dụ cấu hình chính thức.

### Kết nối ví



Để kết nối với ví Mezo Passport, hãy dùng các component tiêu chuẩn của Wagmi hoặc RainbowKit.

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

### Bước tiếp theo



Bạn có thể tìm thêm ví dụ trong [Readme của Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport#installation).
