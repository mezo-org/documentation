---
title: tBTC Unmint & Redemption
---

When you deposit BTC (from a Bitcoin wallet) to Mezo, it is bridged and deposited into the Mezo contract using tBTC (Threshold Network). When withdrawing your BTC deposits from Mezo to your Bitcoin wallet, the tBTC tokens must first be unminted through the Threshold Network.

The Threshold Network currently charges a 0.2% unminting fee for this service. Mezo does not impose any additional fees for these withdrawals, nor do the fees go to Mezo. All tBTC redemption fees go directly to Threshold DAO.&#x20;

Below is the full tBTC unminting guide so you can understand the process of issuing a withdrawal.

***

## Before You Unmint

Here are some things you will need:

✅ tBTC tokens on Ethereum

✅ Ethereum (ETH) for transaction gas costs

✅ Bitcoin compatible wallet to receive your BTC

✅ Ethereum compatible wallet containing your tBTC

> **Important Fee Note:** There is a **0.2% fee** on the BTC redeemed when unminting tBTC. For more information, please consult [TIP-075. ](https://forum.threshold.network/t/tip-075-tbtc-bridge-fee-holiday-part-2/803)

## Start Unminting tBTC

Head to the official unminting page for tBTC: [**https://dashboard.threshold.network/tBTC/unmint**](https://dashboard.threshold.network/tBTC/unmint)

> **Important:** Always verify you are using the official Threshold Network links.

### Step 1: Connect Your Wallet

Connect your preferred Ethereum wallet containing tBTC tokens to the Threshold Dashboard by selecting "Connect Wallet".

Navigate to the tBTC Bridge page and select the "Unmint" tab.

![](/docs/gitbook/Screenshot%202025-01-15%20at%203.50.46%20PM.png)

### Step 2: Enter Unminting Details

Enter the following information:

* The amount of tBTC you wish to unmint (minimum unmint should be greater than or equal 0.01 tBTC).&#x20;
* Your Bitcoin receiving address (must start with "1", "3", or "bc1").&#x20;

> **IMPORTANT:** Double-check your Bitcoin receiving address. Incorrect addresses cannot be modified after submission.

### Step 3: Initiate the Unmint Transaction

Click on the **Unmint.** Your wallet will prompt you to sign and confirm the transaction on the Ethereum network. This transaction will burn your tBTC on Ethereum and signal the network to prepare your BTC withdrawal.

Once you’ve confirmed the transaction, you’ll see a status update in the dashboard showing that your unmint request has been submitted.

### Step 4: Wait for Network Confirmation and BTC Sweep

After submitting your unmint transaction, the Threshold Network will coordinate a “[sweep](https://docs.threshold.network/applications/tbtc-v2/sweeping)” transaction to send BTC to your specified address.

* This sweep process is performed by network participants who aggregate unmint requests and broadcast a BTC transaction to return funds to your Bitcoin address.

You can monitor the status of your unmint in the dashboard or on the [Bridge contract address](https://etherscan.io/address/0x5e4861a80B55f035D899f66772117F00FA0E8e7B).&#x20;

> **Note:** Depending on network conditions, it may take some time (usually a few minutes up to an hour) for the BTC to appear in your wallet. This is normal, as confirmations are required on the Bitcoin blockchain.

That’s it! You’ve successfully unminted tBTC back to BTC. You can track all your unminting transactions in the "History" section of the dashboard.&#x20;

***

For additional support or questions, visit the official [Threshold Network Discord](https://discord.com/invite/threshold) server or [documentation](https://app.gitbook.com/u/oR80Il8QsGRsdIkALflyKYt3rty1).
