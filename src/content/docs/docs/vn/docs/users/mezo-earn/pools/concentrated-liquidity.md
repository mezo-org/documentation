---
title: Thanh khoản tập trung
description: >-
  Cung cấp thanh khoản trong các khoảng giá tùy chỉnh để kiếm nhiều phí hơn với
  ít vốn hơn.
topic: users
---

Pool thanh khoản tập trung (CL) cho phép bạn gửi thanh khoản trong một khoảng giá cụ thể thay vì trải đều trên mọi mức giá có thể. Bằng cách tập trung vốn vào nơi giao dịch thực sự diễn ra, bạn có thể kiếm được nhiều phí hơn đáng kể trên mỗi đô la đã gửi so với [pool cơ bản](/docs/vn/docs/users/mezo-earn/pools).

## Thanh khoản tập trung khác pool cơ bản như thế nào

Trong một **pool cơ bản**, thanh khoản của bạn được trải đều trên toàn bộ đường cong giá, từ 0 đến vô cực. Điều này có nghĩa là phần lớn vốn của bạn nằm im ở những khoảng giá không bao giờ có giao dịch.

Trong một **pool thanh khoản tập trung**, bạn chọn một khoảng giá — ví dụ: BTC trong khoảng từ 80.000 đến 120.000 MUSD. Toàn bộ vốn của bạn đều hoạt động trong khoảng đó, giúp sử dụng vốn hiệu quả hơn nhiều. Đổi lại, nếu giá di chuyển ra ngoài khoảng của bạn, vị thế của bạn sẽ ngừng kiếm phí cho đến khi giá quay lại.

| | Pool cơ bản | Pool CL |
|---|---|---|
| **Khoảng thanh khoản** | Toàn bộ đường cong giá (0 đến vô cực) | Khoảng giá tùy chỉnh do bạn xác định |
| **Hiệu quả sử dụng vốn** | Thấp hơn — phần lớn vốn nằm im | Cao hơn — toàn bộ vốn hoạt động trong khoảng giá |
| **Loại vị thế** | LP token có thể thay thế (ERC-20) | Vị thế dạng NFT (ERC-721) |
| **Quản lý** | Thiết lập một lần rồi để đó | Cần theo dõi và tái cân bằng |
| **Tổn thất tạm thời** | Tiêu chuẩn | Bị khuếch đại trong khoảng giá đã chọn |

## Các pool CL đang hoạt động

| Pool | Loại | Tick spacing |
|---|---|---|
| BTC/MUSD-200 | Biến động tập trung | 200 |

Truy cập [Mezo Pools](https://mezo.org/explore/pools) để xem số liệu thống kê theo thời gian thực, bao gồm TVL, khối lượng, phí và APR.

## Tick spacing

Pool CL dùng **tick spacing** (khoảng cách tick) để xác định độ chi tiết của các khoảng giá mà bạn có thể đặt. Tick spacing nhỏ hơn cho phép đặt khoảng giá hẹp hơn (chính xác hơn), còn tick spacing lớn hơn đồng nghĩa với khoảng giá tối thiểu rộng hơn.

Pool được phân loại thành **ổn định** (tick spacing dưới 100) hoặc **biến động** (tick spacing từ 100 trở lên), theo cùng quy ước mà Aerodrome sử dụng.

| Tick spacing | Phí mặc định | Phân loại |
|---|---|---|
| 1 | 0,01% | Ổn định |
| 10 | 0,05% | Ổn định |
| 50 | 0,05% | Ổn định |
| 100 | 0,05% | Biến động |
| 200 | 0,30% | Biến động |
| 2.000 | 1,00% | Biến động |

Pool BTC/MUSD-200 dùng tick spacing 200 với phí swap 0,30%.

## Bắt đầu (sắp ra mắt)

1. Truy cập [Mezo Pools](https://mezo.org/explore/pools) và chọn pool CL mà bạn muốn cung cấp thanh khoản.
2. Chọn khoảng giá — đặt mức giá tối thiểu và tối đa mà thanh khoản của bạn sẽ hoạt động.
3. Nhập số lượng của từng token cần gửi. Tỷ lệ giữa hai token phụ thuộc vào giá hiện tại so với khoảng giá bạn đã chọn.
4. Kiểm tra và xác nhận giao dịch. Bạn sẽ nhận được một NFT đại diện cho vị thế của mình.

### Chọn khoảng giá (sắp ra mắt)

- **Khoảng giá rộng hơn** — Kiếm phí đều đặn hơn nhưng hiệu quả sử dụng vốn thấp hơn. Phù hợp hơn với cách tiếp cận ít can thiệp.
- **Khoảng giá hẹp hơn** — Kiếm được nhiều phí hơn khi giá nằm trong khoảng nhưng đòi hỏi theo dõi và tái cân bằng chủ động. Rủi ro giá ra khỏi khoảng cao hơn.
- **Giá hiện tại nên nằm trong khoảng của bạn** — Nếu giá hiện tại nằm ngoài khoảng của bạn, vị thế của bạn sẽ hoàn toàn chỉ gồm một token và sẽ không kiếm phí cho đến khi giá quay lại trong khoảng.

## Stake để nhận lượng phát thải (sắp ra mắt)

Vị thế CL có thể được stake vào gauge để kiếm lượng phát thải MEZO bên cạnh phí giao dịch. Vị thế đã stake nhận được phần phí swap lớn hơn thông qua cơ chế phí của vị thế chưa stake, cơ chế này chuyển một phần phí từ các vị thế chưa stake sang các vị thế đã stake.

Để stake:

1. Mở vị thế CL của bạn.
2. Nhấp vào **Stake** để gửi NFT vị thế của bạn vào gauge.
3. Kiếm lượng phát thải MEZO trong khi thanh khoản của bạn nằm trong khoảng giá.

Lượng phát thải được phân phối tương ứng với thanh khoản đã stake và nằm trong khoảng giá. Nếu vị thế của bạn ra khỏi khoảng giá, bạn ngừng kiếm lượng phát thải cho đến khi giá quay lại.

## Phí

Phí của pool CL hoạt động giống như phí của pool cơ bản — phí được khấu trừ từ token đầu vào trong mỗi giao dịch swap và tích lũy để nhà cung cấp thanh khoản nhận.

Điểm khác biệt chính: trong pool CL, chỉ những vị thế **nằm trong khoảng giá** tại thời điểm swap mới kiếm được phí. Các vị thế nằm ngoài khoảng giá đang hoạt động không kiếm được gì cho đến khi giá quay lại.

Xem [Phí pool](/docs/vn/docs/users/mezo-earn/pools/pools-fees) để biết thêm chi tiết về mô hình phí.

## Rủi ro

### Tổn thất tạm thời

Thanh khoản tập trung **khuếch đại** tổn thất tạm thời so với pool cơ bản. Vì vốn của bạn tập trung trong một khoảng hẹp, biến động giá trong khoảng đó có tác động lớn hơn đến tỷ lệ token trong vị thế của bạn. Khoảng giá càng hẹp, tổn thất tạm thời tiềm ẩn càng lớn.

### Rủi ro ra khỏi khoảng giá

Nếu giá thị trường di chuyển ra ngoài khoảng bạn đã chọn, vị thế của bạn chuyển hoàn toàn thành một token và ngừng kiếm phí hoặc lượng phát thải. Bạn sẽ cần chờ giá quay lại, hoặc rút và đặt lại vị thế thanh khoản.

### Rủi ro hợp đồng thông minh

Như với mọi hợp đồng thông minh, rủi ro cố hữu vẫn tồn tại. Xem các báo cáo kiểm toán tại [mezo.org/audits](https://mezo.org/audits) và chỉ gửi số tiền mà bạn cảm thấy thoải mái.
