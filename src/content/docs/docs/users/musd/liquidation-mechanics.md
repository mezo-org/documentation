---
title: MUSD Liquidations & Redemptions
description: Learn how liquidations protect the system and how redemptions maintain the MUSD peg.
---

## Liquidations

Liquidations ensure that the system remains solvent when a borrower’s position (trove) falls below the required collateralization ratio.

### When Liquidation Happens
- Each trove must maintain a collateralization ratio of at least **110%** under normal conditions.  
- If the ratio drops below 110% (for example, due to a decline in BTC price), the trove becomes eligible for liquidation.  

### Liquidation Process
1. **Triggering:**  
   Anyone (a user or bot) can call `TroveManager.liquidate` on an undercollateralized trove.  

2. **Rewards for the liquidator:**  
   - A flat **200 MUSD gas compensation**.  
   - **0.5% of the trove’s collateral**.  

3. **Stability Pool settlement (default):**  
   - The Stability Pool burns MUSD to repay the liquidated trove’s debt.  
   - The pool seizes the remaining BTC collateral at a discount, distributing it to depositors.  

4. **Redistribution (fallback):**  
   - If the Stability Pool does not have enough funds, both debt and collateral are redistributed across all healthy troves via the **Default Pool**.  
   - Each borrower receives “pending” collateral and debt adjustments, reconciled when they next interact with their trove.  

### Example
- Alice has a trove with **$10,000 MUSD debt** backed by **$10,900 BTC collateral** (109% collateralization).  
- Alice’s trove falls below 110% and is liquidated.  
- The Stability Pool burns $10,000 MUSD and receives $10,845 worth of BTC.  
- The liquidator receives **200 MUSD + $55 BTC (0.5%)** as compensation.  

Liquidations keep the protocol solvent and incentivize third parties to maintain system health.

---

## Redemptions

Redemptions are the primary mechanism that keeps MUSD pegged at $1.

### What Is a Redemption?
A redemption is when a user exchanges MUSD directly with the system for BTC collateral at **$1 per MUSD**, minus the redemption fee.  

This mechanism creates a **price floor** because MUSD can always be redeemed for $1 worth of BTC.

### How Redemptions Work
1. A user calls `TroveManager.redeemCollateral`.  
2. The system reduces the debt of the **lowest-collateralized troves** by the redeemed amount.  
3. An equivalent amount of BTC is transferred from those troves to the redeemer.  
4. The troves’ collateral ratios increase since debt is canceled while some collateral is removed.  

### Partial Redemptions
- If the redeemed amount doesn’t match the debt of a trove exactly, the trove’s collateral and debt are reduced proportionally.  
- The trove remains open and active, but with a healthier collateral ratio.  
- Redemption hints (`getRedemptionHints`) are used to optimize gas efficiency when determining which troves to redeem from.  

### Example
- Alice has **$1,000 debt backed by $1,300 BTC collateral (130%)**.  
- Bob has **$1,000 debt backed by $2,000 BTC collateral (200%)**.  
- Carol redeems **$100 MUSD**.  
  - Alice’s trove is targeted first since it is the least collateralized.  
  - Her debt is reduced to $900, and collateral is reduced to $1,170.  
  - Carol receives ~$99.25 worth of BTC (after 0.75% redemption fee).  
  - Alice’s collateral ratio improves to **1300/1000 → 1170/900 = 130% → 130%+**.

### Why Redemptions Matter
- They enforce a **price floor**: if MUSD trades below $1, arbitragers redeem and profit until the peg is restored.  
- They naturally improve the health of the system by raising collateral ratios of weaker troves.  
- They provide liquidity without depending on external parties.

---

## Key Differences

- **Liquidations**: Protect the system when borrowers fall below 110% collateralization. Involuntary, permissionless, and triggered by others.  
- **Redemptions**: Maintain the peg at $1. Voluntary, initiated by MUSD holders, and target the weakest troves first.  

