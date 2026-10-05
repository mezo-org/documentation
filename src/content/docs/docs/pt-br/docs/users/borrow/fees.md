---
title: Taxas e custos do MUSD
description: >-
  Veja todas as estruturas de taxas e os custos envolvidos no uso do MUSD no
  Mezo.
topic: users
---

## Resumo das taxas

| Taxa | Valor | Quando é cobrada |
| --- | --- | --- |
| **Taxa de emissão** | 0,1% do MUSD tomado emprestado | Ao abrir ou aumentar um empréstimo |
| **Juros** | 1–5% de APR (fixados na abertura) | Incidem sobre a dívida em aberto |
| **Taxa de resgate** | 0,75% | Ao trocar MUSD por colateral em BTC |
| **Taxa de refinanciamento** | 0,02% da dívida | Ao refinanciar um empréstimo para uma nova taxa |
| **Depósito de gás** | 200 MUSD (fixo) | Ao abrir um empréstimo (devolvido no fechamento) |

## Distribuição das taxas

:::note
As taxas são divididas entre dois destinos: **(1)** o pagamento do empréstimo de bootstrap do protocolo e **(2)** o MUSD Savings Vault. A divisão inicial é de 50/50 e pode ser alterada pela governança por meio do splitter do MUSD. No mínimo 50% das taxas devem ir para o pagamento do empréstimo até que o empréstimo de bootstrap seja totalmente quitado. Após a quitação, todas as taxas vão para o Savings Vault.
:::

![](/docs/images/musd/musd-economy.webp)

## Juros (1–5% de APR)

Os juros dos empréstimos em [MUSD](https://mezo.org/feature/musd) são fixos durante toda a vida do empréstimo. Quando o crédito é aumentado, o novo crédito é adicionado com a taxa de juros vigente.

No lançamento, os juros financiam o Stability Pool da tesouraria do MUSD, que cobre liquidações e dívidas incobráveis.

## Taxas de resgate (0,75%)

Uma taxa de 0,75% retida do BTC que o resgatador recebe ao trocar MUSD por colateral durante um [resgate](/docs/pt-br/docs/users/borrow/liquidation-mechanics#resgates-%EF%B8%8F). Ela é paga por quem faz o resgate, e não pelo tomador cujo empréstimo é resgatado.

No lançamento, as taxas de resgate financiam o Stability Pool da tesouraria do MUSD, que cobre liquidações e dívidas incobráveis.

## Taxa de emissão (0,1%)

A taxa de emissão é paga quando um empréstimo em MUSD é aberto ou quando o titular de um empréstimo toma mais MUSD emprestado. A taxa é de 0,1% do valor tomado emprestado e é paga em MUSD. Um empréstimo de \$10.000 MUSD pagaria uma taxa de emissão de \$10 em MUSD. Se você aumentar seu empréstimo, pagará a taxa de emissão sobre o MUSD adicional tomado emprestado.

## Taxa de refinanciamento (0,02% da dívida)

A taxa de refinanciamento é cobrada quando o titular de um empréstimo em MUSD solicita a atualização da taxa de juros do empréstimo. O tomador pode querer refinanciar o empréstimo se a taxa de juros oferecida para novos empréstimos for melhor do que a taxa de juros fixa do seu empréstimo. O refinanciamento permite atualizar a taxa do empréstimo para a nova taxa. Cada solicitação de refinanciamento gera uma taxa de refinanciamento de 0,02% da dívida, paga em MUSD.

## Depósito de gás (taxa fixa de `200 MUSD`)

Um depósito de 200 MUSD garante que as liquidações sejam viáveis. Ele é devolvido quando o empréstimo é fechado. O depósito de gás é cunhado como dívida adicional no empréstimo e fica retido em garantia (escrow) até o fechamento do empréstimo. Essa dívida entra no cálculo do índice de colateralização.

## Outras taxas de gás e de transação

Os usuários que interagem com o sistema do MUSD precisam pagar taxas de transação por cada transação transmitida à rede Mezo. Isso inclui ações como cunhar, resgatar, fazer staking e reivindicar.

## Riscos que você precisa conhecer

:::caution
Tomar MUSD emprestado envolve riscos. Entender esses riscos ajuda você a proteger sua posição.

**Risco de resgate**: para manter a paridade do MUSD, o protocolo pode resgatar MUSD contra colateral, começando pelos empréstimos com o **menor índice de colateralização** (mas que ainda estejam acima do limite de liquidação de 110%). Se o seu empréstimo for resgatado, você perde a exposição à valorização do preço do BTC e pode ter implicações fiscais. Para reduzir esse risco, mantenha seu índice de colateralização mais alto do que o de outros tomadores.

**Risco de liquidação**: se o índice de colateralização do seu empréstimo cair **abaixo de 110%**, sua posição pode ser liquidada. Você perde seu colateral e fica com o MUSD tomado emprestado. Para reduzir esse risco, acompanhe seu empréstimo regularmente e adicione colateral quando necessário. Para todos os detalhes, consulte [Liquidações e resgates do MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).
:::
