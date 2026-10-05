---
title: Ditto MUSD Savings Vault
description: >-
  Deposita MUSD en Mezo y recibe dMUSD para acceder a una bóveda cross-chain
  automatizada con una asignación inicial a Spark Savings
topic: users
---

Ditto MUSD Savings Vault ofrece a los titulares de MUSD otra forma de poner a trabajar sus activos a través de Mezo Earn. Deposita MUSD en Mezo y recibe **dMUSD**, un token de recibo que representa tu posición en la bóveda. Ditto Network se encarga de los swaps, las transferencias mediante puente y la asignación que hay detrás de la bóveda, con una asignación inicial a **Spark Savings en Ethereum**.

Tú mantienes una posición en la bóveda en Mezo mientras Ditto gestiona los pasos necesarios para acceder al rendimiento subyacente en otra cadena.

Explora [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## Cómo funciona

1. **Deposita MUSD en Mezo.** Recibes dMUSD, que representa tu posición en la bóveda.
2. **Ditto asigna los activos.** Los operadores se encargan de los swaps y de la transferencia mediante puente a Ethereum, y luego asignan los activos a Spark Savings.
3. **La estrategia subyacente genera rendimiento.** Tus dMUSD representan un derecho sobre los activos de la bóveda. Los rendimientos dependen de la estrategia subyacente y son variables.
4. **Solicita una redención para salir.** Ditto revierte el proceso y devuelve MUSD en Mezo una vez procesado el retiro.

### Cómo funciona la automatización

Varios operadores verifican de forma independiente las acciones propuestas para la bóveda antes de firmarlas. La ejecución requiere un número mínimo de aprobaciones de operadores, y los contratos inteligentes aplican comprobaciones adicionales onchain. La valoración de la bóveda (valor liquidativo neto, o NAV) también se publica onchain a través del proceso firmado.

Estas comprobaciones rigen la ejecución automatizada; no eliminan el riesgo de contratos inteligentes, de puente, de operadores ni de estrategia.

## Detalles de la bóveda

| Parámetro          | Valor                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Activo de depósito | MUSD en Mezo                                                                                                                                                                   |
| Token de recibo    | dMUSD                                                                                                                                                                          |
| Operador de la bóveda | Ditto Network                                                                                                                                                               |
| Asignación inicial | Spark Savings en Ethereum                                                                                                                                                      |
| Activo de redención | MUSD en Mezo                                                                                                                                                                  |
| Retiros            | Asíncronos: deja tiempo para que se procesen                                                                                                                                   |
| APY actual         | Aprox. 3.60% al 29 de septiembre de 2026, en línea con Spark Savings; es variable, consulta la [página de la bóveda](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

El rendimiento pasado no refleja el rendimiento actual ni garantiza rendimientos futuros. Revisa la tasa actual, las comisiones que haya, las condiciones de retiro y los riesgos en la app antes de depositar.

## Cómo depositar

1. Abre [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) y conecta tu billetera en Mezo.
2. Revisa la estrategia, la tasa actual y las condiciones de retiro.
3. Introduce la cantidad de MUSD que quieres depositar y sigue las indicaciones de aprobación y depósito de la app.
4. Confirma las transacciones necesarias en tu billetera. Tus tokens de recibo dMUSD representan tu posición en la bóveda.

## Retiros

Solicita una redención desde la página de la bóveda y sigue las indicaciones para tu posición de dMUSD. Ditto deshace la asignación subyacente, realiza las transferencias mediante puente y los swaps necesarios, y devuelve MUSD en Mezo.

**Los retiros son asíncronos.** Enviar una solicitud de redención no significa que el MUSD esté disponible de inmediato en tu billetera. Deja tiempo para que se procesen la estrategia subyacente y las operaciones cross-chain, y sigue los pasos de finalización que se muestren en la app. El tiempo de procesamiento puede variar; no des por hecho un plazo de retiro fijo.

Si necesitas ayuda con una redención pendiente, contacta con el [soporte de Mezo](/docs/es/docs/users/resources/support) e indica la dirección de tu billetera, el hash de la transacción y la hora de tu solicitud.

## En qué se diferencia dMUSD de sMUSD

La bóveda de Ditto es un producto distinto de la bóveda nativa de Mezo, [MUSD Savings Vault](/docs/es/docs/users/mezo-earn/vaults/musd-savings-vault):

- **dMUSD:** una posición en la bóveda operada por Ditto, asignada inicialmente a Spark Savings en Ethereum. Las redenciones devuelven MUSD en Mezo mediante un proceso asíncrono.
- **sMUSD:** una posición en la bóveda de ahorro nativa de Mezo, que obtiene rendimiento de la actividad del protocolo MUSD.

Los tokens de recibo representan bóvedas diferentes. Revisa las condiciones propias de cada bóveda antes de depositar o redimir.

## Riesgos

- **Riesgo de contratos inteligentes:** un error o un exploit en la bóveda, en los contratos de automatización o en los protocolos subyacentes podría provocar la pérdida de fondos.
- **Riesgo cross-chain:** los swaps y las transferencias mediante puente añaden dependencias. Los fallos del puente, los retrasos de la red o una ejecución desfavorable pueden afectar a la posición y al proceso de redención.
- **Riesgo de estrategia y de stablecoins:** los rendimientos dependen de Spark Savings y de los activos que usa la estrategia. Las tasas pueden cambiar y las stablecoins pueden perder su paridad.
- **Riesgo de operadores:** el procesamiento depende de que haya suficientes aprobaciones de operadores y de que la ejecución se complete con éxito. La inactividad o los fallos de los operadores pueden retrasar las acciones de la bóveda.
- **Riesgo de retiro:** los activos deben liberarse de la asignación subyacente y devolverse a Mezo. Es posible que no puedas acceder a tu MUSD inmediatamente después de solicitar la redención.

## Enlaces y recursos

- [Ditto MUSD Savings Vault en Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Documentación de Ditto Network](https://docs.dittonetwork.io/)
- [Documentación de Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Soporte de Mezo](/docs/es/docs/users/resources/support)
