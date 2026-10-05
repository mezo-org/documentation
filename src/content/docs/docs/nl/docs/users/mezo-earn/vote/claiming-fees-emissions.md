---
title: Veelgestelde vragen over stemmen
description: Veelgestelde vragen over stemmen op Mezo
topic: users
---

## Algemeen

**Moet ik elke week stemmen?**

Nee. Je stemverdeling blijft over epochs heen behouden totdat je haar wijzigt of reset, en ze blijft elke epoch haar deel van de vergoedingen en incentives opleveren. Opnieuw stemmen doe je om de verdeling te wijzigen, niet om haar te behouden.

**Kan ik mijn stemmen tijdens een epoch wijzigen?**

Elke vergrendeling kan één keer per epoch stemmen. Heeft de vergrendeling deze epoch nog niet gestemd, dan kun je op elk moment binnen de stemperiode een nieuwe verdeling indienen, die je bestaande verdeling vervangt. Zodra een stem is bevestigd, ligt de verdeling van die vergrendeling vast tot de volgende epochwisseling (donderdag 00:00 UTC).

**Kan ik mijn stemmen over meerdere gauges verdelen?**

Zeker. Je kunt je stemkracht verdelen zoals je wilt: 50% naar BTC/MUSD, 30% naar MUSD Savings Rate en 20% naar een andere pool.

**Wat is het verschil tussen stemmen met veBTC en met veMEZO?**

veBTC-houders stemmen op staking-gauges. Zij verdienen handelsvergoedingen, incentives en passieve bridgevergoedingen.

veMEZO-houders stemmen op veBTC-boostgauges. Zij verdienen incentives die zijn geplaatst door veBTC-houders die een boost zoeken, plus rebase-uitkeringen.

---

## Boost en veMEZO

**Wat is een boost?**

Een boost is een vermenigvuldigingsfactor (tussen 1x en 5x) die de stemkracht van je veBTC versterkt. Die boost komt van veMEZO-stemmen die naar de boostgauge van je veBTC-positie worden gestuurd.

**Heb ik veMEZO nodig om als veBTC-houder te verdienen?**

Nee. veBTC zonder boost verdient nog steeds handelsvergoedingen, incentives en passieve bridgevergoedingen, alleen tegen een vermenigvuldigingsfactor van 1x. veMEZO verhoogt je effectieve stemkracht (tot 5x), maar is niet verplicht.

**Hoe krijg ik een boost voor mijn veBTC-positie?**

Op twee manieren:
1. **Jezelf boosten:** vergrendel MEZO als veMEZO en stuur die naar je eigen positie
2. **Boost aantrekken:** plaats incentives op je boostgauge om veMEZO-stemmen van anderen aan te trekken

**Wat verdienen veMEZO-houders?**

veMEZO-houders verdienen:
- Incentives die zijn geplaatst op de boostgauges waarop ze stemmen
- Rebase-uitkeringen die beschermen tegen verwatering

Ze verdienen **geen** handelsvergoedingen, MUSD-opbrengsten of bridgevergoedingen; die gaan naar veBTC-houders.

**Hoe wordt de maximale boost berekend?**

Je bereikt een boost van 5x wanneer jouw aandeel in de totale veMEZO gelijk is aan of groter is dan jouw aandeel in de totale veBTC. Grotere BTC-posities hebben naar verhouding meer veMEZO nodig om het maximum te halen.

**Wat gebeurt er als ik veMEZO heb maar geen veBTC?**

Je kunt dan nog steeds rendement verdienen door te stemmen op de boostgauges van andere gebruikers. Je verdient de incentives die zij hebben geplaatst, naar verhouding van jouw aandeel in de stemmen op die gauge.

---

## Incentives

**Hoe werken incentives?**

Protocollen of gebruikers storten incentives op specifieke gauges om stemmen aan te trekken. Aan het einde van de epoch worden de incentives naar verhouding van het stemgewicht verdeeld over alle stemmers op die gauge. Incentives komen bovenop de handelsvergoedingen.

**Kan ik incentives plaatsen op mijn eigen boostgauge?**

Ja. Zo trek je veMEZO-stemmen naar je veBTC-positie als je een boost wilt maar zelf geen MEZO hebt.

**Welke tokens kunnen als incentives worden gebruikt?**

Elk ERC-20-token kan als incentive worden gestort.

---

## Stemkracht

**Neemt mijn stemkracht in de loop van de tijd af?**

Ja. Stemkracht neemt lineair af naarmate je vergrendeling dichter bij de vervaldatum komt. Heb je voor 28 dagen vergrendeld, dan heb je op dag 14 ongeveer 50% van je oorspronkelijke stemkracht. Door je vergrendeling te verlengen, herstel je het volledige gewicht.

**Wat als ik meerdere veBTC-posities heb?**

Je kunt met elke positie afzonderlijk stemmen. Elke NFT heeft zijn eigen stemkracht en kan aan andere of dezelfde gauges worden toegewezen; dat bepaal je zelf.

**Wat gebeurt er als ik mijn vergrendeling niet verleng?**

Je stemkracht blijft afnemen totdat die bij het verlopen nul bereikt. Vanaf dat moment kun je niet meer stemmen of beloningen verdienen. Je moet je vergrendeling vóór het verlopen verlengen of een nieuwe aanmaken.

**Hoe lang kan ik veMEZO vergrendelen?**

De maximale vergrendeling voor veMEZO is 4 jaar (tegenover 28 dagen voor veBTC). De langere vergrendeling weerspiegelt de rol van MEZO als coördinatieactivum van de chain.

---

## Poke

**Wat is een poke?**

Een poke is een transactie die de stemkracht van je positie bijwerkt, zodat die de huidige toestand weerspiegelt. Zonder poke worden wijzigingen in je boost niet van kracht.

**Wanneer moet ik een poke uitvoeren?**

Voer een poke uit nadat je:
- Nieuwe veMEZO-stemmen op je boostgauge hebt ontvangen
- Je eigen veMEZO naar je positie hebt gestuurd
- veMEZO-rebase-uitkeringen hebt geclaimd
- Je vergrendelingsduur hebt verlengd
- Meer BTC/MEZO aan je vergrendeling hebt toegevoegd

**Kan iedereen een poke uitvoeren op mijn positie?**

Ja. Poke is permissionless. Anderen kunnen een poke uitvoeren op je positie als je stemkracht flink is afgenomen.

---

## Beloningen

**Wanneer kan ik mijn beloningen claimen?**

Vergoedingen en incentives kunnen worden geclaimd zodra de epoch is afgelopen. Tijdens de epoch zie je je geschatte beloningen oplopen, maar claimen kan pas als de epoch is voltooid.

**Verdien ik beloningen op pools waarop ik niet stem?**

Nee. Je verdient alleen vergoedingen en incentives van de specifieke gauges waaraan je stemkracht hebt toegewezen. Heb je 100% op BTC/MUSD gestemd, dan verdien je niets van de MUSD/USDC-pool.

Uitzondering: passieve bridgevergoedingen worden verdeeld over alle veBTC-houders naar verhouding van hun geboost gewicht, ongeacht of ze stemmen.

**Wat zijn rebases en hoe claim ik ze?**

Rebases zijn uitkeringen tegen verwatering voor veMEZO-houders. Een deel van de wekelijkse emissies gaat naar rebases wanneer de vergrendelingsratio laag is. Je claimt ze apart; ze worden toegevoegd aan het gewicht van je veMEZO-positie.

---

## Gauges

**Hoe worden gaugegewichten berekend?**

Gaugegewicht = totale stemkracht toegewezen aan die gauge / totale stemkracht toegewezen aan alle gauges samen. Krijgt de BTC/MUSD-gauge 1.000 stemkracht en krijgen alle gauges samen 10.000, dan ontvangt BTC/MUSD in die epoch 10% van de emissies.

**Kan een gauge nul emissies ontvangen?**

Ja. Als niemand op een gauge stemt, ontvangt die in die epoch nul emissies. Daarom bestaan er incentivemarkten: protocollen hebben stemmen nodig om emissies aan te trekken.

**Wat zijn boostgauges?**

Elke veBTC-NFT heeft zijn eigen boostgauge. veMEZO-houders stemmen op deze gauges om die specifieke veBTC-positie een boost te geven. De veBTC-houder kan incentives op zijn boostgauge plaatsen om stemmen aan te trekken.

**Waar zie ik de huidige gaugegewichten en incentives?**

Ga naar de [stempagina](https://mezo.org/vote) voor realtime gaugegewichten, incentivebedragen, verwachte APY's en historische prestaties.
