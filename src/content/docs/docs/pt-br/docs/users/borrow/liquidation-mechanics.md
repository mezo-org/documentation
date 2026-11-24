---
title: Liquidações e resgates do MUSD
description: Saiba como funcionam as liquidações e os resgates.
topic: users
---

## Visão geral
Quando você toma emprestado usando seu Bitcoin como colateral, cria uma posição de empréstimo (também chamada de "Trove"). Dois eventos importantes do sistema podem afetar seu empréstimo:

- **Liquidação**: o fechamento forçado do seu empréstimo, que só acontece se a saúde dele, medida pelo índice de colateralização, cair abaixo de um mínimo crítico de 110%. Em uma liquidação, você perde seu colateral.
- **Resgate**: qualquer pessoa que tenha MUSD pode trocá-lo com o protocolo por BTC a \$1 por MUSD (menos uma taxa de resgate, atualmente de 0,75%), o que mantém o preço do MUSD próximo de \$1 por meio de arbitragem. Os resgates retiram BTC primeiro do Trove com o menor índice de colateralização (desde que ele ainda esteja acima do limite de liquidação de 110%), então um resgate pode reduzir seu empréstimo mesmo quando seu Trove está a salvo de liquidação. Se o valor do resgate for menor do que a dívida desse Trove, ele é processado como um resgate parcial, ou seja, apenas parte da dívida é cancelada. Se for maior, o Trove é totalmente resgatado e o valor restante passa para o Trove com o próximo menor CR. Em ambos os casos, dívida e colateral são removidos em valores iguais em dólares, o que aumenta o índice de colateralização do Trove afetado, embora o tomador perca exposição ao BTC no processo.

---

## Liquidações ⚠️

### O que é uma liquidação?
A liquidação é um mecanismo de segurança que fecha automaticamente um empréstimo quando ele se torna arriscado demais. Isso protege todo o sistema contra instabilidade.

### Quando ocorre uma liquidação?

:::danger
Seu empréstimo corre risco de liquidação se o índice de colateralização cair abaixo de 110%. Pense nisso como a margem de segurança mínima absoluta exigida para o seu empréstimo.
:::

### O que acontece durante uma liquidação?
Existem duas formas de o sistema tratar uma liquidação:

#### Usando o Stability Pool (método padrão):
- O sistema usa stablecoins da sua reserva de segurança, o Stability Pool, para quitar totalmente sua dívida.
- A pessoa ou o bot que acionou a liquidação recebe uma pequena recompensa (uma taxa de gás de 200 MUSD e 0,5% do seu colateral).
- O restante do seu colateral (99,5%) é transferido para o Stability Pool para ressarcir seus depositantes.
- Seu empréstimo é fechado e você perde todo o seu colateral.

#### Redistribuição (método alternativo):
- Se o Stability Pool estiver vazio, o sistema divide sua dívida e seu colateral entre todos os outros titulares de empréstimos ativos.
- Esse é um método de reserva para garantir que o sistema permaneça sempre equilibrado.

### Exemplo de liquidação:
- Imagine que seu empréstimo tenha 10.000 MUSD de dívida.
- O valor do seu colateral em BTC cai para \$10.900.
- Seu índice de colateralização agora é de 109%, abaixo do mínimo de 110%.
- Resultado: seu empréstimo é liquidado. Sua dívida de 10.000 MUSD é zerada, mas você perde todo o seu colateral em BTC, no valor de \$10.900.

---

## Resgates 🛡️

### O que é um resgate?
O resgate é um recurso que permite a qualquer pessoa que tenha uma stablecoin trocá-la por um valor equivalente em dólares de BTC (menos a taxa de resgate) diretamente com o protocolo. Esse processo ajuda a manter a stablecoin próxima da paridade de \$1. Não é uma penalidade e não significa que seu empréstimo esteja em risco.

### Quando ocorre um resgate?
Os resgates podem ocorrer a qualquer momento. Quando um usuário quer resgatar sua stablecoin por BTC, o sistema procura empréstimos de onde obter o colateral.

### Quais empréstimos são escolhidos para resgate?
O sistema sempre começa pelo empréstimo com o menor índice de colateralização que ainda esteja acima do limite de liquidação de 110%, mesmo que esse índice seja saudável e bem acima de 110%. Se o seu empréstimo estiver menos colateralizado do que os outros, ele terá mais chances de ser escolhido para um resgate.

### O que acontece durante um resgate?

#### Resgate total:
- Se um resgate quitar toda a sua dívida, seu empréstimo é fechado.
- Um valor equivalente do seu BTC é entregue a quem fez o resgate.
- Qualquer BTC restante continua sendo seu. Isso é chamado de excedente de colateral e é enviado para uma conta de custódia especial, para que você o reivindique.

#### Resgate parcial (mais comum):
- Uma parte da sua dívida é quitada por quem faz o resgate.
- Um valor equivalente do seu colateral em BTC é entregue a essa pessoa.
- Resultado: seu empréstimo continua aberto, mas agora é menor e mais saudável, com um índice de colateralização mais alto.

### Exemplo de resgate:
- Imagine que seu empréstimo tenha 10.000 MUSD de dívida e \$13.000 em colateral em BTC (um índice saudável de 130%).
- Outro usuário resgata 5.000 MUSD, e seu empréstimo é o escolhido.
- Resultado:
  - Sua dívida é reduzida para 5.000 MUSD.
  - Seu colateral é reduzido para \$8.000.
  - Seu novo índice de colateralização passa a ser de 160% (\$8.000 / 5.000 MUSD), o que deixa seu empréstimo muito mais seguro!

### Como recuperar o colateral restante após um resgate total
Se o seu empréstimo for totalmente quitado por meio de um resgate, seu excedente de colateral está seguro. Você pode recuperá-lo a qualquer momento pelo Mezo App.

Observação importante: a interface atual pode não mostrar o excedente disponível. Se você não vir o alerta "Loan redeemed" na página Borrow, siga nosso guia [Como reivindicar seu colateral após um resgate total](/docs/pt-br/docs/users/borrow/claim-collateral-after-redemption/) para reivindicá-lo manualmente pelo Mezo Explorer.

---

## Principais diferenças em resumo

| Característica | Liquidação (fechamento forçado) | Resgate (amortização da dívida) |
| --- | --- | --- |
| Quando acontece | Somente quando seu índice está abaixo de 110% | Pode acontecer quando seu índice está acima de 110% |
| Quem inicia? | Qualquer pessoa (geralmente bots) | Qualquer usuário que tenha MUSD |
| Efeito na dívida | Totalmente eliminada | Reduzida ou eliminada |
| Efeito no colateral | Perda total | Removido em parte, e qualquer excedente pode ser reivindicado por você |
| Efeito para você | Evento negativo; o empréstimo é fechado e os ativos são perdidos | Neutro ou positivo; o empréstimo fica menor e mais saudável |

---

## O que é o Recovery Mode?

:::note
O Recovery Mode (modo de recuperação) é um estado temporário de segurança que é ativado se o índice de colateralização total (TCR) de todo o sistema cair abaixo de 150%. É um estado especial do sistema, com regras de empréstimo mais rígidas.
:::

Durante o Recovery Mode:
- **As liquidações não são afetadas.** O limite de liquidação continua em 110%, o mesmo do modo normal. Diferentemente do Liquity v1, o MUSD não estende as liquidações a índices de colateralização mais altos durante o Recovery Mode.
- Não é possível abrir novos empréstimos com índice de colateralização abaixo de 150%.
- O refinanciamento fica bloqueado.
- O sistema incentiva os usuários a adicionar colateral ou pagar dívidas para restabelecer o TCR acima de 150%.

---

## Como manter seu empréstimo seguro

:::tip
A melhor defesa contra a liquidação e o resgate é manter um índice de colateralização alto; procure ficar bem acima de 150%.
:::

### Para evitar a liquidação:
- Mantenha uma boa margem de segurança. Procure manter um índice de colateralização bem acima de 110% para ficar protegido da volatilidade do mercado. Um índice acima de 150% também garante que você possa tomar emprestado e refinanciar livremente, mesmo que o sistema entre em Recovery Mode.
- Acompanhe a saúde do seu empréstimo regularmente, principalmente se o preço do BTC estiver caindo.
- Seja proativo: adicione mais colateral ou pague parte da sua dívida se o seu índice ficar baixo demais.

### Para reduzir a probabilidade de resgate:
- Mantenha um índice de colateralização alto. Diferentemente das liquidações, que são acionadas em um limite fixo, os resgates são relativos: o sistema seleciona primeiro os Troves com os menores índices de colateralização. Quanto mais alto for o seu índice em comparação com outros Troves, menor a chance de o seu ser resgatado. Embora 150% costume ser uma boa meta de referência, o posicionamento ideal depende das condições atuais do mercado e dos índices de colateralização dos outros Troves abertos. Vale a pena acompanhar periodicamente os Troves em aberto e ajustar seu índice conforme necessário para ficar bem acima dos últimos da fila.

### Acompanhe seu empréstimo com o MUSD Monitor
Para um monitoramento avançado, você pode usar o [mezotools.cc](https://mezotools.cc).

Essa ferramenta permite:
- Verificar em tempo real a saúde dos Troves e os índices de colateralização.
- Ver os resgates e as liquidações recentes em todo o sistema.
- Acompanhar os preços do BTC e das stablecoins diretamente dos oráculos onchain do Mezo.

---

Para ver a lista completa de termos e definições do MUSD, consulte [Arquitetura e terminologia](/docs/pt-br/docs/users/borrow/architecture-and-terminology#definições).
