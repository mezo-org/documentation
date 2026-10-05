---
title: Desplegar incentivos
description: >-
  Cómo crear gauges de votación para activos de pools incluidos en la lista de
  permitidos en Mezo Earn.
topic: developers
---

Todos los activos de Mezo (BTC, MEZO y los tokens de contratos de mainnet) se han incluido en la lista de permitidos del contrato PoolsVoter. Ahora cualquier persona puede crear gauges de votación para pools cuyos dos activos estén en la lista de permitidos.

Para ver la lista completa de direcciones de tokens incluidos en la lista de permitidos que se pueden agregar como incentivos en los gauges, consulta la [referencia de contratos](/docs/es/docs/users/resources/contracts-reference#direcciones-de-contratos-del-portal).

## Crear un gauge de pool

1. Ve al [contrato PoolsVoter en el Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) y conecta tu billetera.

2. Haz clic en la pestaña **Contract**, luego selecciona **Write proxy** y elige `createPoolGauge`.

3. Para el parámetro `_poolFactory`, usa una de las siguientes direcciones:
   - **Pools básicos:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **Pools CL:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Introduce la dirección del pool en `_pool`.

5. Ejecuta la transacción. Si el pool aparece en la descripción general de pools, también debería empezar a aparecer en la interfaz de votación.
