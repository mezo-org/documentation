---
title: 'Посібник для розробників: інфраструктура оракулів'
description: >-
  Дізнайтеся, як оракули Mezo забезпечують безпечні, децентралізовані потоки
  даних для ваших застосунків.
topic: developers
---

Mezo включає оракул як частину своїх вузлів-валідаторів. Також доступні сторонні оракули.

## Skip Connect

Mezo використовує [Skip Connect](https://github.com/skip-mev/connect) як основний сервіс оракулів. Skip визначає ціну пари активів під час консенсусу блоку та записує її в ончейн-стан модуля Cosmos [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle). Цей модуль надає Skip, і він під'єднаний до клієнта Mezo.

Сайдкар працює на тій самій системі, що й вузол-валідатор, тому отримання та агрегація даних виконуються на тій самій системі та передаються вузлу-валідатору через gRPC.

![Діаграма, що показує процес, де Skip агрегує ринкові дані з кількох джерел, а валідатори Mezo запускають Skip Connect та x/oracle для оновлення ончейн-стану останніми значеннями](/docs/images/oracle/mezo-oracle.avif)

Повний опис того, як Skip агрегує дані, наведено в документації [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go).

Skip Connect включає кілька [провайдерів](https://github.com/skip-mev/connect/blob/main/providers/README.md), які можна налаштувати в сайдкарі. Повний список доступних провайдерів можна знайти в документації Skip Connect:

- [Skip Providers (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip Providers (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Довідка Skip Providers та Market Map:
    - [Провайдери](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [Ринки](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork — це протокол оракулів, який забезпечує з'єднання з надзвичайно низькою затримкою між постачальниками даних та ончейн- і офчейн-застосунками. Найпоширеніший випадок використання Stork — це отримання та використання ринкових даних у вигляді цінових потоків у реальному часі для DeFi. Stork [доступний у Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Документація Stork](https://docs.stork.network/)**
- **[Розгорнуті контракти в Mezo Testnet](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra — це крос-чейн мережа оракулів, розроблена для підтримки dApps у блокчейн-екосистемах за допомогою швидких, безпечних, децентралізованих та масштабованих рішень для даних. [Distributed Oracle Agreement (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora) від Supra доступний у Mezo Testnet. Перегляньте сторінку Supra [Доступні мережі](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks), щоб знайти правильні адреси pull-контрактів та контрактів зберігання.

- **[Документація Supra](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/) — це одна з найбільших мереж оракулів із даними з першоджерел, яка надає дані в реальному часі через кілька мереж, включаючи Mezo. Pyth впроваджує інноваційний дизайн [pull-оракула з низькою затримкою](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand), де користувачі можуть за потреби отримувати оновлення цін ончейн. Це дозволяє кожному в ончейн-середовищі ефективно отримувати доступ до точок даних. Мережа Pyth оновлює ціни кожні 400 мс, що робить Pyth одним з найшвидших ончейн-оракулів.

Контракти оракулів Pyth:
- Mezo Mainnet (проксі): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo Testnet (проксі): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

Перегляньте [документацію Pyth](https://docs.pyth.network/home), щоб дізнатися, як використовувати Pyth у вашому dApp.
