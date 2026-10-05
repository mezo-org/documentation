---
title: MUSD-liquidaties en -inwisselingen
description: Lees meer over liquidaties en inwisselingen.
topic: users
---

## Overzicht
Wanneer je leent met je Bitcoin als onderpand, maak je een leenpositie aan (ook wel een "Trove" genoemd). Twee belangrijke systeemgebeurtenissen kunnen invloed hebben op je lening:

- **Liquidatie**: het gedwongen sluiten van je lening. Dit gebeurt alleen als de gezondheid van je lening, gemeten aan de onderpandratio, onder een kritiek minimum van 110% zakt. Bij een liquidatie verlies je je onderpand.
- **Inwisseling**: iedereen die MUSD heeft, kan dat bij het protocol omwisselen voor BTC tegen \$1 per MUSD (min inwisselingskosten, momenteel 0,75%). Via arbitrage blijft de prijs van MUSD zo dicht bij \$1. Inwisselingen halen eerst BTC uit de Trove met de laagste onderpandratio (zolang die nog boven de liquidatiedrempel van 110% ligt). Een inwisseling kan je lening dus verkleinen, ook al loopt je Trove geen risico op liquidatie. Is het inwisselingsbedrag kleiner dan de schuld van die Trove, dan wordt het verwerkt als een gedeeltelijke inwisseling: er wordt dan maar een deel van de schuld kwijtgescholden. Is het groter, dan wordt de Trove volledig ingewisseld en gaat het resterende bedrag door naar de Trove met de op één na laagste ratio. In beide gevallen worden schuld en onderpand in gelijke dollarbedragen verwijderd, wat de collateralisatieratio van de betreffende Trove verhoogt. De lener verliest daarbij wel blootstelling aan BTC.

---

## Liquidaties ⚠️

### Wat is een liquidatie?
Een liquidatie is een veiligheidsmechanisme dat een lening automatisch sluit wanneer die te riskant wordt. Dit voorkomt dat het hele systeem instabiel wordt.

### Wanneer vindt een liquidatie plaats?

:::danger
Je lening loopt risico op liquidatie als de onderpandratio onder 110% zakt. Zie dit als de absoluut minimale veiligheidsbuffer die voor je lening vereist is.
:::

### Wat gebeurt er tijdens een liquidatie?
Het systeem kan een liquidatie op twee manieren afhandelen:

#### Via de Stability Pool (standaardmethode):
- Het systeem gebruikt stablecoins uit zijn veiligheidsreserve, de Stability Pool, om je schuld volledig af te betalen.
- De persoon of bot die de liquidatie in gang heeft gezet, ontvangt een kleine beloning (200 MUSD aan gaskosten en 0,5% van je onderpand).
- De rest van je onderpand (99,5%) wordt naar de Stability Pool overgemaakt om de storters daarvan terug te betalen.
- Je lening wordt gesloten en je verliest al je onderpand.

#### Herverdeling (terugvalmethode):
- Is de Stability Pool leeg, dan verdeelt het systeem je schuld en onderpand over alle andere actieve leners.
- Dit is een reservemethode die ervoor zorgt dat het systeem altijd in balans blijft.

### Voorbeeld van een liquidatie:
- Stel dat je lening een schuld van 10.000 MUSD heeft.
- De waarde van je BTC-onderpand daalt naar \$10.900.
- Je onderpandratio is nu 109%, wat onder het minimum van 110% ligt.
- Resultaat: je lening wordt geliquideerd. Je schuld van 10.000 MUSD wordt kwijtgescholden, maar je verliest je volledige BTC-onderpand ter waarde van \$10.900.

---

## Inwisselingen 🛡️

### Wat is een inwisseling?
Een inwisseling is een functie waarmee iedereen die een stablecoin heeft, die rechtstreeks bij het protocol kan omwisselen voor BTC met een gelijke dollarwaarde (min de inwisselingskosten). Dit proces helpt de stablecoin dicht bij de koppeling van \$1 te houden. Het is geen straf en betekent niet dat je lening onveilig is.

### Wanneer vindt een inwisseling plaats?
Inwisselingen kunnen op elk moment plaatsvinden. Wanneer een gebruiker zijn stablecoin wil inwisselen voor BTC, zoekt het systeem leningen waaruit het onderpand kan worden gehaald.

### Welke leningen worden gekozen voor inwisseling?
Het systeem begint altijd bij de lening met de laagste onderpandratio die nog boven de liquidatiedrempel van 110% ligt, ook als die ratio gezond is en ruim boven 110% ligt. Heeft jouw lening minder onderpand dan andere, dan is de kans groter dat die voor een inwisseling wordt gekozen.

### Wat gebeurt er tijdens een inwisseling?

#### Volledige inwisseling:
- Betaalt een inwisseling je volledige schuld af, dan wordt je lening gesloten.
- Een gelijkwaardige hoeveelheid van je BTC gaat naar de inwisselaar.
- Eventuele resterende BTC mag je houden. Dit heet je onderpandoverschot en wordt naar een speciaal bewaaraccount gestuurd, waar je het kunt opeisen.

#### Gedeeltelijke inwisseling (komt vaker voor):
- Een deel van je schuld wordt door de inwisselaar afbetaald.
- Een gelijkwaardige hoeveelheid van je BTC-onderpand gaat naar de inwisselaar.
- Resultaat: je lening blijft open, maar is nu kleiner en gezonder, met een hogere onderpandratio.

### Voorbeeld van een inwisseling:
- Stel dat je lening een schuld van 10.000 MUSD heeft en \$13.000 aan BTC-onderpand (een gezonde ratio van 130%).
- Een andere gebruiker wisselt 5.000 MUSD in en jouw lening wordt gekozen.
- Resultaat:
  - Je schuld wordt verlaagd naar 5.000 MUSD.
  - Je onderpand wordt verlaagd naar \$8.000.
  - Je nieuwe onderpandratio is nu 160% (\$8.000 / 5.000 MUSD), waardoor je lening veel veiliger is!

### Je resterende onderpand terugkrijgen na een volledige inwisseling
Wordt je lening via een inwisseling volledig afbetaald, dan is je onderpandoverschot veilig. Je kunt het op elk moment terugvorderen via de Mezo-app.

Belangrijke opmerking: de huidige gebruikersinterface toont je beschikbare overschot mogelijk niet. Zie je op de pagina Borrow geen melding "Loan redeemed", volg dan onze handleiding [Je onderpand opeisen na een volledige inwisseling](/docs/nl/docs/users/borrow/claim-collateral-after-redemption/) om het handmatig via de Mezo Explorer op te eisen.

---

## De belangrijkste verschillen in één oogopslag

| Kenmerk | Liquidatie (gedwongen sluiting) | Inwisseling (schuldafbouw) |
| --- | --- | --- |
| Wanneer het gebeurt | Alleen als je ratio onder 110% ligt | Kan gebeuren als je ratio boven 110% ligt |
| Wie start het? | Iedereen (meestal bots) | Elke gebruiker die MUSD heeft |
| Effect op de schuld | Volledig weggewerkt | Verlaagd of weggewerkt |
| Effect op het onderpand | Volledig verlies | Gedeeltelijk verwijderd; een eventueel overschot kun je opeisen |
| Effect op jou | Negatieve gebeurtenis; lening wordt gesloten en activa gaan verloren | Neutraal of positief; lening wordt kleiner en gezonder |

---

## Wat is Recovery Mode?

:::note
Recovery Mode (herstelmodus) is een tijdelijke veiligheidstoestand die wordt geactiveerd als de totale onderpandratio van het hele systeem (TCR) onder 150% zakt. Het is een speciale systeemtoestand met strengere leenregels.
:::

Tijdens Recovery Mode:
- **Liquidaties worden niet beïnvloed.** De liquidatiedrempel blijft op 110%, net als in de normale modus. Anders dan bij Liquity v1 breidt MUSD de liquidaties tijdens Recovery Mode niet uit naar hogere onderpandratio's.
- Nieuwe leningen kunnen niet worden geopend met een onderpandratio onder 150%.
- Herfinanciering is geblokkeerd.
- Het systeem moedigt gebruikers aan om onderpand toe te voegen of schuld af te lossen, zodat de TCR weer boven 150% komt.

---

## Zo houd je je lening veilig

:::tip
De beste verdediging tegen zowel liquidatie als inwisseling is het aanhouden van een hoge onderpandratio: mik op ruim boven 150%.
:::

### Om liquidatie te voorkomen:
- Houd een gezonde buffer aan. Mik op een onderpandratio ruim boven 110% om bestand te zijn tegen marktvolatiliteit. Met een ratio boven 150% kun je bovendien vrij lenen en herfinancieren, ook als het systeem in Recovery Mode komt.
- Controleer de gezondheid van je lening regelmatig, vooral als de BTC-prijs daalt.
- Wees proactief: voeg meer onderpand toe of los een deel van je schuld af als je ratio te laag wordt.

### Om de kans op inwisseling te verkleinen:
- Houd een hoge onderpandratio aan. Anders dan liquidaties, die bij een vaste drempel in gang worden gezet, zijn inwisselingen relatief: het systeem selecteert eerst de Troves met de laagste onderpandratio's. Hoe hoger jouw ratio is vergeleken met andere Troves, hoe kleiner de kans dat jouw Trove wordt ingewisseld. Hoewel 150% doorgaans een goed basisdoel is, hangt de optimale positie af van de actuele marktomstandigheden en van de onderpandratio's van andere openstaande Troves. Het loont om openstaande Troves af en toe te bekijken en je ratio daarop aan te passen, zodat je ruim boven de onderkant van het veld blijft.

### Houd je lening in de gaten met MUSD Monitor
Voor geavanceerde monitoring kun je [mezotools.cc](https://mezotools.cc) gebruiken.

Met deze tool kun je:
- De gezondheid en onderpandratio's van Troves in realtime controleren.
- Recente inwisselingen en liquidaties in het hele systeem bekijken.
- De prijzen van BTC en stablecoins rechtstreeks volgen via de onchain orakels van Mezo.

---

Zie [Architectuur en terminologie](/docs/nl/docs/users/borrow/architecture-and-terminology#definities) voor een volledige lijst met termen en definities voor MUSD.
