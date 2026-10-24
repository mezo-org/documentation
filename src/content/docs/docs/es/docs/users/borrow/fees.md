---
title: Comisiones y costos de MUSD
description: >-
  Consulta todas las estructuras de comisiones y los costos que implica usar
  MUSD en Mezo.
topic: users
---

## Resumen de comisiones

| Comisión | Importe | Cuándo se cobra |
| --- | --- | --- |
| **Comisión de emisión** | 0.1% del MUSD prestado | Al abrir o ampliar un préstamo |
| **Interés** | 1–5% APR (fijo desde la apertura) | Se acumula sobre la deuda pendiente |
| **Comisión de redención** | 0.75% | Al cambiar MUSD por colateral en BTC |
| **Comisión de refinanciación** | 0.02% de la deuda | Al refinanciar un préstamo a una nueva tasa |
| **Depósito de gas** | 200 MUSD (fijo) | Al abrir un préstamo (se devuelve al cerrarlo) |

## Distribución de las comisiones

:::note
Las comisiones se reparten entre dos destinos: **(1)** el reembolso del préstamo de arranque del protocolo y **(2)** el MUSD Savings Vault. El reparto inicial es 50/50 y puede modificarse mediante gobernanza a través del splitter de MUSD. Al menos el 50% de las comisiones debe destinarse al reembolso del préstamo hasta que el préstamo de arranque se haya reembolsado por completo. Tras el reembolso, todas las comisiones van al Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Comisiones por intereses (1–5% APR)

El interés de los préstamos en [MUSD](https://mezo.org/feature/musd) es fijo durante toda la vida del préstamo. Cuando se amplía el crédito, el nuevo crédito se añade a la tasa de interés vigente.

En el lanzamiento, las comisiones por intereses financian el fondo de estabilidad de la tesorería de MUSD, que cubre las liquidaciones y la deuda incobrable.

## Comisiones de redención (0.75%)

Comisión del 0.75% que se retiene del BTC que recibe un redentor cuando cambia MUSD por colateral durante una [redención](/docs/es/docs/users/borrow/liquidation-mechanics#redenciones-%EF%B8%8F). La paga el redentor, no el prestatario cuyo préstamo se redime.

En el lanzamiento, las comisiones de redención financian el fondo de estabilidad de la tesorería de MUSD, que cubre las liquidaciones y la deuda incobrable.

## Comisión de emisión (0.1%)

La comisión de emisión se paga cuando se abre un préstamo en MUSD o cuando el titular de un préstamo pide prestado más MUSD. La comisión es del 0.1% de la cantidad prestada y se paga en MUSD. Un préstamo de \$10,000 MUSD pagaría una comisión de emisión de \$10 en MUSD. Si amplías tu préstamo, pagas la comisión de emisión sobre el MUSD que pides prestado de nuevo.

## Comisión de refinanciación (0.02% de la deuda)

La comisión de refinanciación se aplica cuando el titular de un préstamo en MUSD solicita actualizar la tasa de interés del préstamo. El prestatario puede querer refinanciar su préstamo si la tasa de interés que se ofrece para los préstamos nuevos es mejor que la tasa de interés fija de su préstamo. La refinanciación permite actualizar la tasa del préstamo a la nueva tasa. Cada solicitud de refinanciación conlleva una comisión de refinanciación del 0.02% de la deuda, que se paga en MUSD.

## Depósito de gas (comisión fija de `200 MUSD`)

Un depósito de 200 MUSD garantiza que las liquidaciones sean viables. Se devuelve cuando se cierra el préstamo. El depósito de gas se acuña como deuda adicional en el préstamo y se mantiene en custodia hasta que el préstamo se cierra. Esta deuda cuenta para el cálculo del ratio de colateralización.

## Otras comisiones de gas y de transacción

Los usuarios que interactúan con el sistema MUSD tienen que pagar comisiones de transacción por cada transacción que se transmite a la red Mezo. Esto incluye acciones como acuñar, redimir, hacer staking y reclamar.

## Riesgos que debes conocer

:::caution
Pedir prestado MUSD conlleva riesgos. Entenderlos te ayuda a proteger tu posición.

**Riesgo de redención**: para mantener la paridad de MUSD, el protocolo puede redimir MUSD contra el colateral, empezando por los préstamos que tienen el **ratio de colateral más bajo** (pero que siguen por encima del umbral de liquidación del 110%). Si tu préstamo se redime, pierdes la exposición a las subidas del precio de BTC y podrías tener implicaciones fiscales. Para reducir este riesgo, mantén tu ratio de colateral por encima del de otros prestatarios.

**Riesgo de liquidación**: si el ratio de colateral de tu préstamo cae **por debajo del 110%**, tu posición puede liquidarse. Pierdes tu colateral y te quedas con el MUSD prestado. Para reducir este riesgo, vigila tu préstamo con regularidad y añade colateral cuando sea necesario. Para más detalles, consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).
:::
