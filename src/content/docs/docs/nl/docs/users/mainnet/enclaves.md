---
title: Enclaves
description: Zo werken institutionele BTC-stortingen op Mezo via Enclaves
topic: users
---

Mezo Enclaves vormen een stortingsroute voor instellingen: instellingen met wettelijke bewaarvereisten kunnen hiermee BTC op Mezo inzetten zonder de standaardbridge te gebruiken.

## Hoe Enclaves werken

Instellingen die onder bewaarregels vallen, kunnen BTC mogelijk niet via de standaardbridge van Mezo storten. Enclaves lossen dit op doordat BTC op Mezo kan worden vertegenwoordigd terwijl de onderliggende Bitcoin in bewaarconstructies blijft die aan de wettelijke vereisten voldoen.

Belangrijkste punten:

- Elke enclave wordt afzonderlijk op de allowlist gezet door de governance-multisig van Mezo
- Enclave-stortingen worden ondersteund door bijbehorende juridische overeenkomsten die de bridgebedragen en gebruiksbeperkingen vastleggen
- Alle Enclave-stortingen worden nog steeds gedekt door echte Bitcoin-UTXO's op de Bitcoin-chain

## De BTC-dekking van Enclaves controleren

Elke Enclave-storting wordt gedekt door UTXO's op de Bitcoin-blockchain. Deze UTXO's worden vastgelegd in de stortingstransactie van de tripartiete bridge en bijgehouden in de onchain state. De onderliggende BTC-dekking is dus transparant en controleerbaar.

Ontwikkelaars kunnen UTXO-gegevens van Enclaves opvragen met de functie `getTripartyUtxos` om de Bitcoin-dekking van elke Enclave-positie te controleren. Zie de [ontwikkelaarsdocumentatie over de bridge](/docs/nl/docs/developers/bridge/mezo-bridge) voor technische details.
