---
title: Risks and Mitigations
---

mUSD addresses risks to users and the protocol with several components. 

## Protocol Risks and Mitigations

### Trading below the peg

If mUSD trades below its peg value, liquidity might not be sufficient for arbitrage. The mUSD protocol mitigates this risk with the following items:

- mUSD can be redeemed for $1 of the underlying collateral
- Mezo liquidity incentives in the core BTC - mUSD pool help offset impermanent loss for liquidity providers
- Mezo provides developer incentives for dApp volume through the BTC - mUSD pool.
- Liquidity owned by the protocol can be deployed in the BTC - mUSD pool.

### Trading above the peg

If mUSD trades at a premium during market stress, it might prevent liquidations. The mUSD protocol mitigates this risk by allowing partners to access Stability Module contracts, which accept approved treasury-backed stablecoins to mint MUSD and take the arbitration.

### Collateral Types

mUSD only accepts BTC and US treasury backed stables as collateral. Lending products accepting different collateral can be built on top of mUSD. However, it is important to note that risks are isolated to the lender who provides BTC to create the line of credit for use against long tail collateral assets. The mUSD protocol is not subject to these risks.

### Protocol Bootstrap Loan

The Stability Pool is used to take liquidations. In mUSD, this is bootstrapped with a protocol loan against future fees and interest, the minted mUSD from the protocol loan is restricted to use in the Stability Pool. While the protocol loan is in place, a minimum of 50% of the interest and fees charged by the protocol are used to pay down the protocol loan.

## User Risks and Mitigations

To maintain the peg, it is necessary for mUSD to be redeemable for the underlying collateral so that the market naturally supports the peg. This means that the deposit with the lowest collateralization ratio will be redeemed against if there is downward pressure on the peg.

### Redemption Risk

A borrower who has their collateral redeemed against has two risks:

- Loss of exposure to the price upside of the collateral asset.
- Potential capital gains tax implications from the redemption.

To avoid these risks, borrowers must maintain a higher collateralization ratio than other depositors.

### Liquidation Risk

If the borrower's deposit falls below 110% collateralization, the collateral is liquidated to close out
the position and maintain the overall collateralization health of the protocol. This means the borrower has the following risks:

- Potential capital gains tax implications for the borrower.
- Results in up to 10% capital loss.

To avoid these risks borrowers must monitor their loan and provide additional collateral to maintain their loan health.

## Stability Module

To enable market makers to arbitrage and price deviations from the peg, the stability module allows minting mUSD with approved treasury backed stables. If the price of mUSD depegs up to $1.01 a market maker will be able to mint 1 mUSD with 1 treasury backed stable to take the arbitrage.

A small issuance fee is charged to the minter so that the treasury backed stable can be bought at a small profit when mUSD is at peg so that the market will keep the stability module empty when the mUSD peg is held.