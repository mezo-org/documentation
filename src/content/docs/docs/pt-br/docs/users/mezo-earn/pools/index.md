---
title: Visão geral do Mezo Pools
description: Conheça o Mezo Pools e saiba como fornecer liquidez
topic: users
---

O [Mezo Pools](https://mezo.org/explore/pools) é o motor central do ecossistema Mezo e funciona como um conjunto de reservas de liquidez automatizadas e onchain para o Mezo Pools. Cada pool contém um par de dois tokens distintos, o que permite negociações instantâneas e descentralizadas. Em vez de depender de um livro de ofertas tradicional para casar compradores e vendedores, os usuários negociam diretamente contra a liquidez mantida no pool.

![Diagrama do Mezo Pools](/docs/images/mainnet/Mezo%20Pools.png)

O [Mezo Pools](https://mezo.org/explore/pools) permite ganhar taxas fornecendo liquidez para swaps de tokens. Quando você deposita dois tokens em um pool, os traders podem fazer swaps entre eles, e você ganha uma parte das taxas de negociação.

Quando um usuário deposita um valor proporcional dos tokens exigidos em um pool, ele se torna um provedor de liquidez (LP). Essa ação é fundamental para o funcionamento do sistema, pois aprofunda a liquidez disponível e reduz o slippage de preço para os traders. Em troca da contribuição, os LPs recebem tokens LP. Esses tokens LP representam a participação proporcional do LP no total de ativos do pool. Eles dão ao detentor, de forma algorítmica, direito a uma parte das taxas de negociação geradas pelo pool e servem como mecanismo para resgatar os ativos depositados subjacentes.

O Mezo oferece três tipos de pools, otimizados para diferentes casos de uso:

* **Pools voláteis**: criados para pares de ativos com preços não correlacionados, como BTC e MUSD.
* **Pools estáveis**: projetados para ativos com valores altamente correlacionados, como MUSD e USDC. Eles usam uma fórmula especializada para oferecer um slippage muito menor em negociações entre ativos semelhantes.
* **Pools de liquidez concentrada (CL)**: permitem fornecer liquidez dentro de uma faixa de preço personalizada em vez de em toda a curva, o que melhora significativamente a eficiência do capital. As posições de CL são representadas como NFTs (ERC-721) em vez de tokens LP fungíveis. Consulte [Liquidez concentrada](/docs/pt-br/docs/users/mezo-earn/pools/concentrated-liquidity) para mais detalhes.

## Entenda os tokens LP

Quando você deposita ativos em um [pool do Mezo](https://mezo.org/explore/pools), o contrato cunha e envia tokens LP para você. São tokens ERC20 padrão que quantificam sua participação proporcional no total de reservas do pool.

A quantidade de tokens LP que você recebe se baseia na sua participação no pool. No primeiríssimo depósito de um novo pool, essa quantidade é calculada como sqrt(x * y), em que x e y são as quantidades dos dois tokens depositados.

Em cada swap executado pelo pool, uma taxa de negociação (por exemplo, 0,30% nos pools voláteis) é cobrada sobre o ativo de entrada. Essa taxa é separada instantaneamente em um contrato à parte, e os provedores de liquidez daquele pool específico podem reivindicá-la.

Para recuperar sua parte dos ativos subjacentes, você precisa "queimar" seus tokens LP; no entanto, você pode reivindicar suas taxas a qualquer momento. Quando você recupera os ativos depositados inicialmente, seus tokens LP são devolvidos ao contrato inteligente em troca da sua parte proporcional dos dois tokens do pool.

## A vantagem do Mezo Pools

O protocolo Mezo foi projetado sem depender de estruturas financeiras tradicionais, como os livros de ofertas. Embora os livros de ofertas sejam eficazes nas finanças centralizadas, eles apresentam desafios significativos em um ambiente descentralizado, muitas vezes exigindo gestão ativa por formadores de mercado profissionais e infraestrutura centralizada para hospedar e casar ordens.

O [Mezo Pools](https://mezo.org/explore/pools) foi projetado especificamente para um ambiente descentralizado e aproveita os pontos fortes exclusivos da tecnologia blockchain:

* **Autônomo e sem permissão**: cada pool é um contrato inteligente de acesso aberto. Qualquer usuário ou aplicação pode interagir com ele sem permissão, chamando funções como swap() para negociar ou mint() para fornecer liquidez.
* **Recursos avançados**: o pool do Mezo funciona como um oráculo TWAP (preço médio ponderado pelo tempo) onchain, fornecendo dados de preço resistentes a manipulação para outros protocolos. Os pools também oferecem flash loans, permitindo estratégias DeFi complexas em uma única transação.

Essas vantagens de arquitetura são a base da missão principal do Mezo: construir uma economia circular robusta para o Bitcoin. Ao permitir que os usuários peguem seu BTC, usem-no como colateral (por exemplo, pelo Mezo Borrow para cunhar MUSD) e depois aloquem os dois ativos em pools de liquidez, o protocolo transforma o Bitcoin de uma reserva de valor passiva em um instrumento ativo que gera rendimento. Isso cria um ciclo autossustentável em que fornecer liquidez não só gera retornos para o usuário como também aprofunda o mercado de ativos lastreados em Bitcoin, tornando todo o ecossistema mais líquido e útil.

## Primeiros passos

### Como começar em 3 passos simples

Pronto para se tornar um provedor de liquidez? É fácil começar. Acesse o [Mezo Pools](https://mezo.org/explore/pools) para dar o primeiro passo.

1. **Prepare seus ativos**: para fornecer liquidez, você precisa de um valor igual dos dois ativos de um par (por exemplo, `$50 of BTC` e `$50 of MUSD`).
   * Precisa de MUSD? Cunhe MUSD usando seu BTC no Mezo Borrow.
   * Precisa de outros ativos ou de MUSD? Use o [Mezo Pools](https://mezo.org/explore/pools) para negociá-los.
2. **Adicione liquidez**: acesse a [página Pools no Mezo Explore](https://mezo.org/explore/pools). Selecione o pool desejado, informe a quantidade que deseja depositar e confirme a transação. Você receberá tokens LP na sua carteira, que representam sua participação no pool.
3. **Faça staking e ganhe (em breve)**: quando o staking estiver disponível, basta voltar à [página Pools](https://mezo.org/explore/pools), selecionar sua posição e fazer staking dos seus tokens LP para começar a ganhar mais recompensas. Fique de olho.

## Recursos para desenvolvedores

Para integrar os [pools do Mezo](https://mezo.org/explore/pools) à sua aplicação, consulte [Fornecer liquidez](../../../developers/getting-started/) na nossa documentação para desenvolvedores.
