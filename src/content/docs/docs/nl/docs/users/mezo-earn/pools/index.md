---
title: Overzicht van Mezo Pools
description: Lees meer over Mezo Pools en hoe je liquiditeit verschaft
topic: users
---

[Mezo Pools](https://mezo.org/explore/pools) zijn de kernmotor van het Mezo-ecosysteem en werken als geautomatiseerde onchain liquiditeitsreserves voor Mezo Pools. Elke pool bevat een paar van twee verschillende tokens, waardoor directe, gedecentraliseerde handel mogelijk is. In plaats van te vertrouwen op een traditioneel orderboek dat kopers en verkopers aan elkaar koppelt, handelen gebruikers rechtstreeks tegen de liquiditeit in de pool.

![Diagram van Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

Met [Mezo Pools](https://mezo.org/explore/pools) verdien je vergoedingen door liquiditeit te verschaffen voor tokenswaps. Als je twee tokens in een pool stort, kunnen handelaren tussen die tokens swappen en verdien jij een deel van de handelsvergoedingen.

Wanneer een gebruiker een evenredige waarde van de vereiste tokens in een pool stort, wordt die gebruiker liquiditeitsverschaffer (LP). Dat is essentieel voor de werking van het systeem, omdat het de beschikbare liquiditeit vergroot en zo de slippage voor handelaren verkleint. In ruil voor hun bijdrage ontvangen LP's LP-tokens. Deze LP-tokens vertegenwoordigen het evenredige aandeel van een LP in de totale activa van de pool. Ze geven de houder algoritmisch recht op een deel van de handelsvergoedingen die de pool genereert, en ze zijn het middel waarmee de LP de onderliggende gestorte activa weer kan opvragen.

Mezo biedt drie soorten pools, elk geoptimaliseerd voor een ander gebruik:

* **Volatiele pools**: bedoeld voor activaparen met niet-gecorreleerde prijzen, zoals BTC en MUSD.
* **Stabiele pools**: ontworpen voor activa met sterk gecorreleerde waarden, zoals MUSD en USDC. Deze pools gebruiken een speciale formule die zorgt voor veel minder slippage bij handel tussen vergelijkbare activa.
* **Pools met geconcentreerde liquiditeit (CL)**: hiermee verschaf je liquiditeit binnen een zelfgekozen prijsbereik in plaats van over de hele curve, wat de kapitaalefficiëntie flink verbetert. CL-posities worden weergegeven als NFT's (ERC-721) in plaats van als fungibele LP-tokens. Zie [Geconcentreerde liquiditeit](/docs/nl/docs/users/mezo-earn/pools/concentrated-liquidity) voor meer informatie.

## LP-tokens begrijpen

Als je activa in een [Mezo Pool](https://mezo.org/explore/pools) stort, mint het contract LP-tokens en stuurt die naar jou. Dit zijn standaard ERC20-tokens die jouw evenredige eigendom van de totale reserves van de pool uitdrukken.

Hoeveel LP-tokens je ontvangt, hangt af van je aandeel in de pool. Bij de allereerste storting in een nieuwe pool wordt dit aantal berekend als sqrt(x * y), waarbij x en y de hoeveelheden van de twee gestorte tokens zijn.

Bij elke swap via de pool wordt een handelsvergoeding (bijvoorbeeld 0,30% in volatiele pools) in rekening gebracht op het inputactivum. Deze vergoeding wordt direct afgezonderd in een apart contract, waaruit de liquiditeitsverschaffers van die specifieke pool haar kunnen claimen.

Om je aandeel in de onderliggende activa terug te krijgen, moet je je LP-tokens "verbranden"; je vergoedingen kun je echter op elk moment claimen. Als je je oorspronkelijk gestorte activa opvraagt, gaan je LP-tokens terug naar het smart contract in ruil voor je evenredige aandeel in de twee tokens in de pool.

## Het voordeel van Mezo Pools

Het Mezo-protocol is ontworpen zonder te leunen op traditionele financiële structuren zoals orderboeken. Orderboeken werken goed in gecentraliseerde financiën, maar in een gedecentraliseerde omgeving brengen ze grote uitdagingen met zich mee: ze vereisen vaak actief beheer door professionele marketmakers en gecentraliseerde infrastructuur om orders te hosten en te matchen.

[Mezo Pools](https://mezo.org/explore/pools) zijn speciaal ontworpen voor een gedecentraliseerde omgeving en benutten de unieke sterke punten van blockchaintechnologie:

* **Autonoom en permissionless**: elke pool is een smart contract met open toegang. Elke gebruiker of applicatie kan er zonder toestemming mee werken door functies aan te roepen zoals swap() om te handelen of mint() om liquiditeit te verschaffen.
* **Geavanceerde mogelijkheden**: een Mezo Pool werkt als onchain TWAP-orakel (Time-Weighted Average Price) en levert manipulatiebestendige prijsgegevens voor andere protocollen. Mezo Pools ondersteunen ook flash loans, waarmee complexe DeFi-strategieën in één transactie mogelijk zijn.

Deze architectuurvoordelen vormen de basis van de belangrijkste missie van Mezo: een robuuste, circulaire economie voor Bitcoin bouwen. Gebruikers kunnen hun BTC als onderpand gebruiken (bijvoorbeeld via Mezo Borrow om MUSD te minten) en vervolgens beide activa in liquiditeitspools inzetten. Zo maakt het protocol van Bitcoin, een passieve waardeopslag, een actief instrument dat rendement oplevert. Dat creëert een zelfvoorzienende kringloop: liquiditeit verschaffen levert de gebruiker niet alleen rendement op, maar verdiept ook de markt voor door Bitcoin gedekte activa, waardoor het hele ecosysteem liquider en nuttiger wordt.

## Aan de slag

### In 3 eenvoudige stappen aan de slag

Wil je liquiditeitsverschaffer worden? Aan de slag gaan is eenvoudig. Ga naar [Mezo Pools](https://mezo.org/explore/pools) om te beginnen.

1. **Je activa voorbereiden**: om liquiditeit te verschaffen heb je een gelijke waarde van beide activa in een paar nodig (bijvoorbeeld `$50 of BTC` en `$50 of MUSD`).
   * MUSD nodig? Mint het met je BTC via Mezo Borrow.
   * Andere activa of MUSD nodig? Gebruik [Mezo Pools](https://mezo.org/explore/pools) om ze te verhandelen.
2. **Liquiditeit toevoegen**: ga naar de [poolpagina op Mezo Explore](https://mezo.org/explore/pools). Kies de gewenste pool, geef op hoeveel je wilt storten en bevestig de transactie. Je ontvangt LP-tokens in je wallet die je aandeel in de pool vertegenwoordigen.
3. **Staken en verdienen (binnenkort beschikbaar)**: zodra staking live is, ga je gewoon terug naar de [poolpagina](https://mezo.org/explore/pools), kies je je positie en stake je je LP-tokens om extra beloningen te verdienen. Houd het in de gaten.

## Bronnen voor ontwikkelaars

Zie [Liquiditeit verschaffen](../../../developers/getting-started/) in onze documentatie voor ontwikkelaars om [Mezo Pools](https://mezo.org/explore/pools) in je applicatie te integreren.
