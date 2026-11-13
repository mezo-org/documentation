---
title: Phí pool
description: Mô hình phí của Mezo Pools
topic: users
---

## Phí

[Mezo Pools](https://mezo.org/explore/pools) áp dụng mô hình phí linh hoạt, được tối ưu cho từng loại cặp giao dịch:

### Mức phí tiêu chuẩn

- **Pool biến động**: 0,30%
- **Pool ổn định**: 0,02%

### Phí pool tùy chỉnh

Một số pool có thể có mức phí tùy chỉnh do quản trị thiết lập. Các mức phí đặc biệt này thường được áp dụng cho:

- **Pool đối tác chiến lược**
- **Pool khuyến mãi trong giai đoạn ra mắt**
- **Cặp giao dịch tổ chức có khối lượng lớn**

### Cách thu phí

Khi một nhà giao dịch thực hiện swap qua Mezo Pool:

1. **Khấu trừ phí**: Phí được tự động khấu trừ từ lượng token đầu vào.
   - Ví dụ: Swap 1.000 MUSD trong một pool ổn định sẽ khấu trừ 0,2 MUSD làm phí.
2. **Tách riêng ngay lập tức**: Phí thu được ngay lập tức được chuyển vào một hợp đồng PoolFees chuyên dụng.
   - Phí không bao giờ bị trộn lẫn với nguồn dự trữ thanh khoản chính của pool

### Phí được trả bằng token nào?

Phí luôn được thu bằng token được bán (token đầu vào) trong mỗi giao dịch swap. Là LP, bạn kiếm phí bằng cả hai token của cặp:

- Khi nhà giao dịch swap Token A → Token B, phí được thu bằng Token A
- Khi nhà giao dịch swap Token B → Token A, phí được thu bằng Token B
- Bạn tích lũy và có thể nhận phí bằng cả hai token theo tỷ phần của bạn trong pool

Ví dụ: Trong một pool MUSD/tBTC:

- Nhà giao dịch swap MUSD → BTC: MUSD được thu làm phí (cho tất cả LP)
- Nhà giao dịch swap BTC → MUSD: BTC được thu làm phí (cho tất cả LP)
- Là LP, bạn nhận được một phần phí bằng cả MUSD và BTC

### Nhận phí của bạn

1. Đi đến vị thế của bạn trong giao diện Mezo Pools
2. Nhấp vào "Claim Fees"
3. Xác nhận giao dịch
4. Phí được gửi thẳng vào ví của bạn

### Ví dụ tính phí

#### Ví dụ 1: Pool biến động (BTC/MUSD)

- **Khối lượng hằng ngày**: $1.000.000
- **Mức phí**: 0,30%
- **Phí tạo ra hằng ngày**: $3.000
- **Tỷ phần của bạn**: 5% pool
- **Phí hằng ngày của bạn**: ~$150

#### Ví dụ 2: Pool ổn định (MUSD/USDC)

- **Khối lượng hằng ngày**: $5.000.000
- **Mức phí**: 0,02%
- **Phí tạo ra hằng ngày**: $1.000
- **Tỷ phần của bạn**: 2% pool
- **Phí hằng ngày của bạn**: ~$20

### Câu hỏi thường gặp

#### Phí được trả bằng tiền tệ/token nào?
Phí được trả bằng token đầu vào của mỗi giao dịch swap (token được bán). Trong một pool USDC/MEZO, swap từ USDC → MEZO tạo ra phí bằng USDC, còn swap từ MEZO → USDC tạo ra phí bằng MEZO. Là LP, bạn tích lũy và nhận phí bằng cả hai token.

#### Tôi có thể mất phí đã tích lũy không?
Không. Phí được lưu riêng trong các hợp đồng PoolFees và chỉ người nắm giữ LP token mới có thể nhận.

#### Phí có tự động tái đầu tư (lãi kép) không?
Không. Bạn phải tự nhận và gửi lại phí để có hiệu ứng lãi kép.
