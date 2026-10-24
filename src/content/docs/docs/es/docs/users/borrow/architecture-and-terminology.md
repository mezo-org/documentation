---
title: Arquitectura y terminología de MUSD
description: >-
  Análisis detallado del diseño del sistema y la terminología principal de MUSD
  en Mezo.
topic: users
---

El sistema [MUSD](https://mezo.org/feature/musd) consta de cuatro grupos principales de contratos:

| Grupo de contratos | Propósito |
| --- | --- |
| **Token (MUSD)** | La stablecoin en el centro del sistema, diseñada para mantener la paridad con el USD |
| **Protocolo principal** | Se encarga de abrir y cerrar posiciones, gestionar el colateral y mantener la estabilidad del sistema |
| **Pools de activos** | Gestiona los distintos pools de colateral y de liquidez del sistema |
| **Contratos auxiliares** | Proporciona servicios esenciales como feeds de precios, ordenación de posiciones y gestión del valor controlado por el protocolo |

## Custodia y gestión del colateral

Las posiciones de MUSD se pueden rastrear onchain, y el colateral subyacente en Bitcoin se gestiona de forma segura con la sólida infraestructura de custodia descentralizada de tBTC.

Puedes ver en tiempo real todo el BTC que respalda MUSD en el explorador de bloques de Mezo:

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

tBTC, creado por el mismo equipo que está detrás de Mezo, [Thesis*](https://thesis.co/?ref=blog.mezo.org), funciona con [Threshold Network](https://threshold.network/?ref=blog.mezo.org). Threshold es un conjunto descentralizado de firmantes que opera el puente de Bitcoin de Threshold desde principios de 2020 y que ha transferido con éxito más de 28k Bitcoin. Las pruebas de reservas de tBTC han estado activas durante toda la vida del puente y se pueden consultar en [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

Para un análisis en profundidad de tBTC, puedes consultar el [informe de investigación de Bitcoin Layers](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), que compara tBTC con otros wrappers populares como WBTC y cbBTC. El [equipo de LlamaRisk](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) también realizó un análisis de riesgos adicional antes de que tBTC se listara como colateral en Aave.

### Custodia en los contratos

Un usuario abre una posición llamando a BorrowerOperations.openTrove, aportando BTC y solicitando MUSD. El BTC se envía al ActivePool, donde permanece hasta que se produce una de las siguientes acciones:

* El usuario retira (`BorrowerOperations.withdrawColl`)
* Salda su deuda (`BorrowerOperations.closeTrove`)
* Se redime colateral (`TroveManager.redeemCollateral`)
* Se liquida la posición (`TroveManager.liquidate`)

Las posiciones liquidadas las paga el StabilityPool, en cuyo caso el BTC se transfiere al Stability Pool, o bien la deuda y el colateral se absorben y se redistribuyen entre otros usuarios, en cuyo caso el BTC se transfiere al DefaultPool, desde donde se distribuirá después.

## Préstamos con interés fijo

* Tasa de interés global: se aplica una única tasa de interés global a todos los préstamos que se abran a partir de entonces.
* Mantenimiento de las tasas de interés: una vez abierto un préstamo, este conserva la tasa de interés con la que se creó, aunque la tasa global cambie. Solo el usuario puede actualizar la tasa de interés de un préstamo, mediante la función de refinanciación.

:::note
Las tasas de interés son **fijas durante toda la vida del préstamo**. La tasa que fijas al crear el préstamo nunca cambia, salvo que decidas refinanciar.
:::
* Función de refinanciación: la función de refinanciación permite a los usuarios ajustar la deuda de su préstamo a la nueva tasa de interés global. Este proceso conlleva una comisión de refinanciación, que es un porcentaje configurable de la comisión de emisión. La refinanciación ofrece a los usuarios la ventaja de no tener que mover el colateral y de pagar comisiones más bajas que si cerraran el préstamo y lo volvieran a abrir con la tasa actualizada. También puedes refinanciar para ampliar tu línea de crédito si el BTC se ha revalorizado.
* Interés simple: el interés se calcula con un modelo de interés simple, no compuesto.
* Pagos de intereses: los pagos de intereses se dirigen al PCV (Protocol Controlled Value). La asignación de estos pagos está sujeta a gobernanza y puede repartirse entre un destinatario arbitrario y el reembolso del préstamo de arranque.

## Gobernanza adicional

* Control de la gobernanza: la tasa de interés y otros parámetros críticos están controlados por la gobernanza. Para cambiar estos parámetros se necesita una propuesta de gobernanza y un plazo mínimo antes de que puedan aplicarse.
* Propuestas de tasas de interés: la gobernanza puede proponer nuevas tasas de interés. Estas propuestas deben aprobarse tras un plazo mínimo para garantizar la estabilidad y la previsibilidad.

## Protocol Controlled Value (PCV)

El contrato Protocol Controlled Value (PCV) es un componente clave del sistema, encargado de gestionar las comisiones recaudadas por los préstamos y las refinanciaciones. A continuación se describe cómo funciona el PCV:

* Recaudación de comisiones: las comisiones de préstamo y las de refinanciación se dirigen al contrato PCV.
* Asignación de comisiones: las comisiones que recauda el PCV se destinan a pagar el préstamo de arranque o a enviar fondos al sistema de gauges.
* Reparto sujeto a gobernanza: la asignación de las comisiones entre el pago de la deuda y el sistema de gauges puede modificarse mediante gobernanza. Sin embargo, hasta que el préstamo de arranque se haya reembolsado por completo, no se puede enviar más del 50% de las comisiones al sistema de gauges.
* Tras el reembolso de la deuda: una vez reembolsado por completo el préstamo de arranque, las comisiones se acumulan como liquidez propiedad del protocolo (Protocol-Owned Liquidity) en el StabilityPool.

### Préstamo de arranque del protocolo

El Stability Pool se pone en marcha con un préstamo del protocolo respaldado por las comisiones y los intereses futuros. El MUSD acuñado con este préstamo del protocolo solo puede usarse en el Stability Pool. Mientras el préstamo del protocolo esté vigente, al menos el 50% de los intereses y comisiones que cobra el protocolo se destina a pagarlo.

## Definiciones

- **Préstamo:** posición de deuda colateralizada, vinculada a una única dirección de Ethereum. En protocolos similares también se denomina "CDP".

- **Colateral activo:** cantidad de colateral registrada en el struct de un préstamo

- **Principal activo:** cantidad de deuda en MUSD registrada en el struct de un préstamo, sin incluir los intereses

- **Interés activo:** cantidad de intereses en MUSD registrada en el struct de un préstamo

- **Deuda activa:** cantidad de deuda en MUSD registrada en el struct de un préstamo (principal activo más interés activo)

- **Colateral total:** suma del colateral activo de un préstamo más sus recompensas de colateral pendientes acumuladas por las distribuciones

- **Deuda total:** suma de la deuda activa de un préstamo más sus recompensas de deuda pendientes acumuladas por las distribuciones

- **Ratio de colateralización individual (ICR):** el ICR de un préstamo es la relación entre el valor en dólares de su colateral total, al precio actual colateral:USD, y su deuda total

- **Ratio de colateralización nominal (ICR nominal, NICR):** el ICR nominal de un préstamo es su colateral total (expresado en colateral) multiplicado por 100e18 y dividido entre su deuda total.

- **Colateral total del sistema:** suma del colateral del ActivePool y del DefaultPool

- **Deuda total del sistema:** suma de la deuda del ActivePool y del DefaultPool

- **Ratio de colateralización total (TCR):** relación entre el valor en dólares del colateral total del sistema, al precio actual colateral:USD, y la deuda total del sistema

- **Ratio de colateralización crítico (CCR):** 150%. Cuando el TCR está por debajo del CCR, el sistema entra en Recovery Mode.

- **Redención:** acción de cambiar tokens MUSD con el sistema a cambio de un valor equivalente en colateral. Cualquier cuenta con saldo de tokens MUSD puede redimirlos, sea o no prestataria.

- **Liquidación:** acción de cerrar de forma forzosa un préstamo con colateral insuficiente y redistribuir su colateral y su deuda. Cuando el Stability Pool es lo bastante grande, la deuda liquidada se compensa con el Stability Pool y el colateral se distribuye entre los depositantes. Si la deuda liquidada no puede compensarse con el Pool, el sistema redistribuye el colateral y la deuda liquidados directamente entre los préstamos activos con un ratio de colateralización >110%. La liquidación no requiere permisos y está disponible públicamente: cualquiera puede liquidar un préstamo con colateral insuficiente o liquidar préstamos por lotes.

- **Excedente de colateral:** el excedente de colateral es el colateral sobrante de los prestatarios que pueden volver a reclamar si su préstamo se ha redimido por completo.

- **Compensación (offset):** cancelación de la deuda liquidada con el MUSD del Stability Pool y asignación del colateral liquidado a los depositantes del Stability Pool, en proporción a su depósito.

- **Compensación de gas:** reembolso en MUSD y en colateral que se paga automáticamente a quien llama a una función de liquidación, con el fin de garantizar que las liquidaciones sean rentables en momentos de tensión del mercado. Los 200 MUSD se fijaron en función de los precios del gas y los tiempos de bloque de Ethereum. Está diseñado para que los liquidadores no se vean disuadidos por unos costos de gas potencialmente altos.
