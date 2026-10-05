---
title: Validatorgauge
description: >-
  Handleiding voor validators over het beheren van begunstigden van beloningen,
  stemmen op validatorgauges en het claimen van MEZO-beloningen.
topic: developers
---

Validators kunnen elke week MEZO-emissies verdienen, maar alleen als hun validatorgauge in elke epoch stemmen ontvangt. Zonder stemmen op hun gauge ontvangt een validator geen emissies. In deze handleiding lees je hoe je begunstigden van beloningen beheert, op je validatorgauge stemt en beloningen claimt.

## Overzicht

Elke validator heeft een eigen gauge in het [ValidatorsVoter-contract](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). Beloningen worden geclaimd via het ValidatorsVoter-contract door het gaugeadres van de validator op te geven.

Elke gauge heeft één begunstigd adres dat bevoegd is om beloningen te claimen. Standaard is de begunstigde het operatoradres van de validator dat is geregistreerd in het [Proof of Authority (PoA)-contract](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Vrijgaveschema van beloningen]
Toegewezen epochbeloningen zijn niet direct claimbaar: ze worden geleidelijk vrijgegeven gedurende de epoch. Worden er bijvoorbeeld aan het begin van epoch N beloningen aan een gauge toegewezen, dan is 100% van de beloningen van epoch N beschikbaar aan het einde van die epoch.
:::

## De begunstigde van beloningen wijzigen

Validators kunnen een ander adres aanwijzen om MEZO-beloningen te ontvangen. Dat is handig om operationele functies en treasuryfuncties van elkaar te scheiden.

Zo wijzig je de begunstigde van beloningen:

1. **Verbind de wallet van je operatoradres**
   Gebruik de wallet die bij het operatoradres van je validator hoort.

2. **Bepaal je gaugeadres**
   Roep `ValidatorsVoter.validatorToGauge()` aan met je operatoradres als parameter.

3. **Wissel van begunstigde**
   Roep `Gauge.switchRewardsBeneficiary()` aan met het adres van de nieuwe begunstigde als parameter.
   - Contract: jouw specifieke Gauge-contract (verkregen in stap 2)
   - Methode: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Claim vanaf de nieuwe begunstigde**
   Nadat je de begunstigde hebt gewijzigd, moeten alle toekomstige claims worden uitgevoerd met de wallet van de nieuwe begunstigde.

:::caution[Best practice]
Het is raadzaam om alle beschikbare beloningen met de huidige begunstigde te claimen voordat je overstapt op een nieuwe. Wissel je van begunstigde terwijl er nog ongeclaimde beloningen zijn, dan blijven die beloningen gekoppeld aan het oude begunstigde adres en moeten ze apart worden geclaimd.
:::

## Stemmen op je validatorgauge

Stemmen is essentieel om MEZO-emissies te verdienen: een validatorgauge die in een epoch geen stemmen ontvangt, krijgt voor die epoch geen beloningen. Validators kunnen op hun eigen gauge stemmen om MEZO-emissies te sturen. Stemmen op validatorgauges staan **los** van stemmen op andere Mezo Earn-gauges. Heb je bijvoorbeeld al met 100% van je stemkracht op een poolgauge gestemd, dan kun je nog steeds met 100% van je stemkracht op je validatorgauge (of de gauge van een andere validator) stemmen.

veBTC is het kernactivum waarmee je stemt. Met veMEZO kun je je stemkracht boosten. Een uitgebrachte stem wordt automatisch doorgezet naar volgende epochs, tenzij je die expliciet reset.

:::note[Je positie poken]
Mogelijk moet je je positie poken voordat je stemt, zodat die up-to-date is. Een bestaande stem poken is ook nuttig als je veBTC-stemkracht is toegenomen (bijvoorbeeld door een aanvulling), omdat je stemgewicht dan wordt bijgewerkt naar de nieuwe stemkracht. Zie de [documentatie over poke](/docs/nl/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) voor details.
:::

### Zo stem je

1. **Zoek je validatorgauge op**
   Roep de functie `validatorToGauge` aan op het [ValidatorsVoter-contract (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) met je validatoradres als parameter.

2. **Breng je stem uit**
   Roep de functie `vote` aan op het [ValidatorsVoter-contract (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). De parameter `tokenId` is de ID van je veBTC-NFT. Stem je alleen op je eigen validatorgauge, dan kun je het gewicht instellen op `100` (dat staat voor 100% van je stemkracht).

### Incentives voor je gauge

Validators kunnen incentives aanbieden op hun veBTC-boostgauge via platforms zoals [Matchbox](https://matchbox.markets/) om veMEZO-stemmen aan te trekken die hun veBTC-stemkracht boosten.
Die gebooste veBTC-stemkracht kan vervolgens worden gebruikt om meer stemmen naar de validatorgauge te sturen, waardoor de MEZO-emissies toenemen.

Mezo Earn heeft daarnaast een apart incentivemechanisme voor validatorgauges, maar die specifieke flow is momenteel niet beschikbaar op Matchbox.

## Beloningen claimen

Volg deze stappen om je MEZO-beloningen te claimen:

1. **Verbind de wallet van je operatoradres**
   Gebruik de wallet die bij het operatoradres van je validator hoort.

2. **Bepaal je gaugeadres**
   Roep `ValidatorsVoter.validatorToGauge()` aan met je operatoradres als parameter.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Methode: `validatorToGauge(address validator)`

3. **Claim beloningen**
   Roep `ValidatorsVoter.claimRewards()` aan met je gaugeadres als parameter.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Methode: `claimRewards(address gauge)`

## Contractadressen

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **PoA-contract**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Aanvullende bronnen

- [Overzicht van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview/)
- [Mezo-blog](https://mezo.org/blog/tag/features/)
