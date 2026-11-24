---
title: Übersicht über Mezo Pools
description: Erfahren Sie mehr über Mezo Pools und wie Sie Liquidität bereitstellen
topic: users
---

[Mezo Pools](https://mezo.org/explore/pools) sind der zentrale Motor des Mezo-Ökosystems und fungieren als automatisierte Onchain-Liquiditätsreserven für Mezo Pools. Jeder Pool enthält ein Paar aus zwei unterschiedlichen Token und ermöglicht sofortige, dezentrale Trades. Statt sich auf ein klassisches Orderbuch zu verlassen, das Käufer und Verkäufer zusammenführt, handeln Nutzer direkt gegen die im Pool gehaltene Liquidität.

![Diagramm der Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

Mit [Mezo Pools](https://mezo.org/explore/pools) können Sie Gebühren verdienen, indem Sie Liquidität für Token-Swaps bereitstellen. Wenn Sie zwei Token in einen Pool einzahlen, können Trader zwischen ihnen tauschen, und Sie verdienen einen Teil der Handelsgebühren.

Wenn ein Nutzer einen anteilig gleichen Wert der benötigten Token in einen Pool einzahlt, wird er zum Liquiditätsanbieter (LP). Dieser Schritt ist grundlegend für das Funktionieren des Systems, da er die verfügbare Liquidität vertieft und den Preis-Slippage für Trader verringert. Als Gegenleistung für ihren Beitrag erhalten LPs LP-Token. Diese LP-Token repräsentieren den anteiligen Anteil eines LP an den gesamten Vermögenswerten des Pools. Sie berechtigen den Inhaber algorithmisch zu einem Teil der vom Pool erzielten Handelsgebühren und dienen als Mechanismus, um die zugrunde liegenden eingezahlten Vermögenswerte einzulösen.

Mezo bietet drei Arten von Pools an, die für unterschiedliche Anwendungsfälle optimiert sind:

* **Volatile Pools**: Für Asset-Paare mit unkorrelierten Preisen ausgelegt, etwa BTC und MUSD.
* **Stabile Pools**: Für Assets mit stark korrelierten Werten konzipiert, etwa MUSD und USDC. Sie verwenden eine spezielle Formel, die bei Trades zwischen gleichartigen Assets deutlich geringeren Slippage bietet.
* **Pools mit konzentrierter Liquidität (CL)**: Ermöglichen es Ihnen, Liquidität innerhalb einer selbst gewählten Preisspanne statt über die gesamte Kurve bereitzustellen, was die Kapitaleffizienz deutlich verbessert. CL-Positionen werden als NFTs (ERC-721) statt als fungible LP-Token dargestellt. Details finden Sie unter [Konzentrierte Liquidität](/docs/de/docs/users/mezo-earn/pools/concentrated-liquidity).

## LP-Token verstehen

Wenn Sie Vermögenswerte in einen [Mezo Pool](https://mezo.org/explore/pools) einzahlen, mintet der Contract LP-Token und sendet sie Ihnen. Dies sind standardmäßige ERC20-Token, die Ihren anteiligen Besitz an den gesamten Reserven des Pools beziffern.

Die Anzahl der LP-Token, die Sie erhalten, richtet sich nach Ihrem Anteil am Pool. Für die allererste Einzahlung in einen neuen Pool wird diese Menge als sqrt(x * y) berechnet, wobei x und y die eingezahlten Mengen der beiden Token sind.

Für jeden über den Pool ausgeführten Swap wird auf das Eingabe-Asset eine Handelsgebühr erhoben (z. B. 0,30 % in volatilen Pools). Diese Gebühr wird sofort in einen separaten Contract ausgelagert und kann von den Liquiditätsanbietern des jeweiligen Pools beansprucht werden.

Um Ihren Anteil an den zugrunde liegenden Vermögenswerten zurückzuerhalten, müssen Sie Ihre LP-Token „verbrennen“; Ihre Gebühren können Sie jedoch jederzeit beanspruchen. Wenn Sie Ihre ursprünglich eingezahlten Vermögenswerte zurückfordern, werden Ihre LP-Token an den Smart Contract zurückgegeben – im Austausch gegen Ihren anteiligen Anteil an den beiden Token im Pool.

## Die Vorteile von Mezo Pools

Das Mezo-Protokoll wurde so konzipiert, dass es nicht auf klassische Finanzstrukturen wie Orderbücher angewiesen ist. Orderbücher sind im zentralisierten Finanzwesen zwar effektiv, bringen in einer dezentralen Umgebung aber erhebliche Herausforderungen mit sich: Oft erfordern sie ein aktives Management durch professionelle Market Maker sowie eine zentralisierte Infrastruktur, um Orders zu hosten und zusammenzuführen.

[Mezo Pools](https://mezo.org/explore/pools) sind gezielt für eine dezentrale Umgebung entwickelt und nutzen die besonderen Stärken der Blockchain-Technologie:

* **Autonom und erlaubnisfrei**: Jeder Pool ist ein frei zugänglicher Smart Contract. Jeder Nutzer und jede Anwendung kann ohne Erlaubnis damit interagieren, indem Funktionen wie swap() zum Handeln oder mint() zum Bereitstellen von Liquidität aufgerufen werden.
* **Erweiterte Funktionen**: Ein Mezo Pool fungiert als Onchain-TWAP-Orakel (Time-Weighted Average Price) und liefert manipulationsresistente Preisdaten für andere Protokolle. Außerdem unterstützen Mezo Pools Flash Loans, die komplexe DeFi-Strategien innerhalb einer einzigen Transaktion ermöglichen.

Diese architektonischen Vorteile bilden die Grundlage für die zentrale Mission von Mezo: eine robuste Kreislaufwirtschaft für Bitcoin aufzubauen. Indem Nutzer ihre BTC als Sicherheit verwenden können (z. B. über Mezo Borrow, um MUSD zu minten) und anschließend beide Vermögenswerte in Liquiditätspools einsetzen, verwandelt das Protokoll Bitcoin von einem passiven Wertspeicher in ein aktives, renditeerzeugendes Instrument. So entsteht ein sich selbst tragender Kreislauf, in dem die Bereitstellung von Liquidität nicht nur Erträge für den Nutzer erzeugt, sondern auch den Markt für Bitcoin-gedeckte Vermögenswerte vertieft – und das gesamte Ökosystem liquider und nützlicher macht.

## Erste Schritte

### In 3 einfachen Schritten loslegen

Möchten Sie Liquiditätsanbieter werden? Der Einstieg ist einfach. Besuchen Sie [Mezo Pools](https://mezo.org/explore/pools), um zu beginnen.

1. **Vermögenswerte vorbereiten**: Um Liquidität bereitzustellen, benötigen Sie beide Vermögenswerte eines Paares im gleichen Wert (z. B. `$50 of BTC` und `$50 of MUSD`).
   * Sie brauchen MUSD? Minten Sie es mit Ihren BTC über Mezo Borrow.
   * Sie brauchen andere Vermögenswerte oder MUSD? Tauschen Sie sie über [Mezo Pools](https://mezo.org/explore/pools) ein.
2. **Liquidität hinzufügen**: Rufen Sie die [Pools-Seite in Mezo Explore](https://mezo.org/explore/pools) auf. Wählen Sie den gewünschten Pool aus, geben Sie den Betrag an, den Sie einzahlen möchten, und bestätigen Sie die Transaktion. Sie erhalten LP-Token in Ihrer Wallet, die Ihren Anteil am Pool darstellen.
3. **Staken und verdienen (demnächst verfügbar)**: Sobald Staking verfügbar ist, kehren Sie einfach zur [Pools-Seite](https://mezo.org/explore/pools) zurück, wählen Ihre Position aus und staken Ihre LP-Token, um zusätzliche Belohnungen zu verdienen. Bleiben Sie dran.

## Ressourcen für Entwickler

Wie Sie [Mezo Pools](https://mezo.org/explore/pools) in Ihre Anwendung integrieren, erfahren Sie unter [Liquidität bereitstellen](../../../developers/getting-started/) in unserer Entwicklerdokumentation.
