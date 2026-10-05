---
title: Câu hỏi thường gặp về bỏ phiếu
description: Các câu hỏi thường gặp về việc bỏ phiếu trên Mezo
topic: users
---

## Câu hỏi chung

**Tôi có cần bỏ phiếu mỗi tuần không?**

Không. Phân bổ phiếu bầu của bạn được giữ nguyên qua các epoch cho đến khi bạn thay đổi hoặc đặt lại, và vẫn tiếp tục kiếm phần phí và khoản khuyến khích tương ứng mỗi epoch. Bỏ phiếu lại là cách để thay đổi phân bổ, không phải để duy trì phân bổ.

**Tôi có thể thay đổi phiếu bầu trong một epoch không?**

Mỗi khoản khóa có thể bỏ phiếu một lần mỗi epoch. Nếu khoản khóa chưa bỏ phiếu trong epoch này, bạn có thể gửi một cách phân chia mới vào bất kỳ thời điểm nào trong khoảng thời gian bỏ phiếu, và nó sẽ thay thế phân bổ hiện tại của bạn. Khi phiếu bầu đã được xác nhận, phân bổ của khoản khóa đó sẽ được cố định cho đến thời điểm chuyển epoch tiếp theo (Thứ Năm lúc 00:00 UTC).

**Tôi có thể chia phiếu bầu cho nhiều gauge không?**

Hoàn toàn được. Bạn có thể phân bổ quyền biểu quyết theo bất kỳ cách nào bạn muốn — 50% cho BTC/MUSD, 30% cho MUSD Savings Rate, 20% cho một pool khác.

**Bỏ phiếu bằng veBTC và bằng veMEZO khác nhau thế nào?**

Người nắm giữ veBTC bỏ phiếu cho gauge staking. Họ kiếm phí giao dịch, khoản khuyến khích và phí cầu nối thụ động.

Người nắm giữ veMEZO bỏ phiếu cho gauge boost veBTC. Họ kiếm khoản khuyến khích do những người nắm giữ veBTC muốn có boost đăng, cộng với các khoản phân phối rebase.

---

## Boost và veMEZO

**Boost là gì?**

Boost là hệ số nhân (từ 1x đến 5x) khuếch đại quyền biểu quyết veBTC của bạn. Boost đến từ phiếu bầu veMEZO được hướng vào gauge boost của vị thế veBTC của bạn.

**Tôi có cần veMEZO để kiếm lợi nhuận khi nắm giữ veBTC không?**

Không. veBTC không có boost vẫn kiếm được phí giao dịch, khoản khuyến khích và phí cầu nối thụ động — chỉ là ở hệ số nhân 1x. veMEZO giúp tăng quyền biểu quyết thực tế của bạn (lên tới 5x) nhưng không bắt buộc.

**Làm thế nào để vị thế veBTC của tôi được boost?**

Có hai cách:
1. **Tự boost:** Khóa MEZO thành veMEZO và hướng nó vào chính vị thế của bạn
2. **Thu hút boost:** Đăng khoản khuyến khích trên gauge boost của bạn để thu hút phiếu bầu veMEZO từ người khác

**Người nắm giữ veMEZO kiếm được gì?**

Người nắm giữ veMEZO kiếm được:
- Khoản khuyến khích được đăng trên những gauge boost mà họ bỏ phiếu
- Các khoản phân phối rebase giúp bảo vệ khỏi bị pha loãng

Họ **không** kiếm phí giao dịch, doanh thu MUSD hay phí cầu nối — những khoản đó thuộc về người nắm giữ veBTC.

**Boost tối đa được tính như thế nào?**

Bạn đạt boost 5x khi tỷ phần của bạn trong tổng lượng veMEZO bằng hoặc vượt tỷ phần của bạn trong tổng lượng veBTC. Vị thế BTC càng lớn thì càng cần nhiều veMEZO tương ứng để đạt mức tối đa.

**Điều gì xảy ra nếu tôi có veMEZO nhưng không có veBTC?**

Bạn vẫn có thể kiếm lợi suất bằng cách bỏ phiếu cho gauge boost của người dùng khác. Bạn kiếm được khoản khuyến khích mà họ đã đăng, tương ứng với tỷ phần phiếu bầu của bạn trên gauge đó.

---

## Khoản khuyến khích

**Khoản khuyến khích hoạt động như thế nào?**

Các giao thức hoặc người dùng gửi khoản khuyến khích (incentive) vào những gauge cụ thể để thu hút phiếu bầu. Khi epoch kết thúc, khoản khuyến khích được phân phối theo tỷ lệ cho tất cả người bỏ phiếu trên gauge đó dựa trên trọng số phiếu bầu. Khoản khuyến khích được cộng thêm vào phí giao dịch.

**Tôi có thể đăng khoản khuyến khích trên gauge boost của chính mình không?**

Có. Đây là cách thu hút phiếu bầu veMEZO về vị thế veBTC của bạn nếu bạn muốn có boost nhưng không tự nắm giữ MEZO.

**Những token nào có thể dùng làm khoản khuyến khích?**

Bất kỳ token ERC-20 nào cũng có thể được gửi làm khoản khuyến khích.

---

## Quyền biểu quyết

**Quyền biểu quyết của tôi có giảm theo thời gian không?**

Có. Quyền biểu quyết suy giảm tuyến tính khi khoản khóa tiến gần đến thời điểm hết hạn. Nếu bạn khóa 28 ngày, vào ngày thứ 14 bạn sẽ còn khoảng 50% quyền biểu quyết ban đầu. Gia hạn khoản khóa sẽ khôi phục trọng số đầy đủ.

**Nếu tôi có nhiều vị thế veBTC thì sao?**

Bạn có thể bỏ phiếu bằng từng vị thế riêng biệt. Mỗi NFT có quyền biểu quyết riêng và có thể được phân bổ cho các gauge khác nhau hoặc cho cùng các gauge — tùy bạn lựa chọn.

**Điều gì xảy ra nếu tôi không gia hạn khoản khóa?**

Quyền biểu quyết của bạn tiếp tục suy giảm cho đến khi về 0 lúc hết hạn. Khi đó, bạn không thể bỏ phiếu hay kiếm phần thưởng nữa. Bạn phải gia hạn khoản khóa trước khi nó hết hạn hoặc tạo một khoản khóa mới.

**Tôi có thể khóa veMEZO trong bao lâu?**

Thời hạn khóa tối đa của veMEZO là 4 năm (so với 28 ngày của veBTC). Thời hạn khóa dài hơn phản ánh vai trò của MEZO là tài sản điều phối của chuỗi.

---

## Poke

**Poke là gì?**

Poke là giao dịch làm mới quyền biểu quyết của vị thế để phản ánh trạng thái hiện tại của nó. Nếu không poke, các thay đổi về boost sẽ không có hiệu lực.

**Khi nào tôi cần poke?**

Poke sau khi:
- Nhận được phiếu bầu veMEZO mới trên gauge boost của bạn
- Hướng veMEZO của chính bạn vào vị thế của bạn
- Nhận các khoản phân phối rebase veMEZO
- Gia hạn thời hạn khóa
- Thêm BTC/MEZO vào khoản khóa

**Ai cũng có thể poke vị thế của tôi phải không?**

Đúng vậy. Poke không cần cấp phép. Người khác có thể poke vị thế của bạn nếu quyền biểu quyết của bạn đã suy giảm đáng kể.

---

## Phần thưởng

**Khi nào tôi có thể nhận phần thưởng?**

Phí và khoản khuyến khích có thể được nhận khi epoch kết thúc. Trong epoch, bạn có thể xem phần thưởng ước tính đang tích lũy, nhưng chỉ có thể nhận sau khi epoch hoàn tất.

**Tôi có kiếm phần thưởng từ những pool mà tôi không bỏ phiếu không?**

Không. Bạn chỉ kiếm phí và khoản khuyến khích từ những gauge cụ thể mà bạn đã phân bổ quyền biểu quyết. Nếu bạn bỏ 100% phiếu cho BTC/MUSD, bạn không nhận được phần thưởng nào từ pool MUSD/USDC.

Ngoại lệ: phí cầu nối thụ động được phân phối cho mọi người nắm giữ veBTC tương ứng với trọng số được boost của họ, bất kể có bỏ phiếu hay không.

**Rebase là gì và làm thế nào để nhận?**

Rebase là các khoản phân phối chống pha loãng dành cho người nắm giữ veMEZO. Khi tỷ lệ khóa thấp, một phần lượng phát thải hằng tuần sẽ được dành cho rebase. Bạn nhận rebase riêng — chúng được cộng vào trọng số vị thế veMEZO của bạn.

---

## Gauge

**Trọng số gauge được tính như thế nào?**

Trọng số gauge = tổng quyền biểu quyết được phân bổ cho gauge đó / tổng quyền biểu quyết được phân bổ cho tất cả các gauge. Nếu gauge BTC/MUSD nhận 1.000 quyền biểu quyết và tất cả các gauge cộng lại nhận 10.000, BTC/MUSD sẽ nhận 10% lượng phát thải trong epoch đó.

**Gauge có thể không nhận được lượng phát thải nào không?**

Có. Nếu không ai bỏ phiếu cho một gauge, gauge đó sẽ không nhận được lượng phát thải nào trong epoch đó. Đây là lý do thị trường khoản khuyến khích tồn tại — các giao thức cần phiếu bầu để thu hút lượng phát thải.

**Gauge boost là gì?**

Mỗi NFT veBTC có gauge boost riêng. Người nắm giữ veMEZO bỏ phiếu cho các gauge này để cung cấp boost cho chính vị thế veBTC đó. Người nắm giữ veBTC có thể đăng khoản khuyến khích trên gauge boost của mình để thu hút phiếu bầu.

**Tôi có thể xem trọng số gauge và khoản khuyến khích hiện tại ở đâu?**

Truy cập [trang Vote](https://mezo.org/vote) để xem trọng số gauge theo thời gian thực, giá trị khoản khuyến khích, APY dự kiến và hiệu suất trong quá khứ.
