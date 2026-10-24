---
title: FAQ
topic: developers
---

#### Was ist Mezo? Der Mehrwert für Entwickler <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo ist eine erlaubnisfreie (permissionless), bankenunabhängige Bitcoin-Finanzplattform, die Bitcoin von einem passiven Wertspeicher in einen produktiven, dynamischen Finanzwert verwandeln soll. Die zentrale Mission der Plattform besteht darin, den mehr als 100 Millionen Bitcoin-Inhabern weltweit zu ermöglichen, mit einem Zweck zu HODLn – indem sie den Wert ihrer Assets nutzen, ohne sie verkaufen zu müssen. Erreicht wird dies durch eine robuste Infrastruktur, die günstige, schnelle und sichere Transaktionen für eine Vielzahl realer Anwendungen ermöglicht.

Die übergeordnete Vision von Mezo ist es, die Nutzung von Bitcoin „supernormal“ zu machen – ein Zustand, in dem die Nutzung von Bitcoin für alltägliche Finanzaktivitäten so nahtlos und integriert ist, dass sie zu einem selbstverständlichen, unauffälligen Teil des Lebens wird, wie das Bezahlen mit einer Debitkarte.

Für Entwickler bietet Mezo einen klaren und überzeugenden Mehrwert. Thesis, das Studio hinter Mezo, hat auch tBTC entwickelt, die größte dezentrale Bitcoin-Bridge, außerdem Acre, ein natives Bitcoin-Rendite-Protokoll, und Fold, eine App für Konsumausgaben. Diese Suite miteinander verbundener Produkte stellt Entwicklern vom ersten Tag an ein leistungsstarkes, bereits geprüftes und hochgradig interoperables Set von „Money Legos“ zur Verfügung. Dieser integrierte Stack reduziert Entwicklungsaufwand und systemische Risiken erheblich – verglichen mit anderen Plattformen, auf denen grundlegende Bausteine wie Bridges, Stablecoins und Renditequellen oft von unterschiedlichen, nicht miteinander verbundenen Drittanbietern stammen. Wer auf Mezo entwickelt, kann ein vollständiges, sich selbst verstärkendes Finanzökosystem nutzen, das eine neue Ebene wirtschaftlicher Aktivität rund um das sicherste und dezentralste Asset der Welt antreiben soll.

#### Was ist MUSD?

Im Zentrum des Mezo-Ökosystems steht MUSD, sein nativer Stablecoin. MUSD ist so konzipiert, dass er zu 100 % durch Bitcoin-Reserven gedeckt ist und eine stabile 1:1-Bindung an den US-Dollar hält. Seine Hauptfunktion ist es, als liquides Tauschmittel die Mezo-Wirtschaft anzutreiben und Nutzern zu ermöglichen, den Wert ihrer Bitcoin-Bestände freizusetzen. Der Mechanismus ist einfach: Nutzer können ihre Bitcoin (in Form von tBTC) in einen sicheren Onchain-Vault einzahlen und dagegen MUSD minten. Die neu geminteten MUSD können dann im gesamten Ökosystem für eine Vielzahl von Aktivitäten verwendet werden – etwa für den Kauf von Waren und Dienstleistungen, den Handel an dezentralen Börsen, die Bereitstellung von Liquidität zur Erzielung von Rendite oder die Teilnahme an anderen DeFi-Protokollen.

Für Entwickler schaffen Mezo und MUSD ein Ökosystem mit „Batterien inklusive“, das strategische Vorteile bietet:

* **Deutlich weniger Reibung dank vertrauter Tools (EVM & RainbowKit):** Mezo ist vollständig EVM-kompatibel. Solidity-Entwickler können bestehende Contracts deployen und ihre bevorzugten Tools wie Hardhat und Foundry ohne Lernkurve verwenden.
* **Nahtloses Nutzer-Onboarding mit Mezo Passport:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) löst das kritische Wallet-Problem, indem Nutzer EVM-Transaktionen mit ihren nativen Bitcoin-Wallets (wie Xverse oder Unisat) signieren können. Dank dieser Account Abstraction können Sie eine einzige, saubere UX entwickeln, um die gesamte Bitcoin-Community zu erreichen, ohne komplexe, eigene Wallet-Logik schreiben zu müssen.
* [Leistungsstarke Finanzbausteine mit MUSD:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) ist ein leistungsstarker Baustein. Seine niedrigen, festen Zinssätze und der hohe LTV (bis zu 90 %) ermöglichen planbare Finanzprodukte (z. B. Kredite mit fester Laufzeit).

#### Was ist eine zirkuläre Bitcoin-Wirtschaft?

Eine zirkuläre Bitcoin-Wirtschaft ist ein sich selbst tragendes System, in dem Bitcoin sowohl zum Verdienen als auch zum Ausgeben verwendet wird, ohne in Fiatwährung umgetauscht werden zu müssen. Es entsteht ein geschlossener Kreislauf, in dem Privatpersonen und Unternehmen Gehälter, Waren und Dienstleistungen direkt in BTC abwickeln.

Die Kombination aus Mezo und MUSD schafft einen sich selbst verstärkenden Wirtschaftskreislauf:

1. **Freisetzen:** Bitcoin-Inhaber zahlen ihre BTC ein und minten MUSD. So aktivieren sie ihr Kapital, ohne ihr Kern-Asset zu verkaufen.
2. **Transaktionen durchführen:** Sie verwenden diese MUSD für alles – vom Handel und Verleihen bis hin zu alltäglichen Zahlungen.
3. **Verstärken:** Diese Onchain-Aktivität erzeugt Transaktionsgebühren (in BTC bezahlt), die das Netzwerk absichern und den Nutzen von Bitcoin als Transaktions-Asset und als Wertspeicher stärken.

Mezo liefert die Schienen und MUSD den Treibstoff – so erhalten Entwickler eine einzigartige Plattform, um Anwendungen zu entwickeln, die dem riesigen, bislang unterversorgten Markt der Bitcoiner einen greifbaren Mehrwert bieten.

#### Wie ist die Mezo-Chain aufgebaut?

Die Mezo-Chain basiert auf einer hybriden Architektur, die sowohl die Zugänglichkeit für Entwickler als auch die Netzwerkleistung maximieren soll. Sie ist eine vollständig EVM-kompatible Blockchain, die mit dem Cosmos SDK entwickelt wurde und auf der Konsens-Engine CometBFT läuft. Die Codebasis ist ein stark modifizierter Fork von Evmos.

Dieser Technologie-Stack bietet eine leistungsstarke Kombination von Eigenschaften:

* **EVM-Kompatibilität**: Die große globale Community von Ethereum- und Solidity-Entwicklern kann ihre bestehenden Smart Contracts und dezentralen Anwendungen (dApps) mit minimalen oder gar keinen Codeänderungen auf Mezo deployen. Sie können weiterhin die vertrauten und ausgereiften Toolchains verwenden, an die sie gewöhnt sind – darunter MetaMask, Hardhat, Remix und Foundry. Das senkt die Einstiegshürde für die Entwicklung im Bitcoin-Ökosystem drastisch.
* **Cosmos SDK**: Durch den Aufbau auf dem Cosmos SDK erhält Mezo Chain-Souveränität und kann seine Logik und Governance individuell anpassen.

#### Welcher Token wird auf Mezo für Gasgebühren verwendet? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC (technisch [über tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)).

#### Wie erhalte ich Testnet-BTC für Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Testnet-Guthaben erhalten Sie über den Mezo-Faucet: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Wie integriere ich Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) ist die offizielle Bibliothek für Wallet-Verbindungen und wurde speziell für ein nahtloses, einheitliches Nutzererlebnis im Mezo-Netzwerk entwickelt. Sie übernimmt die komplexe Anbindung sowohl Bitcoin-nativer Wallets (wie Xverse und Unisat) als auch standardmäßiger EVM-Wallets (wie MetaMask) an Ihre dApp. Den aktuellsten und ausführlichsten Integrationsleitfaden – einschließlich Installationsanleitung, Konfiguration, verfügbarer Hooks und Codebeispielen – finden Entwickler in der [**offiziellen Dokumentation zu Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### Wie erhalte ich Finanzierung und Unterstützung für mein Projekt? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**Die Supernormal Foundation**

​[Die Supernormal Foundation](https://www.supernormal.foundation/) ist die Organisation, die mit dem Aufbau, der Steuerung und dem Wachstum des Mezo-Netzwerks und der MUSD-Wirtschaft betraut ist. Sie folgt einem gemeinschaftsgetragenen Ethos und ist die wichtigste Quelle formeller Unterstützung für Entwickler.

**Mezo Founder Program**

​[Das Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) ist die zentrale Initiative für Entwickler und Projekte in der Frühphase (das MVP muss im Testnet live sein), die auf Mezo entwickeln und MUSD integrieren möchten. Das Programm soll Innovationen im BitcoinFi-Bereich vorantreiben.

* **Vorteile:** Qualifizierte Teams erhalten bevorzugten Zugang zu einem umfassenden Paket an Ressourcen, darunter:
  * **Grants:** finanzielle Unterstützung, um die Entwicklung zu beschleunigen.
  * **Co-Marketing:** gemeinsame Marketingmaßnahmen, um die Sichtbarkeit des Projekts zu erhöhen.
  * **Networking:** Kontakte zu anderen Entwicklern und führenden Köpfen im Ökosystem.
  * **Praktische Unterstützung bei der Integration:** direkte technische Hilfe für ein reibungsloses Deployment auf Mezo.

​[**Jetzt bewerben**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Für reifere Projekte oder solche mit ambitionierten Wachstumsplänen bietet die Supernormal Foundation gemeinsam mit den führenden Venture-Capital-Firmen **Boost VC, Draper Associates und Thesis** ein eigenes Accelerator-Programm an. Dieses intensive Programm bietet eine Anfangsinvestition und maßgeschneiderte Unterstützung, darunter intensives Mentoring zu Produktstrategie und Go-to-Market-Umsetzung, und hilft Teams auf dem Weg von einem funktionierenden Produkt zu einem skalierbaren Unternehmen.

#### Wo finde ich Community-Support und kann technische Fragen stellen? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

Die zentrale Anlaufstelle für jegliche Interaktion mit der Community und mit Entwicklern im Mezo-Ökosystem ist der [offizielle Discord-Server.](https://discord.com/invite/mezo)​

#### Wer sind Ihre Partner und wie integriere ich sie? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Die aktuelle Liste finden Sie unter [Integrationen und Partner](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
