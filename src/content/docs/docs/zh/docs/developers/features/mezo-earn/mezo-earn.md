---
title: Mezo Earn 开发指南
description: 在 Mezo Earn 上进行构建的综合指南。Mezo Earn 是受 Solidly 启发的 Mezo Gauge 系统和 DEX。
topic: developers
---
Mezo Earn 是驱动 Mezo Gauge 系统和去中心化交易所（DEX）的智能合约系统。本指南将帮助您了解如何基于 Mezo Earn 合约进行构建并与之交互。

📄 **[下载 Mezo Earn 白皮书（PDF）](/docs/Mezo_Earn_Whitepaper.pdf)**——全面了解经济激励框架、双代币模型和代币经济学。

## 概览

Mezo Earn 提供：
- **去中心化交易所（DEX）**：用于代币兑换的自动做市商
- **Gauge 系统**：投票和奖励分配机制
- **受 Solidly 启发的架构**：高效的 ve 代币经济学和流动性管理

## 仓库结构

[Mezo Earn 仓库](https://github.com/mezo-org/tigris.git)包含：

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**：使用 Solidity 编写的智能合约
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**：用于与合约交互的前端应用
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**：基于 Cloudflare 的基础设施组件
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**：CI/CD 自动化

## 开发环境设置

### 前提条件

- Node.js（具体版本请查看 [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc)）
- pnpm 包管理器
- Git
- Foundry（用于智能合约开发）

### 安装

1. 克隆仓库：
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. 安装依赖项：
```bash
pnpm install
```

3. 设置 pre-commit 钩子：
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### 测试 pre-commit 钩子

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## 智能合约开发

### 合约架构

Mezo Earn 合约组织在 [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity) 目录中。主要组件包括：

- **核心 DEX 合约**：自动做市商功能
- **Gauge 合约**：投票和奖励分配
- **代币合约**：ERC20 实现
- **工具合约**：辅助函数和库

### 开发工作流

1. **编写合约**：在 `solidity/` 中创建或修改 Solidity 文件
2. **测试合约**：为您的合约编写全面的测试
3. **部署**：使用部署脚本部署到测试网/主网
4. **验证**：在区块浏览器上验证合约

### 编译合约

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### 测试

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## 前端开发

[`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) 目录包含用于与 Mezo Earn 合约交互的前端应用。

### 主要功能

- **兑换界面**：代币兑换功能
- **流动性管理**：向池中添加流动性或从池中移除流动性
- **Gauge 投票**：参与 Gauge 投票并获取奖励
- **投资组合管理**：跟踪仓位和奖励

### 开发命令

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

## 集成指南

### 连接到 Mezo Earn 合约

1. **获取合约地址**：Mezo 测试网/主网上已部署的合约地址
2. **集成 ABI**：导入合约 ABI 以进行交互
3. **Web3 提供程序**：通过 RPC 连接到 Mezo 网络

### 集成示例

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

### 兑换代币

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

### 添加流动性

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

## 部署

### 测试网部署

1. 在 `.env` 中配置测试网参数
2. 使用部署脚本部署合约：
```bash
pnpm deploy:testnet
```
3. 在测试网区块浏览器上验证合约
4. 更新前端配置

### 主网部署

1. 在测试网上完成全面测试
2. 安全审计（如有需要）
3. 部署到主网
4. 验证合约
5. 更新生产环境配置

## 监控与维护

### 合约监控

- 为关键函数设置事件监控
- 监控 Gas 使用情况和优化空间
- 跟踪合约交互和用户活动

### 安全注意事项

- 定期进行安全审计
- 访问控制管理
- 紧急暂停机制
- 升级流程

## 其他资源

- **[Mezo Earn 仓库](https://github.com/mezo-org/tigris.git)** - 主仓库
- **[Solidly 文档](https://docs.solidly.com/)** - Solidly 协议文档
- **[Mezo 网络文档](/docs/zh/docs/developers/getting-started/configure-environment)** - 网络配置
- **[合约验证指南](/docs/zh/docs/developers/contracts-reference)** - 合约验证

:::note
有关详细的架构、代币经济学和协议机制，请参阅 Mezo Earn 仓库的 README 和文档。
:::

## 支持

获取开发支持：
- 加入 [Mezo Discord](https://discord.com/invite/mezo)
- 查看 [GitHub Issues](https://github.com/mezo-org/tigris/issues)
- 阅读[常见问题](/docs/zh/docs/developers/getting-started/FAQs)

