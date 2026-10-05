---
title: Enclaves
description: So funktionieren institutionelle BTC-Einzahlungen auf Mezo über Enclaves
topic: users
---

Mezo Enclaves sind ein institutioneller Einzahlungsweg, über den Institutionen mit regulatorischen Verwahrungsanforderungen BTC auf Mezo einsetzen können, ohne die Standard-Bridge zu verwenden.

## So funktionieren Enclaves

Institutionen, die Verwahrungsvorschriften unterliegen, können BTC unter Umständen nicht über die Standard-Bridge von Mezo einzahlen. Enclaves lösen dieses Problem: BTC kann auf Mezo abgebildet werden, während die zugrunde liegenden Bitcoin in Verwahrungsstrukturen verbleiben, die die regulatorischen Anforderungen erfüllen.

Die wichtigsten Punkte:

- Jede Enclave wird einzeln vom Governance-Multisig von Mezo auf die Allowlist gesetzt
- Enclave-Einzahlungen sind durch zugehörige rechtliche Vereinbarungen abgesichert, die Bridge-Beträge und Nutzungsbeschränkungen festlegen
- Alle Enclave-Einzahlungen sind weiterhin durch echte Bitcoin-UTXOs auf der Bitcoin-Chain gedeckt

## BTC-Deckung von Enclaves überprüfen

Jede Enclave-Einzahlung ist durch UTXOs auf der Bitcoin-Blockchain gedeckt. Diese UTXOs werden in der Einzahlungstransaktion der dreiseitigen (Triparty-)Bridge erfasst und im Onchain-State gespeichert. Die zugrunde liegende BTC-Deckung ist damit transparent und überprüfbar.

Entwickler können UTXO-Daten von Enclaves mit der Funktion `getTripartyUtxos` abfragen, um die Bitcoin-Deckung jeder Enclave-Position zu überprüfen. Technische Details finden Sie in der [Bridge-Dokumentation für Entwickler](/docs/de/docs/developers/bridge/mezo-bridge).
