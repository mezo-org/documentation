---
title: Overzicht van de MUSD-stablecoin
description: >-
  Alles wat je moet weten over MUSD, de door Bitcoin gedekte stablecoin van
  Mezo.
topic: users
---

## Wat is MUSD?

Bitcoin-houders stonden altijd voor een onmogelijke keuze: je BTC verkopen om uitgaven te dekken, een gecentraliseerde kredietverstrekker vertrouwen met de bewaring van je bitcoin, of voor onbepaalde tijd vasthouden en de liquiditeit missen die je nodig hebt in je dagelijks leven.

MUSD verandert dat. Het is een permissionless stablecoin, voor 100% gedekt door Bitcoin-reserves, ontworpen om een 1:1-koppeling met de Amerikaanse dollar te behouden. Mint MUSD door BTC als onderpand te storten, geef het uit overal waar dollars worden geaccepteerd en behoud de hele tijd je volledige blootstelling aan Bitcoin. Ben je klaar, betaal dan de geleende MUSD plus rente terug en krijg je BTC terug.

![Met MUSD houd je je BTC en kun je toch uitgeven](/docs/images/musd/musd-keep-and-spend-btc.png)

### Waarom MUSD?

1. **Verkoop nooit je Bitcoin**: leen tot 90% van je BTC-bezit. Houd je sats, gebruik de waarde van je Bitcoin en los je lening af wanneer je maar wilt.
2. **Vaste tarieven van 1–5%**: je rentetarief wordt vastgelegd wanneer je je lening opent en verandert nooit. Geen variabele tarieven, geen verrassingen. Vergelijk dat met 7–20% APR bij traditionele banken of 8–9% op andere DeFi-platforms.
3. **Volledig onchain en verifieerbaar**: elke lening en elke dollar aan onderpand is 24/7 onchain zichtbaar. Geen ondoorzichtige reserves, geen custodians: alleen Bitcoin in een smart-contractkluis. [Bekijk het onderpand live in de Mezo Explorer](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Permissionless**: geen kredietcontroles, geen aanvragen en geen minimumbedragen behalve de ondergrens van 1.800 MUSD. Heb je BTC, dan kun je lenen.

## Hoe MUSD werkt

![De levenscyclus van MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD gebruikt een CDP-model (collateralized debt position, oftewel gedekte schuldpositie). Elke uitstaande MUSD is inwisselbaar voor Bitcoin, en met \$1 aan BTC-onderpand kun je 1 MUSD minten.

Dit model van minten en inwisselen houdt MUSD gekoppeld aan \$1, ook in volatiele markten:

* **MUSD noteert onder \$1**: arbitrageurs kopen MUSD met korting op de markt en wisselen die in voor \$1 aan onderliggende BTC. Ze betalen daarbij 0,75% inwisselingskosten, wat winstgevend blijft totdat MUSD \$0,995 bereikt.
* **MUSD noteert boven \$1**: arbitrageurs minten nieuwe MUSD door BTC aan het protocol te leveren en verkopen die met winst op de markt. Dit blijft winstgevend totdat MUSD terug is op \$1,005.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Om de koppeling ook bij marktvolatiliteit overeind te houden, moeten alle leenposities een onderpandratio van meer dan 110% aanhouden. Het systeem heeft ingebouwde liquidatiemechanismen en een stability pool om dit af te dwingen. Zo blijft het protocol ook bij hoge LTV's veilig en veerkrachtig.

Zie [Liquidaties en inwisselingen van MUSD](/docs/nl/docs/users/borrow/liquidation-mechanics) voor meer informatie over hoe deze veiligheidsmechanismen werken.

### Voordelen van het MUSD-model

**Liquiditeit vanuit de aanbodzijde**

Traditionele tweezijdige leenprotocollen hebben een pool met bestaande dollars nodig en gebruiken variabele rentetarieven om vraag en aanbod in evenwicht te brengen. MUSD wordt daarentegen rechtstreeks gemint uit Bitcoin-onderpand. De liquiditeit groeit organisch naarmate meer gebruikers BTC storten: het systeem genereert zelf zijn aanbod, dus er is altijd liquiditeit beschikbaar voor nieuwe leners.

**Vaste, lage leentarieven**

Omdat MUSD wordt gemint en niet uit een pool wordt geleend, is er geen concurrentie om tarieven die de kosten opdrijft. Het resultaat: vaste tarieven vanaf 1%, vastgelegd voor de hele looptijd van je lening. Daardoor is MUSD aanzienlijk goedkoper dan gangbare leenmarkten, waar tarieven variabel zijn en onvoorspelbaar kunnen pieken.

**Kapitaalefficiëntie**

MUSD ondersteunt een minimale collateralisatieratio van slechts 110%, waardoor leners tot 90% van de waarde van hun Bitcoin kunnen benutten. Voor Bitcoin-houders is dit de meest kapitaalefficiënte manier om liquiditeit vrij te maken zonder te verkopen. Toch bieden hogere onderpandratio's een grotere veiligheidsbuffer: houd altijd rekening met het risicoprofiel van je positie.

## MUSD vs. traditionele financiën

Voor Bitcoin-houders betekende het financiële systeem altijd compromissen: hoge kosten, ondoorzichtige bewaring, variabele tarieven en gecentraliseerde tussenpersonen. MUSD brengt de voordelen van onchain financiën (transparantie, lage kosten, zelfbewaring) rechtstreeks naar je Bitcoin.

![MUSD vs. traditionele financiën](/docs/images/musd/musd-vs-traditional.png)

Geen overboekingskosten, geen valutaspreads, geen maandelijkse rekeningkosten. Alleen je Bitcoin in een gedecentraliseerde smart-contractkluis, die voor je werkt.

## MUSD vergeleken met bestaande stablecoins

De stablecoinmarkt is breed: van door fiat gedekte stablecoins (USDT en USDC) tot synthetische stablecoins (USDe) en andere algoritmische CDP's (Liquity, Sky). Hoewel deze stablecoins de afgelopen jaren opmerkelijk zijn gegroeid, is er voor Bitcoiners nog altijd een gat in de markt.

MUSD wil deze risico's aanpakken met een dekking die volledig uit Bitcoin bestaat.

**Door fiat gedekte stablecoins**

Door fiat gedekte stablecoins zoals USDT en USDC maken meer dan 90% uit van de huidige stablecoinmarkt. Ze staan niet alleen haaks op het ethos van crypto, omdat ze gedekt zijn door de Amerikaanse dollar, maar de dollarreserves moeten ook veilig worden bewaard door één enkele entiteit.

Tether, de uitgever van USDT (~\$150 mld. in omloop), heeft nooit een audit van zijn reservebewijs gepubliceerd. Het bedrijf boekte in 2024 een winst van \$13 mld.

Circle, een Amerikaans bedrijf dat USDC uitgeeft, kan [naar eigen goeddunken adressen op een zwarte lijst zetten](https://www.circle.com/legal/usdc-risk-factors) en [betaalt exchanges om zijn activum aan te houden](https://x.com/inkymaze/status/1907187020293980599?s=46). Nu de Amerikaanse economie onchain gaat, wordt dit een gevaarlijk punt van centralisatie.

**Synthetische stablecoins**

Synthetische stablecoins (bijvoorbeeld USDe) zijn vaak afhankelijk van gecentraliseerde exchanges en bewaaroplossingen om hun waarde te behouden. Het risico van die blootstelling werd overduidelijk toen [Bybit onlangs te maken kreeg met de grootste hack ooit](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Daarnaast zijn stablecoins die synthetisch gedekt worden door het rendement uit een basistrade onvoorspelbaar en onbeproefd. Fundingrates zijn variabel, en de systemen zijn niet getest tegen uiteenlopende externe marktdruk.

**CDP-munten zoals USDS**

Op CDP's gebaseerde stablecoins dekken hun posities doorgaans met een mand van tokens, waaronder door fiat gedekte stablecoins en diverse altcoins.

Deze spreiding kan het risico verdelen, maar brengt ook grote uitdagingen met zich mee. Het onderpand, vaak bestaande uit volatiele activa zoals ETH-gerelateerde tokens of andere stablecoins, kan onder marktdruk onvoorspelbaar reageren en is vaak aanzienlijk volatieler dan BTC. Dat kan de koppeling van de stablecoin in gevaar brengen en de inwisselings- en liquidatieprocessen bemoeilijken.
