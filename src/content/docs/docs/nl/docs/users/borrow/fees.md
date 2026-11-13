---
title: Kosten van MUSD
description: >-
  Bekijk alle kostenstructuren en kosten die komen kijken bij het gebruik van
  MUSD op Mezo.
topic: users
---

## Overzicht van de kosten

| Kosten | Bedrag | Wanneer in rekening gebracht |
| --- | --- | --- |
| **Uitgiftekosten** | 0,1% van de geleende MUSD | Bij het openen of verhogen van een lening |
| **Rente** | 1–5% APR (vastgelegd bij opening) | Wordt opgebouwd over de openstaande schuld |
| **Inwisselingskosten** | 0,75% | Bij het omwisselen van MUSD voor BTC-onderpand |
| **Herfinancieringskosten** | 0,02% van de schuld | Bij het herfinancieren van een lening tegen een nieuw tarief |
| **Gasstorting** | 200 MUSD (vast bedrag) | Bij het openen van een lening (terugbetaald bij sluiting) |

## Verdeling van de kosten

:::note
De kosten worden verdeeld over twee bestemmingen: **(1)** het aflossen van de bootstraplening van het protocol en **(2)** de MUSD Savings Vault. De initiële verdeling is 50/50 en kan via governance worden aangepast met de MUSD-splitter. Minimaal 50% van de kosten moet naar de aflossing van de lening gaan totdat de bootstraplening volledig is afgelost. Na de aflossing gaan alle kosten naar de Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Rente (1–5% APR)

De rente op [MUSD](https://mezo.org/feature/musd)-leningen staat vast voor de hele looptijd van de lening. Wordt het krediet verhoogd, dan wordt het nieuwe krediet toegevoegd tegen het op dat moment geldende rentetarief.

Bij de lancering financiert de rente de stability pool van de MUSD-treasury, die liquidaties en oninbare schulden dekt.

## Inwisselingskosten (0,75%)

Kosten van 0,75% die worden ingehouden op de BTC die een inwisselaar ontvangt wanneer die bij een [inwisseling](/docs/nl/docs/users/borrow/liquidation-mechanics#inwisselingen-%EF%B8%8F) MUSD omwisselt voor onderpand. Deze kosten worden betaald door de inwisselaar, niet door de lener tegen wiens lening wordt ingewisseld.

Bij de lancering financieren de inwisselingskosten de stability pool van de MUSD-treasury, die liquidaties en oninbare schulden dekt.

## Uitgiftekosten (0,1%)

De uitgiftekosten worden betaald wanneer een MUSD-lening wordt geopend of wanneer een leninghouder extra MUSD leent. De kosten bedragen 0,1% van het geleende bedrag en worden in MUSD betaald. Voor een lening van \$10.000 MUSD betaal je \$10 aan uitgiftekosten in MUSD. Verhoog je je lening, dan betaal je uitgiftekosten over de nieuw geleende MUSD.

## Herfinancieringskosten (0,02% van de schuld)

Herfinancieringskosten worden in rekening gebracht wanneer een houder van een MUSD-lening vraagt om het rentetarief van de lening bij te werken. Een lener kan zijn lening willen herfinancieren als het rentetarief voor nieuwe leningen gunstiger is dan het vaste rentetarief op zijn huidige lening. Door te herfinancieren wordt het tarief van de lening bijgewerkt naar het nieuwe tarief. Voor elk herfinancieringsverzoek betaal je herfinancieringskosten van 0,02% van de schuld, in MUSD.

## Gasstorting (`200 MUSD` vast bedrag)

Een storting van 200 MUSD zorgt ervoor dat liquidaties haalbaar blijven. Je krijgt deze terug wanneer de lening wordt gesloten. De gasstorting wordt als extra schuld in de lening gemint en in escrow gehouden totdat de lening wordt gesloten. Deze schuld telt mee bij de berekening van de collateralisatieratio.

## Overige gas- en transactiekosten

Gebruikers die met het MUSD-systeem werken, betalen transactiekosten voor elke transactie die naar het Mezo-netwerk wordt verzonden. Dat geldt onder meer voor minten, inwisselen, staken en claimen.

## Risico's die je moet kennen

:::caution
Het lenen van MUSD brengt risico's met zich mee. Als je deze risico's begrijpt, kun je je positie beter beschermen.

**Inwisselingsrisico**: om de koppeling van MUSD te behouden, kan het protocol MUSD inwisselen tegen onderpand, te beginnen bij de leningen met de **laagste onderpandratio** (die nog wel boven de liquidatiedrempel van 110% liggen). Wordt er tegen jouw lening ingewisseld, dan verlies je je blootstelling aan een stijgende BTC-koers en kan dat fiscale gevolgen hebben. Houd je onderpandratio hoger dan die van andere leners om dit risico te verkleinen.

**Liquidatierisico**: als de onderpandratio van je lening **onder 110%** zakt, kan je positie worden geliquideerd. Je verliest dan je onderpand en houdt de geleende MUSD. Controleer je lening regelmatig en voeg zo nodig onderpand toe om dit risico te verkleinen. Zie [Liquidaties en inwisselingen van MUSD](/docs/nl/docs/users/borrow/liquidation-mechanics) voor alle details.
:::
