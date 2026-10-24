---
title: MUSD Savings Vault
description: Kiếm lợi suất được bảo chứng bằng phí trên MUSD thông qua Mezo Savings Vault
topic: users
---

MUSD Savings Vault là sản phẩm tiết kiệm gốc của Mezo dành cho người nắm giữ MUSD.

**Cách hoạt động:**

- Gửi MUSD và nhận sMUSD — một token biên nhận đại diện cho cổ phần (share) của bạn trong vault
- Lợi suất được tích lũy vào tỷ giá quy đổi của sMUSD: theo thời gian, 1 sMUSD có thể quy đổi được nhiều hơn 1 MUSD. Khi rút, bạn sẽ nhận được nhiều MUSD hơn số đã gửi.
- Lợi suất đến từ hai nguồn trong hệ thống MUSD: phí giao thức MUSD (lãi cho vay, phí khởi tạo khoản vay, phí tái cấp vốn) và phí BTC từ các hoạt động khoản vay MUSD, được chuyển đổi sang MUSD và phân phối hằng tuần
- Cả hai dòng thu nhập đều được giao thức phân phối vào vault theo chu kỳ hằng tuần
- APR thay đổi tùy theo hoạt động của giao thức — xem mức hiện tại tại [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Phân chia phí

Phí giao thức MUSD được chia 50/50 cho hai nơi nhận:

- **MUSD Savings Vault** — phân phối cho người nắm giữ sMUSD, hoặc chuyển hướng cho người bỏ phiếu veBTC đối với sMUSD đã stake
- **Hoàn trả [khoản vay khởi động của giao thức](/docs/vn/docs/users/borrow/architecture-and-terminology/#khoản-vay-khởi-động-của-giao-thức)**

Tỷ lệ phân chia này có thể được điều chỉnh qua quản trị thông qua splitter MUSD, với tối thiểu 50% dành cho việc hoàn trả khoản vay cho đến khi khoản vay khởi động được trả hết. Sau khi hoàn trả, toàn bộ phí sẽ chảy vào Savings Vault. Xem [Phí MUSD](/docs/vn/docs/users/borrow/fees/) để biết đầy đủ chi tiết.

---

## Tìm hiểu về sMUSD

sMUSD là token biên nhận của bạn cho Mezo MUSD Savings Vault. Một vài điều cần biết:

- **Lợi suất nằm trong tỷ giá quy đổi, không nằm trong số dư của bạn.** Số dư sMUSD của bạn giữ nguyên sau khi gửi, nhưng mỗi sMUSD sẽ quy đổi được nhiều MUSD hơn theo thời gian khi vault tích lũy phí. Bạn sẽ thấy sự khác biệt khi rút.
- **Lợi suất được phân phối hằng tuần.** Giao thức phân phối phí đã tích lũy vào vault mỗi tuần. Tỷ giá quy đổi sMUSD/MUSD được cập nhật sau mỗi lần phân phối.
- **sMUSD có thể chuyển nhượng.** Bạn có thể gửi hoặc nắm giữ sMUSD như mọi token khác. Người nắm giữ sMUSD tại thời điểm rút sẽ nhận phần lợi suất đã tích lũy.
- **Nếu bạn stake sMUSD vào gauge, lợi suất của bạn sẽ được chuyển hướng.** sMUSD đã stake kiếm lượng phát thải MEZO thay vì doanh thu phí trực tiếp. Doanh thu phí lẽ ra thuộc về bạn sẽ được chuyển hướng cho những người bỏ phiếu veBTC đã bỏ phiếu cho gauge MUSD Savings. Hủy stake sẽ khôi phục việc tích lũy lợi suất trực tiếp.

---

## Chi tiết vault

| Tham số | Giá trị |
|-----------|-------|
| Token gửi vào | MUSD |
| Token biên nhận | sMUSD |
| Đơn vị quản lý chiến lược | Mezo |
| Phí rút | Không có |
| Thời gian khóa khi rút | 0 giờ |
| APR hiện tại | Thay đổi — xem tại [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## Stake sMUSD vào gauge

Bạn có thể tùy chọn stake token biên nhận sMUSD vào gauge MUSD Savings để kiếm lượng phát thải token MEZO.

**Sự đánh đổi:**

- **sMUSD chưa stake:** Bạn trực tiếp nhận phần lợi suất vault tương ứng và doanh thu lãi/phí MUSD
- **sMUSD đã stake:** Phần doanh thu lãi và phí của bạn được chuyển hướng cho những người bỏ phiếu veBTC trên gauge. Đổi lại, bạn kiếm lượng phát thải dựa trên số phiếu bầu mà gauge nhận được

Cơ chế này tương tự cách stake LP hoạt động trong các pool thanh khoản trên DEX gốc của Mezo — người stake từ bỏ doanh thu phí để đổi lấy lượng phát thải, còn người bỏ phiếu kiếm được phần phí được chuyển hướng.

MUSD Savings Rate Gauge cạnh tranh phiếu bầu cùng với các gauge của pool LP. Các gauge này được gọi chung là "gauge staking" — một phiếu bầu đã phân bổ cho gauge lãi suất tiết kiệm thì không thể đồng thời phân bổ cho gauge LP.

Khi lượng phát thải MEZO đã hoạt động, việc stake sMUSD vào gauge giờ đây mang lại MEZO bên cạnh vị thế cơ bản của bạn. Gauge MUSD Savings cạnh tranh phiếu bầu veBTC cùng với các gauge của pool LP — càng nhiều phiếu bầu được điều hướng tới gauge tiết kiệm thì càng nhiều lượng phát thải MEZO được chuyển tới người stake. Những người bỏ phiếu veBTC ủng hộ gauge này sẽ kiếm được phí MUSD mà người stake chuyển hướng. APR hiện tại của gauge dành cho người stake và người bỏ phiếu được hiển thị trên trang Vote tại [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Rủi ro

### Rủi ro chiến lược
Mỗi vault phân bổ tài sản theo cách khác nhau. Hãy hiểu rõ chiến lược cơ sở trước khi gửi — một số chiến lược có rủi ro cao hơn những chiến lược khác.

### Rủi ro hợp đồng thông minh
Vault tương tác với nhiều hợp đồng thông minh. Mặc dù các vault của Mezo đã được kiểm toán, mọi hợp đồng thông minh đều tiềm ẩn rủi ro. Chỉ gửi số tiền mà bạn cảm thấy thoải mái.
