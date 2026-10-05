---
title: Thuật ngữ
description: Bảng thuật ngữ của Mezo Earn
topic: users
---

Dưới đây là danh sách các thuật ngữ liên quan đến hệ thống Mezo Earn.

---

## veBTC

Vote-escrowed BTC (BTC ký quỹ để bỏ phiếu). Một NFT đại diện cho lượng Bitcoin đã khóa, mang lại quyền biểu quyết cơ bản (hệ số nhân 1x) và quyền nhận phí trong Mezo Earn. Trọng số phiếu bầu suy giảm tuyến tính trong suốt thời hạn khóa. Thời hạn khóa tối đa là 28 ngày.

## veMEZO

Vote-escrowed MEZO (MEZO ký quỹ để bỏ phiếu). Một NFT đại diện cho lượng token MEZO đã khóa, có thể boost quyền biểu quyết của veBTC lên tới 5x, đồng thời tự bỏ phiếu trên các gauge boost veBTC và [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges). veMEZO không có trọng số quản trị riêng và không thể bỏ phiếu cho gauge staking nếu không có veBTC. Thời hạn khóa tối đa là 4 năm.

## Boost

Hệ số nhân áp dụng cho một vị thế veBTC khi phiếu bầu veMEZO được hướng vào vị thế đó. Không có boost, veBTC hoạt động ở mức 1x. Với boost tối đa, veBTC hoạt động ở mức 5x. Mức boost phụ thuộc vào tỷ phần tương đối của bạn trong tổng lượng veBTC và tổng lượng veMEZO của hệ thống.

## Trọng số được boost

Trọng số phiếu bầu kết hợp khi veBTC và veMEZO được ghép cặp. Được tính bằng trọng số veBTC của bạn nhân với hệ số boost (từ 1x đến 5x). Trọng số được boost quyết định phần phí bạn nhận được và mức ảnh hưởng của bạn đối với lượng phát thải.

## Epoch

Chu kỳ 7 ngày chi phối việc bỏ phiếu và phân phối phần thưởng. Epoch bắt đầu vào mỗi Thứ Năm lúc 00:00 UTC.

## Gauge

Một hợp đồng thông minh nhận và phân phối phần thưởng dựa trên phiếu bầu. Gauge nhận được càng nhiều trọng số phiếu bầu thì phần thưởng của nó trong epoch đó càng lớn.

## Khóa

Hành động cam kết BTC hoặc MEZO trong một khoảng thời gian nhất định để nhận veBTC hoặc veMEZO. Khóa càng lâu thì trọng số phiếu bầu ban đầu càng cao.

## Gauge staking

Gauge gắn với một token staking (chẳng hạn LP token hoặc biên nhận tiết kiệm MUSD). Người stake kiếm lượng phát thải MEZO; người bỏ phiếu kiếm phí giao dịch.

## Gauge boost veBTC

Gauge gắn với một NFT veBTC cụ thể. Người nắm giữ veMEZO bỏ phiếu cho các gauge này để boost vị thế veBTC đó, đổi lại họ nhận khoản khuyến khích.

## Gauge không staking

Gauge không có token staking, được bỏ phiếu bằng veMEZO. Lượng phát thải của gauge này được chuyển đến một đích do chính gauge chỉ định thay vì trả cho người stake trên Mezo. Việc bỏ phiếu cho loại gauge này độc lập với việc bỏ phiếu gauge veBTC và với cơ chế ghép cặp boost.

## MEZO Gauge

Gauge không staking điều hướng lượng phát thải MEZO đến các pool thanh khoản MUSD bên ngoài Mezo — Curve và Uniswap trên Ethereum, và Aerodrome trên Base. Xem [MEZO Gauges](/docs/vn/docs/users/mezo-earn/vote/mezo-gauges).

## Trọng số phiếu bầu

Mức ảnh hưởng của một vị thế khi bỏ phiếu cho gauge. Với veBTC, được tính bằng lượng BTC đã khóa nhân với thời hạn khóa còn lại, chia cho thời hạn khóa tối đa. Với veMEZO, áp dụng cùng công thức nhưng với thời hạn khóa tối đa 4 năm.

## Suy giảm

Sự giảm dần của trọng số phiếu bầu khi khoản khóa tiến gần đến thời điểm hết hạn. Có thể khôi phục bằng cách gia hạn khoản khóa.

## Poke

Giao dịch làm mới trọng số được boost của một vị thế veBTC. Cần thực hiện sau khi thay đổi phiếu bầu veMEZO, gia hạn khoản khóa hoặc thêm BTC. Nếu không poke, các thay đổi về boost sẽ không có hiệu lực.

## Thị trường ghép cặp

Cơ chế kinh tế trong đó người nắm giữ veBTC có thể thu hút phiếu bầu veMEZO bằng cách đăng khoản khuyến khích trên gauge boost của mình, còn người nắm giữ veMEZO có thể kiếm lợi suất bằng cách bỏ phiếu cho những gauge có khoản khuyến khích hấp dẫn.

## Khoản khuyến khích

Phần thưởng được đăng trên gauge để thu hút phiếu bầu. Các giao thức hoặc người dùng gửi khoản khuyến khích (bằng bất kỳ token ERC-20 nào) để thu hút quyền biểu quyết về những gauge cụ thể.

## Rebase

Các khoản phân phối chống pha loãng dành cho người nắm giữ veMEZO. Khi tỷ lệ khóa (nguồn cung veMEZO / tổng cung MEZO) thấp, một phần lớn hơn của lượng phát thải sẽ được dành cho rebase, giúp bảo vệ những người khóa sớm khỏi bị pha loãng.

## Splitter

Hợp đồng chia lượng phát thải giữa hai đích (ví dụ: validator và hệ sinh thái). Tỷ lệ phân chia hiện được cố định và khóa thông qua quản trị.

## MUSD

Stablecoin được bảo chứng bằng bitcoin của Mezo. Người dùng có thể vay MUSD bằng tài sản thế chấp BTC của mình.

## MUSD Savings Rate Gauge

Gauge staking dành cho vault tiết kiệm MUSD. Người dùng gửi MUSD vào vault tiết kiệm có thể stake token biên nhận của mình để kiếm lượng phát thải MEZO, trong khi người bỏ phiếu cho gauge này kiếm lợi suất MUSD.

## Lượng phát thải

Token MEZO mới được phân phối mỗi epoch cho các gauge staking, validator và người nắm giữ veMEZO (dưới dạng rebase). Lượng phát thải tuân theo lịch giảm một nửa (halving): 25% tính theo năm trong các năm 0-2, giảm dần xuống khoảng 2% sau năm thứ 8.

## Chain Splitter

Splitter đầu tiên trong hệ thống phân cấp lượng phát thải. Kiểm soát tỷ lệ phần trăm lượng phát thải dành cho validator (ban đầu là 20%) so với phần còn lại của hệ thống.

## Ecosystem Splitter

Splitter thứ hai. Điều hướng lượng phát thải không dành cho validator đến các gauge staking. Tỷ lệ này hiện được cố định và khóa thông qua quản trị.
