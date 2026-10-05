---
title: Hướng dẫn phát triển trên Mezo Earn
description: >-
  Hướng dẫn toàn diện về việc xây dựng trên Mezo Earn — hệ thống gauge và DEX
  của Mezo lấy cảm hứng từ Solidly.
topic: developers
---
Mezo Earn là hệ thống hợp đồng thông minh vận hành hệ thống gauge và sàn giao dịch phi tập trung (DEX) của Mezo. Hướng dẫn này giúp bạn hiểu cách xây dựng và tương tác với các hợp đồng Mezo Earn.

📄 **[Tải xuống sách trắng Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)** — Tổng quan toàn diện về khung khuyến khích kinh tế, mô hình hai token và tokenomics.

## Tổng quan

Mezo Earn cung cấp:
- **Sàn giao dịch phi tập trung (DEX)**: Nhà tạo lập thị trường tự động (AMM) cho các giao dịch swap token
- **Hệ thống gauge**: Cơ chế bỏ phiếu và phân phối phần thưởng
- **Kiến trúc lấy cảm hứng từ Solidly**: Mô hình ve-tokenomics và quản lý thanh khoản hiệu quả

## Cấu trúc kho mã

[Kho mã Mezo Earn](https://github.com/mezo-org/tigris.git) bao gồm:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: Các hợp đồng thông minh viết bằng Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: Ứng dụng frontend để tương tác với các hợp đồng
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: Các thành phần hạ tầng dựa trên Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: Tự động hóa CI/CD

## Thiết lập môi trường phát triển

### Điều kiện tiên quyết

- Node.js (xem [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) để biết phiên bản chính xác)
- Trình quản lý gói pnpm
- Git
- Foundry (để phát triển hợp đồng thông minh)

### Cài đặt

1. Clone kho mã:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Cài đặt các gói phụ thuộc:
```bash
pnpm install
```

3. Thiết lập pre-commit hook:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Kiểm thử pre-commit hook

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Phát triển hợp đồng thông minh

### Kiến trúc hợp đồng

Các hợp đồng Mezo Earn được tổ chức trong thư mục [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Các thành phần chính gồm:

- **Hợp đồng DEX cốt lõi**: Chức năng nhà tạo lập thị trường tự động
- **Hợp đồng gauge**: Bỏ phiếu và phân phối phần thưởng
- **Hợp đồng token**: Các bản triển khai ERC20
- **Hợp đồng tiện ích**: Các hàm hỗ trợ và thư viện

### Quy trình phát triển

1. **Viết hợp đồng**: Tạo hoặc chỉnh sửa các tệp Solidity trong `solidity/`
2. **Kiểm thử hợp đồng**: Viết bộ kiểm thử đầy đủ cho các hợp đồng của bạn
3. **Triển khai**: Dùng script triển khai để triển khai lên testnet/mainnet
4. **Xác minh**: Xác minh hợp đồng trên trình khám phá khối

### Biên dịch hợp đồng

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Kiểm thử

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Phát triển frontend

Thư mục [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) chứa ứng dụng frontend để tương tác với các hợp đồng Mezo Earn.

### Tính năng chính

- **Giao diện swap**: Chức năng swap token
- **Quản lý thanh khoản**: Thêm/rút thanh khoản khỏi pool
- **Bỏ phiếu gauge**: Tham gia bỏ phiếu cho gauge và nhận phần thưởng
- **Quản lý danh mục**: Theo dõi vị thế và phần thưởng

### Lệnh phát triển

```bash
# Navigate to dapp directory
cd dapp

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Hướng dẫn tích hợp

### Kết nối với các hợp đồng Mezo Earn

1. **Lấy địa chỉ hợp đồng**: Địa chỉ các hợp đồng đã triển khai trên Mezo testnet/mainnet
2. **Tích hợp ABI**: Import ABI của hợp đồng để tương tác
3. **Web3 provider**: Kết nối với mạng Mezo qua RPC

### Ví dụ tích hợp

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

### Swap token

```typescript
async function swapTokens(
  routerContract: Contract,
  wallet: Wallet,
  amountIn: bigint,
  tokenIn: string,
  tokenOut: string,
  to: string
) {
  // Approve token spending
  const tokenContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);
  await tokenContract.approve(routerContract.address, amountIn);
  
  // Execute swap
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  const minAmountOut = 0; // Calculate proper slippage in production
  
  await routerContract.connect(wallet).swapExactTokensForTokens(
    amountIn,
    minAmountOut,
    [tokenIn, tokenOut],
    to,
    deadline
  );
}
```

### Thêm thanh khoản

```typescript
async function addLiquidity(
  routerContract: Contract,
  wallet: Wallet,
  tokenA: string,
  tokenB: string,
  amountA: bigint,
  amountB: bigint
) {
  // Approve both tokens
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, wallet);
  
  await tokenAContract.approve(routerContract.address, amountA);
  await tokenBContract.approve(routerContract.address, amountB);
  
  // Add liquidity
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
  
  await routerContract.connect(wallet).addLiquidity(
    tokenA,
    tokenB,
    amountA,
    amountB,
    0, // minAmountA - calculate proper slippage
    0, // minAmountB - calculate proper slippage
    wallet.address,
    deadline
  );
}
```

## Triển khai

### Triển khai trên testnet

1. Cấu hình các tham số testnet trong `.env`
2. Triển khai hợp đồng bằng script triển khai:
```bash
pnpm deploy:testnet
```
3. Xác minh hợp đồng trên trình khám phá testnet
4. Cập nhật cấu hình frontend

### Triển khai trên mainnet

1. Hoàn tất kiểm thử kỹ lưỡng trên testnet
2. Kiểm toán bảo mật (nếu cần)
3. Triển khai lên mainnet
4. Xác minh hợp đồng
5. Cập nhật cấu hình production

## Giám sát và bảo trì

### Giám sát hợp đồng

- Thiết lập giám sát sự kiện cho các hàm quan trọng
- Theo dõi mức sử dụng gas và các cơ hội tối ưu hóa
- Theo dõi các tương tác với hợp đồng và hoạt động của người dùng

### Lưu ý về bảo mật

- Kiểm toán bảo mật định kỳ
- Quản lý kiểm soát truy cập
- Cơ chế tạm dừng khẩn cấp
- Quy trình nâng cấp

## Tài nguyên bổ sung

- **[Kho mã Mezo Earn](https://github.com/mezo-org/tigris.git)** - Kho mã chính
- **[Tài liệu Solidly](https://docs.solidly.com/)** - Tài liệu về giao thức Solidly
- **[Tài liệu mạng Mezo](/docs/vn/docs/developers/getting-started/configure-environment)** - Cấu hình mạng
- **[Hướng dẫn xác minh hợp đồng](/docs/vn/docs/developers/contracts-reference)** - Xác minh hợp đồng

:::note
Để biết chi tiết về kiến trúc, tokenomics và cơ chế giao thức, hãy tham khảo README và tài liệu của kho mã Mezo Earn.
:::

## Hỗ trợ

Để được hỗ trợ phát triển:
- Tham gia [Discord của Mezo](https://discord.com/invite/mezo)
- Xem [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- Xem [câu hỏi thường gặp](/docs/vn/docs/developers/getting-started/FAQs)

