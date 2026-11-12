---
title: MUSD Redemptions
description: Step-by-step guide to redeeming MUSD for BTC by calling redeemCollateral on the TroveManager contract, with gas-saving hints, fees, and contract addresses.
topic: developers
---

# How to Redeem MUSD on Mezo

## Quick Overview
Redeeming lets you burn 1 MUSD to recieve `$1` in BTC (minus a 0.75% redemption fee and gas fees). The system redeems starting from the trove with the lowest collateral ratio above 110%. If the amount of MUSD exceeds a single trove, it will continue to redeem in ascending order of collateraliztion ratio. 

Troves with collateralization ratios below 110% are eligible for liquidation, and cannot be redeemed against.

---

## Prerequisites

Before you start, verify:

1. **System is accepting redemptions**: Go to TroveManager → "Read as Proxy" → call `getTCR()` with current BTC price. Must show ≥ `1100000000000000000` (110%)
2. **You have MUSD**: Check your balance on the MUSD token contract
3. **Get current BTC price**: Go to PriceFeed → "Read as Proxy" → call `fetchPrice()`
4. **Get correct contract addresses**: See contract addresses at the bottom for both Mainnet and Testnet.

---

## Step-by-Step Instructions

### 1. Go to TroveManager Contract
Open the TroveManager contract in your block explorer and click the **"Write as Proxy"** tab.

### 2. Find Function 11: `redeemCollateral`

You'll see 6 input fields. Here's how to fill them:

---

## Option A: Quick & Simple (Higher Gas)

Use this if you want to redeem quickly without calculating hints.

- `_amount`: [your amount in wei - see conversion below]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [your wallet address]   
- `_lowerPartialRedemptionHint`: [your wallet address]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**Converting MUSD to Wei:**
- 100 MUSD = `100000000000000000000`
- 5,005 MUSD = `5005000000000000000000`

**Formula**: Your amount × 1000000000000000000

---

## Option B: With Hints (Lower Gas)

Use this to save on gas costs.

### Step 1: Get Redemption Hints

Go to HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Fill in:
- `_amount`: Your amount in wei (same as above)
- `_price`: Current BTC price from PriceFeed
- `_maxIterations`: 50

Copy the returned values:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Step 2: Get Position Hints

Go to SortedTroves → "Read as Proxy" → `findInsertPosition()`

Fill in:
- `_NICR`: Use the `partialRedemptionHintNICR` from Step 1
- `_prevId`: Your wallet address
- `_nextId`: Your wallet address

Copy the returned values:
- `upperHint`
- `lowerHint`

### Step 3: Call redeemCollateral

Go back to TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount`: [your amount in wei]
- `_firstRedemptionHint`: [from Step 1]
- `_upperPartialRedemptionHint`: [upperHint from Step 2]
- `_lowerPartialRedemptionHint`: [lowerHint from Step 2]
- `_partialRedemptionHintNICR`: [from Step 1]
- `_maxIterations`: 50

---

## What You'll Receive

**Example: Redeeming 100 MUSD**
- You burn: 100 MUSD
- You receive: `$99.25` worth of BTC (0.75% fee goes to protocol)

**Formula**: (Your MUSD Amount ÷ BTC Price) × 0.9925 = BTC received

---

## Common Issues

**"Cannot redeem when TCR < MCR"**
→ System TCR is below 110%. Wait until it recovers.

**"Unable to redeem any amount"**
→ This can happen for several reasons:
- No troves available with collateral ratio above 110%
- Hints are out of date (specifically the NICR hint)
- The redemption amount would leave the target trove with less than the minimum debt requirement of 1,800 MUSD
- Max iterations set too low for the redemption size

**Transaction runs out of gas**
→ Lower `_maxIterations` to 10 or split into smaller redemptions.

**Transaction reverts unexpectedly**
→ Get fresh hints and try again. Someone may have redeemed before you.

**Received less than expected**
→ Check the `Redemption` event in your transaction. Some MUSD may have been returned if the last trove would go below 1,800 MUSD minimum.

---

## Tips

- **Generate hints immediately before redeeming** - They become stale if someone else redeems first
- **Use Option A for small amounts** (< `$10,000`) - The higher gas cost is negligible
- **Use Option B for large amounts** - Saves significant gas on big redemptions
- **Set higher maxIterations for larger redemptions**:
  - Small (< 10 troves): 10
  - Medium (10-30 troves): 50
  - Large (30+ troves): 100

---

## Contract Addresses

| Contract | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| MUSD Token | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

All addresses are proxy contracts. Always use "Read as Proxy" or "Write as Proxy" tabs.

---

## Need Help?

- Check your transaction on the block explorer to see events and error messages
- Join our Discord and open a ticket: https://discord.com/invite/mezo
