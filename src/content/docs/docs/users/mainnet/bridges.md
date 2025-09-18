---
title: Mainnet Bridges Overview
description: >-
  Learn about using and accessing bridges on Mezo Mainnet for seamless asset
  movement.
topic: users
---

You can deposit and withdraw assets to and from Mezo using the Mezo Native Bridge.

# Deposits

## Mezo Native Bridge Deposits

The Mezo app includes a native bridge where you can deposit several assets to Mezo Mainnet. See the [Deposit Assets](/docs/users/getting-started/deposit-assets) guide to learn how the process works, or go directly to [mezo.org/overview](https://mezo.org/overview), sign in, and click **Deposit Bitcoin** to get started.

## Native BTC Deposits

You can deposit BTC directly from a Bitcoin wallet to the Mezo App. Assets are automatically bridged to tBTC and to Mezo Mainnet.

Native BTC is bridged to tBTC before being bridged into the [Mezo App contract](/docs/users/resources/contracts-reference).

For BTC wallets, you can sign in with UniSat, OKX, and Xverse. Use the following addresses:

| Name           | Script Type | Address Prefix |
| -------------- | ----------- | -------------- |
| Legacy         | P2PKH       | 1              |
| Native SegWit  | P2WPKH      | bc1q           |
| Nested SegWit  | P2SH-P2WPKH | 3              |

# Withdrawals 

## Moving Your Assets from Mezo to Ethereum or Bitcoin

*Last updated: September 18, 2025*

This guide explains how to bridge your assets out of Mezo back to the Ethereum or Bitcoin networks. We'll cover what you can bridge, how to do it, the bridges used, fees involved, and what to expect during the process.

### From Mezo to Other Networks

| Your Asset on Mezo | Destination Network | What You'll Receive | Notes |
|-------------------|-------------------|-------------------|--------|
| **BTC** | Ethereum | tBTC (ERC-20 token) | You always receive tBTC on Ethereum, not WBTC or other wrapped versions |
| **BTC** | Bitcoin | Native BTC | Real Bitcoin sent to your Bitcoin wallet |
| **mERC-20 tokens** | Ethereum | Original ERC-20 token | Get back the same tokens you originally bridged in (like USDC, USDT, etc.) |
| **MUSD** | Ethereum | USDC | MUSD is redeemed for USDC on Ethereum |
| **mERC-20 tokens** | Bitcoin | Not available | ERC-20 tokens can't be sent to Bitcoin |

**Key Points:**
- You can only bridge to Ethereum or Bitcoin mainnet.
- BTC can go to Ethereum (as tBTC) or to Bitcoin (as native BTC).
- Tokens like USDC or T (represented as m-tokens on Mezo) can only go back to Ethereum.
- Bitcoin Taproot addresses (starting with `bc1p`) aren't supported yet.
- Layer 2 networks and other chains aren't available as destinations.

## How to Bridge Out

### Bridging to Ethereum (for tBTC or ERC-20 tokens)

1.  **Click the 'Withdraw' button** in the top right of the Mezo App.
2.  **Choose your asset:**
    - Select BTC to receive tBTC on Ethereum.
    - Select any mERC-20 token to receive the original token on Ethereum.
3.  **Enter the amount** you want to bridge.
4.  **Review the fees** displayed on screen.
5.  **Confirm and submit** the transaction.
6.  **If bridging mERC-20 tokens**, you may need to approve the transaction first.

### Bridging to Bitcoin (for native BTC only)

1.  **Click the 'Withdraw' button** in the top right of the Mezo App.
2.  **Choose BTC** as your asset.
3.  **Select Bitcoin** as your destination network.
4.  **Enter the amount** to bridge.
5.  **Paste your Bitcoin address** - supported formats:
    - Legacy addresses (starting with `1`)
    - SegWit addresses (starting with `3` or `bc1q`)
    - **Not supported:** Taproot addresses (starting with `bc1p`)
6.  **Review the fees** and confirm.
7.  **Submit** the transaction.

## Understanding Bridge Routes

When withdrawing assets from Mezo, the system automatically determines which bridge to use. This information appears on the "Bridge" line in your withdrawal modal.

-   **Mezo Native Bridge:** Used for all standard withdrawals of assets like BTC and mERC-20 tokens.
-   **Wormhole Bridge:** A third-party bridge used for MUSD withdrawals to Ethereum.
-   **Super Bridge (Coming Soon):** A Mezo native bridge that will support deposits and withdrawals for smaller denominations of assets.

Fees will be accurately displayed in the app depending on the bridge route used for your specific transaction.

## Understanding Fees

When bridging out, you pay fees for the bridging service and network operations. All fees are clearly displayed before you confirm any transaction.

### Fee Structure (v1)

This is the initial version of the fee structure. **In the coming weeks, bridge fees will be reduced by approximately 3x and will move to a flat fee model instead of a percentage.**

#### Bridging to Ethereum
* **Minimum Withdrawal Amounts:**
    * `0.01` for BTC-based tokens (e.g., receiving tBTC)
    * `1,000` for USD-based tokens (e.g., mUSDC, mUSDT)
    * `75,000` for mT tokens
* **Fees:**
    * **Mezo Fee:** $0.25\%$ of the requested withdrawal amount.
    * **Mezo Gas Fee:** A gas fee paid in BTC for the transaction, based on Mezo network conditions.
* **Note:** The bridge system pays the final gas fee on the Ethereum network to deliver your assets.

#### Bridging to Bitcoin
* **Minimum Withdrawal Amount:** `0.01 BTC`
* **Fees:** You will see the following fees itemized in your wallet:
    * **Mezo Gas Fee:** A gas fee paid in BTC for the transaction, based on Mezo network conditions.
    * **Mezo Withdrawal Fee:** $0.25\%$ of the requested withdrawal amount.
    * **tBTC Bridge Redemption Treasury Fee:** $0.2\%$ of the withdrawal amount *after* the Mezo fee has been deducted.
    * **tBTC Bridge Redemption Transaction Fee:** A fixed fee of up to `0.001 BTC` (majority of times significantly less) to cover the Bitcoin network transaction, based on tBTC bridge conditions. Current Bitcoin network fees price this portion at <1 USD equivalent.

## What Happens After You Submit

Once you initiate a bridge-out transaction, here's the process:

1.  **Validation:** The system verifies your request meets all requirements.
2.  **Token Burn:** Your tokens on Mezo are burned (permanently removed from circulation).
3.  **Attestation:** Mezo validators confirm your withdrawal request.
4.  **Delivery:** Your assets are sent to your destination address.

### Timeline and Status Updates

Your bridge transaction will show these status updates:

-   **Created:** Your request has been recorded.
-   **Attesting:** Validators are confirming your withdrawal.
-   **Ready to Withdraw:** Confirmations complete, assets are being sent.
-   **Withdrawn/Redeemed:** Assets successfully delivered to your destination address.

You can track your transaction using the transaction hash provided in the interface.

## Important Address Requirements

### For Ethereum Destinations
-   Must be a valid Ethereum address (`0x` followed by 40 characters).
-   Can be a regular wallet or a smart contract that accepts standard token transfers.
-   Exchange deposit addresses work if they accept direct token transfers.

### For Bitcoin Destinations
Supported address types:
-   Legacy addresses (starting with `1`)
-   SegWit wrapped addresses (starting with `3`)
-   Native SegWit addresses (starting with `bc1q`)

**Not supported:** Taproot addresses (starting with `bc1p`)

## Safety Reminders

Before confirming any bridge transaction:

✅ **Double-check the destination address** - transactions can't be reversed.
✅ **Verify you've selected the correct network** (Ethereum vs Bitcoin).
✅ **Confirm the fee amount** shown in the app.
✅ **Remember that bridge-outs cannot be cancelled** once submitted.
✅ **Ensure your destination address format is supported.**

⚠️ **Warning:** If you send funds to an incorrect but validly formatted address, your funds will be permanently lost. Always copy-paste addresses and verify them carefully.

## Troubleshooting Common Issues

### "Approval Required" Message
**For mERC-20 tokens:** You need to approve the bridge contract to spend your tokens first. Click "Approve" when prompted, confirm the transaction, and then you can proceed with the bridge.

### "Unsupported Asset for Destination"
Remember:
-   mERC-20 tokens and MUSD can only go to Ethereum.
-   BTC can go to either Ethereum (as tBTC) or Bitcoin.

### "Invalid Recipient Address"
Check that:
-   Ethereum addresses start with `0x` and have 42 total characters.
-   Bitcoin addresses use supported formats (no `bc1p` Taproot addresses).
-   You're not using a testnet address for a mainnet transaction.

### Transaction Seems Stuck
Check the status in your transaction history:
-   If showing "Created" or "Attesting" - validators are still processing.
-   If showing "Ready to Withdraw" - the transfer is in progress on the destination network.
-   Contact support with your transaction ID if it has been pending for an unusually long time.

## Frequently Asked Questions

**Q: What's the difference between BTC on Mezo and tBTC on Ethereum?**
A: When you bridge BTC from Mezo to Ethereum, it becomes tBTC, an ERC-20 token that represents Bitcoin on the Ethereum network. tBTC is backed 1:1 by native Bitcoin and can be redeemed for it.

**Q: Can I bridge my mERC-20 tokens to Bitcoin?**
A: No, ERC-20 tokens are native to Ethereum-compatible networks. You can only bridge them back to Ethereum.

**Q: Why can't I use my Taproot Bitcoin address?**
A: The bridge currently supports standard Bitcoin address formats. Taproot (`bc1p`) support is planned for a future update.

**Q: Can I cancel a bridge transaction?**
A: No, once submitted, bridge transactions cannot be cancelled. Your Mezo tokens are immediately burned as part of the process.

**Q: How long does bridging take?**
A: Most bridge transactions complete within 30-60 minutes, depending on network conditions and validator attestation speed.

**Q: Can I bridge to Arbitrum, Optimism, or other L2s?**
A: Currently, only Ethereum mainnet and Bitcoin mainnet are supported destinations. L2 support may be added in the future.

**Q: Who pays for the gas on the destination network?**
A: For Ethereum, the bridge system handles the final delivery gas costs. For Bitcoin, the tBTC Bridge Redemption Transaction Fee covers the cost of the on-chain transaction.

## Security Model

Your bridge transaction requires approval from at least two-thirds of Mezo's bridge validators before your assets are released. This multi-signature approach ensures no single party can authorize withdrawals, keeping your funds secure throughout the bridging process.

## Need Help?

If you experience issues not covered in this guide:
1.  Note your transaction ID or unlock sequence number.
2.  Take a screenshot of any error messages.
3.  Contact Mezo support with these details.

Remember: Always verify addresses carefully and understand the fees before confirming any bridge transaction.

### Deposit Portal

Deposits that are still in the portal as part of the early deposit program can be withdrawn back to the user's BTC wallet. The withdrawal fees from the portal for BTC will depend on the parameters set in the tBTC bridge. Currently, tBTC charges a 0.2% redemption fee, and these parameters are governance-controlled and can be viewed in the [tBTC fees documentation](https://docs.threshold.network/applications/tBTC-v2/fees).