---
title: MUSD-Architektur und -Terminologie
description: >-
  Ausführliche Erläuterung des Systemdesigns und der zentralen Terminologie von
  MUSD auf Mezo.
topic: users
---

Das [MUSD](https://mezo.org/feature/musd)-System besteht aus vier Haupt-Contract-Gruppen:

| Contract-Gruppe | Zweck |
| --- | --- |
| **Token (MUSD)** | Der Stablecoin im Zentrum des Systems, konzipiert für eine stabile Kopplung an den US-Dollar |
| **Kernprotokoll** | Übernimmt das Eröffnen und Schließen von Positionen, die Verwaltung der Sicherheiten und die Aufrechterhaltung der Systemstabilität |
| **Asset-Pools** | Verwaltet die verschiedenen Sicherheiten- und Liquiditätspools des Systems |
| **Unterstützende Contracts** | Stellt grundlegende Dienste wie Preisfeeds, Sortierung von Positionen und die Verwaltung des protokollgesteuerten Werts bereit |

## Verwahrung und Verwaltung der Sicherheiten

MUSD-Positionen lassen sich onchain nachverfolgen, und die zugrunde liegenden Bitcoin-Sicherheiten werden über die robuste, dezentrale Verwahrungsinfrastruktur von tBTC sicher verwaltet.

Alle BTC, die MUSD decken, können Sie in Echtzeit im Mezo-Block-Explorer einsehen:

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC wird vom selben Team entwickelt, das auch hinter Mezo steht – [Thesis*](https://thesis.co/?ref=blog.mezo.org) – und vom [Threshold Network](https://threshold.network/?ref=blog.mezo.org) betrieben. Threshold ist eine dezentrale Gruppe von Signierern, die seit Anfang 2020 die Threshold-Bitcoin-Bridge betreibt und erfolgreich über 28.000 Bitcoin gebridgt hat. Reservenachweise (Proof of Reserves) für tBTC sind seit Bestehen der Bridge verfügbar und auf [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org) einsehbar.

Eine ausführliche Analyse von tBTC bietet der [Forschungsbericht „Bitcoin Layers“](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), der tBTC mit anderen beliebten Wrappern wie WBTC und cbBTC vergleicht. Eine zusätzliche Risikoanalyse hat das [LlamaRisk-Team](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) im Vorfeld der Zulassung von tBTC als Sicherheit auf Aave durchgeführt.

### Verwahrung durch Contracts

Ein Nutzer eröffnet eine Position, indem er BorrowerOperations.openTrove aufruft, BTC bereitstellt und MUSD anfordert. Die BTC werden an den ActivePool geleitet und verbleiben dort, bis eine der folgenden Aktionen eintritt:

* Der Nutzer hebt ab (`BorrowerOperations.withdrawColl`)
* Der Nutzer zahlt seine Schulden zurück (`BorrowerOperations.closeTrove`)
* Sicherheiten werden eingelöst (`TroveManager.redeemCollateral`)
* Die Position wird liquidiert (`TroveManager.liquidate`)

Liquidierte Positionen werden entweder vom StabilityPool beglichen – in diesem Fall werden die BTC an den Stability Pool übertragen – oder die Schulden und Sicherheiten werden übernommen und auf andere Nutzer umverteilt; in diesem Fall werden die BTC an den DefaultPool übertragen, von wo aus sie anschließend verteilt werden.

## Kreditaufnahme zu festen Zinsen

* Globaler Zinssatz: Für alle neu eröffneten Kredite gilt ein einheitlicher globaler Zinssatz.
* Beibehaltung der Zinssätze: Nach der Eröffnung behält ein Kredit den Zinssatz, zu dem er erstellt wurde, auch wenn sich der globale Zinssatz ändert. Der Zinssatz eines Kredits kann nur vom Nutzer über die Refinanzierungsfunktion aktualisiert werden.

:::note
Zinssätze sind **für die gesamte Laufzeit des Kredits fest**. Der Zinssatz, den Sie bei der Krediteröffnung festschreiben, ändert sich nie, es sei denn, Sie entscheiden sich für eine Refinanzierung.
:::
* Refinanzierungsfunktion: Mit der Refinanzierungsfunktion können Nutzer die Schulden ihres Kredits an den neuen globalen Zinssatz anpassen. Dabei fällt eine Refinanzierungsgebühr an, die einem konfigurierbaren Prozentsatz der Ausgabegebühr entspricht. Die Refinanzierung bietet den Vorteil, dass keine Sicherheiten bewegt werden müssen und geringere Gebühren anfallen als beim Schließen und erneuten Eröffnen eines Kredits zum aktualisierten Zinssatz. Sie können auch refinanzieren, um Ihren Kreditrahmen zu erweitern, wenn BTC im Wert gestiegen ist.
* Einfache Verzinsung: Zinsen werden nach einem Modell der einfachen Verzinsung berechnet, nicht mit Zinseszins.
* Zinszahlungen: Zinszahlungen fließen an den PCV (Protocol Controlled Value). Die Verwendung dieser Zahlungen wird per Governance gesteuert und kann zwischen einem beliebigen Empfänger und der Rückzahlung des Bootstrap-Kredits aufgeteilt werden.

## Weitere Governance

* Governance-Steuerung: Der Zinssatz und weitere kritische Parameter werden per Governance gesteuert. Änderungen an diesen Parametern erfordern einen Governance-Vorschlag und eine Mindestverzögerung, bevor sie in Kraft treten können.
* Zinssatzvorschläge: Neue Zinssätze können per Governance vorgeschlagen werden. Diese Vorschläge müssen nach einer Mindestverzögerung genehmigt werden, um Stabilität und Vorhersehbarkeit zu gewährleisten.

## Protocol Controlled Value (PCV)

Der Contract Protocol Controlled Value (PCV) ist eine zentrale Komponente des Systems und für die Verwaltung der Gebühren aus Kreditaufnahme und Refinanzierung zuständig. Im Folgenden ein Überblick über die Funktionsweise des PCV:

* Gebührenerhebung: Kreditgebühren und Refinanzierungsgebühren fließen an den PCV-Contract.
* Gebührenverteilung: Die vom PCV eingenommenen Gebühren werden zur Rückzahlung des Bootstrap-Kredits verwendet oder an das Gauge-System gesendet.
* Per Governance steuerbare Aufteilung: Die Aufteilung der Gebühren zwischen Schuldenrückzahlung und Gauge-System ist per Governance steuerbar. Solange der Bootstrap-Kredit jedoch nicht vollständig zurückgezahlt ist, dürfen höchstens 50 % der Gebühren an das Gauge-System fließen.
* Nach der Schuldenrückzahlung: Sobald der Bootstrap-Kredit vollständig zurückgezahlt ist, sammeln sich die Gebühren als protokolleigene Liquidität (Protocol-Owned Liquidity) im StabilityPool an.

### Bootstrap-Kredit des Protokolls

Der Stability Pool wird mit einem Protokollkredit gegen künftige Gebühren und Zinsen gestartet. Die aus diesem Protokollkredit geminteten MUSD dürfen ausschließlich im Stability Pool verwendet werden. Solange der Protokollkredit besteht, werden mindestens 50 % der vom Protokoll erhobenen Zinsen und Gebühren zu seiner Rückzahlung verwendet.

## Definitionen

- **Kredit:** eine besicherte Schuldenposition, die an eine einzelne Ethereum-Adresse gebunden ist. In vergleichbaren Protokollen auch als „CDP“ bezeichnet.

- **Aktive Sicherheiten:** die Menge an Sicherheiten, die im Struct eines Kredits erfasst ist

- **Aktiver Kreditbetrag:** die Höhe der MUSD-Schulden, die im Struct eines Kredits erfasst ist, ohne Zinsen

- **Aktive Zinsen:** die Höhe der MUSD-Zinsen, die im Struct eines Kredits erfasst ist

- **Aktive Schulden:** die Höhe der MUSD-Schulden, die im Struct eines Kredits erfasst ist (aktiver Kreditbetrag plus aktive Zinsen)

- **Gesamte Sicherheiten:** die Summe aus den aktiven Sicherheiten eines Kredits und seinen ausstehenden, aus Umverteilungen angesammelten Sicherheiten-Zuflüssen

- **Gesamtschulden:** die Summe aus den aktiven Schulden eines Kredits und seinen ausstehenden, aus Umverteilungen angesammelten Schulden-Zuflüssen

- **Individuelle Besicherungsquote (ICR):** Die ICR eines Kredits ist das Verhältnis zwischen dem Dollarwert seiner gesamten Sicherheiten zum aktuellen Collateral:USD-Preis und seinen Gesamtschulden

- **Nominale Besicherungsquote (nominale ICR, NICR):** Die nominale ICR eines Kredits entspricht seinen gesamten Sicherheiten (in der Sicherheitenwährung) multipliziert mit 100e18 und geteilt durch seine Gesamtschulden.

- **Gesamte Systemsicherheiten:** die Summe der Sicherheiten im ActivePool und im DefaultPool

- **Gesamte Systemschulden:** die Summe der Schulden im ActivePool und im DefaultPool

- **Gesamtbesicherungsquote (TCR):** das Verhältnis zwischen dem Dollarwert der gesamten Systemsicherheiten zum aktuellen Collateral:USD-Preis und den gesamten Systemschulden

- **Kritische Besicherungsquote (CCR):** 150 %. Liegt die TCR unter der CCR, wechselt das System in den Recovery Mode (Wiederherstellungsmodus).

- **Einlösung:** der Tausch von MUSD-Token mit dem System gegen Sicherheiten im entsprechenden Wert. Jedes Konto mit einem MUSD-Guthaben kann diese einlösen, unabhängig davon, ob es sich um einen Kreditnehmer handelt.

- **Liquidation:** die Zwangsschließung eines unterbesicherten Kredits und die Umverteilung seiner Sicherheiten und Schulden. Ist der Stability Pool ausreichend groß, werden die liquidierten Schulden mit dem Stability Pool verrechnet und die Sicherheiten an die Einzahler verteilt. Können die liquidierten Schulden nicht mit dem Pool verrechnet werden, verteilt das System die liquidierten Sicherheiten und Schulden direkt auf die aktiven Kredite mit einer Besicherungsquote von >110 %. Die Liquidationsfunktion ist erlaubnisfrei (permissionless) und öffentlich zugänglich – jeder kann einen unterbesicherten Kredit liquidieren oder Kredite gebündelt liquidieren.

- **Überschüssige Sicherheiten:** Die überschüssigen Sicherheiten (Collateral Surplus) sind die überzähligen Sicherheiten der Kreditnehmer, die diese zurückfordern können, wenn gegen ihren Kredit vollständig eingelöst wurde.

- **Verrechnung (Offset):** Die Tilgung liquidierter Schulden mit MUSD aus dem Stability Pool und die Zuweisung der liquidierten Sicherheiten an die Einzahler des Stability Pool im Verhältnis zu ihrer Einzahlung.

- **Gas-Entschädigung (Gas Compensation):** Eine Erstattung in MUSD und Sicherheiten, die automatisch an den Aufrufer einer Liquidationsfunktion gezahlt wird und sicherstellen soll, dass Liquidationen auch in Marktstressphasen rentabel sind. Die 200 MUSD wurden auf Grundlage der Gaspreise und Blockzeiten von Ethereum festgelegt. Sie sollen verhindern, dass Liquidatoren durch potenziell hohe Gaskosten abgeschreckt werden.
