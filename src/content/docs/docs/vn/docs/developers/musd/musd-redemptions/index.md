---
title: Quy đổi MUSD
topic: developers
---

# Cách quy đổi MUSD trên Mezo

## Tổng quan nhanh
Quy đổi cho phép bạn đốt 1 MUSD để nhận `$1` bằng BTC (trừ phí quy đổi 0,75% và phí gas). Hệ thống bắt đầu quy đổi từ trove có tỷ lệ thế chấp thấp nhất trên 110%. Nếu lượng MUSD vượt quá một trove, hệ thống sẽ tiếp tục quy đổi theo thứ tự tỷ lệ thế chấp tăng dần.

Các trove có tỷ lệ thế chấp dưới 110% thuộc diện bị thanh lý và không thể bị quy đổi.

---

## Điều kiện tiên quyết

Trước khi bắt đầu, hãy kiểm tra:

1. **Hệ thống đang chấp nhận quy đổi**: Mở TroveManager → "Read as Proxy" → gọi `getTCR()` với giá BTC hiện tại. Kết quả phải ≥ `1100000000000000000` (110%)
2. **Bạn có MUSD**: Kiểm tra số dư của bạn trên hợp đồng token MUSD
3. **Lấy giá BTC hiện tại**: Mở PriceFeed → "Read as Proxy" → gọi `fetchPrice()`
4. **Lấy đúng địa chỉ hợp đồng**: Xem địa chỉ hợp đồng cho cả Mainnet và Testnet ở cuối trang.

---

## Hướng dẫn từng bước

### 1. Mở hợp đồng TroveManager
Mở hợp đồng TroveManager trong trình khám phá khối và nhấp vào tab **"Write as Proxy"**.

### 2. Tìm hàm số 11: `redeemCollateral`

Bạn sẽ thấy 6 trường nhập liệu. Cách điền như sau:

---

## Cách A: Nhanh và đơn giản (tốn gas hơn)

Dùng cách này nếu bạn muốn quy đổi nhanh mà không cần tính toán hint.

- `_amount`: [số lượng của bạn tính bằng wei - xem cách chuyển đổi bên dưới]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [địa chỉ ví của bạn]   
- `_lowerPartialRedemptionHint`: [địa chỉ ví của bạn]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**Chuyển đổi MUSD sang wei:**
- 100 MUSD = `100000000000000000000`
- 5.005 MUSD = `5005000000000000000000`

**Công thức**: Số lượng của bạn × 1000000000000000000

---

## Cách B: Dùng hint (ít gas hơn)

Dùng cách này để tiết kiệm chi phí gas.

### Bước 1: Lấy hint quy đổi

Mở HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Điền:
- `_amount`: Số lượng của bạn tính bằng wei (như trên)
- `_price`: Giá BTC hiện tại lấy từ PriceFeed
- `_maxIterations`: 50

Sao chép các giá trị trả về:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Bước 2: Lấy hint vị trí

Mở SortedTroves → "Read as Proxy" → `findInsertPosition()`

Điền:
- `_NICR`: Dùng `partialRedemptionHintNICR` từ Bước 1
- `_prevId`: Địa chỉ ví của bạn
- `_nextId`: Địa chỉ ví của bạn

Sao chép các giá trị trả về:
- `upperHint`
- `lowerHint`

### Bước 3: Gọi redeemCollateral

Quay lại TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount`: [số lượng của bạn tính bằng wei]
- `_firstRedemptionHint`: [từ Bước 1]
- `_upperPartialRedemptionHint`: [upperHint từ Bước 2]
- `_lowerPartialRedemptionHint`: [lowerHint từ Bước 2]
- `_partialRedemptionHintNICR`: [từ Bước 1]
- `_maxIterations`: 50

---

## Bạn sẽ nhận được gì

**Ví dụ: Quy đổi 100 MUSD**
- Bạn đốt: 100 MUSD
- Bạn nhận: lượng BTC trị giá `$99.25` (phí 0,75% thuộc về giao thức)

**Công thức**: (Số MUSD của bạn ÷ Giá BTC) × 0,9925 = lượng BTC nhận được

---

## Sự cố thường gặp

**"Cannot redeem when TCR < MCR"**
→ TCR của hệ thống đang dưới 110%. Hãy chờ đến khi tỷ lệ này phục hồi.

**"Unable to redeem any amount"**
→ Lỗi này có thể xảy ra vì nhiều lý do:
- Không có trove nào có tỷ lệ thế chấp trên 110%
- Hint đã lỗi thời (cụ thể là hint NICR)
- Lượng quy đổi sẽ khiến trove mục tiêu còn lại ít hơn mức nợ tối thiểu bắt buộc là 1.800 MUSD
- Số lần lặp tối đa được đặt quá thấp so với quy mô quy đổi

**Giao dịch hết gas**
→ Giảm `_maxIterations` xuống 10 hoặc chia thành các lần quy đổi nhỏ hơn.

**Giao dịch bị revert bất ngờ**
→ Lấy hint mới rồi thử lại. Có thể ai đó đã quy đổi trước bạn.

**Nhận được ít hơn dự kiến**
→ Kiểm tra sự kiện `Redemption` trong giao dịch của bạn. Một phần MUSD có thể đã được trả lại nếu trove cuối cùng sẽ rơi xuống dưới mức tối thiểu 1.800 MUSD.

---

## Mẹo

- **Tạo hint ngay trước khi quy đổi** - Hint sẽ bị cũ nếu người khác quy đổi trước
- **Dùng cách A cho số lượng nhỏ** (< `$10,000`) - Chi phí gas cao hơn là không đáng kể
- **Dùng cách B cho số lượng lớn** - Tiết kiệm đáng kể gas cho các lần quy đổi lớn
- **Đặt maxIterations cao hơn cho các lần quy đổi lớn hơn**:
  - Nhỏ (< 10 trove): 10
  - Trung bình (10-30 trove): 50
  - Lớn (30+ trove): 100

---

## Địa chỉ hợp đồng

| Hợp đồng | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| Token MUSD | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Tất cả địa chỉ đều là hợp đồng proxy. Luôn dùng tab "Read as Proxy" hoặc "Write as Proxy".

---

## Cần hỗ trợ?

- Kiểm tra giao dịch của bạn trên trình khám phá khối để xem các sự kiện và thông báo lỗi
- Tham gia Discord của chúng tôi và mở ticket: https://discord.com/invite/mezo
