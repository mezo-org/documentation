---
title: Guia de desenvolvimento do Mezo Earn
description: >-
  Guia completo para desenvolver no Mezo Earn, o sistema de gauges e a DEX do
  Mezo inspirados no Solidly.
topic: developers
---
O Mezo Earn é o sistema de contratos inteligentes por trás do sistema de gauges e da exchange descentralizada (DEX) do Mezo. Este guia ajuda você a entender como desenvolver com os contratos do Mezo Earn e interagir com eles.

📄 **[Baixar o whitepaper do Mezo Earn (PDF)](/docs/Mezo_Earn_Whitepaper.pdf)**: para uma visão geral completa da estrutura de incentivos econômicos, do modelo de dois tokens e da tokenomics.

## Visão geral

O Mezo Earn oferece:
- **Exchange descentralizada (DEX)**: formador de mercado automatizado para swaps de tokens
- **Sistema de gauges**: mecanismo de votação e distribuição de recompensas
- **Arquitetura inspirada no Solidly**: ve-tokenomics e gestão de liquidez eficientes

## Estrutura do repositório

O [repositório do Mezo Earn](https://github.com/mezo-org/tigris.git) contém:

- **[solidity/](https://github.com/mezo-org/tigris/tree/main/solidity)**: contratos inteligentes escritos em Solidity
- **[dapp/](https://github.com/mezo-org/tigris/tree/main/dapp)**: aplicação de frontend para interagir com os contratos
- **[infrastructure/](https://github.com/mezo-org/tigris/tree/main/infrastructure)**: componentes de infraestrutura baseados na Cloudflare
- **[.github/workflows/](https://github.com/mezo-org/tigris/tree/main/.github/workflows)**: automação de CI/CD

## Configuração do ambiente de desenvolvimento

### Pré-requisitos

- Node.js (verifique o [`.nvmrc`](https://github.com/mezo-org/tigris/blob/main/.nvmrc) para saber a versão exata)
- Gerenciador de pacotes pnpm
- Git
- Foundry (para desenvolvimento de contratos inteligentes)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/mezo-org/tigris.git
cd tigris
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure os hooks de pre-commit:
```bash
# Install pre-commit tool
brew install pre-commit

# Install hooks in the repository
pre-commit install
```

### Testar os hooks de pre-commit

```bash
# Test all files
pre-commit run --all-files

# Test specific files
pre-commit run --files <path-to-file>
```

## Desenvolvimento de contratos inteligentes

### Arquitetura dos contratos

Os contratos do Mezo Earn estão organizados no diretório [`solidity/`](https://github.com/mezo-org/tigris/tree/main/solidity). Os principais componentes incluem:

- **Contratos principais da DEX**: funcionalidade de formador de mercado automatizado
- **Contratos de gauges**: votação e distribuição de recompensas
- **Contratos de tokens**: implementações ERC20
- **Contratos utilitários**: funções auxiliares e bibliotecas

### Fluxo de desenvolvimento

1. **Escreva os contratos**: crie ou modifique arquivos Solidity em `solidity/`
2. **Teste os contratos**: escreva testes abrangentes para seus contratos
3. **Implante**: use os scripts de implantação para implantar na testnet/mainnet
4. **Verifique**: verifique os contratos nos exploradores de blocos

### Compilar os contratos

```bash
# Compile smart contracts
pnpm compile

# or with Foundry directly
cd solidity
forge build
```

### Testes

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test <test-file>

# Run with gas reporting
pnpm test:gas
```

## Desenvolvimento do frontend

O diretório [`dapp/`](https://github.com/mezo-org/tigris/tree/main/dapp) contém a aplicação de frontend para interagir com os contratos do Mezo Earn.

### Principais recursos

- **Interface de swap**: funcionalidade de swap de tokens
- **Gestão de liquidez**: adicionar/remover liquidez dos pools
- **Votação em gauges**: participar da votação em gauges e das recompensas
- **Gestão de portfólio**: acompanhar posições e recompensas

### Comandos de desenvolvimento

```bash
# Navigate to dapp directory
cd dapp

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Guia de integração

### Conectar-se aos contratos do Mezo Earn

1. **Obtenha os endereços dos contratos**: endereços dos contratos implantados na testnet/mainnet do Mezo
2. **Integração de ABIs**: importe as ABIs dos contratos para interagir com eles
3. **Provedor Web3**: conecte-se à rede Mezo via RPC

### Exemplo de integração

```typescript
import { ethers } from 'ethers';

// Connect to Mezo network
const provider = new ethers.JsonRpcProvider('https://rpc.mezo.org');

// Load contract ABI and address
const contract = new ethers.Contract(
  'CONTRACT_ADDRESS',
  CONTRACT_ABI,
  provider
);

// Interact with contract
const result = await contract.someFunction();
```

### Swap de tokens

```typescript
async function swapTokens(
  routerContract: Contract,
  wallet: Wallet,
  amountIn: bigint,
  tokenIn: string,
  tokenOut: string,
  to: string
) {
  // Approve token spending
  const tokenContract = new ethers.Contract(tokenIn, ERC20_ABI, wallet);
  await tokenContract.approve(routerContract.address, amountIn);
  
  // Execute swap
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes
  const minAmountOut = 0; // Calculate proper slippage in production
  
  await routerContract.connect(wallet).swapExactTokensForTokens(
    amountIn,
    minAmountOut,
    [tokenIn, tokenOut],
    to,
    deadline
  );
}
```

### Adicionar liquidez

```typescript
async function addLiquidity(
  routerContract: Contract,
  wallet: Wallet,
  tokenA: string,
  tokenB: string,
  amountA: bigint,
  amountB: bigint
) {
  // Approve both tokens
  const tokenAContract = new ethers.Contract(tokenA, ERC20_ABI, wallet);
  const tokenBContract = new ethers.Contract(tokenB, ERC20_ABI, wallet);
  
  await tokenAContract.approve(routerContract.address, amountA);
  await tokenBContract.approve(routerContract.address, amountB);
  
  // Add liquidity
  const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
  
  await routerContract.connect(wallet).addLiquidity(
    tokenA,
    tokenB,
    amountA,
    amountB,
    0, // minAmountA - calculate proper slippage
    0, // minAmountB - calculate proper slippage
    wallet.address,
    deadline
  );
}
```

## Implantação

### Implantação na testnet

1. Configure os parâmetros da testnet no `.env`
2. Implante os contratos usando os scripts de implantação:
```bash
pnpm deploy:testnet
```
3. Verifique os contratos no explorador da testnet
4. Atualize a configuração do frontend

### Implantação na mainnet

1. Conclua testes completos na testnet
2. Auditoria de segurança (se necessária)
3. Implante na mainnet
4. Verifique os contratos
5. Atualize a configuração de produção

## Monitoramento e manutenção

### Monitoramento dos contratos

- Configure o monitoramento de eventos para funções críticas
- Monitore o uso de gás e as oportunidades de otimização
- Acompanhe as interações com os contratos e a atividade dos usuários

### Considerações de segurança

- Auditorias de segurança regulares
- Gestão de controle de acesso
- Mecanismos de pausa de emergência
- Procedimentos de atualização

## Recursos adicionais

- **[Repositório do Mezo Earn](https://github.com/mezo-org/tigris.git)** - repositório principal
- **[Documentação do Solidly](https://docs.solidly.com/)** - documentação do protocolo Solidly
- **[Documentação da rede Mezo](/docs/pt-br/docs/developers/getting-started/configure-environment)** - configuração da rede
- **[Guia de verificação de contratos](/docs/pt-br/docs/developers/contracts-reference)** - verificação de contratos

:::note
Para detalhes sobre a arquitetura, a tokenomics e a mecânica do protocolo, consulte o README e a documentação do repositório do Mezo Earn.
:::

## Suporte

Para obter suporte de desenvolvimento:
- Participe do [Discord do Mezo](https://discord.com/invite/mezo)
- Confira as [issues no GitHub](https://github.com/mezo-org/tigris/issues)
- Consulte as [perguntas frequentes](/docs/pt-br/docs/developers/getting-started/FAQs)
