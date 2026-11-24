---
title: Thanh lý và quy đổi MUSD
description: Tìm hiểu về thanh lý và quy đổi.
topic: users
---

## Tổng quan
Khi bạn vay bằng Bitcoin làm tài sản thế chấp, bạn tạo ra một vị thế vay (còn gọi là "Trove"). Có hai sự kiện quan trọng của hệ thống có thể ảnh hưởng đến khoản vay của bạn:

- **Thanh lý**: Việc buộc đóng khoản vay của bạn, chỉ xảy ra nếu sức khỏe của khoản vay, được đo bằng tỷ lệ thế chấp, giảm xuống dưới mức tối thiểu tới hạn 110%. Khi bị thanh lý, bạn mất tài sản thế chấp.
- **Quy đổi**: Bất kỳ ai nắm giữ MUSD đều có thể đổi MUSD với giao thức lấy BTC theo giá \$1 cho mỗi MUSD (trừ phí quy đổi, hiện là 0,75%), qua đó giữ giá MUSD gần \$1 nhờ hoạt động kinh doanh chênh lệch giá. Việc quy đổi lấy BTC từ trove có tỷ lệ thế chấp thấp nhất trước (miễn là tỷ lệ này vẫn trên ngưỡng thanh lý 110%), vì vậy một lần quy đổi có thể thu nhỏ khoản vay của bạn ngay cả khi trove của bạn an toàn trước nguy cơ thanh lý. Nếu số tiền quy đổi nhỏ hơn khoản nợ của trove đó, giao dịch được xử lý dưới dạng quy đổi một phần — nghĩa là chỉ một phần khoản nợ được xóa. Nếu số tiền lớn hơn, trove được quy đổi toàn bộ và phần còn lại chuyển sang trove có CR thấp kế tiếp. Dù theo cách nào, khoản nợ và tài sản thế chấp đều bị trừ đi với giá trị tính bằng đô la bằng nhau, làm tăng tỷ lệ thế chấp của trove bị ảnh hưởng — tuy nhiên người vay mất đi mức tiếp xúc với BTC trong quá trình này.

---

## Thanh lý ⚠️

### Thanh lý là gì?
Thanh lý là một cơ chế an toàn tự động đóng khoản vay khi khoản vay trở nên quá rủi ro. Cơ chế này bảo vệ toàn bộ hệ thống khỏi tình trạng mất ổn định.

### Khi nào xảy ra thanh lý?

:::danger
Khoản vay của bạn có nguy cơ bị thanh lý nếu tỷ lệ thế chấp giảm xuống dưới 110%. Hãy coi đây là vùng đệm an toàn tối thiểu tuyệt đối mà khoản vay của bạn phải có.
:::

### Điều gì xảy ra khi thanh lý?
Hệ thống xử lý thanh lý theo hai cách:

#### Sử dụng Stability Pool (phương thức mặc định):
- Hệ thống dùng stablecoin từ quỹ dự trữ an toàn của mình, Stability Pool, để trả toàn bộ khoản nợ của bạn.
- Người hoặc bot kích hoạt việc thanh lý nhận một phần thưởng nhỏ (phí gas 200 MUSD và 0,5% tài sản thế chấp của bạn).
- Phần tài sản thế chấp còn lại của bạn (99,5%) được chuyển vào Stability Pool để hoàn trả cho những người gửi tiền vào pool.
- Khoản vay của bạn bị đóng và bạn mất toàn bộ tài sản thế chấp.

#### Phân phối lại (phương thức dự phòng):
- Nếu Stability Pool trống, hệ thống chia khoản nợ và tài sản thế chấp của bạn cho tất cả những người đang có khoản vay hoạt động khác.
- Đây là phương thức dự phòng nhằm đảm bảo hệ thống luôn cân bằng.

### Ví dụ về thanh lý:
- Giả sử khoản vay của bạn có khoản nợ 10.000 MUSD.
- Giá trị tài sản thế chấp BTC của bạn giảm xuống còn \$10.900.
- Tỷ lệ thế chấp của bạn lúc này là 109%, thấp hơn mức tối thiểu 110%.
- Kết quả: Khoản vay của bạn bị thanh lý. Khoản nợ 10.000 MUSD được xóa, nhưng bạn mất toàn bộ tài sản thế chấp BTC trị giá \$10.900.

---

## Quy đổi 🛡️

### Quy đổi là gì?
Quy đổi là tính năng cho phép bất kỳ ai nắm giữ stablecoin đổi stablecoin đó lấy lượng BTC có giá trị tương đương tính bằng đô la (trừ phí quy đổi) trực tiếp từ giao thức. Quy trình này giúp giữ stablecoin ở gần tỷ giá neo \$1. Đây không phải là hình phạt và không có nghĩa là khoản vay của bạn không an toàn.

### Khi nào xảy ra quy đổi?
Việc quy đổi có thể diễn ra bất cứ lúc nào. Khi một người dùng muốn quy đổi stablecoin của họ lấy BTC, hệ thống sẽ tìm các khoản vay để lấy tài sản thế chấp.

### Những khoản vay nào được chọn để quy đổi?
Hệ thống luôn bắt đầu với khoản vay có tỷ lệ thế chấp thấp nhất nhưng vẫn trên ngưỡng thanh lý 110% — ngay cả khi tỷ lệ đó vẫn lành mạnh và cao hơn hẳn 110%. Nếu khoản vay của bạn được thế chấp ít hơn những khoản vay khác, khả năng nó được chọn để quy đổi sẽ cao hơn.

### Điều gì xảy ra khi quy đổi?

#### Quy đổi toàn bộ:
- Nếu một lần quy đổi trả hết toàn bộ khoản nợ của bạn, khoản vay của bạn sẽ được đóng.
- Lượng BTC có giá trị tương đương của bạn được chuyển cho người quy đổi.
- Mọi lượng BTC còn dư vẫn thuộc về bạn. Phần này được gọi là tài sản thế chấp dư và được gửi tới một tài khoản lưu giữ đặc biệt để bạn nhận.

#### Quy đổi một phần (phổ biến hơn):
- Người quy đổi trả một phần khoản nợ của bạn.
- Lượng tài sản thế chấp BTC có giá trị tương đương của bạn được chuyển cho họ.
- Kết quả: Khoản vay của bạn vẫn mở nhưng giờ nhỏ hơn và lành mạnh hơn, với tỷ lệ thế chấp cao hơn.

### Ví dụ về quy đổi:
- Giả sử khoản vay của bạn có khoản nợ 10.000 MUSD và tài sản thế chấp BTC trị giá \$13.000 (tỷ lệ 130% lành mạnh).
- Một người dùng khác quy đổi 5.000 MUSD và khoản vay của bạn được chọn.
- Kết quả:
  - Khoản nợ của bạn giảm xuống còn 5.000 MUSD.
  - Tài sản thế chấp của bạn giảm xuống còn \$8.000.
  - Tỷ lệ thế chấp mới của bạn lúc này là 160% (\$8.000 / 5.000 MUSD), giúp khoản vay của bạn an toàn hơn nhiều!

### Cách lấy lại tài sản thế chấp còn dư sau khi bị quy đổi toàn bộ
Nếu khoản vay của bạn được trả hết thông qua một lần quy đổi, tài sản thế chấp dư của bạn vẫn an toàn. Bạn có thể nhận lại bất cứ lúc nào qua Mezo app.

Lưu ý quan trọng: Giao diện người dùng hiện tại có thể không hiển thị phần dư mà bạn có thể nhận. Nếu bạn không thấy thông báo "Loan redeemed" trên trang Borrow, hãy làm theo hướng dẫn [Cách nhận tài sản thế chấp sau khi bị quy đổi toàn bộ](/docs/vn/docs/users/borrow/claim-collateral-after-redemption/) để nhận thủ công qua Mezo Explorer.

---

## So sánh nhanh các điểm khác biệt chính

| Đặc điểm | Thanh lý (buộc đóng) | Quy đổi (giảm nợ) |
| --- | --- | --- |
| Khi nào xảy ra | Chỉ khi tỷ lệ của bạn dưới 110% | Có thể xảy ra khi tỷ lệ của bạn trên 110% |
| Ai khởi động? | Bất kỳ ai (thường là bot) | Bất kỳ người dùng nào nắm giữ MUSD |
| Ảnh hưởng đến khoản nợ | Bị xóa hoàn toàn | Giảm bớt hoặc bị xóa |
| Ảnh hưởng đến tài sản thế chấp | Mất toàn bộ | Bị trừ một phần, phần dư (nếu có) bạn có thể nhận |
| Ảnh hưởng đến bạn | Sự kiện bất lợi; khoản vay bị đóng và mất tài sản | Trung tính hoặc có lợi; khoản vay nhỏ hơn và lành mạnh hơn |

---

## Recovery Mode là gì?

:::note
Recovery Mode là trạng thái an toàn tạm thời, được kích hoạt nếu tổng tỷ lệ thế chấp (TCR) của toàn hệ thống giảm xuống dưới 150%. Đây là một trạng thái đặc biệt của hệ thống với các quy tắc vay chặt chẽ hơn.
:::

Trong Recovery Mode:
- **Việc thanh lý không bị ảnh hưởng.** Ngưỡng thanh lý vẫn là 110% — giống như ở chế độ bình thường (Normal Mode). Không giống Liquity v1, MUSD không mở rộng việc thanh lý sang các tỷ lệ thế chấp cao hơn trong Recovery Mode.
- Không thể mở khoản vay mới với tỷ lệ thế chấp dưới 150%.
- Việc tái cấp vốn bị chặn.
- Hệ thống khuyến khích người dùng bổ sung tài sản thế chấp hoặc trả nợ để đưa TCR trở lại trên 150%.

---

## Cách giữ an toàn cho khoản vay của bạn

:::tip
Cách phòng vệ tốt nhất trước cả thanh lý lẫn quy đổi là duy trì tỷ lệ thế chấp cao — hãy nhắm tới mức cao hơn hẳn 150%.
:::

### Để tránh bị thanh lý:
- Duy trì vùng đệm lành mạnh. Hãy nhắm tới tỷ lệ thế chấp cao hơn hẳn 110% để an toàn trước biến động thị trường. Tỷ lệ trên 150% còn đảm bảo bạn có thể vay và tái cấp vốn thoải mái ngay cả khi hệ thống chuyển sang Recovery Mode.
- Theo dõi sức khỏe khoản vay thường xuyên, đặc biệt khi giá BTC đang giảm.
- Chủ động: Bổ sung tài sản thế chấp hoặc trả bớt nợ nếu tỷ lệ của bạn xuống quá thấp.

### Để giảm khả năng bị quy đổi:
- Giữ tỷ lệ thế chấp cao. Không giống thanh lý, vốn được kích hoạt ở một ngưỡng cố định, việc quy đổi mang tính tương đối — hệ thống chọn các trove có tỷ lệ thế chấp thấp nhất trước. Tỷ lệ của bạn càng cao so với các trove khác thì trove của bạn càng ít có khả năng bị quy đổi. Mặc dù 150% thường là mục tiêu cơ sở tốt, mức tối ưu còn phụ thuộc vào điều kiện thị trường hiện tại và tỷ lệ thế chấp của các trove đang mở khác. Bạn nên định kỳ theo dõi các trove đang mở và điều chỉnh tỷ lệ của mình cho phù hợp để luôn cách xa nhóm cuối bảng.

### Theo dõi khoản vay của bạn với MUSD Monitor
Để theo dõi nâng cao, bạn có thể dùng [mezotools.cc](https://mezotools.cc).

Công cụ này cho phép bạn:
- Kiểm tra sức khỏe Trove và tỷ lệ thế chấp theo thời gian thực.
- Xem các lần quy đổi và thanh lý gần đây trên toàn hệ thống.
- Theo dõi giá BTC và stablecoin trực tiếp từ các oracle onchain của Mezo.

---

Để xem danh sách đầy đủ các thuật ngữ và định nghĩa về MUSD, hãy xem [Kiến trúc và thuật ngữ](/docs/vn/docs/users/borrow/architecture-and-terminology#định-nghĩa).
