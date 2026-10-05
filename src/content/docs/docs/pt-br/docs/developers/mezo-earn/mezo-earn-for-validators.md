---
title: Mezo Earn para validadores
description: >-
  Como os validadores participam do motor econômico do Mezo, recebem incentivos
  e interagem com veBTC, veMEZO, gauges e staking de LP.
topic: developers
---

Esta página explica como os validadores participam do motor econômico do Mezo (Mezo Earn), como recebem incentivos e como isso se relaciona com veBTC, veMEZO, gauges e staking de LP.

Ela foi escrita para:

- Validadores atuais e futuros do Mezo
- Provedores de infraestrutura e parceiros
- Detentores de veBTC/veMEZO e LPs que querem entender como funcionam as recompensas dos validadores

:::note

O whitepaper do Mezo é a fonte de referência para a mecânica e as fórmulas por trás de veBTC, veMEZO, gauges, splitters e emissões.

:::

---

## Visão geral em alto nível

Em linhas gerais:

- Os validadores protegem a rede Mezo e ganham recompensas em MEZO por meio do Chain Splitter do Mezo Earn.
- Os detentores de veBTC são a âncora da governança. Eles votam em gauges de staking para direcionar as emissões.

**Mecânicas principais:**

- **Divisão das emissões:** as proporções dos splitters (Chain Splitter e Ecosystem Splitter) estão atualmente fixas e bloqueadas pela governança. Elas poderão se tornar ajustáveis por meio de futuros mecanismos de governança.
- **Papel do veMEZO:** o veMEZO funciona como um boost sobre o poder do veBTC (até um multiplicador limitado), mas nunca substitui o BTC como âncora.

---

## Conceitos principais

### Definições importantes

Para entender o Mezo Earn, distinguimos três termos econômicos:

- **Recompensas:** o que os participantes recebem em troca do seu trabalho (por exemplo, emissões de MEZO).
- **Incentivos:** as regras ou os benefícios criados para estimular comportamentos específicos (por exemplo, ganhar um boost por manter veMEZO).
- **Bribes:** um orçamento temporário oferecido por protocolos ou usuários para promover uma ação específica (por exemplo, votar em um gauge específico).

### Participantes do Mezo Earn

O Mezo Earn coordena cinco participantes principais:

1. **Usuários finais / quem bloqueia veBTC e veMEZO:** bloqueiam BTC ou MEZO, recebem NFTs de veBTC e veMEZO, votam em gauges e reivindicam taxas/emissões.
2. **Provedores de liquidez (LPs):** fornecem liquidez à DEX e recebem tokens LP e taxas; opcionalmente, podem colocar tokens LP em staking em gauges de staking para trocar taxas por emissões de MEZO.
3. **Validadores:** operam nós da rede Mezo, participam do consenso e recebem emissões de MEZO por meio do Chain Splitter.
4. **Protocolos:** aplicam bribes em gauges para atrair liquidez ou votos de governança.
5. **A rede:** coleta as taxas de swap e as taxas da rede/de ponte e as redistribui por meio do Earn.

---

## Como os validadores recebem emissões

O Chain Splitter envia uma parcela fixa das emissões de recompensa aos validadores, atualmente definida em 20% das emissões de recompensa. Essa proporção está bloqueada pela governança.

As emissões dos validadores são distribuídas igualmente entre os validadores ativos. No momento, não existe nenhum mecanismo para que os detentores de veBTC votem em validadores individuais ou direcionem emissões para validadores específicos.

---

## Gauges de boost de veBTC e mercado de correspondência

Embora não sejam específicos dos validadores, os gauges de boost de veBTC e o mercado de correspondência afetam diretamente a eficiência com que validadores e LPs conseguem atrair votos.

- Cada NFT de veBTC tem seu próprio gauge de boost (sem staking).
- Os detentores de veMEZO votam nesses gauges usando o peso do seu veMEZO.

**Dinâmica do mercado:**

- **Participantes com muito BTC e pouco MEZO:** oferecem incentivos (bribes) nos seus gauges de boost de veBTC para atrair votos de veMEZO e aumentar o multiplicador (até 5x).
- **Participantes com muito MEZO e pouco BTC:** direcionam votos de veMEZO para gauges de boost de veBTC para ganhar esses incentivos sem ter BTC.

---

## Staking de LP e sua relação com os validadores

### O que é staking de LP?

Os LPs fornecem liquidez aos pools da DEX no Mezo e recebem tokens LP que representam sua participação no pool. Eles podem escolher entre dois modos:

**1. LP fora de staking:**

- Os LPs mantêm os tokens LP na carteira.
- Eles ganham sua parcela proporcional das taxas de swap diretamente do pool.
- Nenhuma emissão de MEZO é encaminhada a eles.

**2. LP em staking:**

- Os LPs colocam os tokens LP em staking em um gauge de staking.
- A parcela de taxas correspondente é desviada dos tokens LP em staking para os votantes de veBTC que votam nesse gauge.
- Em vez disso, os LPs recebem as emissões de MEZO encaminhadas a esse gauge.

**A troca econômica:**

- Os LPs trocam rendimento real direto (taxas) por emissões de MEZO.
- Os votantes de veBTC + veMEZO trocam seu poder de voto pelo direito a essas taxas desviadas e a quaisquer incentivos adicionados ao gauge.

### Como o staking de LP afeta os validadores

Por meio da árvore de splitters:

- O **Chain Splitter** determina quanto do montante de recompensas vai para atividades de validadores e quanto vai para outras atividades. Essa proporção está atualmente fixada em 20% para os validadores / 80% para o ecossistema e bloqueada pela governança.
- O **Ecosystem Splitter** direciona o montante que não vai para os validadores aos gauges de staking (pools de LP + poupança em MUSD). Essa proporção está atualmente fixa e bloqueada pela governança.
- Os gauges de LP então disputam as emissões dentro do seu ramo com o gauge de poupança em MUSD e com outros gauges de LP.

---

## Passo a passo: staking de LP

1. **Forneça liquidez:** escolha um pool na DEX do Mezo, deposite os ativos e receba tokens LP.

2. **Encontre o gauge de staking:** abra o frontend do Earn ou da DEX, encontre o gauge de staking do pool e confirme que ele aceita tokens LP.

3. **Coloque os tokens LP em staking:** aprove o contrato e coloque em staking a quantidade desejada. Isso desvia as taxas do pool para o montante de taxas do gauge e distribui emissões de MEZO a quem fez staking dos tokens LP.

4. **Votação de veBTC no gauge de LP:** os detentores de veBTC (+veMEZO) podem votar no gauge de LP. Um peso de voto maior encaminha mais emissões de MEZO ao gauge e mais taxas/bribes do pool aos votantes.

5. **Reivindicação das recompensas:**
   - **LPs:** reivindicam as emissões de MEZO (alocadas por época).
   - **Votantes de veBTC:** reivindicam sua parcela das taxas de swap desviadas e dos incentivos.

---

## Gauge de poupança em MUSD

A taxa de poupança do MUSD é implementada como mais um gauge de staking.

- Os usuários depositam MUSD em um cofre de poupança e recebem um token de recibo.
- Se colocarem o token de recibo em staking no gauge de poupança em MUSD:
  - O rendimento direto em MUSD é desviado para o montante de taxas do gauge.
  - Em vez disso, eles ganham as emissões de MEZO encaminhadas a esse gauge.
- Os detentores de veBTC que votam no gauge de poupança em MUSD recebem:
  - Rendimento em MUSD (dos juros e das taxas de originação e de refinanciamento).
  - Quaisquer incentivos em MEZO encaminhados a esse gauge.

Esse gauge disputa diretamente com os gauges de LP as emissões do ramo de staking e a atenção dos votantes.

---

## Contato e suporte no Discord

Para dúvidas específicas de validadores, integração e coordenação: entre no [Discord do Mezo](https://discord.mezo.org) e participe do canal #developers.
