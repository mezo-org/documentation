---
title: USDC Lending Vault
description: >-
  Verschaf mUSDC aan de door BTC gedekte uitleenmarkt van Morpho op Mezo en
  verdien rente van leners of MEZO-emissies
topic: users
---

De USDC Lending Vault geeft je directe blootstelling aan een transparante markt voor door BTC gedekt krediet. Stort mUSDC, en je kapitaal wordt verstrekt aan leners die BTC als onderpand inbrengen. De rente die leners betalen, is de bron van het rendement voor storters.

Onder de motorkap gaan stortingen naar een gecureerde Morpho Vault V2 (de Morpho BTC-mUSDC Vault), die namens jou liquiditeit verschaft aan de Morpho Blue-markt BTC / mUSDC. Je werkt niet rechtstreeks met Morpho: je houdt een aandelentoken dat in waarde stijgt naarmate er rente wordt opgebouwd.

Bekijk de kluis op [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Zie [mUSDC lenen](/docs/nl/docs/users/borrow/how-to-borrow-musdc) als je mUSDC wilt lenen tegen BTC.

**Hoe het werkt:**

- Stort mUSDC en ontvang `morphoBTC-mUSDC`, een aandelentoken dat je aanspraak op de kluis vertegenwoordigt
- Het rendement wordt opgebouwd in de aandelenprijs: hetzelfde aantal aandelen kan na verloop van tijd voor meer mUSDC worden ingewisseld
- Leningen zijn overgecollateraliseerd met BTC (liquidatie-LTV van 86%). Gestorte activa worden niet geherhypothekeerd
- Er is geen minimale storting en er zijn geen protocolkosten om in of uit te stappen
- De APR is variabel en hangt af van de vraag van leners; bekijk het actuele tarief op [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Je aandelen begrijpen

`morphoBTC-mUSDC` is het aandelentoken van je kluis. Een paar dingen om te weten:

- **Het rendement zit in de wisselkoers, niet in je saldo.** Na het storten blijft je aantal aandelen gelijk, maar elk aandeel kan voor meer mUSDC worden ingewisseld naarmate leners rente betalen. Je ziet het verschil wanneer je opneemt.
- **Aandelen zijn niet 1:1 gelijk aan mUSDC.** Heeft de kluis al rente verdiend, dan krijg je voor een storting van 100 mUSDC minder dan 100 aandelen, en is elk aandeel meer waard dan 1 mUSDC.
- **Stake je voor emissies, dan wordt je rente omgeleid.** Gestakete aandelen verdienen MEZO in plaats van rente van leners. De rente die naar jou zou zijn gegaan, wordt omgeleid naar veBTC-stemmers op de gauge van de Lending Vault.

---

## Gegevens van de kluis

| Parameter | Waarde |
|-----------|-------|
| Stortingstoken | mUSDC |
| Aandelentoken | `morphoBTC-mUSDC` |
| Onderliggende markt | Morpho Blue BTC / mUSDC |
| Liquidatie-LTV | 86% |
| Curator | Mezo-governance |
| Opnamekosten | Geen |
| Huidige APR | Variabel; raadpleeg [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Twee manieren om te verdienen

Net als bij andere Earn-producten op Mezo kies je zelf hoe elk aandeel wordt uitbetaald:

- **Aanhouden voor rente**: houd `morphoBTC-mUSDC` in je wallet. Je aandelen stijgen in waarde naarmate leners rente betalen.
- **Staken voor MEZO-emissies**: stake je aandelen in de gauge van de Lending Vault. Je verdient MEZO; de rente die deze aandelen zouden hebben opgeleverd, gaat in plaats daarvan naar stemmers.

Eén aandeel kan niet beide tegelijk verdienen, maar je kunt je bezit verdelen: een deel staken voor emissies en de rest aanhouden voor rente. Storten en staken zijn aparte stappen in de app: stort eerst om aandelen te ontvangen en stake ze daarna eventueel.

**Een gestakete positie afbouwen:** unstake, wissel terug naar kluisaandelen en neem vervolgens op naar mUSDC. Door te unstaken verlies je geen claimbare MEZO.

---

## Opnames

Bij een opname krijg je je mUSDC terug (plus opgebouwde rente als je aanhield). Omdat je mUSDC aan leners is uitgeleend, kan de kluis alleen uitbetalen wat op dat moment beschikbaar is, dus wat niet is uitgeleend.

- De app toont een bedrag **Available to withdraw** op basis van de actuele liquiditeit van de kluis
- Bij een hoge benutting kan een grote opname mogelijk maar gedeeltelijk worden uitgevoerd of tijdelijk worden geblokkeerd, totdat leners aflossen of er nieuw aanbod bijkomt
- Gestakete aandelen moet je eerst unstaken voordat je ze kunt opnemen

Dit is normaal gedrag voor een uitleenmarkt en geen storing van de kluis.

---

## Risico's

### Smart-contractrisico

Tegoeden gaan via de adapter van de Lending Vault, Morpho Vault V2 en de Morpho Blue-markt. Een bug of exploit in een van deze onderdelen kan leiden tot verlies van tegoeden.

### Illiquiditeitsrisico

Als de benutting door leners hoog is, kun je mogelijk niet al je mUSDC op elk gewenst moment opnemen. Verschaf alleen tegoeden waarvan je het je kunt veroorloven dat ze tijdelijk vastzitten.

### Risico van de uitleenmarkt

Leners worden geliquideerd bij een LTV van 86%. Bij een zware, snelle daling van BTC kan er oninbare schuld ontstaan. Die wordt via een daling van de aandelenprijs over de verschaffers verdeeld; er is geen verzekeringsfonds. Je positie luidt bovendien in mUSDC, dus een depeg heeft gevolgen voor je bezit.

### Curatorrisico

Mezo-governance bepaalt aan welke markten de kluis liquiditeit verschaft en wat de aanbodlimieten zijn. Wijzigingen van de curator op Morpho Vault V2 zijn onderworpen aan een timelock.

---

## Contracten

| Contract | Adres |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Adapter van de Lending Vault | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Kluisgauge | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Zie de [documentatie van Morpho](https://docs.morpho.org/) voor meer informatie over de Morpho Blue-markt.
