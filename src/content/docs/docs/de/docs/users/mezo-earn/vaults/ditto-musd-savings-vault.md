---
title: Ditto MUSD Savings Vault
description: >-
  Zahlen Sie MUSD auf Mezo ein und erhalten Sie dMUSD für einen automatisierten
  Cross-Chain-Vault mit anfänglicher Allokation in Spark Savings
topic: users
---

Der Ditto MUSD Savings Vault bietet MUSD-Inhabern eine weitere Möglichkeit, ihre Vermögenswerte über Mezo Earn arbeiten zu lassen. Zahlen Sie MUSD auf Mezo ein und erhalten Sie **dMUSD**, einen Beleg-Token, der Ihre Position im Vault repräsentiert. Ditto Network übernimmt im Hintergrund die Swaps, das Bridging und die Allokation, wobei anfänglich in **Spark Savings auf Ethereum** investiert wird.

Sie halten eine Vault-Position auf Mezo, während Ditto die Schritte übernimmt, die nötig sind, um die zugrunde liegende Rendite auf einer anderen Chain zu erschließen.

Entdecken Sie den [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## So funktioniert es

1. **Zahlen Sie MUSD auf Mezo ein.** Sie erhalten dMUSD, die Ihre Position im Vault repräsentieren.
2. **Ditto allokiert die Vermögenswerte.** Operatoren übernehmen die Swaps und das Bridging zu Ethereum und investieren anschließend in Spark Savings.
3. **Die zugrunde liegende Strategie erwirtschaftet Rendite.** Ihre dMUSD verbriefen einen Anspruch auf die Vermögenswerte des Vaults. Die Erträge hängen von der zugrunde liegenden Strategie ab und sind variabel.
4. **Beantragen Sie eine Einlösung, um auszusteigen.** Ditto kehrt den Prozess um und gibt Ihnen MUSD auf Mezo zurück, nachdem die Abhebung verarbeitet wurde.

### So funktioniert die Automatisierung

Mehrere Operatoren überprüfen vorgeschlagene Vault-Aktionen unabhängig voneinander, bevor sie diese signieren. Für die Ausführung ist eine Mindestanzahl an Freigaben durch Operatoren erforderlich, und Smart Contracts setzen onchain zusätzliche Prüfungen durch. Die Bewertung des Vaults (Nettoinventarwert, NAV) wird ebenfalls über die signierte Pipeline onchain veröffentlicht.

Diese Prüfungen steuern die automatisierte Ausführung; sie beseitigen jedoch keine Smart-Contract-, Bridge-, Operator- oder Strategierisiken.

## Details zum Vault

| Parameter          | Wert                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Einzahlungs-Asset      | MUSD auf Mezo                                                                                                                                                                   |
| Beleg-Token      | dMUSD                                                                                                                                                                          |
| Vault-Operator     | Ditto Network                                                                                                                                                                  |
| Anfängliche Allokation | Spark Savings auf Ethereum                                                                                                                                                      |
| Einlösungs-Asset   | MUSD auf Mezo                                                                                                                                                                   |
| Abhebungen        | Asynchron – planen Sie Zeit für die Verarbeitung ein                                                                                                                                       |
| Aktueller APY        | Ca. 3,60 % (Stand: 29. September 2026), entsprechend Spark Savings – variabel; siehe [Vault-Seite](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

Die Wertentwicklung in der Vergangenheit spiegelt nicht die aktuelle Wertentwicklung wider und ist keine Garantie für künftige Erträge. Prüfen Sie vor einer Einzahlung in der App den aktuellen Satz, etwaige Gebühren, die Abhebungsbedingungen und die Risiken.

## So zahlen Sie ein

1. Öffnen Sie den [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) und verbinden Sie Ihre Wallet auf Mezo.
2. Prüfen Sie die Strategie, den aktuellen Satz und die Abhebungsbedingungen.
3. Geben Sie den MUSD-Betrag ein, den Sie einzahlen möchten, und folgen Sie den Aufforderungen der App zur Freigabe und Einzahlung.
4. Bestätigen Sie die erforderlichen Transaktionen in Ihrer Wallet. Ihre dMUSD-Beleg-Token repräsentieren Ihre Vault-Position.

## Abhebungen

Beantragen Sie über die Vault-Seite eine Einlösung und folgen Sie den Aufforderungen für Ihre dMUSD-Position. Ditto löst die zugrunde liegende Allokation auf, führt bei Bedarf Bridging und Swaps durch und gibt Ihnen MUSD auf Mezo zurück.

**Abhebungen erfolgen asynchron.** Wenn Sie einen Einlösungsantrag stellen, bedeutet das nicht, dass die MUSD sofort in Ihrer Wallet verfügbar sind. Planen Sie Zeit für die Verarbeitung der zugrunde liegenden Strategie und der Cross-Chain-Vorgänge ein, und folgen Sie allen Abschlussschritten, die in der App angezeigt werden. Die Bearbeitungsdauer kann variieren; gehen Sie nicht von einem festen Abhebungszeitraum aus.

Wenn Sie Hilfe bei einer ausstehenden Einlösung benötigen, wenden Sie sich mit Ihrer Wallet-Adresse, dem Transaktions-Hash und dem Zeitpunkt Ihres Antrags an den [Mezo-Support](/docs/de/docs/users/resources/support).

## Unterschiede zwischen dMUSD und sMUSD

Der Ditto-Vault ist ein eigenständiges Produkt, getrennt vom nativen [MUSD Savings Vault](/docs/de/docs/users/mezo-earn/vaults/musd-savings-vault) von Mezo:

- **dMUSD:** Eine Position im von Ditto betriebenen Vault, die anfänglich in Spark Savings auf Ethereum investiert ist. Bei Einlösungen erhalten Sie MUSD auf Mezo über einen asynchronen Prozess zurück.
- **sMUSD:** Eine Position im nativen Spar-Vault von Mezo, die Rendite aus der Aktivität des MUSD-Protokolls erzielt.

Die Beleg-Token repräsentieren unterschiedliche Vaults. Prüfen Sie vor einer Einzahlung oder Einlösung jeweils die Bedingungen des betreffenden Vaults.

## Risiken

- **Smart-Contract-Risiko:** Ein Fehler oder Exploit im Vault, in den Automatisierungs-Contracts oder in den zugrunde liegenden Protokollen kann zum Verlust von Guthaben führen.
- **Cross-Chain-Risiko:** Swaps und Bridging schaffen zusätzliche Abhängigkeiten. Bridge-Ausfälle, Netzwerkverzögerungen oder eine ungünstige Ausführung können die Position und den Einlösungsprozess beeinträchtigen.
- **Strategie- und Stablecoin-Risiko:** Die Erträge hängen von Spark Savings und den von der Strategie verwendeten Assets ab. Zinssätze können sich ändern, und Stablecoins können ihre Bindung verlieren.
- **Operator-Risiko:** Die Verarbeitung setzt ausreichende Freigaben durch Operatoren und eine erfolgreiche Ausführung voraus. Ausfallzeiten oder Fehler von Operatoren können Vault-Aktionen verzögern.
- **Abhebungsrisiko:** Die Vermögenswerte müssen aus der zugrunde liegenden Allokation verfügbar gemacht und zu Mezo zurückgeführt werden. Möglicherweise können Sie nach dem Einlösungsantrag nicht sofort auf Ihre MUSD zugreifen.

## Links und Ressourcen

- [Ditto MUSD Savings Vault auf Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Dokumentation von Ditto Network](https://docs.dittonetwork.io/)
- [Dokumentation von Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Mezo-Support](/docs/de/docs/users/resources/support)
