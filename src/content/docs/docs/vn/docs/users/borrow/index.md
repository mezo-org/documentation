---
title: Tổng quan về stablecoin MUSD
description: 'Mọi điều bạn cần biết về MUSD, stablecoin được bảo đảm bằng Bitcoin của Mezo.'
topic: users
---

## MUSD là gì?

Từ trước đến nay, người nắm giữ Bitcoin luôn phải đối mặt với một lựa chọn bất khả: bán BTC để trang trải chi phí, tin tưởng giao quyền lưu ký bitcoin cho một bên cho vay tập trung, hoặc nắm giữ vô thời hạn và bỏ lỡ nguồn thanh khoản mà bạn cần cho cuộc sống.

MUSD thay đổi điều đó. Đây là một stablecoin không cần cấp phép, được bảo đảm 100% bằng dự trữ Bitcoin, được thiết kế để duy trì tỷ giá neo 1:1 với đô la Mỹ. Hãy đúc MUSD bằng cách nạp BTC làm tài sản thế chấp, chi tiêu ở bất cứ đâu chấp nhận đô la, và giữ nguyên toàn bộ mức tiếp xúc với Bitcoin trong suốt thời gian đó. Khi xong việc, hãy hoàn trả lượng MUSD đã vay cùng tiền lãi và nhận lại BTC của bạn.

![MUSD cho phép bạn vừa giữ vừa chi tiêu BTC](/docs/images/musd/musd-keep-and-spend-btc.png)

### Vì sao chọn MUSD?

1. **Không bao giờ phải bán Bitcoin** — Vay tối đa 90% giá trị lượng BTC bạn nắm giữ. Giữ nguyên sats của bạn, khai thác giá trị tài sản Bitcoin, và trả khoản vay bất cứ khi nào bạn muốn.
2. **Lãi suất cố định từ 1–5%** — Lãi suất của bạn được cố định khi bạn mở khoản vay và không bao giờ thay đổi. Không có lãi suất thả nổi, không có bất ngờ. Hãy so sánh với mức APR 7–20% tại các ngân hàng truyền thống hoặc 8–9% trên các nền tảng DeFi khác.
3. **Hoàn toàn onchain và có thể kiểm chứng** — Mọi khoản vay và từng đô la tài sản thế chấp đều hiển thị onchain, 24/7. Không có dự trữ thiếu minh bạch, không có bên lưu ký — chỉ có Bitcoin trong một vault hợp đồng thông minh. [Xem tài sản thế chấp theo thời gian thực trên Mezo Explorer](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Không cần cấp phép** — Không kiểm tra tín dụng, không cần nộp đơn, không có mức tối thiểu nào ngoài ngưỡng 1.800 MUSD. Nếu có BTC, bạn có thể vay.

## Cách MUSD hoạt động

![Vòng đời của MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD sử dụng mô hình CDP (vị thế nợ có thế chấp — collateralized debt position). Mọi MUSD đang lưu hành đều có thể quy đổi lấy Bitcoin, và \$1 tài sản thế chấp BTC có thể dùng để đúc 1 MUSD.

Mô hình đúc và quy đổi này chính là điều giữ MUSD neo ở mức \$1 — ngay cả trong thị trường biến động:

* **MUSD giao dịch dưới \$1** — Nhà kinh doanh chênh lệch giá mua MUSD giá chiết khấu trên thị trường và quy đổi lấy lượng BTC cơ sở trị giá \$1, trả phí quy đổi 0,75%; việc này vẫn có lãi cho đến khi MUSD đạt \$0,995.
* **MUSD giao dịch trên \$1** — Nhà kinh doanh chênh lệch giá đúc MUSD mới bằng cách cung cấp BTC cho giao thức và bán trên thị trường để kiếm lời. Việc này vẫn có lãi cho đến khi MUSD trở về \$1,005.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Để đảm bảo tỷ giá neo được duy trì khi thị trường biến động, mọi vị thế vay phải duy trì tỷ lệ thế chấp trên 110%. Hệ thống có sẵn các cơ chế thanh lý và một stability pool để thực thi điều này — vì vậy ngay cả với LTV cao, giao thức vẫn an toàn và vững vàng.

Để biết chi tiết về cách các cơ chế an toàn này hoạt động, hãy xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).

### Lợi ích của mô hình MUSD

**Thanh khoản từ phía cung**

Không giống các giao thức cho vay hai chiều truyền thống vốn cần một pool đô la có sẵn và dùng lãi suất thả nổi để cân bằng cung cầu, MUSD được đúc trực tiếp từ tài sản thế chấp Bitcoin. Thanh khoản tăng trưởng tự nhiên khi ngày càng nhiều người dùng nạp BTC — hệ thống tự tạo ra nguồn cung của mình, vì vậy luôn có thanh khoản cho người vay mới.

**Lãi suất vay cố định và thấp**

Vì MUSD được đúc thay vì vay từ một pool, không có sự cạnh tranh lãi suất đẩy chi phí lên. Kết quả: lãi suất cố định thấp nhất chỉ 1%, được giữ nguyên trong suốt thời hạn khoản vay. Điều đó khiến MUSD rẻ hơn đáng kể so với các thị trường cho vay thông thường, nơi lãi suất thả nổi và có thể tăng vọt khó lường.

**Hiệu quả sử dụng vốn**

MUSD hỗ trợ tỷ lệ thế chấp tối thiểu chỉ 110%, nghĩa là người vay có thể tiếp cận tối đa 90% giá trị Bitcoin của mình. Đối với người nắm giữ Bitcoin, đây là cách hiệu quả nhất về vốn để khai thác thanh khoản mà không phải bán. Dù vậy, tỷ lệ thế chấp cao hơn mang lại vùng đệm an toàn lớn hơn — hãy luôn cân nhắc mức độ rủi ro của vị thế.

## MUSD so với tài chính truyền thống

Với người nắm giữ Bitcoin, hệ thống tài chính luôn đồng nghĩa với sự thỏa hiệp: phí cao, lưu ký thiếu minh bạch, lãi suất thả nổi và các bên trung gian tập trung. MUSD mang lợi ích của tài chính onchain — minh bạch, chi phí thấp, tự lưu ký — trực tiếp đến Bitcoin của bạn.

![MUSD so với tài chính truyền thống](/docs/images/musd/musd-vs-traditional.png)

Không phí chuyển khoản, không chênh lệch tỷ giá ngoại hối, không phí tài khoản hằng tháng. Chỉ có Bitcoin của bạn trong một vault hợp đồng thông minh phi tập trung, làm việc cho bạn.

## So sánh MUSD với các stablecoin hiện có

Thị trường stablecoin rất đa dạng, từ stablecoin được bảo đảm bằng tiền pháp định (USDT và USDC), stablecoin tổng hợp (USDe), cho đến các CDP thuật toán khác (Liquity, Sky). Dù các stablecoin này đã tăng trưởng đáng kể trong vài năm qua, thị trường vẫn còn một khoảng trống dành cho Bitcoiner.

MUSD hướng tới giải quyết những rủi ro này nhờ được bảo đảm thuần túy bằng Bitcoin.

**Stablecoin được bảo đảm bằng tiền pháp định**

Các stablecoin được bảo đảm bằng tiền pháp định như USDT và USDC chiếm hơn 90% thị trường stablecoin hiện nay. Chúng không chỉ hoàn toàn trái ngược với tinh thần của crypto, vì được bảo đảm bằng đô la Mỹ, mà lượng dự trữ đô la còn phải do một thực thể duy nhất nắm giữ an toàn.

Tether, đơn vị phát hành USDT (nguồn cung ~\$150 tỷ), chưa bao giờ công bố một cuộc kiểm toán bằng chứng dự trữ. Công ty này ghi nhận lợi nhuận \$13 tỷ trong năm 2024.

Circle, một công ty Mỹ phát hành USDC, có khả năng [đưa địa chỉ vào danh sách đen theo quyết định riêng](https://www.circle.com/legal/usdc-risk-factors) và [trả tiền cho các sàn giao dịch để nắm giữ tài sản của họ](https://x.com/inkymaze/status/1907187020293980599?s=46). Khi nền kinh tế Mỹ chuyển dần lên onchain, đây trở thành một điểm tập trung hóa nguy hiểm.

**Stablecoin tổng hợp**

Các stablecoin tổng hợp (ví dụ: USDe) thường phụ thuộc vào sàn giao dịch tập trung và các giải pháp lưu ký để duy trì giá trị. Rủi ro của sự phụ thuộc này đã lộ rõ khi [Bybit gần đây hứng chịu vụ hack lớn nhất từng được ghi nhận](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Ngoài ra, các stablecoin được bảo đảm tổng hợp bằng lợi suất từ giao dịch chênh lệch cơ sở (basis trade) có tính khó lường và chưa được kiểm chứng. Tỷ lệ funding thay đổi liên tục, và các hệ thống này chưa được thử thách trước nhiều áp lực thị trường bên ngoài khác nhau.

**Đồng tiền kiểu CDP như USDS**

Các stablecoin dựa trên CDP thường thế chấp vị thế của mình bằng một rổ token, bao gồm các stablecoin được bảo đảm bằng tiền pháp định và nhiều altcoin khác nhau.

Dù sự đa dạng hóa này có thể phân tán rủi ro, nó cũng mang lại những thách thức đáng kể. Tài sản thế chấp, thường gồm các tài sản biến động như token liên quan đến ETH hoặc các stablecoin khác, có thể phản ứng khó lường khi thị trường căng thẳng và nhiều khi biến động mạnh hơn đáng kể so với BTC. Điều này có thể làm suy yếu tỷ giá neo của stablecoin và khiến quy trình quy đổi và thanh lý trở nên phức tạp.
