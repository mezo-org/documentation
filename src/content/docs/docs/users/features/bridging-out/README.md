---
title: Bridging Out
description: Moving your assets from Mezo to Ethereum or Bitcoin
topic: users
---

# Moving Your Assets from Mezo to Ethereum or Bitcoin

*Last updated: September 16, 2025*

This guide explains how to bridge your assets out of Mezo back to Ethereum or Bitcoin networks. We'll cover what you can bridge, how to do it, fees involved, and what to expect during the process.

## What You Can Bridge Out

### From Mezo to Other Networks

| Your Asset on Mezo | Destination Network | What You'll Receive | Notes |
|-------------------|-------------------|-------------------|--------|
| **BTC** | Ethereum | TBTC (ERC-20 token) | You always receive TBTC on Ethereum, not WBTC or other wrapped versions |
| **BTC** | Bitcoin | Native BTC | Real Bitcoin sent to your Bitcoin wallet |
| **mERC-20 tokens** | Ethereum | Original ERC-20 token | Get back the same tokens you originally bridged in (like USDC, USDT, etc.) |
| **mERC-20 tokens** | Bitcoin | Not available | ERC-20 tokens can't be sent to Bitcoin |

**Key Points:**
- You can only bridge to Ethereum or Bitcoin mainnet
- BTC can go to Ethereum (as TBTC) or to Bitcoin (as native BTC).
- Tokens like USDC or WETH (represented as m-tokens on Mezo) can only go back to Ethereum.
- Bitcoin Taproot addresses (starting with bc1p) aren't supported yet
- Layer 2 networks and other chains aren't available as destinations

## How to Bridge Out

### Bridging to Ethereum (for TBTC or ERC-20 tokens)

1. **Open the Bridge section** in your Mezo wallet
2. **Select Ethereum** as your destination network
3. **Choose your asset:**
   - Select BTC to receive TBTC on Ethereum
   - Select any mERC-20 token to receive the original token on Ethereum
4. **Enter the amount** you want to bridge
5. **Paste your Ethereum address** (must start with 0x and be 42 characters total)
6. **Review the fees** displayed on screen
7. **Confirm and submit** the transaction
8. If bridging mERC-20 tokens, you may need to approve the transaction first

### Bridging to Bitcoin (for native BTC only)

1. **Open the Bridge section** in your Mezo wallet
2. **Select Bitcoin** as your destination network
3. **Choose BTC** as your asset
4. **Enter the amount** to bridge
5. **Paste your Bitcoin address** - supported formats:
   - Legacy addresses (starting with 1)
   - SegWit addresses (starting with 3 or bc1q)
   - **Not supported:** Taproot addresses (starting with bc1p)
6. **Review the fees** and confirm
7. **Submit** the transaction

## Understanding Fees

When bridging out, you'll encounter two types of fees:

**Bridge Fee:** A fixed fee per asset that's deducted from your withdrawal amount. This fee is shown before you confirm the transaction.

**Network Gas:** You pay gas fees on Mezo for initiating the bridge transaction. The actual transfer on Ethereum or Bitcoin is handled by the bridge system.

All fees are clearly displayed before you confirm any transaction.

## What Happens After You Submit

Once you initiate a bridge-out transaction, here's the process:

1. **Validation:** The system verifies your request meets all requirements
2. **Token Burn:** Your tokens on Mezo are burned (permanently removed from circulation)
3. **Attestation:** Mezo validators confirm your withdrawal request
4. **Delivery:** Your assets are sent to your destination address

### Timeline and Status Updates

Your bridge transaction will show these status updates:

- **Created:** Your request has been recorded
- **Attesting:** Validators are confirming your withdrawal
- **Ready to Withdraw:** Confirmations complete, assets being sent
- **Withdrawn/Redeemed:** Assets successfully delivered to your destination address

You can track your transaction using the transaction hash provided in the interface.

## Important Address Requirements

### For Ethereum Destinations
- Must be a valid Ethereum address (0x followed by 40 characters)
- Can be a regular wallet or smart contract that accepts standard token transfers
- Exchange deposit addresses work if they accept direct transfers

### For Bitcoin Destinations
Supported address types:
- Legacy addresses (starting with 1)
- SegWit wrapped addresses (starting with 3)  
- Native SegWit addresses (starting with bc1q)

**Not supported:** Taproot addresses (starting with bc1p)

## Safety Reminders

Before confirming any bridge transaction:

✅ **Double-check the destination address** - transactions can't be reversed  
✅ **Verify you've selected the correct network** (Ethereum vs Bitcoin)  
✅ **Confirm the fee amount** shown in the app  
✅ **Remember that bridge-outs cannot be cancelled** once submitted  
✅ **Ensure your destination address format is supported**

⚠️ **Warning:** If you send to an incorrect address that passes validation, your funds will be lost. Always copy-paste addresses and verify them carefully.

## Troubleshooting Common Issues

### "Approval Required" Message
**For mERC-20 tokens:** You need to approve the bridge contract first. Click approve when prompted, then try again.

### "Unsupported Asset for Destination"
Remember:
- mERC-20 tokens can only go to Ethereum
- BTC can go to either Ethereum (as TBTC) or Bitcoin

### "Invalid Recipient Address"
Check that:
- Ethereum addresses start with 0x and have 42 total characters
- Bitcoin addresses use supported formats (no bc1p Taproot addresses)
- You're not using a testnet address

### Transaction Seems Stuck
Check the status in your transaction history:
- If showing "Created" or "Attesting" - validators are still processing
- If showing "Ready to Withdraw" - the transfer is in progress on the destination network
- Contact support with your transaction ID if it's been unusually long

## Frequently Asked Questions

**Q: What's the difference between BTC on Mezo and TBTC on Ethereum?**
A: When you bridge BTC from Mezo to Ethereum, it becomes TBTC - a trusted ERC-20 token that represents Bitcoin on Ethereum. TBTC can be redeemed 1:1 for native Bitcoin.

**Q: Can I bridge my mERC-20 tokens to Bitcoin?**
A: No, ERC-20 tokens can only exist on Ethereum-compatible networks. You can only bridge them back to Ethereum.

**Q: Why can't I use my Taproot Bitcoin address?**
A: The bridge currently supports standard Bitcoin address formats. Taproot (bc1p) support is planned for a future update.

**Q: Can I cancel a bridge transaction?**
A: No, once submitted, bridge transactions cannot be cancelled. Your Mezo tokens are immediately burned as part of the process.

**Q: How long does bridging take?**
A: Most bridge transactions complete within 30-60 minutes, depending on network conditions and validator attestation speed.

**Q: Can I bridge to Arbitrum, Optimism, or other L2s?**
A: Currently, only Ethereum mainnet and Bitcoin are supported. L2 support may be added in the future.

**Q: Who pays for the Ethereum gas when my tokens arrive?**
A: The bridge system handles the Ethereum transaction costs for delivering your tokens. You only pay the bridge fee shown in the app.

## Security Model

Your bridge transaction requires approval from at least two-thirds of Mezo's bridge validators before your assets are released. This multi-signature approach ensures no single party can authorize withdrawals, keeping your funds secure throughout the bridging process.

## Need Help?

If you experience issues not covered in this guide:
1. Note your transaction ID or unlock sequence number
2. Take a screenshot of any error messages
3. Contact Mezo support with these details

Remember: Always verify addresses carefully and understand the fees before confirming any bridge transaction. 

