---
title: Visão geral do veMEZO
description: Bloquear MEZO para aplicar boost ao poder de voto e ganhar rebases
topic: users
---

O veMEZO é a representação tokenizada (NFT) do MEZO bloqueado na rede Mezo. Bloquear MEZO permite aplicar um boost de até 5x ao poder de voto do seu veBTC, amplificando seus ganhos, e receber rebases antidiluição por meio das emissões de MEZO.

## O que é o veMEZO?

Quando você bloqueia MEZO no Mezo, recebe um NFT veMEZO que representa sua posição bloqueada. Esse NFT oferece:

- Multiplicador de boost sobre o poder de voto do seu veBTC (até 5x)
- Recompensas de rebase das emissões semanais de MEZO para compensar a diluição
- Participação no mercado de correspondência para ganhar incentivos dos detentores de veBTC
- Votos no [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges), direcionando emissões de MEZO para pools de MUSD na Curve, na Uniswap e na Aerodrome

:::note[Importante]
O veMEZO não vota por conta própria em **gauges de staking**: neles, ele apenas multiplica o poder de voto das posições de veBTC. Ele vota por conta própria nos gauges de boost de veBTC e no [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## Como funciona o peso do veMEZO

O peso do seu veMEZO depende de dois fatores: a quantidade de MEZO bloqueada (mais MEZO = mais peso) e a duração do bloqueio (bloqueios mais longos = peso mais alto e sustentado).

Seu peso decai linearmente com o tempo. Um usuário que bloqueia 1.000 MEZO por 4 anos começa com peso de 1.000 veMEZO, que decai para 500 após 2 anos e chega a 0 na expiração. Você pode estender seu bloqueio a qualquer momento para manter o peso total.

Você também pode ativar o bloqueio máximo automático (auto-max lock) do seu veMEZO, o que permite manter o peso de voto máximo de 4 anos em todas as épocas sem precisar bloquear seus tokens novamente o tempo todo.

### Parâmetros de bloqueio

| Parâmetro | Valor |
|---|---|
| Bloqueio mínimo | 1 semana |
| Bloqueio máximo | 4 anos (1.456 dias) |
| Decaimento do bloqueio | Linear: o peso diminui continuamente até chegar a zero |

---

## O que você ganha

### Recompensas de rebase (todos os detentores de veMEZO)

Os detentores de veMEZO recebem uma parte das emissões semanais de MEZO como rebases. Isso protege contra a diluição causada pelas novas emissões. A parte destinada aos rebases é dinâmica: maior quando há menos tokens bloqueados e menor à medida que mais MEZO é bloqueado.

### Incentivos (pelo mercado de correspondência)

Os detentores de veMEZO podem votar em gauges de veBTC para ganhar incentivos. Quando um detentor de veBTC quer aplicar boost à sua posição, mas não tem veMEZO suficiente, ele pode publicar incentivos no gauge do seu veBTC. Ao votar nesse gauge, você ganha esses incentivos em troca de fornecer boost.

Consulte [Mecanismo de boost](/docs/pt-br/docs/users/mezo-earn/lock/vemezo/boost-mechanism) para saber em detalhes como funciona o mercado de correspondência.

---

## veMEZO vs. veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Ativo subjacente | BTC | MEZO |
| Bloqueio máximo | 28 dias | 4 anos |
| Poder de voto | Poder de voto básico | Multiplica o poder do veBTC (até 5x) |
| Ganha taxas | Sim (de ponte, de swap, do MUSD) | Não |
| Ganha rebases | Não | Sim |
| Ganha incentivos | Sim (dos gauges em que você vota) | Sim (dos gauges de boost de veBTC) |
