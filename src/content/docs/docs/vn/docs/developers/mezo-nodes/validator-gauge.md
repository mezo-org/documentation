---
title: Gauge validator
description: >-
  Hướng dẫn dành cho validator về cách quản lý người thụ hưởng phần thưởng, bỏ
  phiếu cho gauge validator và nhận phần thưởng MEZO.
topic: developers
---

Validator có thể kiếm lượng phát thải MEZO mỗi tuần, nhưng chỉ khi gauge validator của họ nhận được phiếu bầu trong từng epoch. Nếu gauge không có phiếu bầu, validator sẽ không nhận được lượng phát thải nào. Hướng dẫn này giải thích cách quản lý người thụ hưởng phần thưởng, bỏ phiếu cho gauge validator của bạn và nhận phần thưởng.

## Tổng quan

Mỗi validator có một gauge tương ứng trong [hợp đồng ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). Phần thưởng được nhận thông qua hợp đồng ValidatorsVoter bằng cách chỉ định địa chỉ gauge của validator.

Mỗi gauge có một địa chỉ người thụ hưởng duy nhất được phép nhận phần thưởng. Theo mặc định, người thụ hưởng là địa chỉ operator của validator đã đăng ký trong [hợp đồng Proof of Authority (PoA)](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Lịch giải phóng phần thưởng]
Phần thưởng epoch đã phân bổ không thể nhận ngay — chúng được giải phóng dần trong suốt epoch. Ví dụ: nếu phần thưởng được phân bổ cho một gauge vào đầu epoch N, 100% phần thưởng của epoch N sẽ khả dụng vào cuối epoch đó.
:::

## Thay đổi người thụ hưởng phần thưởng

Validator có thể chỉ định một địa chỉ khác để nhận phần thưởng MEZO. Điều này hữu ích khi muốn tách biệt chức năng vận hành và chức năng ngân quỹ.

Để thay đổi người thụ hưởng phần thưởng:

1. **Kết nối ví chứa địa chỉ operator của bạn**
   Dùng ví gắn với địa chỉ operator validator của bạn.

2. **Xác định địa chỉ gauge của bạn**
   Gọi `ValidatorsVoter.validatorToGauge()` với địa chỉ operator của bạn làm tham số.

3. **Đổi người thụ hưởng**
   Gọi `Gauge.switchRewardsBeneficiary()` với địa chỉ người thụ hưởng mới làm tham số.
   - Hợp đồng: hợp đồng Gauge cụ thể của bạn (lấy từ bước 2)
   - Phương thức: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Nhận phần thưởng từ người thụ hưởng mới**
   Sau khi thay đổi người thụ hưởng, mọi lần nhận phần thưởng sau này đều phải được thực hiện bằng ví của người thụ hưởng mới.

:::caution[Phương pháp hay nhất]
Bạn nên nhận toàn bộ phần thưởng hiện có bằng người thụ hưởng hiện tại trước khi chuyển sang người thụ hưởng mới. Nếu bạn đổi người thụ hưởng khi vẫn còn phần thưởng chưa nhận, số phần thưởng đó sẽ vẫn gắn với địa chỉ người thụ hưởng cũ và phải được nhận riêng.
:::

## Bỏ phiếu cho gauge validator của bạn

Việc bỏ phiếu là điều kiện thiết yếu để kiếm lượng phát thải MEZO — gauge validator không nhận được phiếu bầu nào trong một epoch sẽ không nhận được phần thưởng nào cho epoch đó. Validator có thể bỏ phiếu cho chính gauge của mình để điều hướng lượng phát thải MEZO. Phiếu bầu cho gauge validator **độc lập** với các phiếu bầu cho gauge khác của Mezo Earn. Ví dụ: nếu bạn đã dùng 100% quyền biểu quyết để bỏ phiếu cho gauge của một pool, bạn vẫn có thể dùng 100% quyền biểu quyết để bỏ phiếu cho gauge validator của mình (hoặc gauge của một validator khác).

veBTC là tài sản cốt lõi dùng để bỏ phiếu. veMEZO có thể được dùng để boost quyền biểu quyết của bạn. Sau khi được bỏ, phiếu bầu sẽ tự động được chuyển tiếp sang các epoch tiếp theo, trừ khi bạn chủ động đặt lại.

:::note[Poke vị thế của bạn]
Có thể bạn cần poke vị thế của mình trước khi bỏ phiếu để đảm bảo vị thế được cập nhật. Việc poke một phiếu bầu hiện có cũng có lợi nếu quyền biểu quyết veBTC của bạn đã tăng (ví dụ: do nạp thêm), vì thao tác này cập nhật trọng số phiếu bầu theo quyền biểu quyết mới. Xem [tài liệu về Poke](/docs/vn/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) để biết chi tiết.
:::

### Cách bỏ phiếu

1. **Xác định gauge validator của bạn**
   Gọi hàm `validatorToGauge` trên [hợp đồng ValidatorsVoter (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) với địa chỉ validator của bạn làm tham số.

2. **Bỏ phiếu**
   Gọi hàm `vote` trên [hợp đồng ValidatorsVoter (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). Tham số `tokenId` là ID NFT veBTC của bạn. Nếu chỉ bỏ phiếu cho gauge validator của chính mình, bạn có thể đặt trọng số là `100` (tương ứng 100% quyền biểu quyết của bạn).

### Khuyến khích cho gauge của bạn

Validator có thể đặt khoản khuyến khích (incentive) cho gauge boost veBTC của mình trên các nền tảng như [Matchbox](https://matchbox.markets/) để thu hút phiếu bầu veMEZO, qua đó boost quyền biểu quyết veBTC của họ.
Quyền biểu quyết veBTC đã được boost đó sau đó có thể được dùng để điều hướng thêm phiếu bầu cho gauge validator, làm tăng lượng phát thải MEZO.

Mezo Earn cũng có một cơ chế khuyến khích riêng cho gauge validator, nhưng quy trình cụ thể đó hiện chưa có trên Matchbox.

## Nhận phần thưởng

Để nhận phần thưởng MEZO, hãy làm theo các bước sau:

1. **Kết nối ví chứa địa chỉ operator của bạn**
   Dùng ví gắn với địa chỉ operator validator của bạn.

2. **Xác định địa chỉ gauge của bạn**
   Gọi `ValidatorsVoter.validatorToGauge()` với địa chỉ operator của bạn làm tham số.
   - Hợp đồng: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Phương thức: `validatorToGauge(address validator)`

3. **Nhận phần thưởng**
   Gọi `ValidatorsVoter.claimRewards()` với địa chỉ gauge của bạn làm tham số.
   - Hợp đồng: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Phương thức: `claimRewards(address gauge)`

## Địa chỉ hợp đồng

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **Hợp đồng PoA**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Tài nguyên bổ sung

- [Tổng quan về Mezo Earn](/docs/vn/docs/users/mezo-earn/overview/)
- [Blog của Mezo](https://mezo.org/blog/tag/features/)
