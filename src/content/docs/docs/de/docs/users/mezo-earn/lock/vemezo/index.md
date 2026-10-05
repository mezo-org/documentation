---
title: veMEZO-Übersicht
description: 'MEZO sperren, um Stimmkraft zu boosten und Rebases zu verdienen'
topic: users
---

veMEZO ist die tokenisierte Darstellung (als NFT) von MEZO, das im Mezo-Netzwerk gesperrt ist. Wenn Sie MEZO sperren, können Sie Ihre veBTC-Stimmkraft um bis zu 5x boosten, damit Ihre Erträge steigern und über MEZO-Emissionen Rebases zum Schutz vor Verwässerung verdienen.

## Was ist veMEZO?

Wenn Sie MEZO auf Mezo sperren, erhalten Sie ein veMEZO-NFT, das Ihre gesperrte Position repräsentiert. Dieses NFT bietet Ihnen:

- einen Boost-Multiplikator für Ihre veBTC-Stimmkraft (bis zu 5x)
- Rebase-Belohnungen aus den wöchentlichen MEZO-Emissionen, die die Verwässerung ausgleichen
- die Teilnahme am Matching-Markt, um Anreize (Incentives) von veBTC-Inhabern zu verdienen
- Stimmen für [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges), mit denen Sie MEZO-Emissionen auf MUSD-Pools auf Curve, Uniswap und Aerodrome lenken

:::note[Wichtig]
veMEZO stimmt nicht selbst über **Staking-Gauges** ab – dort multipliziert es nur die Stimmkraft von veBTC-Positionen. Eigenständig abstimmen kann veMEZO jedoch über veBTC-Boost-Gauges und über [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## So funktioniert das veMEZO-Gewicht

Ihr veMEZO-Gewicht hängt von zwei Faktoren ab: der Menge an gesperrtem MEZO (mehr MEZO = mehr Gewicht) und Ihrer Sperrdauer (längere Sperrungen = höheres, länger anhaltendes Gewicht).

Ihr Gewicht verfällt im Lauf der Zeit linear. Wer 1.000 MEZO für 4 Jahre sperrt, beginnt mit einem veMEZO-Gewicht von 1.000, das nach 2 Jahren auf 500 sinkt und bei Ablauf 0 erreicht. Sie können Ihre Sperrung jederzeit verlängern, um das volle Gewicht zu erhalten.

Sie können für Ihr veMEZO auch die automatische Maximalsperrung (Auto-Max-Lock) aktivieren. Damit behalten Sie in jeder Epoche das maximale Stimmgewicht einer 4-jährigen Sperrung, ohne Ihre Token fortlaufend neu sperren zu müssen.

### Sperrparameter

| Parameter | Wert |
|---|---|
| Minimale Sperrdauer | 1 Woche |
| Maximale Sperrdauer | 4 Jahre (1.456 Tage) |
| Verfall der Sperrung | Linear – das Gewicht sinkt kontinuierlich, bis es null erreicht |

---

## Was Sie verdienen

### Rebase-Belohnungen (alle veMEZO-Inhaber)

veMEZO-Inhaber erhalten als Rebases einen Anteil an den wöchentlichen MEZO-Emissionen. Das schützt vor der Verwässerung durch neue Emissionen. Der Rebase-Anteil ist dynamisch – höher, wenn weniger Token gesperrt sind, und niedriger, je mehr MEZO gesperrt wird.

### Anreize (über den Matching-Markt)

veMEZO-Inhaber können über veBTC-Gauges abstimmen, um Anreize zu verdienen. Wenn ein veBTC-Inhaber seine Position boosten möchte, aber nicht über genügend veMEZO verfügt, kann er Anreize auf seinem veBTC-Gauge hinterlegen. Indem Sie für diesen Gauge abstimmen, verdienen Sie diese Anreize als Gegenleistung für den bereitgestellten Boost.

Wie der Matching-Markt im Einzelnen funktioniert, erfahren Sie unter [Boost-Mechanismus](/docs/de/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

---

## veMEZO vs. veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Zugrunde liegender Vermögenswert | BTC | MEZO |
| Maximale Sperrdauer | 28 Tage | 4 Jahre |
| Stimmkraft | Basis-Stimmkraft | Multipliziert die veBTC-Stimmkraft (bis zu 5x) |
| Verdient Gebühren | Ja (Bridging, Swap, MUSD) | Nein |
| Verdient Rebases | Nein | Ja |
| Verdient Anreize | Ja (von Gauges, für die Sie abstimmen) | Ja (von veBTC-Boost-Gauges) |
