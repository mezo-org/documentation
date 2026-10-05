---
title: Подключение кошелька к Mezo
topic: users
---

Чтобы подключить браузерный кошелёк, используйте параметры основной или тестовой сети.

Добавить Mezo в кошелёк можно с помощью кнопки **Connect Wallet** на Chainlist:

- Основная сеть: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Тестовая сеть: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Если Chainlist не работает, добавьте сеть вручную, используя параметры сети ниже.

## Основная сеть Mezo

### Публичные RPC-эндпоинты

| Провайдер | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Для более высоких лимитов запросов Boar предлагает бесплатный API-ключ на [boar.network/mezo](https://boar.network/mezo). Доступен и корпоративный тариф (Enterprise) — чтобы начать, перейдите на [https://dashboard.boar.network/](https://dashboard.boar.network/).

Для более высоких лимитов запросов получите бесплатный API-ключ Validation Cloud на [validationcloud.io/mezo](https://www.validationcloud.io/mezo) или свяжитесь с ними через [validationcloud.io/contact](https://validationcloud.io/contact), чтобы узнать о корпоративных тарифах (Enterprise).

### Параметры сети

| Параметр | Значение |
|-----------|-------|
| ID сети | `31612` |
| Валюта | BTC (18 десятичных знаков) |
| Обозреватель блоков | [explorer.mezo.org](https://explorer.mezo.org/) |

## Тестовая сеть Mezo

### Публичные RPC-эндпоинты

| Протокол | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Параметры сети

| Параметр | Значение |
|-----------|-------|
| ID сети | `31611` |
| Валюта | BTC (18 десятичных знаков) |
| Обозреватель блоков | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Разрабатываете на Mezo?]
Настройка Hardhat и Foundry описана в руководстве [Настройка окружения разработки](/docs/ru/docs/developers/getting-started/configure-environment).
:::

## Добавление Mezo в кошелёк вручную

Если сеть нужно добавить в кошелёк вручную, воспользуйтесь инструкцией по добавлению пользовательской сети для вашего кошелька:

* MetaMask: [Как добавить пользовательскую сеть (RPC)](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Добавление пользовательской сети](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Добавление пользовательской сети (мобильное приложение)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## BTC-кошельки

BTC-кошельки поддерживаются в приложении Mezo и могут получить адрес в сети Mezo, связанный с вашим BTC-кошельком. Сейчас с BTC-кошелька в Mezo можно выполнять следующие действия:

- Переводить BTC-активы через мост
- Переводить EVM-активы через мост
- Брать заём, погашать его и управлять залогом по займу
- Совершать покупки в MUSD Market
- Получать и отправлять активы в сети Mezo
- Участвовать в Mezo Earn (блокировать, голосовать, вносить средства в хранилища и пулы и выводить их, получать вознаграждения)

## Разработчикам

Чтобы узнать, как разрабатывать и развёртывать dApp в Mezo, см. документацию [Начало работы для разработчиков](/docs/ru/docs/developers/getting-started/).
