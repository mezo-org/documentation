---
title: Kết nối ví của bạn với Mezo
topic: users
---

Để kết nối ví trình duyệt, hãy dùng thông tin mạng của Mainnet hoặc Testnet.

Bạn có thể thêm Mezo vào ví bằng nút **Connect Wallet** trên Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Nếu Chainlist không hoạt động, hãy thêm mạng thủ công bằng thông tin mạng bên dưới.

## Mezo Mainnet

### Endpoint RPC công khai

| Nhà cung cấp | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Để có giới hạn truy cập cao hơn, Boar cung cấp API key miễn phí tại [boar.network/mezo](https://boar.network/mezo). Boar cũng có gói Enterprise — truy cập [https://dashboard.boar.network/](https://dashboard.boar.network/) để bắt đầu.

Để có giới hạn truy cập cao hơn, hãy lấy API key Validation Cloud miễn phí tại [validationcloud.io/mezo](https://www.validationcloud.io/mezo) hoặc liên hệ với họ qua [validationcloud.io/contact](https://validationcloud.io/contact) để được tư vấn gói Enterprise.

### Thông tin mạng

| Tham số | Giá trị |
|-----------|-------|
| Chain ID | `31612` |
| Đơn vị tiền tệ | BTC (18 chữ số thập phân) |
| Trình khám phá khối | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Endpoint RPC công khai

| Giao thức | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Thông tin mạng

| Tham số | Giá trị |
|-----------|-------|
| Chain ID | `31611` |
| Đơn vị tiền tệ | BTC (18 chữ số thập phân) |
| Trình khám phá khối | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Bạn đang xây dựng trên Mezo?]
Xem hướng dẫn [Thiết lập môi trường phát triển](/docs/vn/docs/developers/getting-started/configure-environment) để cấu hình Hardhat và Foundry.
:::

## Thêm Mezo vào ví theo cách thủ công

Nếu cần thêm mạng vào ví theo cách thủ công, hãy làm theo hướng dẫn thêm mạng tùy chỉnh tương ứng với ví của bạn:

* MetaMask: [Cách thêm RPC mạng tùy chỉnh](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Thêm mạng tùy chỉnh](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Thêm mạng tùy chỉnh (di động)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## Ví BTC

Ví BTC được hỗ trợ trong Mezo App và có thể nhận một địa chỉ trên mạng Mezo gắn với ví BTC của bạn. Hiện tại, ví BTC có thể thực hiện các tác vụ sau trên Mezo:

- Chuyển tài sản BTC qua cầu nối
- Chuyển tài sản EVM qua cầu nối
- Vay, trả nợ hoặc quản lý tài sản thế chấp của khoản vay
- Mua sản phẩm trên MUSD Market
- Nhận và gửi tài sản trên mạng Mezo
- Tham gia Mezo Earn (khóa, bỏ phiếu, gửi vào/rút khỏi vault và pool, nhận phần thưởng)

## Nhà phát triển

Để tìm hiểu cách phát triển và triển khai dApp trên Mezo, hãy xem tài liệu [Hướng dẫn bắt đầu cho nhà phát triển](/docs/vn/docs/developers/getting-started/).
