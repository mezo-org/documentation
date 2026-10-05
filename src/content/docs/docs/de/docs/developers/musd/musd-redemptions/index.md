---
title: MUSD-Einlösungen
topic: developers
---

# So lösen Sie MUSD auf Mezo ein

## Kurzüberblick
Beim Einlösen verbrennen Sie 1 MUSD und erhalten dafür `$1` in BTC (abzüglich einer Einlösungsgebühr von 0,75 % und der Gasgebühren). Das System löst zuerst beim Trove mit der niedrigsten Besicherungsquote über 110 % ein. Übersteigt der MUSD-Betrag einen einzelnen Trove, wird die Einlösung in aufsteigender Reihenfolge der Besicherungsquote fortgesetzt.

Troves mit einer Besicherungsquote unter 110 % können liquidiert werden; gegen sie kann nicht eingelöst werden.

---

## Voraussetzungen

Prüfen Sie vor dem Start Folgendes:

1. **Das System nimmt Einlösungen an**: Gehen Sie zu TroveManager → „Read as Proxy“ → rufen Sie `getTCR()` mit dem aktuellen BTC-Preis auf. Der Wert muss ≥ `1100000000000000000` (110 %) sein.
2. **Sie besitzen MUSD**: Prüfen Sie Ihr Guthaben im MUSD-Token-Contract
3. **Aktuellen BTC-Preis abrufen**: Gehen Sie zu PriceFeed → „Read as Proxy“ → rufen Sie `fetchPrice()` auf
4. **Korrekte Contract-Adressen ermitteln**: Die Contract-Adressen für Mainnet und Testnet finden Sie am Ende dieser Seite.

---

## Schritt-für-Schritt-Anleitung

### 1. TroveManager-Contract aufrufen
Öffnen Sie den TroveManager-Contract in Ihrem Block-Explorer und klicken Sie auf die Registerkarte **„Write as Proxy“**.

### 2. Funktion 11 suchen: `redeemCollateral`

Sie sehen 6 Eingabefelder. So füllen Sie sie aus:

---

## Option A: Schnell und einfach (höhere Gaskosten)

Verwenden Sie diese Option, wenn Sie schnell einlösen möchten, ohne Hints zu berechnen.

- `_amount`: [Ihr Betrag in Wei – siehe Umrechnung unten]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [Ihre Wallet-Adresse]   
- `_lowerPartialRedemptionHint`: [Ihre Wallet-Adresse]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**Umrechnung von MUSD in Wei:**
- 100 MUSD = `100000000000000000000`
- 5.005 MUSD = `5005000000000000000000`

**Formel**: Ihr Betrag × 1000000000000000000

---

## Option B: Mit Hints (niedrigere Gaskosten)

Verwenden Sie diese Option, um Gaskosten zu sparen.

### Schritt 1: Einlösungs-Hints abrufen

Gehen Sie zu HintHelpers → „Read as Proxy“ → `getRedemptionHints()`

Füllen Sie aus:
- `_amount`: Ihr Betrag in Wei (wie oben)
- `_price`: Aktueller BTC-Preis aus PriceFeed
- `_maxIterations`: 50

Kopieren Sie die zurückgegebenen Werte:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Schritt 2: Positions-Hints abrufen

Gehen Sie zu SortedTroves → „Read as Proxy“ → `findInsertPosition()`

Füllen Sie aus:
- `_NICR`: Verwenden Sie `partialRedemptionHintNICR` aus Schritt 1
- `_prevId`: Ihre Wallet-Adresse
- `_nextId`: Ihre Wallet-Adresse

Kopieren Sie die zurückgegebenen Werte:
- `upperHint`
- `lowerHint`

### Schritt 3: redeemCollateral aufrufen

Gehen Sie zurück zu TroveManager → „Write as Proxy“ → `redeemCollateral`

- `_amount`: [Ihr Betrag in Wei]
- `_firstRedemptionHint`: [aus Schritt 1]
- `_upperPartialRedemptionHint`: [upperHint aus Schritt 2]
- `_lowerPartialRedemptionHint`: [lowerHint aus Schritt 2]
- `_partialRedemptionHintNICR`: [aus Schritt 1]
- `_maxIterations`: 50

---

## Was Sie erhalten

**Beispiel: Einlösung von 100 MUSD**
- Sie verbrennen: 100 MUSD
- Sie erhalten: BTC im Wert von `$99.25` (die Gebühr von 0,75 % geht an das Protokoll)

**Formel**: (Ihr MUSD-Betrag ÷ BTC-Preis) × 0,9925 = erhaltene BTC

---

## Häufige Probleme

**„Cannot redeem when TCR < MCR“**
→ Die TCR des Systems liegt unter 110 %. Warten Sie, bis sie sich erholt.

**„Unable to redeem any amount“**
→ Dafür kann es mehrere Gründe geben:
- Es sind keine Troves mit einer Besicherungsquote über 110 % verfügbar
- Die Hints sind veraltet (insbesondere der NICR-Hint)
- Durch den Einlösungsbetrag würde der Ziel-Trove unter die Mindestschuld von 1.800 MUSD fallen
- Die maximale Anzahl an Iterationen ist für die Einlösungsgröße zu niedrig angesetzt

**Der Transaktion geht das Gas aus**
→ Senken Sie `_maxIterations` auf 10 oder teilen Sie die Einlösung in kleinere Einlösungen auf.

**Die Transaktion wird unerwartet zurückgesetzt (Revert)**
→ Rufen Sie neue Hints ab und versuchen Sie es erneut. Möglicherweise hat jemand vor Ihnen eingelöst.

**Weniger erhalten als erwartet**
→ Prüfen Sie das Event `Redemption` in Ihrer Transaktion. Möglicherweise wurde ein Teil der MUSD zurückgegeben, weil der letzte Trove sonst unter das Minimum von 1.800 MUSD gefallen wäre.

---

## Tipps

- **Generieren Sie die Hints unmittelbar vor dem Einlösen** – sie veralten, wenn jemand anderes zuerst einlöst
- **Verwenden Sie Option A für kleine Beträge** (< `$10,000`) – die höheren Gaskosten fallen kaum ins Gewicht
- **Verwenden Sie Option B für große Beträge** – spart bei großen Einlösungen erheblich Gas
- **Legen Sie für größere Einlösungen einen höheren maxIterations-Wert fest**:
  - Klein (< 10 Troves): 10
  - Mittel (10–30 Troves): 50
  - Groß (30+ Troves): 100

---

## Contract-Adressen

| Contract | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| MUSD-Token | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Alle Adressen sind Proxy-Contracts. Verwenden Sie immer die Registerkarten „Read as Proxy“ bzw. „Write as Proxy“.

---

## Brauchen Sie Hilfe?

- Prüfen Sie Ihre Transaktion im Block-Explorer, um Events und Fehlermeldungen einzusehen
- Treten Sie unserem Discord bei und eröffnen Sie ein Ticket: https://discord.com/invite/mezo
