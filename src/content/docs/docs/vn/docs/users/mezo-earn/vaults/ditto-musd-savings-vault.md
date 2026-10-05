---
title: Ditto MUSD Savings Vault
description: >-
  Gửi MUSD trên Mezo và nhận dMUSD cho một vault cross-chain tự động với phân bổ
  ban đầu vào Spark Savings
topic: users
---

Ditto MUSD Savings Vault mang đến cho người nắm giữ MUSD thêm một cách để tài sản sinh lời thông qua Mezo Earn. Gửi MUSD trên Mezo và nhận **dMUSD**, một token biên nhận đại diện cho vị thế của bạn trong vault. Ditto Network xử lý các giao dịch swap, việc chuyển qua cầu nối và phân bổ phía sau vault, với phân bổ ban đầu vào **Spark Savings trên Ethereum**.

Bạn nắm giữ một vị thế vault trên Mezo, trong khi Ditto quản lý các bước cần thiết để tiếp cận lợi suất cơ sở trên một chuỗi khác.

Khám phá [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## Cách hoạt động

1. **Gửi MUSD trên Mezo.** Bạn nhận dMUSD đại diện cho vị thế của bạn trong vault.
2. **Ditto phân bổ tài sản.** Các nhà vận hành (operator) xử lý swap và chuyển qua cầu nối sang Ethereum, sau đó phân bổ vào Spark Savings.
3. **Chiến lược cơ sở tạo lợi suất.** dMUSD của bạn đại diện cho quyền đối với tài sản của vault. Lợi nhuận phụ thuộc vào chiến lược cơ sở và có thể thay đổi.
4. **Yêu cầu quy đổi để rút.** Ditto đảo ngược quy trình và trả lại MUSD trên Mezo sau khi yêu cầu rút đã được xử lý.

### Cách tự động hóa hoạt động

Nhiều nhà vận hành độc lập xác minh các hành động được đề xuất cho vault trước khi ký. Việc thực thi cần một số lượng phê duyệt tối thiểu từ các nhà vận hành, và các hợp đồng thông minh áp dụng thêm các bước kiểm tra onchain. Định giá vault (giá trị tài sản ròng, hay NAV) cũng được công bố onchain thông qua quy trình có chữ ký.

Các bước kiểm tra này chi phối việc thực thi tự động; chúng không loại bỏ rủi ro hợp đồng thông minh, cầu nối, nhà vận hành hay chiến lược.

## Chi tiết vault

| Tham số            | Giá trị                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Tài sản gửi        | MUSD trên Mezo                                                                                                                                                                 |
| Token biên nhận    | dMUSD                                                                                                                                                                          |
| Nhà vận hành vault | Ditto Network                                                                                                                                                                  |
| Phân bổ ban đầu    | Spark Savings trên Ethereum                                                                                                                                                    |
| Tài sản nhận khi quy đổi | MUSD trên Mezo                                                                                                                                                           |
| Rút tiền           | Bất đồng bộ — cần thời gian xử lý                                                                                                                                              |
| APY hiện tại       | Khoảng 3,60% tính đến ngày 29 tháng 9 năm 2026, tương đương Spark Savings — có thể thay đổi; xem [trang vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

Hiệu suất trong quá khứ không phản ánh hiệu suất hiện tại hay bảo đảm lợi nhuận trong tương lai. Hãy xem lãi suất hiện tại, các khoản phí (nếu có), điều khoản rút tiền và rủi ro trong ứng dụng trước khi gửi.

## Cách gửi

1. Mở [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) và kết nối ví của bạn trên Mezo.
2. Xem lại chiến lược, lãi suất hiện tại và điều khoản rút tiền.
3. Nhập lượng MUSD bạn muốn gửi và làm theo các lời nhắc phê duyệt và gửi trong ứng dụng.
4. Xác nhận các giao dịch cần thiết trong ví. Token biên nhận dMUSD của bạn đại diện cho vị thế của bạn trong vault.

## Rút tiền

Gửi yêu cầu quy đổi qua trang vault và làm theo các lời nhắc cho vị thế dMUSD của bạn. Ditto rút vốn khỏi phân bổ cơ sở, chuyển qua cầu nối và swap khi cần, rồi trả lại MUSD trên Mezo.

**Việc rút tiền diễn ra bất đồng bộ.** Gửi yêu cầu quy đổi không có nghĩa là MUSD sẽ có ngay trong ví của bạn. Hãy chờ để chiến lược cơ sở và các thao tác cross-chain được xử lý, và làm theo mọi bước hoàn tất hiển thị trong ứng dụng. Thời gian xử lý có thể khác nhau; đừng mặc định có một khung thời gian rút tiền cố định.

Nếu bạn cần trợ giúp với một yêu cầu quy đổi đang chờ xử lý, hãy liên hệ [bộ phận hỗ trợ của Mezo](/docs/vn/docs/users/resources/support) kèm địa chỉ ví, hash giao dịch và thời điểm bạn gửi yêu cầu.

## dMUSD khác sMUSD như thế nào

Vault của Ditto là một sản phẩm tách biệt với [MUSD Savings Vault](/docs/vn/docs/users/mezo-earn/vaults/musd-savings-vault) gốc của Mezo:

- **dMUSD:** Một vị thế trong vault do Ditto vận hành, ban đầu được phân bổ vào Spark Savings trên Ethereum. Các yêu cầu quy đổi trả lại MUSD trên Mezo thông qua một quy trình bất đồng bộ.
- **sMUSD:** Một vị thế trong vault tiết kiệm gốc của Mezo, kiếm lợi suất từ hoạt động của giao thức MUSD.

Các token biên nhận này đại diện cho những vault khác nhau. Hãy xem điều khoản riêng của từng vault trước khi gửi hoặc quy đổi.

## Rủi ro

- **Rủi ro hợp đồng thông minh:** Một lỗi hoặc lỗ hổng bị khai thác trong vault, các hợp đồng tự động hóa hoặc các giao thức cơ sở có thể dẫn đến mất tiền.
- **Rủi ro cross-chain:** Swap và chuyển qua cầu nối làm tăng các phụ thuộc. Sự cố cầu nối, độ trễ mạng hoặc việc thực thi bất lợi có thể ảnh hưởng đến vị thế và quy trình quy đổi.
- **Rủi ro chiến lược và stablecoin:** Lợi nhuận phụ thuộc vào Spark Savings và các tài sản mà chiến lược sử dụng. Lãi suất có thể thay đổi, và stablecoin có thể mất tỷ giá neo.
- **Rủi ro nhà vận hành:** Việc xử lý phụ thuộc vào việc có đủ phê duyệt từ các nhà vận hành và thực thi thành công. Nhà vận hành ngừng hoạt động hoặc gặp sự cố có thể làm chậm các hành động của vault.
- **Rủi ro rút tiền:** Tài sản phải được rút ra từ phân bổ cơ sở và trả về Mezo. Bạn có thể không truy cập được MUSD ngay sau khi yêu cầu quy đổi.

## Liên kết và tài nguyên

- [Ditto MUSD Savings Vault trên Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Tài liệu Ditto Network](https://docs.dittonetwork.io/)
- [Tài liệu Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Bộ phận hỗ trợ của Mezo](/docs/vn/docs/users/resources/support)
