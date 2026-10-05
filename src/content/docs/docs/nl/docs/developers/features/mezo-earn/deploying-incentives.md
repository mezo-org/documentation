---
title: Incentives deployen
description: >-
  Zo maak je stemgauges aan voor pools met activa die op de whitelist van Mezo
  Earn staan.
topic: developers
---

Alle Mezo-activa (BTC, MEZO en de tokencontracten op mainnet) staan op de whitelist van het PoolsVoter-contract. Iedereen kan nu stemgauges aanmaken voor pools waarvan beide activa op de whitelist staan.

Een volledige lijst van tokenadressen op de whitelist die als incentives aan de gauges kunnen worden toegevoegd, vind je in de [contractreferentie](/docs/nl/docs/users/resources/contracts-reference#portal-contractadressen).

## Een poolgauge aanmaken

1. Ga naar het [PoolsVoter-contract in de Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) en verbind je wallet.

2. Klik op het tabblad **Contract**, selecteer dan **Write proxy** en kies `createPoolGauge`.

3. Gebruik voor de parameter `_poolFactory` een van de volgende adressen:
   - **Basic-pools:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **CL-pools:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Vul het pooladres in bij `_pool`.

5. Voer de transactie uit. Als de pool in het pooloverzicht staat, zou die ook in de stem-UI moeten verschijnen.
