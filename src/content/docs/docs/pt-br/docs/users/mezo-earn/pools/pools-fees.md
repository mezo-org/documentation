---
title: Taxas dos pools
description: Modelo de taxas do Mezo Pools
topic: users
---

## Taxas

O [Mezo Pools](https://mezo.org/explore/pools) usa um modelo de taxas dinâmico, otimizado para diferentes pares de negociação:

### Taxas padrão

- **Pools voláteis**: 0,30%
- **Pools estáveis**: 0,02%

### Taxas personalizadas de pools

Alguns pools podem ter taxas personalizadas definidas pela governança. Essas taxas especiais normalmente se aplicam a:

- **Pools de parcerias estratégicas**
- **Pools promocionais durante períodos de lançamento**
- **Pares de negociação institucionais de alto volume**

### Como as taxas são cobradas

Quando um trader executa um swap em um pool do Mezo:

1. **Dedução da taxa**: a taxa é deduzida automaticamente da quantidade do token de entrada.
   - Exemplo: um swap de 1.000 MUSD em um pool estável deduz 0,2 MUSD como taxa.
2. **Separação imediata**: as taxas cobradas são transferidas instantaneamente para um contrato PoolFees dedicado.
   - As taxas nunca se misturam com as reservas de liquidez principais do pool

### Em quais tokens as taxas são pagas?

As taxas são sempre cobradas no token vendido (token de entrada) em cada swap. Como LP, você ganha taxas nos dois tokens do par:

- Quando os traders fazem swap de Token A → Token B, as taxas são cobradas em Token A
- Quando os traders fazem swap de Token B → Token A, as taxas são cobradas em Token B
- Você acumula e pode reivindicar taxas nos dois tokens, de acordo com sua participação no pool

Exemplo: em um pool MUSD/tBTC:

- Um trader faz swap de MUSD → BTC: MUSD é cobrado como taxa (para todos os LPs)
- Um trader faz swap de BTC → MUSD: BTC é cobrado como taxa (para todos os LPs)
- Como LP, você ganha uma parte das taxas tanto em MUSD quanto em BTC

### Como reivindicar suas taxas

1. Acesse sua posição na interface do Mezo Pools
2. Clique em "Claim Fees"
3. Confirme a transação
4. As taxas são enviadas diretamente para sua carteira

### Exemplos de cálculo de taxas

#### Exemplo 1: pool volátil (BTC/MUSD)

- **Volume diário**: $1.000.000
- **Taxa**: 0,30%
- **Taxas diárias geradas**: $3.000
- **Sua participação**: 5% do pool
- **Suas taxas diárias**: ~$150

#### Exemplo 2: pool estável (MUSD/USDC)

- **Volume diário**: $5.000.000
- **Taxa**: 0,02%
- **Taxas diárias geradas**: $1.000
- **Sua participação**: 2% do pool
- **Suas taxas diárias**: ~$20

### Perguntas frequentes

#### Em qual moeda/token as taxas são pagas?
As taxas são pagas no token de entrada de cada swap (o token vendido). Em um pool USDC/MEZO, os swaps de USDC → MEZO geram taxas em USDC, enquanto os swaps de MEZO → USDC geram taxas em MEZO. Como LP, você acumula e reivindica taxas nos dois tokens.

#### Posso perder as taxas acumuladas?
Não. As taxas ficam armazenadas separadamente nos contratos PoolFees e só podem ser reivindicadas pelos detentores de tokens LP.

#### As taxas se capitalizam automaticamente?
Não. Para obter o efeito de juros compostos, você precisa reivindicar e redepositar as taxas manualmente.
