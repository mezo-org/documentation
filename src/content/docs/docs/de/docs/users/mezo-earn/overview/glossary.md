---
title: Glossar
description: Glossar der Begriffe für Mezo Earn
topic: users
---

Im Folgenden finden Sie eine Liste von Begriffen rund um das Mezo-Earn-System.

---

## veBTC

Vote-escrowed BTC. Ein NFT, das gesperrte Bitcoin repräsentiert und Basis-Stimmkraft (Multiplikator 1x) sowie das Recht auf Gebührenerträge in Mezo Earn verleiht. Das Stimmgewicht verfällt linear über die Sperrdauer. Die maximale Sperrdauer beträgt 28 Tage.

## veMEZO

Vote-escrowed MEZO. Ein NFT, das gesperrte MEZO-Token repräsentiert. Es kann die veBTC-Stimmkraft um bis zu 5x boosten und stimmt selbst über veBTC-Boost-Gauges und [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges) ab. Es hat kein eigenes Governance-Gewicht und kann ohne veBTC nicht über Staking-Gauges abstimmen. Die maximale Sperrdauer beträgt 4 Jahre.

## Boost

Der Multiplikator, der auf eine veBTC-Position angewendet wird, wenn veMEZO-Stimmen auf sie gelenkt werden. Ohne Boost arbeitet veBTC mit 1x. Mit maximalem Boost arbeitet veBTC mit 5x. Der Boost hängt von Ihrem relativen Anteil am gesamten veBTC und am gesamten veMEZO im System ab.

## Geboostetes Stimmgewicht

Das kombinierte Stimmgewicht, wenn veBTC und veMEZO gepaart sind. Es berechnet sich aus Ihrem veBTC-Stimmgewicht multipliziert mit Ihrem Boost-Multiplikator (zwischen 1x und 5x). Das geboostete Stimmgewicht bestimmt Ihren Anteil an den Gebühren und Ihren Einfluss auf die Emissionen.

## Epoche

Ein 7-tägiger Zyklus, der Abstimmungen und die Verteilung von Belohnungen steuert. Epochen beginnen jeden Donnerstag um 00:00 UTC.

## Gauge

Ein Smart Contract, der Belohnungen auf Grundlage von Stimmen empfängt und verteilt. Je mehr Stimmgewicht ein Gauge erhält, desto größer ist sein Anteil an den Belohnungen der jeweiligen Epoche.

## Sperrung

Das Festlegen von BTC oder MEZO für einen bestimmten Zeitraum, um veBTC oder veMEZO zu erhalten (Lock). Längere Sperrungen verleihen ein höheres anfängliches Stimmgewicht.

## Staking-Gauge

Ein Gauge, der an einen Staking-Token gebunden ist (z. B. LP-Token oder Beleg-Token des MUSD Savings Vault). Staker verdienen MEZO-Emissionen; Wähler erhalten Handelsgebühren.

## veBTC-Boost-Gauge

Ein Gauge, der an ein bestimmtes veBTC-NFT gebunden ist. veMEZO-Inhaber stimmen für diese Gauges ab, um der jeweiligen veBTC-Position im Austausch gegen Anreize einen Boost zu verschaffen.

## Non-Staking-Gauge

Ein Gauge ohne Staking-Token, für den mit veMEZO abgestimmt wird. Seine Emissionen werden an ein Ziel geleitet, das der Gauge festlegt, statt an Staker auf Mezo ausgezahlt zu werden. Die Abstimmung über einen solchen Gauge ist unabhängig von der Abstimmung über veBTC-Gauges und vom Boost-Matching.

## MEZO Gauge

Ein Non-Staking-Gauge, der MEZO-Emissionen in MUSD-Liquiditätspools außerhalb von Mezo lenkt – Curve und Uniswap auf Ethereum sowie Aerodrome auf Base. Siehe [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges).

## Stimmgewicht

Der Einfluss, den eine Position bei der Abstimmung über Gauges hat. Für veBTC berechnet es sich aus den gesperrten BTC multipliziert mit der verbleibenden Sperrdauer, geteilt durch die maximale Sperrdauer. Für veMEZO gilt dieselbe Formel, jedoch mit einer maximalen Sperrdauer von 4 Jahren.

## Verfall

Die schrittweise Abnahme des Stimmgewichts, während sich eine Sperrung ihrem Ablauf nähert. Der Verfall lässt sich durch Verlängern der Sperrung zurücksetzen.

## Poke

Eine Transaktion, die das geboostete Stimmgewicht einer veBTC-Position aktualisiert. Erforderlich nach Änderungen an veMEZO-Stimmen, Verlängerungen der Sperrung oder dem Hinzufügen von BTC. Ohne Poke werden Boost-Änderungen nicht wirksam.

## Matching-Markt

Der ökonomische Mechanismus, bei dem veBTC-Inhaber veMEZO-Stimmen anziehen können, indem sie Anreize auf ihren Boost-Gauges ausschreiben, und veMEZO-Inhaber Rendite erzielen können, indem sie für Gauges mit attraktiven Anreizen abstimmen.

## Anreize

Belohnungen, die auf Gauges ausgeschrieben werden, um Stimmen anzuziehen (Incentives). Protokolle oder Nutzer hinterlegen Anreize (in einem beliebigen ERC-20-Token), um Stimmkraft auf bestimmte Gauges zu lenken.

## Rebase

Ausschüttungen zum Verwässerungsschutz an veMEZO-Inhaber. Wenn die Sperrquote (veMEZO-Angebot / gesamtes MEZO-Angebot) niedrig ist, fließt ein größerer Anteil der Emissionen in Rebases, was frühe Sperrer vor Verwässerung schützt.

## Splitter

Ein Contract, der Emissionen auf zwei Ziele aufteilt (z. B. Validatoren und Ökosystem). Die Aufteilungsverhältnisse sind derzeit fest und per Governance gesperrt.

## MUSD

Der Bitcoin-besicherte Stablecoin von Mezo. Nutzer können MUSD gegen ihre BTC-Sicherheiten leihen.

## MUSD Savings Rate Gauge

Ein Staking-Gauge für den MUSD Savings Vault. Nutzer, die MUSD in den Savings Vault einzahlen, können ihre Beleg-Token staken, um MEZO-Emissionen zu verdienen, während Wähler, die für diesen Gauge stimmen, MUSD-Rendite erhalten.

## Emissionen

Neue MEZO-Token, die in jeder Epoche an Staking-Gauges, Validatoren und veMEZO-Inhaber (als Rebases) verteilt werden. Die Emissionen folgen einem Halving-Plan: 25 % pro Jahr in den Jahren 0–2, danach sinkend auf ca. 2 % nach Jahr 8.

## Chain Splitter

Der erste Splitter in der Emissionshierarchie. Er legt fest, welcher Prozentsatz der Emissionen an Validatoren (anfangs 20 %) und welcher an das übrige System geht.

## Ecosystem Splitter

Der zweite Splitter. Er leitet die Nicht-Validator-Emissionen an Staking-Gauges weiter. Dieses Verhältnis ist derzeit fest und per Governance gesperrt.
