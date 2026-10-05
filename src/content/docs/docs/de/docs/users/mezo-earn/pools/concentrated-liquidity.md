---
title: Konzentrierte Liquidität
description: >-
  Stellen Sie Liquidität in selbst gewählten Preisspannen bereit, um mit weniger
  Kapital mehr Gebühren zu verdienen.
topic: users
---

Pools mit konzentrierter Liquidität (CL) ermöglichen es Ihnen, Liquidität innerhalb einer bestimmten Preisspanne statt über alle möglichen Preise hinweg einzuzahlen. Indem Sie Ihr Kapital dort bündeln, wo tatsächlich gehandelt wird, können Sie pro eingezahltem Dollar deutlich mehr Gebühren verdienen als in [Basis-Pools](/docs/de/docs/users/mezo-earn/pools).

## Wie sich konzentrierte Liquidität von Basis-Pools unterscheidet

In einem **Basis-Pool** wird Ihre Liquidität gleichmäßig über die gesamte Preiskurve von null bis unendlich verteilt. Das bedeutet, dass der Großteil Ihres Kapitals in Preisbereichen ungenutzt bleibt, in denen nie gehandelt wird.

In einem **Pool mit konzentrierter Liquidität** wählen Sie eine Preisspanne – zum Beispiel BTC zwischen 80.000 und 120.000 MUSD. Ihr gesamtes Kapital ist innerhalb dieser Spanne aktiv, was es wesentlich kapitaleffizienter macht. Der Nachteil: Bewegt sich der Preis aus Ihrer Spanne heraus, verdient Ihre Position keine Gebühren mehr, bis der Preis zurückkehrt.

| | Basis-Pools | CL-Pools |
|---|---|---|
| **Liquiditätsspanne** | Gesamte Preiskurve (0 bis unendlich) | Selbst festgelegte Preisspanne |
| **Kapitaleffizienz** | Geringer – der Großteil des Kapitals liegt brach | Höher – das gesamte Kapital ist innerhalb der Spanne aktiv |
| **Positionstyp** | Fungible LP-Token (ERC-20) | NFT-Positionen (ERC-721) |
| **Verwaltung** | Einrichten und vergessen | Erfordert Überwachung und Rebalancing |
| **Impermanent Loss** | Standard | Innerhalb der gewählten Spanne verstärkt |

## Aktive CL-Pools

| Pool | Typ | Tick-Abstand |
|---|---|---|
| BTC/MUSD-200 | Konzentriert, volatil | 200 |

Unter [Mezo Pools](https://mezo.org/explore/pools) finden Sie Live-Statistiken wie TVL, Volumen, Gebühren und APR.

## Tick-Abstand

CL-Pools verwenden den **Tick-Abstand** (Tick Spacing), um festzulegen, wie fein Sie Preisspannen einstellen können. Ein kleinerer Tick-Abstand erlaubt engere Spannen (mehr Präzision), ein größerer Tick-Abstand bedeutet breitere Mindestspannen.

Pools werden als **stabil** (Tick-Abstand unter 100) oder **volatil** (Tick-Abstand von 100 oder mehr) eingestuft – nach derselben Konvention wie bei Aerodrome.

| Tick-Abstand | Standardgebühr | Einstufung |
|---|---|---|
| 1 | 0,01 % | Stabil |
| 10 | 0,05 % | Stabil |
| 50 | 0,05 % | Stabil |
| 100 | 0,05 % | Volatil |
| 200 | 0,30 % | Volatil |
| 2.000 | 1,00 % | Volatil |

Der Pool BTC/MUSD-200 verwendet einen Tick-Abstand von 200 mit einer Swap-Gebühr von 0,30 %.

## Erste Schritte (demnächst verfügbar)

1. Rufen Sie [Mezo Pools](https://mezo.org/explore/pools) auf und wählen Sie den CL-Pool aus, für den Sie Liquidität bereitstellen möchten.
2. Wählen Sie Ihre Preisspanne – legen Sie den Mindest- und Höchstpreis fest, zwischen denen Ihre Liquidität aktiv ist.
3. Geben Sie die Menge jedes einzuzahlenden Tokens ein. Das Verhältnis hängt vom aktuellen Preis im Verhältnis zu Ihrer gewählten Spanne ab.
4. Prüfen und bestätigen Sie die Transaktion. Sie erhalten ein NFT, das Ihre Position repräsentiert.

### Eine Preisspanne wählen (demnächst verfügbar)

- **Breitere Spanne** – Verdient Gebühren beständiger, jedoch mit geringerer Kapitaleffizienz. Besser für einen passiven Ansatz.
- **Engere Spanne** – Verdient mehr Gebühren, solange der Preis in der Spanne liegt, erfordert aber aktive Überwachung und Rebalancing. Das Risiko, die Spanne zu verlassen, ist höher.
- **Der aktuelle Preis sollte innerhalb Ihrer Spanne liegen** – Liegt der aktuelle Preis außerhalb Ihrer Spanne, besteht Ihre Position vollständig aus einem Token und verdient keine Gebühren, bis der Preis in die Spanne zurückkehrt.

## Staking für Emissionen (demnächst verfügbar)

CL-Positionen können in Gauges gestakt werden, um zusätzlich zu den Handelsgebühren MEZO-Emissionen zu verdienen. Gestakte Positionen erhalten über den Mechanismus für Gebühren ungestakter Positionen einen größeren Anteil der Swap-Gebühren – dabei wird ein Teil der Gebühren ungestakter Positionen auf gestakte Positionen umgeleitet.

So staken Sie:

1. Navigieren Sie zu Ihrer CL-Position.
2. Klicken Sie auf **Stake**, um das NFT Ihrer Position in den Gauge einzuzahlen.
3. Verdienen Sie MEZO-Emissionen, solange Ihre Liquidität innerhalb der Spanne liegt.

Emissionen werden anteilig auf gestakte Liquidität innerhalb der Spanne verteilt. Verlässt Ihre Position die Spanne, verdienen Sie keine Emissionen mehr, bis der Preis zurückkehrt.

## Gebühren

Gebühren in CL-Pools funktionieren genauso wie in Basis-Pools – sie werden bei jedem Swap vom Eingabe-Token abgezogen und sammeln sich an, damit Liquiditätsanbieter sie beanspruchen können.

Der entscheidende Unterschied: In CL-Pools verdienen nur Positionen Gebühren, die zum Zeitpunkt des Swaps **innerhalb der Spanne** liegen. Positionen außerhalb der aktiven Preisspanne verdienen nichts, bis der Preis zurückkehrt.

Weitere Details zum Gebührenmodell finden Sie unter [Pool-Gebühren](/docs/de/docs/users/mezo-earn/pools/pools-fees).

## Risiken

### Impermanent Loss

Konzentrierte Liquidität **verstärkt** den Impermanent Loss im Vergleich zu Basis-Pools. Da Ihr Kapital in einer engen Spanne gebündelt ist, wirken sich Preisbewegungen innerhalb dieser Spanne stärker auf das Verhältnis der Token in Ihrer Position aus. Je enger Ihre Spanne, desto größer der mögliche Impermanent Loss.

### Risiko außerhalb der Spanne

Bewegt sich der Marktpreis aus Ihrer gewählten Spanne heraus, wird Ihre Position vollständig in einen Token umgewandelt und verdient keine Gebühren oder Emissionen mehr. Sie müssen dann entweder warten, bis der Preis zurückkehrt, oder Ihre Liquidität abheben und neu positionieren.

### Smart-Contract-Risiko

Wie bei allen Smart Contracts bleibt ein inhärentes Risiko bestehen. Prüfen Sie die Audits unter [mezo.org/audits](https://mezo.org/audits) und zahlen Sie nur Beträge ein, bei denen Sie sich wohlfühlen.
