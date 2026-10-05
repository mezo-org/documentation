---
title: 'Hướng dẫn cho nhà phát triển: Hạ tầng oracle'
description: >-
  Tìm hiểu cách các oracle của Mezo cung cấp nguồn dữ liệu an toàn, phi tập
  trung cho ứng dụng của bạn.
topic: developers
---

Mezo tích hợp một oracle trong các node validator của mình. Các oracle bên thứ ba cũng có sẵn.

## Skip Connect

Mezo sử dụng [Skip Connect](https://github.com/skip-mev/connect) làm dịch vụ oracle chính. Skip xác định giá của một cặp tài sản trong quá trình đồng thuận khối và ghi nó vào trạng thái onchain của module Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Module này do Skip cung cấp và được tích hợp vào ứng dụng khách Mezo.

Sidecar chạy trên cùng hệ thống với node validator, vì vậy việc truy xuất và tổng hợp dữ liệu được hoàn thành trên cùng một hệ thống và được truyền đến node validator qua gRPC.

![Sơ đồ minh họa quy trình Skip tổng hợp dữ liệu thị trường từ nhiều nguồn và các validator của Mezo chạy Skip Connect và x/oracle để cập nhật trạng thái onchain với các giá trị mới nhất](/docs/images/oracle/mezo-oracle.avif)

Để có mô tả đầy đủ về cách Skip tổng hợp dữ liệu, hãy xem tài liệu [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

Skip Connect bao gồm nhiều [nhà cung cấp](https://github.com/skip-mev/connect/blob/main/providers/README.md) có thể được cấu hình trong sidecar. Bạn có thể tìm danh sách đầy đủ các nhà cung cấp có sẵn trong tài liệu Skip Connect:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Tài liệu tham khảo Skip Providers và Market Map:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork là một giao thức oracle cho phép kết nối có độ trễ cực thấp giữa các nhà cung cấp dữ liệu và cả ứng dụng onchain lẫn offchain. Trường hợp sử dụng phổ biến nhất của Stork là truy xuất và sử dụng dữ liệu thị trường dưới dạng nguồn cấp giá thời gian thực cho DeFi. Stork [đã có sẵn trên Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Tài liệu Stork](https://docs.stork.network/)**
- **[Hợp đồng đã triển khai trên Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra là một mạng oracle xuyên chuỗi được thiết kế để hỗ trợ các dApp trên nhiều hệ sinh thái blockchain với các giải pháp dữ liệu nhanh, an toàn, phi tập trung và có khả năng mở rộng. [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) của Supra đã có sẵn trên Mezo Testnet. Xem trang [Mạng khả dụng](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) của Supra để tìm địa chỉ hợp đồng pull và hợp đồng lưu trữ chính xác.

- **[Tài liệu Supra](https://docs.supra.com/)**

## Pyth

[Mạng Pyth](https://pyth.network/) là một trong những mạng oracle bên thứ nhất lớn nhất và cung cấp dữ liệu thời gian thực trên nhiều chuỗi bao gồm Mezo. Pyth giới thiệu một thiết kế [pull oracle có độ trễ thấp](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) sáng tạo, cho phép người dùng kéo bản cập nhật giá lên onchain khi cần. Điều này cho phép mọi người trong môi trường onchain truy cập các điểm dữ liệu một cách hiệu quả. Mạng Pyth cập nhật giá mỗi 400ms, giúp Pyth trở thành một trong những oracle onchain nhanh nhất.

Hợp đồng oracle của Pyth:
- Mezo Mainnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (proxy): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Xem [Tài liệu Pyth](https://docs.pyth.network/home) để tìm hiểu cách sử dụng Pyth trong dApp của bạn.
