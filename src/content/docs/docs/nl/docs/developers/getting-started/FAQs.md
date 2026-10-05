---
title: FAQ
topic: developers
---

#### Wat is Mezo? De waardepropositie voor bouwers <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo is een permissionless Bitcoin-financieringsplatform zonder banken, ontworpen om Bitcoin te veranderen van een passieve waardeopslag in een productief, dynamisch financieel activum. De kernmissie van het platform is om de meer dan 100 miljoen Bitcoin-houders wereldwijd in staat te stellen met een doel te HODL'en, door de waarde van hun activa te gebruiken zonder ze te hoeven verkopen. Dit wordt bereikt met een robuuste infrastructuur die goedkope, snelle en veilige transacties mogelijk maakt voor uiteenlopende praktijktoepassingen.

De uiteindelijke visie voor Mezo is om het gebruik van Bitcoin supernormal te maken: een situatie waarin Bitcoin gebruiken voor alledaagse financiële activiteiten zo naadloos en geïntegreerd is dat het een vanzelfsprekend, onopvallend onderdeel van het leven wordt, net als het gebruik van een betaalpas.

Voor ontwikkelaars biedt Mezo een onderscheidende en overtuigende waardepropositie. Thesis, de studio achter Mezo, heeft ook tBTC gemaakt, de grootste gedecentraliseerde Bitcoin-bridge; Acre, een native rendementsprotocol voor Bitcoin; en Fold, een app voor consumentenuitgaven. Deze reeks onderling verbonden producten geeft ontwikkelaars vanaf dag één een krachtige, vooraf gecontroleerde en sterk interoperabele set "money legos". Deze geïntegreerde stack vermindert de frictie bij ontwikkeling en het systeemrisico aanzienlijk vergeleken met bouwen op andere platforms, waar essentiële bouwstenen zoals bridges, stablecoins en rendementsbronnen vaak worden geleverd door uiteenlopende, niet-gelieerde derden. Door op Mezo te bouwen, kunnen ontwikkelaars gebruikmaken van een compleet, zichzelf versterkend financieel ecosysteem dat is ontworpen om een nieuwe laag economische activiteit aan te drijven rond het veiligste en meest gedecentraliseerde activum ter wereld.

#### Wat is MUSD?

De kern van het Mezo-ecosysteem is MUSD, de native stablecoin. MUSD is ontworpen om voor 100% gedekt te zijn door Bitcoin-reserves en een stabiele 1:1-koppeling met de Amerikaanse dollar te behouden. De belangrijkste functie is om te dienen als het liquide ruilmiddel dat de economie van Mezo aandrijft, zodat gebruikers de waarde van hun Bitcoin kunnen ontsluiten. Het mechanisme is eenvoudig: gebruikers storten hun Bitcoin (in de vorm van tBTC) in een veilige onchain kluis en minten daartegen MUSD. Die nieuw geminte MUSD kan vervolgens in het hele ecosysteem worden gebruikt voor allerlei activiteiten, zoals uitgaven aan goederen en diensten, handelen op gedecentraliseerde exchanges, liquiditeit verschaffen om rendement te verdienen of deelnemen aan andere DeFi-protocollen.

Voor ontwikkelaars vormen Mezo en MUSD een ecosysteem waarin alles al aanwezig is ("batteries included"), met strategische voordelen:

* **Drastisch minder frictie met vertrouwde tools (EVM en RainbowKit):** Mezo is volledig EVM-compatibel, zodat Solidity-ontwikkelaars bestaande contracten kunnen deployen en hun favoriete tools zoals Hardhat en Foundry kunnen gebruiken, zonder leercurve.
* **Naadloze onboarding van gebruikers met Mezo Passport:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) lost de cruciale kloof tussen wallets op door gebruikers EVM-transacties te laten ondertekenen met hun native Bitcoin-wallets (zoals Xverse of Unisat). Dankzij deze account abstraction kun je één heldere UX bouwen om de hele Bitcoin-community te bereiken, zonder complexe, op maat gemaakte walletlogica te schrijven.
* [Krachtige financiële bouwstenen met MUSD:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) is een krachtige bouwsteen. De lage, vaste rentetarieven en de hoge LTV (tot 90%) maken voorspelbare financiële producten mogelijk (bijv. leningen met een vaste looptijd).

#### Wat is een circulaire Bitcoin-economie?

Een circulaire Bitcoin-economie is een zelfvoorzienend systeem waarin Bitcoin wordt gebruikt om zowel te verdienen als uit te geven, zonder dat het naar fiatgeld hoeft te worden omgezet. Zo ontstaat een gesloten kringloop waarin personen en bedrijven rechtstreeks in BTC handelen voor salarissen, goederen en diensten.

De combinatie van Mezo en MUSD zorgt voor een zichzelf versterkende economische kringloop:

1. **Ontsluiten:** Bitcoin-houders storten hun BTC en minten MUSD, waarmee ze hun kapitaal activeren zonder hun kernactivum te verkopen.
2. **Handelen:** ze gebruiken deze MUSD voor van alles, van handelen en lenen tot dagelijkse betalingen.
3. **Versterken:** deze onchain activiteit genereert transactiekosten (betaald in BTC), die het netwerk beveiligen en het nut van Bitcoin als transactiemiddel én als waardeopslag versterken.

Mezo levert de rails en MUSD de brandstof. Zo krijgen ontwikkelaars een uniek platform om applicaties te bouwen die tastbare waarde bieden aan de enorme, onderbediende markt van Bitcoiners.

#### Wat is de architectuur van de Mezo-chain?

De Mezo-chain heeft een hybride architectuur die is ontworpen om zowel de toegankelijkheid voor ontwikkelaars als de prestaties van het netwerk te maximaliseren. Het is een volledig EVM-compatibele blockchain, gebouwd met de Cosmos SDK en draaiend op de consensusengine CometBFT. De codebase is een sterk aangepaste fork van Evmos.

Deze technische stack biedt een krachtige combinatie van functies:

* **EVM-compatibiliteit**: hierdoor kan de enorme wereldwijde community van Ethereum- en Solidity-ontwikkelaars hun bestaande smart contracts en gedecentraliseerde applicaties (dApps) met weinig tot geen codewijzigingen op Mezo deployen. Ze kunnen de vertrouwde en volwassen toolchains blijven gebruiken die ze gewend zijn, waaronder MetaMask, Hardhat, Remix en Foundry. Dat verlaagt de drempel om binnen het Bitcoin-ecosysteem te bouwen aanzienlijk.
* **Cosmos SDK**: doordat Mezo op de Cosmos SDK is gebouwd, heeft de chain soevereiniteit en kan Mezo de eigen logica en governance aanpassen.

#### Welk token wordt op Mezo gebruikt voor gaskosten? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC (onder de motorkap [via tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)).

#### Hoe kom ik aan testnet-BTC voor Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Haal testnet-tegoed op via de faucet van Mezo: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Hoe integreer ik met Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) is de officiële library voor walletverbindingen, speciaal gebouwd voor een naadloze en uniforme gebruikerservaring op het Mezo-netwerk. De library regelt de complexiteit van het verbinden van zowel Bitcoin-native wallets (zoals Xverse en Unisat) als standaard EVM-wallets (zoals MetaMask) met je dApp. Voor de meest actuele en gedetailleerde integratiehandleiding, inclusief installatie-instructies, configuratie, beschikbare hooks en codevoorbeelden, kunnen ontwikkelaars de [**officiële documentatie van Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport) raadplegen**.**

#### Hoe krijg ik financiering en ondersteuning voor mijn project? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**De Supernormal Foundation**

​[De Supernormal Foundation](https://www.supernormal.foundation/) is de organisatie die zich toelegt op het bouwen, besturen en laten groeien van het Mezo-netwerk en de MUSD-economie. Ze werkt vanuit een door de community gedreven ethos en is de belangrijkste bron van formele ondersteuning voor bouwers.

**Mezo Founder Program**

​[Het Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) is het belangrijkste initiatief voor ontwikkelaars en projecten in een vroeg stadium (de MVP moet live zijn op testnet) die op Mezo willen bouwen en MUSD willen integreren. Het programma is bedoeld om innovatie in de BitcoinFi-sector aan te jagen.

* **Voordelen:** gekwalificeerde teams krijgen voorrang bij toegang tot een uitgebreid pakket aan middelen, waaronder:
  * **Grants:** financiële steun om de ontwikkeling te versnellen.
  * **Co-marketing:** gezamenlijke marketinginspanningen om de zichtbaarheid van het project te vergroten.
  * **Netwerken:** contact met andere bouwers en leiders in het ecosysteem.
  * **Praktische integratieondersteuning:** directe technische hulp voor een soepele deployment op Mezo.

​[**Nu aanmelden**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Voor projecten die verder gevorderd zijn of ambitieuze groeiplannen hebben, werkt de Supernormal Foundation samen met de toonaangevende durfkapitaalfirma's **Boost VC, Draper Associates en Thesis** aan een speciaal acceleratorprogramma. Dit intensieve programma biedt investeringen vooraf en ondersteuning op maat, waaronder diepgaande mentoring op het gebied van productstrategie en go-to-market-uitvoering, zodat teams de weg vinden van een werkend product naar een schaalbaar bedrijf.

#### Waar vind ik ondersteuning van de community en kan ik technische vragen stellen? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

De centrale plek voor alle interactie met de community en ontwikkelaars binnen het Mezo-ecosysteem is de [officiële Discord-server.](https://discord.com/invite/mezo)​

#### Wie zijn jullie partners en hoe integreer ik ze? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Bekijk de actuele lijst in [Integraties en partners](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
