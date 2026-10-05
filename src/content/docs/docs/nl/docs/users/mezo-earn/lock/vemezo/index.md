---
title: Overzicht van veMEZO
description: MEZO vergrendelen om je stemkracht te boosten en rebases te verdienen
topic: users
---

veMEZO is de getokeniseerde weergave (NFT) van MEZO die op het Mezo-netwerk is vergrendeld. Door MEZO te vergrendelen kun je de stemkracht van je veBTC tot 5x boosten, wat je opbrengsten versterkt, en verdien je via MEZO-emissies rebases die verwatering tegengaan.

## Wat is veMEZO?

Als je MEZO vergrendelt op Mezo, ontvang je een veMEZO-NFT die je vergrendelde positie vertegenwoordigt. Deze NFT geeft je:

- Een boostvermenigvuldiger op de stemkracht van je veBTC (tot 5x)
- Rebasebeloningen uit de wekelijkse MEZO-emissies om verwatering te compenseren
- Deelname aan de matchingmarkt om incentives van veBTC-houders te verdienen
- Stemmen op [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges), waarmee je MEZO-emissies naar MUSD-pools op Curve, Uniswap en Aerodrome stuurt

:::note[Belangrijk]
veMEZO stemt niet zelfstandig op **staking-gauges**: daar vermenigvuldigt het alleen de stemkracht van veBTC-posities. Op veBTC-boostgauges en op [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges) stemt het wel zelfstandig.
:::

---

## Zo werkt het gewicht van veMEZO

Je veMEZO-gewicht hangt af van twee factoren: de hoeveelheid vergrendelde MEZO (meer MEZO = meer gewicht) en je vergrendelingsduur (langere vergrendelingen = een hoger, langer aanhoudend gewicht).

Je gewicht neemt in de loop van de tijd lineair af. Wie 1.000 MEZO voor 4 jaar vergrendelt, begint met een veMEZO-gewicht van 1.000. Dat neemt na 2 jaar af tot 500 en bereikt 0 op de vervaldatum. Je kunt je vergrendeling op elk moment verlengen om je volledige gewicht te behouden.

Je kunt je veMEZO ook automatisch maximaal vergrendelen (auto-max lock). Zo behoud je elke epoch het maximale stemgewicht van 4 jaar, zonder je tokens steeds opnieuw te hoeven vergrendelen.

### Vergrendelingsparameters

| Parameter | Waarde |
|---|---|
| Minimale vergrendeling | 1 week |
| Maximale vergrendeling | 4 jaar (1.456 dagen) |
| Afname van de vergrendeling | Lineair: het gewicht neemt continu af tot het nul bereikt |

---

## Wat je verdient

### Rebasebeloningen (alle veMEZO-houders)

veMEZO-houders ontvangen een deel van de wekelijkse MEZO-emissies als rebases. Dit beschermt tegen verwatering door nieuwe emissies. Het rebase-aandeel is dynamisch: hoger wanneer er minder tokens vergrendeld zijn, lager naarmate er meer MEZO wordt vergrendeld.

### Incentives (via de matchingmarkt)

veMEZO-houders kunnen op veBTC-gauges stemmen om incentives te verdienen. Wanneer een veBTC-houder zijn positie wil boosten maar niet genoeg veMEZO heeft, kan hij incentives op zijn veBTC-gauge plaatsen. Door op die gauge te stemmen verdien jij die incentives in ruil voor het leveren van boost.

Zie [Boostmechanisme](/docs/nl/docs/users/mezo-earn/lock/vemezo/boost-mechanism) voor meer informatie over hoe de matchingmarkt werkt.

---

## veMEZO vs. veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Onderliggend activum | BTC | MEZO |
| Maximale vergrendeling | 28 dagen | 4 jaar |
| Stemkracht | Basisstemkracht | Vermenigvuldigt de kracht van veBTC (tot 5x) |
| Verdient vergoedingen | Ja (bridge, swap, MUSD) | Nee |
| Verdient rebases | Nee | Ja |
| Verdient incentives | Ja (van gauges waarop je stemt) | Ja (van veBTC-boostgauges) |
