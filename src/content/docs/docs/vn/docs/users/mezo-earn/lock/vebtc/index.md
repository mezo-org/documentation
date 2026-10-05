---
title: Tổng quan về veBTC
description: Khóa BTC để kiếm lợi nhuận với veBTC
topic: users
---

veBTC là dạng token hóa (NFT) của lượng BTC được khóa trên mạng Mezo. Khóa BTC mang lại cho bạn quyền quản trị và một phần phí giao thức.

## veBTC là gì?

Khi khóa BTC trên Mezo, bạn nhận được một NFT veBTC đại diện cho vị thế đã khóa của bạn. NFT này mang lại cho bạn:

- **Quyền biểu quyết** để định hướng lượng phát thải trong toàn hệ sinh thái
- **Phí giao thức** từ hoạt động trên chuỗi và hoạt động cầu nối
- **Quyền quản trị** để định hình tương lai kinh tế của Mezo

---

## Cách quyền biểu quyết hoạt động

Trọng số veBTC của bạn phụ thuộc vào hai yếu tố: lượng BTC được khóa (càng nhiều BTC = càng nhiều quyền biểu quyết) và thời hạn khóa (khóa càng lâu = trọng số duy trì càng cao).

Quyền biểu quyết của bạn suy giảm tuyến tính theo thời gian. Một người dùng khóa 1 BTC trong 28 ngày sẽ bắt đầu với 1 veBTC, giảm còn 0,5 sau 14 ngày và về 0 khi hết hạn. Bạn có thể gia hạn khoản khóa bất cứ lúc nào để duy trì quyền biểu quyết tối đa.

### Tham số khóa

| Tham số | Giá trị |
|-----------|-------|
| Thời hạn khóa tối thiểu | 1 ngày |
| Thời hạn khóa tối đa | 28 ngày |
| Suy giảm khoản khóa | Tuyến tính — trọng số giảm liên tục cho đến khi về 0 |

---

## Bạn kiếm được gì

### Thu nhập thụ động (tất cả người nắm giữ veBTC)

Mọi người nắm giữ veBTC đều tự động nhận một phần **phí chuỗi và phí cầu nối** tương ứng với trọng số phiếu bầu của họ. Đây là lợi suất thụ động, tích lũy chỉ nhờ nắm giữ veBTC — không cần bỏ phiếu.

### Thu nhập chủ động (cần bỏ phiếu)

Khi [bỏ phiếu cho gauge](/docs/vn/docs/users/mezo-earn/vote), bạn kiếm thêm phần thưởng dựa trên cách phân bổ phiếu bầu của mình:

- **Phí swap** từ các pool mà bạn bỏ phiếu (khi LP stake vào các gauge đó)
- **Doanh thu lãi/phí MUSD** nếu bạn bỏ phiếu cho gauge MUSD Savings Rate
- **Khoản khuyến khích** (incentive) mà các giao thức hoặc người dùng đăng lên để thu hút phiếu bầu cho những gauge cụ thể

Bạn phân bổ càng nhiều trọng số phiếu bầu cho một gauge, phần phí và khoản khuyến khích bạn nhận được từ gauge đó càng lớn.

:::note[Quan trọng]
Phân bổ của bạn được giữ nguyên qua các epoch và tiếp tục sinh lợi cho đến khi bạn thay đổi — bạn không cần bỏ phiếu lại mỗi tuần. Xem phần [Epoch](#epoch) bên dưới.
:::


---

## Epoch

Mezo Earn vận hành theo **các chu kỳ 7 ngày gọi là epoch**. Mỗi epoch bắt đầu vào Thứ Năm lúc 00:00 UTC.

### Vì sao epoch quan trọng

- **Phiếu bầu được giữ nguyên.** Phân bổ của bạn được chuyển tiếp qua các epoch cho đến khi bạn thay đổi hoặc đặt lại. Mỗi khoản khóa chỉ có thể bỏ phiếu một lần mỗi epoch, nên một phân bổ đã xác nhận sẽ không thể thay đổi cho đến thời điểm chuyển epoch tiếp theo.
- **Phiếu bầu trong epoch N** quyết định việc phân bổ lượng phát thải cho epoch N+1
- **Phí phát sinh trong epoch N** được phân phối dựa trên phiếu bầu trong epoch N

### Thời hạn khóa và việc căn theo epoch

Thời hạn khóa được căn theo ranh giới epoch, không theo ngày dương lịch. Khi bạn tạo khoản khóa, **thời gian khóa sẽ được làm tròn xuống tuần đầy đủ gần nhất**.

Điều này có nghĩa là:

- Khoản khóa 28 ngày được tạo giữa epoch sẽ có thời hạn hiệu lực khoảng 21–28 ngày, tùy vào thời điểm bạn khóa
- Khoản khóa luôn hết hạn vào thời điểm chuyển epoch (Thứ Năm lúc 00:00 UTC)

**Ví dụ:** Nếu bạn chọn khóa tối đa 28 ngày vào giữa epoch, thời hạn khóa hiệu lực sẽ bị rút ngắn theo thời gian còn lại trong tuần — kết quả là khoản khóa kéo dài khoảng 21–28 ngày, tùy vào thời điểm bạn khóa.

Việc chuẩn hóa này đảm bảo mọi khoản khóa đều hết hạn gọn gàng tại ranh giới epoch và giúp đơn giản hóa việc tính trọng số phiếu bầu trên toàn hệ thống.

| Tham số epoch | Giá trị |
|-----------------|-------|
| Thời lượng | 7 ngày |
| Thời điểm bắt đầu | Thứ Năm lúc 00:00 UTC |
| Căn chỉnh khoản khóa | Làm tròn xuống theo tuần đầy đủ |
