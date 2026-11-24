---
title: Anreize deployen
description: >-
  So erstellen Sie Voting-Gauges für Pool-Assets auf der Whitelist von Mezo
  Earn.
topic: developers
---

Alle Mezo-Assets (BTC, MEZO und die Token-Contracts im Mainnet) wurden im Contract PoolsVoter auf die Whitelist gesetzt. Jeder kann jetzt Voting-Gauges für Pools erstellen, deren beide Assets auf der Whitelist stehen.

Eine vollständige Liste der Token-Adressen auf der Whitelist, die als Anreize auf den Gauges hinzugefügt werden können, finden Sie in der [Contract-Referenz](/docs/de/docs/users/resources/contracts-reference#portal-contract-adressen).

## Einen Pool-Gauge erstellen

1. Rufen Sie den [PoolsVoter-Contract im Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) auf und verbinden Sie Ihre Wallet.

2. Klicken Sie auf die Registerkarte **Contract**, wählen Sie dann **Write proxy** und anschließend `createPoolGauge`.

3. Verwenden Sie für den Parameter `_poolFactory` eine der folgenden Adressen:
   - **Basis-Pools:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **CL-Pools:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Geben Sie die Pool-Adresse unter `_pool` ein.

5. Führen Sie die Transaktion aus. Wenn der Pool in der Pool-Übersicht aufgeführt ist, sollte er auch in der Abstimmungsoberfläche erscheinen.
