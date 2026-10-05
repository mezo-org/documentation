---
title: Під'єднайте гаманець до Mezo
topic: users
---

Щоб під'єднати браузерний гаманець, використайте параметри мережі Mainnet або Testnet.

Додати Mezo до гаманця можна за допомогою кнопки **Connect Wallet** на Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Якщо Chainlist не працює, додайте мережу вручну, використавши наведені нижче параметри мережі.

## Mezo Mainnet

### Публічні RPC-ендпоінти

| Провайдер | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Для вищих лімітів запитів Boar пропонує безплатний API-ключ на [boar.network/mezo](https://boar.network/mezo). Також доступний тариф Enterprise — щоб почати, перейдіть на [https://dashboard.boar.network/](https://dashboard.boar.network/).

Для вищих лімітів запитів отримайте безплатний API-ключ Validation Cloud на [validationcloud.io/mezo](https://www.validationcloud.io/mezo) або зверніться до них через [validationcloud.io/contact](https://validationcloud.io/contact), щоб дізнатися про тарифи Enterprise.

### Параметри мережі

| Параметр | Значення |
|-----------|-------|
| Chain ID | `31612` |
| Валюта | BTC (18 десяткових знаків) |
| Оглядач блоків | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Публічні RPC-ендпоінти

| Протокол | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Параметри мережі

| Параметр | Значення |
|-----------|-------|
| Chain ID | `31611` |
| Валюта | BTC (18 десяткових знаків) |
| Оглядач блоків | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Розробляєте на Mezo?]
Налаштування Hardhat і Foundry описано в посібнику [Налаштування середовища розробки](/docs/ua/docs/developers/getting-started/configure-environment).
:::

## Додавання Mezo до гаманця вручну

Якщо вам потрібно додати мережу до гаманця вручну, скористайтеся інструкцією з додавання власної мережі для вашого гаманця:

* MetaMask: [Як додати власну мережу RPC](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Додавання власної мережі](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Додавання власної мережі (мобільний застосунок)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC-гаманці

Застосунок Mezo підтримує BTC-гаманці: вони можуть отримати адресу в мережі Mezo, прив'язану до вашого BTC-гаманця. Наразі BTC-гаманці можуть виконувати в Mezo такі дії:

- Переказувати BTC-активи через міст
- Переказувати EVM-активи через міст
- Позичати, погашати позику або керувати її заставою
- Купувати товари в MUSD Market
- Отримувати й надсилати активи в мережі Mezo
- Брати участь у Mezo Earn (блокувати, голосувати, вносити кошти до сховищ і пулів та виводити їх, отримувати винагороди)

## Розробникам

Щоб дізнатися, як розробляти й розгортати dApp на Mezo, перегляньте документацію [Початок роботи для розробників](/docs/ua/docs/developers/getting-started/).
