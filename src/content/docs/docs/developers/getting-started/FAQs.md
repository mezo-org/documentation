---
title: FAQ
---

# FAQs

#### What is Mezo? The Value Proposition for Builders <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo is a permissionless, bank-free Bitcoin finance platform engineered to transform Bitcoin from a passive store of value into a productive, dynamic financial asset. The platform's core mission is to enable the more than 100 million Bitcoin holders worldwide to HODL with a purpose, by using the value of their assets without needing to sell them. This is achieved by creating a robust infrastructure that facilitates cheap, fast, and secure transactions for a variety of real-world applications.

The ultimate vision for Mezo is to make the use of Bitcoin supernormal—a state where using Bitcoin for everyday financial activities is so seamless and integrated that it becomes an obvious, unremarkable part of life, like using a debit card.

For developers, Mezo presents a distinct and compelling value proposition. Thesis, the studio behind Mezo, is also the creator of tBTC, the largest decentralized Bitcoin bridge; Acre, a native Bitcoin yield protocol; and Fold, a consumer spending application. This suite of interconnected products provides developers with a powerful, pre-vetted, and highly interoperable set of "money legos" from day one. This integrated stack significantly reduces development friction and systemic risk compared to building on other platforms where essential primitives like bridges, stablecoins, and yield sources are often provided by disparate, unaffiliated third parties. By building on Mezo, developers can tap into a complete, self-reinforcing financial ecosystem designed to power a new layer of economic activity centered on the world's most secure and decentralized asset.

#### What is MUSD?

At the heart of the Mezo ecosystem is MUSD, its native stablecoin. MUSD is designed to be 100% backed by Bitcoin reserves and maintain a stable 1:1 peg with the U.S. dollar. Its primary function is to serve as the liquid medium of exchange that powers the Mezo economy, enabling users to unlock the value of their Bitcoin holdings.The mechanism is straightforward: users can deposit their Bitcoin (in the form of tBTC) into a secure, on-chain vault and mint MUSD against it. This newly minted MUSD can then be used across the ecosystem for a wide range of activities, including spending on goods and services, trading on decentralized exchanges, providing liquidity to earn yield, or participating in other DeFi protocols.

For developers, Mezo & MUSD create a "batteries-included" ecosystem that offer strategic advantages:

* **Radically Reduced Friction with Familiar Tools (EVM & RainbowKit):** Mezo is fully EVM-compatible, allowing Solidity developers to deploy existing contracts and use their favorite tools like Hardhat and Foundry with zero learning curve.
* **Seamless User Onboarding with Mezo Passport:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) solves the critical wallet disconnect by allowing users to sign EVM transactions with their native Bitcoin wallets (like Xverse or Unisat). This account abstraction means you can build one clean UX to reach the entire Bitcoin community without writing complex, custom wallet logic.
* [Powerful Financial Primitives with MUSD:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) is a powerful building block. Its low, fixed interest rates and high LTV (up to 90%) are enabling technologies for predictable financial products (e.g., fixed-term loans).

#### What is a Circular Bitcoin Economy?

A circular Bitcoin economy is a self-sustaining system where Bitcoin is used for both earning and spending without needing to be converted to fiat currency. It creates a closed loop where individuals and businesses transact directly in BTC for salaries, goods, and services.

The combination of Mezo and MUSD creates a self-reinforcing economic loop:

1. **Unlock:** Bitcoin holders deposit their BTC and mint MUSD, activating their capital without selling their core asset.
2. **Transact:** They use this MUSD for everything from trading and lending to everyday payments.
3. **Reinforce:** This onchain activity generates transaction fees (paid in BTC), which secures the network and reinforces Bitcoin's utility as a transactional asset, as well as a store of value.

Mezo provides the rails, and MUSD provides the fuel, giving developers a unique platform to create applications that offer tangible value to the massive, underserved market of Bitcoiners.

#### What is the architecture of the Mezo chain?

The Mezo chain is engineered with a hybrid architecture designed to maximize both developer accessibility and network performance. It is a fully EVM-compatible blockchain, built using the Cosmos SDK and operating on the CometBFT consensus engine. The codebase is a heavily modified fork of Evmos.

This technical stack offers a powerful combination of features:

* **EVM Compatibility**: This allows the vast global community of Ethereum and Solidity developers to deploy their existing smart contracts and decentralized applications (dApps) on Mezo with minimal to no code changes. They can continue to use the familiar and mature toolchains they are accustomed to, including MetaMask, Hardhat, Remix, and Foundry, which dramatically lowers the barrier to entry for building within the Bitcoin ecosystem.
* **Cosmos SDK**: Building on the Cosmos SDK provides Mezo with chain sovereignty, enabling it to customize its logic and governance.

#### What token is used for gas fees on Mezo? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC ([via tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/) under the hood).

#### How do I get testnet BTC for Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Get testnet funds with the Mezo faucet: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### How Do I Integrate with Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) is the official wallet connection library, purpose-built to provide a seamless and unified user experience on the Mezo network. It handles the complexities of connecting both Bitcoin-native wallets (like Xverse and Unisat) and standard EVM wallets (like MetaMask) to your dApp.For the most current and detailed integration guide, including installation instructions, configuration, available hooks, and code examples, developers should refer to [**Official Mezo Passport Documentation**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### How can I get funding and support for my project? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**The Supernormal Foundation**

​[The Supernormal Foundation](https://www.supernormal.foundation/) is the dedicated organization tasked with building, governing, and growing the Mezo network and the MUSD economy. It operates with a community-powered ethos and is the primary source of formal support for builders.

**Alpha Builder Program**

​[The Aplha Builder Program](https://mezo.org/blog/apply-to-mezos-alpha-builder-program/) is the flagship initiative for early-stage developers and projects (MVP must be live on testnet) looking to build on Mezo and integrate MUSD. The program is designed to catalyze innovation in the BitcoinFi space.

* **Benefits:** Qualified teams gain priority access to a comprehensive suite of resources, including:
  * **Grants:** Financial support to accelerate development.
  * **Co-Marketing:** Collaborative marketing efforts to boost project visibility.
  * **Networking:** Connections to other builders and leaders in the ecosystem.
  * **Hands-on Integration Support:** Direct technical assistance to ensure a smooth deployment on Mezo.

​[**Apply Here**](https://2d0lnha7ee6.typeform.com/to/B9jzgjb6?ref=mezo.org\&typeform-source=mezo.org)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

For projects that are more mature or have ambitious growth plans, the Supernormal Foundation partners with leading venture capital firms **Boost VC, Draper Associates, and Thesis** to offer a dedicated accelerator program. This intensive program provides upfront investment and tailored support, including deep mentorship on product strategy and go-to-market execution, helping teams navigate the path from a functional product to a scalable business.

#### Where can I find community support and ask technical questions? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

The central hub for all community and developer interaction within the Mezo ecosystem is the [official Discord server.](https://discord.com/invite/mezo)​

#### How do I provide feedback or report an issue? <a href="#how-do-i-provide-feedback-or-report-an-issue" id="how-do-i-provide-feedback-or-report-an-issue"></a>

Devlopers may leave feedback [here](https://2d0lnha7ee6.typeform.com/to/bP810Y2I).

#### Who Are Your Partners and How Do I Integrate Them? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

The following table details key partners within the Mezo ecosystem, categorized by their function. It provides a one-stop-shop for developers to assess the maturity of the available tooling and find direct links to the integration documentation needed to get started.

| **Pyth Network**  | ​[https://docs.pyth.network/](https://docs.pyth.network/)​                                               |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **Supra**         | ​[https://supra.com/docs/](https://www.google.com/search?q=https://supra.com/docs/)​                     |
| **Stork**         | ​[https://docs.stork.network/](https://docs.stork.network/)​                                             |
| **Goldsky**       | ​[https://docs.goldsky.com/](https://docs.goldsky.com/)​                                                 |
| **Onchain Den**   | ​[https://docs.onchainden.com/](https://docs.onchainden.com/)​                                           |
| **Lavender Five** | ​[https://www.lavenderfive.com/tools/mezo/statesync](https://www.lavenderfive.com/tools/mezo/statesync)​ |
| **tBTC**          | See [tbtc.scan](https://www.google.com/search?q=https://tbtc.scan) for reserve verification.             |
