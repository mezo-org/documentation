---
title: Minting Process
description: An overview of tBTC wallets, the minting process, and wallet signers
---

tBTC wallets produce signatures using a [Threshold Elliptic Curve Digital Signature Algorithm](https://eprint.iacr.org/2019/114.pdf), requiring 51 out of 100 signers to approve transactions. Its sweeping mechanism further secures funds by regularly consolidating all BTC deposits, making it harder for bad actors to exploit loopholes.

When you mint tBTC, you deposit BTC via an eligible Bitcoin wallet address (below) to a [Threshold Network](https://threshold.network/) generated wallet.

* **Wallet Generation**: The wallet is generated and signed among 51-of-100 wallet signers
* **Depositing and Receiving tBTC:** Depositor sends BTC funds to the most recently created wallet and reveals their desired Ethereum minting address. The bridge checks the bitcoin network to make sure the funds line up. If everything checks out, then the account is credited with tBTC

### Eligible BTC Addresses

The “Return Address” is a BTC address where your BTC funds are sent back if something exceptional happens with your deposit. A Return Address **cannot** be a multi-sig or an exchange address, and must start with “1” or “bc1”.&#x20;

* **P2PKH (Pay-to-PubKey Hash)**: These addresses start with “1”. They are part of the original Bitcoin address format and are widely supported across various wallets and exchanges.
* **P2WPKH (Pay-to-Witness-PubKey Hash):** These addresses start with “bc1”. They are part of the SegWit upgrade that improved transactional efficiency on Bitcoin. These are generally less supported by older Bitcoin wallet services.

### Wallet Upkeep

As time passes and operators drop out of the system, a wallet becomes at risk of being able to meet the 51-of-100 threshold to produce signatures. Additionally, Threshold aims to avoid situations where operators are the custodians of a wallet for extended periods.

To avoid these issues, once a wallet is older than the `wallet_max_age`, or if it drops below the liveness threshold (below 70 on a [heartbeat](https://github.com/keep-network/tbtc-v2/blob/main/docs/rfc/rfc-1.adoc#heartbeat)), there is a motion to [transfer the funds](https://github.com/keep-network/tbtc-v2/blob/main/docs/rfc/rfc-1.adoc#closing-a-wallet) to another randomly selected wallet.

Once a wallet no longer has funds and is not the primary wallet for new deposits, it can be [closed](https://github.com/keep-network/tbtc-v2/blob/main/docs/rfc/rfc-1.adoc#closing-a-wallet) and operators are no longer required to maintain it.

### Beta Stakers

The 100 Signers for a new wallet generation (one that manages BTC deposits) are selected from the Threshold Beta Stakers program. The Beta Stakers are currently [allow-list](https://docs.threshold.network/applications/tbtc-v2/the-path-to-permissionlessness)[ed](https://docs.threshold.network/applications/tbtc-v2/the-path-to-permissionlessness) stakers authorized to participate in tBTC minting and redemptions.

### Current Staker List

The current number of Beta Stakers can be viewed [here on Etherscan](https://etherscan.io/address/0xc2731fb2823af3Efc2694c9bC86F444d5c5bb4Dc#readContract#F16), see “operatorsInPool”.

As of today, there are [142 Nodes](https://monitoring.threshold.network/grafana/public-dashboards/1a09fa3a621c4837988b36f2d6ae6e24?orgId=0) in the Threshold Network. These nodes are on standby to join the Beta Stakers allow-list, but most are not involved in tBTC minting, redeeming, or custody.

### Guardians and Minters

Unlike the Beta Stakers program, the [Guardians and Minters](https://blog.threshold.network/minting-tbtc-your-passport-to-ethereum-defi/) for tBTC are to remain permissioned. This setup is an “optimistic mint” that makes the tBTC mint time significantly faster.

All Guardians and Minters can be removed with a DAO vote.

![](/gitbook/image%20%2813%29.png)
