---
title: Glossar
description: >-
  Ein umfassendes Nachschlagewerk von A bis Z mit den Begriffen, die im
  Mezo-Ökosystem verwendet werden.
topic: users
---

Ein umfassendes Nachschlagewerk der Begriffe, die im Mezo-Ökosystem verwendet werden. Begriffe speziell zu Mezo Earn finden Sie im [Mezo-Earn-Glossar](/docs/de/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker (automatisierter Market Maker). Eine Art dezentraler Börse, die statt Orderbüchern Liquiditätspools und mathematische Formeln verwendet, um Asset-Preise zu bestimmen und Trades auszuführen. Mezo Pools verwenden einen AMM nach dem Vorbild von Aerodrome mit Constant-Product-Kurven für volatile Paare und Stable-Kurven für korrelierte Paare. Siehe [Mezo Pools – Übersicht](/docs/de/docs/users/mezo-earn/pools).

## Block-Explorer

Ein Web-Tool zum Anzeigen von Transaktionen, Adressen und Onchain-Daten. Der Mainnet-Explorer von Mezo ist unter [explorer.mezo.org](https://explorer.mezo.org/) erreichbar, der Testnet-Explorer unter [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

Der Multiplikator, der auf eine veBTC-Position angewendet wird, wenn veMEZO-Stimmen auf sie gelenkt werden. Ohne Boost arbeitet veBTC mit 1x. Mit maximalem Boost arbeitet veBTC mit 5x. Der Boost hängt von Ihrem relativen Anteil am gesamten veBTC und am gesamten veMEZO im System ab. Siehe [Boost-Mechanismus](/docs/de/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Geboostetes Stimmgewicht

Das kombinierte Stimmgewicht, wenn veBTC und veMEZO gepaart sind. Es berechnet sich aus Ihrem veBTC-Stimmgewicht multipliziert mit Ihrem Boost-Multiplikator (zwischen 1x und 5x). Das geboostete Stimmgewicht bestimmt Ihren Anteil an den Gebühren und Ihren Einfluss auf die Emissionen.

## BTC

Bitcoin. BTC ist der native Gas-Token auf Mezo (mit 18 Dezimalstellen) und die wichtigste Sicherheit zum Minten von [MUSD](#musd). Alle Transaktionen auf Mezo werden in BTC bezahlt.

## BTC-Wallet

Eine Bitcoin-native Wallet, mit der BTC direkt auf Mezo eingezahlt werden. Unterstützte Wallets sind unter anderem UniSat, OKX und Xverse. Unterstützte Adressformate sind Legacy (P2PKH), Native SegWit (P2WPKH) und Nested SegWit (P2SH-P2WPKH). Siehe [Vermögenswerte einzahlen](/docs/de/docs/users/getting-started/deposit-assets).

## Chain-ID

Eine numerische Kennung für ein Blockchain-Netzwerk. Das Mezo Mainnet verwendet die Chain-ID `31612`, das Mezo Testnet die Chain-ID `31611`. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## Chain Splitter

Der erste Splitter in der Emissionshierarchie. Er legt fest, welcher Prozentsatz der MEZO-Emissionen an Validatoren (20 %) und welcher an das übrige Ökosystem (80 %) geht. Dieses Verhältnis ist derzeit fest und per Governance gesperrt. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Cliff

Eine Wartezeit, bevor Token freigeschaltet werden. Im Vesting-Plan von Mezo gilt für die Zuteilungen an Team und Investoren ein Cliff von 1 Jahr ab dem TGE, d. h. in den ersten 12 Monaten werden keine Token freigeschaltet. Siehe [Token-Verteilung](/docs/de/docs/users/mezo/token-distribution).

## Sicherheiten

Vermögenswerte, die zur Absicherung eines Kredits hinterlegt werden (Collateral). Auf Mezo werden BTC als Sicherheit eingezahlt, um [MUSD](#musd) zu leihen. Fällt der Wert der Sicherheiten im Verhältnis zu den Schulden zu stark, kann die Position [liquidiert](#liquidation) werden. Siehe [MUSD leihen und minten](/docs/de/docs/users/borrow/mint-musd).

## Überschüssige Sicherheiten

Die überschüssigen Sicherheiten, die übrig bleiben, nachdem gegen einen [Trove](#trove) vollständig eingelöst wurde. Dieser Überschuss wird an einen Verwahrungs-Contract gesendet, wo der Kreditnehmer ihn zurückfordern kann. Siehe [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).

## Besicherungsquote (ICR)

Individual Collateralization Ratio (individuelle Besicherungsquote). Das Verhältnis zwischen dem Dollarwert der Sicherheiten eines Troves und seinen Gesamtschulden. Wenn Ihre BTC-Sicherheiten beispielsweise 13.000 \$ wert sind und Ihre Schulden 10.000 \$ betragen, liegt Ihre ICR bei 130 %. Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## CometBFT

Die Konsens-Engine, auf der Mezo basiert, früher als Tendermint bekannt. CometBFT bietet byzantinisch fehlertoleranten Konsens (BFT) und ermöglicht so eine schnelle Blockfinalität im Mezo-Netzwerk.

## Cosmos SDK

Das modulare Framework, mit dem die Mezo-Blockchain gebaut ist. Das Cosmos SDK stellt die Anwendungsschicht bereit, während [CometBFT](#cometbft) den Konsens übernimmt. Dank dieser Architektur unterstützt Mezo sowohl Cosmos-native als auch [EVM](#evm)-kompatible Funktionen.

## Kritische Besicherungsquote (CCR)

Der systemweite Schwellenwert für Sicherheiten, festgelegt auf 150 %. Fällt die Gesamtbesicherungsquote (TCR) unter die CCR, wechselt das System in den [Recovery Mode](#recovery-mode). Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## dApp

Dezentrale Anwendung (Decentralized Application). Eine Softwareanwendung, die auf einer Blockchain statt auf zentralisierten Servern läuft. Entwickler können dApps auf Mezo mit Standard-EVM-Tools erstellen. Siehe [Anforderungen an dApps](/docs/de/docs/developers/getting-started/dapp-requirements).

## Verfall

Die schrittweise Abnahme des Stimmgewichts, während sich eine Sperrung ihrem Ablauf nähert. Die Stimmkraft von veBTC und veMEZO verfällt linear über die Zeit. Sie können den Verfall zurücksetzen, indem Sie Ihre Sperrung verlängern. Siehe [veBTC-Übersicht](/docs/de/docs/users/mezo-earn/lock/vebtc) und [veMEZO-Übersicht](/docs/de/docs/users/mezo-earn/lock/vemezo).

## Delegator

Ein Teilnehmer, der seinen Stake oder seine Stimmkraft an einen [Validator](#validator) delegiert. Validatoren können Belohnungen mit Delegatoren teilen, sind dazu aber nicht verpflichtet.

## Ecosystem Splitter

Der zweite Splitter in der Emissionshierarchie. Er teilt die Nicht-Validator-Emissionen zwischen [Staking-Gauges](#staking-gauge) (90 %) und [Non-Staking-Gauges](#non-staking-gauge) (10 %) auf; Letztere finanzieren die [MEZO Gauges](#mezo-gauge). Das Verhältnis wird per veBTC-Abstimmung festgelegt. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Emissionen

Neue MEZO-Token, die in jeder Epoche an Staking-Gauges, Validatoren und veMEZO-Inhaber (als Rebases) verteilt werden. Die Emissionen folgen einem an Bitcoin angelehnten Halving-Plan: Sie beginnen bei 25 % pro Jahr und sinken nach Jahr 8 auf 2 %. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Epoche

Ein 7-tägiger Zyklus, der Abstimmungen und die Verteilung von Belohnungen in Mezo Earn steuert. Epochen beginnen jeden Donnerstag um 00:00 UTC. Stimmen werden nicht in die nächste Epoche übernommen. Siehe [veBTC-Übersicht](/docs/de/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Eine Standardschnittstelle für fungible Token auf EVM-kompatiblen Blockchains. Token, die von Ethereum zu Mezo gebridgt werden, werden als mERC-20-Token dargestellt (z. B. mUSDC, mUSDT). Siehe [Bridges](/docs/de/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine. Die Laufzeitumgebung für Smart Contracts auf Ethereum-kompatiblen Blockchains. Mezo ist EVM-kompatibel, d. h. Entwickler können Solidity-Contracts mit vertrauten Tools wie Hardhat und Foundry deployen. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## EVM-Wallet

Eine Ethereum-kompatible Wallet (z. B. MetaMask, Rabby), mit der Sie mit der EVM-Schicht von Mezo interagieren. EVM-Wallets werden für dApp-Interaktionen, Swaps und die Verwaltung von Positionen auf Mezo verwendet. Siehe [Wallet verbinden](/docs/de/docs/users/getting-started/connect).

## Faucet

Ein Dienst, der kleine Mengen Testnet-Token für Entwicklungszwecke verteilt. Der Faucet des Mezo Testnet stellt Test-BTC bereit, um dApps im Mezo Testnet zu deployen und zu testen.

## Gas-Entschädigung

Eine Erstattung von 200 MUSD, die zusammen mit 0,5 % der liquidierten Sicherheiten an den Aufrufer einer [Liquidations](#liquidation)-Funktion gezahlt wird (Gas Compensation). So bleiben Liquidationen für Aufrufer auch bei hoher Netzwerkaktivität rentabel. Die 200 MUSD werden bei Eröffnung eines Kredits einbehalten und zurückgegeben, wenn der Kredit regulär geschlossen wird. Siehe [MUSD-Architektur](/docs/de/docs/users/borrow/architecture-and-terminology).

## Gauge

Ein Smart Contract, der Belohnungen auf Grundlage von Stimmen empfängt und verteilt. Je mehr Stimmgewicht ein Gauge erhält, desto größer ist sein Anteil an den MEZO-Emissionen der jeweiligen Epoche. Zu den Gauge-Typen gehören [Staking-Gauges](#staking-gauge), [veBTC-Boost-Gauges](#vebtc-boost-gauge) und [Non-Staking-Gauges](#non-staking-gauge) wie die [MEZO Gauges](#mezo-gauge). Siehe [Mezo-Earn-Glossar](/docs/de/docs/users/mezo-earn/overview/glossary).

## Globaler Zinssatz

Ein einheitlicher, per Governance festgelegter Zinssatz, der für alle neu eröffneten MUSD-Kredite gilt. Nach der Eröffnung behält ein Kredit den Zinssatz, zu dem er erstellt wurde, auch wenn sich der globale Zinssatz ändert. Nutzer können [refinanzieren](#refinanzierung), um den aktuellen globalen Zinssatz zu übernehmen. Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## Governance

Das System, über das veBTC-Inhaber Protokollparameter und Emissionen gestalten. veMEZO verstärkt die Stimmkraft, hat aber keine eigenständigen Governance-Rechte. Siehe [Governance](/docs/de/docs/users/mezo/governance).

## Halving-Plan

Das an Bitcoin angelehnte Modell, das die MEZO-Emissionen steuert. Die Emissionsrate halbiert sich etwa alle 2 Jahre: 25 % in den Jahren 0–2, 12,5 % in den Jahren 2–4, 6,25 % in den Jahren 4–8; danach stabilisiert sie sich dauerhaft bei 2 %. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Impermanent Loss

Der potenzielle Verlust, den ein Liquiditätsanbieter erleidet, wenn sich das Preisverhältnis der Assets im Pool ändert – verglichen mit dem bloßen Halten dieser Assets. Er ist AMM-basierten Pools inhärent und bei [volatilen Pools](#volatiler-pool) stärker ausgeprägt.

## Anreize

Belohnungen, die auf Gauges ausgeschrieben werden, um Stimmen anzuziehen (Incentives). Protokolle oder Nutzer hinterlegen Anreize (in einem beliebigen ERC-20-Token), um Stimmkraft auf bestimmte Gauges zu lenken. Anreize bilden den [Matching-Markt](#matching-markt) zwischen veBTC- und veMEZO-Inhabern. Siehe [Abstimmung – Übersicht](/docs/de/docs/users/mezo-earn/vote).

## Liquidation

Die erzwungene Schließung eines unterbesicherten [Troves](#trove). Ein Trove kann liquidiert werden, wenn seine [ICR](#besicherungsquote-icr) unter 110 % fällt. Die Liquidationsschwelle bleibt auch im [Recovery Mode](#recovery-mode) bei 110 %. Der [Stability Pool](#stability-pool) übernimmt die Schulden, und die liquidierten Sicherheiten werden an die Einzahler des Stability Pool verteilt. Siehe [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).

## Liquiditätspool

Ein Smart Contract mit Reserven zweier Token, der dezentralen Handel ermöglicht. Nutzer zahlen Vermögenswerte in einen Pool ein, werden so zu Liquiditätsanbietern und verdienen Handelsgebühren. Siehe [Mezo Pools – Übersicht](/docs/de/docs/users/mezo-earn/pools).

## Sperrung

Das Festlegen von BTC oder MEZO für einen bestimmten Zeitraum, um [veBTC](#vebtc) oder [veMEZO](#vemezo) zu erhalten (Lock). Längere Sperrungen verleihen ein höheres anfängliches Stimmgewicht. veBTC-Sperrungen reichen von 1 bis 28 Tagen, veMEZO-Sperrungen von 1 Woche bis 4 Jahren. Siehe [veBTC-Übersicht](/docs/de/docs/users/mezo-earn/lock/vebtc) und [veMEZO-Übersicht](/docs/de/docs/users/mezo-earn/lock/vemezo).

## LP-Token

Liquidity Provider Token (Liquiditätsanbieter-Token). Ein ERC-20-Token, den Sie erhalten, wenn Sie Vermögenswerte in einen [Liquiditätspool](#liquiditätspool) einzahlen. LP-Token repräsentieren Ihren anteiligen Anspruch auf die Reserven des Pools und berechtigen Sie zu einem Teil der Handelsgebühren. Siehe [Mezo Pools – Übersicht](/docs/de/docs/users/mezo-earn/pools).

## Mainnet

Das produktive Blockchain-Netzwerk, in dem echte Vermögenswerte und Transaktionen verarbeitet werden. Das Mezo Mainnet hat die Chain-ID `31612` und verwendet BTC für Gas. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## Matching-Markt

Der ökonomische Mechanismus, bei dem veBTC-Inhaber veMEZO-Stimmen anziehen können, indem sie [Anreize](#anreize) auf ihren Boost-Gauges ausschreiben, und veMEZO-Inhaber Rendite erzielen können, indem sie für Gauges mit attraktiven Anreizen abstimmen. Siehe [Matching-Markt](/docs/de/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Der native Token von Mezo, mit dem die Stimmkraft geboostet und beeinflusst wird, wohin Protokollgebühren und Anreize fließen. MEZO kann als [veMEZO](#vemezo) gesperrt werden, um das veBTC-Stimmgewicht um bis zu 5x zu vervielfachen und Rebase-Belohnungen zu verdienen. Das gesamte Genesis-Angebot beträgt 1.000.000.000 MEZO. Siehe [MEZO-Übersicht](/docs/de/docs/users/mezo).

## Mezo App

Die zentrale Weboberfläche unter [mezo.org](https://mezo.org) für die Interaktion mit dem Mezo-Netzwerk. In der Mezo App können Nutzer Vermögenswerte einzahlen, bridgen, MUSD leihen, Liquidität bereitstellen, Token sperren und für Gauges abstimmen.

## Mezo Borrow

Die Funktion der Mezo App, mit der Nutzer BTC als Sicherheit einzahlen und dagegen [MUSD](#musd) leihen können. Jede Kreditposition wird als [Trove](#trove) bezeichnet. Siehe [MUSD leihen und minten](/docs/de/docs/users/borrow/mint-musd).

## Mezo Bridge

Die native Bridge zum Einzahlen und Abheben von Vermögenswerten zwischen Mezo und Ethereum oder Bitcoin. Unterstützt BTC, tBTC und mERC-20-Token. Siehe [Bridges](/docs/de/docs/users/mainnet/bridges).

## Mezo Earn

Das umfassende Ertrags- und Governance-System auf Mezo. Es umfasst das Sperren ([veBTC](#vebtc), [veMEZO](#vemezo)), die Abstimmung über [Gauges](#gauge), die Bereitstellung von Liquidität in [Pools](#liquiditätspool) und Einzahlungen in [Vaults](#musd-savings-vault). Siehe [Mezo-Earn-Übersicht](/docs/de/docs/users/mezo-earn/overview).

## MEZO Gauge

Ein [Non-Staking-Gauge](#non-staking-gauge), über den veMEZO-Inhaber abstimmen, um MEZO-Emissionen in MUSD-Liquiditätspools außerhalb von Mezo zu lenken – Curve und Uniswap auf Ethereum sowie Aerodrome auf Base. Finanziert aus dem Non-Staking-Zweig der Emissionen (derzeit 8 % der wöchentlichen Emissionsbelohnungen). Siehe [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

Der Marktplatz in der Mezo App für Token-Swaps. Er verwendet den [Router-Contract](#router-contract), um Trades über verfügbare [Liquiditätspools](#liquiditätspool) zu leiten.

## Mezo Passport

Ein Entwicklerpaket auf Basis von RainbowKit, das Optionen zur Wallet-Verbindung für Bitcoin- und EVM-Wallets bereitstellt. Mezo Passport lässt sich mit viem und wagmi integrieren und vereinfacht so die Wallet-Verwaltung. Siehe [Mezo Passport konfigurieren](/docs/de/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

Das Liquiditätspool-System auf Mezo, das als automatisierte Onchain-Liquiditätsreserve für Token-Swaps dient. Die Pools verwenden einen AMM nach dem Vorbild von Aerodrome und sind in zwei Typen verfügbar: [volatil](#volatiler-pool) und [stabil](#stabiler-pool). Siehe [Mezo Pools – Übersicht](/docs/de/docs/users/mezo-earn/pools).

## Mindestbesicherungsquote (MCR)

Die für einen [Trove](#trove) erforderliche Mindestbesicherungsquote, festgelegt auf 110 %. Fällt die [ICR](#besicherungsquote-icr) eines Troves unter die MCR, kann er [liquidiert](#liquidation) werden. Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## MUSD

Der Bitcoin-besicherte Stablecoin von Mezo, gekoppelt an 1 \$ (USD). Nutzer leihen sich MUSD, indem sie BTC als Sicherheit in einem [Trove](#trove) einzahlen. Die Kopplung wird durch [Einlösungen](#einlösung) und den [Stability Pool](#stability-pool) aufrechterhalten. Siehe [MUSD-Übersicht](/docs/de/docs/users/borrow).

## MUSD Bridge

Die Cross-Chain-Bridge zum Übertragen von MUSD zwischen Mezo und Ethereum, betrieben mit dem [Native-Token-Transfer-Protokoll (NTT)](#wormhole-ntt) von Wormhole. Siehe [MUSD Bridge](/docs/de/docs/users/borrow/musd-bridge).

## MUSD Savings Rate Gauge

Ein [Staking-Gauge](#staking-gauge) für den [MUSD Savings Vault](#musd-savings-vault). Nutzer, die MUSD in den Savings Vault einzahlen, können ihre sMUSD-Beleg-Token staken, um MEZO-Emissionen zu verdienen, während veBTC-Wähler, die für diesen Gauge stimmen, MUSD-Rendite aus Protokollgebühren erhalten. Siehe [Vaults](/docs/de/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Das native Sparprodukt von Mezo für MUSD-Inhaber. Zahlen Sie MUSD ein, um einen Anteil an den Protokollgebühren zu verdienen, die durch die Kreditaktivität entstehen (Zinsen, Ausgabegebühren, Refinanzierungsgebühren). Als Beleg für Ihren Anteil erhalten Sie sMUSD. Siehe [Vaults](/docs/de/docs/users/mezo-earn/vaults).

## Non-Staking-Gauge

Ein [Gauge](#gauge) ohne Staking-Token, für den mit veMEZO abgestimmt wird. Statt Staker auf Mezo zu bezahlen, werden seine Emissionen an ein Ziel geleitet, das der Gauge festlegt – bei den [MEZO Gauges](#mezo-gauge) ein Liquiditätspool auf einer anderen Chain. Die Abstimmung über einen solchen Gauge ist unabhängig von der Abstimmung über veBTC-Gauges und vom [Boost](#boost)-Matching. Siehe [MEZO Gauges](/docs/de/docs/users/mezo-earn/vote/mezo-gauges).

## Node

Ein Computer, auf dem der Client der Mezo-Chain (mezod) läuft und der am Netzwerk teilnimmt. Zu den Node-Typen gehören [Validator](#validator)-Nodes (Konsens und Blockproduktion), RPC-Nodes (API-Endpoints für dApps) und Seed-Nodes (Bootstrapping des Netzwerks). Siehe [Validator Kit](/docs/de/docs/developers/mezo-nodes/validator-kit).

## Orakel

Ein Dienst, der Smart Contracts onchain mit externen Daten (z. B. Asset-Preisen) versorgt. Mezo verwendet Skip Connect als primäres Orakel, das direkt in die Validator-Nodes integriert ist. Zusätzlich stehen Orakel von Drittanbietern wie Pyth, Stork und Supra zur Verfügung. Siehe [Orakel-Infrastruktur](/docs/de/docs/developers/architecture/oracles).

## Abschlussgebühr

Eine einmalige Gebühr bei der Kreditaufnahme in MUSD (Origination Fee), berechnet als 0,1 % des geliehenen Betrags. Die Gebühr wird dem Kreditbetrag zugeschlagen und verzinst. Bei einer [Refinanzierung](#refinanzierung) wird eine Abschlussgebühr für die Refinanzierung erhoben (ein Bruchteil der regulären Gebühr). Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value (protokollgesteuerter Wert). Ein Contract, der die Gebühren aus MUSD-Kreditaufnahme und -Refinanzierung verwaltet. Die Gebühren werden zwischen der Rückzahlung des Bootstrap-Kredits und dem Gauge-System aufgeteilt. Sobald der Bootstrap-Kredit zurückgezahlt ist, sammeln sich die Gebühren als protokolleigene Liquidität im [Stability Pool](#stability-pool) an. Siehe [MUSD-Architektur](/docs/de/docs/users/borrow/architecture-and-terminology).

## Poke

Eine Transaktion, die das geboostete Stimmgewicht einer veBTC-Position aktualisiert. Erforderlich nach Änderungen an veMEZO-Stimmen, Verlängerungen der Sperrung oder dem Hinzufügen von BTC. Ohne Poke werden Boost-Änderungen nicht wirksam. Siehe [Mezo-Earn-Glossar](/docs/de/docs/users/mezo-earn/overview/glossary).

## Pool Factory

Der Smart Contract, der neue Liquiditätspools auf Mezo deployt. Er wird derzeit vom Mezo-Team verwaltet; künftig soll die Erstellung von Pools erlaubnisfrei (permissionless) möglich werden. Mainnet-Adresse: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Siehe [Mezo Pools (Entwickler)](/docs/de/docs/developers/features/mezo-pools).

## Portal Bridge

Die Benutzeroberfläche unter [portalbridge.com](https://portalbridge.com/) zum Bridgen von MUSD zwischen Mezo und Ethereum über das Wormhole-NTT-Protokoll. Siehe [MUSD Bridge](/docs/de/docs/users/borrow/musd-bridge).

## Preisfeed

Von [Orakeln](#orakel) bereitgestellte Onchain-Daten, die den aktuellen Marktpreis von Assets melden. Mezo verwendet Skip Connect, um Asset-Preise während des Blockkonsenses zu ermitteln und in den Onchain-Zustand zu schreiben. Siehe [Orakel-Infrastruktur](/docs/de/docs/developers/architecture/oracles).

## Rebase

Ausschüttungen zum Verwässerungsschutz an veMEZO-Inhaber aus den wöchentlichen MEZO-Emissionen. Wenn die Sperrquote (veMEZO-Angebot / gesamtes MEZO-Angebot) niedrig ist, fließt ein größerer Anteil der Emissionen in Rebases, was frühe Sperrer vor Verwässerung schützt. Je mehr MEZO gesperrt wird, desto kleiner wird der Rebase-Anteil. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Recovery Mode

Ein vorübergehender Sicherheitszustand (Wiederherstellungsmodus), der aktiviert wird, wenn die systemweite Gesamtbesicherungsquote (TCR) unter die [CCR](#kritische-besicherungsquote-ccr) von 150 % fällt. Im Recovery Mode bleibt die Liquidationsschwelle bei 110 % (anders als bei Liquity v1 weitet MUSD Liquidationen im Recovery Mode nicht aus). Allerdings können keine neuen Kredite unter 150 % eröffnet werden, und Refinanzierungen sind gesperrt. Siehe [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).

## Einlösung

Der Tausch von MUSD gegen BTC im entsprechenden Dollarwert direkt beim Protokoll. Jeder MUSD-Inhaber kann einlösen, unabhängig davon, ob er Kreditnehmer ist. Einlösungen treffen zuerst den [Trove](#trove) mit der niedrigsten Besicherungsquote. Dieser Mechanismus hilft, die Kopplung von MUSD an 1 \$ aufrechtzuerhalten. Siehe [MUSD-Liquidationen und -Einlösungen](/docs/de/docs/users/borrow/liquidation-mechanics).

## Refinanzierung

Der Vorgang, bei dem der Zinssatz eines Kredits auf den aktuellen [globalen Zinssatz](#globaler-zinssatz) aktualisiert wird. Bei einer Refinanzierung fällt eine reduzierte Abschlussgebühr an, aber Sie müssen den Kredit nicht schließen und neu eröffnen. Sie können auch refinanzieren, um Ihren Kreditrahmen zu erweitern, wenn BTC im Wert gestiegen ist. Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## Router-Contract

Der Smart Contract, der Token-Swaps über verfügbare [Liquiditätspools](#liquiditätspool) auf Mezo leitet. Nutzer geben Token für den Router frei und rufen Swap-Funktionen mit den gewünschten Parametern auf. Mainnet-Adresse: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Siehe [Mezo Pools (Entwickler)](/docs/de/docs/developers/features/mezo-pools).

## RPC-Endpoint

Eine Netzwerk-URL, über die Anwendungen mit der Mezo-Blockchain kommunizieren. RPC-Endpoints unterstützen die standardmäßigen Ethereum-JSON-RPC-Methoden. Für das Mainnet stehen mehrere Anbieter zur Verfügung, darunter Boar, Imperator, Validation Cloud und dRPC. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## RPC-Anbieter

Ein Dienst, der [RPC-Endpoints](#rpc-endpoint) für das Mezo-Netzwerk betreibt. Anbieter wie Boar, Imperator, Validation Cloud und dRPC bieten für das Mainnet sowohl HTTPS- als auch WebSocket-Verbindungen an. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## Slippage

Die Differenz zwischen dem erwarteten Preis eines Trades und dem tatsächlichen Ausführungspreis. Der Slippage ist in Pools mit weniger Liquidität oder bei größeren Trades höher. [Stabile Pools](#stabiler-pool) sind darauf ausgelegt, den Slippage bei korrelierten Asset-Paaren zu minimieren.

## Splitter

Ein Contract, der MEZO-Emissionen auf zwei Ziele aufteilt. Die Aufteilungsverhältnisse sind derzeit fest und per Governance gesperrt. Siehe [Chain Splitter](#chain-splitter) und [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Eine Reserve aus MUSD, die als erste Verteidigungslinie gegen [Liquidationen](#liquidation) dient. Nutzer zahlen MUSD in den Stability Pool ein und erhalten im Gegenzug einen Anteil an den liquidierten Sicherheiten. Der [PCV](#pcv)-Contract stattet den Pool mit einer anfänglichen Einzahlung von 100 Mio. MUSD aus. Siehe [MUSD – Grundbegriffe](/docs/de/docs/users/borrow/concepts).

## Stabiler Pool

Ein [Liquiditätspool](#liquiditätspool), der für den Handel zwischen Assets mit stark korrelierten Werten optimiert ist, etwa MUSD und USDC. Stabile Pools verwenden eine spezielle Formel, um einen deutlich geringeren [Slippage](#slippage) zu bieten, und erheben eine Handelsgebühr von 0,02 %. Siehe [Pool-Gebühren](/docs/de/docs/users/mezo-earn/pools/pools-fees).

## Staking-Gauge

Ein [Gauge](#gauge), der an einen Staking-Token gebunden ist (z. B. LP-Token oder sMUSD-Beleg-Token). Staker verdienen MEZO-Emissionen; veBTC-Wähler, die für den Gauge stimmen, erhalten Handelsgebühren oder Protokolleinnahmen. Staking-Gauges erhalten etwa 72 % der Nettoemissionen. Siehe [Mezo-Earn-Glossar](/docs/de/docs/users/mezo-earn/overview/glossary).

## Subgraph

Eine indizierte, abfragbare Datenschicht für Blockchain-Daten, auf die über GraphQL-APIs zugegriffen wird. Mezo verwendet Goldsky für das Deployment von Subgraphen, sodass dApps Onchain-Daten wie Transfers, Pool-Aktivität und Protokollzustand effizient abfragen können. Siehe [Subgraph-Deployment](/docs/de/docs/developers/subgraphs).

## Swap-Gebühren

Gebühren, die bei jedem Token-Swap in einem [Liquiditätspool](#liquiditätspool) erhoben werden. Volatile Pools berechnen 0,30 %, stabile Pools 0,02 %. Die Gebühren werden im Eingabetoken erhoben und in einem separaten PoolFees-Contract gehalten, wo Liquiditätsanbieter sie beanspruchen können. Siehe [Pool-Gebühren](/docs/de/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Ein dezentraler Bitcoin-Wrapper, entwickelt von Thesis und betrieben vom [Threshold Network](#threshold-network). tBTC ist 1:1 durch nativen Bitcoin gedeckt und ist die Form, die BTC annimmt, wenn es in Ethereum-kompatible Netzwerke gebridgt wird. Auf Mezo werden eingezahlte BTC über die Verwahrungsinfrastruktur von tBTC geleitet. Siehe [MUSD-Architektur](/docs/de/docs/users/borrow/architecture-and-terminology).

## Tail-Emissionen

Die dauerhafte jährliche MEZO-Emissionsrate von 2 %, die nach Jahr 8 des [Halving-Plans](#halving-plan) beginnt. Tail-Emissionen bieten unbefristet fortlaufende Anreize für Validatoren, Liquiditätsanbieter und Governance-Teilnehmer. Siehe [Emissionsplan](/docs/de/docs/users/mezo/emissions).

## Testnet

Ein Testnetzwerk, in dem Entwickler Anwendungen deployen und testen können, ohne echte Vermögenswerte zu verwenden. Das Mezo Testnet hat die Chain-ID `31611`. Siehe [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event. Der Zeitpunkt, zu dem MEZO-Token erstmals erzeugt und verteilt wurden. Die Zuteilungen für Community und Stiftung wurden beim TGE freigeschaltet, während für die Zuteilungen an Team und Investoren ein Cliff von 1 Jahr und ein lineares Vesting über 3 Jahre gelten. Siehe [Token-Verteilung](/docs/de/docs/users/mezo/token-distribution).

## Threshold Network

Ein dezentrales Netzwerk, das die [tBTC](#tbtc)-Bridge betreibt. Threshold betreibt eine dezentrale Gruppe von Signierern, die seit Anfang 2020 über 28.000 Bitcoin gebridgt hat. Siehe [MUSD-Architektur](/docs/de/docs/users/borrow/architecture-and-terminology).

## Token-Verteilung

Die Zuteilung des Genesis-Angebots von 1.000.000.000 MEZO: Community (40 %), Investoren und Partner (30 %), Team (20 %) und Stiftung (10 %). Das gesamte Vesting ist innerhalb von 36 Monaten nach dem [TGE](#tge) abgeschlossen. Siehe [Token-Verteilung](/docs/de/docs/users/mezo/token-distribution).

## Handelsgebühren

Siehe [Swap-Gebühren](#swap-gebühren).

## Trove

Eine besicherte Schuldenposition auf Mezo, die an eine einzelne Ethereum-Adresse gebunden ist. Nutzer eröffnen einen Trove, indem sie BTC einzahlen und dagegen [MUSD](#musd) leihen. In vergleichbaren Protokollen auch als „CDP“ bezeichnet. Siehe [MUSD leihen und minten](/docs/de/docs/users/borrow/mint-musd).

## Validator

Ein Node-Betreiber, der am Konsens und an der Blockproduktion im Mezo-Netzwerk teilnimmt. Validatoren betreiben den mezod-Client, sichern die Chain und erhalten MEZO-Emissionen über den Chain Splitter. Siehe [Mezo-Validatoren](/docs/de/docs/developers/mezo-nodes/validators).

## Validator Kit

Ein umfassendes Toolkit zum Deployen und Verwalten von Mezo-Nodes. Unterstützt Docker, nativen Daemon, Kubernetes und Cloud-Deployment. Enthält Konfigurationsvorlagen, Monitoring und Automatisierungsskripte. Siehe [Validator-Kit-Leitfaden](/docs/de/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC. Ein NFT, das gesperrte Bitcoin repräsentiert und Stimmkraft sowie das Recht auf Gebührenerträge in Mezo Earn verleiht. Das Stimmgewicht verfällt linear über die Sperrdauer. Die maximale Sperrdauer beträgt 28 Tage. Siehe [veBTC-Übersicht](/docs/de/docs/users/mezo-earn/lock/vebtc).

## veBTC-Boost-Gauge

Ein [Gauge](#gauge), der an ein bestimmtes veBTC-NFT gebunden ist. veMEZO-Inhaber stimmen für diese Gauges ab, um der jeweiligen veBTC-Position im Austausch gegen [Anreize](#anreize) einen [Boost](#boost) zu verschaffen. Siehe [Matching-Markt](/docs/de/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO. Ein NFT, das gesperrte MEZO-Token repräsentiert. Es kann die veBTC-Stimmkraft um bis zu 5x [boosten](#boost) und stimmt selbst über [veBTC-Boost-Gauges](#vebtc-boost-gauge) und [MEZO Gauges](#mezo-gauge) ab. Es hat kein eigenes Governance-Gewicht und kann ohne veBTC nicht über [Staking-Gauges](#staking-gauge) abstimmen. Die maximale Sperrdauer beträgt 4 Jahre. Siehe [veMEZO-Übersicht](/docs/de/docs/users/mezo-earn/lock/vemezo).

## Vesting-Plan

Der Zeitplan, nach dem gesperrte Token-Zuteilungen schrittweise verfügbar werden. Das gesamte MEZO-Vesting ist innerhalb von 36 Monaten nach dem [TGE](#tge) abgeschlossen. Für die Zuteilungen an Team und Investoren gilt ein [Cliff](#cliff) von 1 Jahr, gefolgt von einer linearen monatlichen Freischaltung über 2 Jahre. Siehe [Token-Verteilung](/docs/de/docs/users/mezo/token-distribution).

## Volatiler Pool

Ein [Liquiditätspool](#liquiditätspool) für Asset-Paare mit unkorrelierten Preisen, etwa BTC und MUSD. Volatile Pools verwenden eine Constant-Product-Formel (x * y = k) und erheben eine [Swap-Gebühr](#swap-gebühren) von 0,30 %. Siehe [Pool-Gebühren](/docs/de/docs/users/mezo-earn/pools/pools-fees).

## Stimmgewicht

Der Einfluss, den eine Position bei der Abstimmung über Gauges hat. Für veBTC berechnet es sich aus den gesperrten BTC multipliziert mit der verbleibenden Sperrdauer, geteilt durch die maximale Sperrdauer (28 Tage). Für veMEZO gilt dieselbe Formel, jedoch mit einer maximalen Sperrdauer von 4 Jahren. Siehe [Abstimmung – Übersicht](/docs/de/docs/users/mezo-earn/vote).

## Wormhole

Ein Cross-Chain-Messaging-Protokoll, das die [MUSD Bridge](#musd-bridge) betreibt. Wormhole ermöglicht sichere Token-Transfers zwischen Mezo und Ethereum. Siehe [MUSD Bridge](/docs/de/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. Das spezifische Wormhole-Protokoll, das für die [MUSD Bridge](#musd-bridge) verwendet wird. NTT erhält die Fungibilität des Tokens, indem Token auf der Quell-Chain gesperrt und auf der Ziel-Chain gemintet werden, sodass das Gesamtangebot über alle Chains hinweg konstant bleibt. Siehe [MUSD Bridge](/docs/de/docs/users/borrow/musd-bridge).
