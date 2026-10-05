---
title: Je wallet verbinden met Mezo
topic: users
---

Gebruik de netwerkgegevens van Mainnet of Testnet om je browserwallet te verbinden.

Je kunt Mezo aan je wallet toevoegen met de knop **Connect Wallet** op Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Werkt Chainlist niet, voeg het netwerk dan handmatig toe met de netwerkgegevens hieronder.

## Mezo Mainnet

### Openbare RPC-endpoints

| Provider | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Voor hogere rate limits biedt Boar een gratis API-sleutel aan via [boar.network/mezo](https://boar.network/mezo). Er is ook een Enterprise-abonnement beschikbaar: ga naar [https://dashboard.boar.network/](https://dashboard.boar.network/) om te beginnen.

Voor hogere rate limits kun je een gratis Validation Cloud-API-sleutel aanvragen via [validationcloud.io/mezo](https://www.validationcloud.io/mezo). Voor Enterprise-abonnementen neem je contact op via [validationcloud.io/contact](https://validationcloud.io/contact).

### Netwerkgegevens

| Parameter | Waarde |
|-----------|-------|
| Chain-ID | `31612` |
| Valuta | BTC (18 decimalen) |
| Block explorer | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Openbare RPC-endpoints

| Protocol | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Netwerkgegevens

| Parameter | Waarde |
|-----------|-------|
| Chain-ID | `31611` |
| Valuta | BTC (18 decimalen) |
| Block explorer | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Bouw je op Mezo?]
Zie de handleiding [Ontwikkelomgeving instellen](/docs/nl/docs/developers/getting-started/configure-environment) voor de configuratie van Hardhat en Foundry.
:::

## Mezo handmatig aan je wallet toevoegen

Moet je het netwerk handmatig aan je wallet toevoegen? Volg dan de instructies voor jouw wallet om een aangepast netwerk toe te voegen:

* MetaMask: [Een aangepast RPC-netwerk toevoegen](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Een aangepast netwerk toevoegen](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Een aangepast netwerk toevoegen (mobiel)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC-wallets

BTC-wallets worden ondersteund in de Mezo App en kunnen een Mezo-netwerkadres krijgen dat aan je BTC-wallet is gekoppeld. Met een BTC-wallet kun je op Mezo momenteel het volgende doen:

- BTC-activa bridgen
- EVM-activa bridgen
- Lenen, aflossen of het onderpand van een lening beheren
- Aankopen doen op de MUSD Market
- Activa ontvangen en versturen op het Mezo-netwerk
- Deelnemen aan Mezo Earn (vergrendelen, stemmen, storten in en opnemen uit kluizen en pools, beloningen claimen)

## Ontwikkelaars

Wil je leren hoe je dApps op Mezo ontwikkelt en deployt? Zie de documentatie [Aan de slag voor ontwikkelaars](/docs/nl/docs/developers/getting-started/).
