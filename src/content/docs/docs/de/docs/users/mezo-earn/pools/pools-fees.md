---
title: Pool-Gebühren
description: Gebührenmodell von Mezo Pools
topic: users
---

## Gebühren

[Mezo Pools](https://mezo.org/explore/pools) verwendet ein dynamisches Gebührenmodell, das für unterschiedliche Handelspaare optimiert ist:

### Standardgebührensätze

- **Volatile Pools**: 0,30 %
- **Stabile Pools**: 0,02 %

### Individuelle Pool-Gebühren

Für einige Pools können per Governance individuelle Gebührensätze festgelegt werden. Diese Sondersätze gelten typischerweise für:

- **Pools strategischer Partnerschaften**
- **Werbe-Pools während Startphasen**
- **Institutionelle Handelspaare mit hohem Volumen**

### So werden Gebühren eingezogen

Wenn ein Trader einen Swap über einen Mezo Pool ausführt:

1. **Gebührenabzug**: Die Gebühr wird automatisch vom Betrag des Eingabe-Tokens abgezogen.
   - Beispiel: Beim Swap von 1.000 MUSD in einem stabilen Pool werden 0,2 MUSD als Gebühr abgezogen.
2. **Sofortige Trennung**: Eingezogene Gebühren werden sofort an einen eigenen PoolFees-Contract übertragen.
   - Gebühren werden nie mit den Kern-Liquiditätsreserven des Pools vermischt

### In welchen Token werden Gebühren gezahlt?

Gebühren werden bei jedem Swap immer in dem Token eingezogen, der verkauft wird (Eingabe-Token). Als LP verdienen Sie Gebühren in beiden Token des Paares:

- Wenn Trader Token A → Token B swappen, werden die Gebühren in Token A eingezogen
- Wenn Trader Token B → Token A swappen, werden die Gebühren in Token B eingezogen
- Sie sammeln Gebühren in beiden Token entsprechend Ihrem Pool-Anteil an und können sie beanspruchen

Beispiel: In einem MUSD/tBTC-Pool:

- Ein Trader swappt MUSD → BTC: MUSD wird als Gebühr eingezogen (für alle LPs)
- Ein Trader swappt BTC → MUSD: BTC wird als Gebühr eingezogen (für alle LPs)
- Als LP verdienen Sie einen Anteil sowohl an den MUSD- als auch an den BTC-Gebühren

### Ihre Gebühren beanspruchen

1. Navigieren Sie in der Oberfläche von Mezo Pools zu Ihrer Position
2. Klicken Sie auf „Claim Fees“
3. Bestätigen Sie die Transaktion
4. Die Gebühren werden direkt an Ihre Wallet gesendet

### Beispiele zur Gebührenberechnung

#### Beispiel 1: Volatiler Pool (BTC/MUSD)

- **Tagesvolumen**: 1.000.000 $
- **Gebührensatz**: 0,30 %
- **Täglich erzeugte Gebühren**: 3.000 $
- **Ihr Anteil**: 5 % des Pools
- **Ihre täglichen Gebühren**: ~150 $

#### Beispiel 2: Stabiler Pool (MUSD/USDC)

- **Tagesvolumen**: 5.000.000 $
- **Gebührensatz**: 0,02 %
- **Täglich erzeugte Gebühren**: 1.000 $
- **Ihr Anteil**: 2 % des Pools
- **Ihre täglichen Gebühren**: ~20 $

### FAQ

#### In welcher Währung bzw. in welchem Token werden Gebühren gezahlt?
Gebühren werden im Eingabe-Token des jeweiligen Swaps gezahlt (dem Token, der verkauft wird). In einem USDC/MEZO-Pool erzeugen Swaps von USDC → MEZO Gebühren in USDC, während Swaps von MEZO → USDC Gebühren in MEZO erzeugen. Als LP sammeln Sie Gebühren in beiden Token an und beanspruchen sie.

#### Kann ich meine angesammelten Gebühren verlieren?
Nein. Gebühren werden separat in PoolFees-Contracts gespeichert und können nur von Inhabern der LP-Token beansprucht werden.

#### Werden Gebühren automatisch reinvestiert?
Nein. Sie müssen Gebühren manuell beanspruchen und erneut einzahlen, um einen Zinseszinseffekt zu erzielen.
