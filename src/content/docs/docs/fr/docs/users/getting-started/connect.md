---
title: Connecter votre portefeuille à Mezo
topic: users
---

Pour connecter votre portefeuille de navigateur, utilisez les détails du réseau Mainnet ou Testnet.

Vous pouvez ajouter Mezo à votre portefeuille à l'aide du bouton **Connect Wallet** sur Chainlist :

- Mainnet : [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet : [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Si Chainlist ne fonctionne pas, ajoutez le réseau manuellement à l'aide des détails du réseau ci-dessous.

## Mezo Mainnet

### Endpoints RPC publics

| Fournisseur | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Pour bénéficier de limites de débit plus élevées, Boar propose une clé API gratuite sur [boar.network/mezo](https://boar.network/mezo). Une offre Enterprise est disponible : rendez-vous sur [https://dashboard.boar.network/](https://dashboard.boar.network/) pour commencer.

Pour bénéficier de limites de débit plus élevées, obtenez votre clé API Validation Cloud gratuite sur [validationcloud.io/mezo](https://www.validationcloud.io/mezo) ou contactez Validation Cloud via [validationcloud.io/contact](https://validationcloud.io/contact) pour les offres Enterprise.

### Détails du réseau

| Paramètre | Valeur |
|-----------|-------|
| Chain ID | `31612` |
| Devise | BTC (18 décimales) |
| Explorateur de blocs | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Endpoints RPC publics

| Protocole | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Détails du réseau

| Paramètre | Valeur |
|-----------|-------|
| Chain ID | `31611` |
| Devise | BTC (18 décimales) |
| Explorateur de blocs | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Vous développez sur Mezo ?]
Consultez le guide [Configurer l'environnement de développement](/docs/fr/docs/developers/getting-started/configure-environment) pour la configuration de Hardhat et de Foundry.
:::

## Ajouter Mezo manuellement à votre portefeuille

Si vous devez ajouter le réseau manuellement à votre portefeuille, suivez les instructions ci-dessous pour ajouter un réseau personnalisé selon votre portefeuille :

* MetaMask : [Comment ajouter un réseau RPC personnalisé](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet : [Ajouter un réseau personnalisé](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet : [Ajouter un réseau personnalisé (mobile)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## Portefeuilles BTC

Les portefeuilles BTC sont pris en charge dans l'application Mezo et peuvent recevoir une adresse sur le réseau Mezo associée à votre portefeuille BTC. Les portefeuilles BTC permettent actuellement d'effectuer les opérations suivantes sur Mezo :

- Transférer des actifs BTC via un pont
- Transférer des actifs EVM via un pont
- Emprunter, rembourser ou gérer la garantie d'un prêt
- Acheter des articles sur le MUSD Market
- Recevoir et envoyer des actifs sur le réseau Mezo
- Participer à Mezo Earn (verrouiller, voter, déposer dans des coffres et des pools ou en retirer, réclamer des récompenses)

## Développeurs

Pour apprendre à développer et à déployer des dApps sur Mezo, consultez la documentation [Premiers pas pour les développeurs](/docs/fr/docs/developers/getting-started/).
