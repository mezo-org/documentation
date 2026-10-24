---
title: USDC Lending Vault
description: >-
  Aporta mUSDC al mercado de préstamos de Morpho respaldado por BTC en Mezo y
  gana intereses de los prestatarios o emisiones de MEZO
topic: users
---

USDC Lending Vault te da exposición directa a un mercado transparente de crédito respaldado por BTC. Deposita mUSDC y tu capital se presta a prestatarios que aportan BTC como colateral. Los intereses que pagan los prestatarios son la fuente del rendimiento de los depositantes.

Internamente, los depósitos van a una Morpho Vault V2 curada (Morpho BTC-mUSDC Vault), que aporta fondos al mercado Morpho Blue BTC / mUSDC en tu nombre. No interactúas directamente con Morpho: tienes un token de participación cuyo valor crece a medida que se acumulan los intereses.

Visita la bóveda en [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Para pedir prestado mUSDC con tu BTC como colateral, consulta [Cómo pedir prestado mUSDC](/docs/es/docs/users/borrow/how-to-borrow-musdc).

**Cómo funciona:**

- Deposita mUSDC y recibe `morphoBTC-mUSDC`, un token de participación que representa tu derecho sobre la bóveda
- El rendimiento se acumula en el precio de la participación: con el tiempo, la misma cantidad de participaciones se puede redimir por más mUSDC
- Los préstamos están sobrecolateralizados con BTC (LTV de liquidación del 86%). Los activos depositados no se rehipotecan
- No hay depósito mínimo ni comisión del protocolo para entrar o salir
- La APR es variable según la demanda de los prestatarios: consulta la tasa actual en [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Qué son tus participaciones

`morphoBTC-mUSDC` es el token de participación de tu bóveda. Algunas cosas que debes saber:

- **El rendimiento está en el tipo de cambio, no en tu saldo.** Tu saldo de participaciones no cambia después de depositar, pero cada participación se puede redimir por más mUSDC a medida que los prestatarios pagan intereses. Verás la diferencia cuando retires.
- **Las participaciones no equivalen 1:1 a mUSDC.** Si la bóveda ya ha generado intereses, depositar 100 mUSDC te da menos de 100 participaciones, y cada participación vale más de 1 mUSDC.
- **Si haces staking para obtener emisiones, tus intereses se redirigen.** Las participaciones en staking ganan MEZO en lugar de los intereses de los prestatarios. Los intereses que te habrían correspondido se redirigen a los votantes de veBTC del gauge de la Lending Vault.

---

## Detalles de la bóveda

| Parámetro | Valor |
|-----------|-------|
| Token de depósito | mUSDC |
| Token de participación | `morphoBTC-mUSDC` |
| Mercado subyacente | Morpho Blue BTC / mUSDC |
| LTV de liquidación | 86% |
| Curador | Gobernanza de Mezo |
| Comisión de retiro | Ninguna |
| APR actual | Variable: consulta [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Dos formas de ganar

Como en otros productos de Earn en Mezo, tú eliges cómo se remunera cada participación:

- **Conservar para obtener intereses**: mantén `morphoBTC-mUSDC` en tu billetera. Tus participaciones se revalorizan a medida que los prestatarios pagan intereses.
- **Hacer staking para obtener emisiones de MEZO**: pon tus participaciones en staking en el gauge de la Lending Vault. Ganas MEZO; los intereses que esas participaciones habrían generado van, en cambio, a los votantes.

Una misma participación no puede ganar ambas cosas a la vez, pero puedes dividir tus fondos: poner una parte en staking para obtener emisiones y conservar el resto para obtener intereses. El depósito y el staking son pasos separados en la app: primero deposita para recibir participaciones y, después, si quieres, haz staking.

**Para salir de una posición en staking:** retira el staking, vuelve a convertirla en participaciones de la bóveda y, por último, retira a mUSDC. Retirar el staking no hace que pierdas el MEZO que puedes reclamar.

---

## Retiros

Los retiros te devuelven tus mUSDC (más los intereses acumulados si los estabas conservando). Como tus mUSDC se prestan a prestatarios, la bóveda solo puede pagar lo que está disponible en ese momento, es decir, lo que no está prestado.

- La app muestra una cantidad **Available to withdraw** (disponible para retirar) basada en la liquidez actual de la bóveda
- Cuando la utilización es alta, un retiro grande puede completarse solo en parte o quedar bloqueado temporalmente hasta que los prestatarios reembolsen o llegue nueva oferta de fondos
- Las participaciones en staking deben retirarse del staking antes de poder retirarlas

Este es el comportamiento normal de un mercado de préstamos, no un fallo de la bóveda.

---

## Riesgos

### Riesgo de contratos inteligentes

Los fondos pasan por el adaptador de la Lending Vault, Morpho Vault V2 y el mercado Morpho Blue. Un error o un exploit en cualquiera de ellos podría provocar la pérdida de fondos.

### Riesgo de iliquidez

Cuando la utilización por parte de los prestatarios es alta, es posible que no puedas retirar todos tus mUSDC cuando lo solicites. Aporta solo fondos que puedas permitirte tener bloqueados temporalmente.

### Riesgo del mercado de préstamos

Los prestatarios se liquidan con un LTV del 86%. Ante una caída fuerte y rápida de BTC, puede generarse deuda incobrable, que se reparte entre los proveedores de fondos mediante una bajada del precio de la participación: no hay fondo de seguro. Tu posición también está denominada en mUSDC, por lo que una pérdida de paridad afecta a tus fondos.

### Riesgo del curador

La gobernanza de Mezo decide qué mercados financia la bóveda y cuáles son los límites de aportación. Los cambios del curador en Morpho Vault V2 están sujetos a un timelock.

---

## Contratos

| Contrato | Dirección |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Adaptador de la Lending Vault | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Gauge de la bóveda | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Para obtener detalles del mercado Morpho Blue, consulta la [documentación de Morpho](https://docs.morpho.org/).
