---
title: 常见问题
topic: developers
---

#### Mezo 是什么？面向构建者的价值主张 <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo 是一个无需许可、无需银行的比特币金融平台，旨在将比特币从被动的价值储存手段转变为具有生产力的动态金融资产。该平台的核心使命是让全球超过 1 亿名比特币持有者能够有目的地 HODL——无需出售资产即可利用其价值。为此，Mezo 构建了稳健的基础设施，为各种现实世界应用提供低成本、快速且安全的交易。

Mezo 的终极愿景是让比特币的使用变得“超常态”（supernormal）——在这种状态下，用比特币进行日常金融活动是如此顺畅、如此融入生活，以至于它就像使用借记卡一样，成为生活中理所当然、毫不起眼的一部分。

对开发者而言，Mezo 提供了独特且极具吸引力的价值主张。Mezo 背后的工作室 Thesis 同时也是以下产品的创建者：tBTC（规模最大的去中心化比特币跨链桥）、Acre（原生比特币收益协议）和 Fold（消费支出应用）。这套相互关联的产品从第一天起就为开发者提供了一组强大、经过预先审查且高度可互操作的“货币乐高”。在其他平台上，跨链桥、稳定币和收益来源等基础原语往往由彼此独立、互不隶属的第三方提供；相比之下，这一集成技术栈可显著降低开发阻力和系统性风险。在 Mezo 上构建，开发者可以接入一个完整且自我强化的金融生态，该生态旨在围绕全球最安全、最去中心化的资产，驱动新一层的经济活动。

#### 什么是 MUSD？

MUSD 是 Mezo 生态的核心，也是其原生稳定币。MUSD 的设计目标是 100% 由比特币储备支持，并与美元保持稳定的 1:1 锚定。它的主要作用是充当驱动 Mezo 经济的流动性交换媒介，使用户能够释放其比特币持仓的价值。其机制很简单：用户可以将比特币（以 tBTC 的形式）存入安全的链上金库，并以此为抵押铸造 MUSD。新铸造的 MUSD 随后可在整个生态中用于各种活动，包括购买商品和服务、在去中心化交易所交易、提供流动性以赚取收益，或参与其他 DeFi 协议。

对开发者而言，Mezo 与 MUSD 共同构建了一个“开箱即用”的生态，带来以下战略优势：

* **借助熟悉的工具大幅降低阻力（EVM 与 RainbowKit）：** Mezo 完全兼容 EVM，Solidity 开发者可以部署现有合约，并使用 Hardhat、Foundry 等常用工具，零学习成本。
* **借助 Mezo Passport 实现顺畅的用户引导：** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) 允许用户使用其原生比特币钱包（如 Xverse 或 Unisat）签署 EVM 交易，从而解决了关键的钱包割裂问题。这种账户抽象意味着您只需构建一套简洁的用户体验，即可触达整个比特币社区，而无需编写复杂的自定义钱包逻辑。
* [借助 MUSD 获得强大的金融原语：](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) 是一个强大的构建模块。其较低的固定利率和较高的 LTV（最高 90%）为可预测的金融产品（例如固定期限贷款）提供了技术基础。

#### 什么是循环比特币经济？

循环比特币经济是一个自我维持的系统，比特币在其中既用于赚取也用于支出，而无需兑换成法定货币。它形成了一个闭环，个人和企业直接以 BTC 结算工资、商品和服务。

Mezo 与 MUSD 的结合形成了一个自我强化的经济循环：

1. **释放：** 比特币持有者存入 BTC 并铸造 MUSD，在不出售核心资产的情况下激活其资本。
2. **交易：** 他们将这些 MUSD 用于从交易、借贷到日常支付的各种用途。
3. **强化：** 这些链上活动会产生交易费用（以 BTC 支付），从而保障网络安全，并强化比特币作为交易资产和价值储存手段的效用。

Mezo 提供轨道，MUSD 提供燃料，为开发者提供了一个独特的平台，用于构建能为庞大且服务不足的比特币用户市场带来切实价值的应用。

#### Mezo 链的架构是什么？

Mezo 链采用混合架构，旨在同时最大化开发者可及性和网络性能。它是一条完全兼容 EVM 的区块链，基于 Cosmos SDK 构建，并运行在 CometBFT 共识引擎之上。其代码库是 Evmos 经过大量修改的分叉。

这一技术栈具备一组强大的特性组合：

* **EVM 兼容性**：庞大的全球以太坊和 Solidity 开发者社区可以将其现有的智能合约和去中心化应用（dApp）部署到 Mezo 上，几乎无需修改代码。他们可以继续使用熟悉且成熟的工具链，包括 MetaMask、Hardhat、Remix 和 Foundry，从而大幅降低在比特币生态中进行构建的门槛。
* **Cosmos SDK**：基于 Cosmos SDK 构建为 Mezo 提供了链主权，使其能够自定义自身的逻辑和治理。

#### Mezo 使用哪种代币支付 Gas 费？ <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC（底层[通过 tBTC 实现](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)）。

#### 如何获取 Mezo 测试网 BTC？ <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

通过 Mezo 水龙头获取测试网资金：[https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### 如何集成 Mezo Passport？ <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) 是官方钱包连接库，专为在 Mezo 网络上提供顺畅、统一的用户体验而构建。它负责处理将比特币原生钱包（如 Xverse 和 Unisat）和标准 EVM 钱包（如 MetaMask）连接到您的 dApp 时的复杂细节。如需最新、最详细的集成指南（包括安装说明、配置、可用的 hooks 和代码示例），开发者应参阅 [**Mezo Passport 官方文档**](https://www.npmjs.com/package/@mezo-org/passport)**。**

#### 如何为我的项目获取资金和支持？ <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**Supernormal Foundation**

​[Supernormal Foundation](https://www.supernormal.foundation/) 是专门负责构建、治理和发展 Mezo 网络及 MUSD 经济的组织。它秉持社区驱动的理念，是构建者获得正式支持的主要来源。

**Mezo Founder Program**

​[Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) 是面向希望在 Mezo 上构建并集成 MUSD 的早期开发者和项目（MVP 必须已在测试网上线）的旗舰计划。该计划旨在推动 BitcoinFi 领域的创新。

* **权益：** 符合条件的团队可优先获得一整套资源，包括：
  * **资助：** 用于加速开发的资金支持。
  * **联合营销：** 协同开展营销活动，提升项目知名度。
  * **人脉拓展：** 与生态中的其他构建者和领导者建立联系。
  * **实操集成支持：** 直接的技术协助，确保在 Mezo 上顺利部署。

​[**立即申请**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

对于更成熟或有远大增长计划的项目，Supernormal Foundation 与领先的风险投资机构 **Boost VC、Draper Associates 和 Thesis** 合作，提供专门的加速器计划。这一高强度计划提供前期投资和量身定制的支持，包括在产品战略和市场进入执行方面的深度指导，帮助团队完成从可用产品到可规模化业务的跨越。

#### 在哪里可以获得社区支持并提出技术问题？ <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

Mezo 生态中所有社区和开发者交流的中心是[官方 Discord 服务器。](https://discord.com/invite/mezo)​

#### Mezo 有哪些合作伙伴？如何与其集成？ <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

请参阅[集成与合作伙伴](https://mezo.org/docs/developers/getting-started/integrations-and-partners)中的最新列表。
