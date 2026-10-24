---
title: Phí và chi phí MUSD
description: Xem tất cả cơ cấu phí và chi phí khi sử dụng MUSD trên Mezo.
topic: users
---

## Tóm tắt phí

| Phí | Mức phí | Thời điểm thu |
| --- | --- | --- |
| **Phí phát hành** | 0,1% lượng MUSD vay | Khi mở hoặc tăng khoản vay |
| **Lãi** | 1–5% APR (cố định khi mở) | Tích lũy trên khoản nợ chưa trả |
| **Phí quy đổi** | 0,75% | Khi đổi MUSD lấy tài sản thế chấp BTC |
| **Phí tái cấp vốn** | 0,02% khoản nợ | Khi tái cấp vốn khoản vay theo lãi suất mới |
| **Khoản gửi gas** | 200 MUSD (cố định) | Khi mở khoản vay (được hoàn lại khi đóng) |

## Phân phối phí

:::note
Phí được chia cho hai đích: **(1)** trả khoản vay khởi động của giao thức và **(2)** MUSD Savings Vault. Tỷ lệ chia ban đầu là 50/50 và có thể được điều chỉnh qua quản trị thông qua MUSD splitter. Tối thiểu 50% phí phải được dùng để trả khoản vay cho đến khi khoản vay khởi động được trả hết. Sau khi trả hết, toàn bộ phí sẽ chảy vào Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Phí lãi (1–5% APR)

Lãi của các khoản vay [MUSD](https://mezo.org/feature/musd) được cố định trong suốt thời hạn khoản vay. Khi hạn mức tín dụng được tăng thêm, phần tín dụng mới sẽ áp dụng lãi suất hiện hành.

Khi ra mắt, phí lãi được dùng để cấp vốn cho stability pool thuộc ngân quỹ MUSD, dùng để chi trả cho các đợt thanh lý và nợ xấu.

## Phí quy đổi (0,75%)

Khoản phí 0,75% được khấu trừ từ lượng BTC mà người quy đổi nhận được khi họ đổi MUSD lấy tài sản thế chấp trong quá trình [quy đổi](/docs/vn/docs/users/borrow/liquidation-mechanics#quy-đổi-%EF%B8%8F). Phí này do người quy đổi trả, không phải người vay có khoản vay bị quy đổi.

Khi ra mắt, phí quy đổi được dùng để cấp vốn cho stability pool thuộc ngân quỹ MUSD, dùng để chi trả cho các đợt thanh lý và nợ xấu.

## Phí phát hành (0,1%)

Phí phát hành được trả khi mở một khoản vay MUSD hoặc khi người có khoản vay vay thêm MUSD. Mức phí là 0,1% số tiền vay và được trả bằng MUSD. Một khoản vay \$10.000 MUSD sẽ chịu phí phát hành \$10, trả bằng MUSD. Nếu tăng khoản vay, bạn trả phí phát hành trên lượng MUSD vay thêm.

## Phí tái cấp vốn (0,02% khoản nợ)

Phí tái cấp vốn phát sinh khi người có khoản vay MUSD yêu cầu cập nhật lãi suất của khoản vay. Người vay có thể muốn tái cấp vốn nếu lãi suất dành cho khoản vay mới tốt hơn lãi suất cố định của khoản vay hiện tại. Tái cấp vốn cho phép cập nhật lãi suất của khoản vay sang mức mới. Mỗi yêu cầu tái cấp vốn chịu phí 0,02% khoản nợ và được trả bằng MUSD.

## Khoản gửi gas (phí cố định `200 MUSD`)

Khoản gửi 200 MUSD bảo đảm rằng việc thanh lý luôn khả thi. Khoản này được hoàn lại khi đóng khoản vay. Khoản gửi gas được đúc thành khoản nợ bổ sung trong khoản vay và được giữ ký quỹ cho đến khi đóng khoản vay. Khoản nợ này được tính vào tỷ lệ thế chấp.

## Phí gas và phí giao dịch khác

Người dùng tương tác với hệ thống MUSD sẽ phải trả phí giao dịch cho mỗi giao dịch được phát lên mạng Mezo. Điều này bao gồm các hành động như đúc, quy đổi, staking và nhận.

## Những rủi ro cần biết

:::caution
Vay MUSD có rủi ro. Hiểu rõ những rủi ro này giúp bạn bảo vệ vị thế của mình.

**Rủi ro quy đổi** — Để duy trì tỷ giá neo của MUSD, giao thức có thể quy đổi MUSD lấy tài sản thế chấp, bắt đầu từ những khoản vay có **tỷ lệ thế chấp thấp nhất** (nhưng vẫn trên ngưỡng thanh lý 110%). Nếu khoản vay của bạn bị quy đổi, bạn mất phần hưởng lợi khi giá BTC tăng và có thể phải chịu các hệ quả về thuế. Để giảm rủi ro này, hãy giữ tỷ lệ thế chấp của bạn cao hơn những người vay khác.

**Rủi ro bị thanh lý** — Nếu tỷ lệ thế chấp của khoản vay **xuống dưới 110%**, vị thế của bạn có thể bị thanh lý. Bạn mất tài sản thế chấp và giữ lại lượng MUSD đã vay. Để giảm rủi ro này, hãy theo dõi khoản vay thường xuyên và bổ sung tài sản thế chấp khi cần. Để biết đầy đủ chi tiết, xem [Thanh lý và quy đổi MUSD](/docs/vn/docs/users/borrow/liquidation-mechanics).
:::
