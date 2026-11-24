---
title: Déployer des incentives
description: >-
  Comment créer des gauges de vote pour les actifs de pool autorisés sur Mezo
  Earn.
topic: developers
---

Tous les actifs Mezo (BTC, MEZO et les jetons des contrats du mainnet) ont été ajoutés à la liste blanche du contrat PoolsVoter. Tout le monde peut désormais créer des gauges de vote pour les pools dont les deux actifs figurent sur la liste blanche.

Pour la liste complète des adresses de jetons autorisés pouvant être ajoutés comme incentives (incitations) sur les gauges, consultez la [référence des contrats](/docs/fr/docs/users/resources/contracts-reference#adresses-des-contrats-portal).

## Créer un gauge de pool

1. Accédez au [contrat PoolsVoter sur le Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) et connectez votre portefeuille.

2. Cliquez sur l'onglet **Contract**, puis sélectionnez **Write proxy** et choisissez `createPoolGauge`.

3. Pour le paramètre `_poolFactory`, utilisez l'une des adresses suivantes :
   - **Pools basiques :** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **Pools CL :** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Saisissez l'adresse du pool dans `_pool`.

5. Exécutez la transaction. Si le pool figure dans l'aperçu des pools, il devrait également commencer à apparaître dans l'interface de vote.
