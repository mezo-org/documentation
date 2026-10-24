---
title: Câu hỏi thường gặp
description: 'Các câu hỏi thường gặp về Mezo App, validator của Mezo và nhiều chủ đề khác.'
topic: users
---

## Mezo là gì?

Mezo là ứng dụng tài chính Bitcoin giúp mọi người sống nhờ Bitcoin của mình mà không cần tiêu nó. Các tính năng chủ lực gồm Mezo Borrow và MUSD.

## Tôi có thể làm gì với Mezo? 

Mezo xây dựng các sản phẩm giúp BTC trở nên hữu dụng mà bạn không cần tiêu nó. Bạn có thể mở một khoản vay với Mezo Borrow để đúc MUSD, rồi dùng MUSD cho nhiều mục đích khác nhau. Tầm nhìn cuối cùng là tạo ra và dẫn dắt nền kinh tế tuần hoàn Bitcoin, nơi MUSD có thể dùng cho cả những khoản mua sắm lớn như một ngôi nhà lẫn chi tiêu hằng ngày như thực phẩm hay ly cà phê mỗi sáng. 

## Vì sao tôi nên dùng Mezo?

Nếu bạn muốn thực sự sống nhờ Bitcoin của mình mà không cần tiêu nó, Mezo là nơi dành cho bạn. Bằng cách dùng Bitcoin làm tài sản thế chấp, bạn có thể mở hạn mức tín dụng với Mezo Borrow và hưởng lãi suất cố định thấp nhất trong ngành (1-5%). Nhờ đó, bạn có thể tiếp cận BitcoinFi cũng như các mặt hàng thiết yếu hằng ngày có trên Mezo Market. 

## Các tính năng chủ lực của Mezo là gì?

Các sản phẩm của Mezo đi theo sứ mệnh xây dựng một mô hình tài chính được bảo chứng bằng Bitcoin cho số đông, chứ không chỉ cho số ít. Mezo xây dựng sản phẩm để cùng cộng đồng kiến tạo tương lai này. Với định hướng đó, các sản phẩm sau hỗ trợ cách tiếp cận này: 

* Mezo Borrow
* MUSD 
* Mezo Earn (sắp ra mắt)

## Làm thế nào để vay bằng Bitcoin của tôi?

MUSD là stablecoin được bảo chứng bằng Bitcoin của Mezo; 1 MUSD có thể quy đổi lấy lượng BTC trị giá $1. Để vay MUSD, bạn khóa BTC làm tài sản thế chấp.

* Nếu tỷ lệ thế chấp tổng của giao thức vẫn ở mức vững (bảo chứng trên 150%):
  * Khoản vay mới cần mức thế chấp tối thiểu 110% (ví dụ: lượng BTC trị giá $110 cho mỗi 100 MUSD nợ).
  * Nếu tài sản thế chấp của bạn giảm xuống dưới 110%, vị thế của bạn có thể bị thanh lý.
* Nếu tổng mức bảo chứng giảm xuống dưới 150%:
  * Khoản vay mới phải được bảo đảm với mức thế chấp 150%.

## Tôi có thể dùng Mezo cho dApp/dự án của mình như thế nào?

Passport giúp nhà phát triển dễ dàng tích hợp hỗ trợ ví Bitcoin vào các dApp xây dựng trên Mezo. Được xây dựng trên RainbowKit, Passport hỗ trợ các ví Bitcoin phổ biến như Unisat, Xverse và OKX, cùng các ví tương thích EVM như Taho và MetaMask. Gói này bao gồm các hook hỗ trợ để đọc số dư, quản lý kết nối ví và gửi cả giao dịch Bitcoin lẫn giao dịch Mezo. Nếu bạn đã từng dùng RainbowKit hoặc wagmi, việc thiết lập sẽ rất quen thuộc. Bạn có thể làm theo các bước trong README của Mezo Passport để bắt đầu.

## Làm thế nào để đầu tư vào Mezo?

Nếu bạn muốn trở thành nhà đầu tư, vui lòng liên hệ [IR@thesis.co](IR@thesis.co).

## Tôi có thể dùng những ví nào với Mezo?

Bạn có thể dùng các ví tương thích Bitcoin và EVM sau trên Mezo:

Tương thích Bitcoin:

* Unisat
* OKX (không hỗ trợ Ledger)
* Xverse

Tương thích EVM:

* Taho
* MetaMask
* Zerion
* OKX

## Token nào được dùng để trả phí giao dịch?

BTC được dùng để trả phí giao dịch trên Mezo. Bạn có thể có BTC trên Mezo bằng cách nạp BTC trực tiếp từ ví Bitcoin hoặc nạp tBTC từ ví Ethereum của mình. 

## Vì sao một số token tôi sở hữu không hiển thị trong Mezo Explorer?

Đây là hạn chế đã biết của trình lập chỉ mục BlockScout đối với các token có hợp đồng proxy. Các token này sẽ không hiển thị trên EOA của bạn trong [Mezo Explorer](https://explorer.mezo.org/) cho đến khi bạn hoàn tất lần chuyển và phê duyệt đầu tiên với token đó.
