---
title: MUSD Stablecoin Overview
description: "Everything you need to know about MUSD, Mezo's Bitcoin-backed stablecoin."
topic: users
---

## What is MUSD?

Bitcoin holders have historically faced an impossible choice: sell your BTC to cover expenses, trust a centralized lender to hold custody of your bitcoins, or hold indefinitely and miss out on the liquidity you need to support your life.

MUSD changes that. It is a permissionless stablecoin, 100% backed by Bitcoin reserves, designed to maintain a 1:1 peg with the U.S. dollar. Mint MUSD by depositing BTC as collateral, spend it anywhere dollars are accepted, and keep your full Bitcoin exposure the entire time. When you're done, return the borrowed MUSD plus interest and get your BTC back.

![MUSD Lets You Keep and Spend BTC](/docs/images/musd/musd-keep-and-spend-btc.png)

### Why MUSD?

1. **Never sell your Bitcoin** — Borrow against up to 90% of your BTC holdings. Keep your sats, tap into your Bitcoin equity, and pay your loan back whenever you want.
2. **Fixed rates from 1–5%** — Your interest rate is locked when you open your loan and never changes. No variable rates, no surprises. Compare that to 7–20% APR at traditional banks or 8–9% on other DeFi platforms.
3. **Fully onchain and verifiable** — Every loan and every dollar of collateral is visible onchain, 24/7. No opaque reserves, no custodians — just Bitcoin in a smart contract vault. [View the collateral live on the Mezo explorer](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Permissionless** — No credit checks, no applications, no minimums beyond the 1,800 MUSD floor. If you have BTC, you can borrow.

## How MUSD works

![The Lifecycle of MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD uses a CDP (collateralized debt position) model. Every outstanding MUSD is redeemable for Bitcoin, and \$1 in BTC collateral can be used to mint 1 MUSD.

This mint-and-redeem model is what keeps MUSD pegged to \$1 — even in volatile markets:

* **MUSD trading below \$1** — Arbitrageurs buy discounted MUSD on the market and redeem it for \$1 of underlying BTC. Users with an open loan can do this at no additional cost. Those without a loan pay a 0.75% redemption fee, which remains profitable until MUSD reaches \$0.995.
* **MUSD trading above \$1** — Arbitrageurs mint new MUSD by supplying BTC to the protocol and sell it on the market for a profit. This remains profitable until MUSD returns to \$1.005.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

To ensure the peg holds during market volatility, all loan positions must maintain a collateral ratio above 110%. The system has built-in liquidation mechanisms and a stability pool to enforce this — so even with high LTVs, the protocol remains secure and resilient.

For details on how these safety mechanisms work, see [Liquidations & Redemptions](/docs/users/musd/liquidation-mechanics).

### Benefits of the MUSD model

**Supply-sided liquidity**

Unlike traditional two-sided lending protocols that need a pool of pre-existing dollars and use variable interest rates to balance supply and demand, MUSD is minted directly from Bitcoin collateral. Liquidity grows organically as more users deposit BTC — the system self-generates its supply, so liquidity is always available for new borrowers.

**Fixed, low borrowing rates**

Because MUSD is minted rather than borrowed from a pool, there's no rate competition driving up costs. The result: fixed rates as low as 1%, locked in for the life of your loan. That makes MUSD significantly cheaper than conventional lending markets where rates are variable and can spike unpredictably.

**Capital efficiency**

MUSD supports a minimum collateralization ratio of just 110%, meaning borrowers can access up to 90% of their Bitcoin's value. For Bitcoin holders, this is the most capital-efficient way to unlock liquidity without selling. That said, higher collateral ratios provide a bigger safety buffer — always consider the risk profile of your position.

## MUSD vs. traditional finance

For Bitcoin holders, the financial system has always meant compromise: high fees, opaque custody, variable rates, and centralized intermediaries. MUSD brings the benefits of onchain finance — transparency, low cost, self-custody — directly to your Bitcoin.

![MUSD vs Traditional Finance](/docs/images/musd/musd-vs-traditional.png)

No wire fees, no FX spreads, no monthly account charges. Just your Bitcoin in a decentralized smart contract vault, working for you.

## MUSD comparison to existing stablecoins

The stablecoin market is broad, ranging from fiat-backed stables (USDT and USDC) to synthetic stables (USDe) to other algorithmic CDPs (Liquity, Sky). While the growth of these stablecoins has been remarkable over the past few years, there is still a gap in the market for Bitcoiners.

MUSD aims to address these risks with its pure Bitcoin backing.

**Fiat-Backed Stablecoins**

Fiat-backed stablecoins like USDT and USDC make up more than 90% of the current stablecoin market. Not only are they a complete juxtaposition with crypto's ethos, as they are backed by the U.S. dollar, but the dollar reserves must be held safely by a single entity.

Tether, the issuing entity for USDT (~\$150B in supply), has never released a proof of reserves audit. The company booked a \$13B profit in 2024.

Circle, a U.S. company issuing USDC, has the ability to [blacklist addresses at their discretion](https://www.circle.com/legal/usdc-risk-factors) and [pays exchanges to hold their asset](https://x.com/inkymaze/status/1907187020293980599?s=46). As the U.S. economy moves onchain, this becomes a dangerous point of centralization.

**Synthetic Stablecoins**

Synthetic stablecoins (for example, USDe) often depend on centralized exchanges and custody solutions to maintain their value. The risk of this exposure became abundant as [Bybit recently faced the largest hack on record](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Additionally, stablecoins that are synthetically backed by the yield from a basis trade are unpredictable and untested. Funding rates are variable, and the systems have not been tested against various external market pressures.

**CDP-Style Coins like USDS**

CDP-based stablecoins typically collateralize their positions with a basket of tokens, including fiat-backed stables and various altcoins.

While this diversification can spread risk, it also brings significant challenges. The collateral, often composed of volatile assets like ETH-related tokens or other stablecoins, may react unpredictably under market stress and are often times significantly more volatile than BTC. This can compromise the stablecoin's peg and complicate the redemption and liquidation processes.
