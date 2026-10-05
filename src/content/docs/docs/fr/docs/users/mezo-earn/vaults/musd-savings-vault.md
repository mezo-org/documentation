---
title: MUSD Savings Vault
description: Gagnez sur vos MUSD un rendement adossé aux frais grâce au Mezo Savings Vault
topic: users
---

Le MUSD Savings Vault est le produit d'épargne natif de Mezo destiné aux détenteurs de MUSD.

**Fonctionnement :**

- Déposez des MUSD et recevez des sMUSD, un jeton de reçu représentant votre part du coffre
- Le rendement s'accumule dans le taux de change des sMUSD : au fil du temps, 1 sMUSD devient échangeable contre plus de 1 MUSD. Lors de votre retrait, vous recevrez plus de MUSD que vous n'en avez déposé.
- Le rendement provient de deux sources au sein du système MUSD : les frais du protocole MUSD (intérêts d'emprunt, frais d'ouverture, frais de refinancement) et les frais en BTC issus des opérations de prêt MUSD, qui sont convertis en MUSD et distribués chaque semaine
- Ces deux flux sont distribués au coffre par le protocole à un rythme hebdomadaire
- L'APR est variable et dépend de l'activité du protocole : consultez le taux actuel sur [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Répartition des frais

Les frais du protocole MUSD sont répartis à parts égales (50/50) entre deux destinations :

- **MUSD Savings Vault** : distribués aux détenteurs de sMUSD, ou redirigés vers les votants veBTC dans le cas des sMUSD stakés
- **Remboursement du [prêt d'amorçage du protocole](/docs/fr/docs/users/borrow/architecture-and-terminology/#prêt-damorçage-du-protocole)**

Cette répartition peut être modifiée par la gouvernance via le répartiteur MUSD, avec un minimum de 50 % affecté au remboursement du prêt jusqu'au remboursement intégral du prêt d'amorçage. Une fois celui-ci remboursé, l'ensemble des frais est versé au Savings Vault. Consultez [Frais MUSD](/docs/fr/docs/users/borrow/fees/) pour tous les détails.

---

## Comprendre les sMUSD

Les sMUSD sont votre jeton de reçu pour le Mezo MUSD Savings Vault. Quelques points à savoir :

- **Le rendement se reflète dans le taux de change, pas dans votre solde.** Votre solde de sMUSD reste identique après le dépôt, mais chaque sMUSD devient échangeable contre davantage de MUSD au fil du temps, à mesure que le coffre accumule des frais. Vous constaterez la différence lors du retrait.
- **Le rendement est distribué chaque semaine.** Le protocole distribue chaque semaine au coffre les frais accumulés. Le taux de change sMUSD/MUSD est mis à jour à chaque distribution.
- **Les sMUSD sont transférables.** Vous pouvez envoyer ou détenir des sMUSD comme n'importe quel autre jeton. C'est le détenteur au moment du retrait qui récupère le rendement accumulé.
- **Si vous stakez vos sMUSD dans le gauge, votre rendement est redirigé.** Les sMUSD stakés rapportent des émissions de MEZO au lieu des revenus directs issus des frais. Les revenus de frais qui vous auraient été versés sont redirigés vers les votants veBTC qui ont voté pour le gauge MUSD Savings. L'unstaking rétablit l'accumulation directe du rendement.

---

## Détails du coffre

| Paramètre | Valeur |
|-----------|-------|
| Jeton de dépôt | MUSD |
| Jeton de reçu | sMUSD |
| Stratège | Mezo |
| Frais de retrait | Aucun |
| Délai de blocage des retraits | 0h |
| APR actuel | Variable : consultez [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## Staker des sMUSD dans le gauge

Vous pouvez, si vous le souhaitez, staker votre jeton de reçu sMUSD dans le gauge MUSD Savings pour gagner des émissions de jetons MEZO.

**Le compromis :**

- **sMUSD non stakés :** vous percevez directement votre part proportionnelle du rendement du coffre et des revenus d'intérêts/de frais MUSD
- **sMUSD stakés :** votre part des revenus d'intérêts et de frais est redirigée vers les votants veBTC du gauge. En échange, vous gagnez des émissions en fonction du nombre de votes reçus par le gauge

Ce fonctionnement reproduit celui du staking des LP dans les pools de liquidité du DEX natif de Mezo : les stakers renoncent aux revenus de frais en échange d'émissions, tandis que les votants perçoivent les frais redirigés.

Le gauge MUSD Savings Rate est en concurrence pour les votes avec les gauges des pools LP. Ces gauges sont collectivement appelés « gauges de staking » : un vote alloué au gauge du taux d'épargne ne peut pas être alloué en même temps à un gauge LP.

Maintenant que les émissions de MEZO sont actives, staker des sMUSD dans le gauge rapporte des MEZO en plus de votre position de base. Le gauge MUSD Savings est en concurrence pour les votes veBTC avec les gauges des pools LP : plus le gauge d'épargne reçoit de votes, plus les émissions de MEZO acheminées vers les stakers sont importantes. Les votants veBTC qui soutiennent le gauge perçoivent les frais MUSD redirigés par les stakers. L'APR actuel du gauge pour les stakers et les votants est affiché sur la page Vote, à l'adresse [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Risques

### Risque lié à la stratégie
Chaque coffre déploie les actifs différemment. Comprenez la stratégie sous-jacente avant de déposer : certaines stratégies comportent plus de risques que d'autres.

### Risque lié aux contrats intelligents
Les coffres interagissent avec plusieurs contrats intelligents. Bien que les coffres Mezo soient audités, tous les contrats intelligents comportent un risque inhérent. Ne déposez que des montants avec lesquels vous êtes à l'aise.
