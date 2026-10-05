---
title: Enclaves
description: Cómo funcionan los depósitos institucionales de BTC en Mezo mediante enclaves
topic: users
---

Mezo Enclaves es una vía de depósito institucional que permite a las instituciones con requisitos regulatorios de custodia desplegar BTC en Mezo sin usar el puente estándar.

## Cómo funcionan los enclaves

Es posible que las instituciones que operan bajo regulaciones de custodia no puedan depositar BTC a través del puente estándar de Mezo. Los enclaves resuelven esto permitiendo que el BTC esté representado en Mezo mientras el Bitcoin subyacente permanece en acuerdos de custodia que cumplen los requisitos regulatorios.

Puntos clave:

- Cada enclave se añade individualmente a la lista de permitidos mediante la multisig de gobernanza de Mezo
- Los depósitos en enclaves están respaldados por acuerdos legales asociados que definen las cantidades que se transfieren mediante el puente y las limitaciones de uso
- Todos los depósitos en enclaves siguen respaldados por UTXO reales de Bitcoin en la cadena de Bitcoin

## Verificar el respaldo en BTC de los enclaves

Cada depósito en un enclave está respaldado por UTXO en la blockchain de Bitcoin. Estos UTXO se registran en la transacción de depósito del puente tripartito y se mantienen en el estado onchain, lo que significa que el respaldo en BTC subyacente es transparente y verificable.

Los desarrolladores pueden consultar los datos de UTXO de los enclaves con la función `getTripartyUtxos` para verificar el Bitcoin que respalda cualquier posición de un enclave. Consulta la [documentación del puente para desarrolladores](/docs/es/docs/developers/bridge/mezo-bridge) para ver los detalles técnicos.
