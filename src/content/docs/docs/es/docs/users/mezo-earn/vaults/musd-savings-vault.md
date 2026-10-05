---
title: MUSD Savings Vault
description: >-
  Obtén rendimiento respaldado por comisiones con MUSD a través de la bóveda de
  ahorro de Mezo
topic: users
---

MUSD Savings Vault es el producto de ahorro nativo de Mezo para los titulares de MUSD.

**Cómo funciona:**

- Deposita MUSD y recibe sMUSD, un token de recibo que representa tu participación en la bóveda
- El rendimiento se acumula en el tipo de cambio de sMUSD: con el tiempo, 1 sMUSD se puede redimir por más de 1 MUSD. Cuando retires, recibirás más MUSD de los que depositaste.
- El rendimiento procede de dos fuentes dentro del sistema MUSD: las comisiones del protocolo MUSD (intereses de préstamos, comisiones de originación y comisiones de refinanciación) y las comisiones en BTC de las operaciones de préstamo de MUSD, que se convierten a MUSD y se distribuyen semanalmente
- El protocolo distribuye ambos flujos a la bóveda con una frecuencia semanal
- La APR es variable según la actividad del protocolo: consulta la tasa actual en [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Reparto de comisiones

Las comisiones del protocolo MUSD se reparten al 50/50 entre dos destinos:

- **MUSD Savings Vault**: se distribuyen a los titulares de sMUSD o, en el caso del sMUSD en staking, se redirigen a los votantes de veBTC
- **Reembolso del [préstamo de arranque del protocolo](/docs/es/docs/users/borrow/architecture-and-terminology/#préstamo-de-arranque-del-protocolo)**

Este reparto puede modificarse mediante gobernanza a través del splitter de MUSD, con un mínimo del 50% destinado al reembolso del préstamo hasta que el préstamo de arranque se haya reembolsado por completo. Tras el reembolso, todas las comisiones van a la Savings Vault. Consulta [Comisiones de MUSD](/docs/es/docs/users/borrow/fees/) para ver todos los detalles.

---

## Qué es sMUSD

sMUSD es tu token de recibo de la MUSD Savings Vault de Mezo. Algunas cosas que debes saber:

- **El rendimiento está en el tipo de cambio, no en tu saldo.** Tu saldo de sMUSD no cambia después de depositar, pero cada sMUSD se puede redimir por más MUSD con el tiempo, a medida que la bóveda acumula comisiones. Verás la diferencia cuando retires.
- **El rendimiento se distribuye semanalmente.** El protocolo distribuye a la bóveda las comisiones acumuladas cada semana. El tipo de cambio sMUSD/MUSD se actualiza con cada distribución.
- **sMUSD es transferible.** Puedes enviar o conservar sMUSD como cualquier otro token. Quien lo tenga en el momento del retiro redime el rendimiento acumulado.
- **Si pones sMUSD en staking en el gauge, tu rendimiento se redirige.** El sMUSD en staking gana emisiones de MEZO en lugar de ingresos directos por comisiones. Los ingresos por comisiones que te habrían correspondido se redirigen a los votantes de veBTC que votaron por el gauge de MUSD Savings. Al retirar el staking, vuelves a acumular rendimiento directo.

---

## Detalles de la bóveda

| Parámetro | Valor |
|-----------|-------|
| Token de depósito | MUSD |
| Token de recibo | sMUSD |
| Estratega | Mezo |
| Comisión de retiro | Ninguna |
| Bloqueo temporal de retiro | 0h |
| APR actual | Variable: consulta [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## Staking de sMUSD en el gauge

Si quieres, puedes poner en staking tu token de recibo sMUSD en el gauge de MUSD Savings para ganar emisiones del token MEZO.

**La contrapartida:**

- **sMUSD sin staking:** ganas directamente tu parte proporcional del rendimiento de la bóveda y de los ingresos por intereses/comisiones de MUSD
- **sMUSD en staking:** tu parte de los ingresos por intereses y comisiones se redirige a los votantes de veBTC del gauge. A cambio, ganas emisiones según la cantidad de votos que reciba el gauge

Esto replica cómo funciona el staking de LP en los pools de liquidez del DEX nativo de Mezo: quienes hacen staking renuncian a los ingresos por comisiones a cambio de emisiones, mientras que los votantes ganan las comisiones redirigidas.

El gauge de MUSD Savings Rate compite por los votos junto con los gauges de los pools de LP. En conjunto se denominan "gauges de staking": un voto asignado al gauge de la tasa de ahorro no puede asignarse también a un gauge de LP.

Ahora que las emisiones de MEZO están activas, poner sMUSD en staking en el gauge te permite ganar MEZO además de tu posición base. El gauge de MUSD Savings compite por los votos de veBTC junto con los gauges de los pools de LP: cuantos más votos se dirijan al gauge de ahorro, más emisiones de MEZO se canalizan hacia quienes hacen staking. Los votantes de veBTC que apoyan el gauge ganan las comisiones de MUSD que redirigen quienes hacen staking. La APR actual del gauge para quienes hacen staking y para los votantes se muestra en la página Vote, en [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Riesgos

### Riesgo de estrategia
Cada bóveda despliega los activos de forma diferente. Comprende la estrategia subyacente antes de depositar: algunas estrategias conllevan más riesgo que otras.

### Riesgo de contratos inteligentes
Las bóvedas interactúan con varios contratos inteligentes. Aunque las bóvedas de Mezo están auditadas, todos los contratos inteligentes conllevan un riesgo inherente. Deposita solo cantidades con las que te sientas cómodo.
