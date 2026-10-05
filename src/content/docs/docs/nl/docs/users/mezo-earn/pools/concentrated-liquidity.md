---
title: Geconcentreerde liquiditeit
description: >-
  Verschaf liquiditeit binnen zelfgekozen prijsbereiken en verdien meer
  vergoedingen met minder kapitaal.
topic: users
---

Met pools voor geconcentreerde liquiditeit (CL) stort je liquiditeit binnen een specifiek prijsbereik in plaats van over alle mogelijke prijzen. Door je kapitaal te concentreren waar de handel echt plaatsvindt, kun je per gestorte dollar aanzienlijk meer vergoedingen verdienen dan met [basispools](/docs/nl/docs/users/mezo-earn/pools).

## Hoe geconcentreerde liquiditeit verschilt van basispools

In een **basispool** wordt je liquiditeit gelijkmatig verdeeld over de hele prijscurve, van nul tot oneindig. Daardoor staat het grootste deel van je kapitaal stil in prijsbereiken waarin nooit wordt gehandeld.

In een **pool met geconcentreerde liquiditeit** kies je zelf een prijsbereik, bijvoorbeeld BTC tussen 80.000 en 120.000 MUSD. Al je kapitaal is binnen dat bereik actief, waardoor het veel kapitaalefficiënter is. De keerzijde: als de prijs buiten je bereik komt, verdient je positie geen vergoedingen meer totdat de prijs terugkeert.

| | Basispools | CL-pools |
|---|---|---|
| **Liquiditeitsbereik** | Volledige prijscurve (0 tot oneindig) | Zelfgekozen prijsbereik |
| **Kapitaalefficiëntie** | Lager: het meeste kapitaal staat stil | Hoger: al het kapitaal is actief binnen het bereik |
| **Type positie** | Fungibele LP-tokens (ERC-20) | NFT-posities (ERC-721) |
| **Beheer** | Instellen en vergeten | Vereist monitoring en herbalancering |
| **Impermanent loss** | Standaard | Versterkt binnen het gekozen bereik |

## Actieve CL-pools

| Pool | Type | Tick spacing |
|---|---|---|
| BTC/MUSD-200 | Geconcentreerd volatiel | 200 |

Ga naar [Mezo Pools](https://mezo.org/explore/pools) voor actuele statistieken, waaronder TVL, volume, vergoedingen en APR.

## Tick spacing

CL-pools gebruiken **tick spacing** om te bepalen hoe fijnmazig je prijsbereiken kunt instellen. Met een kleinere tick spacing zijn smallere bereiken mogelijk (meer precisie), terwijl een grotere tick spacing bredere minimumbereiken betekent.

Pools worden ingedeeld als **stabiel** (tick spacing onder 100) of **volatiel** (tick spacing van 100 of hoger), volgens dezelfde conventie als Aerodrome.

| Tick spacing | Standaardtarief | Indeling |
|---|---|---|
| 1 | 0,01% | Stabiel |
| 10 | 0,05% | Stabiel |
| 50 | 0,05% | Stabiel |
| 100 | 0,05% | Volatiel |
| 200 | 0,30% | Volatiel |
| 2.000 | 1,00% | Volatiel |

De BTC/MUSD-200-pool gebruikt een tick spacing van 200 met een swaptarief van 0,30%.

## Aan de slag (binnenkort beschikbaar)

1. Ga naar [Mezo Pools](https://mezo.org/explore/pools) en kies de CL-pool waaraan je liquiditeit wilt verschaffen.
2. Kies je prijsbereik: stel de minimum- en maximumprijs in waartussen je liquiditeit actief is.
3. Vul in hoeveel je van elk token wilt storten. De verhouding hangt af van de huidige prijs ten opzichte van je gekozen bereik.
4. Controleer en bevestig de transactie. Je ontvangt een NFT die je positie vertegenwoordigt.

### Een prijsbereik kiezen (binnenkort beschikbaar)

- **Breder bereik**: levert gelijkmatiger vergoedingen op, maar met een lagere kapitaalefficiëntie. Beter als je er weinig naar wilt omkijken.
- **Smaller bereik**: levert meer vergoedingen op zolang de prijs binnen het bereik blijft, maar vereist actieve monitoring en herbalancering. De kans dat de prijs buiten je bereik komt, is groter.
- **De huidige prijs moet binnen je bereik liggen**: ligt de huidige prijs buiten je bereik, dan bestaat je positie volledig uit één token en verdient ze geen vergoedingen totdat de prijs weer binnen het bereik komt.

## Staken voor emissies (binnenkort beschikbaar)

CL-posities kunnen in gauges worden gestaket om bovenop handelsvergoedingen MEZO-emissies te verdienen. Gestakete posities verdienen een groter deel van de swapvergoedingen via het mechanisme voor vergoedingen van niet-gestakete posities, dat een deel van de vergoedingen van niet-gestakete posities naar gestakete posities doorsluist.

Zo stake je:

1. Ga naar je CL-positie.
2. Klik op **Stake** om de NFT van je positie in de gauge te storten.
3. Verdien MEZO-emissies zolang je liquiditeit binnen het bereik valt.

Emissies worden verdeeld naar verhouding van gestakete liquiditeit die binnen het bereik valt. Komt je positie buiten het bereik, dan verdien je geen emissies meer totdat de prijs terugkeert.

## Vergoedingen

De vergoedingen van CL-pools werken op dezelfde manier als die van basispools: ze worden bij elke swap ingehouden op het inputtoken en stapelen zich op, zodat liquiditeitsverschaffers ze kunnen claimen.

Het belangrijkste verschil: in CL-pools verdienen alleen posities die op het moment van de swap **binnen het bereik** vallen vergoedingen. Posities buiten het actieve prijsbereik verdienen niets totdat de prijs terugkeert.

Zie [Poolkosten](/docs/nl/docs/users/mezo-earn/pools/pools-fees) voor meer informatie over het kostenmodel.

## Risico's

### Impermanent loss

Geconcentreerde liquiditeit **versterkt** impermanent loss ten opzichte van basispools. Omdat je kapitaal in een smal bereik is geconcentreerd, hebben prijsbewegingen binnen dat bereik een grotere invloed op de verhouding van de tokens in je positie. Hoe smaller je bereik, hoe groter het mogelijke impermanent loss.

### Risico buiten het bereik

Beweegt de marktprijs buiten je gekozen bereik, dan wordt je positie volledig omgezet in één token en verdient ze geen vergoedingen of emissies meer. Je moet dan wachten tot de prijs terugkeert, of je liquiditeit opnemen en opnieuw positioneren.

### Smart-contractrisico

Zoals bij alle smart contracts blijft er een inherent risico bestaan. Bekijk de audits op [mezo.org/audits](https://mezo.org/audits) en stort alleen bedragen waarbij je je comfortabel voelt.
