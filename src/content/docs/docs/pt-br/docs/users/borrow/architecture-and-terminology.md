---
title: Arquitetura e terminologia do MUSD
description: Um mergulho no design do sistema e na terminologia principal do MUSD no Mezo.
topic: users
---

O sistema do [MUSD](https://mezo.org/feature/musd) é composto por quatro grupos principais de contratos:

| Grupo de contratos | Finalidade |
| --- | --- |
| **Token (MUSD)** | A stablecoin no centro do sistema, projetada para manter paridade com o USD |
| **Protocolo principal** | Cuida da abertura e do fechamento de posições, da gestão do colateral e da manutenção da estabilidade do sistema |
| **Pools de ativos** | Gerencia os diversos pools de colateral e de liquidez do sistema |
| **Contratos de suporte** | Fornece serviços essenciais, como feeds de preços, ordenação de posições e gestão do valor controlado pelo protocolo |

## Custódia e gestão de colateral

As posições em MUSD podem ser acompanhadas onchain, e o colateral subjacente em Bitcoin é gerenciado com segurança por meio da infraestrutura de custódia robusta e descentralizada do tBTC.

Você pode ver em tempo real todo o BTC que lastreia o MUSD no explorador de blocos do Mezo:

- [ActivePool](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876)
- [DefaultPool](https://explorer.mezo.org/address/0xE4B5913C0c82dB2eFC553b95c0173efb90a07c8B)
- [CollSurplusPool](https://explorer.mezo.org/address/0xBF51807ACb3394B8550f0554FB9098856Ef5F491)
- [GasPool](https://explorer.mezo.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)

O tBTC, criado pela mesma equipe por trás do Mezo, a [Thesis*](https://thesis.co/?ref=blog.mezo.org), funciona com a [Threshold Network](https://threshold.network/?ref=blog.mezo.org). A Threshold é um conjunto descentralizado de signatários que opera a ponte de Bitcoin da Threshold desde o início de 2020 e já transferiu com sucesso mais de 28 mil bitcoins pela ponte. As provas de reservas do tBTC estão ativas durante toda a existência da ponte e podem ser consultadas no [tbtcscan](https://tbtcscan.com/wallets?ref=blog.mezo.org).

Para um estudo aprofundado sobre o tBTC, consulte o [relatório de pesquisa Bitcoin Layers](https://mirror.xyz/0x715823F52163575f023b9090a775522249887619/3gaFbT7qQBKEbsjN3Gp_SQe6-QvdZNHuszoasNnvSUo?ref=blog.mezo.org), que analisa o tBTC em comparação com outros wrappers populares, como WBTC e cbBTC. Uma análise de risco adicional foi feita pela [equipe da LlamaRisk](https://www.llamarisk.com/research/collateral-risk-tbtc?ref=blog.mezo.org) antes da listagem do tBTC como colateral no Aave.

### Custódia em contratos

O usuário abre uma posição chamando BorrowerOperations.openTrove, fornecendo BTC e solicitando MUSD. O BTC é encaminhado ao ActivePool, onde permanece até que ocorra uma das seguintes ações:

* Saque (`BorrowerOperations.withdrawColl`)
* Quitação da dívida (`BorrowerOperations.closeTrove`)
* Resgate de colateral (`TroveManager.redeemCollateral`)
* Liquidação (`TroveManager.liquidate`)

As posições liquidadas são pagas pelo StabilityPool, caso em que o BTC é transferido para o Stability Pool, ou têm a dívida e o colateral absorvidos e redistribuídos entre outros usuários, caso em que o BTC é transferido para o DefaultPool, de onde será distribuído.

## Empréstimos com juros fixos

* Taxa de juros global: uma única taxa de juros global se aplica a todos os empréstimos abertos a partir de então.
* Manutenção das taxas de juros: depois que um empréstimo é aberto, ele mantém a taxa de juros com que foi criado, mesmo que a taxa global mude. A taxa de juros de um empréstimo só pode ser atualizada pelo usuário por meio da função de refinanciamento.

:::note
As taxas de juros são **fixas durante toda a vida do empréstimo**. A taxa que você garante na criação do empréstimo nunca muda, a menos que você opte por refinanciar.
:::
* Função de refinanciamento: a função de refinanciamento permite que os usuários ajustem a dívida do empréstimo à nova taxa de juros global. Esse processo gera uma taxa de refinanciamento, que é um percentual configurável da taxa de emissão. O refinanciamento oferece a vantagem de evitar a movimentação do colateral, com taxas menores do que fechar e reabrir um empréstimo com a taxa atualizada. Você também pode refinanciar para ampliar sua linha de crédito se o BTC tiver se valorizado.
* Juros simples: os juros são calculados com um modelo de juros simples, e não compostos.
* Pagamentos de juros: os pagamentos de juros são direcionados ao PCV (Protocol Controlled Value, valor controlado pelo protocolo). A alocação desses pagamentos é definida pela governança e pode ser dividida entre um destinatário arbitrário e o pagamento do empréstimo de bootstrap.

## Governança adicional

* Controle pela governança: a taxa de juros e outros parâmetros críticos são controlados pela governança. Alterações nesses parâmetros exigem uma proposta de governança e um prazo mínimo antes de entrarem em vigor.
* Propostas de taxa de juros: novas taxas de juros podem ser propostas pela governança. Essas propostas precisam ser aprovadas após um prazo mínimo, para garantir estabilidade e previsibilidade.

## Valor controlado pelo protocolo (PCV)

O contrato de Protocol Controlled Value (PCV) é um componente fundamental do sistema, responsável por gerenciar as taxas cobradas nos empréstimos e refinanciamentos. Veja abaixo uma visão geral de como o PCV funciona:

* Cobrança de taxas: as taxas de empréstimo e de refinanciamento são direcionadas ao contrato PCV.
* Alocação de taxas: as taxas recebidas pelo PCV são alocadas para pagar o empréstimo de bootstrap ou enviar fundos ao sistema de gauges.
* Divisão definida pela governança: a alocação das taxas entre o pagamento da dívida e o sistema de gauges é definida pela governança. No entanto, até que o empréstimo de bootstrap seja totalmente pago, no máximo 50% das taxas podem ser enviados ao sistema de gauges.
* Após a quitação da dívida: depois que o empréstimo de bootstrap for totalmente pago, as taxas se acumulam como liquidez de propriedade do protocolo no StabilityPool.

### Empréstimo de bootstrap do protocolo

O Stability Pool é inicializado (bootstrap) com um empréstimo do protocolo garantido por taxas e juros futuros. O MUSD cunhado a partir desse empréstimo do protocolo só pode ser usado no Stability Pool. Enquanto o empréstimo do protocolo estiver vigente, no mínimo 50% dos juros e das taxas cobrados pelo protocolo são usados para pagá-lo.

## Definições

- **Empréstimo:** uma posição de dívida colateralizada, vinculada a um único endereço Ethereum. Também chamada de "CDP" em protocolos semelhantes.

- **Colateral ativo:** a quantidade de colateral registrada na struct de um empréstimo

- **Principal ativo:** a quantidade de dívida em MUSD registrada na struct de um empréstimo, sem incluir juros

- **Juros ativos:** a quantidade de juros em MUSD registrada na struct de um empréstimo

- **Dívida ativa:** a quantidade de dívida em MUSD registrada na struct de um empréstimo (principal ativo mais juros ativos)

- **Colateral total:** a soma do colateral ativo de um empréstimo com as recompensas de colateral pendentes acumuladas a partir de distribuições

- **Dívida total:** a soma da dívida ativa de um empréstimo com as recompensas de dívida pendentes acumuladas a partir de distribuições

- **Índice de colateralização individual (ICR):** o ICR de um empréstimo é a razão entre o valor em dólares do seu colateral total, ao preço atual colateral:USD, e sua dívida total

- **Índice de colateralização nominal (ICR nominal, NICR):** o ICR nominal de um empréstimo é o seu colateral total (em unidades de colateral) multiplicado por 100e18 e dividido pela sua dívida total.

- **Colateral total do sistema:** a soma do colateral no ActivePool e no DefaultPool

- **Dívida total do sistema:** a soma da dívida no ActivePool e no DefaultPool

- **Índice de colateralização total (TCR):** a razão entre o valor em dólares do colateral total do sistema, ao preço atual colateral:USD, e a dívida total do sistema

- **Índice de colateralização crítico (CCR):** 150%. Quando o TCR fica abaixo do CCR, o sistema entra em Recovery Mode.

- **Resgate:** a troca de tokens MUSD com o sistema por um valor equivalente em colateral. Qualquer conta com saldo de tokens MUSD pode resgatá-los, seja ou não um tomador.

- **Liquidação:** o fechamento forçado de um empréstimo subcolateralizado, com a redistribuição do seu colateral e da sua dívida. Quando o Stability Pool é grande o suficiente, a dívida liquidada é compensada com o Stability Pool, e o colateral é distribuído aos depositantes. Se a dívida liquidada não puder ser compensada com o Pool, o sistema redistribui o colateral e a dívida liquidados diretamente aos empréstimos ativos com índice de colateralização >110%. A função de liquidação é sem permissão e aberta ao público: qualquer pessoa pode liquidar um empréstimo subcolateralizado ou liquidar empréstimos em lote.

- **Excedente de colateral:** o excedente de colateral é o colateral a mais dos tomadores, que eles podem recuperar caso tenham sido totalmente resgatados.

- **Compensação (offset):** cancelamento da dívida liquidada com o MUSD do Stability Pool e atribuição do colateral liquidado aos depositantes do Stability Pool, na proporção do seu depósito.

- **Compensação de gás:** um reembolso em MUSD e em colateral pago automaticamente a quem chama uma função de liquidação, com o objetivo de garantir que as liquidações sejam lucrativas em períodos de estresse do mercado. O valor de 200 MUSD foi definido com base nos preços de gás e nos tempos de bloco do Ethereum. Foi pensado para que os liquidantes não sejam desencorajados por custos de gás potencialmente altos.
