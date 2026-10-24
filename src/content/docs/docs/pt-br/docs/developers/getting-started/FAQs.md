---
title: Perguntas frequentes
topic: developers
---

#### O que é o Mezo? A proposta de valor para builders <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

O Mezo é uma plataforma financeira de Bitcoin sem permissões e sem bancos, projetada para transformar o Bitcoin de uma reserva de valor passiva em um ativo financeiro produtivo e dinâmico. A missão central da plataforma é permitir que os mais de 100 milhões de detentores de Bitcoin no mundo façam HODL com propósito, usando o valor de seus ativos sem precisar vendê-los. Isso é possível graças a uma infraestrutura robusta que viabiliza transações baratas, rápidas e seguras para uma variedade de aplicações do mundo real.

A visão final do Mezo é tornar o uso do Bitcoin supernormal: um estado em que usar Bitcoin em atividades financeiras do dia a dia é tão fluido e integrado que se torna uma parte óbvia e corriqueira da vida, como usar um cartão de débito.

Para desenvolvedores, o Mezo apresenta uma proposta de valor distinta e atraente. A Thesis, o estúdio por trás do Mezo, também é a criadora do tBTC, a maior ponte descentralizada de Bitcoin; do Acre, um protocolo de rendimento nativo em Bitcoin; e do Fold, um aplicativo de gastos para consumidores. Esse conjunto de produtos interconectados oferece aos desenvolvedores, desde o primeiro dia, um conjunto poderoso, previamente avaliado e altamente interoperável de "money legos". Essa stack integrada reduz significativamente o atrito de desenvolvimento e o risco sistêmico em comparação com outras plataformas, nas quais primitivas essenciais como pontes, stablecoins e fontes de rendimento costumam ser fornecidas por terceiros díspares e sem vínculo entre si. Ao desenvolver no Mezo, os desenvolvedores podem aproveitar um ecossistema financeiro completo e que se autorreforça, projetado para impulsionar uma nova camada de atividade econômica centrada no ativo mais seguro e descentralizado do mundo.

#### O que é o MUSD?

No centro do ecossistema Mezo está o MUSD, sua stablecoin nativa. O MUSD foi projetado para ser 100% lastreado em reservas de Bitcoin e manter uma paridade estável de 1:1 com o dólar americano. Sua função principal é servir como o meio de troca líquido que movimenta a economia do Mezo, permitindo que os usuários liberem o valor de seus Bitcoins. O mecanismo é simples: os usuários podem depositar seus Bitcoins (na forma de tBTC) em um cofre onchain seguro e cunhar MUSD tendo esse depósito como lastro. Esse MUSD recém-cunhado pode então ser usado em todo o ecossistema para uma ampla gama de atividades, incluindo pagar por bens e serviços, negociar em exchanges descentralizadas, fornecer liquidez para obter rendimento ou participar de outros protocolos DeFi.

Para desenvolvedores, o Mezo e o MUSD criam um ecossistema "com tudo incluído" que oferece vantagens estratégicas:

* **Atrito radicalmente menor com ferramentas conhecidas (EVM e RainbowKit):** o Mezo é totalmente compatível com EVM, o que permite que desenvolvedores Solidity implantem contratos existentes e usem suas ferramentas favoritas, como Hardhat e Foundry, sem nenhuma curva de aprendizado.
* **Onboarding de usuários sem atrito com o Mezo Passport:** o [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) resolve a desconexão crítica entre carteiras ao permitir que os usuários assinem transações EVM com suas carteiras Bitcoin nativas (como Xverse ou Unisat). Essa abstração de contas significa que você pode criar uma única UX limpa para alcançar toda a comunidade Bitcoin sem escrever uma lógica de carteira complexa e personalizada.
* [Primitivas financeiras poderosas com o MUSD:](https://www.npmjs.com/package/@mezo-org/passport) o [MUSD](https://mezo.org/feature/borrow) é um bloco de construção poderoso. Suas taxas de juros fixas e baixas e seu LTV alto (de até 90%) viabilizam produtos financeiros previsíveis (por exemplo, empréstimos de prazo fixo).

#### O que é uma economia circular de Bitcoin?

Uma economia circular de Bitcoin é um sistema autossustentável em que o Bitcoin é usado tanto para ganhar quanto para gastar, sem precisar ser convertido em moeda fiduciária. Ela cria um ciclo fechado em que pessoas e empresas fazem transações diretamente em BTC para salários, bens e serviços.

A combinação do Mezo com o MUSD cria um ciclo econômico que se autorreforça:

1. **Liberar:** os detentores de Bitcoin depositam seu BTC e cunham MUSD, ativando seu capital sem vender seu ativo principal.
2. **Transacionar:** eles usam esse MUSD para tudo, de trading e empréstimos a pagamentos do dia a dia.
3. **Reforçar:** essa atividade onchain gera taxas de transação (pagas em BTC), que protegem a rede e reforçam a utilidade do Bitcoin como ativo transacional, além de reserva de valor.

O Mezo fornece os trilhos e o MUSD fornece o combustível, oferecendo aos desenvolvedores uma plataforma única para criar aplicações que entregam valor concreto ao enorme e mal atendido mercado de bitcoiners.

#### Qual é a arquitetura da cadeia do Mezo?

A cadeia do Mezo foi projetada com uma arquitetura híbrida para maximizar tanto a acessibilidade para desenvolvedores quanto o desempenho da rede. Ela é uma blockchain totalmente compatível com EVM, construída com o Cosmos SDK e operando com o mecanismo de consenso CometBFT. O código-base é um fork fortemente modificado do Evmos.

Essa stack técnica oferece uma combinação poderosa de recursos:

* **Compatibilidade com EVM**: permite que a vasta comunidade global de desenvolvedores Ethereum e Solidity implante seus contratos inteligentes e aplicações descentralizadas (dApps) existentes no Mezo com pouca ou nenhuma alteração de código. Eles podem continuar usando as ferramentas maduras e familiares com que estão acostumados, incluindo MetaMask, Hardhat, Remix e Foundry, o que reduz drasticamente a barreira de entrada para desenvolver no ecossistema Bitcoin.
* **Cosmos SDK**: usar o Cosmos SDK como base dá ao Mezo soberania de cadeia, permitindo personalizar sua lógica e sua governança.

#### Qual token é usado para as taxas de gás no Mezo? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC (internamente, [via tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)).

#### Como obtenho BTC de testnet para o Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Obtenha fundos de testnet com o faucet do Mezo: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Como integro o Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​O [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) é a biblioteca oficial de conexão de carteiras, criada especificamente para oferecer uma experiência de usuário fluida e unificada na rede Mezo. Ela lida com as complexidades de conectar ao seu dApp tanto carteiras nativas de Bitcoin (como Xverse e Unisat) quanto carteiras EVM padrão (como MetaMask). Para o guia de integração mais atual e detalhado, incluindo instruções de instalação, configuração, hooks disponíveis e exemplos de código, os desenvolvedores devem consultar a [**documentação oficial do Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### Como posso obter financiamento e suporte para o meu projeto? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**A Supernormal Foundation**

​A [Supernormal Foundation](https://www.supernormal.foundation/) é a organização dedicada a construir, governar e expandir a rede Mezo e a economia do MUSD. Ela atua com um espírito movido pela comunidade e é a principal fonte de apoio formal para builders.

**Mezo Founder Program**

​O [Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) é a principal iniciativa para desenvolvedores e projetos em estágio inicial (o MVP precisa estar no ar na testnet) que querem desenvolver no Mezo e integrar o MUSD. O programa foi criado para catalisar a inovação no espaço BitcoinFi.

* **Benefícios:** equipes qualificadas recebem acesso prioritário a um conjunto completo de recursos, incluindo:
  * **Grants:** apoio financeiro para acelerar o desenvolvimento.
  * **Co-marketing:** ações de marketing conjuntas para aumentar a visibilidade do projeto.
  * **Networking:** conexões com outros builders e líderes do ecossistema.
  * **Suporte prático de integração:** assistência técnica direta para garantir uma implantação tranquila no Mezo.

​[**Inscreva-se agora**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Para projetos mais maduros ou com planos de crescimento ambiciosos, a Supernormal Foundation tem parceria com as principais firmas de venture capital **Boost VC, Draper Associates e Thesis** para oferecer um programa de aceleração dedicado. Esse programa intensivo oferece investimento inicial e suporte sob medida, incluindo mentoria aprofundada em estratégia de produto e execução de go-to-market, ajudando as equipes a percorrer o caminho de um produto funcional até um negócio escalável.

#### Onde posso encontrar suporte da comunidade e tirar dúvidas técnicas? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

O ponto central de toda a interação da comunidade e dos desenvolvedores no ecossistema Mezo é o [servidor oficial do Discord.](https://discord.com/invite/mezo)​

#### Quem são seus parceiros e como faço para integrá-los? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Veja a lista atualizada em [Integrações e parceiros](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
