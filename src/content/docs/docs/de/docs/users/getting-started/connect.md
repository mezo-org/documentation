---
title: Wallet mit Mezo verbinden
topic: users
---

Um Ihre Browser-Wallet zu verbinden, verwenden Sie die Netzwerkdetails für das Mainnet oder das Testnet.

Sie können Mezo über die Schaltfläche **Connect Wallet** auf Chainlist zu Ihrer Wallet hinzufügen:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Falls Chainlist nicht funktioniert, fügen Sie das Netzwerk manuell mit den unten stehenden Netzwerkdetails hinzu.

## Mezo Mainnet

### Öffentliche RPC-Endpoints

| Anbieter | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Für höhere Rate-Limits bietet Boar unter [boar.network/mezo](https://boar.network/mezo) einen kostenlosen API-Schlüssel an. Ein Enterprise-Tarif ist ebenfalls verfügbar – besuchen Sie [https://dashboard.boar.network/](https://dashboard.boar.network/), um loszulegen.

Für höhere Rate-Limits erhalten Sie unter [validationcloud.io/mezo](https://www.validationcloud.io/mezo) Ihren kostenlosen API-Schlüssel von Validation Cloud. Für Enterprise-Tarife wenden Sie sich unter [validationcloud.io/contact](https://validationcloud.io/contact) an Validation Cloud.

### Netzwerkdetails

| Parameter | Wert |
|-----------|-------|
| Chain-ID | `31612` |
| Währung | BTC (18 Dezimalstellen) |
| Block-Explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Öffentliche RPC-Endpoints

| Protokoll | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Netzwerkdetails

| Parameter | Wert |
|-----------|-------|
| Chain-ID | `31611` |
| Währung | BTC (18 Dezimalstellen) |
| Block-Explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Sie entwickeln auf Mezo?]
In der Anleitung [Entwicklungsumgebung einrichten](/docs/de/docs/developers/getting-started/configure-environment) finden Sie die Konfiguration für Hardhat und Foundry.
:::

## Mezo manuell zu Ihrer Wallet hinzufügen

Wenn Sie das Netzwerk manuell zu Ihrer Wallet hinzufügen müssen, folgen Sie je nach Wallet der jeweiligen Anleitung zum Hinzufügen eines benutzerdefinierten Netzwerks:

* MetaMask: [So fügen Sie ein benutzerdefiniertes Netzwerk (RPC) hinzu](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Ein benutzerdefiniertes Netzwerk hinzufügen](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Ein benutzerdefiniertes Netzwerk hinzufügen (Mobil)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC-Wallets

BTC-Wallets werden in der Mezo App unterstützt und können eine Mezo-Netzwerkadresse erhalten, die mit Ihrer BTC-Wallet verknüpft ist. Mit BTC-Wallets können Sie auf Mezo derzeit Folgendes erledigen:

- BTC-Assets bridgen
- EVM-Assets bridgen
- Einen Kredit aufnehmen, zurückzahlen oder seine Sicherheiten verwalten
- Artikel auf dem MUSD Market kaufen
- Vermögenswerte im Mezo-Netzwerk empfangen und senden
- An Mezo Earn teilnehmen (sperren, abstimmen, in Vaults und Pools einzahlen bzw. daraus abheben, Belohnungen beanspruchen)

## Entwickler

Wie Sie dApps auf Mezo entwickeln und deployen, erfahren Sie in der Dokumentation [Erste Schritte für Entwickler](/docs/de/docs/developers/getting-started/).
