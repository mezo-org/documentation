---
title: Mezo Earn voor validators
description: >-
  Hoe validators deelnemen aan de economische motor van Mezo, incentives
  ontvangen en samenwerken met veBTC, veMEZO, gauges en LP-staking.
topic: developers
---

Deze pagina legt uit hoe validators deelnemen aan de economische motor van Mezo (Mezo Earn), hoe ze incentives ontvangen en hoe dit samenhangt met veBTC, veMEZO, gauges en LP-staking.

De pagina is geschreven voor:

- Huidige en toekomstige validators van Mezo
- Infrastructuurproviders en partners
- veBTC-/veMEZO-houders en LP's die willen begrijpen hoe validatorbeloningen werken

:::note

De whitepaper van Mezo is de gezaghebbende bron voor de mechanismen en formules achter veBTC, veMEZO, gauges, splitters en emissies.

:::

---

## Overzicht op hoofdlijnen

Op hoofdlijnen:

- Validators beveiligen de Mezo-chain en verdienen MEZO-beloningen via de Chain Splitter in Mezo Earn.
- veBTC-houders vormen het anker van de governance. Ze stemmen op staking-gauges om emissies te sturen.

**Belangrijkste mechanismen:**

- **Verdeling van emissies:** de verhoudingen van de splitters (Chain Splitter en Ecosystem Splitter) staan momenteel vast en zijn via governance vergrendeld. Ze kunnen in de toekomst via governancemechanismen aanpasbaar worden.
- **Rol van veMEZO:** veMEZO werkt als een boost op de stemkracht van veBTC (tot een begrensde vermenigvuldiger), maar vervangt BTC nooit als anker.

---

## Kernbegrippen

### Belangrijke definities

Om Mezo Earn te begrijpen, maken we onderscheid tussen drie economische termen:

- **Beloningen:** wat actoren ontvangen in ruil voor hun werk (bijv. MEZO-emissies).
- **Incentives:** de regels of voordelen die bedoeld zijn om specifiek gedrag aan te moedigen (bijv. een boost verdienen door veMEZO aan te houden).
- **Bribes:** een tijdelijk budget dat protocollen of gebruikers beschikbaar stellen om een specifieke actie te bevorderen (bijv. stemmen op een specifieke gauge).

### Actoren in Mezo Earn

Mezo Earn coördineert vijf hoofdactoren:

1. **Eindgebruikers / vergrendelaars van veBTC en veMEZO:** vergrendelen BTC of MEZO, ontvangen veBTC- en veMEZO-NFT's, stemmen in gauges en claimen vergoedingen/emissies.
2. **Liquiditeitsverschaffers (LP's):** verschaffen DEX-liquiditeit en ontvangen LP-tokens en vergoedingen; ze kunnen LP-tokens optioneel in staking-gauges staken om vergoedingen in te ruilen voor MEZO-emissies.
3. **Validators:** draaien nodes van de Mezo-chain, nemen deel aan de consensus en ontvangen MEZO-emissies via de Chain Splitter.
4. **Protocollen:** zetten bribes in op gauges om liquiditeit of governancestemmen aan te trekken.
5. **De chain:** int swap- en chain-/bridgevergoedingen en herverdeelt die via Earn.

---

## Hoe validators emissies ontvangen

De Chain Splitter stuurt een vast deel van de beloningsemissies naar validators, momenteel 20% van de beloningsemissies. Deze verhouding is via governance vergrendeld.

Validatoremissies worden gelijk verdeeld over de actieve validators. Er is momenteel geen mechanisme waarmee veBTC-houders op individuele validators kunnen stemmen of emissies naar specifieke validators kunnen sturen.

---

## veBTC-boostgauges en de matchingmarkt

Hoewel ze niet specifiek voor validators zijn, hebben veBTC-boostgauges en de matchingmarkt directe invloed op hoe efficiënt validators en LP's stemmen kunnen aantrekken.

- Elke veBTC-NFT heeft een eigen boostgauge (niet-staking).
- veMEZO-houders brengen met hun veMEZO-gewicht stemmen uit op deze gauges.

**Marktdynamiek:**

- **Deelnemers met veel BTC en weinig MEZO:** bieden incentives (bribes) aan op hun veBTC-boostgauges om veMEZO-stemmen aan te trekken en zo hun vermenigvuldiger te verhogen (tot 5x).
- **Deelnemers met veel MEZO en weinig BTC:** sturen veMEZO-stemmen naar veBTC-boostgauges om die incentives te verdienen zonder BTC aan te houden.

---

## LP-staking en de relatie met validators

### Wat is LP-staking?

LP's verschaffen liquiditeit aan DEX-pools op Mezo en ontvangen LP-tokens die hun aandeel in de pool vertegenwoordigen. Ze kunnen kiezen tussen twee modi:

**1. Niet-gestakete LP:**

- LP's houden hun LP-tokens in hun wallet.
- Ze verdienen hun evenredige deel van de swapvergoedingen rechtstreeks uit de pool.
- Er worden geen MEZO-emissies naar hen gestuurd.

**2. Gestakete LP:**

- LP's staken hun LP-tokens in een staking-gauge.
- Het onderliggende aandeel in de vergoedingen wordt van de gestakete LP-tokens omgeleid naar veBTC-stemmers die op die gauge stemmen.
- LP's ontvangen in plaats daarvan de MEZO-emissies die naar die gauge gaan.

**De economische ruil:**

- LP's ruilen direct echt rendement (vergoedingen) in voor MEZO-emissies.
- veBTC- + veMEZO-stemmers ruilen hun stemkracht in voor rechten op die omgeleide vergoedingen en op eventuele incentives die aan de gauge zijn toegevoegd.

### Hoe LP-staking validators beïnvloedt

Via de boom van splitters:

- De **Chain Splitter** bepaalt hoeveel van de beloningspot naar validatoractiviteiten gaat en hoeveel naar andere activiteiten. Deze verhouding staat momenteel vast op 20% validators / 80% ecosysteem en is via governance vergrendeld.
- De **Ecosystem Splitter** stuurt de pot die niet voor validators is naar staking-gauges (LP-pools + MUSD-sparen). Deze verhouding staat momenteel vast en is via governance vergrendeld.
- LP-gauges concurreren vervolgens binnen hun tak met de MUSD-spaargauge en andere LP-gauges om emissies.

---

## Stap voor stap: LP-staking

1. **Verschaf liquiditeit:** kies een pool op de Mezo-DEX, stort activa en ontvang LP-tokens.

2. **Zoek de staking-gauge:** open de frontend van Earn of de DEX, zoek de staking-gauge voor de pool en controleer of die LP-tokens accepteert.

3. **Stake LP-tokens:** keur het contract goed en stake het gewenste bedrag. Hiermee worden poolvergoedingen naar de vergoedingenpot van de gauge omgeleid en worden MEZO-emissies verdeeld onder wie LP-tokens staket.

4. **veBTC-stemmen op de LP-gauge:** veBTC-houders (+veMEZO) kunnen op de LP-gauge stemmen. Een hoger stemgewicht stuurt meer MEZO-emissies naar de gauge en meer poolvergoedingen/bribes naar de stemmers.

5. **Beloningen claimen:**
   - **LP's:** claimen MEZO-emissies (toegewezen per epoch).
   - **veBTC-stemmers:** claimen hun deel van de omgeleide swapvergoedingen en incentives.

---

## MUSD-spaargauge

De MUSD-spaarrente is geïmplementeerd als nog een staking-gauge.

- Gebruikers storten MUSD in een spaarkluis en ontvangen een ontvangsttoken.
- Staken ze het ontvangsttoken in de MUSD-spaargauge:
  - Dan wordt hun directe MUSD-rendement omgeleid naar de vergoedingenpot van de gauge.
  - Verdienen ze in plaats daarvan de MEZO-emissies die naar die gauge gaan.
- veBTC-houders die op de MUSD-spaargauge stemmen, ontvangen:
  - MUSD-rendement (uit rente, afsluitkosten en herfinancieringskosten).
  - Eventuele MEZO-incentives die naar die gauge gaan.

Deze gauge concurreert direct met LP-gauges om emissies uit de stakingtak en om de aandacht van stemmers.

---

## Contact en ondersteuning via Discord

Voor vragen specifiek over validators, onboarding en coördinatie: word lid van de [Discord van Mezo](https://discord.mezo.org) en kom naar het kanaal #developers.
