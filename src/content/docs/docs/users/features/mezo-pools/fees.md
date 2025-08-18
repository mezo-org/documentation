---
title: Mezo Pool Fees
description: Fee model for swaps and liquidity providers in Mezo Pools
---

## Fees

Mezo Pools employs a dynamic fee model optimized for different trading pairs:

### Standard Fee Rates

- **Volatile Pools**: 0.30%
- **Stable Pools**: 0.05%

### Custom Pool Fees

Some pools may have custom fee rates set by governance, ranging from 0% to 3%. These special rates are typically applied to:

- **Strategic partnership pools**
- **Promotional pools during launch periods**
- **High-volume institutional trading pairs**

### How Fees Are Collected

When a trader executes a swap through a Mezo Pool:

1. **Fee Deduction**: The fee is automatically deducted from the input token amount.
   - Example: Swapping 1,000 MUSD in a stable pool deducts 0.5 MUSD as a fee.
2. **Immediate Segregation**: Collected fees are instantly transferred to a dedicated PoolFees contract.
   - Fees never mix with the pool's core liquidity reserves
   - This protects LPs from any risk to their principal

### What tokens are fees paid in?

Fees are always collected in the token being sold (input token) during each swap. As an LP, you earn fees in both tokens of the pair:

- When traders swap Token A → Token B, fees are collected in Token A
- When traders swap Token B → Token A, fees are collected in Token B
- You accumulate and can claim fees in both tokens based on your pool share

Example: In a MUSD/tBTC pool:

- Trader swaps MUSD → tBTC: MUSD collected as fees (for all LPs)
- Trader swaps tBTC → MUSD: BTC collected as fees (for all LPs)
- As an LP, you earn a share of both the MUSD and tBTC fees

### Claiming Your Fees

1. Navigate to your position in the Mezo Pools interface
2. Click "Claim Fees"
3. Confirm the transaction
4. Fees are sent directly to your wallet

### Fee Calculation Examples

#### Example 1: Volatile Pool (BTC/MUSD)

- **Daily volume**: $1,000,000
- **Fee rate**: 0.30%
- **Daily fees generated**: $3,000
- **Your share**: 5% of the pool
- **Your daily fees**: ~$150

#### Example 2: Stable Pool (MUSD/USDC)

- **Daily volume**: $5,000,000
- **Fee rate**: 0.05%
- **Daily fees generated**: $2,500
- **Your share**: 2% of the pool
- **Your daily fees**: ~$50

---

## FAQ

### What currency/token are fees paid in?

Fees are paid in the input token of each swap (the token being sold). In a USDC/MEZO pool, swaps from USDC → MEZO generate USDC fees, while swaps from MEZO → USDC generate MEZO fees. As an LP, you accumulate and claim fees in both tokens.

### Can I lose my accumulated fees?

No. Fees are stored separately in PoolFees contracts and can only be claimed by LP token holders.

### Do fees compound automatically?

No. You must claim and redeposit fees manually to achieve compounding.

