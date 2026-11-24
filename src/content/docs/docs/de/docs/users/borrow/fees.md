---
title: MUSD-Gebühren und -Kosten
description: >-
  Alle Gebührenstrukturen und Kosten bei der Nutzung von MUSD auf Mezo im
  Überblick.
topic: users
---

## Gebühren im Überblick

| Gebühr | Höhe | Wann sie anfällt |
| --- | --- | --- |
| **Ausgabegebühr** | 0,1 % der geliehenen MUSD | Beim Eröffnen oder Erhöhen eines Kredits |
| **Zinsen** | 1–5 % APR (bei Eröffnung festgelegt) | Laufen auf die ausstehenden Schulden auf |
| **Einlösungsgebühr** | 0,75 % | Beim Tausch von MUSD gegen BTC-Sicherheiten |
| **Refinanzierungsgebühr** | 0,02 % der Schulden | Bei der Refinanzierung eines Kredits zu einem neuen Zinssatz |
| **Gas-Kaution** | 200 MUSD (pauschal) | Beim Eröffnen eines Kredits (wird beim Schließen zurückerstattet) |

## Verteilung der Gebühren

:::note
Die Gebühren werden auf zwei Ziele aufgeteilt: **(1)** die Rückzahlung des Bootstrap-Kredits des Protokolls und **(2)** den MUSD Savings Vault. Die anfängliche Aufteilung beträgt 50/50 und kann über den MUSD-Splitter per Governance angepasst werden. Mindestens 50 % der Gebühren müssen in die Kreditrückzahlung fließen, bis der Bootstrap-Kredit vollständig zurückgezahlt ist. Nach der Rückzahlung fließen alle Gebühren in den Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Zinsgebühren (1–5 % APR)

Der Zinssatz für [MUSD](https://mezo.org/feature/musd)-Kredite ist für die gesamte Laufzeit des Kredits festgelegt. Wenn der Kredit erhöht wird, wird der neue Kreditbetrag zum aktuellen Zinssatz hinzugefügt.

Zum Start fließen die Zinsgebühren in den Stability Pool der MUSD-Treasury, der Liquidationen und Zahlungsausfälle abdeckt.

## Einlösungsgebühren (0,75 %)

Eine Gebühr von 0,75 %, die von den BTC einbehalten wird, die ein Einlösender erhält, wenn er bei einer [Einlösung](/docs/de/docs/users/borrow/liquidation-mechanics#einlösungen-%EF%B8%8F) MUSD gegen Sicherheiten tauscht. Sie wird vom Einlösenden gezahlt, nicht von dem Kreditnehmer, gegen dessen Kredit eingelöst wird.

Zum Start fließen die Einlösungsgebühren in den Stability Pool der MUSD-Treasury, der Liquidationen und Zahlungsausfälle abdeckt.

## Ausgabegebühr (0,1 %)

Die Ausgabegebühr fällt an, wenn ein MUSD-Kredit eröffnet wird oder wenn ein Kreditinhaber weitere MUSD leiht. Die Gebühr beträgt 0,1 % des geliehenen Betrags und wird in MUSD gezahlt. Bei einem Kredit über \$10.000 MUSD würde eine Ausgabegebühr von \$10 in MUSD anfallen. Wenn Sie Ihren Kredit erhöhen, zahlen Sie die Ausgabegebühr auf die neu geliehenen MUSD.

## Refinanzierungsgebühr (0,02 % der Schulden)

Die Refinanzierungsgebühr fällt an, wenn ein MUSD-Kreditinhaber beantragt, den Zinssatz seines Kredits zu aktualisieren. Ein Kreditnehmer möchte seinen Kredit möglicherweise refinanzieren, wenn der für neue Kredite angebotene Zinssatz günstiger ist als der feste Zinssatz seines bestehenden Kredits. Durch eine Refinanzierung lässt sich der Zinssatz des Kredits auf den neuen Satz aktualisieren. Für jeden Refinanzierungsantrag fällt eine Refinanzierungsgebühr von 0,02 % der Schulden an, die in MUSD gezahlt wird.

## Gas-Kaution (`200 MUSD` Pauschalgebühr)

Eine Kaution von 200 MUSD stellt sicher, dass Liquidationen wirtschaftlich durchführbar sind. Sie wird zurückerstattet, wenn der Kredit geschlossen wird. Die Gas-Kaution wird als zusätzliche Schuld im Kredit gemintet und bis zur Schließung des Kredits treuhänderisch verwahrt. Diese Schuld fließt in die Berechnung der Besicherungsquote ein.

## Weitere Gas- und Transaktionsgebühren

Nutzer, die mit dem MUSD-System interagieren, müssen für jede Transaktion, die an das Mezo-Netzwerk gesendet wird, Transaktionsgebühren zahlen. Dazu gehören Aktionen wie Minten, Einlösen, Staking und Beanspruchen.

## Risiken, die Sie kennen sollten

:::caution
Das Leihen von MUSD ist mit Risiken verbunden. Wenn Sie diese Risiken verstehen, können Sie Ihre Position besser schützen.

**Einlösungsrisiko** – Um die Bindung von MUSD zu halten, kann das Protokoll MUSD gegen Sicherheiten einlösen. Dabei wird mit den Krediten begonnen, die die **niedrigste Besicherungsquote** haben (aber noch über der Liquidationsschwelle von 110 % liegen). Wenn gegen Ihren Kredit eingelöst wird, verlieren Sie Ihr Exposure gegenüber Kurssteigerungen von BTC und müssen möglicherweise mit steuerlichen Folgen rechnen. Um dieses Risiko zu verringern, halten Sie Ihre Besicherungsquote höher als die anderer Kreditnehmer.

**Liquidationsrisiko** – Fällt die Besicherungsquote Ihres Kredits **unter 110 %**, kann Ihre Position liquidiert werden. Sie verlieren Ihre Sicherheiten und behalten die geliehenen MUSD. Um dieses Risiko zu verringern, überwachen Sie Ihren Kredit regelmäßig und fügen Sie bei Bedarf Sicherheiten hinzu. Alle Details finden Sie unter [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).
:::
