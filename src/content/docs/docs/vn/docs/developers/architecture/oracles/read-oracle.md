---
title: Đọc dữ liệu thị trường bằng oracle
description: Cách truy cập và diễn giải dữ liệu thị trường bằng hạ tầng oracle của Mezo.
topic: developers
---

Mezo cung cấp dữ liệu thị trường thông qua hai hệ thống oracle: [Skip Connect](https://docs.skip.build/connect/introduction) cho BTC/USD và [Pyth Network](https://docs.pyth.network/home) cho các nguồn cấp giá bổ sung.

## Tổng quan

### Oracle Skip

Oracle Skip cung cấp nguồn cấp giá BTC/USD gốc trên Mezo thông qua giao diện aggregator tương thích với Chainlink.

- **Cặp được hỗ trợ:** Chỉ BTC/USD
- **Tần suất cập nhật:** Mỗi khối
- **Giao diện:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Oracle Pyth

Oracle Pyth cung cấp nhiều nguồn cấp giá khác ngoài BTC/USD.

**Tần suất cập nhật:** Tùy thuộc vào cặp token.

- Trên Mezo, xem [tệp cấu hình](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml) để biết chi tiết.
- Trên Ethereum, xem [tệp cấu hình](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml) để biết chi tiết.

Giá được cập nhật khi `price_deviation` lệch vượt quá một ngưỡng đã đặt (tính bằng điểm phần trăm) hoặc sau mỗi `time_difference` giây, tùy điều kiện nào xảy ra trước.

## Các phương pháp hay nhất

Khi xây dựng dApp sử dụng dữ liệu oracle, hãy tuân theo các nguyên tắc sau:

- **Kiểm tra độ mới của dữ liệu:** Luôn kiểm tra timestamp và số khối để phát hiện dữ liệu cũ. Đặt ngưỡng độ cũ phù hợp với trường hợp sử dụng của bạn.
- **Đặt giới hạn giá:** Triển khai các bước kiểm tra tính hợp lý cho giá trị giá để phát hiện bất thường hoặc các nỗ lực thao túng.
- **Theo dõi điều kiện thị trường:** Chú ý đến biến động giá, thanh khoản và các sự kiện thao túng tiềm ẩn có thể buộc bạn phải tạm dừng ứng dụng.
- **Kiểm toán bảo mật:** Đảm bảo hợp đồng và các phụ thuộc của bạn đáp ứng tiêu chuẩn bảo mật. Kiểm toán phần mã xử lý dữ liệu oracle để ngăn chặn khai thác lỗ hổng.

## Đọc nguồn cấp giá

### Dùng oracle Skip (BTC/USD)

Oracle Skip triển khai giao diện tương thích với Chainlink. Gọi `latestRoundData()` để lấy giá mới nhất:

**Hợp đồng:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Giá trị trả về:**

- `roundId`: ID của vòng (round) khi giá được cập nhật
- `answer`: Giá BTC/USD (dùng `decimals()` để lấy số chữ số thập phân)
- `startedAt`: Timestamp Unix khi vòng bắt đầu
- `updatedAt`: Timestamp Unix khi vòng được cập nhật lần gần nhất

### Dùng oracle Pyth (nhiều nguồn cấp)

Pyth cung cấp nhiều nguồn cấp giá thông qua các hợp đồng EVM của mình. Dùng `getPriceNoOlderThan(pair_id, maxAgeSeconds)` để lấy giá kèm cơ chế kiểm tra độ cũ tích hợp sẵn.

**Hợp đồng trên Mezo Mainnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Hợp đồng trên Mezo Testnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Hợp đồng trên Ethereum Mainnet:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Hợp đồng trên Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Ví dụ lấy giá cho một price ID cụ thể:**

```solidity
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract ReadPythPrice {
    IPyth public immutable pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract); // 0x2880aB155794e7179c9eE2e38200202908C17B43 on Mezo
    }

    function getPrice(bytes32 priceId, uint256 maxAgeSeconds)
        external
        view
        returns (int64 price, uint64 conf, int32 expo, uint256 publishTime)
    {
        PythStructs.Price memory priceData = pyth.getPriceNoOlderThan(priceId, maxAgeSeconds);
        return (priceData.price, priceData.conf, priceData.expo, priceData.publishTime);
    }

    // Example: Get MUSD/USD price
    function getMUSDPrice() external view returns (int64, uint256) {
        bytes32 musdPriceId = 0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de;
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(musdPriceId, 3600); // Max 1 hour old
        return (price.price, price.publishTime);
    }
}
```

**Tham khảo:** [tài liệu](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan) API getPriceNoOlderThan

## Dữ liệu giá offchain

Bạn có thể truy vấn nguồn cấp giá và metadata trực tiếp từ Pyth Network mà không cần tương tác với blockchain:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **ID nguồn cấp giá:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Các nguồn cấp giá hiện có

### Nguồn cấp của oracle Skip

Có trên cả Mezo mainnet và testnet:

| Cặp | Địa chỉ hợp đồng | Mạng |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**API của node (chỉ Testnet):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Nguồn cấp của oracle Pyth

Có trên:

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) tại `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) tại `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) tại `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) tại `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**ID nguồn cấp giá được hỗ trợ trên Mezo:**

| Cặp | ID nguồn cấp giá |
|------|---------------|
| SolvBTC/USD | `0xf253cf87dc7d5ed5aa14cba5a6e79aee8bcfaef885a0e1b807035a0bbecc36fa` |
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| MEZO/USD | `0x80beaaedbdd228e77c5d62dfcd74b0305674b7e27a5cc6a46e71bd3a696826df` |
| BTC/USD | `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43` |
| cbBTC/USD | `0x2817d7bfe5c64b8ea956e9a26f573ef64e72e4d7891f2d6af9bcc93f7aff9a97` |
| USDC/USD | `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |
| T/USD | `0x7a072b799215196b0ecb6a58636ec312bce8461dcc33c28c3a046b1e636d121d` |
| NVDA/USD | `0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593` |
| GOOGL/USD | `0x5a48c03e9b9cb337801073ed9d166817473697efff0d138874e0f6a33d6d5aa6` |
| TSLA/USD | `0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1` |
| MSTR/USD | `0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09` |
| COIN/USD | `0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245` |
| CRCL/USD | `0x92b8527aabe59ea2b12230f7b532769b133ffb118dfbd48ff676f14b273f1365` |

**ID nguồn cấp giá được hỗ trợ trên Ethereum:**

| Cặp | ID nguồn cấp giá |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Yêu cầu thêm nguồn cấp giá:** Để bật thêm nguồn cấp giá Pyth, hãy xem danh sách đầy đủ các [ID nguồn cấp giá](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) hiện có và liên hệ với đội ngũ Mezo để yêu cầu kích hoạt onchain.
