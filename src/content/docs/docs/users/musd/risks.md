---
title: Risks and Mitigations
---

MUSD uses multiple layers of protection to ensure sufficient system collateralization and protect against bad debt:

* Stability Pool: This pool absorbs liquidations first, leaving other borrowers untouched. When a position goes through liquidation, the pool repays the outstanding debt and receives the Bitcoin collateral as compensation.
* Redistribution Mechanics: When liquidations exceed Stability Pool capacity, debt and collateral are redistributed proportionally among borrowers, preventing any single borrower from bearing excessive risk. If the Stability Pool is empty, debt and collateral are shared among borrowers; any excess collateral above 110% is reserved for the original borrower.
* Economic Incentives: Aligned incentives maintain system health through gas compensation for liquidators and rewards for Stability Pool providers.

Each MUSD position has its own individual collateralization ratio. The individual collateralization ratio (ICR) measures the value of BTC collateral vs. the outstanding MUSD debt on a specific loan position. A position’s ICR can be simply calculated as follows:

`BTC collateral value / MUSD debt`

MUSD loan positions that fall below 110% ICR are at risk of liquidation. This keeps the system-wide collateralization above 110% as well.

## Protocol Risks and Mitigations

The overview of [How MUSD works](/docs/users/musd#how-musd-works) covered how MUSD maintains its $1 peg via a mint and redeem arbitrage mechanism. This section provides a complete overview of how MUSD prevents systemic risk.

### Trading below the peg

If MUSD trades below its peg value, liquidity might not be sufficient for arbitrage. The MUSD protocol mitigates this risk with the following items:

* MUSD can be redeemed for $1 of the underlying collateral
* Mezo liquidity incentives in the BTC - MUSD pool help offset impermanent loss for liquidity providers
* Mezo provides developer incentives for dApp volume through the BTC - MUSD pool.
* Liquidity owned by the protocol can be deployed in the BTC - MUSD pool.

### Trading above the peg

If MUSD trades at a premium during market stress, it might prevent liquidations. The MUSD protocol mitigates this risk by allowing partners to access Stability Module contracts, which accept approved treasury-backed stablecoins to mint MUSD and take the arbitration.

### Collateral Types

MUSD only accepts BTC and US treasury-backed stables as collateral. Lending products accepting different collateral can be built on top of MUSD. However, it is important to note that risks are isolated to the lender who provides BTC to create the line of credit for use against long-tail collateral assets. The MUSD protocol is not subject to these risks.

### Protocol Bootstrap Loan

The Stability Pool is used to take liquidations. In MUSD, this is bootstrapped with a protocol loan against future fees and interest, the minted MUSD from the protocol loan is restricted to use in the Stability Pool. While the protocol loan is in place, a minimum of 50% of the interest and fees charged by the protocol are used to pay down the protocol loan.

### Stability Module

To enable market makers to arbitrage and price deviations from the peg, the stability module allows minting MUSD with approved treasury-backed stables. If the price of MUSD depegs up to $1.01, a market maker will be able to mint 1 MUSD with 1 treasury-backed stable to take the arbitrage.

A small issuance fee is charged to the minter so that the treasury-backed stable can be bought at a small profit when MUSD is at peg so that the market will keep the stability module empty when the MUSD peg is held

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

### Liquidation Risk

MUSD uses a trove liquidation system. A trove is a digital vault within Mezo where a user stores collateral to borrow MUSD. 

If the borrower’s deposit falls below 110% collateralization, the collateral is liquidated to close out the position and maintain the overall collateralization health of the protocol. This means the borrower has the following risks:

* Potential capital gains tax implications for the borrower.
* Results in up to 10% capital loss.

To avoid these risks, borrowers must monitor their loans and provide additional collateral to maintain their loan health.

### Redemption Risk 

A borrower who has their collateral redeemed against has two risks:

* Loss of exposure to the price upside of the collateral asset.
* Potential capital gains tax implications from the redemption.

To avoid these risks, borrowers must maintain a higher collateralization ratio than other depositors.

