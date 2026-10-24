---
title: Mezo Earn dành cho validator
description: >-
  Cách validator tham gia vào cỗ máy kinh tế của Mezo, nhận khoản khuyến khích
  và tương tác với veBTC, veMEZO, gauge và staking LP.
topic: developers
---

Trang này giải thích cách validator tham gia vào cỗ máy kinh tế của Mezo (Mezo Earn), cách họ nhận khoản khuyến khích (incentive), và mối liên hệ của điều này với veBTC, veMEZO, gauge và staking LP.

Trang này dành cho:

- Các validator Mezo hiện tại và tương lai
- Nhà cung cấp hạ tầng và đối tác
- Người nắm giữ veBTC/veMEZO và LP muốn hiểu cách phần thưởng của validator vận hành

:::note

Sách trắng (whitepaper) của Mezo là nguồn thông tin chính thức về cơ chế và công thức đằng sau veBTC, veMEZO, gauge, splitter và lượng phát thải.

:::

---

## Tổng quan

Nhìn chung:

- Validator bảo mật chuỗi Mezo và kiếm phần thưởng MEZO thông qua Chain Splitter trong Mezo Earn.
- Người nắm giữ veBTC là trụ cột của quản trị. Họ bỏ phiếu cho các gauge staking để điều hướng lượng phát thải.

**Cơ chế chính:**

- **Phân chia lượng phát thải:** Tỷ lệ của các splitter (Chain Splitter và Ecosystem Splitter) hiện được cố định và khóa thông qua quản trị. Các tỷ lệ này có thể trở nên điều chỉnh được thông qua các cơ chế quản trị trong tương lai.
- **Vai trò của veMEZO:** veMEZO đóng vai trò boost cho quyền biểu quyết của veBTC (tối đa đến một hệ số nhân có giới hạn) nhưng không bao giờ thay thế BTC làm trụ cột.

---

## Khái niệm cốt lõi

### Định nghĩa chính

Để hiểu Mezo Earn, chúng tôi phân biệt ba thuật ngữ kinh tế:

- **Phần thưởng:** Những gì các bên nhận được để đổi lấy công việc của họ (ví dụ: lượng phát thải MEZO).
- **Khoản khuyến khích:** Các quy tắc hoặc lợi ích được thiết kế để khuyến khích những hành vi cụ thể (ví dụ: được boost khi nắm giữ veMEZO).
- **Bribe:** Một ngân sách tạm thời do các giao thức hoặc người dùng cung cấp để thúc đẩy một hành động cụ thể (ví dụ: bỏ phiếu cho một gauge cụ thể).

### Các bên tham gia Mezo Earn

Mezo Earn điều phối năm bên tham gia chính:

1. **Người dùng cuối / người khóa veBTC và veMEZO:** Khóa BTC hoặc MEZO, nhận NFT veBTC và veMEZO, bỏ phiếu cho gauge và nhận phí/lượng phát thải.
2. **Nhà cung cấp thanh khoản (LP):** Cung cấp thanh khoản cho DEX và nhận LP token cùng phí; họ có thể tùy chọn stake LP token vào gauge staking để đổi phí lấy lượng phát thải MEZO.
3. **Validator:** Vận hành các node của chuỗi Mezo, tham gia đồng thuận và nhận lượng phát thải MEZO thông qua Chain Splitter.
4. **Giao thức:** Đặt bribe trên các gauge để thu hút thanh khoản hoặc phiếu bầu quản trị.
5. **Chuỗi:** Thu phí swap và phí chuỗi/phí cầu nối, sau đó phân phối lại thông qua Earn.

---

## Cách validator nhận lượng phát thải

Chain Splitter gửi một phần cố định của lượng phát thải phần thưởng cho validator, hiện được đặt ở mức 20% lượng phát thải phần thưởng. Tỷ lệ này được khóa thông qua quản trị.

Lượng phát thải dành cho validator được chia đều cho các validator đang hoạt động. Hiện chưa có cơ chế nào để người nắm giữ veBTC bỏ phiếu cho từng validator hoặc điều hướng lượng phát thải đến các validator cụ thể.

---

## Gauge boost veBTC và thị trường ghép cặp

Dù không dành riêng cho validator, gauge boost veBTC và thị trường ghép cặp (matching market) ảnh hưởng trực tiếp đến hiệu quả thu hút phiếu bầu của validator và LP.

- Mỗi NFT veBTC có gauge boost riêng (không staking).
- Người nắm giữ veMEZO bỏ phiếu cho các gauge này bằng trọng số veMEZO của họ.

**Động lực thị trường:**

- **Bên nhiều BTC / ít MEZO:** Đưa ra khoản khuyến khích (bribe) trên gauge boost veBTC của mình để thu hút phiếu bầu veMEZO nhằm tăng hệ số nhân (tối đa 5x).
- **Bên nhiều MEZO / ít BTC:** Điều hướng phiếu bầu veMEZO đến các gauge boost veBTC để kiếm các khoản khuyến khích đó mà không cần nắm giữ BTC.

---

## Staking LP và mối liên hệ với validator

### Staking LP là gì?

LP cung cấp thanh khoản cho các pool DEX trên Mezo và nhận LP token đại diện cho phần sở hữu của họ trong pool. Họ có thể chọn giữa hai chế độ:

**1. LP không stake:**

- LP giữ LP token trong ví của mình.
- Họ kiếm phần phí swap tương ứng với tỷ lệ sở hữu trực tiếp từ pool.
- Không có lượng phát thải MEZO nào được chuyển đến họ.

**2. LP đã stake:**

- LP stake LP token vào một gauge staking.
- Phần phí cơ sở được chuyển hướng từ các LP token đã stake sang những người bỏ phiếu veBTC đã bỏ phiếu cho gauge đó.
- Thay vào đó, LP nhận lượng phát thải MEZO được chuyển đến gauge đó.

**Trao đổi kinh tế:**

- LP đổi lợi suất thực trực tiếp (phí) lấy lượng phát thải MEZO.
- Những người bỏ phiếu veBTC + veMEZO đổi quyền biểu quyết của mình lấy quyền hưởng phần phí được chuyển hướng đó và mọi khoản khuyến khích được thêm vào gauge.

### Staking LP ảnh hưởng đến validator như thế nào

Thông qua cây splitter:

- **Chain Splitter** quyết định bao nhiêu phần trong quỹ phần thưởng dành cho validator so với các hoạt động không phải validator. Tỷ lệ này hiện được cố định ở mức 20% cho validator / 80% cho hệ sinh thái và được khóa thông qua quản trị.
- **Ecosystem Splitter** điều hướng phần quỹ không dành cho validator đến các gauge staking (pool LP + tiết kiệm MUSD). Tỷ lệ này hiện được cố định và khóa thông qua quản trị.
- Sau đó, các gauge LP cạnh tranh với gauge tiết kiệm MUSD và các gauge LP khác để giành lượng phát thải trong nhánh của mình.

---

## Từng bước: Staking LP

1. **Cung cấp thanh khoản:** Chọn một pool trên Mezo DEX, gửi tài sản và nhận LP token.

2. **Tìm gauge staking:** Mở frontend của Earn hoặc DEX, tìm gauge staking của pool và xác nhận gauge đó chấp nhận LP token.

3. **Stake LP token:** Phê duyệt hợp đồng và stake số lượng mong muốn. Thao tác này chuyển hướng phí pool vào quỹ phí của gauge và phân phối lượng phát thải MEZO cho những người stake LP token.

4. **Bỏ phiếu veBTC cho gauge LP:** Người nắm giữ veBTC (+veMEZO) có thể bỏ phiếu cho gauge LP. Trọng số phiếu bầu càng cao thì càng nhiều lượng phát thải MEZO được chuyển đến gauge và càng nhiều phí pool/bribe được chuyển đến những người bỏ phiếu.

5. **Nhận phần thưởng:**
   - **LP:** Nhận lượng phát thải MEZO (được phân bổ theo từng epoch).
   - **Người bỏ phiếu veBTC:** Nhận phần phí swap được chuyển hướng và khoản khuyến khích.

---

## Gauge tiết kiệm MUSD

Lãi suất tiết kiệm MUSD được triển khai dưới dạng một gauge staking khác.

- Người dùng gửi MUSD vào một vault tiết kiệm và nhận một token biên nhận.
- Nếu họ stake token biên nhận vào gauge tiết kiệm MUSD:
  - Lợi suất MUSD trực tiếp của họ được chuyển hướng vào quỹ phí của gauge.
  - Thay vào đó, họ kiếm lượng phát thải MEZO được chuyển đến gauge đó.
- Người nắm giữ veBTC bỏ phiếu cho gauge tiết kiệm MUSD sẽ nhận:
  - Lợi suất MUSD (từ lãi, phí khởi tạo khoản vay và phí tái cấp vốn).
  - Mọi khoản khuyến khích MEZO được chuyển đến gauge đó.

Gauge này cạnh tranh trực tiếp với các gauge LP để giành lượng phát thải của nhánh staking và sự chú ý của người bỏ phiếu.

---

## Liên hệ và hỗ trợ trên Discord

Đối với các câu hỏi, việc tham gia và phối hợp dành riêng cho validator: hãy tham gia [Discord của Mezo](https://discord.mezo.org) và gặp chúng tôi tại kênh #developers.
