---
title: Ditto MUSD Savings Vault
description: >-
  Deposite MUSD no Mezo e receba dMUSD em um cofre cross-chain automatizado com
  alocação inicial no Spark Savings
topic: users
---

O Ditto MUSD Savings Vault oferece aos detentores de MUSD mais uma forma de colocar seus ativos para render pelo Mezo Earn. Deposite MUSD no Mezo e receba **dMUSD**, um token de recibo que representa sua posição no cofre. A Ditto Network cuida dos swaps, das transferências pela ponte e da alocação por trás do cofre, com uma alocação inicial no **Spark Savings no Ethereum**.

Você mantém uma posição no cofre no Mezo enquanto a Ditto gerencia as etapas necessárias para acessar o rendimento subjacente em outra rede.

Conheça o [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## Como funciona

1. **Deposite MUSD no Mezo.** Você recebe dMUSD, que representa sua posição no cofre.
2. **A Ditto aloca os ativos.** Os operadores fazem os swaps e a transferência pela ponte para o Ethereum e, em seguida, alocam no Spark Savings.
3. **A estratégia subjacente gera rendimento.** Seu dMUSD representa um direito sobre os ativos do cofre. Os retornos dependem da estratégia subjacente e são variáveis.
4. **Solicite o resgate para sair.** A Ditto reverte o processo e devolve MUSD no Mezo depois que o saque é processado.

### Como a automação funciona

Vários operadores verificam de forma independente as ações propostas para o cofre antes de assiná-las. A execução exige um número mínimo de aprovações de operadores, e contratos inteligentes aplicam verificações adicionais onchain. A avaliação do cofre (valor patrimonial líquido, ou NAV) também é publicada onchain por meio do pipeline assinado.

Essas verificações regem a execução automatizada; elas não eliminam os riscos de contratos inteligentes, de ponte, de operadores ou de estratégia.

## Detalhes do cofre

| Parâmetro | Valor |
| --- | --- |
| Ativo de depósito | MUSD no Mezo |
| Token de recibo | dMUSD |
| Operador do cofre | Ditto Network |
| Alocação inicial | Spark Savings no Ethereum |
| Ativo de resgate | MUSD no Mezo |
| Saques | Assíncronos; aguarde o tempo de processamento |
| APY atual | Aprox. 3,60% em 29 de setembro de 2026, em linha com o Spark Savings; variável. Confira a [página do cofre](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

O desempenho passado não reflete o desempenho atual nem garante retornos futuros. Antes de depositar, confira no app a taxa atual, eventuais taxas, as condições de saque e os riscos.

## Como depositar

1. Abra o [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) e conecte sua carteira no Mezo.
2. Revise a estratégia, a taxa atual e as condições de saque.
3. Informe a quantidade de MUSD que deseja depositar e siga as solicitações de aprovação e de depósito do app.
4. Confirme as transações necessárias na sua carteira. Seus tokens de recibo dMUSD representam sua posição no cofre.

## Saques

Solicite um resgate pela página do cofre e siga as instruções para sua posição de dMUSD. A Ditto desfaz a alocação subjacente, faz as transferências pela ponte e os swaps necessários e devolve MUSD no Mezo.

**Os saques são assíncronos.** Enviar uma solicitação de resgate não significa que o MUSD estará imediatamente disponível na sua carteira. Aguarde o processamento da estratégia subjacente e das operações cross-chain e siga as etapas de conclusão exibidas no app. O tempo de processamento pode variar; não presuma um prazo fixo de saque.

Se precisar de ajuda com um resgate pendente, entre em contato com o [suporte do Mezo](/docs/pt-br/docs/users/resources/support) informando o endereço da sua carteira, o hash da transação e o horário da solicitação.

## Como o dMUSD difere do sMUSD

O cofre da Ditto é um produto separado do [MUSD Savings Vault](/docs/pt-br/docs/users/mezo-earn/vaults/musd-savings-vault) nativo do Mezo:

- **dMUSD:** uma posição no cofre operado pela Ditto, inicialmente alocado no Spark Savings no Ethereum. Os resgates devolvem MUSD no Mezo por meio de um processo assíncrono.
- **sMUSD:** uma posição no cofre de poupança nativo do Mezo, que obtém rendimento da atividade do protocolo MUSD.

Os tokens de recibo representam cofres diferentes. Analise as condições de cada cofre antes de depositar ou resgatar.

## Riscos

- **Risco de contratos inteligentes:** um bug ou exploit no cofre, nos contratos de automação ou nos protocolos subjacentes pode resultar em perda de fundos.
- **Risco cross-chain:** os swaps e as transferências pela ponte acrescentam dependências. Falhas na ponte, atrasos na rede ou uma execução desfavorável podem afetar a posição e o processo de resgate.
- **Risco de estratégia e de stablecoin:** os retornos dependem do Spark Savings e dos ativos usados pela estratégia. As taxas podem mudar, e as stablecoins podem perder a paridade.
- **Risco de operadores:** o processamento depende de aprovações suficientes dos operadores e de uma execução bem-sucedida. Indisponibilidade ou falhas dos operadores podem atrasar as ações do cofre.
- **Risco de saque:** os ativos precisam ser liberados da alocação subjacente e devolvidos ao Mezo. Talvez você não consiga acessar seu MUSD imediatamente após solicitar o resgate.

## Links e recursos

- [Ditto MUSD Savings Vault no Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Documentação da Ditto Network](https://docs.dittonetwork.io/)
- [Documentação do Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Suporte do Mezo](/docs/pt-br/docs/users/resources/support)
