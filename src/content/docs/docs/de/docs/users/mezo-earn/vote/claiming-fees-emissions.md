---
title: FAQ zur Abstimmung
description: Häufig gestellte Fragen zur Abstimmung auf Mezo
topic: users
---

## Allgemein

**Muss ich jede Woche abstimmen?**

Nein. Ihre Stimmverteilung bleibt über Epochen hinweg bestehen, bis Sie sie ändern oder zurücksetzen, und sie verdient weiterhin in jeder Epoche ihren Anteil an Gebühren und Anreizen (Incentives). Durch eine erneute Abstimmung ändern Sie die Verteilung – sie ist nicht nötig, um die Verteilung beizubehalten.

**Kann ich meine Stimmen während einer Epoche ändern?**

Jede Sperrposition kann einmal pro Epoche abstimmen. Wenn die Sperrposition in dieser Epoche noch nicht abgestimmt hat, können Sie jederzeit innerhalb des Abstimmungszeitraums eine neue Aufteilung abgeben, die Ihre bestehende Verteilung ersetzt. Sobald eine Abstimmung bestätigt ist, steht die Verteilung dieser Sperrposition bis zum nächsten Epochenwechsel (Donnerstag, 00:00 UTC) fest.

**Kann ich meine Stimmen auf mehrere Gauges aufteilen?**

Auf jeden Fall. Sie können Ihre Stimmkraft beliebig verteilen – 50 % auf BTC/MUSD, 30 % auf MUSD Savings Rate, 20 % auf einen anderen Pool.

**Was ist der Unterschied zwischen der Abstimmung mit veBTC und mit veMEZO?**

veBTC-Inhaber stimmen über Staking-Gauges ab. Sie verdienen Handelsgebühren, Anreize und passive Bridging-Gebühren.

veMEZO-Inhaber stimmen über veBTC-Boost-Gauges ab. Sie verdienen Anreize, die von veBTC-Inhabern auf der Suche nach Boost hinterlegt werden, sowie Rebase-Ausschüttungen.

---

## Boost & veMEZO

**Was ist Boost?**

Boost ist ein Multiplikator (zwischen 1x und 5x), der Ihre veBTC-Stimmkraft verstärkt. Er entsteht durch veMEZO-Stimmen, die auf den Boost-Gauge Ihrer veBTC-Position gelenkt werden.

**Brauche ich veMEZO, um als veBTC-Inhaber zu verdienen?**

Nein. veBTC ohne Boost verdient weiterhin Handelsgebühren, Anreize und passive Bridging-Gebühren – nur eben mit einem Multiplikator von 1x. veMEZO erhöht Ihre effektive Stimmkraft (auf bis zu 5x), ist aber nicht erforderlich.

**Wie erhalte ich Boost für meine veBTC-Position?**

Auf zwei Wegen:
1. **Selbst boosten:** Sperren Sie MEZO als veMEZO und lenken Sie es auf Ihre eigene Position
2. **Boost anziehen:** Hinterlegen Sie Anreize auf Ihrem Boost-Gauge, um veMEZO-Stimmen von anderen anzuziehen

**Was verdienen veMEZO-Inhaber?**

veMEZO-Inhaber verdienen:
- Anreize, die auf den Boost-Gauges hinterlegt sind, für die sie abstimmen
- Rebase-Ausschüttungen, die vor Verwässerung schützen

Sie verdienen **keine** Handelsgebühren, MUSD-Einnahmen oder Bridging-Gebühren – diese gehen an veBTC-Inhaber.

**Wie wird der maximale Boost berechnet?**

Sie erreichen einen Boost von 5x, wenn Ihr Anteil am gesamten veMEZO Ihrem Anteil am gesamten veBTC entspricht oder ihn übersteigt. Größere BTC-Positionen erfordern entsprechend mehr veMEZO, um den maximalen Boost zu erreichen.

**Was passiert, wenn ich veMEZO, aber kein veBTC habe?**

Sie können trotzdem Rendite erzielen, indem Sie über die Boost-Gauges anderer Nutzer abstimmen. Sie verdienen alle Anreize, die diese hinterlegt haben, proportional zu Ihrem Anteil an den Stimmen auf dem jeweiligen Gauge.

---

## Anreize

**Wie funktionieren Anreize?**

Protokolle oder Nutzer hinterlegen Anreize auf bestimmten Gauges, um Stimmen anzuziehen. Am Ende der Epoche werden die Anreize anteilig nach Stimmgewicht an alle Abstimmenden auf diesem Gauge verteilt. Anreize kommen zu den Handelsgebühren hinzu.

**Kann ich Anreize auf meinem eigenen Boost-Gauge hinterlegen?**

Ja. Auf diese Weise ziehen Sie veMEZO-Stimmen auf Ihre veBTC-Position, wenn Sie Boost möchten, aber selbst keine MEZO halten.

**Welche Token können als Anreize verwendet werden?**

Jeder ERC-20-Token kann als Anreiz hinterlegt werden.

---

## Stimmkraft

**Nimmt meine Stimmkraft mit der Zeit ab?**

Ja. Die Stimmkraft verfällt linear, je näher Ihre Sperrung ihrem Ablauf kommt. Wenn Sie für 28 Tage gesperrt haben, verfügen Sie an Tag 14 noch über etwa 50 % Ihrer anfänglichen Stimmkraft. Wenn Sie Ihre Sperrung verlängern, wird das volle Gewicht wiederhergestellt.

**Was ist, wenn ich mehrere veBTC-Positionen habe?**

Sie können mit jeder Position separat abstimmen. Jedes NFT hat seine eigene Stimmkraft und kann auf unterschiedliche oder dieselben Gauges verteilt werden – ganz wie Sie möchten.

**Was passiert, wenn ich meine Sperrung nicht verlängere?**

Ihre Stimmkraft verfällt weiter, bis sie beim Ablauf null erreicht. Ab diesem Zeitpunkt können Sie nicht mehr abstimmen und keine Belohnungen mehr verdienen. Sie müssen Ihre Sperrung entweder vor dem Ablauf verlängern oder eine neue erstellen.

**Wie lange kann ich veMEZO sperren?**

Die maximale Sperrdauer für veMEZO beträgt 4 Jahre (gegenüber 28 Tagen bei veBTC). Die längere Sperrdauer spiegelt die Rolle von MEZO als Koordinations-Asset der Chain wider.

---

## Poke

**Was ist ein Poke?**

Ein Poke ist eine Transaktion, die die Stimmkraft Ihrer Position aktualisiert, sodass sie deren aktuellen Zustand widerspiegelt. Ohne Poke werden Änderungen an Ihrem Boost nicht wirksam.

**Wann muss ich einen Poke ausführen?**

Führen Sie einen Poke aus, nachdem Sie:
- neue veMEZO-Stimmen auf Ihrem Boost-Gauge erhalten haben
- Ihr eigenes veMEZO auf Ihre Position gelenkt haben
- veMEZO-Rebase-Ausschüttungen beansprucht haben
- Ihre Sperrdauer verlängert haben
- Ihrer Sperrung weitere BTC/MEZO hinzugefügt haben

**Kann jeder einen Poke für meine Position ausführen?**

Ja. Poke ist erlaubnisfrei (permissionless). Andere können einen Poke für Ihre Position ausführen, wenn Ihre Stimmkraft deutlich verfallen ist.

---

## Belohnungen

**Wann kann ich meine Belohnungen beanspruchen?**

Gebühren und Anreize können beansprucht werden, sobald die Epoche endet. Während der Epoche sehen Sie, wie sich Ihre geschätzten Belohnungen ansammeln, können sie aber erst nach Abschluss der Epoche beanspruchen.

**Verdiene ich Belohnungen in Pools, für die ich nicht abstimme?**

Nein. Sie verdienen Gebühren und Anreize nur von den Gauges, denen Sie Stimmkraft zugewiesen haben. Wenn Sie zu 100 % für BTC/MUSD gestimmt haben, verdienen Sie keinerlei Belohnungen aus dem MUSD/USDC-Pool.

Ausnahme: Passive Bridging-Gebühren werden unabhängig von der Abstimmung an alle veBTC-Inhaber verteilt, proportional zu ihrem geboosteten Stimmgewicht.

**Was sind Rebases und wie beanspruche ich sie?**

Rebases sind Ausschüttungen für veMEZO-Inhaber, die vor Verwässerung schützen. Ein Teil der wöchentlichen Emissionen fließt in Rebases, wenn die Sperrquote niedrig ist. Beanspruchen Sie sie separat – sie erhöhen das Gewicht Ihrer veMEZO-Position.

---

## Gauges

**Wie werden Gauge-Gewichte berechnet?**

Gauge-Gewicht = gesamte Stimmkraft, die diesem Gauge zugewiesen ist / gesamte Stimmkraft, die allen Gauges zugewiesen ist. Wenn der BTC/MUSD-Gauge 1.000 Stimmkraft erhält und alle Gauges zusammen 10.000, erhält BTC/MUSD in dieser Epoche 10 % der Emissionen.

**Können Gauges null Emissionen erhalten?**

Ja. Wenn niemand für einen Gauge abstimmt, erhält er in dieser Epoche keine Emissionen. Deshalb gibt es Anreizmärkte – Protokolle brauchen Stimmen, um Emissionen anzuziehen.

**Was sind Boost-Gauges?**

Jedes veBTC-NFT hat seinen eigenen Boost-Gauge. veMEZO-Inhaber stimmen über diese Gauges ab, um genau dieser veBTC-Position Boost zu verschaffen. Der veBTC-Inhaber kann auf seinem Boost-Gauge Anreize hinterlegen, um Stimmen anzuziehen.

**Wo sehe ich die aktuellen Gauge-Gewichte und Anreize?**

Rufen Sie die [Vote-Seite](https://mezo.org/vote) auf, um Gauge-Gewichte in Echtzeit, Anreizbeträge, prognostizierte APYs und die historische Performance zu sehen.
