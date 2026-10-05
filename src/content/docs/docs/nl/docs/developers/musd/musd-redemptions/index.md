---
title: MUSD-inwisselingen
topic: developers
---

# Zo wissel je MUSD in op Mezo

## Kort overzicht
Bij inwisselen verbrand je 1 MUSD om `$1` in BTC te ontvangen (min 0,75% inwisselingskosten en gaskosten). Het systeem wisselt in vanaf de Trove met de laagste onderpandratio boven 110%. Is het bedrag aan MUSD groter dan één Trove, dan gaat het inwisselen verder in oplopende volgorde van collateralisatieratio. 

Troves met een collateralisatieratio onder 110% komen in aanmerking voor liquidatie en er kan niet tegen worden ingewisseld.

---

## Vereisten

Controleer voordat je begint:

1. **Het systeem accepteert inwisselingen**: ga naar TroveManager → "Read as Proxy" → roep `getTCR()` aan met de actuele BTC-prijs. De uitkomst moet ≥ `1100000000000000000` (110%) zijn
2. **Je hebt MUSD**: controleer je saldo op het MUSD-tokencontract
3. **Haal de actuele BTC-prijs op**: ga naar PriceFeed → "Read as Proxy" → roep `fetchPrice()` aan
4. **Gebruik de juiste contractadressen**: onderaan vind je de contractadressen voor zowel Mainnet als Testnet.

---

## Stapsgewijze instructies

### 1. Ga naar het TroveManager-contract
Open het TroveManager-contract in je block explorer en klik op het tabblad **"Write as Proxy"**.

### 2. Zoek functie 11: `redeemCollateral`

Je ziet 6 invoervelden. Zo vul je ze in:

---

## Optie A: snel en eenvoudig (meer gas)

Gebruik deze optie als je snel wilt inwisselen zonder hints te berekenen.

- `_amount`: [je bedrag in wei; zie de omrekening hieronder]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [je walletadres]   
- `_lowerPartialRedemptionHint`: [je walletadres]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**MUSD omrekenen naar wei:**
- 100 MUSD = `100000000000000000000`
- 5.005 MUSD = `5005000000000000000000`

**Formule**: je bedrag × 1000000000000000000

---

## Optie B: met hints (minder gas)

Gebruik deze optie om op gaskosten te besparen.

### Stap 1: haal inwisselingshints op

Ga naar HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Vul in:
- `_amount`: je bedrag in wei (zoals hierboven)
- `_price`: de actuele BTC-prijs uit PriceFeed
- `_maxIterations`: 50

Kopieer de geretourneerde waarden:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Stap 2: haal positiehints op

Ga naar SortedTroves → "Read as Proxy" → `findInsertPosition()`

Vul in:
- `_NICR`: gebruik de `partialRedemptionHintNICR` uit stap 1
- `_prevId`: je walletadres
- `_nextId`: je walletadres

Kopieer de geretourneerde waarden:
- `upperHint`
- `lowerHint`

### Stap 3: roep redeemCollateral aan

Ga terug naar TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount`: [je bedrag in wei]
- `_firstRedemptionHint`: [uit stap 1]
- `_upperPartialRedemptionHint`: [upperHint uit stap 2]
- `_lowerPartialRedemptionHint`: [lowerHint uit stap 2]
- `_partialRedemptionHintNICR`: [uit stap 1]
- `_maxIterations`: 50

---

## Wat je ontvangt

**Voorbeeld: 100 MUSD inwisselen**
- Je verbrandt: 100 MUSD
- Je ontvangt: BTC ter waarde van `$99.25` (de kosten van 0,75% gaan naar het protocol)

**Formule**: (je MUSD-bedrag ÷ BTC-prijs) × 0,9925 = ontvangen BTC

---

## Veelvoorkomende problemen

**"Cannot redeem when TCR < MCR"**
→ De TCR van het systeem ligt onder 110%. Wacht tot die zich herstelt.

**"Unable to redeem any amount"**
→ Dit kan verschillende oorzaken hebben:
- Er zijn geen Troves beschikbaar met een onderpandratio boven 110%
- De hints zijn verouderd (met name de NICR-hint)
- Na de inwisseling zou de doel-Trove minder overhouden dan de minimale schuld van 1.800 MUSD
- Het maximale aantal iteraties is te laag ingesteld voor de omvang van de inwisseling

**De transactie heeft te weinig gas**
→ Verlaag `_maxIterations` naar 10 of splits de inwisseling op in kleinere inwisselingen.

**De transactie wordt onverwacht teruggedraaid**
→ Haal nieuwe hints op en probeer het opnieuw. Mogelijk heeft iemand anders vóór jou ingewisseld.

**Minder ontvangen dan verwacht**
→ Controleer het event `Redemption` in je transactie. Er kan MUSD zijn teruggegeven als de laatste Trove onder het minimum van 1.800 MUSD zou zakken.

---

## Tips

- **Genereer hints vlak voordat je inwisselt**: ze raken verouderd als iemand anders eerst inwisselt
- **Gebruik optie A voor kleine bedragen** (< `$10,000`): de hogere gaskosten zijn verwaarloosbaar
- **Gebruik optie B voor grote bedragen**: dit bespaart veel gas bij grote inwisselingen
- **Stel maxIterations hoger in voor grotere inwisselingen**:
  - Klein (< 10 Troves): 10
  - Middelgroot (10-30 Troves): 50
  - Groot (30+ Troves): 100

---

## Contractadressen

| Contract | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| MUSD-token | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Alle adressen zijn proxycontracten. Gebruik altijd de tabbladen "Read as Proxy" of "Write as Proxy".

---

## Hulp nodig?

- Bekijk je transactie in de block explorer om events en foutmeldingen te zien
- Word lid van onze Discord en open een ticket: https://discord.com/invite/mezo
