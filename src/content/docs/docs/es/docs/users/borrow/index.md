---
title: Descripción general de la stablecoin MUSD
description: >-
  Todo lo que necesitas saber sobre MUSD, la stablecoin de Mezo respaldada por
  Bitcoin.
topic: users
---

## ¿Qué es MUSD?

Históricamente, los titulares de Bitcoin se han enfrentado a una elección imposible: vender su BTC para cubrir gastos, confiar en un prestamista centralizado para que custodie su bitcoin, o mantenerlo indefinidamente y renunciar a la liquidez que necesitan en su día a día.

MUSD cambia eso. Es una stablecoin sin permisos, respaldada al 100% por reservas de Bitcoin y diseñada para mantener una paridad 1:1 con el dólar estadounidense. Acuña MUSD depositando BTC como colateral, gástalo en cualquier lugar donde se acepten dólares y conserva toda tu exposición a Bitcoin en todo momento. Cuando termines, devuelve el MUSD prestado más los intereses y recupera tu BTC.

![MUSD te permite conservar y gastar BTC](/docs/images/musd/musd-keep-and-spend-btc.png)

### ¿Por qué MUSD?

1. **No vendas nunca tu Bitcoin**: pide prestado con hasta el 90% de tus tenencias de BTC como respaldo. Conserva tus sats, aprovecha el valor de tu Bitcoin y reembolsa tu préstamo cuando quieras.
2. **Tasas fijas del 1–5%**: tu tasa de interés se fija al abrir el préstamo y nunca cambia. Sin tasas variables ni sorpresas. Compáralo con el 7–20% APR de los bancos tradicionales o el 8–9% de otras plataformas DeFi.
3. **Totalmente onchain y verificable**: cada préstamo y cada dólar de colateral son visibles onchain, 24/7. Sin reservas opacas ni custodios: solo Bitcoin en una bóveda de contrato inteligente. [Consulta el colateral en tiempo real en el explorador de Mezo](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Sin permisos**: sin comprobaciones de crédito, sin solicitudes y sin más mínimos que el mínimo de 1,800 MUSD. Si tienes BTC, puedes pedir prestado.

## Cómo funciona MUSD

![El ciclo de vida de MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD usa un modelo de CDP (posición de deuda colateralizada). Todo el MUSD en circulación es redimible por Bitcoin, y \$1 de colateral en BTC puede usarse para acuñar 1 MUSD.

Este modelo de acuñación y redención es lo que mantiene la paridad de MUSD en \$1, incluso en mercados volátiles:

* **MUSD cotiza por debajo de \$1**: los arbitrajistas compran MUSD con descuento en el mercado y lo redimen por \$1 del BTC subyacente, pagando una comisión de redención del 0.75%, lo que sigue siendo rentable hasta que MUSD llega a \$0.995.
* **MUSD cotiza por encima de \$1**: los arbitrajistas acuñan MUSD nuevo aportando BTC al protocolo y lo venden en el mercado con beneficio. Esto sigue siendo rentable hasta que MUSD vuelve a \$1.005.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Para garantizar que la paridad se mantenga durante la volatilidad del mercado, todas las posiciones de préstamo deben mantener un ratio de colateral superior al 110%. El sistema incorpora mecanismos de liquidación y un fondo de estabilidad para hacerlo cumplir, de modo que, incluso con LTV altos, el protocolo sigue siendo seguro y resiliente.

Para conocer en detalle cómo funcionan estos mecanismos de seguridad, consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).

### Ventajas del modelo de MUSD

**Liquidez generada desde la oferta**

A diferencia de los protocolos de préstamo tradicionales de dos lados, que necesitan un pool de dólares preexistentes y usan tasas de interés variables para equilibrar la oferta y la demanda, MUSD se acuña directamente a partir del colateral en Bitcoin. La liquidez crece de forma orgánica a medida que más usuarios depositan BTC: el sistema genera su propio suministro, por lo que siempre hay liquidez disponible para nuevos prestatarios.

**Tasas de préstamo fijas y bajas**

Como MUSD se acuña en lugar de tomarse prestado de un pool, no hay competencia por las tasas que encarezca los costos. El resultado: tasas fijas desde el 1%, garantizadas durante toda la vida de tu préstamo. Esto hace que MUSD sea mucho más barato que los mercados de préstamo convencionales, donde las tasas son variables y pueden dispararse de forma impredecible.

**Eficiencia de capital**

MUSD admite un ratio de colateralización mínimo de solo el 110%, lo que significa que los prestatarios pueden acceder hasta al 90% del valor de su Bitcoin. Para los titulares de Bitcoin, esta es la forma más eficiente en capital de obtener liquidez sin vender. Dicho esto, los ratios de colateral más altos ofrecen un mayor margen de seguridad: ten siempre en cuenta el perfil de riesgo de tu posición.

## MUSD frente a las finanzas tradicionales

Para los titulares de Bitcoin, el sistema financiero siempre ha implicado concesiones: comisiones altas, custodia opaca, tasas variables e intermediarios centralizados. MUSD lleva las ventajas de las finanzas onchain (transparencia, bajo costo y autocustodia) directamente a tu Bitcoin.

![MUSD frente a las finanzas tradicionales](/docs/images/musd/musd-vs-traditional.png)

Sin comisiones por transferencia bancaria, sin diferenciales de cambio de divisas, sin cargos mensuales de cuenta. Solo tu Bitcoin en una bóveda de contrato inteligente descentralizada, trabajando para ti.

## Comparación de MUSD con las stablecoins existentes

El mercado de las stablecoins es amplio y va desde las stablecoins respaldadas por fiat (USDT y USDC) hasta las stablecoins sintéticas (USDe) y otros CDP algorítmicos (Liquity, Sky). Aunque el crecimiento de estas stablecoins ha sido notable en los últimos años, sigue habiendo un hueco en el mercado para los bitcoiners.

MUSD busca abordar estos riesgos con su respaldo exclusivamente en Bitcoin.

**Stablecoins respaldadas por fiat**

Las stablecoins respaldadas por fiat, como USDT y USDC, representan más del 90% del mercado actual de stablecoins. No solo chocan frontalmente con la filosofía cripto, ya que están respaldadas por el dólar estadounidense, sino que además las reservas en dólares deben estar custodiadas de forma segura por una única entidad.

Tether, la entidad emisora de USDT (~\$150B de suministro), nunca ha publicado una auditoría de prueba de reservas. La empresa registró \$13B de beneficios en 2024.

Circle, una empresa estadounidense que emite USDC, tiene la capacidad de [incluir direcciones en listas negras a su discreción](https://www.circle.com/legal/usdc-risk-factors) y [paga a los exchanges para que tengan su activo](https://x.com/inkymaze/status/1907187020293980599?s=46). A medida que la economía estadounidense pasa a ser onchain, esto se convierte en un peligroso punto de centralización.

**Stablecoins sintéticas**

Las stablecoins sintéticas (por ejemplo, USDe) suelen depender de exchanges centralizados y de soluciones de custodia para mantener su valor. El riesgo de esta exposición quedó patente cuando [Bybit sufrió recientemente el mayor hackeo registrado](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Además, las stablecoins respaldadas sintéticamente por el rendimiento de un basis trade son impredecibles y no están probadas. Las tasas de financiación son variables y estos sistemas no se han puesto a prueba frente a diversas presiones externas del mercado.

**Monedas de tipo CDP como USDS**

Las stablecoins basadas en CDP suelen colateralizar sus posiciones con una cesta de tokens que incluye stablecoins respaldadas por fiat y diversas altcoins.

Aunque esta diversificación puede repartir el riesgo, también conlleva retos importantes. El colateral, a menudo compuesto por activos volátiles como tokens relacionados con ETH u otras stablecoins, puede reaccionar de forma impredecible en situaciones de tensión del mercado y, con frecuencia, es mucho más volátil que BTC. Esto puede comprometer la paridad de la stablecoin y complicar los procesos de redención y liquidación.
