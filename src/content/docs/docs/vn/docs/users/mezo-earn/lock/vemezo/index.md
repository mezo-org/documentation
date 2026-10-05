---
title: Tổng quan về veMEZO
description: Khóa MEZO để boost quyền biểu quyết và nhận rebase
topic: users
---

veMEZO là dạng biểu diễn được token hóa (NFT) của lượng MEZO đã khóa trên mạng Mezo. Khóa MEZO cho phép bạn boost quyền biểu quyết veBTC lên tới 5x, khuếch đại thu nhập, đồng thời nhận rebase chống pha loãng từ lượng phát thải MEZO.

## veMEZO là gì?

Khi khóa MEZO trên Mezo, bạn nhận được một NFT veMEZO đại diện cho vị thế đã khóa của bạn. NFT này mang lại cho bạn:

- Hệ số nhân boost cho quyền biểu quyết veBTC của bạn (lên tới 5x)
- Phần thưởng rebase từ lượng phát thải MEZO hằng tuần để bù đắp sự pha loãng
- Quyền tham gia thị trường ghép cặp (matching market) để nhận khoản khuyến khích từ người nắm giữ veBTC
- Quyền bỏ phiếu trên [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges), điều hướng lượng phát thải MEZO đến các pool MUSD trên Curve, Uniswap và Aerodrome

:::note[Quan trọng]
veMEZO không tự bỏ phiếu cho **gauge staking** — ở đó, veMEZO chỉ nhân quyền biểu quyết của các vị thế veBTC. veMEZO có quyền bỏ phiếu riêng trên các gauge boost veBTC và trên [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## Cách trọng số veMEZO hoạt động

Trọng số veMEZO của bạn phụ thuộc vào hai yếu tố: lượng MEZO đã khóa (càng nhiều MEZO thì trọng số càng lớn) và thời hạn khóa (khóa càng lâu thì trọng số duy trì càng cao).

Trọng số của bạn suy giảm tuyến tính theo thời gian. Một người dùng khóa 1.000 MEZO trong 4 năm sẽ bắt đầu với trọng số 1.000 veMEZO, giảm còn 500 sau 2 năm và về 0 khi hết hạn. Bạn có thể gia hạn khoản khóa bất cứ lúc nào để duy trì trọng số tối đa.

Bạn cũng có thể bật khóa tối đa tự động (auto-max lock) cho veMEZO, giúp bạn duy trì trọng số phiếu bầu tối đa tương ứng 4 năm ở mọi epoch mà không cần liên tục khóa lại token.

### Tham số khóa

| Tham số | Giá trị |
|---|---|
| Thời hạn khóa tối thiểu | 1 tuần |
| Thời hạn khóa tối đa | 4 năm (1.456 ngày) |
| Suy giảm của khoản khóa | Tuyến tính — trọng số giảm liên tục cho đến khi về 0 |

---

## Bạn kiếm được gì

### Phần thưởng rebase (tất cả người nắm giữ veMEZO)

Người nắm giữ veMEZO nhận một phần lượng phát thải MEZO hằng tuần dưới dạng rebase. Điều này giúp bảo vệ khỏi sự pha loãng do lượng phát thải mới. Tỷ phần rebase thay đổi linh hoạt — cao hơn khi có ít token được khóa, thấp hơn khi có nhiều MEZO được khóa hơn.

### Khoản khuyến khích (qua thị trường ghép cặp)

Người nắm giữ veMEZO có thể bỏ phiếu cho gauge veBTC để nhận khoản khuyến khích. Khi người nắm giữ veBTC muốn boost vị thế của mình nhưng không có đủ veMEZO, họ có thể đăng khoản khuyến khích trên gauge veBTC của mình. Bằng cách bỏ phiếu cho gauge đó, bạn nhận được các khoản khuyến khích này để đổi lấy việc cung cấp boost.

Xem [Cơ chế boost](/docs/vn/docs/users/mezo-earn/lock/vemezo/boost-mechanism) để biết chi tiết về cách thị trường ghép cặp hoạt động.

---

## So sánh veMEZO và veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Tài sản cơ sở | BTC | MEZO |
| Thời hạn khóa tối đa | 28 ngày | 4 năm |
| Quyền biểu quyết | Quyền biểu quyết cơ bản | Nhân quyền biểu quyết của veBTC (lên tới 5x) |
| Kiếm phí | Có (cầu nối, swap, MUSD) | Không |
| Nhận rebase | Không | Có |
| Nhận khoản khuyến khích | Có (từ các gauge bạn bỏ phiếu) | Có (từ gauge boost veBTC) |
