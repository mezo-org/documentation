---
title: Descripción general de Mezo Pools
description: Conoce Mezo Pools y cómo aportar liquidez
topic: users
---

[Mezo Pools](https://mezo.org/explore/pools) son el motor central del ecosistema Mezo y funcionan como reservas de liquidez onchain automatizadas para Mezo Pools. Cada pool contiene un par de dos tokens distintos, lo que permite operaciones instantáneas y descentralizadas. En lugar de depender de un libro de órdenes tradicional para emparejar compradores y vendedores, los usuarios operan directamente contra la liquidez que hay en el pool.

![Diagrama de Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

[Mezo Pools](https://mezo.org/explore/pools) te permiten ganar comisiones aportando liquidez para swaps de tokens. Cuando depositas dos tokens en un pool, los traders pueden intercambiar uno por otro, y tú ganas una parte de las comisiones de trading.

Cuando un usuario deposita un valor proporcional de los tokens requeridos en un pool, se convierte en proveedor de liquidez (LP). Esta acción es fundamental para el funcionamiento del sistema, ya que aumenta la liquidez disponible y reduce el deslizamiento de precio (slippage) para los traders. A cambio de su aportación, los LP reciben tokens LP. Estos tokens LP representan la parte proporcional de un LP sobre los activos totales del pool. Otorgan algorítmicamente a su titular el derecho a una parte de las comisiones de trading generadas por el pool y sirven como mecanismo para redimir los activos subyacentes que depositó.

Mezo ofrece tres tipos de pools, optimizados para distintos casos de uso:

* **Pools volátiles**: diseñados para pares de activos con precios no correlacionados, como BTC y MUSD.
* **Pools estables**: diseñados para activos con valores muy correlacionados, como MUSD y USDC. Usan una fórmula especializada para ofrecer un deslizamiento mucho menor en las operaciones entre activos similares.
* **Pools de liquidez concentrada (CL)**: te permiten aportar liquidez dentro de un rango de precios personalizado en lugar de en toda la curva, lo que mejora de forma significativa la eficiencia de capital. Las posiciones CL se representan como NFT (ERC-721) en lugar de tokens LP fungibles. Consulta [Liquidez concentrada](/docs/es/docs/users/mezo-earn/pools/concentrated-liquidity) para obtener más detalles.

## Qué son los tokens LP

Cuando depositas activos en un [Mezo Pool](https://mezo.org/explore/pools), el contrato acuña tokens LP y te los envía. Son tokens ERC20 estándar que cuantifican tu participación proporcional en las reservas totales del pool.

La cantidad de tokens LP que recibes se basa en tu participación en el pool. Para el primer depósito en un pool nuevo, esta cantidad se calcula como sqrt(x * y), donde x e y son las cantidades de los dos tokens depositados.

En cada swap que se ejecuta a través del pool, se cobra una comisión de trading (por ejemplo, 0.30% en los pools volátiles) sobre el activo de entrada. Esta comisión se separa al instante en un contrato aparte, desde el cual pueden reclamarla los proveedores de liquidez de ese pool concreto.

Para recuperar tu parte de los activos subyacentes, debes "quemar" tus tokens LP; sin embargo, puedes reclamar tus comisiones en cualquier momento. Cuando reclamas los activos que depositaste inicialmente, tus tokens LP se devuelven al contrato inteligente a cambio de tu parte proporcional de los dos tokens del pool.

## La ventaja de Mezo Pools

El protocolo Mezo se diseñó sin depender de estructuras financieras tradicionales como los libros de órdenes. Aunque los libros de órdenes son eficaces en las finanzas centralizadas, plantean desafíos importantes en un entorno descentralizado, ya que a menudo requieren una gestión activa por parte de creadores de mercado profesionales y una infraestructura centralizada para alojar y emparejar las órdenes.

[Mezo Pools](https://mezo.org/explore/pools) están diseñados específicamente para un entorno descentralizado y aprovecha los puntos fuertes propios de la tecnología blockchain:

* **Autónomo y sin permisos**: cada pool es un contrato inteligente de acceso abierto. Cualquier usuario o aplicación puede interactuar con él sin necesidad de permisos, llamando a funciones como swap() para operar o mint() para aportar liquidez.
* **Capacidades avanzadas**: Mezo Pool funciona como un oráculo TWAP (Time-Weighted Average Price, precio promedio ponderado por tiempo) onchain, que proporciona datos de precios resistentes a la manipulación para otros protocolos. También admite préstamos flash (flash loans), que permiten estrategias DeFi complejas en una sola transacción.

Estas ventajas arquitectónicas son la base de la misión principal de Mezo: construir una economía circular y sólida para Bitcoin. Al permitir que los usuarios tomen su BTC, lo usen como colateral (por ejemplo, mediante Mezo Borrow para acuñar MUSD) y luego destinen ambos activos a pools de liquidez, el protocolo transforma Bitcoin de una reserva de valor pasiva en un instrumento activo que genera rendimiento. Esto crea un ciclo autosostenible en el que aportar liquidez no solo genera rendimientos para el usuario, sino que también profundiza el mercado de activos respaldados por Bitcoin, lo que hace que todo el ecosistema sea más líquido y útil.

## Primeros pasos

### Cómo empezar en 3 sencillos pasos

¿Quieres convertirte en proveedor de liquidez? Empezar es fácil. Visita [Mezo Pools](https://mezo.org/explore/pools) para comenzar.

1. **Prepara tus activos**: para aportar liquidez, necesitarás el mismo valor de ambos activos de un par (por ejemplo, `$50 of BTC` y `$50 of MUSD`).
   * ¿Necesitas MUSD? Acúñalo con tu BTC en Mezo Borrow.
   * ¿Necesitas otros activos o MUSD? Usa [Mezo Pools](https://mezo.org/explore/pools) para obtenerlos mediante un intercambio.
2. **Añade liquidez**: ve a la [página Pools de Mezo Explore](https://mezo.org/explore/pools). Selecciona el pool que quieras, indica la cantidad que deseas depositar y confirma la transacción. Recibirás tokens LP en tu billetera, que representan tu participación en el pool.
3. **Haz staking y gana (próximamente)**: cuando el staking esté disponible, simplemente vuelve a la [página Pools](https://mezo.org/explore/pools), selecciona tu posición y pon tus tokens LP en staking para empezar a ganar más recompensas. Mantente atento.

## Recursos para desarrolladores

Para integrar [Mezo Pools](https://mezo.org/explore/pools) en tu aplicación, consulta [Aportar liquidez](../../../developers/getting-started/) en nuestra documentación para desarrolladores.
