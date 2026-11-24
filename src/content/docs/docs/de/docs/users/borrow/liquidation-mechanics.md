---
title: MUSD-Liquidationen und -Einlösungen
description: Erfahren Sie mehr über Liquidationen und Einlösungen.
topic: users
---

## Übersicht
Wenn Sie gegen Ihre Bitcoin als Sicherheiten (Collateral) einen Kredit aufnehmen, eröffnen Sie eine Kreditposition (auch „Trove“ genannt). Zwei zentrale Systemereignisse können sich auf Ihren Kredit auswirken:

- **Liquidation**: Eine erzwungene Schließung Ihres Kredits, die nur dann erfolgt, wenn seine Gesundheit – gemessen an der Besicherungsquote – unter das kritische Minimum von 110 % fällt. Bei einer Liquidation verlieren Sie Ihre Sicherheiten.
- **Einlösung**: Jeder, der MUSD hält, kann diese beim Protokoll zu \$1 pro MUSD gegen BTC eintauschen (abzüglich einer Einlösungsgebühr von derzeit 0,75 %). Dadurch bleibt der MUSD-Preis durch Arbitrage nahe bei \$1. Einlösungen entnehmen BTC zuerst aus dem Trove mit der niedrigsten Besicherungsquote (solange diese noch über der Liquidationsschwelle von 110 % liegt). Eine Einlösung kann Ihren Kredit also auch dann verkleinern, wenn Ihr Trove vor einer Liquidation sicher ist. Ist der Einlösungsbetrag kleiner als die Schulden dieses Troves, wird er als Teileinlösung verarbeitet – es wird also nur ein Teil der Schulden getilgt. Ist er größer, wird der Trove vollständig eingelöst und der Restbetrag geht auf den Trove mit der nächstniedrigeren Besicherungsquote über. In beiden Fällen werden Schulden und Sicherheiten in gleichen Dollarbeträgen entfernt, was die Besicherungsquote des betroffenen Troves erhöht – allerdings verliert der Kreditnehmer dabei BTC-Exposure.

---

## Liquidationen ⚠️

### Was ist eine Liquidation?
Eine Liquidation ist ein Sicherheitsmechanismus, der einen Kredit automatisch schließt, wenn er zu riskant wird. Das schützt das gesamte System davor, instabil zu werden.

### Wann kommt es zu einer Liquidation?

:::danger
Ihr Kredit ist liquidationsgefährdet, wenn seine Besicherungsquote unter 110 % fällt. Betrachten Sie dies als den absolut minimalen Sicherheitspuffer, den Ihr Kredit benötigt.
:::

### Was passiert bei einer Liquidation?
Das System kann eine Liquidation auf zwei Arten abwickeln:

#### Über den Stability Pool (Standardmethode):
- Das System verwendet Stablecoins aus seiner Sicherheitsreserve, dem Stability Pool, um Ihre Schulden vollständig zu begleichen.
- Die Person oder der Bot, der die Liquidation ausgelöst hat, erhält eine kleine Belohnung (eine Gasgebühr von 200 MUSD und 0,5 % Ihrer Sicherheiten).
- Der Rest Ihrer Sicherheiten (99,5 %) wird an den Stability Pool übertragen, um dessen Einzahler zu entschädigen.
- Ihr Kredit wird geschlossen, und Sie verlieren Ihre gesamten Sicherheiten.

#### Umverteilung (Ausweichmethode):
- Ist der Stability Pool leer, verteilt das System Ihre Schulden und Sicherheiten auf alle anderen Inhaber aktiver Kredite.
- Diese Reservemethode stellt sicher, dass das System stets im Gleichgewicht bleibt.

### Beispiel für eine Liquidation:
- Angenommen, Ihr Kredit weist Schulden von 10.000 MUSD auf.
- Der Wert Ihrer BTC-Sicherheiten fällt auf \$10.900.
- Ihre Besicherungsquote beträgt nun 109 % und liegt damit unter dem Minimum von 110 %.
- Ergebnis: Ihr Kredit wird liquidiert. Ihre Schulden von 10.000 MUSD werden getilgt, aber Sie verlieren Ihre gesamten BTC-Sicherheiten im Wert von \$10.900.

---

## Einlösungen 🛡️

### Was ist eine Einlösung?
Eine Einlösung ist eine Funktion, mit der jeder, der einen Stablecoin hält, diesen direkt beim Protokoll gegen BTC im gleichen Dollarwert (abzüglich der Einlösungsgebühr) tauschen kann. Dieser Vorgang hilft, den Stablecoin nahe seiner Bindung an \$1 zu halten. Eine Einlösung ist keine Strafe und bedeutet nicht, dass Ihr Kredit unsicher ist.

### Wann kommt es zu einer Einlösung?
Einlösungen können jederzeit stattfinden. Wenn ein Nutzer seinen Stablecoin gegen BTC einlösen möchte, sucht das System nach Krediten, aus denen die Sicherheiten entnommen werden.

### Welche Kredite werden für eine Einlösung ausgewählt?
Das System beginnt immer mit dem Kredit, der die niedrigste Besicherungsquote aufweist, aber noch über der Liquidationsschwelle von 110 % liegt – selbst wenn diese Quote gesund ist und deutlich über 110 % liegt. Ist Ihr Kredit geringer besichert als andere, wird er mit höherer Wahrscheinlichkeit für eine Einlösung ausgewählt.

### Was passiert bei einer Einlösung?

#### Vollständige Einlösung:
- Begleicht eine Einlösung Ihre gesamten Schulden, wird Ihr Kredit geschlossen.
- BTC im entsprechenden Wert gehen an den Einlösenden.
- Verbleibende BTC gehören weiterhin Ihnen. Sie werden als Überschuss-Sicherheiten bezeichnet und an ein spezielles Verwahrkonto gesendet, von dem Sie sie zurückfordern können.

#### Teileinlösung (häufiger):
- Ein Teil Ihrer Schulden wird vom Einlösenden beglichen.
- BTC-Sicherheiten im entsprechenden Wert gehen an ihn.
- Ergebnis: Ihr Kredit bleibt offen, ist nun aber kleiner und gesünder, mit einer höheren Besicherungsquote.

### Beispiel für eine Einlösung:
- Angenommen, Ihr Kredit weist Schulden von 10.000 MUSD und BTC-Sicherheiten im Wert von \$13.000 auf (eine gesunde Quote von 130 %).
- Ein anderer Nutzer löst 5.000 MUSD ein, und Ihr Kredit wird ausgewählt.
- Ergebnis:
  - Ihre Schulden sinken auf 5.000 MUSD.
  - Ihre Sicherheiten sinken auf \$8.000.
  - Ihre neue Besicherungsquote beträgt nun 160 % (\$8.000 / 5.000 MUSD) – Ihr Kredit ist damit deutlich sicherer!

### So erhalten Sie Ihre verbleibenden Sicherheiten nach einer vollständigen Einlösung
Wird Ihr Kredit durch eine Einlösung vollständig beglichen, sind Ihre Überschuss-Sicherheiten sicher. Sie können sie jederzeit über die Mezo App zurückfordern.

Wichtiger Hinweis: Die aktuelle Benutzeroberfläche zeigt Ihren verfügbaren Überschuss möglicherweise nicht an. Wenn Sie auf der Borrow-Seite keinen Hinweis „Loan redeemed“ sehen, folgen Sie unserer Anleitung [So fordern Sie Ihre Sicherheiten nach einer vollständigen Einlösung zurück](/docs/de/docs/users/borrow/claim-collateral-after-redemption/), um sie manuell über den Mezo Explorer zurückzufordern.

---

## Die wichtigsten Unterschiede im Überblick

| Merkmal | Liquidation (erzwungene Schließung) | Einlösung (Schuldenabbau) |
| --- | --- | --- |
| Wann sie stattfindet | Nur wenn Ihre Quote unter 110 % liegt | Kann stattfinden, wenn Ihre Quote über 110 % liegt |
| Wer löst sie aus? | Jeder (meist Bots) | Jeder Nutzer, der MUSD hält |
| Auswirkung auf die Schulden | Vollständig getilgt | Verringert oder getilgt |
| Auswirkung auf die Sicherheiten | Vollständiger Verlust | Teilweise entnommen; ein etwaiger Überschuss kann von Ihnen zurückgefordert werden |
| Auswirkung auf Sie | Negatives Ereignis; Kredit wird geschlossen und Vermögenswerte gehen verloren | Neutral oder positiv; Kredit wird kleiner und gesünder |

---

## Was ist der Recovery Mode?

:::note
Der Recovery Mode (Wiederherstellungsmodus) ist ein vorübergehender Sicherheitszustand, der aktiviert wird, wenn die Gesamtbesicherungsquote des Systems (TCR) unter 150 % fällt. Es handelt sich um einen besonderen Systemzustand mit strengeren Regeln für die Kreditaufnahme.
:::

Während des Recovery Mode gilt:
- **Liquidationen sind nicht betroffen.** Die Liquidationsschwelle bleibt bei 110 % – genau wie im Normalmodus. Anders als Liquity v1 weitet MUSD Liquidationen im Recovery Mode nicht auf höhere Besicherungsquoten aus.
- Neue Kredite können nicht mit einer Besicherungsquote unter 150 % eröffnet werden.
- Refinanzierungen sind gesperrt.
- Das System ermutigt Nutzer, Sicherheiten hinzuzufügen oder Schulden zurückzuzahlen, um die TCR wieder über 150 % zu bringen.

---

## So halten Sie Ihren Kredit sicher

:::tip
Der beste Schutz vor Liquidation und Einlösung ist eine hohe Besicherungsquote – streben Sie deutlich mehr als 150 % an.
:::

### So vermeiden Sie eine Liquidation:
- Halten Sie einen gesunden Puffer. Streben Sie eine Besicherungsquote deutlich über 110 % an, um vor Marktschwankungen geschützt zu sein. Eine Quote über 150 % stellt außerdem sicher, dass Sie auch dann frei leihen und refinanzieren können, wenn das System in den Recovery Mode wechselt.
- Überwachen Sie die Gesundheit Ihres Kredits regelmäßig, insbesondere wenn der BTC-Preis fällt.
- Handeln Sie vorausschauend: Fügen Sie weitere Sicherheiten hinzu oder zahlen Sie einen Teil Ihrer Schulden zurück, wenn Ihre Quote zu niedrig wird.

### So verringern Sie die Wahrscheinlichkeit einer Einlösung:
- Halten Sie eine hohe Besicherungsquote. Anders als Liquidationen, die bei einer festen Schwelle ausgelöst werden, sind Einlösungen relativ – das System wählt zuerst die Troves mit den niedrigsten Besicherungsquoten aus. Je höher Ihre Quote im Vergleich zu anderen Troves ist, desto unwahrscheinlicher wird Ihr Trove eingelöst. 150 % sind in der Regel ein guter Basiswert, die optimale Positionierung hängt jedoch von den aktuellen Marktbedingungen und den Besicherungsquoten der anderen offenen Troves ab. Es lohnt sich, die offenen Troves regelmäßig zu beobachten und Ihre Quote entsprechend anzupassen, um deutlich über dem unteren Ende des Feldes zu bleiben.

### Behalten Sie Ihren Kredit mit MUSD Monitor im Blick
Für eine erweiterte Überwachung können Sie [mezotools.cc](https://mezotools.cc) verwenden.

Mit diesem Tool können Sie:
- die Gesundheit von Troves und Besicherungsquoten in Echtzeit prüfen.
- aktuelle systemweite Einlösungen und Liquidationen einsehen.
- BTC- und Stablecoin-Preise direkt über die Onchain-Orakel von Mezo verfolgen.

---

Eine vollständige Liste der MUSD-Begriffe und -Definitionen finden Sie unter [Architektur und Terminologie](/docs/de/docs/users/borrow/architecture-and-terminology#definitionen).
