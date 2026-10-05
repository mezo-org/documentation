---
title: Resgates de MUSD
topic: developers
---

# Como resgatar MUSD no Mezo

## Visão geral rápida
O resgate permite queimar 1 MUSD para receber `$1` em BTC (descontados a taxa de resgate de 0,75% e as taxas de gás). O sistema faz o resgate a partir do Trove com o menor índice de colateralização acima de 110%. Se a quantidade de MUSD for maior que um único Trove, o resgate continua em ordem crescente de índice de colateralização.

Troves com índice de colateralização abaixo de 110% estão sujeitos a liquidação e não podem ser alvo de resgate.

---

## Pré-requisitos

Antes de começar, verifique:

1. **O sistema está aceitando resgates**: acesse TroveManager → "Read as Proxy" → chame `getTCR()` com o preço atual do BTC. O resultado deve ser ≥ `1100000000000000000` (110%)
2. **Você tem MUSD**: confira seu saldo no contrato do token MUSD
3. **Obtenha o preço atual do BTC**: acesse PriceFeed → "Read as Proxy" → chame `fetchPrice()`
4. **Obtenha os endereços de contrato corretos**: consulte os endereços de contrato da Mainnet e da Testnet no final desta página.

---

## Instruções passo a passo

### 1. Acesse o contrato TroveManager
Abra o contrato TroveManager no explorador de blocos e clique na aba **"Write as Proxy"**.

### 2. Encontre a função 11: `redeemCollateral`

Você verá 6 campos de entrada. Veja como preenchê-los:

---

## Opção A: rápida e simples (mais gás)

Use esta opção se quiser resgatar rapidamente, sem calcular hints.

- `_amount`: [sua quantidade em wei; veja a conversão abaixo]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [o endereço da sua carteira]   
- `_lowerPartialRedemptionHint`: [o endereço da sua carteira]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**Conversão de MUSD para wei:**
- 100 MUSD = `100000000000000000000`
- 5.005 MUSD = `5005000000000000000000`

**Fórmula**: sua quantidade × 1000000000000000000

---

## Opção B: com hints (menos gás)

Use esta opção para economizar nos custos de gás.

### Etapa 1: obtenha os hints de resgate

Acesse HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Preencha:
- `_amount`: sua quantidade em wei (a mesma de antes)
- `_price`: o preço atual do BTC obtido no PriceFeed
- `_maxIterations`: 50

Copie os valores retornados:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Etapa 2: obtenha os hints de posição

Acesse SortedTroves → "Read as Proxy" → `findInsertPosition()`

Preencha:
- `_NICR`: use o `partialRedemptionHintNICR` da etapa 1
- `_prevId`: o endereço da sua carteira
- `_nextId`: o endereço da sua carteira

Copie os valores retornados:
- `upperHint`
- `lowerHint`

### Etapa 3: chame redeemCollateral

Volte para TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount`: [sua quantidade em wei]
- `_firstRedemptionHint`: [da etapa 1]
- `_upperPartialRedemptionHint`: [upperHint da etapa 2]
- `_lowerPartialRedemptionHint`: [lowerHint da etapa 2]
- `_partialRedemptionHintNICR`: [da etapa 1]
- `_maxIterations`: 50

---

## O que você vai receber

**Exemplo: resgate de 100 MUSD**
- Você queima: 100 MUSD
- Você recebe: o equivalente a `$99.25` em BTC (a taxa de 0,75% vai para o protocolo)

**Fórmula**: (sua quantidade de MUSD ÷ preço do BTC) × 0,9925 = BTC recebido

---

## Problemas comuns

**"Cannot redeem when TCR < MCR"**
→ O TCR do sistema está abaixo de 110%. Aguarde até que ele se recupere.

**"Unable to redeem any amount"**
→ Isso pode acontecer por vários motivos:
- Não há Troves disponíveis com índice de colateralização acima de 110%
- Os hints estão desatualizados (especificamente o hint de NICR)
- O valor do resgate deixaria o Trove alvo com menos do que a dívida mínima exigida de 1.800 MUSD
- O número máximo de iterações está baixo demais para o tamanho do resgate

**A transação fica sem gás**
→ Reduza `_maxIterations` para 10 ou divida a operação em resgates menores.

**A transação é revertida inesperadamente**
→ Obtenha hints novos e tente de novo. Talvez alguém tenha feito um resgate antes de você.

**Recebi menos do que o esperado**
→ Verifique o evento `Redemption` na sua transação. Parte do MUSD pode ter sido devolvida se o último Trove fosse ficar abaixo do mínimo de 1.800 MUSD.

---

## Dicas

- **Gere os hints imediatamente antes de resgatar**: eles ficam desatualizados se outra pessoa resgatar primeiro
- **Use a opção A para valores pequenos** (< `$10,000`): o custo de gás mais alto é insignificante
- **Use a opção B para valores grandes**: ela economiza bastante gás em resgates grandes
- **Defina um maxIterations maior para resgates maiores**:
  - Pequeno (< 10 Troves): 10
  - Médio (10-30 Troves): 50
  - Grande (30+ Troves): 100

---

## Endereços dos contratos

| Contrato | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| Token MUSD | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Todos os endereços são contratos proxy. Use sempre as abas "Read as Proxy" ou "Write as Proxy".

---

## Precisa de ajuda?

- Confira sua transação no explorador de blocos para ver os eventos e as mensagens de erro
- Entre no nosso Discord e abra um ticket: https://discord.com/invite/mezo
