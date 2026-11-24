---
title: 'Руководство разработчика: инфраструктура оракулов'
description: >-
  Узнайте, как оракулы Mezo обеспечивают безопасные, децентрализованные потоки
  данных для ваших приложений.
topic: developers
---

Mezo включает оракул как часть своих узлов-валидаторов. Также доступны сторонние оракулы.

## Skip Connect

Mezo использует [Skip Connect](https://github.com/skip-mev/connect) в качестве основного сервиса оракулов. Skip определяет цену пары активов во время консенсуса блока и записывает её в ончейн-состояние модуля Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Этот модуль предоставляется Skip и интегрирован в клиент Mezo.

Сайдкар работает на той же системе, что и узел-валидатор, поэтому извлечение и агрегация данных выполняются на одной системе и передаются узлу-валидатору через gRPC.

![Диаграмма, показывающая процесс, в котором Skip агрегирует рыночные данные из нескольких источников, а валидаторы Mezo запускают Skip Connect и x/oracle для обновления ончейн-состояния актуальными значениями](/docs/images/oracle/mezo-oracle.avif)

Полное описание того, как Skip агрегирует данные, смотрите в документации [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

Skip Connect включает несколько [провайдеров](https://github.com/skip-mev/connect/blob/main/providers/README.md), которые можно настроить в сайдкаре. Полный список доступных провайдеров можно найти в документации Skip Connect:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Справочные материалы Skip Providers и Market Map:
    - [Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Markets](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork — это протокол оракулов, обеспечивающий сверхнизкую задержку соединений между поставщиками данных и как ончейн-, так и офчейн-приложениями. Наиболее распространённый вариант использования Stork — получение и потребление рыночных данных в виде ценовых потоков в реальном времени для DeFi. Stork [доступен в тестовой сети Mezo](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Документация Stork](https://docs.stork.network/)**
- **[Развёрнутые контракты в тестовой сети Mezo](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra — это кросс-чейн оракульная сеть, разработанная для поддержки dApp в блокчейн-экосистемах с быстрыми, безопасными, децентрализованными и масштабируемыми решениями для работы с данными. [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) от Supra доступен в тестовой сети Mezo. На странице [Available Networks](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) Supra вы найдёте правильные адреса pull-контрактов и контрактов хранения.

- **[Документация Supra](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) — одна из крупнейших оракульных сетей, получающих данные напрямую из первоисточников (first-party), предоставляющая данные в реальном времени для нескольких сетей, включая Mezo. Pyth предлагает инновационную архитектуру [pull-оракула](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand) с низкой задержкой, где пользователи могут получать обновления цен в ончейне по запросу. Это позволяет всем участникам ончейн-среды эффективно получать доступ к данным. Сеть Pyth обновляет цены каждые 400 мс, что делает Pyth одним из самых быстрых ончейн-оракулов.

Оракульные контракты Pyth:
- Основная сеть Mezo (прокси): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Тестовая сеть Mezo (прокси): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Ознакомьтесь с [документацией Pyth](https://docs.pyth.network/home), чтобы узнать, как использовать Pyth в вашем dApp.
