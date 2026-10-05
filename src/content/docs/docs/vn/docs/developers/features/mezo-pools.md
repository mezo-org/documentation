---
title: Mezo Pools
topic: developers
---
Mezo Pools cho phép người dùng swap token và cung cấp thanh khoản nhờ cơ chế pool được tối ưu hóa. Mezo hỗ trợ hai kiến trúc pool: **pool cơ bản** (AMM tích không đổi và AMM đường cong ổn định) và **pool thanh khoản tập trung (CL)** với khoảng giá tùy chỉnh.

## Pool cơ bản

Pool cơ bản sử dụng AMM theo kiểu Aerodrome với cơ chế định giá tích không đổi (biến động) hoặc đường cong ổn định (ổn định).

- **Pool Factory:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Phí swap:** 0,30% với pool biến động, 0,02% với pool ổn định
- **Loại vị thế:** LP token có thể thay thế (ERC-20)

### Các pool cơ bản được hỗ trợ

| Pool | Loại | Địa chỉ |
|------|------|---------|
| MUSD/BTC | Biến động | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Ổn định | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Ổn định | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Quy trình swap cơ bản

**Hợp đồng router:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. Người dùng phê duyệt token cho router
2. Gọi `swapExactTokensForTokens(...)` của router với mảng đường dẫn (path)
3. Token đầu ra được trả về ví

## Pool thanh khoản tập trung (CL)

Pool CL cho phép nhà cung cấp thanh khoản gửi tài sản trong khoảng giá tùy chỉnh, tập trung vốn vào nơi diễn ra giao dịch. Phần triển khai CL của Mezo dựa trên [Slipstream của Velodrome](https://velodrome.finance/docs/slipstream).

- **CL Factory:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Loại vị thế:** Không thể thay thế (NFT ERC-721 thông qua NonfungiblePositionManager)
- **Mô hình giá:** `sqrtPriceX96` (số dấu phẩy cố định Q64.96), giống Uniswap V3

### Các pool CL được hỗ trợ

| Pool | Tick spacing | Phí mặc định | Địa chỉ |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0,30% | Xem trình khám phá khối |

### Tick spacing và phí

Pool CL được tạo với một tick spacing cụ thể, quyết định độ chi tiết của khoảng giá. Pool có tick spacing dưới 100 được xếp vào loại ổn định; từ 100 trở lên là loại biến động.

| Tick spacing | Phí mặc định |
|---|---|
| 1 | 0,01% |
| 10 | 0,05% |
| 50 | 0,05% |
| 100 | 0,05% |
| 200 | 0,30% |
| 2.000 | 1,00% |

Có thể đặt phí tùy chỉnh thông qua một `swapFeeModule` dạng plugin trên factory. Một `unstakedFeeModule` kiểm soát phần phí swap được chuyển hướng từ các vị thế không stake sang các vị thế đã stake (mặc định: 10%).

### Quy trình swap CL

**CL Swap Router:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. Người dùng phê duyệt token cho CL swap router
2. Gọi `exactInputSingle(...)` hoặc `exactInput(...)` với khóa pool (token0, token1, tickSpacing) và các tham số swap
3. Token đầu ra được trả về ví

### Quản lý vị thế CL

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Các vị thế được quản lý dưới dạng NFT ERC-721. Các thao tác chính:

- `mint(...)` — Tạo vị thế mới với một khoảng giá (tickLower, tickUpper) và gửi token
- `increaseLiquidity(...)` — Thêm thanh khoản vào một vị thế hiện có
- `decreaseLiquidity(...)` — Rút thanh khoản khỏi một vị thế
- `collect(...)` — Nhận phí swap đã tích lũy

### Staking và gauge

Vị thế CL có thể được stake vào gauge để nhận lượng phát thải MEZO. Thanh khoản đã stake và nằm trong khoảng giá kiếm được cả phí swap lẫn lượng phát thải. Cơ chế phí không stake chuyển hướng một phần phí từ các vị thế không stake sang các vị thế đã stake.

- **CL Gauge Factory:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Tính năng chính

- **Kiểm soát trượt giá (slippage):** Có trên frontend hoặc thông qua các tham số `amountOutMinimum` / `sqrtPriceLimitX96`
- **Oracle TWAP tích hợp sẵn:** Mỗi pool CL duy trì một oracle giá trung bình theo thời gian
- **Phí động:** Các module phí dạng plugin cho phép logic phí tùy chỉnh theo từng pool

## Địa chỉ hợp đồng

### Mainnet — Hợp đồng pool cơ bản

| Tên | Địa chỉ |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC Pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC Pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT Pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet — Hợp đồng CL

| Tên | Địa chỉ |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (bản triển khai) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (bản triển khai) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet — Hợp đồng quản trị

| Tên | Địa chỉ |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet — Hợp đồng pool cơ bản

| Tên | Địa chỉ |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC Pool | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC Pool | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT Pool | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet — Hợp đồng CL

| Tên | Địa chỉ |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (bản triển khai) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (bản triển khai) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet — Hợp đồng quản trị

| Tên | Địa chỉ |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
