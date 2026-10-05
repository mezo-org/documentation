---
title: veBTC-Übersicht
description: BTC sperren und mit veBTC verdienen
topic: users
---

veBTC ist die tokenisierte Darstellung (NFT) von BTC, die im Mezo-Netzwerk gesperrt sind. Wenn Sie BTC sperren, erhalten Sie Einfluss auf die Governance und einen Anteil an den Protokollgebühren.

## Was ist veBTC?

Wenn Sie BTC auf Mezo sperren, erhalten Sie ein veBTC-NFT, das Ihre gesperrte Position repräsentiert. Dieses NFT verschafft Ihnen:

- **Stimmkraft**, um Emissionen im gesamten Ökosystem zu lenken
- **Protokollgebühren** aus der Chain-Aktivität und dem Bridging
- **Governance-Rechte**, um die wirtschaftliche Zukunft von Mezo mitzugestalten

---

## So funktioniert die Stimmkraft

Ihr veBTC-Stimmgewicht hängt von zwei Faktoren ab: der Menge der gesperrten BTC (mehr BTC = mehr Stimmkraft) und Ihrer Sperrdauer (längere Sperrung = höheres dauerhaftes Gewicht).

Ihre Stimmkraft verfällt im Laufe der Zeit linear. Wer 1 BTC für 28 Tage sperrt, beginnt mit 1 veBTC; dieser Wert sinkt nach 14 Tagen auf 0,5 und erreicht bei Ablauf 0. Sie können Ihre Sperrung jederzeit verlängern, um die volle Stimmkraft zu erhalten.

### Sperrparameter

| Parameter | Wert |
|-----------|-------|
| Minimale Sperrdauer | 1 Tag |
| Maximale Sperrdauer | 28 Tage |
| Verfall der Sperrung | Linear – das Gewicht sinkt kontinuierlich, bis es null erreicht |

---

## Was Sie verdienen

### Passive Erträge (alle veBTC-Inhaber)

Alle veBTC-Inhaber erhalten automatisch einen Anteil an den **Chain- und Bridging-Gebühren**, der proportional zu ihrem Stimmgewicht ist. Diese passive Rendite fällt allein durch das Halten von veBTC an – eine Abstimmung ist nicht erforderlich.

### Aktive Erträge (Abstimmung erforderlich)

Wenn Sie [für Gauges abstimmen](/docs/de/docs/users/mezo-earn/vote), erhalten Sie entsprechend Ihrer Stimmverteilung zusätzliche Belohnungen:

- **Swap-Gebühren** aus Pools, für die Sie abstimmen (wenn LPs in diesen Gauges staken)
- **MUSD-Zins- und Gebührenerträge**, wenn Sie für den MUSD Savings Rate Gauge abstimmen
- **Anreize (Incentives)**, die Protokolle oder Nutzer bereitstellen, um Stimmen für bestimmte Gauges zu gewinnen

Je mehr Stimmgewicht Sie einem Gauge zuweisen, desto größer ist Ihr Anteil an dessen Gebühren und Anreizen.

:::note[Wichtig]
Ihre Stimmverteilung bleibt über Epochen hinweg bestehen und erzielt so lange Erträge, bis Sie sie ändern – Sie müssen nicht jede Woche erneut abstimmen. Siehe [Epochen](#epochen) weiter unten.
:::


---

## Epochen

Mezo Earn arbeitet in **7-tägigen Zyklen, den sogenannten Epochen**. Jede Epoche beginnt am Donnerstag um 00:00 UTC.

### Warum Epochen wichtig sind

- **Stimmen bleiben bestehen.** Ihre Stimmverteilung gilt über Epochen hinweg, bis Sie sie ändern oder zurücksetzen. Jede Sperrposition kann einmal pro Epoche abstimmen, daher lässt sich eine bestätigte Stimmverteilung erst nach dem nächsten Epochenwechsel ändern.
- **In Epoche N abgegebene Stimmen** bestimmen die Verteilung der Emissionen in Epoche N+1
- **In Epoche N erzielte Gebühren** werden auf Grundlage der in Epoche N abgegebenen Stimmen verteilt

### Sperrdauer und Ausrichtung an Epochen

Sperrdauern richten sich nach Epochengrenzen, nicht nach Kalendertagen. Wenn Sie eine Sperrung anlegen, **wird Ihre Sperrdauer auf die nächste volle Woche abgerundet**.

Das bedeutet:

- Eine 28-tägige Sperrung, die mitten in einer Epoche angelegt wird, hat je nach Zeitpunkt der Sperrung eine effektive Dauer von etwa 21–28 Tagen
- Sperrungen laufen immer beim Epochenwechsel ab (Donnerstag, 00:00 UTC)

**Beispiel:** Wenn Sie mitten in einer Epoche die maximale Sperrdauer von 28 Tagen wählen, wird Ihre effektive Sperrdauer abhängig von der verbleibenden Zeit in der Woche verkürzt – je nach Zeitpunkt der Sperrung ergibt sich eine Sperrung von etwa 21–28 Tagen.

Diese Normalisierung sorgt dafür, dass alle Sperrungen sauber an Epochengrenzen ablaufen, und vereinfacht die Berechnung des Stimmgewichts im gesamten System.

| Epochenparameter | Wert |
|-----------------|-------|
| Dauer | 7 Tage |
| Startzeit | Donnerstag, 00:00 UTC |
| Ausrichtung der Sperrung | Auf volle Wochen abgerundet |
