---
title: Tổng quan về Mezo Pools
description: Tìm hiểu về Mezo Pools và cách cung cấp thanh khoản
topic: users
---

[Mezo Pools](https://mezo.org/explore/pools) là động cơ cốt lõi của hệ sinh thái Mezo, hoạt động như các nguồn dự trữ thanh khoản onchain tự động cho Mezo Pools. Mỗi pool chứa một cặp gồm hai token khác nhau, cho phép giao dịch phi tập trung tức thì. Thay vì dựa vào sổ lệnh truyền thống để khớp người mua với người bán, người dùng giao dịch trực tiếp với lượng thanh khoản có trong pool.

![Sơ đồ Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

[Mezo Pools](https://mezo.org/explore/pools) cho phép bạn kiếm phí bằng cách cung cấp thanh khoản cho các giao dịch swap token. Khi bạn gửi hai token vào một pool, các nhà giao dịch có thể swap giữa hai token đó, và bạn nhận được một phần phí giao dịch.

Khi người dùng gửi vào pool các token cần thiết với giá trị tương ứng theo tỷ lệ, họ trở thành nhà cung cấp thanh khoản (LP). Hành động này là nền tảng cho hoạt động của hệ thống, vì nó làm tăng độ sâu thanh khoản sẵn có và giảm trượt giá (slippage) cho các nhà giao dịch. Đổi lại cho phần đóng góp, LP nhận được LP token. Các LP token này đại diện cho tỷ phần tương ứng của LP trong tổng tài sản của pool. Theo thuật toán, các token này cho phép người nắm giữ hưởng một phần phí giao dịch do pool tạo ra và là cơ chế để quy đổi lại các tài sản gốc đã gửi.

Mezo cung cấp ba loại pool, được tối ưu cho các trường hợp sử dụng khác nhau:

* **Pool biến động**: Thiết kế cho các cặp tài sản có giá không tương quan, như BTC và MUSD.
* **Pool ổn định**: Thiết kế cho các tài sản có giá trị tương quan chặt chẽ, như MUSD và USDC. Các pool này dùng một công thức chuyên biệt để giảm đáng kể trượt giá khi giao dịch giữa các tài sản tương tự nhau.
* **Pool thanh khoản tập trung (CL)**: Cho phép bạn cung cấp thanh khoản trong một khoảng giá tùy chọn thay vì trên toàn bộ đường cong, giúp cải thiện đáng kể hiệu quả sử dụng vốn. Vị thế CL được biểu diễn dưới dạng NFT (ERC-721) thay vì LP token có thể hoán đổi. Xem [Thanh khoản tập trung](/docs/vn/docs/users/mezo-earn/pools/concentrated-liquidity) để biết chi tiết.

## Tìm hiểu về LP token

Khi bạn gửi tài sản vào một [Mezo Pool](https://mezo.org/explore/pools), hợp đồng sẽ đúc và gửi cho bạn LP token. Đây là các token ERC20 tiêu chuẩn, thể hiện tỷ lệ sở hữu của bạn trong tổng dự trữ của pool.

Số LP token bạn nhận được dựa trên tỷ phần của bạn trong pool. Với lần gửi đầu tiên vào một pool mới, số lượng này được tính bằng sqrt(x * y), trong đó x và y là số lượng của hai token được gửi.

Với mỗi giao dịch swap được thực hiện qua pool, một khoản phí giao dịch (ví dụ 0,30% ở pool biến động) được thu trên tài sản đầu vào. Khoản phí này ngay lập tức được tách riêng vào một hợp đồng khác, và các nhà cung cấp thanh khoản của pool đó có thể nhận.

Để lấy lại phần tài sản gốc của mình, bạn phải "đốt" LP token; tuy nhiên, bạn có thể nhận phí bất cứ lúc nào. Khi bạn nhận lại các tài sản đã gửi ban đầu, LP token của bạn được trả lại cho hợp đồng thông minh để đổi lấy phần tương ứng của bạn trong hai token của pool.

## Lợi thế của Mezo Pools

Giao thức Mezo được thiết kế mà không dựa vào các cấu trúc tài chính truyền thống như sổ lệnh. Dù sổ lệnh hoạt động hiệu quả trong tài chính tập trung, chúng lại gây ra nhiều thách thức đáng kể trong môi trường phi tập trung, thường đòi hỏi các nhà tạo lập thị trường chuyên nghiệp quản lý tích cực và hạ tầng tập trung để lưu trữ và khớp lệnh.

[Mezo Pools](https://mezo.org/explore/pools) được thiết kế riêng cho môi trường phi tập trung, tận dụng những thế mạnh đặc thù của công nghệ blockchain:

* **Tự vận hành và không cần cấp phép**: Mỗi pool là một hợp đồng thông minh truy cập mở. Bất kỳ người dùng hay ứng dụng nào cũng có thể tương tác mà không cần cấp phép bằng cách gọi các hàm như swap() để giao dịch hoặc mint() để cung cấp thanh khoản.
* **Khả năng nâng cao**: Mezo Pool hoạt động như một oracle TWAP (Time-Weighted Average Price — giá trung bình theo thời gian) onchain, cung cấp dữ liệu giá chống thao túng cho các giao thức khác. Các pool cũng hỗ trợ flash loan, cho phép thực hiện các chiến lược DeFi phức tạp trong một giao dịch duy nhất.

Những lợi thế kiến trúc này là nền tảng cho sứ mệnh chính của Mezo: xây dựng một nền kinh tế tuần hoàn vững chắc cho Bitcoin. Bằng cách cho phép người dùng mang BTC của mình, dùng làm tài sản thế chấp (ví dụ qua Mezo Borrow để đúc MUSD), rồi đưa cả hai tài sản vào các pool thanh khoản, giao thức biến Bitcoin từ một công cụ lưu trữ giá trị thụ động thành một công cụ chủ động tạo lợi suất. Điều này tạo ra một vòng lặp tự duy trì, trong đó việc cung cấp thanh khoản không chỉ mang lại lợi nhuận cho người dùng mà còn làm sâu thêm thị trường cho các tài sản được bảo chứng bằng Bitcoin, giúp toàn bộ hệ sinh thái có thanh khoản tốt hơn và hữu ích hơn.

## Bắt đầu

### Bắt đầu với 3 bước đơn giản

Sẵn sàng trở thành nhà cung cấp thanh khoản? Bắt đầu rất dễ dàng. Truy cập [Mezo Pools](https://mezo.org/explore/pools) để bắt đầu.

1. **Chuẩn bị tài sản**: Để cung cấp thanh khoản, bạn cần cả hai tài sản trong một cặp với giá trị bằng nhau (ví dụ `$50 of BTC` và `$50 of MUSD`).
   * Cần MUSD? Đúc MUSD bằng BTC của bạn trên Mezo Borrow.
   * Cần tài sản khác hoặc MUSD? Dùng [Mezo Pools](https://mezo.org/explore/pools) để giao dịch lấy chúng.
2. **Thêm thanh khoản**: Mở [trang Pools trên Mezo Explore](https://mezo.org/explore/pools). Chọn pool bạn muốn, nhập số lượng muốn gửi và xác nhận giao dịch. Bạn sẽ nhận được LP token trong ví, đại diện cho tỷ phần của bạn trong pool.
3. **Stake và kiếm thưởng (sắp ra mắt)**: Khi tính năng staking đi vào hoạt động, bạn chỉ cần quay lại [trang Pools](https://mezo.org/explore/pools), chọn vị thế của mình và stake LP token để bắt đầu kiếm thêm phần thưởng. Hãy đón chờ.

## Tài nguyên cho nhà phát triển

Để tích hợp [Mezo Pools](https://mezo.org/explore/pools) vào ứng dụng của bạn, hãy xem [Cung cấp thanh khoản](../../../developers/getting-started/) trong tài liệu dành cho nhà phát triển.
