---
title: USDC Lending Vault
description: >-
  Forneça mUSDC ao mercado de empréstimos da Morpho lastreado em BTC no Mezo e
  ganhe os juros pagos pelos tomadores ou emissões de MEZO
topic: users
---

O USDC Lending Vault dá a você exposição direta a um mercado transparente de crédito lastreado em BTC. Deposite mUSDC, e seu capital é fornecido a tomadores que oferecem BTC como colateral. Os juros pagos pelos tomadores são a fonte do rendimento dos depositantes.

Nos bastidores, os depósitos vão para um Morpho Vault V2 com curadoria (o Morpho BTC-mUSDC Vault), que fornece liquidez ao mercado Morpho Blue BTC / mUSDC em seu nome. Você não interage diretamente com a Morpho: você mantém um token de participação que se valoriza à medida que os juros se acumulam.

Acesse o cofre em [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Para tomar mUSDC emprestado usando BTC como colateral, consulte [Como tomar mUSDC emprestado](/docs/pt-br/docs/users/borrow/how-to-borrow-musdc).

**Como funciona:**

- Deposite mUSDC e receba `morphoBTC-mUSDC`, um token de participação que representa seu direito sobre o cofre
- O rendimento se acumula no preço da cota: o mesmo número de cotas passa a ser resgatável por mais mUSDC com o tempo
- Os empréstimos são sobrecolateralizados em BTC (LTV de liquidação de 86%). Os ativos depositados não são re-hipotecados
- Não há depósito mínimo nem taxa do protocolo para entrar ou sair
- O APR é variável, de acordo com a demanda dos tomadores; confira a taxa atual em [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Entenda suas cotas

`morphoBTC-mUSDC` é o token de cotas do seu cofre. Alguns pontos importantes:

- **O rendimento está na taxa de câmbio, não no seu saldo.** Seu saldo de cotas continua o mesmo depois do depósito, mas cada cota passa a ser resgatável por mais mUSDC à medida que os tomadores pagam juros. Você verá a diferença quando sacar.
- **As cotas não são 1:1 com o mUSDC.** Se o cofre já tiver rendido juros, depositar 100 mUSDC dará a você menos de 100 cotas, e cada cota valerá mais de 1 mUSDC.
- **Se você fizer staking para receber emissões, seus juros serão redirecionados.** As cotas em staking ganham MEZO em vez dos juros dos tomadores. Os juros que iriam para você são redirecionados aos votantes de veBTC no gauge do Lending Vault.

---

## Detalhes do cofre

| Parâmetro | Valor |
|-----------|-------|
| Token de depósito | mUSDC |
| Token de cotas | `morphoBTC-mUSDC` |
| Mercado subjacente | Morpho Blue BTC / mUSDC |
| LTV de liquidação | 86% |
| Curador | Governança do Mezo |
| Taxa de saque | Nenhuma |
| APR atual | Variável; confira em [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Duas formas de ganhar

Assim como em outros produtos do Earn no Mezo, você escolhe como cada cota é remunerada:

- **Manter para receber juros**: mantenha `morphoBTC-mUSDC` na sua carteira. Suas cotas se valorizam à medida que os tomadores pagam juros.
- **Fazer staking para receber emissões de MEZO**: faça staking das suas cotas no gauge do Lending Vault. Você ganha MEZO; os juros que essas cotas teriam rendido vão para os votantes.

Uma mesma cota não pode render as duas coisas ao mesmo tempo, mas você pode dividir suas cotas: fazer staking de uma parte para receber emissões e manter o restante para receber juros. Depositar e fazer staking são etapas separadas no app: primeiro deposite para receber as cotas e, depois, se quiser, faça staking.

**Para sair de uma posição em staking:** tire do staking, resgate de volta para cotas do cofre e, em seguida, saque para mUSDC. Tirar do staking não faz você perder o MEZO disponível para reivindicação.

---

## Saques

Os saques devolvem seu mUSDC (mais os juros acumulados, se você estava mantendo as cotas). Como seu mUSDC é emprestado aos tomadores, o cofre só pode pagar o que está disponível no momento, ou seja, o que não foi tomado emprestado.

- O app mostra o valor **Available to withdraw** com base na liquidez atual do cofre
- Quando a utilização está alta, um saque grande pode ser atendido apenas em parte ou ficar temporariamente bloqueado até que os tomadores paguem ou entre nova liquidez
- As cotas em staking precisam ser retiradas do staking antes de poderem ser sacadas

Esse é o comportamento normal de um mercado de empréstimos, não uma falha do cofre.

---

## Riscos

### Risco de contratos inteligentes

Os fundos passam pelo adaptador do Lending Vault, pelo Morpho Vault V2 e pelo mercado Morpho Blue. Um bug ou exploit em qualquer um deles pode resultar em perda de fundos.

### Risco de iliquidez

Quando a utilização pelos tomadores está alta, talvez você não consiga sacar todo o seu mUSDC quando quiser. Forneça apenas fundos que você possa deixar temporariamente bloqueados.

### Risco do mercado de empréstimos

Os tomadores são liquidados com LTV de 86%. Em uma queda forte e rápida do BTC, pode surgir dívida incobrável, que é dividida entre os fornecedores por meio de uma queda no preço da cota; não há fundo de seguro. Sua posição também é denominada em mUSDC, então uma perda de paridade afeta seus ativos.

### Risco do curador

A governança do Mezo define em quais mercados o cofre fornece liquidez e os limites de fornecimento. As alterações de curador no Morpho Vault V2 estão sujeitas a timelock.

---

## Contratos

| Contrato | Endereço |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Adaptador do Lending Vault | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Gauge do cofre | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Para ver os detalhes do mercado Morpho Blue, consulte a [documentação da Morpho](https://docs.morpho.org/).
