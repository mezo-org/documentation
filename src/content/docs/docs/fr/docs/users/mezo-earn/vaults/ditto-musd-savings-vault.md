---
title: Ditto MUSD Savings Vault
description: >-
  Déposez des MUSD sur Mezo et recevez des dMUSD pour un coffre inter-chaînes
  automatisé avec une allocation initiale vers Spark Savings
topic: users
---

Le Ditto MUSD Savings Vault offre aux détenteurs de MUSD un autre moyen de faire fructifier leurs actifs via Mezo Earn. Déposez des MUSD sur Mezo et recevez des **dMUSD**, un jeton de reçu représentant votre position dans le coffre. Ditto Network gère les swaps, les transferts via un pont et l'allocation qui sous-tendent le coffre, avec une allocation initiale vers **Spark Savings sur Ethereum**.

Vous détenez une position dans le coffre sur Mezo, tandis que Ditto gère les étapes nécessaires pour accéder au rendement sous-jacent sur une autre chaîne.

Découvrez le [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## Fonctionnement

1. **Déposez des MUSD sur Mezo.** Vous recevez des dMUSD représentant votre position dans le coffre.
2. **Ditto alloue les actifs.** Les opérateurs se chargent des swaps et du transfert via un pont vers Ethereum, puis effectuent l'allocation vers Spark Savings.
3. **La stratégie sous-jacente génère du rendement.** Vos dMUSD représentent une créance sur les actifs du coffre. Les rendements dépendent de la stratégie sous-jacente et sont variables.
4. **Demandez un rachat pour sortir.** Ditto inverse le processus et restitue des MUSD sur Mezo une fois le retrait traité.

### Fonctionnement de l'automatisation

Plusieurs opérateurs vérifient indépendamment les actions proposées pour le coffre avant de les signer. L'exécution requiert un nombre minimum d'approbations d'opérateurs, et des contrats intelligents appliquent des vérifications supplémentaires onchain. La valorisation du coffre (valeur liquidative, ou NAV) est également publiée onchain via ce circuit signé.

Ces vérifications encadrent l'exécution automatisée ; elles n'éliminent pas les risques liés aux contrats intelligents, au pont, aux opérateurs ou à la stratégie.

## Détails du coffre

| Paramètre          | Valeur                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Actif de dépôt      | MUSD sur Mezo                                                                                                                                                                   |
| Jeton de reçu      | dMUSD                                                                                                                                                                          |
| Opérateur du coffre     | Ditto Network                                                                                                                                                                  |
| Allocation initiale | Spark Savings sur Ethereum                                                                                                                                                      |
| Actif de rachat   | MUSD sur Mezo                                                                                                                                                                   |
| Retraits        | Asynchrones : prévoyez un délai de traitement                                                                                                                                       |
| APY actuel        | Environ 3,60 % au 29 septembre 2026, conforme au taux de Spark Savings ; variable, consultez la [page du coffre](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

Les performances passées ne reflètent pas les performances actuelles et ne garantissent pas les rendements futurs. Vérifiez dans l'application le taux actuel, les éventuels frais, les conditions de retrait et les risques avant de déposer.

## Comment déposer

1. Ouvrez le [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) et connectez votre portefeuille sur Mezo.
2. Examinez la stratégie, le taux actuel et les conditions de retrait.
3. Saisissez le montant de MUSD que vous souhaitez déposer et suivez les invites d'approbation et de dépôt de l'application.
4. Confirmez les transactions requises dans votre portefeuille. Vos jetons de reçu dMUSD représentent votre position dans le coffre.

## Retraits

Demandez un rachat depuis la page du coffre et suivez les invites pour votre position en dMUSD. Ditto dénoue l'allocation sous-jacente, effectue les transferts via un pont et les swaps nécessaires, puis restitue des MUSD sur Mezo.

**Les retraits sont asynchrones.** L'envoi d'une demande de rachat ne signifie pas que les MUSD sont immédiatement disponibles dans votre portefeuille. Prévoyez un délai pour le traitement de la stratégie sous-jacente et des opérations inter-chaînes, et suivez les éventuelles étapes de finalisation affichées dans l'application. Le délai de traitement peut varier ; ne partez pas du principe que la fenêtre de retrait est fixe.

Si vous avez besoin d'aide concernant un rachat en attente, contactez le [support Mezo](/docs/fr/docs/users/resources/support) en indiquant l'adresse de votre portefeuille, le hash de la transaction et l'heure de votre demande.

## Différences entre dMUSD et sMUSD

Le coffre Ditto est un produit distinct du [MUSD Savings Vault](/docs/fr/docs/users/mezo-earn/vaults/musd-savings-vault) natif de Mezo :

- **dMUSD :** une position dans le coffre opéré par Ditto, initialement alloué à Spark Savings sur Ethereum. Les rachats restituent des MUSD sur Mezo selon un processus asynchrone.
- **sMUSD :** une position dans le coffre d'épargne natif de Mezo, qui génère du rendement à partir de l'activité du protocole MUSD.

Ces jetons de reçu représentent des coffres différents. Consultez les conditions propres à chaque coffre avant de déposer ou de racheter.

## Risques

- **Risque lié aux contrats intelligents :** un bug ou une exploitation de faille dans le coffre, les contrats d'automatisation ou les protocoles sous-jacents pourrait entraîner une perte de fonds.
- **Risque inter-chaînes :** les swaps et les transferts via un pont ajoutent des dépendances. Des défaillances du pont, des retards du réseau ou une exécution défavorable peuvent affecter la position et le processus de rachat.
- **Risque lié à la stratégie et aux stablecoins :** les rendements dépendent de Spark Savings et des actifs utilisés par la stratégie. Les taux peuvent évoluer et les stablecoins peuvent perdre leur parité.
- **Risque lié aux opérateurs :** le traitement dépend d'un nombre suffisant d'approbations d'opérateurs et d'une exécution réussie. Une indisponibilité ou une défaillance des opérateurs peut retarder les actions du coffre.
- **Risque lié aux retraits :** les actifs doivent être libérés de l'allocation sous-jacente et restitués sur Mezo. Il se peut que vous ne puissiez pas accéder à vos MUSD immédiatement après avoir demandé un rachat.

## Liens et ressources

- [Ditto MUSD Savings Vault sur Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Documentation de Ditto Network](https://docs.dittonetwork.io/)
- [Documentation de Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Support Mezo](/docs/fr/docs/users/resources/support)
