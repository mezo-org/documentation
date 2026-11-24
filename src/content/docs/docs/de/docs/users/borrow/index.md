---
title: MUSD-Stablecoin-Übersicht
description: >-
  Alles, was Sie über MUSD wissen müssen, den Bitcoin-besicherten Stablecoin von
  Mezo.
topic: users
---

## Was ist MUSD?

Bitcoin-Inhaber standen bisher vor einer unmöglichen Wahl: ihre BTC verkaufen, um Ausgaben zu decken, einem zentralisierten Kreditgeber die Verwahrung ihrer Bitcoin anvertrauen oder unbegrenzt halten und auf die Liquidität verzichten, die sie im Alltag brauchen.

MUSD ändert das. MUSD ist ein erlaubnisfreier Stablecoin, zu 100 % durch Bitcoin-Reserven gedeckt und darauf ausgelegt, eine 1:1-Bindung an den US-Dollar zu halten. Minten Sie MUSD, indem Sie BTC als Sicherheit hinterlegen, geben Sie es überall dort aus, wo Dollar akzeptiert werden, und behalten Sie die ganze Zeit Ihr volles Bitcoin-Exposure. Wenn Sie fertig sind, zahlen Sie die geliehenen MUSD zuzüglich Zinsen zurück und erhalten Ihre BTC zurück.

![Mit MUSD BTC behalten und ausgeben](/docs/images/musd/musd-keep-and-spend-btc.png)

### Warum MUSD?

1. **Verkaufen Sie niemals Ihre Bitcoin** – Leihen Sie sich bis zu 90 % des Werts Ihrer BTC-Bestände. Behalten Sie Ihre Sats, nutzen Sie das Kapital in Ihren Bitcoin und zahlen Sie Ihren Kredit zurück, wann immer Sie möchten.
2. **Feste Zinssätze von 1–5 %** – Ihr Zinssatz wird bei Eröffnung des Kredits festgeschrieben und ändert sich nie. Keine variablen Zinsen, keine Überraschungen. Zum Vergleich: 7–20 % APR bei traditionellen Banken oder 8–9 % auf anderen DeFi-Plattformen.
3. **Vollständig onchain und überprüfbar** – Jeder Kredit und jeder Dollar an Sicherheiten ist rund um die Uhr onchain sichtbar. Keine undurchsichtigen Reserven, keine Verwahrer – nur Bitcoin in einem Smart-Contract-Vault. [Sehen Sie sich die Sicherheiten live im Mezo Explorer an](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Erlaubnisfrei** – Keine Bonitätsprüfungen, keine Anträge, keine Mindestbeträge außer der Untergrenze von 1.800 MUSD. Wenn Sie BTC haben, können Sie leihen.

## So funktioniert MUSD

![Der Lebenszyklus von MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD verwendet ein CDP-Modell (Collateralized Debt Position, besicherte Schuldposition). Jeder ausstehende MUSD kann gegen Bitcoin eingelöst werden, und mit Sicherheiten in BTC im Wert von \$1 lässt sich 1 MUSD minten.

Dieses Modell aus Minten und Einlösen hält MUSD an \$1 gebunden – selbst in volatilen Märkten:

* **MUSD wird unter \$1 gehandelt** – Arbitrageure kaufen vergünstigte MUSD am Markt und lösen sie gegen BTC im Wert von \$1 ein. Dabei zahlen sie eine Einlösungsgebühr von 0,75 %; das bleibt profitabel, bis MUSD \$0,995 erreicht.
* **MUSD wird über \$1 gehandelt** – Arbitrageure minten neue MUSD, indem sie dem Protokoll BTC bereitstellen, und verkaufen diese mit Gewinn am Markt. Das bleibt profitabel, bis MUSD wieder bei \$1,005 liegt.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Damit die Bindung auch bei Marktvolatilität hält, müssen alle Kreditpositionen eine Besicherungsquote von über 110 % aufrechterhalten. Das System setzt dies mit integrierten Liquidationsmechanismen und einem Stability Pool durch – so bleibt das Protokoll selbst bei hohen LTVs sicher und widerstandsfähig.

Wie diese Sicherheitsmechanismen im Einzelnen funktionieren, erfahren Sie unter [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).

### Vorteile des MUSD-Modells

**Angebotsseitige Liquidität**

Im Gegensatz zu traditionellen zweiseitigen Kreditprotokollen, die einen Pool bereits vorhandener Dollar benötigen und Angebot und Nachfrage über variable Zinssätze ausgleichen, wird MUSD direkt aus Bitcoin-Sicherheiten gemintet. Die Liquidität wächst organisch, je mehr Nutzer BTC einzahlen – das System erzeugt sein Angebot selbst, sodass für neue Kreditnehmer stets Liquidität verfügbar ist.

**Feste, niedrige Zinssätze**

Da MUSD gemintet und nicht aus einem Pool geliehen wird, gibt es keinen Wettbewerb um Zinssätze, der die Kosten in die Höhe treibt. Das Ergebnis: feste Zinssätze ab 1 %, festgeschrieben für die gesamte Laufzeit Ihres Kredits. Damit ist MUSD deutlich günstiger als herkömmliche Kreditmärkte, in denen die Zinssätze variabel sind und unvorhersehbar steigen können.

**Kapitaleffizienz**

MUSD unterstützt eine Mindestbesicherungsquote von nur 110 %. Kreditnehmer können also auf bis zu 90 % des Werts ihrer Bitcoin zugreifen. Für Bitcoin-Inhaber ist das die kapitaleffizienteste Möglichkeit, Liquidität freizusetzen, ohne zu verkaufen. Höhere Besicherungsquoten bieten allerdings einen größeren Sicherheitspuffer – berücksichtigen Sie immer das Risikoprofil Ihrer Position.

## MUSD im Vergleich zum traditionellen Finanzwesen

Für Bitcoin-Inhaber bedeutete das Finanzsystem schon immer Kompromisse: hohe Gebühren, undurchsichtige Verwahrung, variable Zinssätze und zentralisierte Intermediäre. MUSD bringt die Vorteile von Onchain-Finanzen – Transparenz, niedrige Kosten, Selbstverwahrung – direkt zu Ihren Bitcoin.

![MUSD im Vergleich zum traditionellen Finanzwesen](/docs/images/musd/musd-vs-traditional.png)

Keine Überweisungsgebühren, keine Wechselkursaufschläge, keine monatlichen Kontoführungsgebühren. Nur Ihre Bitcoin in einem dezentralen Smart-Contract-Vault, die für Sie arbeiten.

## MUSD im Vergleich zu bestehenden Stablecoins

Der Stablecoin-Markt ist breit gefächert und reicht von fiatgedeckten Stablecoins (USDT und USDC) über synthetische Stablecoins (USDe) bis zu anderen algorithmischen CDPs (Liquity, Sky). Auch wenn das Wachstum dieser Stablecoins in den letzten Jahren beachtlich war, gibt es für Bitcoiner nach wie vor eine Marktlücke.

MUSD will diese Risiken mit seiner reinen Bitcoin-Deckung angehen.

**Fiatgedeckte Stablecoins**

Fiatgedeckte Stablecoins wie USDT und USDC machen über 90 % des aktuellen Stablecoin-Markts aus. Sie stehen nicht nur in völligem Widerspruch zum Ethos von Krypto, da sie durch den US-Dollar gedeckt sind – die Dollarreserven müssen zudem von einer einzigen Stelle sicher verwahrt werden.

Tether, der Emittent von USDT (Umlauf von ca. \$150 Mrd.), hat nie ein Audit mit Reservenachweis veröffentlicht. Das Unternehmen verbuchte 2024 einen Gewinn von \$13 Mrd.

Circle, ein US-Unternehmen, das USDC ausgibt, kann [Adressen nach eigenem Ermessen auf eine Blacklist setzen](https://www.circle.com/legal/usdc-risk-factors) und [bezahlt Börsen dafür, sein Asset zu halten](https://x.com/inkymaze/status/1907187020293980599?s=46). Während die US-Wirtschaft onchain wandert, wird dies zu einem gefährlichen Zentralisierungspunkt.

**Synthetische Stablecoins**

Synthetische Stablecoins (zum Beispiel USDe) sind zur Werterhaltung oft auf zentralisierte Börsen und Verwahrungslösungen angewiesen. Wie groß dieses Risiko ist, wurde deutlich, als [Bybit kürzlich vom größten Hack aller Zeiten getroffen wurde](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Hinzu kommt, dass Stablecoins, die synthetisch durch die Rendite eines Basis-Trades gedeckt sind, unberechenbar und unerprobt sind. Die Funding-Rates sind variabel, und die Systeme wurden noch nicht unter verschiedenen externen Marktbelastungen getestet.

**CDP-Coins wie USDS**

CDP-basierte Stablecoins besichern ihre Positionen in der Regel mit einem Korb aus Token, darunter fiatgedeckte Stablecoins und verschiedene Altcoins.

Diese Diversifizierung kann das Risiko zwar streuen, bringt aber auch erhebliche Herausforderungen mit sich. Die Sicherheiten, die oft aus volatilen Assets wie ETH-bezogenen Token oder anderen Stablecoins bestehen, können unter Marktstress unvorhersehbar reagieren und sind häufig deutlich volatiler als BTC. Das kann die Bindung des Stablecoins gefährden und die Einlösungs- und Liquidationsprozesse erschweren.
