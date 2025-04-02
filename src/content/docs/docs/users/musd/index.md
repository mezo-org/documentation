---
title: Overview
---

## What is MUSD?

MUSD is a permissionless stablecoin 100% backed by Bitcoin reserves and designed to maintain a 1:1 peg with the U.S. dollar. It is the native stablecoin on Mezo, accessible via Mezo’s ‘Borrow’ feature or decentralized exchanges on Mezo Network. 

Anyone can mint MUSD by depositing BTC into Mezo borrow, thus creating a loan position. Bitcoin collateral for MUSD positions is publicly verifiable onchain, and proof-of-reserves are viewable 24-7. For more details on the collateral management, see the “Collateral Management” section. Users can close their MUSD positions by returning the borrowed MUSD and accumulated interest to receive their initial Bitcoin collateral. 

### Bitcoin-backed stablecoin fundamentals

MUSD is, importantly, always 100% backed by Bitcoin. 

The most popular stablecoins in crypto today are backed by U.S. dollars, making up around [90% of the total market](https://defillama.com/stablecoins). Stablecoins' increasing popularity is due to their instant, cross-border settlement, which significantly improves global transactions, especially in countries with weak/depreciating currencies.

But digital dollars are still fiat-backed, meaning they are subject to the risk of the U.S. government arbitrarily devaluing the dollar through money printing and inflation.

To grow past this, the next step for the stablecoin market is to have a purely Bitcoin-backed stablecoin. A dollar that is Bitcoin-backed is sturdy, reliable, and not beholden to the risks of money printing, yet it still benefits from the global and instant transaction settlement that blockchain networks offer. 

### Why a stablecoin?

The above section may have you wondering why we need a stablecoin. Bitcoin is highly divisible, so sending small amounts of BTC is trivial—why does that not suffice?

The main issue is that people do not want to spend their BTC balance. Bitcoin is hard money and has thus become a preferred form of savings for much of the world. Rather than spending it, a stablecoin that is mintable against BTC allows people to use their Bitcoin equity without needing to sell.

### Lending market problems

Today, there is no simple way to spend against Bitcoin equity. People want to stay exposed to BTC, but they don't want the volatility that comes with Bitcoin in their working capital. Accessing lines of credit against Bitcoin is inherently risky for two specific reasons:

* Users must give up control of their BTC to a centralized custodian. BlockFi and Celsius are recent examples of where this reliance on a centralized entity can be extremely risky.
* Borrow rates are high and unpredictable. Borrowing USDT or USDC against a BTC-equivalent on Aave costs [5-9% per year](https://app.aave.com/markets/?ref=blog.mezo.org). That rate is variable, typically range-bound at what you could earn on T-bills (~4%), and as high as 20% in peak bull markets. Unpredictable borrowing costs lead to impossible planning for future business and life expenses.

### The MUSD solution:

Mezo solves these issues with MUSD and Borrow:

* Permissionless access to a credit against up to 90% of your BTC holdings. Keep your BTC, tap into your Bitcoin equity, and pay your loan back whenever.
* Loans are created onchain and [publicly verifiable 24/7](https://explorer.test.mezo.org/address/0x637e22A1EBbca50EA2d34027c238317fD10003eB?tab=txs&ref=blog.mezo.org). Close your position whenever you want to receive your underlying Bitcoin collateral.
* MUSD borrow rates are fixed for the life of the loan, starting at 1-5%. Lock in your low rate, and don’t worry about the surprise changes.

This documentation provides details about the MUSD architecture, how it fits into the Mezo ecosystem, risks and mitigations, and guides through how to access MUSD. 

## How MUSD works

MUSD uses a collateralized debt position model. This is similar to Sky’s model with USDS (formerly known as MakerDAO and DAI).

In Mezo, this means that:

* Every outstanding MUSD is redeemable for an underlying $1 in BTC
* $1 in BTC collateral can be used to mint 1 MUSD

The mint-and-redeem model helps maintain the $1 peg in volatile environments. For example, MUSD may trade on the market at a premium or discount to its $1 stable value. Below are the scenarios for how the peg can be re-established.

* If MUSD is trading at a discount ($.95), arbitragers can buy MUSD on the market and redeem it for $1 in underlying BTC. Users with a loan position can do this for no additional cost, while those without a loan position must pay a 0.5% redemption fee. This scenario remains profitable until MUSD regains its stable peg of $1.
* If MUSD is trading at a premium ($1.05), arbitragers can mint MUSD by supplying BTC to the protocol and sell the minted MUSD on the market for a profit (selling into another dollar-equivalent stablecoin like USDT or USDC). This scenario remains profitable until MUSD regains its stable peg of $1.

![](/docs/images/musd/musd-redemption-and-peg-process.avif)

To ensure the peg is maintained during market volatility, sufficient BTC collateral must always back the outstanding MUSD. Outstanding loan positions must maintain a collateral ratio of above 110%, and the system has built-in liquidation mechanisms and stability pools to enforce this. These risk mitigations ensure that even with high LTVs, the system remains secure and resilient against market volatility.

Details on liquidations and risks can be read in further detail in [Risks and Mitigations](/docs/users/musd/risks).

### Benefits of the MUSD model

**Supply-Sided Market**

The mint and redeem model that MUSD uses benefits the system as a whole by creating liquidity from the supply side rather than relying on pre-existing dollar pools. Instead of needing a fixed reservoir of dollars like traditional lending protocols (for instance, Aave), MUSD is minted directly from Bitcoin collateral. This approach means that as more users deposit Bitcoin to mint MUSD, liquidity grows organically in line with demand. 

The system isn’t constrained by traditional dollar liquidity—it self-generates its supply, ensuring that liquidity is always available for new depositors of BTC collateral.

**Low Borrowing Rates**

Because MUSD is created through the minting of “new money” backed by Bitcoin collateral, borrowers benefit from exceptionally low interest rates. The process sidesteps the need for competitive borrowing from pre-existing dollar pools, which often drives up costs due to market pressures. Instead, the fixed, low rates (as low as 1%) stem from the efficient, collateralized minting mechanism of MUSD. 

With MUSD, users can unlock the value of their Bitcoin at a lower cost, making MUSD an attractive alternative to conventional lending markets where rates can be highly variable and significantly higher.

**Extremely High LTV**

One of the standout features of MUSD is its ability to support extremely high loan-to-value (LTV) ratios. With a minimum collateralization requirement of 110%, borrowers can potentially access up to 90% of the value of their Bitcoin holdings. This high LTV is crucial for Bitcoin holders because it allows them to maximize the liquidity they can unlock from their assets without having to sell them. 

In other words, MUSD enables users to tap into the economic value of their Bitcoin more efficiently than many other lending platforms, where lower LTV ratios limit the amount of capital that can be borrowed against an asset.

## MUSD comparison to existing stablecoins

The stablecoin market is broad, ranging from fiat-backed stables (USDT and USDC) to synthetic stables (USDe) to other algorithmic CDPs (Liquity, Sky). While the growth of these stablecoins has been remarkable over the past few years, there is still a gap in the market for Bitcoiners.

MUSD aims to address these risks with its pure Bitcoin backing.

![](/docs/images/musd/built-different.avif)

**Fiat-Backed Stablecoins**

Fiat-backed stablecoins like USDT and USDC make up more than 90% of the current stablecoin market. Not only are they a complete juxtaposition with crypto’s ethos, as they are backed by the U.S. dollar, but the dollar reserves must be held safely by a single entity. 

Tether, the issuing entity for USDT (~$150B in supply), has never released a proof of reserves audit. The company booked a $13B profit in 2024.

Circle, a U.S. company issuing USDC, has the ability to [blacklist addresses at their discretion](https://www.circle.com/legal/usdc-risk-factors). As the U.S. economy moves onchain, this becomes a dangerous point of centralization.

**Synthetic Stablecoins**

Synthetic stablecoins (for example, USDe) often depend on centralized exchanges and custody solutions to maintain their value. The risk of this exposure became abundant as [Bybit recently faced the largest hack on record](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Additionally, stablecoins that are synthetically backed by the yield from a basis trade are unpredictable and untested. Funding rates are variable, and the systems have not been tested against various external market pressures. 

**CDP-Style Coins like USDS**

CDP-based stablecoins typically collateralize their positions with a basket of tokens, including fiat-backed stables and various altcoins. 

While this diversification can spread risk, it also brings significant challenges. The collateral, often composed of volatile assets like ETH-related tokens or other stablecoins, may react unpredictably under market stress and are often times significantly more volatile than BTC. This can compromise the stablecoin’s peg and complicate the redemption and liquidation processes.