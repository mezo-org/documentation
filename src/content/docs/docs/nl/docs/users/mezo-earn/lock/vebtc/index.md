---
title: Overzicht van veBTC
description: BTC vergrendelen om te verdienen met veBTC
topic: users
---

veBTC is de getokeniseerde weergave (NFT) van BTC die op het Mezo-netwerk is vergrendeld. Door BTC te vergrendelen krijg je governance-invloed en een aandeel in de protocolvergoedingen.

## Wat is veBTC?

Als je BTC vergrendelt op Mezo, ontvang je een veBTC-NFT die je vergrendelde positie vertegenwoordigt. Deze NFT geeft je:

- **Stemkracht** om emissies binnen het ecosysteem te sturen
- **Protocolvergoedingen** uit chainactiviteit en bridging
- **Governancerechten** om mee te bepalen hoe de economie van Mezo zich ontwikkelt

---

## Zo werkt stemkracht

Je veBTC-gewicht hangt af van twee factoren: de hoeveelheid vergrendelde BTC (meer BTC = meer stemkracht) en je vergrendelingsduur (langere vergrendelingen = een hoger, langer aanhoudend gewicht).

Je stemkracht neemt in de loop van de tijd lineair af. Wie 1 BTC voor 28 dagen vergrendelt, begint met 1 veBTC. Dat neemt na 14 dagen af tot 0,5 en bereikt 0 op de vervaldatum. Je kunt je vergrendeling op elk moment verlengen om je volledige stemkracht te behouden.

### Vergrendelingsparameters

| Parameter | Waarde |
|-----------|-------|
| Minimale vergrendeling | 1 dag |
| Maximale vergrendeling | 28 dagen |
| Afname van de vergrendeling | Lineair: het gewicht neemt continu af tot het nul bereikt |

---

## Wat je verdient

### Passieve inkomsten (alle veBTC-houders)

Alle veBTC-houders ontvangen automatisch een aandeel in de **chain- en bridgevergoedingen**, naar verhouding van hun stemgewicht. Dit is passief rendement dat je alleen al opbouwt door veBTC aan te houden; stemmen is niet nodig.

### Actieve inkomsten (stemmen vereist)

Door [op gauges te stemmen](/docs/nl/docs/users/mezo-earn/vote) verdien je extra beloningen op basis van je stemverdeling:

- **Swapvergoedingen** uit pools waarop je stemt (wanneer LP's in die gauges staken)
- **Rente- en vergoedingsinkomsten uit MUSD** als je op de MUSD Savings Rate gauge stemt
- **Incentives** die protocollen of gebruikers aanbieden om stemmen naar specifieke gauges te trekken

Hoe meer stemgewicht je aan een gauge toewijst, hoe groter je aandeel in de vergoedingen en incentives van die gauge.

:::note[Belangrijk]
Je stemverdeling blijft over epochs heen gelden en blijft opbrengen totdat je die wijzigt: je hoeft niet elke week opnieuw te stemmen. Zie [Epochs](#epochs) hieronder.
:::


---

## Epochs

Mezo Earn werkt in **cycli van 7 dagen, epochs genoemd**. Elke epoch begint op donderdag om 00:00 UTC.

### Waarom epochs belangrijk zijn

- **Stemmen blijven staan.** Je stemverdeling gaat mee naar volgende epochs totdat je die wijzigt of reset. Elke vergrendeling kan één keer per epoch stemmen, dus een bevestigde stemverdeling kan pas bij de volgende epochwissel worden gewijzigd.
- **Stemmen uitgebracht in epoch N** bepalen de verdeling van de emissies in epoch N+1
- **Vergoedingen gegenereerd in epoch N** worden verdeeld op basis van de stemmen uitgebracht in epoch N

### Vergrendelingsduur en epochgrenzen

De vergrendelingsduur wordt afgestemd op de epochgrenzen, niet op kalenderdagen. Wanneer je een vergrendeling aanmaakt, **wordt je vergrendelingstijd naar beneden afgerond op de dichtstbijzijnde volledige week**.

Dit betekent:

- Een vergrendeling van 28 dagen die midden in een epoch wordt aangemaakt, heeft een effectieve duur van ongeveer 21–28 dagen, afhankelijk van wanneer je vergrendelt
- Vergrendelingen verlopen altijd bij een epochwissel (donderdag 00:00 UTC)

**Voorbeeld:** Kies je midden in een epoch de maximale vergrendeling van 28 dagen, dan wordt je effectieve vergrendelingsduur verkort op basis van de resterende tijd in de week. Het resultaat is een vergrendeling van ongeveer 21–28 dagen, afhankelijk van wanneer je vergrendelt.

Door deze normalisatie verlopen alle vergrendelingen netjes op epochgrenzen en wordt de berekening van het stemgewicht in het hele systeem eenvoudiger.

| Epochparameter | Waarde |
|-----------------|-------|
| Duur | 7 dagen |
| Starttijd | Donderdag 00:00 UTC |
| Afstemming van vergrendelingen | Naar beneden afgerond op volledige weken |
