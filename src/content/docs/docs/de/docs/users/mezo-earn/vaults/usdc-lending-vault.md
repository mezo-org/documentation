---
title: USDC Lending Vault
description: >-
  Stellen Sie mUSDC dem BTC-besicherten Morpho-Kreditmarkt auf Mezo bereit und
  verdienen Sie Zinsen der Kreditnehmer oder MEZO-Emissionen
topic: users
---

Der USDC Lending Vault verschafft Ihnen ein direktes Engagement in einem transparenten Markt für BTC-besicherte Kredite. Zahlen Sie mUSDC ein, und Ihr Kapital wird Kreditnehmern bereitgestellt, die BTC als Sicherheit hinterlegen. Die von den Kreditnehmern gezahlten Zinsen sind die Quelle der Rendite für Einzahler.

Technisch fließen die Einzahlungen in einen kuratierten Morpho Vault V2 (den Morpho BTC-mUSDC Vault), der in Ihrem Namen dem Morpho-Blue-Markt BTC / mUSDC Liquidität bereitstellt. Sie interagieren nicht direkt mit Morpho – Sie halten einen Anteils-Token, dessen Wert mit den auflaufenden Zinsen steigt.

Den Vault finden Sie unter [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Wie Sie mUSDC gegen BTC leihen, erfahren Sie unter [So leihen Sie mUSDC](/docs/de/docs/users/borrow/how-to-borrow-musdc).

**So funktioniert es:**

- Zahlen Sie mUSDC ein und erhalten Sie `morphoBTC-mUSDC` – einen Anteils-Token, der Ihren Anspruch auf den Vault repräsentiert
- Die Rendite schlägt sich im Anteilspreis nieder: Dieselbe Anzahl an Anteilen lässt sich im Lauf der Zeit gegen mehr mUSDC einlösen
- Die Kredite sind durch BTC überbesichert (Liquidations-LTV von 86 %). Eingezahlte Vermögenswerte werden nicht weiterverpfändet (keine Rehypothecation)
- Es gibt keine Mindesteinzahlung und keine Protokollgebühr für Ein- oder Ausstieg
- Der APR ist variabel und hängt von der Nachfrage der Kreditnehmer ab – den aktuellen Satz finden Sie unter [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Ihre Anteile verstehen

`morphoBTC-mUSDC` ist Ihr Vault-Anteils-Token. Einige wichtige Punkte:

- **Die Rendite steckt im Umtauschkurs, nicht in Ihrem Guthaben.** Ihr Anteilsguthaben bleibt nach der Einzahlung gleich, aber jeder Anteil lässt sich gegen mehr mUSDC einlösen, während Kreditnehmer Zinsen zahlen. Den Unterschied sehen Sie bei der Abhebung.
- **Anteile entsprechen nicht 1:1 mUSDC.** Hat der Vault bereits Zinsen erwirtschaftet, erhalten Sie für eine Einzahlung von 100 mUSDC weniger als 100 Anteile – und jeder Anteil ist mehr als 1 mUSDC wert.
- **Wenn Sie für Emissionen staken, werden Ihre Zinsen umgeleitet.** Gestakte Anteile verdienen MEZO statt Zinsen der Kreditnehmer. Die Zinsen, die Ihnen zugestanden hätten, werden an veBTC-Wähler des Gauges des Lending Vault umgeleitet.

---

## Details zum Vault

| Parameter | Wert |
|-----------|-------|
| Einzahlungs-Token | mUSDC |
| Anteils-Token | `morphoBTC-mUSDC` |
| Zugrunde liegender Markt | Morpho Blue BTC / mUSDC |
| Liquidations-LTV | 86 % |
| Kurator | Mezo-Governance |
| Abhebungsgebühr | Keine |
| Aktueller APR | Variabel – siehe [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Zwei Wege zu verdienen

Wie bei anderen Earn-Produkten auf Mezo wählen Sie, wie jeder Anteil vergütet wird:

- **Halten für Zinsen** – Behalten Sie `morphoBTC-mUSDC` in Ihrer Wallet. Ihre Anteile gewinnen an Wert, während Kreditnehmer Zinsen zahlen.
- **Staken für MEZO-Emissionen** – Staken Sie Ihre Anteile im Gauge des Lending Vault. Sie verdienen MEZO; die Zinsen, die diese Anteile verdient hätten, gehen stattdessen an die Wähler.

Ein einzelner Anteil kann nicht beides gleichzeitig verdienen, aber Sie können Ihre Bestände aufteilen – einen Teil für Emissionen staken und den Rest für Zinsen halten. Einzahlen und Staken sind in der App getrennte Schritte: Zahlen Sie zuerst ein, um Anteile zu erhalten, und staken Sie dann optional.

**So verlassen Sie eine gestakte Position:** Unstaken, dann in Vault-Anteile zurücktauschen und anschließend in mUSDC abheben. Durch das Unstaking verfallen beanspruchbare MEZO nicht.

---

## Abhebungen

Bei Abhebungen erhalten Sie Ihre mUSDC zurück (zuzüglich aufgelaufener Zinsen, wenn Sie gehalten haben). Da Ihre mUSDC an Kreditnehmer verliehen sind, kann der Vault nur auszahlen, was aktuell verfügbar – also nicht verliehen – ist.

- Die App zeigt einen Betrag **Available to withdraw** an, der auf der aktuellen Liquidität des Vaults basiert
- Bei hoher Auslastung kann eine große Abhebung möglicherweise nur teilweise ausgeführt werden oder vorübergehend blockiert sein, bis Kreditnehmer zurückzahlen oder neues Angebot hinzukommt
- Gestakte Anteile müssen vor der Abhebung aus dem Staking genommen werden

Dies ist normales Verhalten eines Kreditmarkts, kein Fehler des Vaults.

---

## Risiken

### Smart-Contract-Risiko

Die Mittel durchlaufen den Lending-Vault-Adapter, den Morpho Vault V2 und den Morpho-Blue-Markt. Ein Fehler oder Exploit in einer dieser Komponenten könnte zum Verlust von Mitteln führen.

### Illiquiditätsrisiko

Bei hoher Auslastung durch Kreditnehmer können Sie möglicherweise nicht alle Ihre mUSDC sofort abheben. Stellen Sie nur Mittel bereit, deren vorübergehende Bindung Sie sich leisten können.

### Kreditmarktrisiko

Kreditnehmer werden bei einem LTV von 86 % liquidiert. Bei einem starken, schnellen Kursrückgang von BTC können uneinbringliche Forderungen (Bad Debt) entstehen, die über einen sinkenden Anteilspreis auf alle Anbieter verteilt werden – es gibt keinen Versicherungsfonds. Ihre Position ist zudem in mUSDC denominiert, sodass sich ein Depeg auf Ihre Bestände auswirkt.

### Kuratorrisiko

Die Mezo-Governance kuratiert, welchen Märkten der Vault Liquidität bereitstellt, sowie die Angebotsobergrenzen. Kuratoränderungen am Morpho Vault V2 unterliegen einem Timelock.

---

## Contracts

| Contract | Adresse |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Lending-Vault-Adapter | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Vault-Gauge | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Details zum Morpho-Blue-Markt finden Sie in der [Morpho-Dokumentation](https://docs.morpho.org/).
