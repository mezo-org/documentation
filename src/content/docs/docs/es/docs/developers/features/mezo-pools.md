---
title: Mezo Pools
topic: developers
---
Mezo Pools permiten a los usuarios hacer swaps de tokens y aportar liquidez mediante una mecánica de pools optimizada. Mezo admite dos arquitecturas de pools: **pools básicos** (AMM de producto constante y de curva estable) y **pools de liquidez concentrada (CL)** con rangos de precios personalizados.

## Pools básicos

Los pools básicos usan un AMM al estilo de Aerodrome con fijación de precios de producto constante (volátil) o de curva estable (estable).

- **Factory de pools:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Comisiones de swap:** 0.30% para pools volátiles, 0.02% para pools estables
- **Tipo de posición:** tokens LP fungibles (ERC-20)

### Pools básicos compatibles

| Pool | Tipo | Dirección |
|------|------|---------|
| MUSD/BTC | Volátil | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Estable | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Estable | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Flujo de swap básico

**Contrato router:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. El usuario aprueba el token para el router
2. Llama a `swapExactTokensForTokens(...)` del router con el array de ruta
3. El token de salida se devuelve a la billetera

## Pools de liquidez concentrada (CL)

Los pools CL permiten a los proveedores de liquidez depositar dentro de rangos de precios personalizados, concentrando el capital donde se produce la actividad de trading. La implementación de CL de Mezo se basa en [Slipstream de Velodrome](https://velodrome.finance/docs/slipstream).

- **Factory de CL:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Tipo de posición:** no fungible (NFT ERC-721 mediante NonfungiblePositionManager)
- **Modelo de precios:** `sqrtPriceX96` (punto fijo Q64.96), igual que Uniswap V3

### Pools CL compatibles

| Pool | Tick spacing | Comisión predeterminada | Dirección |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0.30% | Consulta el explorador |

### Tick spacing y comisiones

Los pools CL se crean con un tick spacing específico que determina la granularidad de los rangos de precios. Los pools con un tick spacing inferior a 100 se clasifican como estables; los de 100 o más, como volátiles.

| Tick spacing | Comisión predeterminada |
|---|---|
| 1 | 0.01% |
| 10 | 0.05% |
| 50 | 0.05% |
| 100 | 0.05% |
| 200 | 0.30% |
| 2,000 | 1.00% |

Se pueden establecer comisiones personalizadas mediante un `swapFeeModule` conectable en la factory. Un `unstakedFeeModule` controla la parte de las comisiones de swap que se redirige de las posiciones sin staking a las posiciones en staking (valor predeterminado: 10%).

### Flujo de swap CL

**CL Swap Router:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. El usuario aprueba el token para el router de swap CL
2. Llama a `exactInputSingle(...)` o `exactInput(...)` con la clave del pool (token0, token1, tickSpacing) y los parámetros del swap
3. El token de salida se devuelve a la billetera

### Gestión de posiciones CL

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Las posiciones se gestionan como NFT ERC-721. Operaciones clave:

- `mint(...)` — Crea una nueva posición con un rango de precios (tickLower, tickUpper) y deposita tokens
- `increaseLiquidity(...)` — Agrega más liquidez a una posición existente
- `decreaseLiquidity(...)` — Retira liquidez de una posición
- `collect(...)` — Reclama las comisiones de swap acumuladas

### Staking y gauges

Las posiciones CL se pueden poner en staking en gauges para obtener emisiones de MEZO. La liquidez en staking que está dentro del rango gana tanto comisiones de swap como emisiones. El mecanismo de comisiones sin staking redirige una parte de las comisiones de las posiciones sin staking a las posiciones en staking.

- **Factory de gauges CL:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Funcionalidades clave

- **Control del deslizamiento (slippage):** se proporciona en el frontend o mediante los parámetros `amountOutMinimum` / `sqrtPriceLimitX96`
- **Oráculo TWAP integrado:** cada pool CL mantiene un oráculo de precio promedio ponderado por tiempo
- **Comisiones dinámicas:** módulos de comisiones conectables para aplicar una lógica de comisiones personalizada en cada pool

## Direcciones de contratos

### Mainnet: contratos de pools básicos

| Nombre | Dirección |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| Pool MUSD/BTC | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| Pool MUSD/mUSDC | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| Pool MUSD/mUSDT | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet: contratos CL

| Nombre | Dirección |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (implementación) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (implementación) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet: contratos de gobernanza

| Nombre | Dirección |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet: contratos de pools básicos

| Nombre | Dirección |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| Pool MUSD/BTC | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| Pool MUSD/mUSDC | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| Pool MUSD/mUSDT | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet: contratos CL

| Nombre | Dirección |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (implementación) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (implementación) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet: contratos de gobernanza

| Nombre | Dirección |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
