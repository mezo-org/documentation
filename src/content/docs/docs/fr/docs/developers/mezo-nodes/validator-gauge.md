---
title: Gauge de validateur
description: >-
  Guide destiné aux validateurs expliquant comment gérer les bénéficiaires des
  récompenses, voter sur les gauges de validateur et réclamer les récompenses en
  MEZO.
topic: developers
---

Les validateurs peuvent recevoir des émissions de MEZO chaque semaine, mais uniquement si leur gauge de validateur reçoit des votes à chaque époque. Sans votes sur son gauge, un validateur ne reçoit aucune émission. Ce guide explique comment gérer les bénéficiaires des récompenses, voter sur votre gauge de validateur et réclamer vos récompenses.

## Aperçu

Chaque validateur dispose d'un gauge associé dans le [contrat ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). Les récompenses se réclament via le contrat ValidatorsVoter en indiquant l'adresse du gauge du validateur.

Chaque gauge possède une seule adresse bénéficiaire autorisée à réclamer les récompenses. Par défaut, le bénéficiaire est l'adresse d'opérateur du validateur enregistrée dans le [contrat Proof of Authority (PoA)](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Calendrier de libération des récompenses]
Les récompenses attribuées pour une époque ne peuvent pas être réclamées immédiatement : elles sont libérées progressivement au cours de l'époque. Par exemple, si des récompenses sont attribuées à un gauge au début de l'époque N, 100 % des récompenses de l'époque N seront disponibles à la fin de l'époque.
:::

## Changer le bénéficiaire des récompenses

Les validateurs peuvent désigner une autre adresse pour recevoir les récompenses en MEZO. C'est utile pour séparer les fonctions opérationnelles et de trésorerie.

Pour changer le bénéficiaire des récompenses :

1. **Connectez le portefeuille de votre adresse d'opérateur**
   Utilisez le portefeuille associé à l'adresse d'opérateur de votre validateur.

2. **Déterminez l'adresse de votre gauge**
   Appelez `ValidatorsVoter.validatorToGauge()` en passant votre adresse d'opérateur en paramètre.

3. **Changez de bénéficiaire**
   Appelez `Gauge.switchRewardsBeneficiary()` en passant la nouvelle adresse bénéficiaire en paramètre.
   - Contrat : votre contrat Gauge spécifique (obtenu à l'étape 2)
   - Méthode : `switchRewardsBeneficiary(address newBeneficiary)`

4. **Réclamez depuis le nouveau bénéficiaire**
   Après le changement de bénéficiaire, toutes les réclamations futures doivent être exécutées avec le portefeuille du nouveau bénéficiaire.

:::caution[Bonne pratique]
Il est recommandé de réclamer toutes les récompenses disponibles avec le bénéficiaire actuel avant de passer à un nouveau. Si vous changez de bénéficiaire alors que des récompenses n'ont pas été réclamées, ces récompenses restent associées à l'ancienne adresse bénéficiaire et doivent être réclamées séparément.
:::

## Voter sur votre gauge de validateur

Le vote est indispensable pour recevoir des émissions de MEZO : un gauge de validateur qui ne reçoit aucun vote au cours d'une époque ne reçoit aucune récompense pour cette époque. Les validateurs peuvent voter sur leur propre gauge pour orienter les émissions de MEZO. Les votes sur les gauges de validateur sont **indépendants** des autres votes sur les gauges Mezo Earn. Par exemple, si vous avez déjà voté avec 100 % de votre pouvoir de vote sur un gauge de pool, vous pouvez tout de même voter avec 100 % de votre pouvoir de vote sur votre gauge de validateur (ou sur le gauge d'un autre validateur).

veBTC est l'actif principal utilisé pour voter. veMEZO peut servir à booster votre pouvoir de vote. Une fois exprimé, un vote est automatiquement reconduit aux époques suivantes, sauf s'il est explicitement réinitialisé.

:::note[Faire un poke sur votre position]
Vous devrez peut-être faire un poke sur votre position avant de voter pour vous assurer qu'elle est à jour. Faire un poke sur un vote existant est également utile si votre pouvoir de vote veBTC a augmenté (par exemple à la suite d'un complément), car cela met à jour votre poids de vote pour refléter le nouveau pouvoir. Consultez la [documentation sur le poke](/docs/fr/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) pour plus de détails.
:::

### Comment voter

1. **Identifiez votre gauge de validateur**
   Appelez la fonction `validatorToGauge` du [contrat ValidatorsVoter (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) en passant l'adresse de votre validateur en paramètre.

2. **Exprimez votre vote**
   Appelez la fonction `vote` du [contrat ValidatorsVoter (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). Le paramètre `tokenId` correspond à l'ID de votre NFT veBTC. Si vous votez uniquement sur votre propre gauge de validateur, vous pouvez définir le poids sur `100` (soit 100 % de votre pouvoir de vote).

### Proposer des incentives sur votre gauge

Les validateurs peuvent proposer des incentives (incitations) sur leur gauge de boost veBTC via des plateformes comme [Matchbox](https://matchbox.markets/) afin d'attirer des votes veMEZO qui boostent leur pouvoir de vote veBTC.
Ce pouvoir veBTC boosté peut ensuite servir à orienter davantage de votes vers le gauge de validateur, ce qui augmente les émissions de MEZO.

Mezo Earn comprend également un mécanisme d'incentives distinct propre aux gauges de validateur, mais ce flux spécifique n'est actuellement pas disponible sur Matchbox.

## Réclamer les récompenses

Pour réclamer vos récompenses en MEZO, suivez ces étapes :

1. **Connectez le portefeuille de votre adresse d'opérateur**
   Utilisez le portefeuille associé à l'adresse d'opérateur de votre validateur.

2. **Déterminez l'adresse de votre gauge**
   Appelez `ValidatorsVoter.validatorToGauge()` en passant votre adresse d'opérateur en paramètre.
   - Contrat : [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Méthode : `validatorToGauge(address validator)`

3. **Réclamez les récompenses**
   Appelez `ValidatorsVoter.claimRewards()` en passant l'adresse de votre gauge en paramètre.
   - Contrat : [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Méthode : `claimRewards(address gauge)`

## Adresses des contrats

- **ValidatorsVoter** : [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **Contrat PoA** : [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Ressources supplémentaires

- [Aperçu de Mezo Earn](/docs/fr/docs/users/mezo-earn/overview/)
- [Blog Mezo](https://mezo.org/blog/tag/features/)
