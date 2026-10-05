---
title: Aperçu des nœuds Mezo
description: >-
  Découvrez comment les nœuds Mezo fonctionnent et soutiennent le fonctionnement
  du réseau pour la finance basée sur Bitcoin.
topic: developers
---

Les nœuds Mezo sont des composants essentiels du réseau et sont entièrement open source. Le [Mezo Validator Kit](./validator-kit) installe le [client mezod](https://github.com/mezo-org/mezod) ainsi que les autres éléments nécessaires pour exécuter un nœud en tant que validateur, nœud RPC ou nœud seed. Le kit simplifie plusieurs options de déploiement, comme Docker, un daemon natif et Helm pour Kubernetes.

- Consultez [mezod](https://github.com/mezo-org/mezod) sur GitHub.
- Utilisez le [Validator Kit](./validator-kit) pour exécuter votre propre nœud seed local.

## Configuration matérielle requise

La configuration matérielle requise varie selon le type de nœud. Consultez la section [Configuration matérielle requise](./validator-kit#configuration-matérielle-requise) pour connaître la configuration minimale de chaque type de nœud.

## Validateurs

Les validateurs Mezo sont chargés d'exécuter des nœuds qui vérifient les transactions, proposent et attestent de nouveaux blocs, et participent au mécanisme de consensus. Les validateurs Mezo doivent faire une demande de [Proof of Authority (PoA)](./validator-kit#configuration-du-validateur) avant que leurs nœuds puissent participer en tant que validateurs.

Les validateurs approuvés peuvent suivre les instructions du [Validator Kit](./validator-kit) pour apprendre à exécuter un nœud validateur.

## Nœuds RPC

Les nœuds RPC peuvent servir à créer un endpoint local pour le développement ou à s'intégrer à une plateforme d'infrastructure blockchain en tant que service (IaaS). La procédure de configuration d'un nœud seed est la même que celle d'un nœud validateur, mais vous n'avez pas besoin de demander la Proof of Authority (PoA).

Pour exécuter un nœud RPC, suivez les instructions du guide de configuration du [Validator Kit](./validator-kit), en appliquant en plus les étapes de configuration décrites dans la section de configuration du [nœud RPC](./validator-kit#configuration-dun-nœud-rpc).

## Nœuds seed

Les nœuds seed facilitent la découverte des pairs sur le réseau. La procédure de configuration d'un nœud seed est la même que celle d'un nœud validateur, mais vous n'avez pas besoin de demander la Proof of Authority (PoA).

Pour exécuter un nœud seed, suivez les instructions du guide de configuration du [Validator Kit](./validator-kit), mais ignorez la demande de PoA et définissez le paramètre `p2p.seed_mode` sur `true` dans le fichier config.toml du nœud. Consultez la section [Nœuds seed du réseau](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) pour plus de détails.
