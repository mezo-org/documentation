---
title: Implantação de incentivos
description: >-
  Como criar gauges de votação para ativos de pools incluídos na lista de
  permissões do Mezo Earn.
topic: developers
---

Todos os ativos do Mezo (BTC, MEZO e os tokens de contrato da mainnet) foram incluídos na lista de permissões do contrato PoolsVoter. Agora qualquer pessoa pode criar gauges de votação para pools cujos dois ativos estejam na lista de permissões.

Para ver a lista completa dos endereços de tokens incluídos na lista de permissões que podem ser adicionados como incentivos nos gauges, consulte a [Referência de contratos](/docs/pt-br/docs/users/resources/contracts-reference#endereços-dos-contratos-do-portal).

## Criar um gauge de pool

1. Acesse o [contrato PoolsVoter no Mezo Explorer](https://explorer.mezo.org/address/0x48233cCC97B87Ba93bCA212cbEe48e3210211f03) e conecte sua carteira.

2. Clique na aba **Contract**, selecione **Write proxy** e escolha `createPoolGauge`.

3. No parâmetro `_poolFactory`, use um dos seguintes endereços:
   - **Pools básicos:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
   - **Pools CL:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`

4. Informe o endereço do pool em `_pool`.

5. Execute a transação. Se o pool estiver listado na visão geral dos pools, ele também deverá começar a aparecer na interface de votação.
