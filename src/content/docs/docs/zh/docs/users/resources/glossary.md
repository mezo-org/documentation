---
title: 术语表
description: Mezo 生态系统中常用术语的完整 A-Z 参考。
topic: users
---

Mezo 生态系统中常用术语的完整参考。如需查看 Mezo Earn 专用术语，请参阅 [Mezo Earn 术语表](/docs/zh/docs/users/mezo-earn/overview/glossary)。

---

## AMM

自动做市商（Automated Market Maker）。一种去中心化交易所，使用流动性池和数学公式（而非订单簿）来确定资产价格并执行交易。Mezo Pools 采用 Aerodrome 风格的 AMM：波动型交易对使用恒定乘积曲线，相关性交易对使用稳定曲线。请参阅 [Mezo Pools 概览](/docs/zh/docs/users/mezo-earn/pools)。

## Block Explorer（区块浏览器）

用于查看交易、地址和链上数据的网页工具。Mezo 的主网区块浏览器地址为 [explorer.mezo.org](https://explorer.mezo.org/)，测试网区块浏览器地址为 [explorer.test.mezo.org](https://explorer.test.mezo.org/)。

## Boost（加成）

当 veMEZO 的投票被导向某个 veBTC 仓位时，对该仓位施加的倍数。没有加成时，veBTC 以 1x 运作；获得最大加成时，veBTC 以 5x 运作。加成取决于您在系统中 veBTC 总量和 veMEZO 总量中所占的相对份额。请参阅[加成机制](/docs/zh/docs/users/mezo-earn/lock/vemezo/boost-mechanism)。

## Boosted Weight（加成后权重）

veBTC 与 veMEZO 配对后的综合投票权重。计算方式为您的 veBTC 权重乘以您的加成倍数（介于 1x 和 5x 之间）。加成后权重决定了您可获得的费用份额以及您对排放的影响力。

## BTC

比特币。BTC 是 Mezo 上的原生 Gas 代币（18 位小数），也是铸造 [MUSD](#musd) 的主要抵押品。Mezo 上的所有交易均以 BTC 支付。

## BTC Wallet（BTC 钱包）

用于将 BTC 直接存入 Mezo 的比特币原生钱包。支持的钱包包括 UniSat、OKX 和 Xverse。支持的地址格式包括 Legacy（P2PKH）、Native SegWit（P2WPKH）和 Nested SegWit（P2SH-P2WPKH）。请参阅[存入资产](/docs/zh/docs/users/getting-started/deposit-assets)。

## Chain ID（链 ID）

区块链网络的数字标识符。Mezo 主网使用链 ID `31612`，Mezo 测试网使用链 ID `31611`。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## Chain Splitter

排放层级中的第一个 Splitter。它控制 MEZO 排放分配给验证者（20%）与生态系统其余部分（80%）的百分比。该比例目前固定，并已通过治理锁定。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Cliff（悬崖期）

代币开始解锁前的等待期。在 Mezo 的归属计划中，团队和投资者的分配自 TGE 起有 1 年的悬崖期，即前 12 个月内不会解锁任何代币。请参阅[代币分配](/docs/zh/docs/users/mezo/token-distribution)。

## Collateral（抵押品）

为担保贷款而抵押的资产。在 Mezo 上，存入 BTC 作为抵押品即可借入 [MUSD](#musd)。如果抵押品价值相对于债务下跌过多，仓位可能会被[清算](#liquidation清算)。请参阅[借款并铸造 MUSD](/docs/zh/docs/users/borrow/mint-musd)。

## Collateral Surplus（抵押品盈余）

[Trove](#trove) 被全额赎回后剩余的多余抵押品。这部分盈余会被转入一个托管合约，供借款人领取。请参阅 [MUSD 清算与赎回](/docs/zh/docs/users/borrow/liquidation-mechanics)。

## Collateralization Ratio（个人抵押率，ICR）

个人抵押率（Individual Collateralization Ratio）。Trove 抵押品的美元价值与其总债务之比。例如，如果您的 BTC 抵押品价值 \$13,000，债务为 \$10,000，那么您的 ICR 为 130%。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## CometBFT

Mezo 底层的共识引擎，前身为 Tendermint。CometBFT 提供拜占庭容错共识，使 Mezo 网络能够实现快速的区块最终性。

## Cosmos SDK

用于构建 Mezo 区块链的模块化框架。Cosmos SDK 提供应用层，而 [CometBFT](#cometbft) 负责共识。这一架构使 Mezo 能够同时支持 Cosmos 原生功能和 [EVM](#evm) 兼容功能。

## Critical Collateralization Ratio（临界抵押率，CCR）

设定为 150% 的全系统抵押品阈值。当系统总抵押率（TCR）低于 CCR 时，系统将进入[恢复模式](#recovery-mode恢复模式)。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## dApp

去中心化应用（Decentralized Application）。运行在区块链上而非中心化服务器上的软件应用。开发者可以使用标准 EVM 工具在 Mezo 上构建 dApp。请参阅 [dApp 要求](/docs/zh/docs/developers/getting-started/dapp-requirements)。

## Decay（衰减）

随着锁仓临近到期，投票权重逐渐降低的过程。veBTC 和 veMEZO 的投票权会随时间线性衰减。您可以通过延长锁仓来重置衰减。请参阅 [veBTC 概览](/docs/zh/docs/users/mezo-earn/lock/vebtc)和 [veMEZO 概览](/docs/zh/docs/users/mezo-earn/lock/vemezo)。

## Delegator（委托人）

将自己的质押或投票权委托给[验证者](#validator验证者)的参与者。验证者可以与委托人分享奖励，但这并非强制要求。

## Ecosystem Splitter

排放层级中的第二个 Splitter。它将非验证者排放在[质押 Gauge](#staking-gauge质押-gauge)（90%）和[非质押 Gauge](#non-staking-gauge非质押-gauge)（10%）之间分配，后者用于资助 [MEZO Gauges](#mezo-gauge)。该比例由 veBTC 投票设定。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Emissions（排放）

每个周期分配给质押 Gauge、验证者和 veMEZO 持有者（以 Rebase 形式）的新 MEZO 代币。排放遵循借鉴比特币的减半计划，从 25% 的年化排放率开始，第 8 年之后降至 2%。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Epoch（周期）

Mezo Earn 中控制投票和奖励分配的 7 天周期。每个周期从每周四 00:00 UTC 开始。投票不会延续到下一个周期。请参阅 [veBTC 概览](/docs/zh/docs/users/mezo-earn/lock/vebtc)。

## ERC-20

EVM 兼容区块链上同质化代币的标准接口。从以太坊桥接到 Mezo 的代币以 mERC-20 代币的形式表示（例如 mUSDC、mUSDT）。请参阅[跨链桥](/docs/zh/docs/users/mainnet/bridges)。

## EVM

以太坊虚拟机（Ethereum Virtual Machine）。以太坊兼容区块链上智能合约的运行环境。Mezo 兼容 EVM，这意味着开发者可以使用 Hardhat 和 Foundry 等熟悉的工具部署 Solidity 合约。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## EVM Wallet（EVM 钱包）

用于与 Mezo EVM 层交互的以太坊兼容钱包（例如 MetaMask、Rabby）。EVM 钱包用于 dApp 交互、兑换以及管理 Mezo 上的仓位。请参阅[连接您的钱包](/docs/zh/docs/users/getting-started/connect)。

## Faucet（水龙头）

为开发目的分发少量测试网代币的服务。Mezo 测试网水龙头提供测试 BTC，用于在 Mezo 测试网上部署和测试 dApp。

## Gas Compensation（Gas 补偿）

支付给[清算](#liquidation清算)函数调用者的 200 MUSD 退款，外加被清算抵押品的 0.5%。这确保了即使在网络活动频繁时，清算对调用者而言仍然有利可图。这 200 MUSD 在开立贷款时扣除，并在贷款正常关闭时退还。请参阅 [MUSD 架构](/docs/zh/docs/users/borrow/architecture-and-terminology)。

## Gauge

根据投票接收并分配奖励的智能合约。一个 Gauge 获得的投票权重越多，它在该周期中获得的 MEZO 排放份额就越大。Gauge 类型包括[质押 Gauge](#staking-gauge质押-gauge)、[veBTC Boost Gauge](#vebtc-boost-gauge)，以及 [MEZO Gauges](#mezo-gauge) 等[非质押 Gauge](#non-staking-gauge非质押-gauge)。请参阅 [Mezo Earn 术语表](/docs/zh/docs/users/mezo-earn/overview/glossary)。

## Global Interest Rate（全局利率）

由治理设定、适用于所有新开立 MUSD 贷款的单一利率。贷款一经开立，即保留其创建时的利率，即使全局利率发生变化也不受影响。用户可以通过[再融资](#refinance再融资)采用当前的全局利率。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## Governance（治理）

veBTC 持有者借以参与决定协议参数和排放的机制。veMEZO 可为投票权提供加成，但不具备独立的治理权。请参阅[治理](/docs/zh/docs/users/mezo/governance)。

## Halving Schedule（减半计划）

借鉴比特币、用于管理 MEZO 排放的模型。排放率大约每 2 年减半：第 0-2 年为 25%，第 2-4 年为 12.5%，第 4-8 年为 6.25%，之后永久稳定在 2%。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Impermanent Loss（无常损失）

当池中资产的价格比率发生变化时，流动性提供者相比单纯持有这些资产可能遭受的损失。这是基于 AMM 的流动性池固有的特性，在[波动型池](#volatile-pool波动型池)中更为明显。

## Incentives（激励）

投放在 Gauge 上用于吸引投票的奖励。协议或用户存入激励（可以是任何 ERC-20 代币），以将投票权吸引到特定的 Gauge。激励在 veBTC 持有者和 veMEZO 持有者之间形成了[配对市场](#matching-market配对市场)。请参阅[投票概览](/docs/zh/docs/users/mezo-earn/vote)。

## Liquidation（清算）

强制关闭抵押不足的 [Trove](#trove)。当 Trove 的 [ICR](#collateralization-ratio个人抵押率icr) 跌破 110% 时，它就可能被清算。即使在[恢复模式](#recovery-mode恢复模式)期间，清算阈值也仍为 110%。[稳定池](#stability-pool稳定池)会吸收债务，被清算的抵押品则分配给稳定池存款人。请参阅 [MUSD 清算与赎回](/docs/zh/docs/users/borrow/liquidation-mechanics)。

## Liquidity Pool（流动性池）

持有两种代币储备、支持去中心化交易的智能合约。用户将资产存入池中即可成为流动性提供者并赚取交易手续费。请参阅 [Mezo Pools 概览](/docs/zh/docs/users/mezo-earn/pools)。

## Lock（锁仓）

将 BTC 或 MEZO 锁定一段时间以获得 [veBTC](#vebtc) 或 [veMEZO](#vemezo) 的操作。锁定期限越长，初始投票权重越高。veBTC 的锁定期限为 1 至 28 天；veMEZO 的锁定期限为 1 周至 4 年。请参阅 [veBTC 概览](/docs/zh/docs/users/mezo-earn/lock/vebtc)和 [veMEZO 概览](/docs/zh/docs/users/mezo-earn/lock/vemezo)。

## LP Token（LP 代币）

流动性提供者代币（Liquidity Provider token）。将资产存入[流动性池](#liquidity-pool流动性池)时获得的 ERC-20 代币。LP 代币代表您在池中储备里的按比例份额，并使您有权获得一部分交易手续费。请参阅 [Mezo Pools 概览](/docs/zh/docs/users/mezo-earn/pools)。

## Mainnet（主网）

处理真实资产和交易的生产区块链网络。Mezo 主网的链 ID 为 `31612`，并使用 BTC 支付 Gas。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## Matching Market（配对市场）

一种经济机制：veBTC 持有者可以通过在其 Boost Gauge 上投放[激励](#incentives激励)来吸引 veMEZO 投票，而 veMEZO 持有者则可以通过为激励丰厚的 Gauge 投票来赚取收益。请参阅[配对市场](/docs/zh/docs/users/mezo-earn/lock/vemezo/matching-market)。

## MEZO

Mezo 的原生代币，用于为投票权提供加成，并影响协议费用和激励的流向。MEZO 可以锁定为 [veMEZO](#vemezo)，将 veBTC 投票权重最高放大至 5x，并赚取 Rebase 奖励。创世总供应量为 1,000,000,000 MEZO。请参阅 [MEZO 概览](/docs/zh/docs/users/mezo)。

## Mezo App

位于 [mezo.org](https://mezo.org) 的主要网页界面，用于与 Mezo 网络交互。在 Mezo App 中，用户可以存入资产、桥接、借入 MUSD、提供流动性、锁定代币以及为 Gauge 投票。

## Mezo Borrow

Mezo App 中的一项功能，允许用户存入 BTC 作为抵押品并借入 [MUSD](#musd)。每个借款仓位称为一个 [Trove](#trove)。请参阅[借款并铸造 MUSD](/docs/zh/docs/users/borrow/mint-musd)。

## Mezo Bridge

用于在 Mezo 与以太坊或比特币之间存入和提取资产的原生跨链桥。支持 BTC、tBTC 和 mERC-20 代币。请参阅[跨链桥](/docs/zh/docs/users/mainnet/bridges)。

## Mezo Earn

Mezo 上全面的收益与治理体系，涵盖锁仓（[veBTC](#vebtc)、[veMEZO](#vemezo)）、为 [Gauge](#gauge) 投票、在[流动性池](#liquidity-pool流动性池)中提供流动性，以及在[金库](#musd-savings-vault)中存款。请参阅 [Mezo Earn 概览](/docs/zh/docs/users/mezo-earn/overview)。

## MEZO Gauge

一种[非质押 Gauge](#non-staking-gauge非质押-gauge)，veMEZO 持有者通过为其投票，将 MEZO 排放导向 Mezo 之外的 MUSD 流动性池——以太坊上的 Curve 和 Uniswap，以及 Base 上的 Aerodrome。其资金来自排放的非质押分支（目前占每周排放奖励的 8%）。请参阅 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges)。

## Mezo Market

Mezo App 中用于代币兑换的交易市场。它使用[路由合约](#router-contract路由合约)，通过可用的[流动性池](#liquidity-pool流动性池)路由交易。

## Mezo Passport

一个基于 RainbowKit 构建的开发者软件包，为比特币钱包和 EVM 钱包提供钱包连接选项。Mezo Passport 与 viem 和 wagmi 集成，可简化钱包管理。请参阅[配置 Mezo Passport](/docs/zh/docs/developers/getting-started/configure-mezo-passport)。

## Mezo Pools

Mezo 上的流动性池系统，作为代币兑换的自动化链上流动性储备运作。这些池采用 Aerodrome 风格的 AMM，分为两种类型：[波动型](#volatile-pool波动型池)和[稳定型](#stable-pool稳定型池)。请参阅 [Mezo Pools 概览](/docs/zh/docs/users/mezo-earn/pools)。

## Minimum Collateralization Ratio（最低抵押率，MCR）

[Trove](#trove) 所需的最低抵押率，设定为 110%。如果 Trove 的 [ICR](#collateralization-ratio个人抵押率icr) 跌破 MCR，它就会满足被[清算](#liquidation清算)的条件。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## MUSD

Mezo 的比特币支持稳定币，与 1 美元（\$1 USD）锚定。用户通过在 [Trove](#trove) 中存入 BTC 作为抵押品来借入 MUSD。锚定通过[赎回](#redemption赎回)和[稳定池](#stability-pool稳定池)来维持。请参阅 [MUSD 概览](/docs/zh/docs/users/borrow)。

## MUSD Bridge

用于在 Mezo 与以太坊之间转移 MUSD 的跨链桥，由 Wormhole 的[原生代币转移（NTT）](#wormhole-ntt)协议提供支持。请参阅 [MUSD Bridge](/docs/zh/docs/users/borrow/musd-bridge)。

## MUSD Savings Rate Gauge

为 [MUSD Savings Vault](#musd-savings-vault) 设立的[质押 Gauge](#staking-gauge质押-gauge)。将 MUSD 存入储蓄金库的用户可以质押其 sMUSD 凭证代币来赚取 MEZO 排放，而在此 Gauge 上投票的 veBTC 投票者则可从协议费用中赚取 MUSD 收益。请参阅[金库](/docs/zh/docs/users/mezo-earn/vaults)。

## MUSD Savings Vault

Mezo 面向 MUSD 持有者的原生储蓄产品。存入 MUSD，即可赚取借款活动所产生的协议费用（利息、发行费、再融资费）的一部分。您会收到 sMUSD 作为代表您份额的凭证代币。请参阅[金库](/docs/zh/docs/users/mezo-earn/vaults)。

## Non-Staking Gauge（非质押 Gauge）

没有质押代币、通过 veMEZO 投票的 [Gauge](#gauge)。它的排放不会支付给 Mezo 上的质押者，而是被路由到该 Gauge 指定的目的地——对于 [MEZO Gauges](#mezo-gauge) 而言，即另一条链上的流动性池。为其投票独立于 veBTC 的 Gauge 投票，也独立于[加成](#boost加成)配对。请参阅 [MEZO Gauges](/docs/zh/docs/users/mezo-earn/vote/mezo-gauges)。

## Node（节点）

运行 Mezo 链客户端（mezod）并参与网络的计算机。节点类型包括[验证者](#validator验证者)节点（共识与出块）、RPC 节点（为 dApp 提供 API 端点）以及种子节点（网络引导）。请参阅 [Validator Kit](/docs/zh/docs/developers/mezo-nodes/validator-kit)。

## Oracle（预言机）

向链上智能合约提供外部数据（例如资产价格）的服务。Mezo 使用 Skip Connect 作为其主要预言机，并将其直接集成到验证者节点中。Pyth、Stork 和 Supra 等第三方预言机也可供使用。请参阅[预言机基础设施](/docs/zh/docs/developers/architecture/oracles)。

## Origination Fee（开仓费）

借入 MUSD 时收取的一次性费用，按借款金额的 0.1% 计算。该费用会计入贷款本金并产生利息。[再融资](#refinance再融资)时会收取再融资开仓费（常规费用的一部分）。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## PCV

协议控制价值（Protocol Controlled Value）。管理 MUSD 借款和再融资所收取费用的合约。费用在偿还启动贷款与 Gauge 系统之间分配。启动贷款还清后，费用将作为协议自有流动性累积在[稳定池](#stability-pool稳定池)中。请参阅 [MUSD 架构](/docs/zh/docs/users/borrow/architecture-and-terminology)。

## Poke

一种用于刷新 veBTC 仓位加成后权重的交易。在 veMEZO 投票发生变化、延长锁仓或追加 BTC 之后都需要执行。如果不执行 Poke，加成的变化将不会生效。请参阅 [Mezo Earn 术语表](/docs/zh/docs/users/mezo-earn/overview/glossary)。

## Pool Factory（池工厂合约）

在 Mezo 上部署新流动性池的智能合约。目前由 Mezo 团队管理，未来计划开放无需许可的池创建。主网地址：`0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`。请参阅 [Mezo Pools（开发者）](/docs/zh/docs/developers/features/mezo-pools)。

## Portal Bridge

位于 [portalbridge.com](https://portalbridge.com/) 的用户界面，可通过 Wormhole NTT 协议在 Mezo 与以太坊之间桥接 MUSD。请参阅 [MUSD Bridge](/docs/zh/docs/users/borrow/musd-bridge)。

## Price Feed（价格数据源）

由[预言机](#oracle预言机)提供、报告资产当前市场价格的链上数据。Mezo 使用 Skip Connect 在区块共识期间确定资产价格，并将其写入链上状态。请参阅[预言机基础设施](/docs/zh/docs/developers/architecture/oracles)。

## Rebase（反稀释分配）

从每周 MEZO 排放中向 veMEZO 持有者进行的反稀释分配。当锁定比率（veMEZO 供应量 / MEZO 总供应量）较低时，更大份额的排放将用于 Rebase，以保护早期锁仓者免受稀释。随着锁定的 MEZO 增多，Rebase 份额会缩小。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Recovery Mode（恢复模式）

当系统总抵押率（TCR）跌破 150% 的 [CCR](#critical-collateralization-ratio临界抵押率ccr) 时启动的临时安全状态。在恢复模式期间，清算阈值仍为 110%（与 Liquity v1 不同，MUSD 不会在恢复模式期间扩大清算范围）。但是，不能以低于 150% 的抵押率开立新贷款，并且再融资将被阻止。请参阅 [MUSD 清算与赎回](/docs/zh/docs/users/borrow/liquidation-mechanics)。

## Redemption（赎回）

直接从协议中将 MUSD 兑换为等值美元 BTC 的行为。任何 MUSD 持有者都可以赎回，无论其是否为借款人。赎回会优先针对抵押率最低的 [Trove](#trove)。这一机制有助于将 MUSD 维持在 \$1 的锚定价格。请参阅 [MUSD 清算与赎回](/docs/zh/docs/users/borrow/liquidation-mechanics)。

## Refinance（再融资）

将贷款利率更新为当前[全局利率](#global-interest-rate全局利率)的过程。再融资会产生较低的开仓费，但无需关闭并重新开立贷款。如果 BTC 价格上涨，您还可以通过再融资来扩大信用额度。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## Router Contract（路由合约）

通过 Mezo 上可用的[流动性池](#liquidity-pool流动性池)路由代币兑换的智能合约。用户将代币授权给路由合约，并使用所需参数调用兑换函数。主网地址：`0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`。请参阅 [Mezo Pools（开发者）](/docs/zh/docs/developers/features/mezo-pools)。

## RPC Endpoint（RPC 端点）

应用程序用于与 Mezo 区块链通信的网络 URL。RPC 端点支持标准的以太坊 JSON-RPC 方法。主网有多家提供商可供选择，包括 Boar、Imperator、Validation Cloud 和 dRPC。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## RPC Provider（RPC 提供商）

为 Mezo 网络运营 [RPC 端点](#rpc-endpointrpc-端点)的服务。Boar、Imperator、Validation Cloud 和 dRPC 等提供商均为主网提供 HTTPS 和 WebSocket 连接。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## Slippage（滑点）

交易的预期价格与实际成交价格之间的差额。在流动性较少的池中或交易规模较大时，滑点更高。[稳定型池](#stable-pool稳定型池)旨在最大限度地降低相关性资产交易对的滑点。

## Splitter

将 MEZO 排放分配到两个去向的合约。分配比例目前固定，并已通过治理锁定。请参阅 [Chain Splitter](#chain-splitter) 和 [Ecosystem Splitter](#ecosystem-splitter)。

## Stability Pool（稳定池）

作为抵御[清算](#liquidation清算)第一道防线的 MUSD 储备。用户将 MUSD 存入稳定池，并获得一部分被清算的抵押品作为回报。[PCV](#pcv) 合约以初始 100M MUSD 的存款为该池注入启动资金。请参阅 [MUSD 关键概念](/docs/zh/docs/users/borrow/concepts)。

## Stable Pool（稳定型池）

专为价值高度相关的资产（例如 MUSD 和 USDC）之间的交易而优化的[流动性池](#liquidity-pool流动性池)。稳定型池使用专门的公式来提供低得多的[滑点](#slippage滑点)，并收取 0.02% 的交易手续费。请参阅[流动性池费用](/docs/zh/docs/users/mezo-earn/pools/pools-fees)。

## Staking Gauge（质押 Gauge）

与质押代币（例如 LP 代币或 sMUSD 凭证代币）绑定的 [Gauge](#gauge)。质押者赚取 MEZO 排放；在该 Gauge 上投票的 veBTC 投票者则赚取交易手续费或协议收入。质押 Gauge 获得约 72% 的净排放。请参阅 [Mezo Earn 术语表](/docs/zh/docs/users/mezo-earn/overview/glossary)。

## Subgraph（子图）

可通过 GraphQL API 访问、经过索引且可查询的区块链数据层。Mezo 使用 Goldsky 部署子图，使 dApp 能够高效查询转账、池活动和协议状态等链上数据。请参阅[子图部署](/docs/zh/docs/developers/subgraphs)。

## Swap Fees（兑换手续费）

在[流动性池](#liquidity-pool流动性池)中每次代币兑换时收取的费用。波动型池收取 0.30%，稳定型池收取 0.02%。费用以输入代币收取，并保存在单独的 PoolFees 合约中，供流动性提供者领取。请参阅[流动性池费用](/docs/zh/docs/users/mezo-earn/pools/pools-fees)。

## tBTC

由 Thesis 构建、[Threshold Network](#threshold-network) 提供支持的去中心化比特币包装资产。tBTC 由原生比特币 1:1 支持，是 BTC 被桥接到以太坊兼容网络时所采用的形式。在 Mezo 上，存入的 BTC 会通过 tBTC 的托管基础设施路由。请参阅 [MUSD 架构](/docs/zh/docs/users/borrow/architecture-and-terminology)。

## Tail Emissions（尾部排放）

在[减半计划](#halving-schedule减半计划)第 8 年之后开始的永续 2% 年度 MEZO 排放率。尾部排放为验证者、流动性提供者和治理参与者无限期地提供持续激励。请参阅[排放计划](/docs/zh/docs/users/mezo/emissions)。

## Testnet（测试网）

开发者可以在不使用真实资产的情况下部署和测试应用程序的测试网络。Mezo 测试网的链 ID 为 `31611`。请参阅[配置您的环境](/docs/zh/docs/developers/getting-started/configure-environment)。

## TGE

代币生成事件（Token Generation Event）。MEZO 代币首次被创建和分发的时刻。社区和基金会的分配在 TGE 时解锁，而团队和投资者的分配则适用 1 年悬崖期和 3 年线性归属。请参阅[代币分配](/docs/zh/docs/users/mezo/token-distribution)。

## Threshold Network

为 [tBTC](#tbtc) 跨链桥提供支持的去中心化网络。Threshold 运营着一个去中心化签名者集合，自 2020 年初以来已桥接超过 28,000 枚比特币。请参阅 [MUSD 架构](/docs/zh/docs/users/borrow/architecture-and-terminology)。

## Token Distribution（代币分配）

1,000,000,000 枚 MEZO 创世供应量的分配方式：社区（40%）、投资者与合作伙伴（30%）、团队（20%）以及基金会（10%）。所有归属均在 [TGE](#tge) 后 36 个月内完成。请参阅[代币分配](/docs/zh/docs/users/mezo/token-distribution)。

## Trading Fees（交易手续费）

请参阅[兑换手续费](#swap-fees兑换手续费)。

## Trove

Mezo 上绑定到单个以太坊地址的抵押债务仓位。用户通过存入 BTC 并以其为抵押借入 [MUSD](#musd) 来开立 Trove。在类似协议中也称为“CDP”。请参阅[借款并铸造 MUSD](/docs/zh/docs/users/borrow/mint-musd)。

## Validator（验证者）

在 Mezo 网络上参与共识和出块的节点运营者。验证者运行 mezod 客户端、保障链的安全，并通过 Chain Splitter 获得 MEZO 排放。请参阅 [Mezo 验证者](/docs/zh/docs/developers/mezo-nodes/validators)。

## Validator Kit

用于部署和管理 Mezo 节点的综合工具包。支持 Docker、原生守护进程、Kubernetes 和云部署，并包含配置模板、监控和自动化脚本。请参阅 [Validator Kit 指南](/docs/zh/docs/developers/mezo-nodes/validator-kit)。

## veBTC

投票托管 BTC（Vote-escrowed BTC）。代表已锁定比特币的 NFT，在 Mezo Earn 中授予投票权和赚取费用的权利。投票权重会在锁定期内线性衰减。最长锁定期限为 28 天。请参阅 [veBTC 概览](/docs/zh/docs/users/mezo-earn/lock/vebtc)。

## veBTC Boost Gauge

附属于特定 veBTC NFT 的 [Gauge](#gauge)。veMEZO 持有者为这些 Gauge 投票，为该 veBTC 仓位提供[加成](#boost加成)，以换取[激励](#incentives激励)。请参阅[配对市场](/docs/zh/docs/users/mezo-earn/lock/vemezo/matching-market)。

## veMEZO

投票托管 MEZO（Vote-escrowed MEZO）。代表已锁定 MEZO 代币的 NFT，可为 veBTC 投票权提供最高 5x 的[加成](#boost加成)，并能以自身名义在 [veBTC Boost Gauge](#vebtc-boost-gauge) 和 [MEZO Gauges](#mezo-gauge) 上投票。它本身不具备治理权重，没有 veBTC 时也无法在[质押 Gauge](#staking-gauge质押-gauge) 上投票。最长锁定期限为 4 年。请参阅 [veMEZO 概览](/docs/zh/docs/users/mezo-earn/lock/vemezo)。

## Vesting Schedule（归属计划）

已锁定的代币分配逐步变为可用的时间表。所有 MEZO 归属均在 [TGE](#tge) 后 36 个月内完成。团队和投资者的分配有 1 年[悬崖期](#cliff悬崖期)，随后在 2 年内按月线性解锁。请参阅[代币分配](/docs/zh/docs/users/mezo/token-distribution)。

## Volatile Pool（波动型池）

为价格不相关的资产交易对（例如 BTC 和 MUSD）设计的[流动性池](#liquidity-pool流动性池)。波动型池使用恒定乘积公式（x * y = k），并收取 0.30% 的[兑换手续费](#swap-fees兑换手续费)。请参阅[流动性池费用](/docs/zh/docs/users/mezo-earn/pools/pools-fees)。

## Voting Weight（投票权重）

一个仓位在为 Gauge 投票时所具有的影响力。对于 veBTC，计算方式为锁定的 BTC 乘以剩余锁定期限，再除以最长锁定期限（28 天）。对于 veMEZO，适用相同的公式，但最长锁定期限为 4 年。请参阅[投票概览](/docs/zh/docs/users/mezo-earn/vote)。

## Wormhole

为 [MUSD Bridge](#musd-bridge) 提供支持的跨链消息传递协议。Wormhole 支持在 Mezo 与以太坊之间安全地转移代币。请参阅 [MUSD Bridge](/docs/zh/docs/users/borrow/musd-bridge)。

## Wormhole NTT

Wormhole 原生代币转移（Native Token Transfer）。[MUSD Bridge](#musd-bridge) 所使用的特定 Wormhole 协议。NTT 通过在源链上锁定代币、在目标链上铸造代币来保持代币的可互换性，从而使各链上的总供应量保持不变。请参阅 [MUSD Bridge](/docs/zh/docs/users/borrow/musd-bridge)。
