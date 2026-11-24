---
title: Poolkosten
description: Het kostenmodel van Mezo Pools
topic: users
---

## Kosten

[Mezo Pools](https://mezo.org/explore/pools) hanteert een dynamisch kostenmodel dat is geoptimaliseerd voor verschillende handelsparen:

### Standaardtarieven

- **Volatiele pools**: 0,30%
- **Stabiele pools**: 0,02%

### Aangepaste pooltarieven

Voor sommige pools kunnen via governance aangepaste tarieven zijn vastgesteld. Deze speciale tarieven gelden meestal voor:

- **Pools van strategische partnerschappen**
- **Promotiepools tijdens lanceringsperiodes**
- **Institutionele handelsparen met een hoog volume**

### Hoe kosten worden geïnd

Wanneer een handelaar een swap uitvoert via een Mezo Pool:

1. **Inhouding van de kosten**: de kosten worden automatisch ingehouden op het bedrag van het inputtoken.
   - Voorbeeld: bij een swap van 1.000 MUSD in een stabiele pool wordt 0,2 MUSD als kosten ingehouden.
2. **Directe afzondering**: de geïnde vergoedingen worden direct overgemaakt naar een speciaal PoolFees-contract.
   - De vergoedingen worden nooit vermengd met de kernliquiditeitsreserves van de pool

### In welke tokens worden de kosten betaald?

De kosten worden bij elke swap altijd geïnd in het token dat wordt verkocht (het inputtoken). Als LP verdien je vergoedingen in beide tokens van het paar:

- Swappen handelaren Token A → Token B, dan worden de vergoedingen geïnd in Token A
- Swappen handelaren Token B → Token A, dan worden de vergoedingen geïnd in Token B
- Je bouwt vergoedingen op in beide tokens en kunt ze claimen op basis van je aandeel in de pool

Voorbeeld in een MUSD/tBTC-pool:

- Een handelaar swapt MUSD → BTC: er wordt MUSD geïnd als vergoeding (voor alle LP's)
- Een handelaar swapt BTC → MUSD: er wordt BTC geïnd als vergoeding (voor alle LP's)
- Als LP verdien je een deel van zowel de MUSD- als de BTC-vergoedingen

### Je vergoedingen claimen

1. Ga naar je positie in de interface van Mezo Pools
2. Klik op "Claim Fees"
3. Bevestig de transactie
4. De vergoedingen worden rechtstreeks naar je wallet gestuurd

### Rekenvoorbeelden voor vergoedingen

#### Voorbeeld 1: volatiele pool (BTC/MUSD)

- **Dagvolume**: $1.000.000
- **Tarief**: 0,30%
- **Gegenereerde vergoedingen per dag**: $3.000
- **Jouw aandeel**: 5% van de pool
- **Jouw vergoedingen per dag**: ~$150

#### Voorbeeld 2: stabiele pool (MUSD/USDC)

- **Dagvolume**: $5.000.000
- **Tarief**: 0,02%
- **Gegenereerde vergoedingen per dag**: $1.000
- **Jouw aandeel**: 2% van de pool
- **Jouw vergoedingen per dag**: ~$20

### Veelgestelde vragen

#### In welke valuta of welk token worden de kosten betaald?
De kosten worden betaald in het inputtoken van elke swap (het token dat wordt verkocht). In een USDC/MEZO-pool leveren swaps van USDC → MEZO vergoedingen in USDC op, terwijl swaps van MEZO → USDC vergoedingen in MEZO opleveren. Als LP bouw je vergoedingen op in beide tokens en claim je ze ook in beide tokens.

#### Kan ik mijn opgebouwde vergoedingen kwijtraken?
Nee. Vergoedingen worden apart bewaard in PoolFees-contracten en kunnen alleen worden geclaimd door houders van LP-tokens.

#### Worden vergoedingen automatisch herbelegd?
Nee. Je moet de vergoedingen handmatig claimen en opnieuw storten om een samengesteld rendement te behalen.
