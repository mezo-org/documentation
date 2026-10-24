---
title: Gauge de validadores
description: >-
  Guia para validadores sobre como gerenciar beneficiários de recompensas, votar
  em gauges de validadores e reivindicar recompensas em MEZO.
topic: developers
---

Os validadores podem ganhar emissões de MEZO toda semana, mas somente se o gauge do validador receber votos em cada época. Sem votos no seu gauge, um validador não recebe nenhuma emissão. Este guia explica como gerenciar beneficiários de recompensas, votar no gauge do seu validador e reivindicar recompensas.

## Visão geral

Cada validador tem um gauge associado no [contrato ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a). As recompensas são reivindicadas pelo contrato ValidatorsVoter, informando o endereço do gauge do validador.

Cada gauge tem um único endereço beneficiário autorizado a reivindicar recompensas. Por padrão, o beneficiário é o endereço de operador do validador registrado no [contrato de Prova de Autoridade (PoA)](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819).

:::note[Cronograma de liberação das recompensas]
As recompensas alocadas a uma época não ficam disponíveis para reivindicação imediatamente: elas são liberadas gradualmente ao longo da época. Por exemplo, se as recompensas forem alocadas a um gauge no início da época N, 100% das recompensas da época N estarão disponíveis no final da época.
:::

## Alterar o beneficiário das recompensas

Os validadores podem designar outro endereço para receber as recompensas em MEZO. Isso é útil para separar as funções operacionais das funções de tesouraria.

Para alterar o beneficiário das recompensas:

1. **Conecte a carteira do seu endereço de operador**
   Use a carteira associada ao endereço de operador do seu validador.

2. **Descubra o endereço do seu gauge**
   Chame `ValidatorsVoter.validatorToGauge()` passando seu endereço de operador como parâmetro.

3. **Troque o beneficiário**
   Chame `Gauge.switchRewardsBeneficiary()` passando o endereço do novo beneficiário como parâmetro.
   - Contrato: o contrato Gauge específico do seu validador (obtido na etapa 2)
   - Método: `switchRewardsBeneficiary(address newBeneficiary)`

4. **Reivindique com o novo beneficiário**
   Depois de alterar o beneficiário, todas as reivindicações futuras devem ser executadas com a carteira do novo beneficiário.

:::caution[Boa prática]
Recomenda-se reivindicar todas as recompensas disponíveis com o beneficiário atual antes de trocar para um novo. Se você trocar de beneficiário com recompensas não reivindicadas, essas recompensas continuarão associadas ao endereço do beneficiário antigo e precisarão ser reivindicadas separadamente.
:::

## Votar no gauge do seu validador

Votar é essencial para ganhar emissões de MEZO: um gauge de validador que não recebe votos em uma época não recebe nenhuma recompensa nessa época. Os validadores podem votar no próprio gauge para direcionar emissões de MEZO. Os votos em gauges de validadores são **independentes** dos votos nos demais gauges do Mezo Earn. Por exemplo, se você já votou com 100% do seu poder de voto em um gauge de pool, ainda pode votar com 100% do seu poder de voto no gauge do seu validador (ou no gauge de outro validador).

O veBTC é o ativo principal usado na votação. O veMEZO pode ser usado para aumentar seu poder de voto. Depois de registrado, o voto é transferido automaticamente para as épocas seguintes, a menos que seja redefinido explicitamente.

:::note[Fazer poke da sua posição]
Talvez seja preciso fazer poke da sua posição antes de votar para garantir que ela esteja atualizada. Fazer poke de um voto existente também é vantajoso se o poder de voto do seu veBTC tiver aumentado (por exemplo, após um aporte adicional), porque isso atualiza o peso do seu voto para refletir o novo poder. Consulte a [documentação sobre poke](/docs/pt-br/docs/users/mezo-earn/vote/claiming-fees-emissions/#poke) para mais detalhes.
:::

### Como votar

1. **Identifique o gauge do seu validador**
   Chame a função `validatorToGauge` no [contrato ValidatorsVoter (Read Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=read_proxy) passando o endereço do seu validador como parâmetro.

2. **Registre seu voto**
   Chame a função `vote` no [contrato ValidatorsVoter (Write Proxy)](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a?tab=write_proxy). O parâmetro `tokenId` é o ID do seu NFT veBTC. Se você estiver votando apenas no gauge do seu próprio validador, pode definir o peso como `100` (o que representa 100% do seu poder de voto).

### Incentivar seu gauge

Os validadores podem incentivar o gauge de boost do seu veBTC em plataformas como o [Matchbox](https://matchbox.markets/) para atrair votos de veMEZO que aumentem o poder de voto do seu veBTC.
Esse poder de veBTC com boost pode então ser usado para direcionar mais votos ao gauge do validador, aumentando as emissões de MEZO.

O Mezo Earn também inclui um mecanismo separado de incentivos para gauges de validadores, mas esse fluxo específico não está disponível no Matchbox no momento.

## Reivindicar recompensas

Para reivindicar suas recompensas em MEZO, siga estas etapas:

1. **Conecte a carteira do seu endereço de operador**
   Use a carteira associada ao endereço de operador do seu validador.

2. **Descubra o endereço do seu gauge**
   Chame `ValidatorsVoter.validatorToGauge()` passando seu endereço de operador como parâmetro.
   - Contrato: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Método: `validatorToGauge(address validator)`

3. **Reivindique as recompensas**
   Chame `ValidatorsVoter.claimRewards()` passando o endereço do seu gauge como parâmetro.
   - Contrato: [ValidatorsVoter](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
   - Método: `claimRewards(address gauge)`

## Endereços dos contratos

- **ValidatorsVoter**: [`0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a`](https://explorer.mezo.org/address/0xe99a9ad5Ed26BD30e4DB25397f378817e9b9515a)
- **Contrato PoA**: [`0x7B7C000000000000000000000000000000000011`](https://explorer.mezo.org/address/0x7B7C000000000000000000000000000000000011?tab=read_contract#ca1e7819)

## Recursos adicionais

- [Visão geral do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview/)
- [Blog do Mezo](https://mezo.org/blog/tag/features/)
