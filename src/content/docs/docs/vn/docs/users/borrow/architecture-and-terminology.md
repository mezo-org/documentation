---
title: Kiến trúc và thuật ngữ MUSD
description: >-
  Tìm hiểu chuyên sâu về thiết kế hệ thống và các thuật ngữ cốt lõi của MUSD
  trên Mezo.
topic: users
---

Hệ thống [MUSD](https://mezo.org/feature/musd) gồm bốn nhóm hợp đồng chính:

| Nhóm hợp đồng | Mục đích |
| --- | --- |
| **Token (MUSD)** | Stablecoin cốt lõi của hệ thống, được thiết kế để duy trì tỷ giá neo với USD |
| **Giao thức lõi** | Xử lý việc mở/đóng vị thế, quản lý tài sản thế chấp và duy trì sự ổn định của hệ thống |
| **Các pool tài sản** | Quản lý các pool tài sản thế chấp và pool thanh khoản khác nhau của hệ thống |
| **Hợp đồng hỗ trợ** | Cung cấp các dịch vụ thiết yếu như nguồn cấp giá, sắp xếp vị thế và quản lý giá trị do giao thức kiểm soát |

## Lưu ký và quản lý tài sản thế chấp

Các vị thế MUSD có thể được theo dõi onchain, và tài sản thế chấp Bitcoin bên dưới được quản lý an toàn bằng hạ tầng lưu ký phi tập trung, vững chắc của tBTC.

Bạn có thể xem theo thời gian thực toàn bộ BTC bảo chứng cho MUSD trên trình khám phá khối của Mezo:

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC do cùng đội ngũ đứng sau Mezo là [Thesis*](https://thesis.co/?ref=blog.mezo.org) xây dựng, và vận hành dựa trên [Threshold Network](https://threshold.network/?ref=blog.mezo.org). Threshold là một tập hợp người ký phi tập trung đã vận hành cầu nối Threshold Bitcoin từ đầu năm 2020 và đã chuyển thành công hơn 28k Bitcoin qua cầu nối. Bằng chứng dự trữ của tBTC đã được công khai trong suốt vòng đời của cầu nối và có thể xem tại [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

Để tìm hiểu kỹ về tBTC, bạn có thể xem [báo cáo nghiên cứu Bitcoin Layers](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), trong đó phân tích tBTC so với các token bọc phổ biến khác như WBTC và cbBTC. [Đội ngũ LlamaRisk](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) cũng đã thực hiện thêm một phân tích rủi ro trước khi tBTC được niêm yết làm tài sản thế chấp trên Aave.

### Lưu ký trong hợp đồng

Người dùng mở một vị thế bằng cách gọi BorrowerOperations.openTrove, cung cấp BTC và yêu cầu MUSD. BTC được chuyển đến ActivePool và nằm ở đó cho đến khi xảy ra một trong các hành động sau:

* Người dùng rút tài sản thế chấp (`BorrowerOperations.withdrawColl`)
* Người dùng trả hết nợ (`BorrowerOperations.closeTrove`)
* Quy đổi tài sản thế chấp (`TroveManager.redeemCollateral`)
* Vị thế bị thanh lý (`TroveManager.liquidate`)

Các vị thế bị thanh lý hoặc được StabilityPool chi trả, khi đó BTC được chuyển vào Stability Pool, hoặc khoản nợ và tài sản thế chấp được hấp thụ và phân bổ lại cho những người dùng khác, khi đó BTC được chuyển vào DefaultPool để sau đó được phân phối.

## Vay với lãi suất cố định

* Lãi suất chung: Một lãi suất chung duy nhất áp dụng cho mọi khoản vay mới mở.
* Duy trì lãi suất: Khi khoản vay đã được mở, khoản vay giữ nguyên lãi suất tại thời điểm tạo, kể cả khi lãi suất chung thay đổi. Lãi suất của một khoản vay chỉ có thể được người dùng cập nhật thông qua chức năng tái cấp vốn.

:::note
Lãi suất được **cố định trong suốt thời hạn khoản vay**. Lãi suất bạn chốt khi tạo khoản vay sẽ không bao giờ thay đổi, trừ khi bạn chọn tái cấp vốn.
:::
* Chức năng tái cấp vốn: Chức năng tái cấp vốn cho phép người dùng điều chỉnh khoản nợ của khoản vay theo lãi suất chung mới. Quá trình này phát sinh phí tái cấp vốn, là một tỷ lệ phần trăm có thể cấu hình của phí phát hành. Tái cấp vốn giúp người dùng không phải di chuyển tài sản thế chấp, đồng thời chịu mức phí thấp hơn so với việc đóng rồi mở lại khoản vay theo lãi suất mới. Bạn cũng có thể tái cấp vốn để mở rộng hạn mức tín dụng nếu BTC đã tăng giá.
* Lãi đơn: Tiền lãi được tính theo mô hình lãi đơn thay vì lãi kép.
* Thanh toán lãi: Các khoản thanh toán lãi được chuyển đến PCV (Protocol Controlled Value — giá trị do giao thức kiểm soát). Việc phân bổ các khoản này do quản trị quyết định và có thể được chia giữa một người nhận bất kỳ và việc hoàn trả khoản vay khởi động.

## Quản trị bổ sung

* Quyền kiểm soát của quản trị: Lãi suất và các tham số quan trọng khác do quản trị kiểm soát. Việc thay đổi các tham số này cần một đề xuất quản trị và một khoảng trễ tối thiểu trước khi có hiệu lực.
* Đề xuất lãi suất: Lãi suất mới có thể được đề xuất thông qua quản trị. Các đề xuất này phải được thông qua sau một khoảng trễ tối thiểu nhằm bảo đảm tính ổn định và khả năng dự đoán.

## Protocol Controlled Value (PCV)

Hợp đồng Protocol Controlled Value (PCV — giá trị do giao thức kiểm soát) là một thành phần then chốt của hệ thống, chịu trách nhiệm quản lý các khoản phí thu được từ việc vay và tái cấp vốn. Dưới đây là tổng quan về cách PCV hoạt động:

* Thu phí: Phí vay và phí tái cấp vốn được chuyển đến hợp đồng PCV.
* Phân bổ phí: Các khoản phí PCV thu được được phân bổ để trả bớt khoản vay khởi động hoặc gửi tiền vào hệ thống gauge.
* Tỷ lệ phân chia do quản trị quyết định: Việc phân bổ phí giữa trả nợ và hệ thống gauge do quản trị quyết định. Tuy nhiên, cho đến khi khoản vay khởi động được trả hết, chỉ có thể gửi tối đa 50% phí vào hệ thống gauge.
* Sau khi trả hết nợ: Khi khoản vay khởi động đã được trả hết, phí sẽ tích lũy dưới dạng thanh khoản thuộc sở hữu của giao thức (Protocol-Owned Liquidity) trong StabilityPool.

### Khoản vay khởi động của giao thức

Stability Pool được khởi động bằng một khoản vay của giao thức, đảm bảo bằng phí và lãi trong tương lai. MUSD được đúc từ khoản vay này chỉ được dùng trong Stability Pool. Trong thời gian khoản vay của giao thức còn hiệu lực, tối thiểu 50% tiền lãi và phí mà giao thức thu được sẽ được dùng để trả khoản vay này.

## Định nghĩa

- **Khoản vay:** một vị thế nợ có tài sản thế chấp, gắn với một địa chỉ Ethereum duy nhất. Trong các giao thức tương tự, khái niệm này còn được gọi là "CDP".

- **Tài sản thế chấp hoạt động:** lượng tài sản thế chấp được ghi nhận trong struct của khoản vay

- **Nợ gốc hoạt động:** lượng nợ MUSD được ghi nhận trong struct của khoản vay, không bao gồm tiền lãi

- **Lãi hoạt động:** lượng lãi MUSD được ghi nhận trong struct của khoản vay

- **Nợ hoạt động:** lượng nợ MUSD được ghi nhận trong struct của khoản vay (nợ gốc hoạt động cộng lãi hoạt động)

- **Toàn bộ tài sản thế chấp:** tổng tài sản thế chấp hoạt động của khoản vay cộng với phần thưởng tài sản thế chấp đang chờ, tích lũy từ các đợt phân phối

- **Toàn bộ khoản nợ:** tổng nợ hoạt động của khoản vay cộng với phần thưởng nợ đang chờ, tích lũy từ các đợt phân phối

- **Tỷ lệ thế chấp riêng lẻ (ICR):** ICR của một khoản vay là tỷ lệ giữa giá trị đô la của toàn bộ tài sản thế chấp theo giá collateral:USD hiện tại và toàn bộ khoản nợ của khoản vay đó

- **Tỷ lệ thế chấp danh nghĩa (ICR danh nghĩa, NICR):** ICR danh nghĩa của một khoản vay bằng toàn bộ tài sản thế chấp (tính theo đơn vị tài sản thế chấp) nhân với 100e18 rồi chia cho toàn bộ khoản nợ.

- **Toàn bộ tài sản thế chấp của hệ thống:** tổng tài sản thế chấp trong ActivePool và DefaultPool

- **Toàn bộ khoản nợ của hệ thống:** tổng nợ trong ActivePool và DefaultPool

- **Tỷ lệ thế chấp tổng (TCR):** tỷ lệ giữa giá trị đô la của toàn bộ tài sản thế chấp của hệ thống theo giá collateral:USD hiện tại và toàn bộ khoản nợ của hệ thống

- **Tỷ lệ thế chấp tới hạn (CCR):** 150%. Khi TCR thấp hơn CCR, hệ thống chuyển sang Recovery Mode.

- **Quy đổi:** hành động hoán đổi token MUSD với hệ thống để nhận lại lượng tài sản thế chấp có giá trị tương đương. Bất kỳ tài khoản nào có số dư token MUSD đều có thể quy đổi, dù có phải là người vay hay không.

- **Thanh lý:** hành động buộc đóng một khoản vay thiếu tài sản thế chấp và phân bổ lại tài sản thế chấp cùng khoản nợ của khoản vay đó. Khi Stability Pool đủ lớn, khoản nợ bị thanh lý được bù trừ bằng Stability Pool và tài sản thế chấp được phân phối cho những người gửi. Nếu khoản nợ bị thanh lý không thể bù trừ bằng Pool, hệ thống sẽ phân bổ lại trực tiếp tài sản thế chấp và khoản nợ bị thanh lý cho các khoản vay đang hoạt động có tỷ lệ thế chấp >110%. Chức năng thanh lý không cần cấp phép và công khai cho mọi người — bất kỳ ai cũng có thể thanh lý một khoản vay thiếu tài sản thế chấp, hoặc thanh lý hàng loạt nhiều khoản vay.

- **Tài sản thế chấp dư:** Tài sản thế chấp dư là phần tài sản thế chấp thừa mà người vay có thể nhận lại trong trường hợp khoản vay của họ đã bị quy đổi toàn bộ.

- **Bù trừ:** Việc hủy khoản nợ bị thanh lý bằng MUSD trong Stability Pool, đồng thời giao tài sản thế chấp bị thanh lý cho những người gửi vào Stability Pool theo tỷ lệ khoản gửi của họ.

- **Bồi hoàn gas:** Một khoản hoàn trả bằng MUSD và tài sản thế chấp, được tự động trả cho bên gọi hàm thanh lý, nhằm bảo đảm việc thanh lý vẫn có lãi khi thị trường căng thẳng. Mức 200 MUSD được đặt dựa trên giá gas và thời gian tạo khối của Ethereum. Cơ chế này được thiết kế để những người thanh lý không bị cản trở bởi chi phí gas có thể cao.
