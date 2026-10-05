---
title: Enclaves
description: Cách các khoản nạp BTC của tổ chức hoạt động trên Mezo thông qua enclave
topic: users
---

Mezo Enclaves là một kênh nạp tài sản dành cho tổ chức, cho phép các tổ chức có yêu cầu lưu ký theo quy định đưa BTC vào sử dụng trên Mezo mà không cần dùng cầu nối tiêu chuẩn.

## Cách Enclaves hoạt động

Các tổ chức hoạt động theo quy định về lưu ký có thể không nạp được BTC qua cầu nối tiêu chuẩn của Mezo. Enclaves giải quyết vấn đề này bằng cách cho phép BTC được thể hiện trên Mezo trong khi lượng Bitcoin cơ sở vẫn nằm trong các thỏa thuận lưu ký đáp ứng yêu cầu pháp lý.

Những điểm chính:

- Mỗi enclave được multisig quản trị của Mezo đưa vào danh sách cho phép (allowlist) một cách riêng lẻ
- Các khoản nạp qua enclave được bảo đảm bằng các thỏa thuận pháp lý đi kèm, quy định số lượng chuyển qua cầu nối và các giới hạn sử dụng
- Mọi khoản nạp qua enclave vẫn được bảo đảm bằng các UTXO Bitcoin thật trên chuỗi Bitcoin

## Xác minh tài sản BTC bảo đảm cho enclave

Mọi khoản nạp qua enclave đều được bảo đảm bằng các UTXO trên blockchain Bitcoin. Các UTXO này được ghi nhận trong giao dịch nạp qua cầu nối ba bên và được duy trì trong trạng thái onchain, nghĩa là lượng BTC bảo đảm bên dưới minh bạch và có thể kiểm chứng.

Nhà phát triển có thể truy vấn dữ liệu UTXO của enclave bằng hàm `getTripartyUtxos` để xác minh lượng Bitcoin bảo đảm cho bất kỳ vị thế enclave nào. Xem [tài liệu cầu nối dành cho nhà phát triển](/docs/vn/docs/developers/bridge/mezo-bridge) để biết chi tiết kỹ thuật.
