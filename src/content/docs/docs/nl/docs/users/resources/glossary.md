---
title: Woordenlijst
description: >-
  Een uitgebreid A-Z-naslagwerk van termen die in het hele Mezo-ecosysteem
  worden gebruikt.
topic: users
---

Een uitgebreid naslagwerk van termen die in het hele Mezo-ecosysteem worden gebruikt. Voor termen die specifiek over Mezo Earn gaan, zie de [woordenlijst van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker. Een type gedecentraliseerde exchange die liquiditeitspools en wiskundige formules gebruikt in plaats van orderboeken om de prijzen van activa te bepalen en transacties uit te voeren. Mezo Pools gebruiken een AMM in Aerodrome-stijl met constant-product-curves voor volatiele paren en stable-curves voor gecorreleerde paren. Zie [Overzicht van Mezo Pools](/docs/nl/docs/users/mezo-earn/pools).

## Block explorer

Een webtool waarmee je transacties, adressen en onchain gegevens kunt bekijken. De mainnet-explorer van Mezo staat op [explorer.mezo.org](https://explorer.mezo.org/) en de testnet-explorer op [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

De vermenigvuldiger die op een veBTC-positie wordt toegepast wanneer er veMEZO-stemmen naartoe worden gestuurd. Zonder boost werkt veBTC op 1x. Met de maximale boost werkt veBTC op 5x. De boost hangt af van jouw relatieve aandeel in de totale hoeveelheid veBTC en veMEZO in het systeem. Zie [Boostmechanisme](/docs/nl/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Geboost gewicht

Het gecombineerde stemgewicht wanneer veBTC en veMEZO aan elkaar gekoppeld zijn. Dit wordt berekend als je veBTC-gewicht vermenigvuldigd met je boostvermenigvuldiger (tussen 1x en 5x). Het geboost gewicht bepaalt je aandeel in de vergoedingen en je invloed op de emissies.

## BTC

Bitcoin. BTC is het native gastoken op Mezo (met 18 decimalen) en het belangrijkste onderpand voor het minten van [MUSD](#musd). Alle transacties op Mezo worden in BTC betaald.

## BTC-wallet

Een Bitcoin-native wallet waarmee je BTC rechtstreeks naar Mezo stort. Ondersteunde wallets zijn onder meer UniSat, OKX en Xverse. Ondersteunde adresformaten zijn Legacy (P2PKH), Native SegWit (P2WPKH) en Nested SegWit (P2SH-P2WPKH). Zie [Activa storten](/docs/nl/docs/users/getting-started/deposit-assets).

## Chain-ID

Een numerieke identificatie voor een blockchainnetwerk. Mezo Mainnet gebruikt chain-ID `31612` en Mezo Testnet gebruikt chain-ID `31611`. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## Chain Splitter

De eerste splitter in de emissiehiërarchie. Bepaalt welk percentage van de MEZO-emissies naar validators gaat (20%) en welk deel naar de rest van het ecosysteem (80%). Deze verhouding staat momenteel vast en is via governance vergrendeld. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Cliff

Een wachtperiode voordat tokens beginnen te ontgrendelen. In het vestingschema van Mezo hebben de allocaties voor het team en de investeerders een cliff van 1 jaar vanaf de TGE, wat betekent dat er in de eerste 12 maanden geen tokens ontgrendelen. Zie [Tokenverdeling](/docs/nl/docs/users/mezo/token-distribution).

## Onderpand

Activa die worden ingezet als zekerheid voor een lening. Op Mezo wordt BTC als onderpand gestort om [MUSD](#musd) te lenen. Als de waarde van het onderpand te ver daalt ten opzichte van de schuld, kan de positie worden [geliquideerd](#liquidatie). Zie [MUSD lenen en minten](/docs/nl/docs/users/borrow/mint-musd).

## Onderpandoverschot

Het overtollige onderpand dat overblijft nadat er volledig tegen een [Trove](#trove) is ingewisseld. Dit overschot wordt naar een bewaarcontract gestuurd, waar de lener het kan opeisen. Zie [MUSD-liquidaties en -inwisselingen](/docs/nl/docs/users/borrow/liquidation-mechanics).

## Collateralisatieratio (ICR)

Individual Collateralization Ratio (individuele collateralisatieratio). De verhouding tussen de dollarwaarde van het onderpand van een Trove en de totale schuld ervan. Is je BTC-onderpand bijvoorbeeld \$13.000 waard en bedraagt je schuld \$10.000, dan is je ICR 130%. Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## CometBFT

De consensusengine waarop Mezo draait, voorheen bekend als Tendermint. CometBFT biedt Byzantine Fault Tolerant-consensus en maakt snelle blokfinaliteit op het Mezo-netwerk mogelijk.

## Cosmos SDK

Het modulaire framework waarmee de Mezo-blockchain is gebouwd. Cosmos SDK levert de applicatielaag, terwijl [CometBFT](#cometbft) de consensus afhandelt. Dankzij deze architectuur ondersteunt Mezo zowel Cosmos-native als [EVM](#evm)-compatibele functionaliteit.

## Kritieke collateralisatieratio (CCR)

De systeembrede onderpanddrempel, vastgesteld op 150%. Wanneer de Total Collateralization Ratio (TCR) onder de CCR zakt, gaat het systeem over naar [Recovery Mode](#recovery-mode). Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## dApp

Decentralized Application (gedecentraliseerde applicatie). Een softwaretoepassing die op een blockchain draait in plaats van op centrale servers. Ontwikkelaars kunnen dApps op Mezo bouwen met standaard EVM-tooling. Zie [Vereisten voor dApps](/docs/nl/docs/developers/getting-started/dapp-requirements).

## Afname

De geleidelijke vermindering van het stemgewicht naarmate een vergrendeling haar einddatum nadert. De stemkracht van veBTC en veMEZO neemt na verloop van tijd lineair af. Je kunt de afname herstellen door je vergrendeling te verlengen. Zie [Overzicht van veBTC](/docs/nl/docs/users/mezo-earn/lock/vebtc) en [Overzicht van veMEZO](/docs/nl/docs/users/mezo-earn/lock/vemezo).

## Delegator

Een deelnemer die zijn inzet of stemkracht delegeert aan een [validator](#validator). Validators kunnen beloningen delen met delegators, maar zijn daartoe niet verplicht.

## Ecosystem Splitter

De tweede splitter in de emissiehiërarchie. Verdeelt de emissies die niet naar validators gaan tussen [staking-gauges](#staking-gauge) (90%) en [niet-staking-gauges](#niet-staking-gauge) (10%); die laatste financieren [MEZO Gauges](#mezo-gauge). Wordt vastgesteld via een veBTC-stemming. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Emissies

Nieuwe MEZO-tokens die elke epoch worden verdeeld over staking-gauges, validators en veMEZO-houders (als rebases). Emissies volgen een op Bitcoin geïnspireerd halveringsschema: ze beginnen op 25% op jaarbasis en dalen na jaar 8 naar 2%. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Epoch

Een cyclus van 7 dagen die het stemmen en de verdeling van beloningen in Mezo Earn regelt. Epochs beginnen elke donderdag om 00:00 UTC. Stemmen worden niet meegenomen naar de volgende epoch. Zie [Overzicht van veBTC](/docs/nl/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Een standaardinterface voor fungibele tokens op EVM-compatibele blockchains. Tokens die van Ethereum naar Mezo zijn gebridged, worden weergegeven als mERC-20-tokens (bijv. mUSDC, mUSDT). Zie [Bridges](/docs/nl/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine. De runtimeomgeving voor smart contracts op Ethereum-compatibele blockchains. Mezo is EVM-compatibel, wat betekent dat ontwikkelaars Solidity-contracten kunnen deployen met vertrouwde tools zoals Hardhat en Foundry. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## EVM-wallet

Een Ethereum-compatibele wallet (bijv. MetaMask, Rabby) waarmee je met de EVM-laag van Mezo werkt. EVM-wallets gebruik je voor interacties met dApps, swaps en het beheren van posities op Mezo. Zie [Je wallet verbinden](/docs/nl/docs/users/getting-started/connect).

## Faucet

Een dienst die kleine hoeveelheden testnet-tokens uitdeelt voor ontwikkeldoeleinden. De testnet-faucet van Mezo levert test-BTC voor het deployen en testen van dApps op Mezo Testnet.

## Gascompensatie

Een terugbetaling van 200 MUSD aan degene die een [liquidatie](#liquidatie)functie aanroept, samen met 0,5% van het geliquideerde onderpand. Zo blijven liquidaties winstgevend voor de aanroeper, ook bij hoge netwerkactiviteit. De 200 MUSD wordt ingehouden wanneer een lening wordt geopend en teruggegeven wanneer de lening op de normale manier wordt gesloten. Zie [MUSD-architectuur](/docs/nl/docs/users/borrow/architecture-and-terminology).

## Gauge

Een smart contract dat beloningen ontvangt en verdeelt op basis van stemmen. Hoe meer stemgewicht een gauge krijgt, hoe groter zijn aandeel in de MEZO-emissies van die epoch. Soorten gauges zijn onder meer [staking-gauges](#staking-gauge), [veBTC-boostgauges](#vebtc-boostgauge) en [niet-staking-gauges](#niet-staking-gauge) zoals [MEZO Gauges](#mezo-gauge). Zie [Woordenlijst van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview/glossary).

## Globaal rentetarief

Eén rentetarief, vastgesteld door governance, dat geldt voor alle nieuw geopende MUSD-leningen. Zodra een lening is geopend, behoudt die het tarief waartegen ze is aangemaakt, ook als het globale tarief verandert. Gebruikers kunnen [herfinancieren](#herfinanciering) om het actuele globale tarief over te nemen. Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## Governance

Het systeem waarmee veBTC-houders de protocolparameters en emissies vormgeven. veMEZO boost de stemkracht, maar heeft geen eigen bestuursrechten. Zie [Governance](/docs/nl/docs/users/mezo/governance).

## Halveringsschema

Het op Bitcoin geïnspireerde model dat de MEZO-emissies bepaalt. Het emissiepercentage halveert ongeveer elke 2 jaar: 25% in jaar 0-2, 12,5% in jaar 2-4, 6,25% in jaar 4-8, en stabiliseert daarna blijvend op 2%. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Impermanent loss

Het mogelijke verlies dat een liquiditeitsverschaffer lijdt wanneer de prijsverhouding van de activa in de pool verandert, vergeleken met het simpelweg aanhouden van die activa. Dit is inherent aan pools op basis van een AMM en speelt sterker in [volatiele pools](#volatiele-pool).

## Incentives

Beloningen die op gauges worden geplaatst om stemmen aan te trekken. Protocollen of gebruikers storten incentives (in elk willekeurig ERC-20-token) om stemkracht naar specifieke gauges te trekken. Incentives vormen de [matchingmarkt](#matchingmarkt) tussen veBTC- en veMEZO-houders. Zie [Overzicht van stemmen](/docs/nl/docs/users/mezo-earn/vote).

## Liquidatie

Het gedwongen sluiten van een [Trove](#trove) met onvoldoende onderpand. Een Trove kan worden geliquideerd wanneer de [ICR](#collateralisatieratio-icr) onder 110% zakt. De liquidatiedrempel blijft ook tijdens [Recovery Mode](#recovery-mode) op 110%. De [Stability Pool](#stability-pool) neemt de schuld over en het geliquideerde onderpand wordt verdeeld onder de storters in de Stability Pool. Zie [MUSD-liquidaties en -inwisselingen](/docs/nl/docs/users/borrow/liquidation-mechanics).

## Liquiditeitspool

Een smart contract met reserves van twee tokens dat gedecentraliseerde handel mogelijk maakt. Gebruikers storten activa in een pool om liquiditeitsverschaffer te worden en handelsvergoedingen te verdienen. Zie [Overzicht van Mezo Pools](/docs/nl/docs/users/mezo-earn/pools).

## Vergrendeling

Het vastzetten van BTC of MEZO voor een bepaalde periode om [veBTC](#vebtc) of [veMEZO](#vemezo) te ontvangen. Langere vergrendelingen geven een hoger aanvankelijk stemgewicht. veBTC-vergrendelingen lopen van 1 tot 28 dagen; veMEZO-vergrendelingen van 1 week tot 4 jaar. Zie [Overzicht van veBTC](/docs/nl/docs/users/mezo-earn/lock/vebtc) en [Overzicht van veMEZO](/docs/nl/docs/users/mezo-earn/lock/vemezo).

## LP-token

Liquidity Provider-token. Een ERC-20-token dat je ontvangt wanneer je activa in een [liquiditeitspool](#liquiditeitspool) stort. LP-tokens vertegenwoordigen je evenredige aandeel in de reserves van de pool en geven je recht op een deel van de handelsvergoedingen. Zie [Overzicht van Mezo Pools](/docs/nl/docs/users/mezo-earn/pools).

## Mainnet

Het productienetwerk waarop echte activa en transacties worden verwerkt. Mezo Mainnet heeft chain-ID `31612` en gebruikt BTC voor gas. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## Matchingmarkt

Het economische mechanisme waarbij veBTC-houders veMEZO-stemmen kunnen aantrekken door [incentives](#incentives) op hun boostgauges te plaatsen, en veMEZO-houders rendement kunnen verdienen door te stemmen op gauges met aantrekkelijke incentives. Zie [Matchingmarkt](/docs/nl/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Het native token van Mezo, waarmee je stemkracht boost en invloed uitoefent op waar protocolvergoedingen en incentives naartoe gaan. MEZO kan worden vergrendeld als [veMEZO](#vemezo) om het stemgewicht van veBTC tot 5x te vermenigvuldigen en rebasebeloningen te verdienen. De totale genesisvoorraad bedraagt 1.000.000.000 MEZO. Zie [Overzicht van MEZO](/docs/nl/docs/users/mezo).

## Mezo App

De belangrijkste webinterface op [mezo.org](https://mezo.org) om met het Mezo-netwerk te werken. Vanuit de Mezo App kunnen gebruikers activa storten, bridgen, MUSD lenen, liquiditeit verschaffen, tokens vergrendelen en op gauges stemmen.

## Mezo Borrow

De functie in de Mezo App waarmee gebruikers BTC als onderpand kunnen storten en daartegen [MUSD](#musd) kunnen lenen. Elke leenpositie heet een [Trove](#trove). Zie [MUSD lenen en minten](/docs/nl/docs/users/borrow/mint-musd).

## Mezo Bridge

De native bridge voor het storten en opnemen van activa tussen Mezo en Ethereum of Bitcoin. Ondersteunt BTC, tBTC en mERC-20-tokens. Zie [Bridges](/docs/nl/docs/users/mainnet/bridges).

## Mezo Earn

Het complete systeem voor verdienen en governance op Mezo, met vergrendelen ([veBTC](#vebtc), [veMEZO](#vemezo)), stemmen op [gauges](#gauge), liquiditeit verschaffen in [pools](#liquiditeitspool) en storten in [kluizen](#musd-savings-vault). Zie [Overzicht van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview).

## MEZO-gauge

Een [niet-staking-gauge](#niet-staking-gauge) waarop veMEZO-houders stemmen om MEZO-emissies naar MUSD-liquiditeitspools buiten Mezo te sturen: Curve en Uniswap op Ethereum, en Aerodrome op Base. Wordt gefinancierd uit de niet-staking-tak van de emissies (momenteel 8% van de wekelijkse emissiebeloningen). Zie [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

De marktplaats in de Mezo App voor tokenswaps. Gebruikt het [routercontract](#routercontract) om transacties via de beschikbare [liquiditeitspools](#liquiditeitspool) te routeren.

## Mezo Passport

Een ontwikkelaarspakket op basis van RainbowKit dat opties biedt om zowel Bitcoin- als EVM-wallets te verbinden. Mezo Passport integreert met viem en wagmi voor gestroomlijnd walletbeheer. Zie [Mezo Passport configureren](/docs/nl/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

Het liquiditeitspoolsysteem op Mezo, dat fungeert als geautomatiseerde onchain liquiditeitsreserves voor tokenswaps. Pools gebruiken een AMM in Aerodrome-stijl en zijn er in twee soorten: [volatiel](#volatiele-pool) en [stabiel](#stabiele-pool). Zie [Overzicht van Mezo Pools](/docs/nl/docs/users/mezo-earn/pools).

## Minimale collateralisatieratio (MCR)

De minimale onderpandratio die voor een [Trove](#trove) vereist is, vastgesteld op 110%. Zakt de [ICR](#collateralisatieratio-icr) van een Trove onder de MCR, dan komt die in aanmerking voor [liquidatie](#liquidatie). Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## MUSD

De door Bitcoin gedekte stablecoin van Mezo, gekoppeld aan \$1 USD. Gebruikers lenen MUSD door BTC als onderpand in een [Trove](#trove) te storten. De koppeling wordt in stand gehouden via [inwisselingen](#inwisseling) en de [Stability Pool](#stability-pool). Zie [Overzicht van MUSD](/docs/nl/docs/users/borrow).

## MUSD Bridge

De cross-chain bridge voor het overzetten van MUSD tussen Mezo en Ethereum, aangedreven door het [Native Token Transfer (NTT)](#wormhole-ntt)-protocol van Wormhole. Zie [MUSD Bridge](/docs/nl/docs/users/borrow/musd-bridge).

## MUSD Savings Rate gauge

Een [staking-gauge](#staking-gauge) voor de [MUSD Savings Vault](#musd-savings-vault). Gebruikers die MUSD in de spaarkluis storten, kunnen hun sMUSD-ontvangsttokens staken om MEZO-emissies te verdienen, terwijl veBTC-stemmers op deze gauge MUSD-rendement uit protocolvergoedingen verdienen. Zie [Kluizen](/docs/nl/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Het native spaarproduct van Mezo voor MUSD-houders. Stort MUSD om een deel te verdienen van de protocolvergoedingen die door leenactiviteit worden gegenereerd (rente, uitgiftekosten, herfinancieringskosten). Je ontvangt sMUSD als ontvangsttoken dat jouw aandeel vertegenwoordigt. Zie [Kluizen](/docs/nl/docs/users/mezo-earn/vaults).

## Niet-staking-gauge

Een [gauge](#gauge) zonder stakingtoken, waarop met veMEZO wordt gestemd. In plaats van stakers op Mezo te betalen, worden de emissies naar een bestemming gestuurd die de gauge zelf aanwijst: bij [MEZO Gauges](#mezo-gauge) is dat een liquiditeitspool op een andere chain. Stemmen op zo'n gauge staat los van het stemmen op veBTC-gauges en van [boost](#boost)matching. Zie [MEZO Gauges](/docs/nl/docs/users/mezo-earn/vote/mezo-gauges).

## Node

Een computer die de Mezo-chainclient (mezod) draait en deelneemt aan het netwerk. Soorten nodes zijn onder meer [validator](#validator)nodes (consensus en blokproductie), RPC-nodes (API-endpoints voor dApps) en seed nodes (bootstrapping van het netwerk). Zie [Validator Kit](/docs/nl/docs/developers/mezo-nodes/validator-kit).

## Orakel

Een dienst die externe gegevens (zoals prijzen van activa) onchain aan smart contracts levert. Mezo gebruikt Skip Connect als primair orakel, rechtstreeks geïntegreerd in validatornodes. Orakels van derden, waaronder Pyth, Stork en Supra, zijn ook beschikbaar. Zie [Orakelinfrastructuur](/docs/nl/docs/developers/architecture/oracles).

## Afsluitkosten

Eenmalige kosten die in rekening worden gebracht wanneer je MUSD leent, berekend als 0,1% van het geleende bedrag. De kosten worden bij de hoofdsom van de lening opgeteld en er wordt rente over berekend. Bij [herfinanciering](#herfinanciering) worden afsluitkosten voor herfinanciering in rekening gebracht (een fractie van de gewone kosten). Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value. Een contract dat de vergoedingen beheert die worden geïnd bij het lenen en herfinancieren van MUSD. De vergoedingen worden verdeeld tussen het aflossen van de bootstraplening en het gaugesysteem. Zodra de bootstraplening is afgelost, worden de vergoedingen opgebouwd als liquiditeit in eigendom van het protocol in de [Stability Pool](#stability-pool). Zie [MUSD-architectuur](/docs/nl/docs/users/borrow/architecture-and-terminology).

## Poke

Een transactie die het geboost gewicht van een veBTC-positie ververst. Vereist na wijzigingen in veMEZO-stemmen, verlengingen van een vergrendeling of het toevoegen van BTC. Zonder poke worden boostwijzigingen niet van kracht. Zie [Woordenlijst van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview/glossary).

## Poolfactory

Het smart contract dat nieuwe liquiditeitspools op Mezo deployt. Wordt momenteel beheerd door het Mezo-team; het plan is om het aanmaken van pools in de toekomst permissionless te maken. Mainnet-adres: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Zie [Mezo Pools (ontwikkelaars)](/docs/nl/docs/developers/features/mezo-pools).

## Portal Bridge

De gebruikersinterface op [portalbridge.com](https://portalbridge.com/) voor het bridgen van MUSD tussen Mezo en Ethereum via het Wormhole NTT-protocol. Zie [MUSD Bridge](/docs/nl/docs/users/borrow/musd-bridge).

## Prijsfeed

Onchain gegevens van [orakels](#orakel) die de actuele marktprijs van activa doorgeven. Mezo gebruikt Skip Connect om tijdens de blokconsensus de prijzen van activa te bepalen en die naar de onchain state te schrijven. Zie [Orakelinfrastructuur](/docs/nl/docs/developers/architecture/oracles).

## Rebase

Uitkeringen tegen verwatering aan veMEZO-houders uit de wekelijkse MEZO-emissies. Wanneer de vergrendelingsratio (veMEZO-voorraad / totale MEZO-voorraad) laag is, gaat een groter deel van de emissies naar rebases, wat vroege vergrendelaars tegen verwatering beschermt. Naarmate er meer MEZO wordt vergrendeld, krimpt het rebasedeel. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Recovery Mode

Een tijdelijke veiligheidstoestand (herstelmodus) die wordt geactiveerd wanneer de systeembrede Total Collateralization Ratio (TCR) onder de [CCR](#kritieke-collateralisatieratio-ccr) van 150% zakt. Tijdens Recovery Mode blijft de liquidatiedrempel op 110% (anders dan bij Liquity v1 breidt MUSD de liquidaties tijdens Recovery Mode niet uit). Er kunnen dan echter geen nieuwe leningen onder 150% worden geopend en herfinanciering is geblokkeerd. Zie [MUSD-liquidaties en -inwisselingen](/docs/nl/docs/users/borrow/liquidation-mechanics).

## Inwisseling

Het rechtstreeks bij het protocol omwisselen van MUSD voor BTC met een gelijkwaardige dollarwaarde. Elke MUSD-houder kan inwisselen, ongeacht of die een lener is. Inwisselingen richten zich eerst op de [Trove](#trove) met de laagste collateralisatieratio. Dit mechanisme helpt de koppeling van MUSD op \$1 te houden. Zie [MUSD-liquidaties en -inwisselingen](/docs/nl/docs/users/borrow/liquidation-mechanics).

## Herfinanciering

Het proces waarbij het rentetarief van een lening wordt bijgewerkt naar het actuele [globale rentetarief](#globaal-rentetarief). Voor herfinanciering betaal je verlaagde afsluitkosten, maar je hoeft je lening niet te sluiten en opnieuw te openen. Je kunt ook herfinancieren om je kredietlijn te verruimen als BTC in waarde is gestegen. Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## Routercontract

Het smart contract dat tokenswaps via de beschikbare [liquiditeitspools](#liquiditeitspool) op Mezo routeert. Gebruikers keuren tokens goed voor de router en roepen swapfuncties aan met de gewenste parameters. Mainnet-adres: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Zie [Mezo Pools (ontwikkelaars)](/docs/nl/docs/developers/features/mezo-pools).

## RPC-endpoint

Een netwerk-URL die applicaties gebruiken om met de Mezo-blockchain te communiceren. RPC-endpoints ondersteunen de standaard JSON-RPC-methoden van Ethereum. Voor mainnet zijn meerdere providers beschikbaar, waaronder Boar, Imperator, Validation Cloud en dRPC. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## RPC-provider

Een dienst die [RPC-endpoints](#rpc-endpoint) voor het Mezo-netwerk beheert. Providers zoals Boar, Imperator, Validation Cloud en dRPC bieden voor mainnet zowel HTTPS- als WebSocket-verbindingen. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## Slippage

Het verschil tussen de verwachte prijs van een transactie en de werkelijke uitvoeringsprijs. Slippage is hoger in pools met minder liquiditeit of bij grotere transacties. [Stabiele pools](#stabiele-pool) zijn ontworpen om slippage voor gecorreleerde activaparen zo klein mogelijk te houden.

## Splitter

Een contract dat MEZO-emissies over twee bestemmingen verdeelt. De verdeelverhoudingen staan momenteel vast en zijn via governance vergrendeld. Zie [Chain Splitter](#chain-splitter) en [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Een reserve van MUSD die de eerste verdedigingslinie tegen [liquidaties](#liquidatie) vormt. Gebruikers storten MUSD in de Stability Pool en ontvangen in ruil daarvoor een deel van het geliquideerde onderpand. Het [PCV](#pcv)-contract vult de pool aan met een eerste storting van 100 miljoen MUSD. Zie [Belangrijkste concepten van MUSD](/docs/nl/docs/users/borrow/concepts).

## Stabiele pool

Een [liquiditeitspool](#liquiditeitspool) die is geoptimaliseerd voor handel tussen activa met sterk gecorreleerde waarden, zoals MUSD en USDC. Stabiele pools gebruiken een gespecialiseerde formule die voor veel minder [slippage](#slippage) zorgt, en rekenen een handelsvergoeding van 0,02%. Zie [Poolkosten](/docs/nl/docs/users/mezo-earn/pools/pools-fees).

## Staking-gauge

Een [gauge](#gauge) die gekoppeld is aan een stakingtoken (zoals LP-tokens of sMUSD-ontvangsttokens). Stakers verdienen MEZO-emissies; veBTC-stemmers op de gauge verdienen handelsvergoedingen of protocolinkomsten. Staking-gauges ontvangen ongeveer 72% van de netto-emissies. Zie [Woordenlijst van Mezo Earn](/docs/nl/docs/users/mezo-earn/overview/glossary).

## Subgraph

Een geïndexeerde, doorzoekbare gegevenslaag voor blockchaingegevens, toegankelijk via GraphQL-API's. Mezo gebruikt Goldsky voor het deployen van subgraphs, zodat dApps efficiënt onchain gegevens kunnen opvragen, zoals transfers, poolactiviteit en de protocolstatus. Zie [Subgraphs deployen](/docs/nl/docs/developers/subgraphs).

## Swapvergoedingen

Vergoedingen die bij elke tokenswap in een [liquiditeitspool](#liquiditeitspool) in rekening worden gebracht. Volatiele pools rekenen 0,30% en stabiele pools 0,02%. De vergoedingen worden geïnd in het inputtoken en bewaard in een apart PoolFees-contract, waar liquiditeitsverschaffers ze kunnen claimen. Zie [Poolkosten](/docs/nl/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Een gedecentraliseerde Bitcoin-wrapper, gebouwd door Thesis en aangedreven door het [Threshold Network](#threshold-network). tBTC is 1:1 gedekt door native Bitcoin en is de vorm die BTC aanneemt wanneer het naar Ethereum-compatibele netwerken wordt gebridged. Op Mezo wordt gestorte BTC via de bewaarinfrastructuur van tBTC geleid. Zie [MUSD-architectuur](/docs/nl/docs/users/borrow/architecture-and-terminology).

## Staartemissies

Het blijvende jaarlijkse MEZO-emissiepercentage van 2% dat begint na jaar 8 van het [halveringsschema](#halveringsschema). Staartemissies zorgen voor onbeperkt doorlopende incentives voor validators, liquiditeitsverschaffers en deelnemers aan governance. Zie [Emissieschema](/docs/nl/docs/users/mezo/emissions).

## Testnet

Een testnetwerk waarop ontwikkelaars applicaties kunnen deployen en testen zonder echte activa te gebruiken. Mezo Testnet heeft chain-ID `31611`. Zie [Je omgeving configureren](/docs/nl/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event. Het moment waarop MEZO-tokens voor het eerst werden aangemaakt en verdeeld. De allocaties voor de community en de Foundation werden bij de TGE ontgrendeld, terwijl voor de allocaties van het team en de investeerders een cliff van 1 jaar en een lineaire vesting van 3 jaar gelden. Zie [Tokenverdeling](/docs/nl/docs/users/mezo/token-distribution).

## Threshold Network

Een gedecentraliseerd netwerk dat de [tBTC](#tbtc)-bridge aandrijft. Threshold beheert een gedecentraliseerde groep ondertekenaars die sinds begin 2020 meer dan 28.000 Bitcoin heeft gebridged. Zie [MUSD-architectuur](/docs/nl/docs/users/borrow/architecture-and-terminology).

## Tokenverdeling

De verdeling van de genesisvoorraad van 1.000.000.000 MEZO: community (40%), investeerders en partners (30%), team (20%) en Foundation (10%). Alle vesting is binnen 36 maanden na de [TGE](#tge) voltooid. Zie [Tokenverdeling](/docs/nl/docs/users/mezo/token-distribution).

## Handelsvergoedingen

Zie [Swapvergoedingen](#swapvergoedingen).

## Trove

Een gedekte schuldpositie op Mezo, gekoppeld aan één Ethereum-adres. Gebruikers openen een Trove door BTC te storten en daartegen [MUSD](#musd) te lenen. In vergelijkbare protocollen ook wel een "CDP" genoemd. Zie [MUSD lenen en minten](/docs/nl/docs/users/borrow/mint-musd).

## Validator

Een node-operator die deelneemt aan de consensus en blokproductie op het Mezo-netwerk. Validators draaien de mezod-client, beveiligen de chain en ontvangen MEZO-emissies via de Chain Splitter. Zie [Mezo-validators](/docs/nl/docs/developers/mezo-nodes/validators).

## Validator Kit

Een uitgebreide toolkit voor het deployen en beheren van Mezo-nodes. Ondersteunt Docker, een native daemon, Kubernetes en clouddeployment. Bevat configuratiesjablonen, monitoring en automatiseringsscripts. Zie [Handleiding voor de Validator Kit](/docs/nl/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC. Een NFT die vergrendelde Bitcoin vertegenwoordigt en stemkracht en het recht op vergoedingen in Mezo Earn geeft. Het stemgewicht neemt lineair af gedurende de vergrendelingsperiode. De maximale vergrendeling is 28 dagen. Zie [Overzicht van veBTC](/docs/nl/docs/users/mezo-earn/lock/vebtc).

## veBTC-boostgauge

Een [gauge](#gauge) die gekoppeld is aan een specifieke veBTC-NFT. veMEZO-houders stemmen op deze gauges om die veBTC-positie een [boost](#boost) te geven in ruil voor [incentives](#incentives). Zie [Matchingmarkt](/docs/nl/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO. Een NFT die vergrendelde MEZO-tokens vertegenwoordigt. Hiermee kun je de stemkracht van veBTC tot 5x [boosten](#boost), en het stemt zelfstandig op [veBTC-boostgauges](#vebtc-boostgauge) en [MEZO Gauges](#mezo-gauge). Het heeft zelf geen governancegewicht en kan zonder veBTC niet stemmen op [staking-gauges](#staking-gauge). De maximale vergrendeling is 4 jaar. Zie [Overzicht van veMEZO](/docs/nl/docs/users/mezo-earn/lock/vemezo).

## Vestingschema

De tijdlijn waarlangs vergrendelde tokenallocaties geleidelijk beschikbaar komen. Alle MEZO-vesting is binnen 36 maanden na de [TGE](#tge) voltooid. Voor de allocaties van het team en de investeerders geldt een [cliff](#cliff) van 1 jaar, gevolgd door een lineaire maandelijkse ontgrendeling over 2 jaar. Zie [Tokenverdeling](/docs/nl/docs/users/mezo/token-distribution).

## Volatiele pool

Een [liquiditeitspool](#liquiditeitspool) voor activaparen met niet-gecorreleerde prijzen, zoals BTC en MUSD. Volatiele pools gebruiken een constant-product-formule (x * y = k) en rekenen een [swapvergoeding](#swapvergoedingen) van 0,30%. Zie [Poolkosten](/docs/nl/docs/users/mezo-earn/pools/pools-fees).

## Stemgewicht

De invloed die een positie heeft bij het stemmen op gauges. Voor veBTC wordt dit berekend als de vergrendelde BTC vermenigvuldigd met de resterende vergrendelingsduur, gedeeld door de maximale vergrendelingsduur (28 dagen). Voor veMEZO geldt dezelfde formule, maar met een maximale vergrendeling van 4 jaar. Zie [Overzicht van stemmen](/docs/nl/docs/users/mezo-earn/vote).

## Wormhole

Een cross-chain berichtenprotocol dat de [MUSD Bridge](#musd-bridge) aandrijft. Wormhole maakt veilige tokenoverdrachten tussen Mezo en Ethereum mogelijk. Zie [MUSD Bridge](/docs/nl/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. Het specifieke Wormhole-protocol dat voor de [MUSD Bridge](#musd-bridge) wordt gebruikt. NTT behoudt de fungibiliteit van tokens door ze op de bronchain te vergrendelen en op de doelchain te minten, waardoor de totale voorraad over alle chains gelijk blijft. Zie [MUSD Bridge](/docs/nl/docs/users/borrow/musd-bridge).
