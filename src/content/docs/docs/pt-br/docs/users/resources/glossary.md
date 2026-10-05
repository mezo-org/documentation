---
title: Glossário
description: Uma referência completa de A a Z dos termos usados em todo o ecossistema Mezo.
topic: users
---

Uma referência completa dos termos usados em todo o ecossistema Mezo. Para termos específicos do Mezo Earn, consulte o [Glossário do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker (formador de mercado automatizado). Um tipo de exchange descentralizada que usa pools de liquidez e fórmulas matemáticas, em vez de livros de ofertas, para determinar os preços dos ativos e executar negociações. O Mezo Pools usa um AMM no estilo da Aerodrome, com curvas de produto constante para pares voláteis e curvas estáveis para pares correlacionados. Consulte a [Visão geral do Mezo Pools](/docs/pt-br/docs/users/mezo-earn/pools).

## Explorador de blocos

Uma ferramenta web para visualizar transações, endereços e dados onchain. O explorador da mainnet do Mezo fica em [explorer.mezo.org](https://explorer.mezo.org/) e o explorador da testnet fica em [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

O multiplicador aplicado a uma posição de veBTC quando votos de veMEZO são direcionados a ela. Sem boost, o veBTC opera em 1x. Com o boost máximo, o veBTC opera em 5x. O boost depende da sua participação relativa no total de veBTC e no total de veMEZO do sistema. Consulte [Mecanismo de boost](/docs/pt-br/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Peso com boost

O peso de voto combinado quando veBTC e veMEZO são pareados. É calculado multiplicando o peso do seu veBTC pelo seu multiplicador de boost (entre 1x e 5x). O peso com boost determina sua parte nas taxas e sua influência sobre as emissões.

## BTC

Bitcoin. O BTC é o token de gás nativo do Mezo (com 18 casas decimais) e o principal colateral para cunhar [MUSD](#musd). Todas as transações no Mezo são pagas em BTC.

## Carteira BTC

Uma carteira nativa de Bitcoin usada para depositar BTC diretamente no Mezo. As carteiras compatíveis incluem UniSat, OKX e Xverse. Os formatos de endereço compatíveis são Legacy (P2PKH), Native SegWit (P2WPKH) e Nested SegWit (P2SH-P2WPKH). Consulte [Depositar ativos](/docs/pt-br/docs/users/getting-started/deposit-assets).

## Chain ID

Um identificador numérico de uma rede blockchain. A Mezo Mainnet usa o chain ID `31612` e a Mezo Testnet usa o chain ID `31611`. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## Chain Splitter

O primeiro splitter na hierarquia de emissões. Controla qual porcentagem das emissões de MEZO vai para os validadores (20%) e qual vai para o restante do ecossistema (80%). Atualmente, essa proporção é fixa e bloqueada pela governança. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Cliff

Um período de espera antes que os tokens comecem a ser desbloqueados. No cronograma de vesting do Mezo, as alocações da equipe e dos investidores têm um cliff de 1 ano a partir do TGE, o que significa que nenhum token é desbloqueado durante os primeiros 12 meses. Consulte [Distribuição de tokens](/docs/pt-br/docs/users/mezo/token-distribution).

## Colateral

Ativos dados em garantia de um empréstimo. No Mezo, o BTC é depositado como colateral para tomar [MUSD](#musd) emprestado. Se o valor do colateral cair demais em relação à dívida, a posição poderá ser [liquidada](#liquidação). Consulte [Tomar emprestado e cunhar MUSD](/docs/pt-br/docs/users/borrow/mint-musd).

## Excedente de colateral

O colateral excedente que sobra depois que um [Trove](#trove) é totalmente resgatado. Esse excedente é enviado a um contrato de custódia para que o tomador o reivindique. Consulte [Liquidações e resgates de MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).

## Índice de colateralização (ICR)

Individual Collateralization Ratio (índice de colateralização individual). A relação entre o valor em dólares do colateral de um Trove e sua dívida total. Por exemplo, se o seu colateral em BTC vale \$13.000 e sua dívida é de \$10.000, seu ICR é de 130%. Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## CometBFT

O mecanismo de consenso por trás do Mezo, antes conhecido como Tendermint. O CometBFT oferece consenso tolerante a falhas bizantinas (BFT), permitindo finalidade rápida dos blocos na rede Mezo.

## Cosmos SDK

O framework modular usado para construir a blockchain do Mezo. O Cosmos SDK fornece a camada de aplicação, enquanto o [CometBFT](#cometbft) cuida do consenso. Essa arquitetura permite que o Mezo ofereça tanto funcionalidades nativas do Cosmos quanto compatíveis com a [EVM](#evm).

## Índice de colateralização crítico (CCR)

O limite de colateral de todo o sistema, definido em 150%. Quando o índice de colateralização total (TCR) cai abaixo do CCR, o sistema entra em [Recovery Mode](#recovery-mode). Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## dApp

Decentralized Application (aplicativo descentralizado). Um aplicativo de software executado em uma blockchain, e não em servidores centralizados. Desenvolvedores podem criar dApps no Mezo usando as ferramentas padrão da EVM. Consulte [Requisitos para dApps](/docs/pt-br/docs/developers/getting-started/dapp-requirements).

## Decaimento

A redução gradual do peso de voto à medida que um bloqueio se aproxima da expiração. O poder de voto do veBTC e do veMEZO decai linearmente ao longo do tempo. Você pode redefinir o decaimento estendendo seu bloqueio. Consulte a [Visão geral do veBTC](/docs/pt-br/docs/users/mezo-earn/lock/vebtc) e a [Visão geral do veMEZO](/docs/pt-br/docs/users/mezo-earn/lock/vemezo).

## Delegador

Um participante que delega seu stake ou poder de voto a um [validador](#validador). Os validadores podem compartilhar recompensas com os delegadores, embora isso não seja obrigatório.

## Ecosystem Splitter

O segundo splitter na hierarquia de emissões. Divide as emissões que não vão para os validadores entre os [gauges de staking](#gauge-de-staking) (90%) e os [gauges sem staking](#gauge-sem-staking) (10%), sendo que estes últimos financiam o [MEZO Gauges](#mezo-gauge). Definido por votação com veBTC. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Emissões

Novos tokens MEZO distribuídos a cada época para os gauges de staking, para os validadores e para os detentores de veMEZO (como rebases). As emissões seguem um cronograma de halving inspirado no Bitcoin, começando em 25% anualizados e caindo para 2% após o ano 8. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Época

Um ciclo de 7 dias que rege a votação e a distribuição de recompensas no Mezo Earn. As épocas começam toda quinta-feira às 00:00 UTC. Os votos não são transferidos de uma época para outra. Consulte a [Visão geral do veBTC](/docs/pt-br/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Uma interface padrão para tokens fungíveis em blockchains compatíveis com a EVM. Os tokens transferidos pela ponte do Ethereum para o Mezo são representados como tokens mERC-20 (por exemplo, mUSDC, mUSDT). Consulte [Pontes](/docs/pt-br/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine (Máquina Virtual Ethereum). O ambiente de execução de contratos inteligentes em blockchains compatíveis com o Ethereum. O Mezo é compatível com a EVM, o que significa que os desenvolvedores podem implantar contratos Solidity usando ferramentas conhecidas, como Hardhat e Foundry. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## Carteira EVM

Uma carteira compatível com o Ethereum (por exemplo, MetaMask, Rabby) usada para interagir com a camada EVM do Mezo. As carteiras EVM são usadas para interações com dApps, swaps e gerenciamento de posições no Mezo. Consulte [Conecte sua carteira](/docs/pt-br/docs/users/getting-started/connect).

## Faucet

Um serviço que distribui pequenas quantidades de tokens de testnet para fins de desenvolvimento. O faucet da testnet do Mezo fornece BTC de teste para implantar e testar dApps na Mezo Testnet.

## Compensação de gás

Um reembolso de 200 MUSD pago a quem chama uma função de [liquidação](#liquidação), junto com 0,5% do colateral liquidado. Isso garante que as liquidações continuem lucrativas para quem as executa, mesmo em períodos de alta atividade na rede. Os 200 MUSD são deduzidos quando um empréstimo é aberto e devolvidos quando o empréstimo é fechado normalmente. Consulte [Arquitetura do MUSD](/docs/pt-br/docs/users/borrow/architecture-and-terminology).

## Gauge

Um contrato inteligente que recebe e distribui recompensas com base nos votos. Quanto mais peso de voto um gauge recebe, maior é a sua parte nas emissões de MEZO daquela época. Os tipos de gauge incluem [gauges de staking](#gauge-de-staking), [gauges de boost do veBTC](#gauge-de-boost-do-vebtc) e [gauges sem staking](#gauge-sem-staking), como o [MEZO Gauges](#mezo-gauge). Consulte o [Glossário do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview/glossary).

## Taxa de juros global

Uma taxa de juros única, definida pela governança, que se aplica a todos os novos empréstimos em MUSD. Depois que um empréstimo é aberto, ele mantém a taxa com que foi criado, mesmo que a taxa global mude. Os usuários podem fazer um [refinanciamento](#refinanciamento) para adotar a taxa global vigente. Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## Governança

O sistema por meio do qual os detentores de veBTC definem os parâmetros do protocolo e as emissões. O veMEZO aumenta o poder de voto, mas não tem direitos de governança próprios. Consulte [Governança](/docs/pt-br/docs/users/mezo/governance).

## Cronograma de halving

O modelo inspirado no Bitcoin que rege as emissões de MEZO. A taxa de emissão cai pela metade aproximadamente a cada 2 anos: 25% nos anos 0-2, 12,5% nos anos 2-4, 6,25% nos anos 4-8 e, depois, se estabiliza em 2% perpetuamente. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Perda impermanente

A perda potencial que um provedor de liquidez sofre quando a relação de preços entre os ativos do pool muda, em comparação com simplesmente mantê-los. Ela é inerente aos pools baseados em AMM e é mais acentuada em [pools voláteis](#pool-volátil).

## Incentivos

Recompensas publicadas em gauges para atrair votos. Protocolos ou usuários depositam incentivos (em qualquer token ERC-20) para atrair poder de voto para gauges específicos. Os incentivos criam o [mercado de correspondência](#mercado-de-correspondência) entre os detentores de veBTC e de veMEZO. Consulte a [Visão geral da votação](/docs/pt-br/docs/users/mezo-earn/vote).

## Liquidação

O fechamento forçado de um [Trove](#trove) subcolateralizado. Um Trove pode ser liquidado quando seu [ICR](#índice-de-colateralização-icr) cai abaixo de 110%. O limite de liquidação continua em 110% mesmo durante o [Recovery Mode](#recovery-mode). O [Stability Pool](#stability-pool) absorve a dívida, e o colateral liquidado é distribuído entre os depositantes do Stability Pool. Consulte [Liquidações e resgates de MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).

## Pool de liquidez

Um contrato inteligente que mantém reservas de dois tokens e permite a negociação descentralizada. Os usuários depositam ativos em um pool para se tornarem provedores de liquidez e ganharem taxas de negociação. Consulte a [Visão geral do Mezo Pools](/docs/pt-br/docs/users/mezo-earn/pools).

## Bloqueio

O ato de comprometer BTC ou MEZO por um período definido para receber [veBTC](#vebtc) ou [veMEZO](#vemezo). Bloqueios mais longos concedem um peso de voto inicial maior. Os bloqueios de veBTC vão de 1 a 28 dias; os de veMEZO, de 1 semana a 4 anos. Consulte a [Visão geral do veBTC](/docs/pt-br/docs/users/mezo-earn/lock/vebtc) e a [Visão geral do veMEZO](/docs/pt-br/docs/users/mezo-earn/lock/vemezo).

## Token LP

Liquidity Provider token (token de provedor de liquidez). Um token ERC-20 recebido quando você deposita ativos em um [pool de liquidez](#pool-de-liquidez). Os tokens LP representam sua participação proporcional nas reservas do pool e dão direito a uma parte das taxas de negociação. Consulte a [Visão geral do Mezo Pools](/docs/pt-br/docs/users/mezo-earn/pools).

## Mainnet

A rede blockchain de produção, onde ativos e transações reais são processados. A Mezo Mainnet tem o chain ID `31612` e usa BTC para o gás. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## Mercado de correspondência

O mecanismo econômico em que os detentores de veBTC podem atrair votos de veMEZO publicando [incentivos](#incentivos) em seus gauges de boost, e os detentores de veMEZO podem obter rendimento votando em gauges com incentivos atrativos. Consulte [Mercado de correspondência](/docs/pt-br/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

O token nativo do Mezo, usado para aumentar o poder de voto e influenciar o destino das taxas do protocolo e dos incentivos. O MEZO pode ser bloqueado como [veMEZO](#vemezo) para multiplicar o peso de voto do veBTC em até 5x e ganhar recompensas de rebase. A oferta total na gênese é de 1.000.000.000 MEZO. Consulte a [Visão geral do MEZO](/docs/pt-br/docs/users/mezo).

## Mezo App

A principal interface web, em [mezo.org](https://mezo.org), para interagir com a rede Mezo. No Mezo App, os usuários podem depositar ativos, usar a ponte, tomar MUSD emprestado, fornecer liquidez, bloquear tokens e votar em gauges.

## Mezo Borrow

O recurso do Mezo App que permite aos usuários depositar BTC como colateral e tomar [MUSD](#musd) emprestado com base nele. Cada posição de empréstimo é chamada de [Trove](#trove). Consulte [Tomar emprestado e cunhar MUSD](/docs/pt-br/docs/users/borrow/mint-musd).

## Mezo Bridge

A ponte nativa para depositar e sacar ativos entre o Mezo e o Ethereum ou o Bitcoin. É compatível com BTC, tBTC e tokens mERC-20. Consulte [Pontes](/docs/pt-br/docs/users/mainnet/bridges).

## Mezo Earn

O sistema completo de ganhos e governança do Mezo, que abrange bloqueio ([veBTC](#vebtc), [veMEZO](#vemezo)), votação em [gauges](#gauge), fornecimento de liquidez em [pools](#pool-de-liquidez) e depósitos em [cofres](#musd-savings-vault). Consulte a [Visão geral do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview).

## MEZO Gauge

Um [gauge sem staking](#gauge-sem-staking) em que os detentores de veMEZO votam para direcionar emissões de MEZO a pools de liquidez de MUSD fora do Mezo: Curve e Uniswap no Ethereum e Aerodrome na Base. É financiado pelo ramo sem staking das emissões (atualmente 8% das recompensas de emissão semanais). Consulte [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

O marketplace do Mezo App para swaps de tokens. Usa o [contrato roteador](#contrato-roteador) para encaminhar as negociações pelos [pools de liquidez](#pool-de-liquidez) disponíveis.

## Mezo Passport

Um pacote para desenvolvedores, criado sobre o RainbowKit, que oferece opções de conexão tanto para carteiras Bitcoin quanto para carteiras EVM. O Mezo Passport se integra ao viem e ao wagmi para simplificar o gerenciamento de carteiras. Consulte [Configurar o Mezo Passport](/docs/pt-br/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

O sistema de pools de liquidez do Mezo, que funciona como reservas de liquidez onchain automatizadas para swaps de tokens. Os pools usam um AMM no estilo da Aerodrome e são de dois tipos: [voláteis](#pool-volátil) e [estáveis](#pool-estável). Consulte a [Visão geral do Mezo Pools](/docs/pt-br/docs/users/mezo-earn/pools).

## Índice de colateralização mínimo (MCR)

O índice de colateralização mínimo exigido para um [Trove](#trove), definido em 110%. Se o [ICR](#índice-de-colateralização-icr) de um Trove cair abaixo do MCR, ele se torna elegível para [liquidação](#liquidação). Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## MUSD

A stablecoin do Mezo lastreada em Bitcoin, atrelada a \$1 USD. Os usuários tomam MUSD emprestado depositando BTC como colateral em um [Trove](#trove). A paridade é mantida por meio de [resgates](#resgate) e do [Stability Pool](#stability-pool). Consulte a [Visão geral do MUSD](/docs/pt-br/docs/users/borrow).

## MUSD Bridge

A ponte cross-chain para transferir MUSD entre o Mezo e o Ethereum, baseada no protocolo [Native Token Transfer (NTT)](#wormhole-ntt) da Wormhole. Consulte [MUSD Bridge](/docs/pt-br/docs/users/borrow/musd-bridge).

## MUSD Savings Rate Gauge

Um [gauge de staking](#gauge-de-staking) para o [MUSD Savings Vault](#musd-savings-vault). Os usuários que depositam MUSD no cofre de poupança podem fazer staking dos seus tokens de recibo sMUSD para ganhar emissões de MEZO, enquanto quem vota com veBTC nesse gauge ganha rendimento em MUSD proveniente das taxas do protocolo. Consulte [Cofres](/docs/pt-br/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

O produto de poupança nativo do Mezo para detentores de MUSD. Deposite MUSD para ganhar uma parte das taxas do protocolo geradas pela atividade de empréstimos (juros, taxas de emissão, taxas de refinanciamento). Você recebe sMUSD como token de recibo que representa sua participação. Consulte [Cofres](/docs/pt-br/docs/users/mezo-earn/vaults).

## Gauge sem staking

Um [gauge](#gauge) sem token de staking, no qual se vota com veMEZO. Em vez de pagar quem faz staking no Mezo, suas emissões são encaminhadas a um destino definido pelo próprio gauge; no caso do [MEZO Gauges](#mezo-gauge), um pool de liquidez em outra cadeia. Votar em um deles é independente da votação em gauges com veBTC e da correspondência de [boost](#boost). Consulte [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges).

## Nó

Um computador que executa o cliente da cadeia Mezo (mezod) e participa da rede. Os tipos de nó incluem nós [validadores](#validador) (consenso e produção de blocos), nós RPC (endpoints de API para dApps) e nós seed (inicialização da rede). Consulte o [Validator Kit](/docs/pt-br/docs/developers/mezo-nodes/validator-kit).

## Oráculo

Um serviço que fornece dados externos (como preços de ativos) a contratos inteligentes onchain. O Mezo usa o Skip Connect como oráculo principal, integrado diretamente aos nós validadores. Oráculos de terceiros, como Pyth, Stork e Supra, também estão disponíveis. Consulte [Infraestrutura de oráculos](/docs/pt-br/docs/developers/architecture/oracles).

## Taxa de originação

Uma taxa única cobrada ao tomar MUSD emprestado, calculada como 0,1% do valor emprestado. A taxa é adicionada ao principal do empréstimo e acumula juros. Uma taxa de originação de refinanciamento (uma fração da taxa normal) é cobrada ao fazer um [refinanciamento](#refinanciamento). Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value (valor controlado pelo protocolo). Um contrato que gerencia as taxas cobradas nos empréstimos e refinanciamentos em MUSD. As taxas são divididas entre o pagamento do empréstimo de bootstrap e o sistema de gauges. Depois que o empréstimo de bootstrap é quitado, as taxas se acumulam como liquidez de propriedade do protocolo no [Stability Pool](#stability-pool). Consulte [Arquitetura do MUSD](/docs/pt-br/docs/users/borrow/architecture-and-terminology).

## Poke

Uma transação que atualiza o peso com boost de uma posição de veBTC. É necessária após alterações nos votos de veMEZO, extensões do bloqueio ou adição de BTC. Sem fazer poke, as alterações no boost não entram em vigor. Consulte o [Glossário do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview/glossary).

## Pool Factory

O contrato inteligente que implanta novos pools de liquidez no Mezo. Atualmente é gerenciado pela equipe do Mezo, com planos de abrir a criação de pools sem permissão no futuro. Endereço na mainnet: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Consulte [Mezo Pools (desenvolvedores)](/docs/pt-br/docs/developers/features/mezo-pools).

## Portal Bridge

A interface de usuário em [portalbridge.com](https://portalbridge.com/) para transferir MUSD pela ponte entre o Mezo e o Ethereum usando o protocolo Wormhole NTT. Consulte [MUSD Bridge](/docs/pt-br/docs/users/borrow/musd-bridge).

## Feed de preços

Dados onchain fornecidos por [oráculos](#oráculo) que informam o preço de mercado atual dos ativos. O Mezo usa o Skip Connect para determinar os preços dos ativos durante o consenso dos blocos e gravá-los no estado onchain. Consulte [Infraestrutura de oráculos](/docs/pt-br/docs/developers/architecture/oracles).

## Rebase

Distribuições antidiluição para os detentores de veMEZO, provenientes das emissões semanais de MEZO. Quando o índice de bloqueio (oferta de veMEZO / oferta total de MEZO) está baixo, uma parte maior das emissões vai para os rebases, protegendo da diluição quem bloqueou primeiro. À medida que mais MEZO é bloqueado, a parte destinada aos rebases diminui. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Recovery Mode

Um estado de segurança temporário que é ativado quando o índice de colateralização total (TCR) de todo o sistema cai abaixo do [CCR](#índice-de-colateralização-crítico-ccr) de 150%. Durante o Recovery Mode, o limite de liquidação continua em 110% (diferentemente do Liquity v1, o MUSD não amplia as liquidações durante o Recovery Mode). No entanto, não é possível abrir novos empréstimos abaixo de 150%, e o refinanciamento fica bloqueado. Consulte [Liquidações e resgates de MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).

## Resgate

O ato de trocar MUSD por um valor equivalente em dólares de BTC diretamente com o protocolo. Qualquer detentor de MUSD pode fazer um resgate, seja ou não um tomador de empréstimo. Os resgates atingem primeiro o [Trove](#trove) com o menor índice de colateralização. Esse mecanismo ajuda a manter a paridade do MUSD em \$1. Consulte [Liquidações e resgates de MUSD](/docs/pt-br/docs/users/borrow/liquidation-mechanics).

## Refinanciamento

O processo de atualizar a taxa de juros de um empréstimo para a [taxa de juros global](#taxa-de-juros-global) vigente. O refinanciamento tem uma taxa de originação reduzida, mas evita a necessidade de fechar e reabrir um empréstimo. Você também pode refinanciar para ampliar sua linha de crédito caso o BTC tenha se valorizado. Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## Contrato roteador

O contrato inteligente que encaminha os swaps de tokens pelos [pools de liquidez](#pool-de-liquidez) disponíveis no Mezo. Os usuários aprovam tokens para o roteador e chamam as funções de swap com os parâmetros desejados. Endereço na mainnet: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Consulte [Mezo Pools (desenvolvedores)](/docs/pt-br/docs/developers/features/mezo-pools).

## Endpoint RPC

Uma URL de rede que os aplicativos usam para se comunicar com a blockchain do Mezo. Os endpoints RPC são compatíveis com os métodos JSON-RPC padrão do Ethereum. Há vários provedores disponíveis para a mainnet, incluindo Boar, Imperator, Validation Cloud e dRPC. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## Provedor de RPC

Um serviço que opera [endpoints RPC](#endpoint-rpc) para a rede Mezo. Provedores como Boar, Imperator, Validation Cloud e dRPC oferecem conexões HTTPS e WebSocket para a mainnet. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## Slippage

A diferença entre o preço esperado de uma negociação e o preço real de execução. O slippage é maior em pools com menos liquidez ou em negociações maiores. Os [pools estáveis](#pool-estável) foram projetados para minimizar o slippage em pares de ativos correlacionados.

## Splitter

Um contrato que divide as emissões de MEZO entre dois destinos. Atualmente, as proporções de divisão são fixas e bloqueadas pela governança. Consulte [Chain Splitter](#chain-splitter) e [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Uma reserva de MUSD que serve como primeira linha de defesa contra [liquidações](#liquidação). Os usuários depositam MUSD no Stability Pool e, em troca, recebem uma parte do colateral liquidado. O contrato [PCV](#pcv) abastece o pool com um depósito inicial de 100M MUSD. Consulte [Conceitos-chave do MUSD](/docs/pt-br/docs/users/borrow/concepts).

## Pool estável

Um [pool de liquidez](#pool-de-liquidez) otimizado para negociações entre ativos com valores altamente correlacionados, como MUSD e USDC. Os pools estáveis usam uma fórmula especializada para oferecer [slippage](#slippage) muito menor e cobram uma taxa de negociação de 0,02%. Consulte [Taxas dos pools](/docs/pt-br/docs/users/mezo-earn/pools/pools-fees).

## Gauge de staking

Um [gauge](#gauge) vinculado a um token de staking (como tokens LP ou tokens de recibo sMUSD). Quem faz staking ganha emissões de MEZO; quem vota com veBTC no gauge ganha taxas de negociação ou receita do protocolo. Os gauges de staking recebem aproximadamente 72% das emissões líquidas. Consulte o [Glossário do Mezo Earn](/docs/pt-br/docs/users/mezo-earn/overview/glossary).

## Subgraph

Uma camada de dados indexada e consultável para dados de blockchain, acessada por meio de APIs GraphQL. O Mezo usa o Goldsky para a implantação de subgraphs, permitindo que os dApps consultem com eficiência dados onchain como transferências, atividade dos pools e estado do protocolo. Consulte [Implantação de subgraphs](/docs/pt-br/docs/developers/subgraphs).

## Taxas de swap

Taxas cobradas em cada swap de tokens em um [pool de liquidez](#pool-de-liquidez). Os pools voláteis cobram 0,30% e os pools estáveis cobram 0,02%. As taxas são cobradas no token de entrada e mantidas em um contrato PoolFees separado para que os provedores de liquidez as reivindiquem. Consulte [Taxas dos pools](/docs/pt-br/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Um wrapper descentralizado de Bitcoin criado pela Thesis e baseado na [Threshold Network](#threshold-network). O tBTC tem lastro 1:1 em Bitcoin nativo e é a forma que o BTC assume quando é transferido pela ponte para redes compatíveis com o Ethereum. No Mezo, o BTC depositado passa pela infraestrutura de custódia do tBTC. Consulte [Arquitetura do MUSD](/docs/pt-br/docs/users/borrow/architecture-and-terminology).

## Emissões de cauda

A taxa perpétua de emissão anual de 2% de MEZO que começa após o ano 8 do [cronograma de halving](#cronograma-de-halving). As emissões de cauda fornecem incentivos contínuos e por tempo indeterminado para validadores, provedores de liquidez e participantes da governança. Consulte [Cronograma de emissões](/docs/pt-br/docs/users/mezo/emissions).

## Testnet

Uma rede de testes em que os desenvolvedores podem implantar e testar aplicativos sem usar ativos reais. A Mezo Testnet tem o chain ID `31611`. Consulte [Configurar seu ambiente](/docs/pt-br/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event (evento de geração de tokens). O momento em que os tokens MEZO foram criados e distribuídos pela primeira vez. As alocações da comunidade e da fundação foram desbloqueadas no TGE, enquanto as alocações da equipe e dos investidores estão sujeitas a um cliff de 1 ano e a um vesting linear de 3 anos. Consulte [Distribuição de tokens](/docs/pt-br/docs/users/mezo/token-distribution).

## Threshold Network

Uma rede descentralizada que alimenta a ponte do [tBTC](#tbtc). A Threshold opera um conjunto descentralizado de signatários que já transferiu pela ponte mais de 28.000 bitcoins desde o início de 2020. Consulte [Arquitetura do MUSD](/docs/pt-br/docs/users/borrow/architecture-and-terminology).

## Distribuição de tokens

A alocação da oferta de gênese de 1.000.000.000 MEZO: comunidade (40%), investidores e parceiros (30%), equipe (20%) e fundação (10%). Todo o vesting é concluído em até 36 meses após o [TGE](#tge). Consulte [Distribuição de tokens](/docs/pt-br/docs/users/mezo/token-distribution).

## Taxas de negociação

Consulte [Taxas de swap](#taxas-de-swap).

## Trove

Uma posição de dívida colateralizada no Mezo, vinculada a um único endereço Ethereum. Os usuários abrem um Trove depositando BTC e tomando [MUSD](#musd) emprestado com base nele. Também chamado de "CDP" em protocolos semelhantes. Consulte [Tomar emprestado e cunhar MUSD](/docs/pt-br/docs/users/borrow/mint-musd).

## Validador

Um operador de nó que participa do consenso e da produção de blocos na rede Mezo. Os validadores executam o cliente mezod, protegem a cadeia e recebem emissões de MEZO por meio do Chain Splitter. Consulte [Validadores do Mezo](/docs/pt-br/docs/developers/mezo-nodes/validators).

## Validator Kit

Um kit de ferramentas completo para implantar e gerenciar nós do Mezo. É compatível com Docker, daemon nativo, Kubernetes e implantação em nuvem. Inclui modelos de configuração, monitoramento e scripts de automação. Consulte o [Guia do Validator Kit](/docs/pt-br/docs/developers/mezo-nodes/validator-kit).

## veBTC

BTC em vote-escrow (bloqueado para votação). Um NFT que representa Bitcoin bloqueado e concede poder de voto e o direito de ganhar taxas no Mezo Earn. O peso de voto decai linearmente ao longo do período de bloqueio. O bloqueio máximo é de 28 dias. Consulte a [Visão geral do veBTC](/docs/pt-br/docs/users/mezo-earn/lock/vebtc).

## Gauge de boost do veBTC

Um [gauge](#gauge) vinculado a um NFT veBTC específico. Os detentores de veMEZO votam nesses gauges para fornecer [boost](#boost) àquela posição de veBTC em troca de [incentivos](#incentivos). Consulte [Mercado de correspondência](/docs/pt-br/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

MEZO em vote-escrow (bloqueado para votação). Um NFT que representa tokens MEZO bloqueados, capaz de aplicar [boost](#boost) ao poder de voto do veBTC em até 5x e que vota por conta própria em [gauges de boost do veBTC](#gauge-de-boost-do-vebtc) e no [MEZO Gauges](#mezo-gauge). Ele não tem peso de governança próprio e não pode votar em [gauges de staking](#gauge-de-staking) sem veBTC. O bloqueio máximo é de 4 anos. Consulte a [Visão geral do veMEZO](/docs/pt-br/docs/users/mezo-earn/lock/vemezo).

## Cronograma de vesting

O cronograma ao longo do qual as alocações de tokens bloqueadas se tornam disponíveis gradualmente. Todo o vesting de MEZO é concluído em até 36 meses após o [TGE](#tge). As alocações da equipe e dos investidores têm um [cliff](#cliff) de 1 ano, seguido de 2 anos de desbloqueio mensal linear. Consulte [Distribuição de tokens](/docs/pt-br/docs/users/mezo/token-distribution).

## Pool volátil

Um [pool de liquidez](#pool-de-liquidez) projetado para pares de ativos com preços não correlacionados, como BTC e MUSD. Os pools voláteis usam uma fórmula de produto constante (x * y = k) e cobram uma [taxa de swap](#taxas-de-swap) de 0,30%. Consulte [Taxas dos pools](/docs/pt-br/docs/users/mezo-earn/pools/pools-fees).

## Peso de voto

A influência que uma posição tem ao votar em gauges. Para o veBTC, é calculado como o BTC bloqueado multiplicado pela duração restante do bloqueio, dividido pela duração máxima do bloqueio (28 dias). Para o veMEZO, aplica-se a mesma fórmula, mas com bloqueio máximo de 4 anos. Consulte a [Visão geral da votação](/docs/pt-br/docs/users/mezo-earn/vote).

## Wormhole

Um protocolo de mensagens cross-chain que alimenta a [MUSD Bridge](#musd-bridge). A Wormhole permite transferências seguras de tokens entre o Mezo e o Ethereum. Consulte [MUSD Bridge](/docs/pt-br/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. O protocolo específico da Wormhole usado na [MUSD Bridge](#musd-bridge). O NTT mantém a fungibilidade do token bloqueando tokens na cadeia de origem e cunhando-os na de destino, mantendo a oferta total constante entre as cadeias. Consulte [MUSD Bridge](/docs/pt-br/docs/users/borrow/musd-bridge).
