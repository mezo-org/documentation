---
title: Übersicht über Mezo-Nodes
description: >-
  Erfahren Sie, wie Mezo-Nodes arbeiten und die Netzwerkfunktionen für
  Bitcoin-basierte Finanzanwendungen unterstützen.
topic: developers
---

Mezo-Nodes sind zentrale Bestandteile des Netzwerks und vollständig Open Source. Das [Mezo Validator Kit](./validator-kit) richtet den [mezod-Client](https://github.com/mezo-org/mezod) und die weiteren Voraussetzungen ein, um einen Node als Validator, als RPC-Node oder als Seed-Node zu betreiben. Das Kit vereinfacht mehrere Deployment-Optionen, etwa Docker, einen nativen Daemon und Helm für Kubernetes.

- Siehe [mezod](https://github.com/mezo-org/mezod) auf GitHub.
- Verwenden Sie das [Validator Kit](./validator-kit), um Ihren eigenen lokalen Seed-Node zu betreiben.

## Hardwareanforderungen

Die Hardwareanforderungen unterscheiden sich je nach Node-Typ. Die Mindestanforderungen für jeden Node-Typ finden Sie im Abschnitt [Hardwareanforderungen](./validator-kit#hardwareanforderungen).

## Validatoren

Mezo-Validatoren betreiben Nodes, die Transaktionen überprüfen, neue Blöcke vorschlagen und attestieren und am Konsensmechanismus teilnehmen. Mezo-Validatoren müssen sich für [Proof of Authority (PoA)](./validator-kit#validator-einrichtung) bewerben, bevor ihre Nodes als Validatoren teilnehmen können.

Zugelassene Validatoren können der Anleitung zum [Validator Kit](./validator-kit) folgen, um zu erfahren, wie sie einen Validator-Node betreiben.

## RPC-Nodes

RPC-Nodes können verwendet werden, um einen lokalen Endpoint für die Entwicklung bereitzustellen, oder als Teil einer Blockchain-Plattform nach dem Modell Infrastructure as a Service (IaaS). Die Einrichtung eines Seed-Nodes entspricht der eines Validator-Nodes, Sie müssen jedoch keinen Proof of Authority (PoA) beantragen.

Um einen RPC-Node zu betreiben, folgen Sie der Einrichtungsanleitung für das [Validator Kit](./validator-kit) und führen zusätzlich die Konfigurationsschritte aus dem Abschnitt zur Einrichtung eines [RPC-Nodes](./validator-kit#rpc-node-einrichtung) aus.

## Seed-Nodes

Seed-Nodes unterstützen die Peer-Erkennung im Netzwerk. Die Einrichtung eines Seed-Nodes entspricht der eines Validator-Nodes, Sie müssen jedoch keinen Proof of Authority (PoA) beantragen.

Um einen Seed-Node zu betreiben, folgen Sie der Einrichtungsanleitung für das [Validator Kit](./validator-kit), überspringen jedoch die Bewerbung für PoA und setzen den Parameter `p2p.seed_mode` in der Datei config.toml des Nodes auf `true`. Details finden Sie im Abschnitt [Network seed nodes](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes).
