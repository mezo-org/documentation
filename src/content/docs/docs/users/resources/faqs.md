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
