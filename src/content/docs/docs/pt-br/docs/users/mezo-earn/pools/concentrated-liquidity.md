---
title: Liquidez concentrada
description: >-
  Forneça liquidez dentro de faixas de preço personalizadas para ganhar mais
  taxas com menos capital.
topic: users
---

Os pools de liquidez concentrada (CL) permitem depositar liquidez dentro de uma faixa de preço específica, em vez de em todos os preços possíveis. Ao concentrar seu capital onde a negociação realmente acontece, você pode ganhar muito mais taxas por dólar depositado em comparação com os [pools básicos](/docs/pt-br/docs/users/mezo-earn/pools).

## Como a liquidez concentrada difere dos pools básicos

Em um **pool básico**, sua liquidez é distribuída de forma uniforme por toda a curva de preços, de zero ao infinito. Isso significa que a maior parte do seu capital fica ociosa em faixas de preço onde nunca há negociação.

Em um **pool de liquidez concentrada**, você escolhe uma faixa de preço, por exemplo, BTC entre 80.000 e 120.000 MUSD. Todo o seu capital fica ativo dentro dessa faixa, o que torna o uso do capital muito mais eficiente. A contrapartida é que, se o preço sair da sua faixa, sua posição para de ganhar taxas até que o preço volte.

| | Pools básicos | Pools CL |
|---|---|---|
| **Faixa de liquidez** | Curva de preços completa (de 0 ao infinito) | Faixa de preço personalizada definida por você |
| **Eficiência de capital** | Menor: a maior parte do capital fica ociosa | Maior: todo o capital fica ativo dentro da faixa |
| **Tipo de posição** | Tokens LP fungíveis (ERC-20) | Posições em NFT (ERC-721) |
| **Gerenciamento** | Configure e esqueça | Exige monitoramento e rebalanceamento |
| **Perda impermanente** | Padrão | Ampliada dentro da faixa escolhida |

## Pools CL ativos

| Pool | Tipo | Tick spacing |
|---|---|---|
| BTC/MUSD-200 | Volátil concentrado | 200 |

Acesse o [Mezo Pools](https://mezo.org/explore/pools) para ver estatísticas ao vivo, incluindo TVL, volume, taxas e APR.

## Tick spacing

Os pools CL usam o **tick spacing** para definir a granularidade das faixas de preço que você pode configurar. Um tick spacing menor permite faixas mais estreitas (mais precisão), enquanto um tick spacing maior significa faixas mínimas mais amplas.

Os pools são classificados como **estáveis** (tick spacing abaixo de 100) ou **voláteis** (tick spacing de 100 ou mais), seguindo a mesma convenção usada pela Aerodrome.

| Tick spacing | Taxa padrão | Classificação |
|---|---|---|
| 1 | 0,01% | Estável |
| 10 | 0,05% | Estável |
| 50 | 0,05% | Estável |
| 100 | 0,05% | Volátil |
| 200 | 0,30% | Volátil |
| 2.000 | 1,00% | Volátil |

O pool BTC/MUSD-200 usa tick spacing de 200, com taxa de swap de 0,30%.

## Primeiros passos (em breve)

1. Acesse o [Mezo Pools](https://mezo.org/explore/pools) e selecione o pool CL para o qual você quer fornecer liquidez.
2. Escolha sua faixa de preço: defina os preços mínimo e máximo em que sua liquidez ficará ativa.
3. Informe a quantidade de cada token a depositar. A proporção depende do preço atual em relação à faixa escolhida.
4. Revise e confirme a transação. Você receberá um NFT que representa sua posição.

### Como escolher uma faixa de preço (em breve)

- **Faixa mais ampla**: gera taxas de forma mais constante, mas com menor eficiência de capital. Melhor para uma abordagem mais passiva.
- **Faixa mais estreita**: gera mais taxas enquanto o preço está dentro da faixa, mas exige monitoramento e rebalanceamento ativos. O risco de o preço sair da faixa é maior.
- **O ideal é que o preço atual esteja dentro da sua faixa**: se o preço atual estiver fora da sua faixa, sua posição ficará inteiramente em um único token e não ganhará taxas até que o preço volte para dentro da faixa.

## Staking para emissões (em breve)

As posições CL podem ser colocadas em staking em gauges para ganhar emissões de MEZO além das taxas de negociação. As posições em staking ganham uma parcela maior das taxas de swap por meio do mecanismo de taxas de posições fora de staking, que redireciona parte das taxas das posições que não estão em staking para as que estão.

Para fazer staking:

1. Navegue até sua posição CL.
2. Clique em **Stake** para depositar o NFT da sua posição no gauge.
3. Ganhe emissões de MEZO enquanto sua liquidez estiver dentro da faixa.

As emissões são distribuídas proporcionalmente à liquidez em staking que está dentro da faixa. Se sua posição sair da faixa, você deixa de ganhar emissões até que o preço volte.

## Taxas

As taxas dos pools CL funcionam da mesma forma que as dos pools básicos: elas são deduzidas do token de entrada em cada swap e se acumulam para que os provedores de liquidez as reivindiquem.

A principal diferença: nos pools CL, as taxas só são ganhas pelas posições que estão **dentro da faixa** no momento do swap. As posições fora da faixa de preço ativa não ganham nada até que o preço volte.

Consulte [Taxas dos pools](/docs/pt-br/docs/users/mezo-earn/pools/pools-fees) para ver mais detalhes sobre o modelo de taxas.

## Riscos

### Perda impermanente

A liquidez concentrada **amplia** a perda impermanente em comparação com os pools básicos. Como seu capital está concentrado em uma faixa estreita, os movimentos de preço dentro dessa faixa têm um impacto maior na proporção de tokens da sua posição. Quanto mais estreita a faixa, maior a possível perda impermanente.

### Risco de sair da faixa

Se o preço de mercado sair da faixa escolhida, sua posição é convertida inteiramente em um único token e deixa de ganhar taxas ou emissões. Você precisará esperar o preço voltar ou sacar e reposicionar sua liquidez.

### Risco de contratos inteligentes

Como em todos os contratos inteligentes, há um risco inerente. Consulte as auditorias em [mezo.org/audits](https://mezo.org/audits) e deposite apenas valores com os quais você se sinta confortável.
