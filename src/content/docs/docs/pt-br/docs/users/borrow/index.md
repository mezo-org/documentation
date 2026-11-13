---
title: Visão geral da stablecoin MUSD
description: >-
  Tudo o que você precisa saber sobre o MUSD, a stablecoin do Mezo lastreada em
  Bitcoin.
topic: users
---

## O que é o MUSD?

Historicamente, quem detém Bitcoin enfrenta uma escolha impossível: vender seu BTC para cobrir despesas, confiar a custódia dos seus bitcoins a um credor centralizado ou mantê-los indefinidamente e abrir mão da liquidez de que precisa no dia a dia.

O MUSD muda isso. Ele é uma stablecoin sem permissão (permissionless), 100% lastreada em reservas de Bitcoin, projetada para manter paridade de 1:1 com o dólar americano. Cunhe MUSD depositando BTC como colateral, gaste-o em qualquer lugar onde dólares sejam aceitos e mantenha toda a sua exposição ao Bitcoin durante todo o tempo. Quando terminar, devolva o MUSD tomado emprestado mais os juros e receba seu BTC de volta.

![O MUSD permite manter e gastar BTC](/docs/images/musd/musd-keep-and-spend-btc.png)

### Por que o MUSD?

1. **Nunca venda seu Bitcoin**: tome emprestado até 90% do valor do seu BTC. Mantenha seus sats, aproveite o patrimônio que você tem em Bitcoin e pague seu empréstimo quando quiser.
2. **Taxas fixas de 1–5%**: sua taxa de juros é fixada quando você abre o empréstimo e nunca muda. Sem taxas variáveis, sem surpresas. Compare com os 7–20% de APR dos bancos tradicionais ou os 8–9% de outras plataformas DeFi.
3. **Totalmente onchain e verificável**: cada empréstimo e cada dólar de colateral ficam visíveis onchain, 24 horas por dia, 7 dias por semana. Sem reservas opacas, sem custodiantes: apenas Bitcoin em um cofre de contrato inteligente. [Veja o colateral ao vivo no explorador do Mezo](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Sem permissão**: sem análise de crédito, sem formulários de solicitação, sem valores mínimos além do piso de 1.800 MUSD. Se você tem BTC, pode tomar emprestado.

## Como o MUSD funciona

![O ciclo de vida do MUSD](/docs/images/musd/musd-lifecycle.png)

O MUSD usa um modelo de CDP (posição de dívida colateralizada). Todo MUSD em circulação pode ser resgatado por Bitcoin, e \$1 em colateral de BTC pode ser usado para cunhar 1 MUSD.

É esse modelo de cunhagem e resgate que mantém o MUSD pareado a \$1, mesmo em mercados voláteis:

* **MUSD negociado abaixo de \$1**: arbitradores compram MUSD com desconto no mercado e o resgatam por \$1 em BTC subjacente, pagando uma taxa de resgate de 0,75%, o que continua lucrativo até o MUSD chegar a \$0,995.
* **MUSD negociado acima de \$1**: arbitradores cunham novos MUSD fornecendo BTC ao protocolo e os vendem no mercado com lucro. Isso continua lucrativo até o MUSD voltar a \$1,005.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Para garantir que a paridade se mantenha durante a volatilidade do mercado, todas as posições de empréstimo precisam manter um índice de colateralização acima de 110%. O sistema tem mecanismos de liquidação integrados e um Stability Pool para garantir isso; assim, mesmo com LTVs altos, o protocolo permanece seguro e resiliente.

Para saber em detalhes como esses mecanismos de segurança funcionam, consulte [Liquidações e resgates do MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).

### Benefícios do modelo do MUSD

**Liquidez do lado da oferta**

Ao contrário dos protocolos tradicionais de empréstimo de dois lados, que precisam de um pool de dólares preexistentes e usam taxas de juros variáveis para equilibrar oferta e demanda, o MUSD é cunhado diretamente a partir do colateral em Bitcoin. A liquidez cresce de forma orgânica à medida que mais usuários depositam BTC: o próprio sistema gera sua oferta, então sempre há liquidez disponível para novos tomadores.

**Taxas de empréstimo fixas e baixas**

Como o MUSD é cunhado, e não tomado emprestado de um pool, não há disputa por taxas que eleve os custos. O resultado: taxas fixas a partir de 1%, garantidas durante toda a vida do seu empréstimo. Isso torna o MUSD bem mais barato do que os mercados de crédito convencionais, onde as taxas são variáveis e podem disparar de forma imprevisível.

**Eficiência de capital**

O MUSD aceita um índice mínimo de colateralização de apenas 110%, o que significa que os tomadores podem acessar até 90% do valor do seu Bitcoin. Para quem detém Bitcoin, essa é a forma mais eficiente em capital de liberar liquidez sem vender. Dito isso, índices de colateralização mais altos oferecem uma margem de segurança maior; sempre considere o perfil de risco da sua posição.

## MUSD vs. finanças tradicionais

Para quem detém Bitcoin, o sistema financeiro sempre significou fazer concessões: taxas altas, custódia opaca, juros variáveis e intermediários centralizados. O MUSD traz os benefícios das finanças onchain (transparência, baixo custo e autocustódia) diretamente para o seu Bitcoin.

![MUSD vs. finanças tradicionais](/docs/images/musd/musd-vs-traditional.png)

Sem tarifas de transferência bancária, sem spreads cambiais, sem cobranças mensais pela conta. Apenas seu Bitcoin em um cofre de contrato inteligente descentralizado, trabalhando para você.

## Comparação do MUSD com as stablecoins existentes

O mercado de stablecoins é amplo e vai de stablecoins lastreadas em moeda fiduciária (USDT e USDC) a stablecoins sintéticas (USDe) e outros CDPs algorítmicos (Liquity, Sky). Embora o crescimento dessas stablecoins tenha sido notável nos últimos anos, ainda existe uma lacuna no mercado para os bitcoiners.

O MUSD busca resolver esses riscos com seu lastro exclusivamente em Bitcoin.

**Stablecoins lastreadas em moeda fiduciária**

Stablecoins lastreadas em moeda fiduciária, como USDT e USDC, representam mais de 90% do mercado atual de stablecoins. Além de irem totalmente na contramão do ethos cripto, já que são lastreadas no dólar americano, suas reservas em dólar precisam ser mantidas em segurança por uma única entidade.

A Tether, entidade emissora do USDT (~\$150 bi em oferta), nunca divulgou uma auditoria de prova de reservas. A empresa registrou um lucro de \$13 bi em 2024.

A Circle, empresa americana que emite o USDC, tem a capacidade de [bloquear endereços a seu critério](https://www.circle.com/legal/usdc-risk-factors) e [paga corretoras para manterem seu ativo](https://x.com/inkymaze/status/1907187020293980599?s=46). À medida que a economia dos EUA migra para o onchain, isso se torna um perigoso ponto de centralização.

**Stablecoins sintéticas**

Stablecoins sintéticas (por exemplo, o USDe) costumam depender de corretoras centralizadas e de soluções de custódia para manter seu valor. O risco dessa exposição ficou evidente quando a [Bybit sofreu recentemente o maior hack já registrado](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Além disso, stablecoins lastreadas sinteticamente pelo rendimento de uma operação de basis trade são imprevisíveis e não testadas. As taxas de financiamento são variáveis, e esses sistemas não foram testados contra as diversas pressões externas do mercado.

**Moedas no estilo CDP, como o USDS**

Stablecoins baseadas em CDP normalmente colateralizam suas posições com uma cesta de tokens, incluindo stablecoins lastreadas em moeda fiduciária e diversas altcoins.

Embora essa diversificação possa distribuir o risco, ela também traz desafios significativos. O colateral, muitas vezes composto por ativos voláteis, como tokens ligados ao ETH ou outras stablecoins, pode reagir de forma imprevisível sob estresse de mercado e muitas vezes é bem mais volátil do que o BTC. Isso pode comprometer a paridade da stablecoin e complicar os processos de resgate e liquidação.
