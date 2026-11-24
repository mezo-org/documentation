---
title: Overzicht van Mezo-nodes
description: >-
  Ontdek hoe Mezo-nodes werken en de netwerkfunctionaliteit voor financiën op
  basis van Bitcoin ondersteunen.
topic: developers
---

Mezo-nodes zijn essentiële onderdelen van het netwerk en volledig open source. De [Mezo Validator Kit](./validator-kit) zet de [mezod-client](https://github.com/mezo-org/mezod) en de overige vereisten op om een node te draaien als validator, RPC-node of seed node. De kit vereenvoudigt verschillende deploymentopties, zoals Docker, een native daemon en Helm voor Kubernetes.

- Bekijk [mezod](https://github.com/mezo-org/mezod) op GitHub.
- Gebruik de [Validator Kit](./validator-kit) om je eigen lokale seed node te draaien.

## Hardwarevereisten

De hardwarevereisten verschillen per nodetype. Zie het gedeelte [Hardwarevereisten](./validator-kit#hardwarevereisten) voor de minimale vereisten per nodetype.

## Validators

Mezo-validators draaien nodes die transacties verifiëren, nieuwe blokken voorstellen en attesteren, en deelnemen aan het consensusmechanisme. Mezo-validators moeten [Proof of Authority (PoA)](./validator-kit#validator-instellen) aanvragen voordat hun nodes als validator kunnen deelnemen.

Goedgekeurde validators kunnen de instructies van de [Validator Kit](./validator-kit) volgen om te leren hoe ze een validatornode draaien.

## RPC-nodes

RPC-nodes kun je gebruiken om een lokaal endpoint voor ontwikkeling te maken of als onderdeel van een blockchainplatform op basis van infrastructure-as-a-service (IaaS). Het opzetten van een seed node verloopt hetzelfde als bij een validatornode, maar je hoeft geen Proof of Authority (PoA) aan te vragen.

Om een RPC-node te draaien, volg je de instructies in de installatiehandleiding van de [Validator Kit](./validator-kit) en voer je daarnaast de extra configuratiestappen uit die in het gedeelte [RPC-node instellen](./validator-kit#rpc-node-instellen) staan.

## Seed nodes

Seed nodes helpen bij het vinden van peers in het netwerk. Het opzetten van een seed node verloopt hetzelfde als bij een validatornode, maar je hoeft geen Proof of Authority (PoA) aan te vragen.

Om een seed node te draaien, volg je de instructies in de installatiehandleiding van de [Validator Kit](./validator-kit), maar sla je de PoA-aanvraag over en zet je de parameter `p2p.seed_mode` in het bestand config.toml van de node op `true`. Zie het gedeelte [Network seed nodes](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) voor meer informatie.
