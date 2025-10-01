---
title: Chain Governance & Security Controls
description: >-
  Learn about Mezo's governance structure, security mechanisms, and transparency
  measures
topic: users
---

Mezo operates with a transparent, multi-layered security model designed to protect user assets while enabling rapid response to potential threats.

## Governance Structure

### Primary Governance Multisig (5/9)
A 5-of-9 multisignature wallet controlled by Thesis manages core protocol governance functions:
- Protocol upgrades and changes
- Emergency chain pausing capabilities
- Critical parameter adjustments

**Address**: `0x98d8899c3030741925be630c710a98b57f397c7a`

### Technical Emergency Multisig (2/4)
A 2-of-4 multisignature wallet controlled by Thesis technical leadership provides rapid response capabilities for bridge-related emergencies:
- Emergency bridge pausing
- Time-sensitive technical interventions

**Address**: `0x40C7b9612B394212394EA860cACd0e176CA4Ae5B`

## Automated Security Mechanisms

### Supply Verification System
The validator code includes automated monitoring that continuously verifies BTC supply integrity:
- Compares on-chain BTC supply against bridged BTC reserves
- Automatically pauses the chain if discrepancies are detected
- Provides immediate protection against potential accounting errors

Learn more about Mezo's validator network in our [validator documentation](/docs/users/resources/validators) and how running a [validator node works](/docs/developers/mezo-nodes).

### Monitoring & Response Infrastructure
Mezo maintains comprehensive operational security:
- 24/7 chain monitoring systems
- Engineering on-call rotation with defined escalation procedures
- Documented playbooks for all emergency scenarios
- Rapid incident response protocols

## Transparency & Verification

All governance actions and multisig operations are fully traceable on-chain. Users can independently verify:
- Multisig composition and threshold requirements
- Historical governance transactions
- Chain state and pausing events

You can view these addresses and their activity using any Ethereum block explorer or through Mezo's chain explorer.
