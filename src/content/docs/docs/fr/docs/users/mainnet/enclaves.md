---
title: Enclaves
description: Fonctionnement des dépôts institutionnels de BTC sur Mezo via les enclaves
topic: users
---

Les Mezo Enclaves constituent un canal de dépôt institutionnel qui permet aux institutions soumises à des exigences réglementaires en matière de conservation de déployer des BTC sur Mezo sans passer par le pont standard.

## Fonctionnement des enclaves

Les institutions soumises à des réglementations en matière de conservation peuvent ne pas être en mesure de déposer des BTC via le pont standard de Mezo. Les enclaves répondent à ce problème en permettant de représenter des BTC sur Mezo, tandis que les bitcoins sous-jacents restent conservés selon des modalités qui satisfont aux exigences réglementaires.

Points clés :

- Chaque enclave est ajoutée individuellement à la liste d'autorisation par le multisig de gouvernance de Mezo
- Les dépôts des enclaves s'appuient sur des accords juridiques associés qui définissent les montants transférés via le pont et les restrictions d'utilisation
- Tous les dépôts des enclaves restent adossés à de véritables UTXO Bitcoin sur la chaîne Bitcoin

## Vérifier l'adossement en BTC des enclaves

Chaque dépôt d'enclave est adossé à des UTXO sur la blockchain Bitcoin. Ces UTXO sont enregistrés dans la transaction de dépôt tripartite du pont et conservés dans l'état onchain : l'adossement en BTC sous-jacent est donc transparent et vérifiable.

Les développeurs peuvent interroger les données UTXO des enclaves à l'aide de la fonction `getTripartyUtxos` afin de vérifier les bitcoins qui adossent n'importe quelle position d'enclave. Consultez la [documentation développeur sur le pont](/docs/fr/docs/developers/bridge/mezo-bridge) pour les détails techniques.
