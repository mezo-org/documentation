---
title: MUSD Savings Vault
description: Verdien door vergoedingen gedekt rendement op MUSD via de Mezo Savings Vault
topic: users
---

De MUSD Savings Vault is het native spaarproduct van Mezo voor MUSD-houders.

**Hoe het werkt:**

- Stort MUSD en ontvang sMUSD, een ontvangsttoken dat jouw aandeel in de kluis vertegenwoordigt
- Het rendement wordt opgebouwd in de wisselkoers van sMUSD: na verloop van tijd kun je 1 sMUSD inwisselen voor meer dan 1 MUSD. Wanneer je opneemt, ontvang je meer MUSD dan je hebt gestort.
- Het rendement komt uit twee bronnen binnen het MUSD-systeem: protocolvergoedingen van MUSD (rente op leningen, afsluitkosten, herfinancieringskosten) en BTC-vergoedingen uit MUSD-leenbewerkingen, die naar MUSD worden omgezet en wekelijks worden uitgekeerd
- Beide stromen worden wekelijks door het protocol aan de kluis uitgekeerd
- De APR is variabel en hangt af van de protocolactiviteit; bekijk het actuele tarief op [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Verdeling van de vergoedingen

De protocolvergoedingen van MUSD worden 50/50 verdeeld over twee bestemmingen:

- **MUSD Savings Vault**: uitgekeerd aan sMUSD-houders, of voor gestakete sMUSD omgeleid naar veBTC-stemmers
- **Aflossing van de [bootstraplening van het protocol](/docs/nl/docs/users/borrow/architecture-and-terminology/#bootstraplening-van-het-protocol)**

Deze verdeling kan via governance worden aangepast met de MUSD-splitter, waarbij minimaal 50% naar de aflossing van de lening gaat totdat de bootstraplening volledig is afgelost. Na de aflossing gaan alle vergoedingen naar de Savings Vault. Zie [Kosten van MUSD](/docs/nl/docs/users/borrow/fees/) voor alle details.

---

## sMUSD begrijpen

sMUSD is je ontvangsttoken voor de MUSD Savings Vault van Mezo. Een paar dingen om te weten:

- **Het rendement zit in de wisselkoers, niet in je saldo.** Na het storten blijft je sMUSD-saldo gelijk, maar elke sMUSD kan na verloop van tijd voor meer MUSD worden ingewisseld naarmate de kluis vergoedingen opbouwt. Je ziet het verschil wanneer je opneemt.
- **Het rendement wordt wekelijks uitgekeerd.** Het protocol keert de opgebouwde vergoedingen elke week aan de kluis uit. De wisselkoers sMUSD/MUSD wordt bij elke uitkering bijgewerkt.
- **sMUSD is overdraagbaar.** Je kunt sMUSD versturen of aanhouden zoals elk ander token. Wie het bij de opname heeft, wisselt het opgebouwde rendement in.
- **Stake je sMUSD in de gauge, dan wordt je rendement omgeleid.** Gestakete sMUSD verdient MEZO-emissies in plaats van directe inkomsten uit vergoedingen. De inkomsten uit vergoedingen die naar jou zouden zijn gegaan, worden omgeleid naar veBTC-stemmers die op de MUSD Savings-gauge hebben gestemd. Als je unstaket, bouw je weer direct rendement op.

---

## Gegevens van de kluis

| Parameter | Waarde |
|-----------|-------|
| Stortingstoken | MUSD |
| Ontvangsttoken | sMUSD |
| Strateeg | Mezo |
| Opnamekosten | Geen |
| Timelock op opnames | 0 u |
| Huidige APR | Variabel; bekijk [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## sMUSD staken in de gauge

Je kunt je sMUSD-ontvangsttoken optioneel staken in de MUSD Savings-gauge om emissies van het MEZO-token te verdienen.

**De afweging:**

- **Niet-gestakete sMUSD:** je verdient rechtstreeks je evenredige deel van het kluisrendement en van de inkomsten uit MUSD-rente en -vergoedingen
- **Gestakete sMUSD:** jouw deel van de inkomsten uit rente en vergoedingen wordt omgeleid naar veBTC-stemmers op de gauge. In ruil daarvoor verdien je emissies op basis van het aantal stemmen dat de gauge krijgt

Dit werkt net zoals LP-staking in de liquiditeitspools op de native DEX van Mezo: stakers geven inkomsten uit vergoedingen op in ruil voor emissies, terwijl stemmers de omgeleide vergoedingen verdienen.

De MUSD Savings Rate gauge concurreert om stemmen met de gauges van LP-pools. Samen heten deze "staking-gauges": een stem die aan de savings rate-gauge is toegewezen, kan niet ook aan een LP-gauge worden toegewezen.

Nu de MEZO-emissies live zijn, verdien je met het staken van sMUSD in de gauge MEZO bovenop je basispositie. De MUSD Savings-gauge concurreert om veBTC-stemmen met de gauges van LP-pools: hoe meer stemmen naar de savings-gauge gaan, hoe meer MEZO-emissies naar stakers stromen. veBTC-stemmers die de gauge steunen, verdienen de MUSD-vergoedingen die stakers omleiden. De actuele gauge-APR voor stakers en stemmers zie je op de pagina Vote op [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Risico's

### Strategierisico
Elke kluis zet activa op een andere manier in. Zorg dat je de onderliggende strategie begrijpt voordat je stort: sommige strategieën brengen meer risico met zich mee dan andere.

### Smart-contractrisico
Kluizen werken met meerdere smart contracts. Hoewel de kluizen van Mezo zijn geaudit, brengen alle smart contracts een inherent risico met zich mee. Stort alleen bedragen waarbij je je comfortabel voelt.
