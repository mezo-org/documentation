---
title: USDC Lending Vault
description: >-
  Cung cấp mUSDC cho thị trường cho vay Morpho được bảo chứng bằng BTC trên Mezo
  và kiếm lãi từ người vay hoặc lượng phát thải MEZO
topic: users
---

USDC Lending Vault cho bạn tiếp cận trực tiếp một thị trường tín dụng minh bạch được bảo chứng bằng BTC. Gửi mUSDC, và vốn của bạn được cung cấp cho những người vay đã nộp BTC làm tài sản thế chấp. Tiền lãi do người vay trả chính là nguồn lợi suất của người gửi.

Về mặt kỹ thuật, các khoản gửi được đưa vào một Morpho Vault V2 được tuyển chọn (Morpho BTC-mUSDC Vault), vault này thay mặt bạn cung cấp vốn cho thị trường Morpho Blue BTC / mUSDC. Bạn không tương tác trực tiếp với Morpho — bạn nắm giữ một token cổ phần (share) tăng giá trị khi tiền lãi tích lũy.

Truy cập vault tại [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Để vay mUSDC bằng BTC, xem [Cách vay mUSDC](/docs/vn/docs/users/borrow/how-to-borrow-musdc).

**Cách hoạt động:**

- Gửi mUSDC và nhận `morphoBTC-mUSDC` — một token cổ phần đại diện cho quyền của bạn đối với vault
- Lợi suất tích lũy vào giá cổ phần: theo thời gian, cùng một số cổ phần có thể quy đổi được nhiều mUSDC hơn
- Các khoản vay được thế chấp vượt mức bằng BTC (LTV thanh lý 86%). Tài sản đã gửi không bị tái thế chấp
- Không có mức gửi tối thiểu và không có phí giao thức khi vào hoặc rút
- APR thay đổi theo nhu cầu của người vay — xem lãi suất hiện tại tại [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Tìm hiểu về cổ phần của bạn

`morphoBTC-mUSDC` là token cổ phần vault của bạn. Một số điều cần biết:

- **Lợi suất nằm ở tỷ giá quy đổi, không nằm ở số dư.** Số dư cổ phần của bạn giữ nguyên sau khi gửi, nhưng mỗi cổ phần có thể quy đổi được nhiều mUSDC hơn khi người vay trả lãi. Bạn sẽ thấy phần chênh lệch khi rút.
- **Cổ phần không tương ứng 1:1 với mUSDC.** Nếu vault đã kiếm được lãi, việc gửi 100 mUSDC sẽ cho bạn ít hơn 100 cổ phần — và mỗi cổ phần có giá trị lớn hơn 1 mUSDC.
- **Nếu bạn stake để nhận lượng phát thải, tiền lãi của bạn sẽ được chuyển hướng.** Cổ phần đã stake kiếm MEZO thay vì lãi từ người vay. Phần lãi lẽ ra thuộc về bạn được chuyển cho những người bỏ phiếu veBTC trên gauge của Lending Vault.

---

## Chi tiết vault

| Tham số | Giá trị |
|-----------|-------|
| Token gửi | mUSDC |
| Token cổ phần | `morphoBTC-mUSDC` |
| Thị trường cơ sở | Morpho Blue BTC / mUSDC |
| LTV thanh lý | 86% |
| Bên tuyển chọn (curator) | Quản trị Mezo |
| Phí rút | Không có |
| APR hiện tại | Thay đổi — xem [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Hai cách kiếm lợi nhuận

Giống các sản phẩm Earn khác trên Mezo, bạn chọn cách mỗi cổ phần được trả thưởng:

- **Nắm giữ để nhận lãi** — Giữ `morphoBTC-mUSDC` trong ví. Cổ phần của bạn tăng giá trị khi người vay trả lãi.
- **Stake để nhận lượng phát thải MEZO** — Stake cổ phần của bạn vào gauge của Lending Vault. Bạn kiếm MEZO; phần lãi mà các cổ phần đó lẽ ra kiếm được sẽ thuộc về người bỏ phiếu.

Một cổ phần không thể kiếm cả hai cùng lúc, nhưng bạn có thể chia lượng nắm giữ — stake một phần để nhận lượng phát thải và giữ phần còn lại để nhận lãi. Gửi và stake là hai bước riêng trong ứng dụng: gửi trước để nhận cổ phần, sau đó stake nếu muốn.

**Để thoát một vị thế đã stake:** hủy stake, quy đổi lại thành cổ phần vault, rồi rút về mUSDC. Việc hủy stake không làm mất lượng MEZO có thể nhận.

---

## Rút tiền

Việc rút trả lại mUSDC của bạn (cộng với lãi tích lũy nếu bạn nắm giữ để nhận lãi). Vì mUSDC của bạn được cho người vay vay, vault chỉ có thể chi trả phần hiện đang sẵn có — tức là chưa được cho vay.

- Ứng dụng hiển thị số tiền **Available to withdraw** dựa trên thanh khoản hiện tại của vault
- Khi mức sử dụng vốn cao, một khoản rút lớn có thể chỉ được đáp ứng một phần hoặc tạm thời bị chặn cho đến khi người vay trả nợ hoặc có nguồn cung mới
- Cổ phần đã stake phải được hủy stake trước khi có thể rút

Đây là hành vi bình thường của thị trường cho vay, không phải lỗi của vault.

---

## Rủi ro

### Rủi ro hợp đồng thông minh

Tiền đi qua adapter của Lending Vault, Morpho Vault V2 và thị trường Morpho Blue. Một lỗi hoặc lỗ hổng bị khai thác ở bất kỳ thành phần nào cũng có thể dẫn đến mất tiền.

### Rủi ro thiếu thanh khoản

Khi mức sử dụng vốn của người vay cao, bạn có thể không rút được toàn bộ mUSDC theo yêu cầu. Chỉ cung cấp số tiền mà bạn chấp nhận được việc bị khóa tạm thời.

### Rủi ro thị trường cho vay

Người vay bị thanh lý ở LTV 86%. Trong trường hợp BTC giảm giá mạnh và nhanh, nợ xấu có thể phát sinh và được chia cho các bên cung cấp vốn thông qua việc giảm giá cổ phần — không có quỹ bảo hiểm. Vị thế của bạn cũng được định giá bằng mUSDC, nên việc mất tỷ giá neo sẽ ảnh hưởng đến tài sản của bạn.

### Rủi ro bên tuyển chọn

Quản trị Mezo tuyển chọn các thị trường mà vault cung cấp vốn và các mức trần cung cấp. Các thay đổi của bên tuyển chọn trên Morpho Vault V2 đều có timelock.

---

## Hợp đồng

| Hợp đồng | Địa chỉ |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Adapter của Lending Vault | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Gauge của vault | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Để biết chi tiết về thị trường Morpho Blue, xem [tài liệu Morpho](https://docs.morpho.org/).
