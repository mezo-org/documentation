---
title: Validator-Gauge
description: >-
  Leitfaden für Validatoren: Belohnungsempfänger verwalten, über
  Validator-Gauges abstimmen und MEZO-Belohnungen beanspruchen.
topic: developers
---

Validatoren können jede Woche MEZO-Emissionen verdienen – allerdings nur, wenn ihr Validator-Gauge in jeder Epoche Stimmen erhält. Ohne Stimmen auf seinem Gauge erhält ein Validator keine Emissionen. Dieser Leitfaden erklärt, wie Sie Belohnungsempfänger verwalten, über Ihren Validator-Gauge abstimmen und Belohnungen beanspruchen.

## Übersicht

Jedem Validator ist ein Gauge im [ValidatorsVoter-Contract](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a) zugeordnet. Belohnungen werden über den ValidatorsVoter-Contract beansprucht, indem die Gauge-Adresse des Validators angegeben wird.

Jeder Gauge hat genau eine Empfängeradresse (Beneficiary), die berechtigt ist, Belohnungen zu beanspruchen. Standardmäßig ist der Empfänger die Operator-Adresse des Validators, die im [Proof-of-Authority-Contract (PoA)](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819) registriert ist.

:::note[Freigabeplan für Belohnungen]
Zugeteilte Epochenbelohnungen können nicht sofort beansprucht werden – sie werden im Laufe der Epoche schrittweise freigegeben. Werden einem Gauge beispielsweise zu Beginn der Epoche N Belohnungen zugeteilt, sind 100 % der Belohnungen der Epoche N am Ende der Epoche verfügbar.
:::

## Belohnungsempfänger ändern

Validatoren können eine andere Adresse festlegen, die die MEZO-Belohnungen erhält. Das ist nützlich, um operative Funktionen und Treasury-Funktionen voneinander zu trennen.

So ändern Sie den Belohnungsempfänger:

1. **Wallet mit Ihrer Operator-Adresse verbinden**
   Verwenden Sie die Wallet, die zur Operator-Adresse Ihres Validators gehört.

2. **Gauge-Adresse ermitteln**
   Rufen Sie `ValidatorsVoter.validatorToGauge()` mit Ihrer Operator-Adresse als Parameter auf.

3. **Empfänger wechseln**
   Rufen Sie `Gauge.switchRewardsBeneficiary()` mit der neuen Empfängeradresse als Parameter auf.
   - Contract: Ihr spezifischer Gauge-Contract (aus Schritt 2)
   - Methode: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Mit dem neuen Empfänger beanspruchen**
   Nach dem Wechsel des Empfängers müssen alle künftigen Beanspruchungen mit der Wallet des neuen Empfängers ausgeführt werden.

:::caution[Best Practice]
Es wird empfohlen, alle verfügbaren Belohnungen mit dem aktuellen Empfänger zu beanspruchen, bevor Sie zu einem neuen wechseln. Wenn Sie den Empfänger wechseln, während noch nicht beanspruchte Belohnungen vorhanden sind, bleiben diese Belohnungen der alten Empfängeradresse zugeordnet und müssen separat beansprucht werden.
:::

## Über Ihren Validator-Gauge abstimmen

Abstimmen ist unerlässlich, um MEZO-Emissionen zu verdienen – ein Validator-Gauge, der in einer Epoche keine Stimmen erhält, bekommt für diese Epoche keine Belohnungen. Validatoren können über ihren eigenen Gauge abstimmen, um MEZO-Emissionen zu lenken. Stimmen für Validator-Gauges sind **unabhängig** von anderen Gauge-Stimmen in Mezo Earn. Wenn Sie beispielsweise bereits mit 100 % Ihrer Stimmkraft für einen Pool-Gauge abgestimmt haben, können Sie trotzdem mit 100 % Ihrer Stimmkraft für Ihren Validator-Gauge (oder den Gauge eines anderen Validators) abstimmen.

veBTC ist das zentrale Asset für die Abstimmung. Mit veMEZO können Sie Ihre Stimmkraft boosten. Eine einmal abgegebene Stimme wird automatisch in die folgenden Epochen übernommen, sofern sie nicht ausdrücklich zurückgesetzt wird.

:::note[Poke für Ihre Position]
Möglicherweise müssen Sie vor der Abstimmung einen Poke für Ihre Position ausführen, damit sie auf dem aktuellen Stand ist. Ein Poke für eine bestehende Stimme ist auch dann sinnvoll, wenn sich Ihre veBTC-Stimmkraft erhöht hat (z. B. durch eine Aufstockung), da er Ihr Stimmgewicht an die neue Stimmkraft anpasst. Details finden Sie in der [Poke-Dokumentation](/docs/de/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke).
:::

### So stimmen Sie ab

1. **Validator-Gauge ermitteln**
   Rufen Sie die Funktion `validatorToGauge` im [ValidatorsVoter-Contract (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) mit Ihrer Validator-Adresse als Parameter auf.

2. **Stimme abgeben**
   Rufen Sie die Funktion `vote` im [ValidatorsVoter-Contract (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy) auf. Der Parameter `tokenId` ist die ID Ihres veBTC-NFT. Wenn Sie nur über Ihren eigenen Validator-Gauge abstimmen, können Sie das Gewicht auf `100` setzen (entspricht 100 % Ihrer Stimmkraft).

### Anreize für Ihren Gauge schaffen

Validatoren können auf Plattformen wie [Matchbox](https://matchbox.markets/) Anreize (Incentives) für ihren veBTC-Boost-Gauge hinterlegen, um veMEZO-Stimmen anzuziehen, die ihre veBTC-Stimmkraft boosten.
Diese geboostete veBTC-Stimmkraft kann dann genutzt werden, um mehr Stimmen auf den Validator-Gauge zu lenken und so die MEZO-Emissionen zu erhöhen.

Mezo Earn umfasst außerdem einen separaten Anreizmechanismus für Validator-Gauges; dieser spezielle Ablauf ist auf Matchbox derzeit jedoch nicht verfügbar.

## Belohnungen beanspruchen

So beanspruchen Sie Ihre MEZO-Belohnungen:

1. **Wallet mit Ihrer Operator-Adresse verbinden**
   Verwenden Sie die Wallet, die zur Operator-Adresse Ihres Validators gehört.

2. **Gauge-Adresse ermitteln**
   Rufen Sie `ValidatorsVoter.validatorToGauge()` mit Ihrer Operator-Adresse als Parameter auf.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Methode: `validatorToGauge(address validator)`

3. **Belohnungen beanspruchen**
   Rufen Sie `ValidatorsVoter.claimRewards()` mit Ihrer Gauge-Adresse als Parameter auf.
   - Contract: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Methode: `claimRewards(address gauge)`

## Contract-Adressen

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **PoA-Contract**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Weitere Ressourcen

- [Mezo Earn – Übersicht](/docs/de/docs/users/mezo-earn/overview/)
- [Mezo Blog](https://mezo.org/blog/tag/features/)
