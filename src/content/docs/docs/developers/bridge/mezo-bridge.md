---
title: Mezo Bridge Overview
topic: developers
---

Mezo Bridge enables native asset movement between Bitcoin, Ethereum, and Mezo. Below are the primary flows with references to the design RFCs.

### Bridge In to Mezo

From Bitcoin → Mezo

1. Lock BTC to the bridge-controlled address with metadata identifying the Mezo recipient.
2. Submit proof and attestation to Mezo Bridge contract.
3. Contract verifies proof.
4. Mint corresponding asset on Mezo to recipient.

From Ethereum → Mezo

1. Lock the ERC-20 on Ethereum via the Mezo Bridge contract, emitting an `AssetLocked` event with Mezo recipient.
2. Bridge validators listen for such events.
3. Bridge validators validate events inclusion and validator quorum.
4. Mint corresponding asset on Mezo to recipient.

### Bridge Out of Mezo

From Mezo → Bitcoin

1. Burn the asset on Mezo specifying the Bitcoin recipient address.
2. Submit proof and attestation to Mezo Bridge contract.
3. Contract verifies proof.
4. Upon verification, BTC is released to the recipient address.

From Mezo → Ethereum

1. Burn the asset on Mezo specifying the Ethereum recipient.
2. Bridge validators listen for `AssetsUnlocked` events.
3. Bridge validators validate events inclusion and validator quorum.
4. Upon verification, the ERC-20 is released to the recipient.

### Architecture

- **Lock/Burn on Source**: Assets are locked on Bitcoin/Ethereum (or burned on Mezo) with data that identifies the intended recipient and target chain.
- **Attestation & Relay**: Offchain clients produce attestations over source-chain events and relay proofs to the destination chain.
- **Mint/Release on Destination**: Upon valid attestation and proof verification, destination contracts mint wrapped assets or release locked funds.

### Core Flow

1. User initiates a bridge transfer specifying destination address and amount.
2. Source-chain contract/event is emitted after lock/burn; event includes unique sequence ID and parameters.
3. Offchain client collects confirmations/finality per RFC thresholds and submit proof+attestation to destination contract.
4. Destination verifies:
   - event authenticity
   - validator quorum/signatures
5. On success, destination executes mint/release and records completion.

### Contracts

Mainnet:

- Mezo Bridge: [0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c](https://etherscan.io/address/0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c)
- Bridged tokens [list](https://mezo.org/docs/users/resources/contracts-reference#bridged-tokens)

Sepolia:

- Mezo Bridge: [0x3a3BaE133739f92a885070DbF3300d61B232497C](https://sepolia.etherscan.io/address/0x3a3BaE133739f92a885070DbF3300d61B232497C)
- Bridged tokens [list](https://mezo.org/docs/users/resources/contracts-reference#bridged-tokens)

### Audits

Please see the [Audits](https://github.com/mezo-org/audits) page for the latest audits.

## Additional Resources

For full technical details, message formats, and security rationale, see the following RFCs:

- [RFC-2: Mezo Bridge](https://github.com/mezo-org/mezod/blob/main/docs/rfc/rfc-2.md)
- [RFC-4: Mezo Bridge](https://github.com/mezo-org/mezod/blob/main/docs/rfc/rfc-4.md)
- [RFC-5: Mezo Bridge](https://github.com/mezo-org/mezod/blob/main/docs/rfc/rfc-5.md)
