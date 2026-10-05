---
title: Vault-Hinweise
description: Aktuelle Hinweise zur Abwicklung und Migration von Mezo-Vaults
topic: users
---

Auf dieser Seite finden Sie aktuelle Hinweise zur Migration und Abwicklung von Vaults in Mezo Earn.

| Vault | Status | Was Sie tun müssen |
| --- | --- | --- |
| **BTC Vault** | Wird abgewickelt. Einzahlungen sind geschlossen. | Heben Sie bis zum **28. Oktober 2026** ab |
| **cbBTC Vault** | Einzahlungen sind geschlossen. Die Migration in den BTC Vault ist beendet. | Heben Sie Ihr verbleibendes Guthaben im cbBTC Vault ab |
| **Stablecoin Vault** | Einzahlungen sind pausiert, und der Vault wird abgewickelt | Starten Sie Ihre Abhebung bis zum **31. Juli 2026** |

:::caution[Abhebungen brauchen Zeit]
Abhebungen aus dem Stablecoin Vault erfolgen nicht sofort. Sie laufen über eine Abhebungswarteschlange, deren Verarbeitung etwa 48 Stunden dauern kann.
:::

## Abwicklung des BTC Vault

Der BTC Vault (mbhBTC), der gemeinsam mit Mellow und Sense Capital betrieben wird, wird abgewickelt. Einzahlungen sind geschlossen. Heben Sie Ihr Guthaben bis zum **28. Oktober 2026** ab.

Abhebungen werden in eine Warteschlange gestellt – beginnen Sie also frühzeitig. Sie müssen Ihre Abhebung bis zum 28. Oktober beantragen; Verarbeitung und Beanspruchung können danach erfolgen. Wenn Sie eine Abhebung beantragen, wird Ihr Guthaben nicht sofort an Ihre Wallet zurückgegeben.

### Aus dem BTC Vault abheben

1. Öffnen Sie den [BTC Vault](https://mezo.org/earn/vaults/0xE2232789D4cF5bb1ffaDA1a105Cc59B18d639318) und verbinden Sie die Wallet, die Ihre Position hält.
2. Wählen Sie **Withdraw**, legen Sie den Betrag fest und folgen Sie den Aufforderungen zur Transaktion.
3. Warten Sie, bis Ihr Abhebungsantrag verarbeitet wurde.
4. Kehren Sie zur Vault-Seite zurück und beanspruchen Sie Ihre Token, sobald sie bereitstehen.

Wenn Sie zuvor Anteile am cbBTC Vault in den BTC Vault migriert haben, gelten diese Anweisungen auch für diese Position. Im Rahmen dieser Abwicklung gibt es keinen Ersatz-Vault.

### Ihre Position finden

Sobald die Abwicklung angekündigt ist, wird der BTC Vault in der Vault-Liste nur noch für Wallets mit einer verbleibenden Position angezeigt. Inhaber sehen ihn auch nach dem 28. Oktober weiterhin, auch während eine Abhebung aussteht oder zur Beanspruchung bereitsteht. Sie können den Vault auch direkt über den obigen Link öffnen.

### Hilfe nach dem 28. Oktober

Wenden Sie sich an den [Mellow-Support auf Discord](https://discord.com/invite/mellow), wenn Sie nach dem 28. Oktober Hilfe beim Abheben benötigen.

## Abhebungen aus dem cbBTC Vault

Einzahlungen in den cbBTC Vault sind geschlossen, und die Migration in den BTC Vault ist beendet. Wenn Sie noch Anteile am cbBTC Vault (mbhcbBTC) halten, heben Sie Ihr verbleibendes Guthaben aus dem cbBTC Vault ab. Abhebungen sind in der App weiterhin möglich.

Öffnen Sie [Mezo Vaults](https://mezo.org/earn/vaults), verbinden Sie die Wallet, die Ihre Position im cbBTC Vault hält, und wählen Sie auf der Seite des cbBTC Vault **Withdraw**.

## Abwicklung des Stablecoin Vault

Der Stablecoin Vault, den Lhava auf dem Vault-Framework von Mellow betreibt, wird abgewickelt. Einzahlungen sind bereits pausiert.

Wenn Sie eine Position im Vault halten, starten Sie Ihre Abhebung bis zum **31. Juli 2026**. Der Vault unterstützt Positionen, die mit mUSDC, mUSDT oder MUSD finanziert wurden, und gibt **msvUSD**-Beleg-Token aus. Abhebungen werden in mUSDC abgewickelt – unabhängig davon, ob Ihre Position mit mUSDC, mUSDT oder MUSD finanziert wurde.

### So heben Sie ab

1. Rufen Sie [Mezo Vaults](https://mezo.org/earn/vaults) auf und öffnen Sie den **Stablecoin Vault**.
2. Wählen Sie **Withdraw** und folgen Sie den Aufforderungen für Ihre Position.
3. Bestätigen Sie die Transaktion und rechnen Sie mit etwa 48 Stunden, bis die Abhebungswarteschlange verarbeitet ist.

Nach dem 31. Juli 2026 wird der Stablecoin Vault nicht mehr in der App angezeigt. Mellow verwaltet das verbleibende Guthaben und bearbeitet verspätete Abhebungen. Wenn Sie das Abhebungsfenster verpassen, [eröffnen Sie ein Support-Ticket im Discord von Mellow](https://discord.com/invite/mellow).

## Wohin mit Ihren Stablecoins?

Vergleichen Sie vor dem Verschieben von Guthaben in der App das unterstützte Asset, die Strategie, die Abhebungsbedingungen und den aktuellen Satz. Die Sätze sind variabel, und jede Option ist mit Smart-Contract- und Strategierisiken verbunden.

| Option | So funktioniert es | Was Sie beachten sollten | Link |
| --- | --- | --- | --- |
| **MUSD Savings Vault** | Zahlen Sie MUSD ein und erhalten Sie sMUSD. Die Rendite stammt aus der Aktivität des MUSD-Protokolls und schlägt sich im sMUSD-Wechselkurs nieder. | Eine Option mit nur einem Asset, ohne Abhebungsgebühr oder Zeitsperre. Der Satz schwankt mit der Protokollaktivität. Wenn Sie sMUSD staken, ändert sich die Art, wie Sie Belohnungen verdienen. | [MUSD Savings Vault ansehen](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |
| **USDC Lending Vault** | Zahlen Sie mUSDC in den Morpho-Kreditmarkt BTC/mUSDC ein. Verdienen Sie Zinsen von Kreditnehmern oder staken Sie für MEZO-Emissionen. | Prüfen Sie den aktuellen Satz, die für Abhebungen verfügbare Liquidität und die Risiken der Kreditvergabe. Bei hoher Auslastung können Abhebungen eingeschränkt sein. Siehe die Anleitung zum [USDC Lending Vault](/docs/de/docs/users/mezo-earn/vaults/usdc-lending-vault). | [USDC Lending Vault ansehen](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| **mUSDC/MUSD Stable CL Pool** | Stellen Sie mUSDC- und MUSD-Liquidität in einer gewählten Preisspanne bereit, um Handelsgebühren und etwaige verfügbare Anreize zu verdienen. | Erfordert eine aktive Verwaltung der Preisspanne. Eine Position, die aus der Spanne fällt, verdient keine Gebühren mehr, und Liquiditätsanbieter tragen das Risiko eines Impermanent Loss sowie Smart-Contract-Risiken. | [mUSDC/MUSD Stable CL Pool ansehen](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a) |

Weitere Möglichkeiten, Erträge zu erzielen, finden Sie auf den allgemeinen Seiten [Mezo Pools](https://mezo.org/earn/pools) und [Mezo Vaults](https://mezo.org/earn/vaults).
