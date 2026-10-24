---
title: Triển khai khoản khuyến khích
description: >-
  Cách tạo gauge bỏ phiếu cho các tài sản pool nằm trong danh sách cho phép trên
  Mezo Earn.
topic: developers
---

Tất cả tài sản Mezo (BTC, MEZO và các token hợp đồng trên mainnet) đã được đưa vào danh sách cho phép (whitelist) trong hợp đồng PoolsVoter. Giờ đây, bất kỳ ai cũng có thể tạo gauge bỏ phiếu cho các pool có cả hai tài sản đều nằm trong danh sách cho phép.

Để xem danh sách đầy đủ các địa chỉ token trong danh sách cho phép có thể được thêm làm khoản khuyến khích trên gauge, hãy xem [Tham chiếu hợp đồng](/docs/vn/docs/users/resources/contracts-reference#địa-chỉ-hợp-đồng-portal).

## Tạo gauge cho pool

1. Mở [hợp đồng PoolsVoter trên Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) và kết nối ví của bạn.

2. Nhấp vào tab **Contract**, sau đó chọn **Write proxy** và chọn `createPoolGauge`.

3. Với tham số `_poolFactory`, dùng một trong các địa chỉ sau:
   - **Pool cơ bản:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **Pool CL:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Nhập địa chỉ pool vào `_pool`.

5. Thực thi giao dịch. Nếu pool đã được liệt kê trong phần tổng quan pool, pool đó dự kiến cũng sẽ bắt đầu xuất hiện trong giao diện bỏ phiếu.
