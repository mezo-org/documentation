---
title: Woordenlijst
description: Woordenlijst met termen voor Mezo Earn
topic: users
---

Hieronder vind je een lijst met termen die met het Mezo Earn-systeem te maken hebben.

---

## veBTC

Vote-escrowed BTC. Een NFT die vergrendelde Bitcoin vertegenwoordigt en basisstemkracht (vermenigvuldiger van 1x) en het recht op vergoedingen in Mezo Earn geeft. Het stemgewicht neemt lineair af gedurende de vergrendelingsperiode. De maximale vergrendeling is 28 dagen.

## veMEZO

Vote-escrowed MEZO. Een NFT die vergrendelde MEZO-tokens vertegenwoordigt. Hiermee kun je de stemkracht van veBTC tot 5x boosten, en het stemt zelfstandig op veBTC-boostgauges en [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges). Het heeft zelf geen governancegewicht en kan zonder veBTC niet stemmen op staking-gauges. De maximale vergrendeling is 4 jaar.

## Boost

De vermenigvuldiger die op een veBTC-positie wordt toegepast wanneer er veMEZO-stemmen naartoe worden gestuurd. Zonder boost werkt veBTC op 1x. Met de maximale boost werkt veBTC op 5x. De boost hangt af van jouw relatieve aandeel in de totale hoeveelheid veBTC en veMEZO in het systeem.

## Geboost gewicht

Het gecombineerde stemgewicht wanneer veBTC en veMEZO aan elkaar gekoppeld zijn. Dit wordt berekend als je veBTC-gewicht vermenigvuldigd met je boostvermenigvuldiger (tussen 1x en 5x). Het geboost gewicht bepaalt je aandeel in de vergoedingen en je invloed op de emissies.

## Epoch

Een cyclus van 7 dagen die het stemmen en de verdeling van beloningen regelt. Epochs beginnen elke donderdag om 00:00 UTC.

## Gauge

Een smart contract dat beloningen ontvangt en verdeelt op basis van stemmen. Hoe meer stemgewicht een gauge krijgt, hoe groter zijn aandeel in de beloningen van die epoch.

## Vergrendeling

Het vastzetten van BTC of MEZO voor een bepaalde periode om veBTC of veMEZO te ontvangen. Langere vergrendelingen geven een hoger aanvankelijk stemgewicht.

## Staking-gauge

Een gauge die gekoppeld is aan een stakingtoken (zoals LP-tokens of ontvangstbewijzen van MUSD-spaartegoed). Stakers verdienen MEZO-emissies; stemmers verdienen handelsvergoedingen.

## veBTC-boostgauge

Een gauge die gekoppeld is aan een specifieke veBTC-NFT. veMEZO-houders stemmen op deze gauges om die veBTC-positie een boost te geven in ruil voor incentives.

## Niet-staking-gauge

Een gauge zonder stakingtoken waarop met veMEZO wordt gestemd. De emissies gaan naar een bestemming die de gauge zelf aanwijst, in plaats van naar stakers op Mezo. Stemmen op zo'n gauge staat los van het stemmen op veBTC-gauges en van boostmatching.

## MEZO Gauge

Een niet-staking-gauge die MEZO-emissies naar MUSD-liquiditeitspools buiten Mezo stuurt: Curve en Uniswap op Ethereum, en Aerodrome op Base. Zie [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges).

## Stemgewicht

De invloed die een positie heeft bij het stemmen op gauges. Voor veBTC wordt dit berekend als de vergrendelde BTC vermenigvuldigd met de resterende vergrendelingsduur, gedeeld door de maximale vergrendelingsduur. Voor veMEZO geldt dezelfde formule, maar met een maximale vergrendeling van 4 jaar.

## Afname

De geleidelijke vermindering van het stemgewicht naarmate een vergrendeling haar vervaldatum nadert. Je kunt dit resetten door de vergrendeling te verlengen.

## Poke

Een transactie die het geboost gewicht van een veBTC-positie bijwerkt. Dit is nodig na wijzigingen in veMEZO-stemmen, na het verlengen van een vergrendeling of na het toevoegen van BTC. Zonder te poken worden boostwijzigingen niet van kracht.

## Matchingmarkt

Het economische mechanisme waarmee veBTC-houders veMEZO-stemmen kunnen aantrekken door incentives op hun boostgauges te plaatsen, en waarmee veMEZO-houders rendement kunnen verdienen door te stemmen op gauges met aantrekkelijke incentives.

## Incentives

Beloningen die op gauges worden geplaatst om stemmen aan te trekken. Protocollen of gebruikers storten incentives (in elk willekeurig ERC-20-token) om stemkracht naar specifieke gauges te trekken.

## Rebase

Uitkeringen aan veMEZO-houders die verwatering tegengaan. Wanneer de vergrendelingsratio (veMEZO-voorraad / totale MEZO-voorraad) laag is, gaat een groter deel van de emissies naar rebases, zodat vroege vergrendelaars tegen verwatering worden beschermd.

## Splitter

Een contract dat emissies over twee bestemmingen verdeelt (bijvoorbeeld validators tegenover het ecosysteem). De verdeelverhoudingen liggen momenteel vast en zijn via governance vergrendeld.

## MUSD

De door Bitcoin gedekte stablecoin van Mezo. Gebruikers kunnen MUSD lenen tegen hun BTC als onderpand.

## MUSD Savings Rate gauge

Een staking-gauge voor de MUSD-spaarkluis. Gebruikers die MUSD in de spaarkluis storten, kunnen hun ontvangsttokens staken om MEZO-emissies te verdienen, terwijl stemmers op deze gauge MUSD-rendement verdienen.

## Emissies

Nieuwe MEZO-tokens die elke epoch worden verdeeld over staking-gauges, validators en veMEZO-houders (als rebases). De emissies volgen een halveringsschema: 25% op jaarbasis in jaar 0-2, aflopend tot ~2% na jaar 8.

## Chain Splitter

De eerste splitter in de emissiehiërarchie. Bepaalt welk percentage van de emissies naar validators gaat (aanvankelijk 20%) en welk deel naar de rest van het systeem.

## Ecosystem Splitter

De tweede splitter. Stuurt de emissies die niet naar validators gaan naar staking-gauges. Deze verhouding ligt momenteel vast en is via governance vergrendeld.
