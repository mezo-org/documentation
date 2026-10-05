---
title: Tổng quan về Mezo Nodes
description: >-
  Tìm hiểu cách Mezo Nodes vận hành và hỗ trợ các chức năng của mạng cho tài
  chính dựa trên Bitcoin.
topic: developers
---

Mezo Nodes là thành phần thiết yếu của mạng và hoàn toàn mã nguồn mở. [Mezo Validator Kit](./validator-kit) thiết lập [client mezod](https://github.com/mezo-org/mezod) cùng các yêu cầu khác để chạy một node với vai trò validator, node RPC hoặc seed node. Bộ công cụ này đơn giản hóa nhiều phương án triển khai như Docker, daemon gốc (native) và Helm cho Kubernetes.

- Xem [mezod](https://github.com/mezo-org/mezod) trên GitHub.
- Dùng [Validator Kit](./validator-kit) để chạy seed node cục bộ của riêng bạn.

## Yêu cầu phần cứng

Mỗi loại node có yêu cầu phần cứng khác nhau. Xem phần [yêu cầu phần cứng](./validator-kit#yêu-cầu-phần-cứng) để biết yêu cầu tối thiểu cho từng loại node.

## Validator

Validator của Mezo chịu trách nhiệm chạy các node xác minh giao dịch, đề xuất và chứng thực khối mới, đồng thời tham gia cơ chế đồng thuận. Validator của Mezo phải đăng ký [Proof of Authority (PoA)](./validator-kit#thiết-lập-validator) trước khi node của họ có thể tham gia với vai trò validator.

Validator đã được phê duyệt có thể làm theo hướng dẫn của [Validator Kit](./validator-kit) để tìm hiểu cách chạy node validator.

## Node RPC

Node RPC có thể dùng để tạo endpoint cục bộ phục vụ phát triển, hoặc làm một phần của nền tảng hạ tầng blockchain dạng dịch vụ (IaaS). Quy trình thiết lập seed node giống với node validator, nhưng bạn không cần yêu cầu Proof of Authority (PoA).

Để chạy node RPC, hãy làm theo hướng dẫn thiết lập trong [Validator Kit](./validator-kit), đồng thời áp dụng các bước cấu hình bổ sung được mô tả trong phần thiết lập [node RPC](./validator-kit#thiết-lập-node-rpc).

## Seed node

Seed node hỗ trợ việc khám phá peer trong mạng. Quy trình thiết lập seed node giống với node validator, nhưng bạn không cần yêu cầu Proof of Authority (PoA).

Để chạy seed node, hãy làm theo hướng dẫn thiết lập trong [Validator Kit](./validator-kit), nhưng bỏ qua bước đăng ký PoA và đặt tham số `p2p.seed_mode` trong tệp config.toml của node thành `true`. Xem phần [Seed node của mạng](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) để biết chi tiết.
