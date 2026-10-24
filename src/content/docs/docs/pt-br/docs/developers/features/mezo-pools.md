---
title: Mezo Pools
topic: developers
---
O Mezo Pools permite que os usuários façam swap de tokens e forneçam liquidez usando mecânicas de pool otimizadas. O Mezo oferece duas arquiteturas de pool: **pools básicos** (AMMs de produto constante e de curva estável) e **pools de liquidez concentrada (CL)** com faixas de preço personalizadas.

## Pools básicos

Os pools básicos usam um AMM no estilo da Aerodrome, com precificação de produto constante (volátil) ou de curva estável (estável).

- **Pool Factory:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Taxas de swap:** 0,30% nos pools voláteis, 0,02% nos pools estáveis
- **Tipo de posição:** tokens LP fungíveis (ERC-20)

### Pools básicos disponíveis

| Pool | Tipo | Endereço |
|------|------|---------|
| MUSD/BTC | Volátil | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Estável | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Estável | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Fluxo de swap básico

**Contrato roteador:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. O usuário aprova o token para o roteador
2. Chame `swapExactTokensForTokens(...)` do roteador com o array de caminho (path)
3. O token de saída é devolvido à carteira

## Pools de liquidez concentrada (CL)

Os pools de CL permitem que os provedores de liquidez depositem dentro de faixas de preço personalizadas, concentrando o capital onde as negociações acontecem. A implementação de CL do Mezo é baseada no [Slipstream da Velodrome](https://velodrome.finance/docs/slipstream).

- **CL Factory:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Tipo de posição:** não fungível (NFTs ERC-721 via NonfungiblePositionManager)
- **Modelo de preço:** `sqrtPriceX96` (ponto fixo Q64.96), igual ao Uniswap V3

### Pools de CL disponíveis

| Pool | Tick spacing | Taxa padrão | Endereço |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0,30% | Consulte o explorador |

### Tick spacing e taxas

Os pools de CL são criados com um tick spacing específico, que determina a granularidade das faixas de preço. Pools com tick spacing abaixo de 100 são classificados como estáveis; a partir de 100, como voláteis.

| Tick spacing | Taxa padrão |
|---|---|
| 1 | 0,01% |
| 10 | 0,05% |
| 50 | 0,05% |
| 100 | 0,05% |
| 200 | 0,30% |
| 2.000 | 1,00% |

Taxas personalizadas podem ser definidas por meio de um `swapFeeModule` plugável na factory. Um `unstakedFeeModule` controla a parcela das taxas de swap redirecionada das posições fora de staking para as posições em staking (padrão: 10%).

### Fluxo de swap de CL

**CL Swap Router:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. O usuário aprova o token para o CL swap router
2. Chame `exactInputSingle(...)` ou `exactInput(...)` com a chave do pool (token0, token1, tickSpacing) e os parâmetros do swap
3. O token de saída é devolvido à carteira

### Gestão de posições de CL

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

As posições são gerenciadas como NFTs ERC-721. Principais operações:

- `mint(...)`: cria uma nova posição com uma faixa de preço (tickLower, tickUpper) e deposita tokens
- `increaseLiquidity(...)`: adiciona mais liquidez a uma posição existente
- `decreaseLiquidity(...)`: remove liquidez de uma posição
- `collect(...)`: reivindica as taxas de swap acumuladas

### Staking e gauges

As posições de CL podem ser colocadas em staking em gauges para receber emissões de MEZO. A liquidez em staking dentro da faixa ganha tanto taxas de swap quanto emissões. O mecanismo de taxas de posições fora de staking redireciona parte das taxas dessas posições para as posições em staking.

- **CL Gauge Factory:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Principais recursos

- **Controle de slippage:** feito no frontend ou pelos parâmetros `amountOutMinimum` / `sqrtPriceLimitX96`
- **Oráculo TWAP integrado:** cada pool de CL mantém um oráculo de preço médio ponderado pelo tempo
- **Taxas dinâmicas:** módulos de taxa plugáveis para lógica de taxas personalizada por pool

## Endereços de contratos

### Mainnet: contratos dos pools básicos

| Nome | Endereço |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| Pool MUSD/BTC | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| Pool MUSD/mUSDC | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| Pool MUSD/mUSDT | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet: contratos de CL

| Nome | Endereço |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (implementação) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (implementação) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet: contratos de governança

| Nome | Endereço |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet: contratos dos pools básicos

| Nome | Endereço |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| Pool MUSD/BTC | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| Pool MUSD/mUSDC | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| Pool MUSD/mUSDT | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet: contratos de CL

| Nome | Endereço |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (implementação) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (implementação) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet: contratos de governança

| Nome | Endereço |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
