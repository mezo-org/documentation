---
title: FAQs
description: Frequently asked questions for Mezo App, Mezo Validators, and more.
---

## Mezo App

### If I lock my Bitcoin and Mezo launches before my lock date expires, can I use my assets on Mezo?

If you max lock your Bitcoin for 9 months, and Mezo launches in 7 months, you will have the option to bridge your assets to Mezo. More details on Mezo Network bridging will be released soon.

### Do you get a higher score for depositing tBTC than WBTC?

All forms of Bitcoin deposits generate the same score: 1,000 mats per BTC per day.&#x20;

### What happens to my bitcoin after I deposit?

Once you deposit your Bitcoin to Mezo (BTC, tBTC, or WBTC), it is securely held in a locking contract. We do not touch any of the funds. Once your Bitcoin is unlocked, you will receive 100% of your deposit back, minus the depositing fees. You can verify funds in the contract on Etherscan.

### Is there a minimum deposit requirement?

There is a minimum of .01 BTC deposits from the Bitcoin Network. For ERC-20 deposits (including other forms of BTC), there is no minimum.

***

## matsnet

### What are mats?

mats, or "magic satoshis," are Mezo’s community-driven points earned through participation such as memes, contributions, or deposits. They have no monetary value but unlock utilities like matsnet Alpha access.

### What is matsnet?

matsnet is Mezo’s incentivized testnet. Users can convert their mats into matsnet BTC, enabling them to explore dApps, leaderboard challenges, and other BitcoinFi ecosystem features.

### Should I convert mats to sats?

Converting mats to sats via the “Stack matsnet BTC” feature effectively burns your mats, affecting your mats leaderboard rank but boosting your Stack Rank. The decision to convert is yours, but we will release more info on the two leaderboards soon.

### What is the Stack Rank leaderboard?

The Stack Rank leaderboard tracks matsnet BTC holdings and testnet participation. Earn badges for activities and engagement on the testnet to boost your standing on the Stack Rank leaderboard.

### Can I convert sats back to mats?

Not currently. Converting mats to sats is a one-way transaction. We will share updates on this feature in the future.

### Will there be dApps on matsnet?

Yes, the team is onboarding dApps to expand functionality and offer users various app categories for the BitcoinFi ecosystem.

### How do I connect to matsnet?

Add matsnet to your wallet via [Chainlist](https://chainlist.org/chain/31611) or manually enter the following:

* Public JSON RPC Endpoint:
  * HTTPS: https://rpc.test.mezo.org
  * WSS: wss://rpc-ws.test.mezo.org
* Chain ID: 31611
* Native Currency: Bitcoin, BTC, 18 Decimals
* Block Explorer: https://explorer.test.mezo.org

### Can I deploy contracts?

Yes! matsnet supports deploying contracts and interacting with them. A [guide is available](/docs/users/getting-started/mezo-matsnet-alpha-testnet/deploy-and-verify-contracts) for deploying to matsnet. Please reach out on Discord if you are looking for more deployment info.

### What happens to my Bitcoin, other deposits, and boosts?

Your deposits (BTC, tBTC, WBTC) remain secure in Mezo’s portal contract. You continue to earn mats daily, and your assets are fully verifiable onchain. When unlocked, you’ll receive your full deposit minus fees.

Boosts are still available for longer lockups, stable deposits, and T deposits.

### What happened to stBTC?

Minting for stBTC has ended, but locked positions remain secure. Looped positions can be unwound at deposit unlock or mainnet launch. Learn more [here](/docs/users/stbtc-staked-bitcoin/redeeming-your-stbtc-deposits).

## Mezo Validators

### When will the Mezo validator program launch?

The Mezo Validator program is currently active.

### What are the benefits of becoming a Mezo validator?

Validators play a critical role in securing the Mezo network. As an early validator, you'll earn rewards in the form of mats for contributing to network security and processing transactions.

### What security measures and risk management practices are in place regarding slashing?

With our current system, there is no slashing because validators do not stake anything. Instead, governance can kick specific validators from the pool if they observe misbehavior.&#x20;

### Mezo BTC bridge architecture

The BTC bridge's pillar on Mezo is the validator set. On Ethereum, this will be a special \`BitcoinDepositor\` smart contract. All Mezo validators will run a separate process to observe what happens in the `BitcoinDepositor` contract on Ethereum. This process is called the bridge sidecar and requires a connection to an arbitrary Ethereum node. An onchain event will be emitted whenever someone locks tBTC in the \`BitcoinDepositor\` contract. All Mezo validators will capture it within their sidecars.&#x20;

A subset of Mezo validators endorsed to actively participate in the bridging process (the so called bridging validators; 10-15 top-tier validators) will embed the deposit data within the candidate block as part of the consensus process. Other validators (the non-bridging ones) will verify the deposit information against their sidecars. If they achieve consensus, the BTC on Mezo will be minted as part of the block. To achieve decent decentralization, we require that bridging validators run their sidecars with full Ethereum nodes. The non-bridging validators are encouraged to do the same, but Alchemy/Infura is acceptable in the early stage of the network, given the costs of running full Ethereum nodes

### What software will I need to run a Mezo validator node?

Mezo Validators will need to run a few primary software components:

1. Mezo Node: This will allow you to run a light node responsible for data availability sampling.
2. Mezo Validator: This will enable you to run a consensus node, participate in block validation, and earn rewards. Validators will also provide RPC endpoints for other applications to interact with the Mezo network.
3. Bridge Sidecar: This component handles the processes for validating and transferring assets between Mezo and external networks, such as Ethereum.

### What are the rewards for staking and delegation?

The exact reward structure and commission rates will be finalized and announced before the official Mezo validator program launches.

### What are the security best practices for running a Mezo validator node?

Security is paramount. We will provide extensive resources on securing your validator node, including best practices for key management, hardware security, and ongoing monitoring.
