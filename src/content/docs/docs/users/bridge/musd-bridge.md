---
title: MUSD Bridge
description: >-
  Learn how to bridge MUSD tokens between Ethereum and Mezo using Wormhole's
  Native Token Transfer protocol.
topic: users
---
The MUSD bridge enables transfers between Mezo and Ethereum networks using Wormhole's Native Token Transfer (NTT) protocol. This bridge maintains token fungibility while providing secure cross-chain functionality.

## How it Works

The MUSD bridge uses Wormhole's Native Token Transfer protocol to facilitate cross-chain transfers:

- **From Mezo to Ethereum**: MUSD tokens are locked on Mezo and the equivalent tokens are minted on Ethereum
- **From Ethereum to Mezo**: MUSD tokens are burned on Ethereum and equivalent tokens are unlocked on Mezo

This mechanism ensures that the total supply across both chains remains constant while allowing users to move their tokens freely between networks.

## Using the Portal UI

The easiest way to bridge MUSD tokens is through the [Portal UI](https://portalbridge.com/):

1. **Connect your wallet** to the Portal interface
2. **Select source and destination chains** (Mezo ↔ Ethereum)
3. **Choose MUSD** as the token to bridge
4. **Enter the amount** you want to bridge
5. **Review transaction details** including fees and estimated time
6. **Confirm the transaction** in your wallet
7. **Wait for confirmation** on both chains

The Portal UI provides a user-friendly interface that handles all the complex interactions with the underlying NTT contracts.

## Smart Contracts

The MUSD bridge is powered by the following smart contracts:

### Mezo Network
- **NTT Manager**: [0x7efb386675d75280D39Aae42964A6776DE0ee0bD](https://explorer.mezo.org/address/0x7efb386675d75280D39Aae42964A6776DE0ee0bD)
- **Wormhole Transceiver**: [0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71](https://explorer.mezo.org/address/0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71)
- **MUSD Token**: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://explorer.mezo.org/token/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)

### Ethereum Network
- **NTT Manager**: [0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E](https://etherscan.io/address/0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E)
- **Wormhole Transceiver**: [0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E](https://etherscan.io/address/0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E)
- **MUSD Token**: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://etherscan.io/address/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)

## Additional Resources

- [Wormhole NTT Documentation](https://wormhole.com/docs/products/native-token-transfers/overview/) - Learn more about the Native Token Transfer protocol
- [Portal Bridge](https://portalbridge.com/) - The official UI for bridging tokens
- [Contracts Reference](../resources/contracts-reference.md) - Complete list of all protocol contracts
