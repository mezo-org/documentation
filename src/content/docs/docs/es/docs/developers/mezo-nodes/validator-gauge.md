---
title: Gauge de validador
description: >-
  Guía para validadores sobre cómo gestionar los beneficiarios de las
  recompensas, votar en los gauges de validadores y reclamar recompensas en
  MEZO.
topic: developers
---

Los validadores pueden ganar emisiones de MEZO cada semana, pero solo si su gauge de validador recibe votos durante cada época. Si su gauge no recibe votos, un validador no recibirá ninguna emisión. Esta guía explica cómo gestionar los beneficiarios de las recompensas, votar en tu gauge de validador y reclamar recompensas.

## Descripción general

Cada validador tiene un gauge asociado en el [contrato ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). Las recompensas se reclaman a través del contrato ValidatorsVoter indicando la dirección del gauge del validador.

Cada gauge tiene una única dirección beneficiaria autorizada para reclamar las recompensas. De forma predeterminada, la beneficiaria es la dirección de operador del validador registrada en el [contrato de Proof of Authority (PoA)](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Calendario de liberación de recompensas]
Las recompensas asignadas a una época no están disponibles de inmediato para reclamarlas: se liberan gradualmente a lo largo de la época. Por ejemplo, si se asignan recompensas a un gauge al comienzo de la época N, el 100% de las recompensas de la época N estará disponible al final de la época.
:::

## Cambiar el beneficiario de las recompensas

Los validadores pueden designar otra dirección para recibir las recompensas en MEZO. Esto resulta útil para separar las funciones operativas de las de tesorería.

Para cambiar el beneficiario de las recompensas:

1. **Conecta la billetera de tu dirección de operador**
   Usa la billetera asociada a la dirección de operador de tu validador.

2. **Determina la dirección de tu gauge**
   Llama a `ValidatorsVoter.validatorToGauge()` pasando tu dirección de operador como parámetro.

3. **Cambia el beneficiario**
   Llama a `Gauge.switchRewardsBeneficiary()` pasando la nueva dirección beneficiaria como parámetro.
   - Contrato: tu contrato Gauge específico (obtenido en el paso 2)
   - Método: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Reclama desde el nuevo beneficiario**
   Después de cambiar el beneficiario, todas las reclamaciones futuras deben ejecutarse con la billetera del nuevo beneficiario.

:::caution[Buena práctica]
Se recomienda reclamar todas las recompensas disponibles con el beneficiario actual antes de cambiar a uno nuevo. Si cambias de beneficiario con recompensas sin reclamar, esas recompensas seguirán asociadas a la dirección del beneficiario anterior y deberán reclamarse por separado.
:::

## Votar en tu gauge de validador

Votar es imprescindible para ganar emisiones de MEZO: un gauge de validador que no recibe votos en una época no recibirá ninguna recompensa por esa época. Los validadores pueden votar en su propio gauge para dirigir las emisiones de MEZO. Los votos en gauges de validadores son **independientes** de los demás votos en gauges de Mezo Earn. Por ejemplo, si ya votaste con el 100% de tu poder de voto en un gauge de pool, aún puedes votar con el 100% de tu poder de voto en tu gauge de validador (o en el gauge de otro validador).

veBTC es el activo principal que se usa para votar. veMEZO se puede usar para aplicar un boost a tu poder de voto. Una vez emitido, un voto se traslada automáticamente a las épocas siguientes, a menos que se restablezca explícitamente.

:::note[Hacer poke de tu posición]
Es posible que necesites hacer poke de tu posición antes de votar para asegurarte de que esté actualizada. Hacer poke de un voto existente también es útil si tu poder de voto de veBTC ha aumentado (por ejemplo, por una recarga), ya que actualiza tu peso de voto para reflejar el nuevo poder. Consulta la [documentación sobre poke](/docs/es/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) para obtener más detalles.
:::

### Cómo votar

1. **Identifica tu gauge de validador**
   Llama a la función `validatorToGauge` en el [contrato ValidatorsVoter (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) pasando la dirección de tu validador como parámetro.

2. **Emite tu voto**
   Llama a la función `vote` en el [contrato ValidatorsVoter (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). El parámetro `tokenId` es el ID de tu NFT de veBTC. Si solo votas en tu propio gauge de validador, puedes establecer el peso en `100` (que representa el 100% de tu poder de voto).

### Incentivar tu gauge

Los validadores pueden incentivar su gauge de boost de veBTC en plataformas como [Matchbox](https://matchbox.markets/) para atraer votos de veMEZO que aumenten el poder de voto de su veBTC.
Ese poder de veBTC potenciado se puede usar después para dirigir más votos al gauge del validador y aumentar así las emisiones de MEZO.

Mezo Earn también incluye un mecanismo de incentivos independiente para gauges de validadores, pero ese flujo concreto no está disponible actualmente en Matchbox.

## Reclamar recompensas

Para reclamar tus recompensas en MEZO, sigue estos pasos:

1. **Conecta la billetera de tu dirección de operador**
   Usa la billetera asociada a la dirección de operador de tu validador.

2. **Determina la dirección de tu gauge**
   Llama a `ValidatorsVoter.validatorToGauge()` pasando tu dirección de operador como parámetro.
   - Contrato: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Método: `validatorToGauge(address validator)`

3. **Reclama las recompensas**
   Llama a `ValidatorsVoter.claimRewards()` pasando la dirección de tu gauge como parámetro.
   - Contrato: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Método: `claimRewards(address gauge)`

## Direcciones de contratos

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **Contrato PoA**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Recursos adicionales

- [Descripción general de Mezo Earn](/docs/es/docs/users/mezo-earn/overview/)
- [Blog de Mezo](https://mezo.org/blog/tag/features/)
