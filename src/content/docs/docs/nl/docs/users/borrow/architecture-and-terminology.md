---
title: Architectuur en terminologie van MUSD
description: >-
  Diepgaande uitleg over het systeemontwerp en de kernterminologie van MUSD op
  Mezo.
topic: users
---

Het [MUSD](https://mezo.org/feature/musd)-systeem bestaat uit vier hoofdgroepen van contracten:

| Contractgroep | Doel |
| --- | --- |
| **Token (MUSD)** | De stablecoin die de kern van het systeem vormt, ontworpen om een koppeling aan de USD te behouden |
| **Kernprotocol** | Regelt het openen en sluiten van posities, het beheer van onderpand en het bewaken van de stabiliteit van het systeem |
| **Activapools** | Beheert de verschillende onderpand- en liquiditeitspools van het systeem |
| **Ondersteunende contracten** | Levert essentiële diensten zoals prijsfeeds, het sorteren van posities en het beheer van de protocol-controlled value |

## Bewaring en beheer van onderpand

MUSD-posities zijn onchain te volgen, en het onderliggende Bitcoin-onderpand wordt veilig beheerd via de robuuste, gedecentraliseerde bewaarinfrastructuur van tBTC.

Op de Mezo block explorer kun je in realtime alle BTC zien die MUSD dekt:

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC is gebouwd door hetzelfde team dat achter Mezo zit, [Thesis*](https://thesis.co/?ref=blog.mezo.org), en draait op het [Threshold Network](https://threshold.network/?ref=blog.mezo.org). Threshold is een gedecentraliseerde groep ondertekenaars die sinds begin 2020 de Threshold Bitcoin-bridge beheert en daarmee met succes meer dan 28.000 Bitcoin heeft gebridged. Het reservebewijs (proof of reserves) voor tBTC is gedurende het hele bestaan van de bridge live geweest en is te bekijken op [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

Wil je dieper op tBTC ingaan, bekijk dan het [onderzoeksrapport van Bitcoin Layers](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), dat tBTC vergelijkt met andere populaire wrappers zoals WBTC en cbBTC. Daarnaast heeft het [LlamaRisk-team](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) een aanvullende risicoanalyse uitgevoerd voorafgaand aan de notering van tBTC als onderpand op Aave.

### Bewaring door contracten

Een gebruiker opent een positie door BorrowerOperations.openTrove aan te roepen, BTC aan te leveren en MUSD aan te vragen. De BTC wordt naar de ActivePool geleid, waar die blijft totdat een van de volgende acties plaatsvindt:

* De gebruiker neemt onderpand op (`BorrowerOperations.withdrawColl`)
* De gebruiker lost de schuld af (`BorrowerOperations.closeTrove`)
* Er wordt onderpand ingewisseld (`TroveManager.redeemCollateral`)
* De positie wordt geliquideerd (`TroveManager.liquidate`)

Geliquideerde posities worden ofwel betaald door de StabilityPool, waarbij de BTC naar de Stability Pool wordt overgemaakt, ofwel worden de schuld en het onderpand geabsorbeerd en herverdeeld over andere gebruikers, waarbij de BTC naar de DefaultPool wordt overgemaakt en vandaar wordt verdeeld.

## Lenen tegen vaste rente

* Globaal rentetarief: voor alle nieuw geopende leningen geldt één globaal rentetarief.
* Behoud van het rentetarief: zodra een lening is geopend, behoudt die het rentetarief waartegen ze is aangemaakt, ook als het globale tarief verandert. Het rentetarief van een lening kan alleen door de gebruiker worden bijgewerkt via de herfinancieringsfunctie.

:::note
Rentetarieven staan **vast voor de hele looptijd van de lening**. Het tarief dat je bij het aanmaken van de lening vastlegt, verandert nooit, tenzij je ervoor kiest te herfinancieren.
:::
* Herfinancieringsfunctie: met de herfinancieringsfunctie kunnen gebruikers de schuld van hun lening aanpassen aan het nieuwe globale rentetarief. Hiervoor betaal je herfinancieringskosten: een instelbaar percentage van de uitgiftekosten. Herfinancieren heeft als voordeel dat je geen onderpand hoeft te verplaatsen en dat de kosten lager zijn dan wanneer je een lening sluit en opnieuw opent tegen het bijgewerkte tarief. Je kunt ook herfinancieren om je kredietlimiet te verhogen als BTC in waarde is gestegen.
* Enkelvoudige rente: de rente wordt berekend op basis van enkelvoudige rente in plaats van samengestelde rente.
* Rentebetalingen: rentebetalingen gaan naar de PCV (Protocol Controlled Value). De verdeling van deze betalingen wordt via governance bepaald en kan worden gesplitst tussen een willekeurige ontvanger en de aflossing van de bootstraplening.

## Aanvullende governance

* Governancecontrole: het rentetarief en andere cruciale parameters worden door governance beheerd. Wijzigingen in deze parameters vereisen een governancevoorstel en een minimale wachttijd voordat ze kunnen worden doorgevoerd.
* Voorstellen voor rentetarieven: nieuwe rentetarieven kunnen via governance worden voorgesteld. Deze voorstellen moeten na een minimale wachttijd worden goedgekeurd, zodat stabiliteit en voorspelbaarheid gewaarborgd zijn.

## Protocol Controlled Value (PCV)

Het Protocol Controlled Value-contract (PCV) is een belangrijk onderdeel van het systeem en beheert de kosten die bij lenen en herfinancieren worden geïnd. Hieronder lees je hoe de PCV werkt:

* Inning van kosten: leenkosten en herfinancieringskosten gaan naar het PCV-contract.
* Toewijzing van kosten: de door de PCV geïnde kosten worden gebruikt om de bootstraplening af te lossen of worden naar het gaugesysteem gestuurd.
* Instelbare verdeling: de verdeling van de kosten tussen het aflossen van de schuld en het gaugesysteem wordt via governance bepaald. Zolang de bootstraplening niet volledig is afgelost, mag echter niet meer dan 50% van de kosten naar het gaugesysteem gaan.
* Na aflossing van de schuld: zodra de bootstraplening volledig is afgelost, worden de kosten opgebouwd als protocol-owned liquidity in de StabilityPool.

### Bootstraplening van het protocol

De Stability Pool wordt opgestart met een protocollening tegen toekomstige kosten en rente. De MUSD die met deze protocollening wordt gemint, mag uitsluitend in de Stability Pool worden gebruikt. Zolang de protocollening loopt, wordt minimaal 50% van de rente en kosten die het protocol in rekening brengt gebruikt om de lening af te lossen.

## Definities

- **Lening:** een gedekte schuldpositie, gekoppeld aan één Ethereum-adres. In vergelijkbare protocollen ook wel een "CDP" genoemd.

- **Actief onderpand:** de hoeveelheid onderpand die in de struct van een lening is vastgelegd

- **Actieve hoofdsom:** het bedrag aan MUSD-schuld dat in de struct van een lening is vastgelegd, exclusief rente

- **Actieve rente:** het bedrag aan MUSD-rente dat in de struct van een lening is vastgelegd

- **Actieve schuld:** het bedrag aan MUSD-schuld dat in de struct van een lening is vastgelegd (actieve hoofdsom plus actieve rente)

- **Totaal onderpand:** de som van het actieve onderpand van een lening plus de openstaande onderpandbeloningen die uit verdelingen zijn opgebouwd

- **Totale schuld:** de som van de actieve schuld van een lening plus de openstaande schuldbeloningen die uit verdelingen zijn opgebouwd

- **Individuele collateralisatieratio (ICR):** de ICR van een lening is de verhouding tussen de dollarwaarde van het totale onderpand, tegen de actuele collateral:USD-prijs, en de totale schuld

- **Nominale collateralisatieratio (nominale ICR, NICR):** de nominale ICR van een lening is het totale onderpand (uitgedrukt in onderpand) vermenigvuldigd met 100e18 en gedeeld door de totale schuld.

- **Totaal systeemonderpand:** de som van het onderpand in de ActivePool en de DefaultPool

- **Totale systeemschuld:** de som van de schuld in de ActivePool en de DefaultPool

- **Totale collateralisatieratio (TCR):** de verhouding tussen de dollarwaarde van het totale systeemonderpand, tegen de actuele collateral:USD-prijs, en de totale systeemschuld

- **Kritieke collateralisatieratio (CCR):** 150%. Wanneer de TCR onder de CCR zakt, gaat het systeem naar Recovery Mode.

- **Inwisseling:** het omwisselen van MUSD-tokens met het systeem in ruil voor onderpand van gelijke waarde. Elk account met een MUSD-tokensaldo kan deze inwisselen, ongeacht of het een lener is.

- **Liquidatie:** het gedwongen sluiten van een onvoldoende gedekte lening en het herverdelen van het onderpand en de schuld ervan. Als de Stability Pool groot genoeg is, wordt de geliquideerde schuld verrekend met de Stability Pool en wordt het onderpand verdeeld onder de inleggers. Kan de geliquideerde schuld niet met de pool worden verrekend, dan herverdeelt het systeem het geliquideerde onderpand en de schuld rechtstreeks over de actieve leningen met een collateralisatieratio van meer dan 110%. Liquidatie is permissionless en openbaar beschikbaar: iedereen kan een onvoldoende gedekte lening liquideren of leningen in batch liquideren.

- **Onderpandoverschot:** het onderpandoverschot is het extra onderpand van leners dat ze kunnen terugvorderen als hun lening volledig is ingewisseld.

- **Verrekening (offset):** het wegstrepen van geliquideerde schuld tegen MUSD in de Stability Pool en het toewijzen van geliquideerd onderpand aan inleggers in de Stability Pool, naar verhouding van hun inleg.

- **Gascompensatie:** een vergoeding in MUSD en onderpand die automatisch wordt betaald aan degene die een liquidatiefunctie aanroept, bedoeld om liquidaties ook bij marktstress winstgevend te houden. Het bedrag van 200 MUSD is vastgesteld op basis van de gasprijzen en bloktijden van Ethereum. Zo worden liquidators niet afgeschrikt door mogelijk hoge gaskosten.
