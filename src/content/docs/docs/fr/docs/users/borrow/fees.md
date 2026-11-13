---
title: Frais et coûts de MUSD
description: >-
  Découvrez l'ensemble des structures de frais et des coûts liés à l'utilisation
  de MUSD sur Mezo.
topic: users
---

## Récapitulatif des frais

| Frais | Montant | Moment de facturation |
| --- | --- | --- |
| **Frais d'émission** | 0,1 % des MUSD empruntés | Ouverture ou augmentation d'un prêt |
| **Intérêts** | 1–5 % APR (fixé à l'ouverture) | S'accumulent sur la dette en cours |
| **Frais de rachat** | 0,75 % | Échange de MUSD contre la garantie en BTC |
| **Frais de refinancement** | 0,02 % de la dette | Refinancement d'un prêt à un nouveau taux |
| **Dépôt de gaz** | 200 MUSD (forfaitaire) | Ouverture d'un prêt (restitué à la clôture) |

## Répartition des frais

:::note
Les frais sont répartis entre deux destinations : **(1)** le remboursement du prêt d'amorçage du protocole et **(2)** le MUSD Savings Vault. La répartition initiale est de 50/50 et peut être modifiée par la gouvernance via le splitter MUSD. Au moins 50 % des frais doivent être affectés au remboursement du prêt tant que le prêt d'amorçage n'est pas entièrement remboursé. Une fois celui-ci remboursé, la totalité des frais est versée au Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Frais d'intérêts (1–5 % APR)

Les intérêts des prêts [MUSD](https://mezo.org/feature/musd) sont fixes pendant toute la durée du prêt. Lorsque le crédit est augmenté, le nouveau crédit est ajouté au taux d'intérêt en vigueur.

Au lancement, les frais d'intérêts alimentent le Stability Pool de la trésorerie MUSD, qui couvre les liquidations et les créances irrécouvrables.

## Frais de rachat (0,75 %)

Frais de 0,75 % prélevés sur les BTC que reçoit un racheteur lorsqu'il échange des MUSD contre de la garantie lors d'un [rachat](/docs/fr/docs/users/borrow/liquidation-mechanics#rachats-%EF%B8%8F). Ils sont payés par le racheteur, et non par l'emprunteur dont le prêt fait l'objet du rachat.

Au lancement, les frais de rachat alimentent le Stability Pool de la trésorerie MUSD, qui couvre les liquidations et les créances irrécouvrables.

## Frais d'émission (0,1 %)

Les frais d'émission sont payés lors de l'ouverture d'un prêt MUSD ou lorsque le titulaire d'un prêt emprunte davantage de MUSD. Ils s'élèvent à 0,1 % du montant emprunté et sont payés en MUSD. Un prêt de 10 000 \$ en MUSD entraînerait ainsi 10 \$ de frais d'émission, payés en MUSD. Si vous augmentez votre prêt, vous payez les frais d'émission sur les MUSD nouvellement empruntés.

## Frais de refinancement (0,02 % de la dette)

Les frais de refinancement s'appliquent lorsque le titulaire d'un prêt MUSD demande la mise à jour du taux d'intérêt de son prêt. L'emprunteur peut souhaiter refinancer son prêt si le taux d'intérêt proposé pour les nouveaux prêts est plus avantageux que le taux fixe de son propre prêt. Le refinancement permet d'aligner le taux du prêt sur le nouveau taux. Chaque demande de refinancement entraîne des frais de refinancement de 0,02 % de la dette, payés en MUSD.

## Dépôt de gaz (frais forfaitaires de `200 MUSD`)

Un dépôt de 200 MUSD garantit la viabilité des liquidations. Il est restitué à la clôture du prêt. Le dépôt de gaz est frappé sous forme de dette supplémentaire dans le prêt et conservé en séquestre jusqu'à la clôture du prêt. Cette dette est prise en compte dans le calcul du ratio de collatéralisation.

## Autres frais de gaz et de transaction

Les utilisateurs qui interagissent avec le système MUSD doivent payer des frais de transaction pour chaque transaction diffusée sur le réseau Mezo. Cela comprend des actions comme la frappe, le rachat, le staking et les réclamations.

## Risques à connaître

:::caution
Emprunter des MUSD comporte des risques. Bien les comprendre vous aide à protéger votre position.

**Risque de rachat** : pour maintenir l'ancrage du MUSD, le protocole peut racheter des MUSD contre de la garantie, en commençant par les prêts dont le **ratio de garantie est le plus faible** (mais qui restent au-dessus du seuil de liquidation de 110 %). Si votre prêt fait l'objet d'un rachat, vous perdez votre exposition à la hausse du prix du BTC et pouvez faire face à des conséquences fiscales. Pour réduire ce risque, maintenez un ratio de garantie plus élevé que celui des autres emprunteurs.

**Risque de liquidation** : si le ratio de garantie de votre prêt passe **sous 110 %**, votre position peut être liquidée. Vous perdez votre garantie et conservez les MUSD empruntés. Pour réduire ce risque, surveillez régulièrement votre prêt et ajoutez de la garantie si nécessaire. Pour tous les détails, consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).
:::
