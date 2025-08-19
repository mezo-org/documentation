---
title: MUSD Risks & Mitigations
description: Learn about the risks and protections built into Mezo’s MUSD stablecoin.
---

MUSD uses multiple layers of protection to ensure sufficient system collateralization and protect against bad debt:

* Stability Pool: This pool absorbs liquidations first, leaving other borrowers untouched. When a position goes through liquidation, the pool repays the outstanding debt and receives the Bitcoin collateral as compensation.
* Redistribution Mechanics: When liquidations exceed Stability Pool capacity, debt and collateral are redistributed proportionally among borrowers, preventing any single borrower from bearing excessive risk. If the Stability Pool is empty, debt and collateral are shared among borrowers.
* Economic Incentives: Aligned incentives maintain system health through gas compensation for liquidators.

Each MUSD position has its own individual collateralization ratio. The individual collateralization ratio (ICR) measures the value of BTC collateral vs. the outstanding MUSD debt on a specific loan position. A position’s ICR can be simply calculated as follows:

`BTC collateral value / MUSD debt`

MUSD loan positions that fall below 110% ICR are at risk of liquidation. This keeps the system-wide collateralization above 110% as well.

## Protocol Risks and Mitigations

The overview of [How MUSD works](/docs/users/musd#how-musd-works) covered how MUSD maintains its \$1 peg via a mint and redeem arbitrage mechanism. This section provides a complete overview of how MUSD prevents systemic risk.

### Trading below the peg

If MUSD trades below its peg value, liquidity might not be sufficient for arbitrage. The MUSD protocol mitigates this risk with the following items:

* MUSD can be redeemed for \$1 of the underlying collateral
* Mezo liquidity incentives in the BTC - MUSD pool help offset impermanent loss for liquidity providers
* Mezo provides developer incentives for dApp volume through the BTC - MUSD pool.
* Liquidity owned by the protocol can be deployed in the BTC - MUSD pool.

### Collateral Types

MUSD only accepts BTC as collateral. Lending products accepting different collateral can be built on top of MUSD. However, it is important to note that risks are isolated to the lender who provides BTC to create the line of credit for use against long-tail collateral assets. The MUSD protocol is not subject to these risks.

### Protocol Bootstrap Loan

The Stability Pool is used to take liquidations. In MUSD, this is bootstrapped with a protocol loan against future fees and interest, the minted MUSD from the protocol loan is restricted to use in the Stability Pool. While the protocol loan is in place, a minimum of 50% of the interest and fees charged by the protocol are used to pay down the protocol loan.

## User Risks and Mitigations

To maintain the peg, it is necessary for MUSD to be redeemable for the underlying collateral so that the market naturally supports the peg. This means that the deposit with the lowest collateralization ratio will be redeemed against if there is downward pressure on the peg.

### Redemption Risk

A borrower who has their collateral redeemed against has two risks:

* Loss of exposure to the price upside of the collateral asset.
* Potential capital gains tax implications from the redemption.

To avoid these risks, borrowers must maintain a higher collateralization ratio than other depositors.

### Liquidation Risk

If the borrower’s deposit falls below 110% collateralization, the collateral is liquidated to close out the position and maintain the overall collateralization health of the protocol. This means the borrower has the following risks:

* Potential capital gains tax implications for the borrower.
* Results in up to 10% capital loss.

To avoid these risks, borrowers must monitor their loans and provide additional collateral to maintain their loan health.