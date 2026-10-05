---
title: MUSD Savings Vault
description: Obtenha rendimento lastreado em taxas com MUSD no Mezo Savings Vault
topic: users
---

O MUSD Savings Vault é o produto de poupança nativo do Mezo para detentores de MUSD.

**Como funciona:**

- Deposite MUSD e receba sMUSD, um token de recibo que representa sua participação no cofre
- O rendimento se acumula na taxa de câmbio do sMUSD: com o tempo, 1 sMUSD passa a ser resgatável por mais de 1 MUSD. Quando você sacar, receberá mais MUSD do que depositou.
- O rendimento vem de duas fontes dentro do sistema MUSD: as taxas do protocolo MUSD (juros de empréstimos, taxas de originação, taxas de refinanciamento) e as taxas em BTC das operações de empréstimo em MUSD, que são convertidas em MUSD e distribuídas semanalmente
- O protocolo distribui os dois fluxos ao cofre com frequência semanal
- O APR é variável, de acordo com a atividade do protocolo; confira a taxa atual em [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)

### Divisão das taxas

As taxas do protocolo MUSD são divididas meio a meio (50/50) entre dois destinos:

- **MUSD Savings Vault**: distribuídas aos detentores de sMUSD ou redirecionadas aos votantes de veBTC no caso de sMUSD em staking
- **Pagamento do [empréstimo de bootstrap do protocolo](/docs/pt-br/docs/users/borrow/architecture-and-terminology/#empréstimo-de-bootstrap-do-protocolo)**

Essa divisão pode ser alterada pela governança por meio do splitter do MUSD, com um mínimo de 50% destinado ao pagamento do empréstimo até que o empréstimo de bootstrap seja totalmente quitado. Depois da quitação, todas as taxas vão para o Savings Vault. Consulte [Taxas do MUSD](/docs/pt-br/docs/users/borrow/fees/) para ver todos os detalhes.

---

## Entenda o sMUSD

O sMUSD é o seu token de recibo do Mezo MUSD Savings Vault. Alguns pontos importantes:

- **O rendimento está na taxa de câmbio, não no seu saldo.** Seu saldo de sMUSD continua o mesmo depois do depósito, mas cada sMUSD passa a ser resgatável por mais MUSD com o tempo, à medida que o cofre acumula taxas. Você verá a diferença quando sacar.
- **O rendimento é distribuído semanalmente.** O protocolo distribui ao cofre as taxas acumuladas toda semana. A taxa de câmbio sMUSD/MUSD é atualizada a cada distribuição.
- **O sMUSD é transferível.** Você pode enviar ou manter sMUSD como qualquer outro token. Quem o tiver no momento do saque resgata o rendimento acumulado.
- **Se você fizer staking do sMUSD no gauge, seu rendimento é redirecionado.** O sMUSD em staking ganha emissões de MEZO em vez da receita direta das taxas. A receita de taxas que iria para você é redirecionada aos votantes de veBTC que votaram no gauge MUSD Savings. Tirar do staking restaura o acúmulo direto de rendimento.

---

## Detalhes do cofre

| Parâmetro | Valor |
|-----------|-------|
| Token de depósito | MUSD |
| Token de recibo | sMUSD |
| Estrategista | Mezo |
| Taxa de saque | Nenhuma |
| Bloqueio temporal de saque | 0h |
| APR atual | Variável; confira em [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC) |

---

## Staking de sMUSD no gauge

Se quiser, você pode fazer staking do seu token de recibo sMUSD no gauge MUSD Savings para ganhar emissões do token MEZO.

**A troca:**

- **sMUSD fora de staking:** você ganha diretamente sua parcela proporcional do rendimento do cofre e da receita de juros/taxas do MUSD
- **sMUSD em staking:** sua parcela da receita de juros e taxas é redirecionada aos votantes de veBTC no gauge. Em troca, você ganha emissões com base na quantidade de votos que o gauge recebe

Isso espelha o funcionamento do staking de LP nos pools de liquidez da DEX nativa do Mezo: quem faz staking abre mão da receita de taxas em troca de emissões, enquanto os votantes ganham as taxas redirecionadas.

O gauge MUSD Savings Rate disputa votos com os gauges dos pools de LP. Eles são chamados coletivamente de "gauges de staking": um voto alocado no gauge da taxa de poupança não pode ser alocado também em um gauge de LP.

Com as emissões de MEZO ativas, fazer staking de sMUSD no gauge agora rende MEZO além da sua posição base. O gauge MUSD Savings disputa votos de veBTC com os gauges dos pools de LP: quanto mais votos direcionados ao gauge de poupança, mais emissões de MEZO são encaminhadas a quem faz staking. Os votantes de veBTC que apoiam o gauge ganham as taxas de MUSD que quem faz staking redireciona. O APR atual do gauge para quem faz staking e para os votantes aparece na página Vote em [mezo.org/earn/vaults/vote](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC/vote).

---

## Riscos

### Risco de estratégia
Cada cofre aloca ativos de uma forma diferente. Entenda a estratégia subjacente antes de depositar: algumas estratégias têm mais risco do que outras.

### Risco de contratos inteligentes
Os cofres interagem com vários contratos inteligentes. Embora os cofres do Mezo sejam auditados, todo contrato inteligente tem um risco inerente. Deposite apenas valores com os quais você se sinta confortável.
