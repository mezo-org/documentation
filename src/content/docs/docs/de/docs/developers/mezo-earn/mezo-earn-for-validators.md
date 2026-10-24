---
title: Mezo Earn für Validatoren
description: >-
  Wie Validatoren am ökonomischen Motor von Mezo teilnehmen, Anreize erhalten
  und mit veBTC, veMEZO, Gauges und LP-Staking zusammenwirken.
topic: developers
---

Diese Seite erklärt, wie Validatoren am ökonomischen Motor von Mezo (Mezo Earn) teilnehmen, wie sie Anreize erhalten und wie dies mit veBTC, veMEZO, Gauges und LP-Staking zusammenhängt.

Sie richtet sich an:

- aktuelle und künftige Mezo-Validatoren
- Infrastrukturanbieter und Partner
- veBTC-/veMEZO-Inhaber und LPs, die verstehen möchten, wie Validator-Belohnungen funktionieren

:::note

Das Mezo-Whitepaper ist die maßgebliche Quelle für die Mechanismen und Formeln hinter veBTC, veMEZO, Gauges, Splittern und Emissionen.

:::

---

## Kurzübersicht

Grob zusammengefasst:

- Validatoren sichern die Mezo-Chain und verdienen MEZO-Belohnungen über den Chain Splitter in Mezo Earn.
- veBTC-Inhaber sind der Governance-Anker. Sie stimmen über Staking-Gauges ab, um Emissionen zu lenken.

**Zentrale Mechanismen:**

- **Aufteilung der Emissionen:** Die Splitter-Verhältnisse (Chain Splitter und Ecosystem Splitter) sind derzeit fest und per Governance festgeschrieben. Künftig könnten sie über Governance-Mechanismen anpassbar werden.
- **Rolle von veMEZO:** veMEZO wirkt als Boost auf die veBTC-Stimmkraft (bis zu einem gedeckelten Multiplikator), ersetzt BTC als Anker aber nie.

---

## Grundkonzepte

### Wichtige Definitionen

Um Mezo Earn zu verstehen, unterscheiden wir drei ökonomische Begriffe:

- **Belohnungen (Rewards):** Was Akteure als Gegenleistung für ihre Arbeit erhalten (z. B. MEZO-Emissionen).
- **Anreize (Incentives):** Regeln oder Vorteile, die bestimmte Verhaltensweisen fördern sollen (z. B. einen Boost für das Halten von veMEZO zu erhalten).
- **Bribes:** Ein befristetes Budget, das Protokolle oder Nutzer bereitstellen, um eine bestimmte Handlung zu fördern (z. B. die Abstimmung für einen bestimmten Gauge).

### Akteure in Mezo Earn

Mezo Earn koordiniert fünf Hauptakteure:

1. **Endnutzer / Sperrende von veBTC und veMEZO:** Sperren BTC oder MEZO, erhalten veBTC- und veMEZO-NFTs, stimmen in Gauges ab und beanspruchen Gebühren/Emissionen.
2. **Liquiditätsanbieter (LPs):** Stellen DEX-Liquidität bereit und erhalten LP-Token und Gebühren; optional können sie LP-Token in Staking-Gauges staken, um Gebühren gegen MEZO-Emissionen einzutauschen.
3. **Validatoren:** Betreiben Nodes der Mezo-Chain, nehmen am Konsens teil und erhalten MEZO-Emissionen über den Chain Splitter.
4. **Protokolle:** Platzieren Bribes auf Gauges, um Liquidität oder Governance-Stimmen anzuziehen.
5. **Die Chain:** Erhebt Swap- und Chain-/Bridging-Gebühren und verteilt sie über Earn um.

---

## Wie Validatoren Emissionen erhalten

Der Chain Splitter sendet einen festen Anteil der Belohnungsemissionen an Validatoren, derzeit 20 % der Belohnungsemissionen. Dieses Verhältnis ist per Governance festgeschrieben.

Validator-Emissionen werden zu gleichen Teilen auf die aktiven Validatoren verteilt. Derzeit gibt es keinen Mechanismus, mit dem veBTC-Inhaber über einzelne Validatoren abstimmen oder Emissionen an bestimmte Validatoren lenken können.

---

## veBTC-Boost-Gauges und Matching-Markt

veBTC-Boost-Gauges und der Matching-Markt sind zwar nicht spezifisch für Validatoren, beeinflussen aber direkt, wie effizient Validatoren und LPs Stimmen anziehen können.

- Jedes veBTC-NFT hat seinen eigenen Boost-Gauge (Non-Staking).
- veMEZO-Inhaber stimmen mit ihrem veMEZO-Gewicht über diese Gauges ab.

**Marktdynamik:**

- **Teilnehmer mit viel BTC und wenig MEZO:** Bieten Anreize (Bribes) auf ihren veBTC-Boost-Gauges an, um veMEZO-Stimmen anzuziehen und ihren Multiplikator zu erhöhen (auf bis zu 5x).
- **Teilnehmer mit viel MEZO und wenig BTC:** Lenken veMEZO-Stimmen auf veBTC-Boost-Gauges, um diese Anreize zu verdienen, ohne BTC zu halten.

---

## LP-Staking und sein Zusammenhang mit Validatoren

### Was ist LP-Staking?

LPs stellen DEX-Pools auf Mezo Liquidität bereit und erhalten LP-Token, die ihren Anteil am Pool repräsentieren. Sie können zwischen zwei Modi wählen:

**1. Nicht gestakte LP-Token:**

- LPs behalten die LP-Token in ihrer Wallet.
- Sie verdienen ihren anteiligen Anteil an den Swap-Gebühren direkt aus dem Pool.
- An sie werden keine MEZO-Emissionen geleitet.

**2. Gestakte LP-Token:**

- LPs staken LP-Token in einem Staking-Gauge.
- Der zugrunde liegende Gebührenanteil der gestakten LP-Token wird an die veBTC-Abstimmenden umgeleitet, die für diesen Gauge stimmen.
- LPs erhalten stattdessen die MEZO-Emissionen, die an diesen Gauge geleitet werden.

**Der ökonomische Tausch:**

- LPs tauschen direkte reale Rendite (Gebühren) gegen MEZO-Emissionen.
- Abstimmende mit veBTC + veMEZO tauschen ihre Stimmkraft gegen Ansprüche auf diese umgeleiteten Gebühren und auf alle Anreize, die dem Gauge hinzugefügt werden.

### Wie sich LP-Staking auf Validatoren auswirkt

Über den Splitter-Baum:

- Der **Chain Splitter** bestimmt, welcher Anteil des Belohnungstopfs auf Validator- und welcher auf Nicht-Validator-Aktivitäten entfällt. Dieses Verhältnis ist derzeit auf 20 % Validatoren / 80 % Ökosystem festgelegt und per Governance festgeschrieben.
- Der **Ecosystem Splitter** lenkt den Nicht-Validator-Topf an Staking-Gauges (LP-Pools + MUSD-Savings). Dieses Verhältnis ist derzeit fest und per Governance festgeschrieben.
- LP-Gauges konkurrieren dann innerhalb ihres Zweigs mit dem MUSD-Savings-Gauge und anderen LP-Gauges um Emissionen.

---

## Schritt für Schritt: LP-Staking

1. **Liquidität bereitstellen:** Wählen Sie einen Pool auf der Mezo-DEX, zahlen Sie Assets ein und erhalten Sie LP-Token.

2. **Staking-Gauge finden:** Öffnen Sie das Earn- oder DEX-Frontend, suchen Sie den Staking-Gauge für den Pool und vergewissern Sie sich, dass er LP-Token akzeptiert.

3. **LP-Token staken:** Erteilen Sie dem Contract eine Freigabe und staken Sie den gewünschten Betrag. Dadurch werden die Pool-Gebühren in den Gebührentopf des Gauges umgeleitet und MEZO-Emissionen an die Staker der LP-Token verteilt.

4. **veBTC-Abstimmung über den LP-Gauge:** Inhaber von veBTC (+veMEZO) können über den LP-Gauge abstimmen. Ein höheres Stimmgewicht leitet mehr MEZO-Emissionen an den Gauge und mehr Pool-Gebühren/Bribes an die Abstimmenden.

5. **Belohnungen beanspruchen:**
   - **LPs:** Beanspruchen MEZO-Emissionen (pro Epoche zugeteilt).
   - **veBTC-Abstimmende:** Beanspruchen ihren Anteil an umgeleiteten Swap-Gebühren und Anreizen.

---

## MUSD-Savings-Gauge

Die MUSD Savings Rate ist als weiterer Staking-Gauge umgesetzt.

- Nutzer zahlen MUSD in einen Savings-Vault ein und erhalten einen Beleg-Token (Receipt-Token).
- Wenn sie den Beleg-Token im MUSD-Savings-Gauge staken:
  - wird ihre direkte MUSD-Rendite in den Gebührentopf des Gauges umgeleitet.
  - verdienen sie stattdessen MEZO-Emissionen, die an diesen Gauge geleitet werden.
- veBTC-Inhaber, die über den MUSD-Savings-Gauge abstimmen, erhalten:
  - MUSD-Rendite (aus Zinsen, Eröffnungs- und Refinanzierungsgebühren).
  - alle MEZO-Anreize, die an diesen Gauge geleitet werden.

Dieser Gauge konkurriert direkt mit LP-Gauges um Emissionen aus dem Staking-Zweig und um die Aufmerksamkeit der Abstimmenden.

---

## Kontakt und Support auf Discord

Bei validatorspezifischen Fragen, zum Onboarding und zur Koordination: Treten Sie dem [Mezo Discord](https://discord.mezo.org) bei und besuchen Sie uns im Kanal #developers.
