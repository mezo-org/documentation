---
title: Conecte sua carteira ao Mezo
topic: users
---

Para conectar a carteira do seu navegador, use os dados de rede da Mainnet ou da Testnet.

Você pode adicionar o Mezo à sua carteira usando o botão **Connect Wallet** no Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Se o Chainlist não funcionar, adicione a rede manualmente usando os dados de rede abaixo.

## Mezo Mainnet

### Endpoints RPC públicos

| Provedor | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Para limites de requisições mais altos, a Boar oferece uma chave de API gratuita em [boar.network/mezo](https://boar.network/mezo). Há também um plano Enterprise disponível: acesse [https://dashboard.boar.network/](https://dashboard.boar.network/) para começar.

Para limites de requisições mais altos, obtenha sua chave de API gratuita da Validation Cloud em [validationcloud.io/mezo](https://www.validationcloud.io/mezo) ou entre em contato com eles em [validationcloud.io/contact](https://validationcloud.io/contact) para planos Enterprise.

### Dados da rede

| Parâmetro | Valor |
|-----------|-------|
| ID da cadeia (Chain ID) | `31612` |
| Moeda | BTC (18 casas decimais) |
| Explorador de blocos | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Endpoints RPC públicos

| Protocolo | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Dados da rede

| Parâmetro | Valor |
|-----------|-------|
| ID da cadeia (Chain ID) | `31611` |
| Moeda | BTC (18 casas decimais) |
| Explorador de blocos | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[Desenvolvendo no Mezo?]
Consulte o guia [Configurar o ambiente de desenvolvimento](/docs/pt-br/docs/developers/getting-started/configure-environment) para ver a configuração do Hardhat e do Foundry.
:::

## Como adicionar o Mezo manualmente à sua carteira

Se precisar adicionar a rede manualmente à sua carteira, siga as instruções abaixo para adicionar uma rede personalizada, de acordo com a sua carteira:

* MetaMask: [Como adicionar uma rede personalizada (RPC)](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Como adicionar uma rede personalizada](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Adicionar uma rede personalizada (celular)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## Carteiras BTC

As carteiras BTC são compatíveis com o Mezo App e podem receber um endereço da rede Mezo associado à sua carteira BTC. No momento, as carteiras BTC podem realizar as seguintes tarefas no Mezo:

- Transferir ativos BTC pela ponte
- Transferir ativos EVM pela ponte
- Tomar emprestado, pagar ou gerenciar o colateral de um empréstimo
- Comprar itens no MUSD Market
- Receber e enviar ativos na rede Mezo
- Participar do Mezo Earn (bloquear, votar, depositar em cofres e pools ou sacar deles, reivindicar recompensas)

## Desenvolvedores

Para aprender a desenvolver e implantar dApps no Mezo, consulte a documentação [Primeiros passos para desenvolvedores](/docs/pt-br/docs/developers/getting-started/).
