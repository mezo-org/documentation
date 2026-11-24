---
title: Visão geral do veBTC
description: Bloqueie BTC para ganhar com o veBTC
topic: users
---

O veBTC é a representação tokenizada (NFT) do BTC bloqueado na rede Mezo. Bloquear BTC dá a você poder de governança e uma parte das taxas do protocolo.

## O que é o veBTC?

Quando você bloqueia BTC no Mezo, recebe um NFT veBTC que representa sua posição bloqueada. Esse NFT oferece:

- **Poder de voto** para direcionar as emissões em todo o ecossistema
- **Taxas do protocolo** provenientes da atividade da rede e das pontes
- **Direitos de governança** para moldar o futuro econômico do Mezo

---

## Como funciona o poder de voto

O peso do seu veBTC depende de dois fatores: a quantidade de BTC bloqueada (mais BTC = mais poder de voto) e a duração do bloqueio (bloqueios mais longos = peso mais alto e sustentado).

Seu poder de voto decai linearmente com o tempo. Um usuário que bloqueia 1 BTC por 28 dias começa com 1 veBTC, que decai para 0,5 após 14 dias e chega a 0 na expiração. Você pode estender seu bloqueio a qualquer momento para manter o poder de voto total.

### Parâmetros de bloqueio

| Parâmetro | Valor |
|-----------|-------|
| Bloqueio mínimo | 1 dia |
| Bloqueio máximo | 28 dias |
| Decaimento do bloqueio | Linear: o peso diminui continuamente até chegar a zero |

---

## O que você ganha

### Ganhos passivos (todos os detentores de veBTC)

Todos os detentores de veBTC recebem automaticamente uma parte das **taxas da rede e de ponte**, proporcional ao seu peso de voto. É um rendimento passivo que se acumula simplesmente por manter veBTC, sem necessidade de votar.

### Ganhos ativos (exigem votação)

Ao [votar em gauges](/docs/pt-br/docs/users/mezo-earn/vote), você ganha recompensas adicionais com base na alocação dos seus votos:

- **Taxas de swap** dos pools em que você vota (quando LPs fazem staking nesses gauges)
- **Receita de juros/taxas do MUSD**, se você votar no gauge MUSD Savings Rate
- **Incentivos** que protocolos ou usuários oferecem para atrair votos para gauges específicos

Quanto mais peso de voto você alocar a um gauge, maior será sua parte nas taxas e nos incentivos desse gauge.

:::note[Importante]
Sua alocação permanece entre as épocas e continua gerando ganhos até que você a altere: não é preciso votar de novo toda semana. Consulte [Épocas](#épocas) abaixo.
:::


---

## Épocas

O Mezo Earn funciona em **ciclos de 7 dias chamados épocas**. Cada época começa na quinta-feira às 00:00 UTC.

### Por que as épocas são importantes

- **Os votos permanecem.** Sua alocação se mantém de uma época para outra até que você a altere ou redefina. Cada bloqueio pode votar uma vez por época, portanto uma alocação confirmada não pode ser alterada até a próxima virada de época.
- **Os votos dados na época N** determinam a alocação de emissões da época N+1
- **As taxas geradas na época N** são distribuídas com base nos votos dados na época N

### Duração do bloqueio e alinhamento às épocas

As durações de bloqueio são alinhadas aos limites das épocas, não aos dias do calendário. Quando você cria um bloqueio, **o tempo de bloqueio é arredondado para baixo até a semana completa mais próxima**.

Isso significa que:

- Um bloqueio de 28 dias criado no meio de uma época terá uma duração efetiva de aproximadamente 21–28 dias, dependendo de quando você bloquear
- Os bloqueios sempre expiram nas viradas de época (quinta-feira às 00:00 UTC)

**Exemplo:** se você selecionar o bloqueio máximo de 28 dias no meio de uma época, a duração efetiva do seu bloqueio será reduzida com base no tempo restante da semana, resultando em um bloqueio de aproximadamente 21–28 dias, dependendo de quando você bloquear.

Essa normalização garante que todos os bloqueios expirem exatamente nos limites das épocas e simplifica os cálculos de peso de voto em todo o sistema.

| Parâmetro da época | Valor |
|-----------------|-------|
| Duração | 7 dias |
| Horário de início | Quinta-feira às 00:00 UTC |
| Alinhamento do bloqueio | Arredondado para baixo em semanas completas |
