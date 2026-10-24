---
title: MUSD Savings Vault
description: Verdienen Sie mit dem Mezo Savings Vault gebührenbasierte Rendite auf MUSD
topic: users
---

Der MUSD Savings Vault ist das native Sparprodukt von Mezo für MUSD-Inhaber.

**So funktioniert es:**

- Zahlen Sie MUSD ein und erhalten Sie sMUSD – einen Beleg-Token, der Ihren Anteil am Vault repräsentiert
- Die Rendite schlägt sich im sMUSD-Wechselkurs nieder: Mit der Zeit lässt sich 1 sMUSD gegen mehr als 1 MUSD einlösen. Wenn Sie abheben, erhalten Sie mehr MUSD, als Sie eingezahlt haben.
- Die Rendite stammt aus zwei Quellen innerhalb des MUSD-Systems: aus den MUSD-Protokollgebühren (Kreditzinsen, Ausgabegebühren, Refinanzierungsgebühren) und aus BTC-Gebühren aus MUSD-Kreditvorgängen, die in MUSD umgetauscht und wöchentlich ausgeschüttet werden
- Beide Ströme werden vom Protokoll wöchentlich an den Vault ausgeschüttet
- Der APR ist variabel und hängt von der Protokollaktivität ab – den aktuellen Satz finden Sie unter [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Aufteilung der Gebühren

Die MUSD-Protokollgebühren werden im Verhältnis 50/50 auf zwei Ziele aufgeteilt:

- **MUSD Savings Vault** – Ausschüttung an sMUSD-Inhaber bzw. bei gestakten sMUSD Umleitung an veBTC-Abstimmende
- **Rückzahlung des [Bootstrap-Kredits des Protokolls](/docs/de/docs/users/borrow/architecture-and-terminology/#bootstrap-kredit-des-protokolls)**

Diese Aufteilung kann über den MUSD-Splitter per Governance angepasst werden, wobei mindestens 50 % in die Kreditrückzahlung fließen, bis der Bootstrap-Kredit vollständig zurückgezahlt ist. Nach der Rückzahlung fließen alle Gebühren in den Savings Vault. Alle Details finden Sie unter [MUSD-Gebühren](/docs/de/docs/users/borrow/fees/).

---

## sMUSD verstehen

sMUSD ist Ihr Beleg-Token für den Mezo MUSD Savings Vault. Einige wichtige Punkte:

- **Die Rendite steckt im Wechselkurs, nicht in Ihrem Guthaben.** Ihr sMUSD-Guthaben bleibt nach der Einzahlung gleich, aber jeder sMUSD lässt sich mit der Zeit gegen mehr MUSD einlösen, da der Vault Gebühren ansammelt. Den Unterschied sehen Sie beim Abheben.
- **Die Rendite wird wöchentlich ausgeschüttet.** Das Protokoll schüttet die angesammelten Gebühren jede Woche an den Vault aus. Der Wechselkurs sMUSD/MUSD wird bei jeder Ausschüttung aktualisiert.
- **sMUSD ist übertragbar.** Sie können sMUSD wie jeden anderen Token senden oder halten. Wer sMUSD zum Zeitpunkt der Abhebung hält, löst die angesammelte Rendite ein.
- **Wenn Sie sMUSD im Gauge staken, wird Ihre Rendite umgeleitet.** Gestakte sMUSD verdienen MEZO-Emissionen statt direkter Gebühreneinnahmen. Die Gebühreneinnahmen, die Ihnen zugestanden hätten, werden an veBTC-Abstimmende umgeleitet, die für den MUSD-Savings-Gauge gestimmt haben. Wenn Sie das Staking beenden, erhalten Sie wieder direkt Rendite.

---

## Details zum Vault

| Parameter | Wert |
|-----------|-------|
| Einzahlungs-Token | MUSD |
| Beleg-Token | sMUSD |
| Stratege | Mezo |
| Abhebungsgebühr | Keine |
| Zeitsperre für Abhebungen | 0 h |
| Aktueller APR | Variabel – siehe [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## sMUSD im Gauge staken

Optional können Sie Ihren sMUSD-Beleg-Token im MUSD-Savings-Gauge staken, um MEZO-Token-Emissionen zu verdienen.

**Der Kompromiss:**

- **Nicht gestakte sMUSD:** Sie verdienen direkt Ihren proportionalen Anteil an der Vault-Rendite sowie an den MUSD-Zins- und -Gebühreneinnahmen
- **Gestakte sMUSD:** Ihr Anteil an den Zins- und Gebühreneinnahmen wird an die veBTC-Abstimmenden des Gauges umgeleitet. Im Gegenzug verdienen Sie Emissionen, die davon abhängen, wie viele Stimmen der Gauge erhält

Das entspricht dem LP-Staking in den Liquiditätspools der nativen DEX von Mezo – Staker verzichten auf Gebühreneinnahmen und erhalten dafür Emissionen, während Abstimmende die umgeleiteten Gebühren verdienen.

Der MUSD Savings Rate Gauge konkurriert mit den Gauges der LP-Pools um Stimmen. Diese werden zusammen als „Staking-Gauges“ bezeichnet – eine Stimme, die dem Savings-Rate-Gauge zugeteilt ist, kann nicht zugleich einem LP-Gauge zugeteilt werden.

Seit die MEZO-Emissionen aktiv sind, verdienen Sie beim Staking von sMUSD im Gauge zusätzlich zu Ihrer Basisposition MEZO. Der MUSD-Savings-Gauge konkurriert mit den Gauges der LP-Pools um veBTC-Stimmen – je mehr Stimmen auf den Savings-Gauge gelenkt werden, desto mehr MEZO-Emissionen gehen an die Staker. veBTC-Abstimmende, die den Gauge unterstützen, verdienen die MUSD-Gebühren, die die Staker umleiten. Den aktuellen Gauge-APR für Staker und Abstimmende sehen Sie auf der Seite „Vote“ unter [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Risiken

### Strategierisiko
Jeder Vault setzt Vermögenswerte auf andere Weise ein. Machen Sie sich vor der Einzahlung mit der zugrunde liegenden Strategie vertraut – manche Strategien sind riskanter als andere.

### Smart-Contract-Risiko
Vaults interagieren mit mehreren Smart Contracts. Auch wenn die Vaults von Mezo auditiert sind, birgt jeder Smart Contract ein inhärentes Risiko. Zahlen Sie nur Beträge ein, bei denen Sie sich wohlfühlen.
