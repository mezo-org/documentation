---
title: Интеграции и партнёры Mezo
description: 'Сервисы, dApp и партнёры, интегрированные с Mezo.'
topic: developers
---

Ряд организаций сотрудничает с Mezo, чтобы перенести свои dApp и сервисы в сеть.

## Goldsky

Goldsky — индексатор для web3-разработчиков, предлагающий хостинг сабграфов и конвейеры репликации данных в реальном времени. Goldsky [доступен в тестовой сети Mezo](https://docs.goldsky.com/chains/supported-networks) под идентификатором `mezo-testnet`.

- **[Документация Goldsky](https://docs.goldsky.com/)**

## Stork

Stork — протокол оракулов, обеспечивающий соединение со сверхнизкой задержкой между поставщиками данных и ончейн- и офчейн-приложениями. Чаще всего Stork используют для получения и потребления рыночных данных в виде ценовых потоков в реальном времени для DeFi. Stork [доступен в тестовой сети Mezo](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Документация Stork](https://docs.stork.network/)**
- **[Развёрнутые контракты в тестовой сети Mezo](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra — кросс-чейн сеть оракулов, обеспечивающая dApp в разных блокчейн-экосистемах быстрыми, безопасными, децентрализованными и масштабируемыми решениями для данных. [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) от Supra доступен в тестовой сети Mezo. Нужные адреса pull-контракта и контракта хранения можно найти на странице Supra [Available Networks](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks).

- **[Документация Supra](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) — одна из крупнейших сетей оракулов, получающих данные напрямую из первоисточников (first-party); она передаёт данные в реальном времени в несколько сетей, включая Mezo. Pyth предлагает инновационную [pull-архитектуру оракула](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) с низкой задержкой, при которой пользователи при необходимости сами загружают обновления цен ончейн. Это позволяет всем участникам ончейн-среды эффективно получать данные. Сеть Pyth обновляет цены каждые 400 мс, что делает Pyth одним из самых быстрых ончейн-оракулов.

Контракты Pyth:
- Основная сеть Mezo (прокси): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Тестовая сеть Mezo (прокси): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Как использовать Pyth в своём dApp, см. в [документации Pyth](https://docs.pyth.network/home).

## Onchain Den

Den — мультисиг-кошелёк с самостоятельным хранением (self-custodial) для ончейн-организаций, доступный в Mezo. Кроме того, Onchain Den совместно с Mezo развернул инфраструктуру SAFE на [safe.mezo.org](http://safe.mezo.org/).

- **[Документация Den](https://docs.onchainden.com/overview/den)**
