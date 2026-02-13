---
title: Glossary
description: A comprehensive A-Z reference of terms used across the Mezo ecosystem.
topic: users
---

A comprehensive reference of terms used across the Mezo ecosystem. For Mezo Earn-specific terms, see the [Mezo Earn Glossary](/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker. A type of decentralized exchange that uses liquidity pools and mathematical formulas instead of order books to determine asset prices and execute trades. Mezo Pools use an Aerodrome-style AMM with constant-product curves for volatile pairs and stable-curves for correlated pairs. See [Mezo Pools Overview](/docs/users/mezo-earn/pools).

## Block Explorer

A web tool for viewing transactions, addresses, and on-chain data. Mezo's mainnet explorer is at [explorer.mezo.org](https://explorer.mezo.org/) and the testnet explorer is at [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

The multiplier applied to a veBTC position when veMEZO votes are directed to it. Without boost, veBTC operates at 1x. With maximum boost, veBTC operates at 5x. The boost depends on your relative share of total veBTC and total veMEZO in the system. See [Boost Mechanism](/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Boosted Weight

The combined voting weight when veBTC and veMEZO are paired. Calculated as your veBTC weight multiplied by your boost multiplier (between 1x and 5x). Boosted weight determines your share of fees and your influence over emissions.

## BTC

Bitcoin. BTC is the native gas token on Mezo (with 18 decimals) and the primary collateral for minting [MUSD](#musd). All transactions on Mezo are paid in BTC.

## BTC Wallet

A Bitcoin-native wallet used to deposit BTC directly to Mezo. Supported wallets include UniSat, OKX, and Xverse. Supported address formats are Legacy (P2PKH), Native SegWit (P2WPKH), and Nested SegWit (P2SH-P2WPKH). See [Deposit Assets](/docs/users/getting-started/deposit-assets).

## Chain ID

A numeric identifier for a blockchain network. Mezo Mainnet uses chain ID `31612` and Mezo Testnet uses chain ID `31611`. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## Chain Splitter

The first splitter in the emissions hierarchy. Controls what percentage of MEZO emissions go to validators (initially 20%) versus the rest of the ecosystem (80%). The ratio is governable but can only change by ±1% per epoch. See [Emissions Schedule](/docs/users/mezo/emissions).

## Cliff

A waiting period before tokens begin to unlock. In Mezo's vesting schedule, the Team and Investor allocations have a 1-year cliff from TGE, meaning no tokens unlock during the first 12 months. See [Token Distribution](/docs/users/mezo/token-distribution).

## Collateral

Assets pledged to secure a loan. On Mezo, BTC is deposited as collateral to borrow [MUSD](#musd). If the collateral's value drops too low relative to the debt, the position may be [liquidated](#liquidation). See [Borrow and Mint MUSD](/docs/users/musd/mint-musd).

## Collateral Surplus

The excess collateral remaining after a [trove](#trove) is fully redeemed against. This surplus is sent to a holding contract for the borrower to claim. See [Liquidations & Redemptions](/docs/users/musd/liquidation-mechanics).

## Collateralization Ratio (ICR)

Individual Collateralization Ratio. The ratio of the dollar value of a trove's collateral to its total debt. For example, if your BTC collateral is worth $13,000 and your debt is $10,000, your ICR is 130%. See [MUSD Key Concepts](/docs/users/musd/concepts).

## CometBFT

The consensus engine underlying Mezo, formerly known as Tendermint. CometBFT provides Byzantine Fault Tolerant consensus, enabling fast block finality on the Mezo network.

## Cosmos SDK

The modular framework used to build the Mezo blockchain. Cosmos SDK provides the application layer, while [CometBFT](#cometbft) handles consensus. This architecture allows Mezo to support both Cosmos-native and [EVM](#evm)-compatible functionality.

## Critical Collateralization Ratio (CCR)

The system-wide collateral threshold set at 150%. When the Total Collateralization Ratio (TCR) falls below the CCR, the system enters [Recovery Mode](#recovery-mode). See [MUSD Key Concepts](/docs/users/musd/concepts).

## dApp

Decentralized Application. A software application that runs on a blockchain rather than centralized servers. Developers can build dApps on Mezo using standard EVM tooling. See [dApp Requirements](/docs/developers/getting-started/dapp-requirements).

## Decay

The gradual reduction in voting weight as a lock approaches expiration. veBTC and veMEZO voting power decays linearly over time. You can reset decay by extending your lock. See [veBTC Overview](/docs/users/mezo-earn/lock/vebtc) and [veMEZO Overview](/docs/users/mezo-earn/lock/vemezo).

## Delegator

A participant who delegates their stake or voting power to a [validator](#validator). Validators may share rewards with delegators, though this is not required.

## Ecosystem Gauge

A [gauge](#gauge) that routes MEZO emissions to partner protocols or ecosystem initiatives. Ecosystem gauges receive approximately 8% of net emissions and are used to fund grants and ecosystem development. See [Emissions Schedule](/docs/users/mezo/emissions).

## Ecosystem Splitter

The second splitter in the emissions hierarchy. Divides non-validator emissions between staking gauges (initially 90%) and non-staking ecosystem gauges (initially 10%). The ratio is governable with ±1% movement per epoch. See [Emissions Schedule](/docs/users/mezo/emissions).

## Emissions

New MEZO tokens distributed each epoch to gauges, validators, and veMEZO holders (as rebases). Emissions follow a Bitcoin-inspired halving schedule, starting at 25% annualized and declining to 2% after year 8. See [Emissions Schedule](/docs/users/mezo/emissions).

## Epoch

A 7-day cycle that governs voting and reward distribution in Mezo Earn. Epochs begin every Thursday at 00:00 UTC. Votes do not carry over between epochs. See [veBTC Overview](/docs/users/mezo-earn/lock/vebtc).

## ERC-20

A standard interface for fungible tokens on EVM-compatible blockchains. Tokens bridged from Ethereum to Mezo are represented as mERC-20 tokens (e.g., mUSDC, mUSDT). See [Bridges](/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine. The runtime environment for smart contracts on Ethereum-compatible blockchains. Mezo is EVM-compatible, meaning developers can deploy Solidity contracts using familiar tools like Hardhat and Foundry. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## EVM Wallet

An Ethereum-compatible wallet (e.g., MetaMask, Rabby) used to interact with Mezo's EVM layer. EVM wallets are used for dApp interactions, swaps, and managing positions on Mezo. See [Connect your wallet](/docs/users/getting-started/connect).

## Faucet

A service that distributes small amounts of testnet tokens for development purposes. The Mezo testnet faucet provides test BTC for deploying and testing dApps on Mezo Testnet.

## Gas Compensation

A 200 MUSD refund paid to the caller of a [liquidation](#liquidation) function, along with 0.5% of the liquidated collateral. This ensures liquidations remain profitable for callers even during high network activity. The 200 MUSD is deducted when a loan is opened and returned when the loan is closed normally. See [MUSD Architecture](/docs/users/musd/architecture-and-terminology).

## Gauge

A smart contract that receives and distributes rewards based on votes. The more voting weight a gauge receives, the larger its share of MEZO emissions for that epoch. Gauge types include [staking gauges](#staking-gauge), [validator gauges](#validator-gauge), [ecosystem gauges](#ecosystem-gauge), and [veBTC boost gauges](#vebtc-boost-gauge). See [Mezo Earn Glossary](/docs/users/mezo-earn/overview/glossary).

## Global Interest Rate

A single interest rate set by governance that applies to all newly opened MUSD loans. Once a loan is opened, it retains the rate at which it was created, even if the global rate changes. Users can [refinance](#refinance) to adopt the current global rate. See [MUSD Key Concepts](/docs/users/musd/concepts).

## Governance

The system through which veBTC holders shape protocol parameters and emissions. Governable parameters include splitter ratios and the max boost multiplier. veMEZO boosts voting power but has no independent governance rights. See [Governance](/docs/users/mezo/governance).

## Halving Schedule

The Bitcoin-inspired model governing MEZO emissions. The emission rate halves approximately every 2 years: 25% in years 0-2, 12.5% in years 2-4, 6.25% in years 4-8, then stabilizes at 2% perpetually. See [Emissions Schedule](/docs/users/mezo/emissions).

## Impermanent Loss

The potential loss a liquidity provider experiences when the price ratio of pooled assets changes compared to simply holding them. This is inherent to AMM-based pools and is more pronounced in [volatile pools](#volatile-pool).

## Incentives

Rewards posted on gauges to attract votes. Protocols or users deposit incentives (in any ERC-20 token) to attract voting power to specific gauges. Incentives create the [matching market](#matching-market) between veBTC and veMEZO holders. See [Voting Overview](/docs/users/mezo-earn/vote).

## Liquidation

The forced closure of an undercollateralized [trove](#trove). A trove can be liquidated when its [ICR](#collateralization-ratio-icr) falls below 110% (or 150% during [Recovery Mode](#recovery-mode)). The [Stability Pool](#stability-pool) absorbs the debt, and the liquidated collateral is distributed to Stability Pool depositors. See [Liquidations & Redemptions](/docs/users/musd/liquidation-mechanics).

## Liquidity Pool

A smart contract holding reserves of two tokens that enables decentralized trading. Users deposit assets into a pool to become liquidity providers and earn trading fees. See [Mezo Pools Overview](/docs/users/mezo-earn/pools).

## Lock

The act of committing BTC or MEZO for a set period to receive [veBTC](#vebtc) or [veMEZO](#vemezo). Longer locks grant higher initial voting weight. veBTC locks range from 1 to 28 days; veMEZO locks range from 1 week to 4 years. See [veBTC Overview](/docs/users/mezo-earn/lock/vebtc) and [veMEZO Overview](/docs/users/mezo-earn/lock/vemezo).

## LP Token

Liquidity Provider token. An ERC-20 token received when you deposit assets into a [liquidity pool](#liquidity-pool). LP tokens represent your proportional share of the pool's reserves and entitle you to a portion of trading fees. See [Mezo Pools Overview](/docs/users/mezo-earn/pools).

## Mainnet

The production blockchain network where real assets and transactions are processed. Mezo Mainnet has chain ID `31612` and uses BTC for gas. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## Matching Market

The economic mechanism where veBTC holders can attract veMEZO votes by posting [incentives](#incentives) on their boost gauges, and veMEZO holders can earn yield by voting on gauges with attractive incentives. See [Matching Market](/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Mezo's native token used to boost voting power and influence where protocol fees and incentives go. MEZO can be locked as [veMEZO](#vemezo) to multiply veBTC voting weight by up to 5x and earn rebase rewards. Total genesis supply is 1,000,000,000 MEZO. See [MEZO Overview](/docs/users/mezo).

## Mezo App

The primary web interface at [mezo.org](https://mezo.org) for interacting with the Mezo network. From the Mezo App, users can deposit assets, bridge, borrow MUSD, provide liquidity, lock tokens, and vote on gauges.

## Mezo Borrow

The feature within the Mezo App that allows users to deposit BTC as collateral and borrow [MUSD](#musd) against it. Each borrowing position is called a [trove](#trove). See [Borrow and Mint MUSD](/docs/users/musd/mint-musd).

## Mezo Bridge

The native bridge for depositing and withdrawing assets between Mezo and Ethereum or Bitcoin. Supports BTC, tBTC, and mERC-20 tokens. See [Bridges](/docs/users/mainnet/bridges).

## Mezo Earn

The comprehensive earning and governance system on Mezo, encompassing locking ([veBTC](#vebtc), [veMEZO](#vemezo)), voting on [gauges](#gauge), providing liquidity in [pools](#liquidity-pool), and depositing in [vaults](#musd-savings-vault). See [Mezo Earn Overview](/docs/users/mezo-earn/overview).

## Mezo Market

The marketplace within the Mezo App for token swaps. Uses the [router contract](#router-contract) to route trades through available [liquidity pools](#liquidity-pool).

## Mezo Passport

A developer package built on RainbowKit that provides wallet connection options for both Bitcoin and EVM wallets. Mezo Passport integrates with viem and wagmi for streamlined wallet management. See [Configure Mezo Passport](/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

The liquidity pool system on Mezo, functioning as automated on-chain liquidity reserves for token swaps. Pools use an Aerodrome-style AMM and come in two types: [volatile](#volatile-pool) and [stable](#stable-pool). See [Mezo Pools Overview](/docs/users/mezo-earn/pools).

## Minimum Collateralization Ratio (MCR)

The minimum collateral ratio required for a [trove](#trove), set at 110%. If a trove's [ICR](#collateralization-ratio-icr) falls below the MCR, it becomes eligible for [liquidation](#liquidation). See [MUSD Key Concepts](/docs/users/musd/concepts).

## MUSD

Mezo's Bitcoin-backed stablecoin, pegged to $1 USD. Users borrow MUSD by depositing BTC as collateral in a [trove](#trove). The peg is maintained through [redemptions](#redemption) and the [Stability Pool](#stability-pool). See [MUSD Overview](/docs/users/musd).

## MUSD Bridge

The cross-chain bridge for transferring MUSD between Mezo and Ethereum, powered by Wormhole's [Native Token Transfer (NTT)](#wormhole-ntt) protocol. See [MUSD Bridge](/docs/users/musd/musd-bridge).

## MUSD Savings Rate Gauge

A [staking gauge](#staking-gauge) for the [MUSD Savings Vault](#musd-savings-vault). Users who deposit MUSD into the savings vault can stake their sMUSD receipt tokens to earn MEZO emissions, while veBTC voters on this gauge earn MUSD yield from protocol fees. See [Vaults](/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Mezo's native savings product for MUSD holders. Deposit MUSD to earn a share of protocol fees generated by borrowing activity (interest, issuance fees, refinance fees). You receive sMUSD as a receipt token representing your share. See [Vaults](/docs/users/mezo-earn/vaults).

## Node

A computer running the Mezo chain client (mezod) that participates in the network. Node types include [validator](#validator) nodes (consensus and block production), RPC nodes (API endpoints for dApps), and seed nodes (network bootstrapping). See [Validator Kit](/docs/developers/mezo-nodes/validator-kit).

## Oracle

A service that provides external data (such as asset prices) to smart contracts on-chain. Mezo uses Skip Connect as its primary oracle, integrated directly into validator nodes. Third-party oracles including Pyth, Stork, and Supra are also available. See [Oracle Infrastructure](/docs/developers/architecture/oracles).

## Origination Fee

A one-time fee charged when borrowing MUSD, calculated as 0.1% of the borrowed amount. The fee is added to the loan's principal and accrues interest. A refinancing origination fee (a fraction of the regular fee) is charged when [refinancing](#refinance). See [MUSD Key Concepts](/docs/users/musd/concepts).

## PCV

Protocol Controlled Value. A contract that manages fees collected from MUSD borrowing and refinancing. Fees are allocated between paying down the bootstrap loan and the gauge system. Once the bootstrap loan is repaid, fees accrue as protocol-owned liquidity in the [Stability Pool](#stability-pool). See [MUSD Architecture](/docs/users/musd/architecture-and-terminology).

## Poke

A transaction that refreshes a veBTC position's boosted weight. Required after changes to veMEZO votes, lock extensions, or adding BTC. Without poking, boost changes don't take effect. See [Mezo Earn Glossary](/docs/users/mezo-earn/overview/glossary).

## Pool Factory

The smart contract that deploys new liquidity pools on Mezo. Currently managed by the Mezo team with plans to open permissionless pool creation in the future. Mainnet address: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. See [Mezo Pools (Developers)](/docs/developers/features/mezo-pools).

## Portal Bridge

The user interface at [portalbridge.com](https://portalbridge.com/) for bridging MUSD between Mezo and Ethereum using the Wormhole NTT protocol. See [MUSD Bridge](/docs/users/musd/musd-bridge).

## Price Feed

On-chain data provided by [oracles](#oracle) that reports the current market price of assets. Mezo uses Skip Connect to determine asset prices during block consensus and write them to on-chain state. See [Oracle Infrastructure](/docs/developers/architecture/oracles).

## Rebase

Anti-dilution distributions to veMEZO holders from weekly MEZO emissions. When the lock ratio (veMEZO supply / total MEZO supply) is low, a larger share of emissions goes to rebases, protecting early lockers from dilution. As more MEZO is locked, the rebase share shrinks. See [Emissions Schedule](/docs/users/mezo/emissions).

## Recovery Mode

A temporary safety state that activates when the system-wide Total Collateralization Ratio (TCR) falls below the [CCR](#critical-collateralization-ratio-ccr) of 150%. During Recovery Mode, the liquidation threshold increases from 110% to 150%, new loans cannot be opened below 150%, and refinancing is blocked. See [Liquidations & Redemptions](/docs/users/musd/liquidation-mechanics).

## Redemption

The act of swapping MUSD for an equivalent dollar value of BTC directly from the protocol. Any MUSD holder can redeem, regardless of whether they are a borrower. Redemptions target the [trove](#trove) with the lowest collateralization ratio first. This mechanism helps maintain the MUSD peg at $1. See [Liquidations & Redemptions](/docs/users/musd/liquidation-mechanics).

## Refinance

The process of updating a loan's interest rate to the current [global interest rate](#global-interest-rate). Refinancing incurs a reduced origination fee but avoids the need to close and reopen a loan. You can also refinance to extend your line of credit if BTC has appreciated. See [MUSD Key Concepts](/docs/users/musd/concepts).

## Router Contract

The smart contract that routes token swaps through available [liquidity pools](#liquidity-pool) on Mezo. Users approve tokens to the router and call swap functions with their desired parameters. Mainnet address: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. See [Mezo Pools (Developers)](/docs/developers/features/mezo-pools).

## RPC Endpoint

A network URL that applications use to communicate with the Mezo blockchain. RPC endpoints support standard Ethereum JSON-RPC methods. Multiple providers are available for mainnet, including Boar, Imperator, Validation Cloud, and dRPC. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## RPC Provider

A service that operates [RPC endpoints](#rpc-endpoint) for the Mezo network. Providers like Boar, Imperator, Validation Cloud, and dRPC offer both HTTPS and WebSocket connections for mainnet. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## Slippage

The difference between the expected price of a trade and the actual execution price. Slippage is higher in pools with less liquidity or for larger trade sizes. [Stable pools](#stable-pool) are designed to minimize slippage for correlated asset pairs.

## Splitter

A contract that divides MEZO emissions between two destinations. Split ratios are governable but can only change by ±1% per epoch to prevent sudden shifts. See [Chain Splitter](#chain-splitter) and [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

A reserve of MUSD that serves as the first line of defense against [liquidations](#liquidation). Users deposit MUSD into the Stability Pool and receive a share of liquidated collateral in return. The [PCV](#pcv) contract seeds the pool with an initial 100M MUSD deposit. See [MUSD Key Concepts](/docs/users/musd/concepts).

## Stable Pool

A [liquidity pool](#liquidity-pool) optimized for trading between assets with highly correlated values, such as MUSD and USDC. Stable pools use a specialized formula to provide much lower [slippage](#slippage) and charge a 0.05% trading fee. See [Pools Fees](/docs/users/mezo-earn/pools/pools-fees).

## Staking Gauge

A [gauge](#gauge) tied to a staking token (like LP tokens or sMUSD receipt tokens). Stakers earn MEZO emissions; veBTC voters on the gauge earn trading fees or protocol revenue. Staking gauges receive approximately 72% of net emissions. See [Mezo Earn Glossary](/docs/users/mezo-earn/overview/glossary).

## Subgraph

An indexed, queryable data layer for blockchain data, accessed via GraphQL APIs. Mezo uses Goldsky for subgraph deployment, enabling dApps to efficiently query on-chain data like transfers, pool activity, and protocol state. See [Subgraph Deployment](/docs/developers/subgraphs).

## Swap Fees

Fees charged on each token swap in a [liquidity pool](#liquidity-pool). Volatile pools charge 0.30% and stable pools charge 0.05%. Fees are collected in the input token and held in a separate PoolFees contract for liquidity providers to claim. See [Pools Fees](/docs/users/mezo-earn/pools/pools-fees).

## tBTC

A decentralized Bitcoin wrapper built by Thesis and powered by the [Threshold Network](#threshold-network). tBTC is backed 1:1 by native Bitcoin and is the form BTC takes when bridged to Ethereum-compatible networks. On Mezo, deposited BTC is routed through tBTC's custody infrastructure. See [MUSD Architecture](/docs/users/musd/architecture-and-terminology).

## Tail Emissions

The perpetual 2% annual MEZO emission rate that begins after year 8 of the [halving schedule](#halving-schedule). Tail emissions provide ongoing incentives for validators, liquidity providers, and governance participants indefinitely. See [Emissions Schedule](/docs/users/mezo/emissions).

## Testnet

A testing network where developers can deploy and test applications without using real assets. Mezo Testnet has chain ID `31611`. See [Configure your Environment](/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event. The moment when MEZO tokens were first created and distributed. Community and Foundation allocations were unlocked at TGE, while Team and Investor allocations are subject to a 1-year cliff and 3-year linear vesting. See [Token Distribution](/docs/users/mezo/token-distribution).

## Threshold Network

A decentralized network that powers the [tBTC](#tbtc) bridge. Threshold operates a decentralized signer set that has bridged over 28,000 Bitcoin since early 2020. See [MUSD Architecture](/docs/users/musd/architecture-and-terminology).

## Token Distribution

The allocation of the 1,000,000,000 MEZO genesis supply: Community (40%), Investors & Partners (30%), Team (20%), and Foundation (10%). All vesting completes within 36 months of [TGE](#tge). See [Token Distribution](/docs/users/mezo/token-distribution).

## Trading Fees

See [Swap Fees](#swap-fees).

## Trove

A collateralized debt position on Mezo, bound to a single Ethereum address. Users open a trove by depositing BTC and borrowing [MUSD](#musd) against it. Also referred to as a "CDP" in similar protocols. See [Borrow and Mint MUSD](/docs/users/musd/mint-musd).

## Validator

A node operator that participates in consensus and block production on the Mezo network. Validators run the mezod client, secure the chain, and receive MEZO emissions based on delegated vote weight. See [Mezo Validators](/docs/developers/mezo-nodes/validators).

## Validator Gauge

A [gauge](#gauge) that directs MEZO emissions to network validators who secure the Mezo chain. Validator gauges receive approximately 20% of emissions via the [Chain Splitter](#chain-splitter). See [Mezo Earn Glossary](/docs/users/mezo-earn/overview/glossary).

## Validator Kit

A comprehensive toolkit for deploying and managing Mezo nodes. Supports Docker, native daemon, Kubernetes, and cloud deployment. Includes configuration templates, monitoring, and automation scripts. See [Validator Kit Guide](/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC. An NFT representing locked Bitcoin that grants voting power and fee-earning rights in Mezo Earn. Voting weight decays linearly over the lock period. Max lock is 28 days. See [veBTC Overview](/docs/users/mezo-earn/lock/vebtc).

## veBTC Boost Gauge

A [gauge](#gauge) attached to a specific veBTC NFT. veMEZO holders vote on these gauges to provide [boost](#boost) to that veBTC position in exchange for [incentives](#incentives). See [Matching Market](/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO. An NFT representing locked MEZO tokens that can [boost](#boost) veBTC voting power up to 5x. veMEZO carries no independent governance weight — it only amplifies veBTC positions. Max lock is 4 years. See [veMEZO Overview](/docs/users/mezo-earn/lock/vemezo).

## Vesting Schedule

The timeline over which locked token allocations gradually become available. All MEZO vesting completes within 36 months of [TGE](#tge). Team and Investor allocations have a 1-year [cliff](#cliff) followed by 2-year linear monthly unlock. See [Token Distribution](/docs/users/mezo/token-distribution).

## Volatile Pool

A [liquidity pool](#liquidity-pool) designed for asset pairs with uncorrelated prices, such as BTC and MUSD. Volatile pools use a constant-product formula (x * y = k) and charge a 0.30% [swap fee](#swap-fees). See [Pools Fees](/docs/users/mezo-earn/pools/pools-fees).

## Voting Weight

The influence a position has when voting for gauges. For veBTC, calculated as locked BTC multiplied by remaining lock duration divided by max lock duration (28 days). For veMEZO, the same formula applies but with a 4-year max lock. See [Voting Overview](/docs/users/mezo-earn/vote).

## Wormhole

A cross-chain messaging protocol that powers the [MUSD Bridge](#musd-bridge). Wormhole enables secure token transfers between Mezo and Ethereum. See [MUSD Bridge](/docs/users/musd/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. The specific Wormhole protocol used for the [MUSD Bridge](#musd-bridge). NTT maintains token fungibility by locking tokens on the source chain and minting on the destination, keeping total supply constant across chains. See [MUSD Bridge](/docs/users/musd/musd-bridge).
