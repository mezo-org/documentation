---
title: Avisos sobre las bóvedas
description: Avisos actuales de cierre y migración de las bóvedas de Mezo
topic: users
---

Esta página recoge los avisos actuales de migración y cierre de las bóvedas de Mezo Earn.

| Bóveda               | Estado                                                     | Qué tienes que hacer                       |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| **BTC Vault**        | En proceso de cierre. Los depósitos están cerrados.        | Retira tus fondos a más tardar el **28 de octubre de 2026** |
| **cbBTC Vault**      | Los depósitos están cerrados. La migración a la BTC Vault ha finalizado. | Retira los fondos que te queden en la cbBTC Vault |
| **Stablecoin Vault** | Los depósitos están pausados y la bóveda está en proceso de cierre | Inicia tu retiro a más tardar el **31 de julio de 2026** |

:::caution[Los retiros llevan tiempo]
Los retiros de la Stablecoin Vault no son instantáneos. Usan una cola de retiros que puede tardar aproximadamente 48 horas en procesarse.
:::

## Cierre de la BTC Vault

La BTC Vault (mbhBTC), operada con Mellow y Sense Capital, está en proceso de cierre. Los depósitos están cerrados. Retira tus fondos a más tardar el **28 de octubre de 2026**.

Los retiros pasan por una cola, así que empieza con tiempo. Debes solicitar tu retiro a más tardar el 28 de octubre; el procesamiento y el reclamo pueden realizarse después. Solicitar un retiro no devuelve tus fondos a tu billetera de inmediato.

### Cómo retirar de la BTC Vault

1. Abre la [BTC Vault](https://mezo.org/earn/vaults/0xE2232789D4cF5bb1ffaDA1a105Cc59B18d639318) y conecta la billetera que contiene tu posición.
2. Selecciona **Withdraw**, elige la cantidad y sigue las indicaciones de la transacción.
3. Espera a que se procese tu solicitud de retiro.
4. Vuelve a la página de la bóveda y reclama tus tokens cuando estén listos.

Si anteriormente migraste participaciones de la cbBTC Vault a la BTC Vault, estas instrucciones también se aplican a esa posición. Este cierre no incluye ninguna bóveda de reemplazo.

### Cómo encontrar tu posición

Una vez anunciado el cierre, la BTC Vault aparece en la lista de bóvedas solo para las billeteras que aún tienen una posición. Los titulares la siguen viendo después del 28 de octubre, incluso mientras un retiro está pendiente o listo para reclamarse. También puedes abrir la bóveda directamente con el enlace anterior.

### Ayuda después del 28 de octubre

Contacta con el [soporte de Mellow en Discord](https://discord.com/invite/mellow) si necesitas ayuda para retirar después del 28 de octubre.

## Retiros de la cbBTC Vault

Los depósitos en la cbBTC Vault están cerrados y la migración a la BTC Vault ha finalizado. Si todavía tienes participaciones de la cbBTC Vault (mbhcbBTC), retira los fondos que te queden en la cbBTC Vault. Los retiros siguen disponibles en la app.

Abre [Mezo Vaults](https://mezo.org/earn/vaults), conecta la billetera que contiene tu posición en la cbBTC Vault y selecciona **Withdraw** en la página de la cbBTC Vault.

## Cierre de la Stablecoin Vault

La Stablecoin Vault, operada por Lhava sobre el framework de bóvedas de Mellow, está en proceso de cierre. Los depósitos ya están pausados.

Si tienes una posición en la bóveda, inicia tu retiro a más tardar el **31 de julio de 2026**. La bóveda admite posiciones financiadas con mUSDC, mUSDT o MUSD y emite tokens de recibo **msvUSD**. Los retiros se procesan en mUSDC, independientemente de si tu posición se financió con mUSDC, mUSDT o MUSD.

### Cómo retirar

1. Ve a [Mezo Vaults](https://mezo.org/earn/vaults) y abre la **Stablecoin Vault**.
2. Selecciona **Withdraw** y sigue las indicaciones para tu posición.
3. Confirma la transacción y deja aproximadamente 48 horas para que se procese la cola de retiros.

Después del 31 de julio de 2026, la Stablecoin Vault dejará de aparecer en la app. Mellow gestionará los fondos restantes y procesará los retiros tardíos. Si se te pasa el plazo de retiro, [abre un ticket de soporte en el Discord de Mellow](https://discord.com/invite/mellow).

## Dónde poner tus stablecoins ahora

Antes de mover fondos, compara en la app el activo admitido, la estrategia, las condiciones de retiro y la tasa actual. Las tasas son variables y todas las opciones conllevan riesgo de contratos inteligentes y de estrategia.

| Opción                        | Cómo funciona                                                                                                       | Qué tener en cuenta                                                                                                                                                                                                | Visitar                                                                                                  |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **MUSD Savings Vault**        | Deposita MUSD y recibe sMUSD. El rendimiento procede de la actividad del protocolo MUSD y se acumula en el tipo de cambio de sMUSD. | Una opción de un solo activo, sin comisión de retiro ni bloqueo temporal. La tasa varía según la actividad del protocolo. Poner sMUSD en staking cambia la forma en que ganas tus recompensas.          | [Ver MUSD Savings Vault](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)        |
| **USDC Lending Vault**        | Deposita mUSDC en el mercado de préstamos Morpho BTC/mUSDC. Gana intereses de los prestatarios o haz staking para obtener emisiones de MEZO. | Revisa la tasa en tiempo real, la liquidez disponible para retirar y los riesgos del préstamo. Los retiros pueden estar limitados cuando la utilización es alta. Consulta la guía de [USDC Lending Vault](/docs/es/docs/users/mezo-earn/vaults/usdc-lending-vault). | [Ver USDC Lending Vault](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)        |
| **mUSDC/MUSD Stable CL Pool** | Aporta liquidez de mUSDC y MUSD dentro de un rango de precios seleccionado para ganar comisiones de trading y los incentivos que haya disponibles. | Requiere una gestión activa del rango. Una posición que queda fuera del rango deja de ganar comisiones, y los proveedores de liquidez se exponen a la pérdida impermanente y al riesgo de contratos inteligentes. | [Ver mUSDC/MUSD Stable CL Pool](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a) |

Descubre más formas de ganar en las páginas generales de [Mezo Pools](https://mezo.org/earn/pools) y [Mezo Vaults](https://mezo.org/earn/vaults).
