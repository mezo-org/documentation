---
title: Mezo Pools
topic: developers
---
Mit Mezo Pools können Nutzer Token tauschen und Liquidität bereitstellen – auf Basis optimierter Pool-Mechanismen. Mezo unterstützt zwei Pool-Architekturen: **Basis-Pools** (AMMs mit konstantem Produkt und Stable-Kurve) und **Pools mit konzentrierter Liquidität (CL)** mit benutzerdefinierten Preisbereichen.

## Basis-Pools

Basis-Pools verwenden einen AMM im Stil von Aerodrome mit entweder Constant-Product-Preisbildung (volatil) oder Stable-Curve-Preisbildung (stabil).

- **Pool-Factory:** `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`
- **Swap-Gebühren:** 0,30 % für volatile Pools, 0,02 % für stabile Pools
- **Positionstyp:** fungible LP-Token (ERC-20)

### Unterstützte Basis-Pools

| Pool | Typ | Adresse |
|------|------|---------|
| MUSD/BTC | Volatil | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC | Stabil | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT | Stabil | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Swap-Ablauf bei Basis-Pools

**Router-Contract:** `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`

1. Der Nutzer gibt den Token für den Router frei
2. Rufen Sie `swapExactTokensForTokens(...)` des Routers mit dem Pfad-Array auf
3. Der Ausgabe-Token wird an die Wallet zurückgegeben

## Pools mit konzentrierter Liquidität (CL)

In CL-Pools können Liquiditätsanbieter innerhalb benutzerdefinierter Preisbereiche einzahlen und so ihr Kapital dort konzentrieren, wo gehandelt wird. Die CL-Implementierung von Mezo basiert auf [Slipstream von Velodrome](https://velodrome.finance/docs/slipstream).

- **CL-Factory:** `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79`
- **Positionstyp:** nicht fungibel (ERC-721-NFTs über NonfungiblePositionManager)
- **Preismodell:** `sqrtPriceX96` (Q64.96-Festkommazahl), wie bei Uniswap V3

### Unterstützte CL-Pools

| Pool | Tick-Abstand | Standardgebühr | Adresse |
|------|-------------|-------------|---------|
| BTC/MUSD-200 | 200 | 0,30 % | Siehe Explorer |

### Tick-Abstand und Gebühren

CL-Pools werden mit einem bestimmten Tick-Abstand (Tick Spacing) erstellt, der die Granularität der Preisbereiche bestimmt. Pools mit einem Tick-Abstand unter 100 gelten als stabil, ab 100 als volatil.

| Tick-Abstand | Standardgebühr |
|---|---|
| 1 | 0,01 % |
| 10 | 0,05 % |
| 50 | 0,05 % |
| 100 | 0,05 % |
| 200 | 0,30 % |
| 2.000 | 1,00 % |

Über ein austauschbares `swapFeeModule` in der Factory lassen sich benutzerdefinierte Gebühren festlegen. Ein `unstakedFeeModule` steuert den Anteil der Swap-Gebühren, der von nicht gestakten zu gestakten Positionen umgeleitet wird (Standard: 10 %).

### Swap-Ablauf bei CL-Pools

**CL-Swap-Router:** `0x37cDd11919ec3860eaD9efB8673d7476E5326225`

1. Der Nutzer gibt den Token für den CL-Swap-Router frei
2. Rufen Sie `exactInputSingle(...)` oder `exactInput(...)` mit dem Pool-Schlüssel (token0, token1, tickSpacing) und den Swap-Parametern auf
3. Der Ausgabe-Token wird an die Wallet zurückgegeben

### Verwaltung von CL-Positionen

**NonfungiblePositionManager:** `0x509Bc221df2B83927c695FA0bb0f5B21053C874c`

Positionen werden als ERC-721-NFTs verwaltet. Wichtige Operationen:

- `mint(...)` – Eine neue Position mit einem Preisbereich (tickLower, tickUpper) erstellen und Token einzahlen
- `increaseLiquidity(...)` – Einer bestehenden Position weitere Liquidität hinzufügen
- `decreaseLiquidity(...)` – Liquidität aus einer Position entfernen
- `collect(...)` – Angesammelte Swap-Gebühren beanspruchen

### Staking und Gauges

CL-Positionen können für MEZO-Emissionen in Gauges gestakt werden. Gestakte Liquidität innerhalb des Preisbereichs verdient sowohl Swap-Gebühren als auch Emissionen. Der Mechanismus für Gebühren nicht gestakter Positionen leitet einen Teil der Gebühren von nicht gestakten zu gestakten Positionen um.

- **CL-Gauge-Factory:** `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13`

### Wichtige Funktionen

- **Slippage-Kontrolle:** im Frontend oder über die Parameter `amountOutMinimum` / `sqrtPriceLimitX96`
- **Integriertes TWAP-Orakel:** Jeder CL-Pool führt ein Orakel für den zeitgewichteten Durchschnittspreis
- **Dynamische Gebühren:** austauschbare Gebührenmodule für eigene Gebührenlogik pro Pool

## Contract-Adressen

### Mainnet – Basis-Pool-Contracts

| Name | Adresse |
|------|---------|
| Router | `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706` |
| PoolFactory | `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248` |
| MUSD/BTC-Pool | `0x52e604c44417233b6CcEDDDc0d640A405Caacefb` |
| MUSD/mUSDC-Pool | `0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356` |
| MUSD/mUSDT-Pool | `0x10906a9E9215939561597b4C8e4b98F93c02031A` |

### Mainnet – CL-Contracts

| Name | Adresse |
|------|---------|
| CLFactory | `0xBB24AF5c6fB88F1d191FA76055e30BF881BeEb79` |
| CLPool (Implementierung) | `0x819CfAdd7F5bc0854FA3B7F5749ea0410a943E5F` |
| CLSwapRouter | `0x37cDd11919ec3860eaD9efB8673d7476E5326225` |
| NonfungiblePositionManager | `0x509Bc221df2B83927c695FA0bb0f5B21053C874c` |
| NonfungibleTokenPositionDescriptor | `0x818f6CcFbEe90202B967567bCF2a5Fb9B73CFEcA` |
| CLGaugeFactory | `0xfc41E1AAe0e58E8bDC32e85d8C995A902FEdEb13` |
| CLGauge (Implementierung) | `0x8f11a90265f7a784B46fe326638Ec37a5CC29c33` |

### Mainnet – Governance-Contracts

| Name | Adresse |
|------|---------|
| VeBTC | `0x7D807e9CE1ef73048FEe9A4214e75e894ea25914` |
| VeBTCVoter | `0x3A4a6919F70e5b0aA32401747C471eCfe2322C1b` |
| VeBTCRewardsDistributor | `0x535E01F948458E0b64F9dB2A01Da6F32E240140f` |
| VeBTCEpochGovernor | `0x1494102fa1b240c3844f02e0810002125fb5F054` |
| ChainFeeSplitter | `0xcb79aE130b0777993263D0cdb7890e6D9baBE117` |

### Testnet – Basis-Pool-Contracts

| Name | Adresse |
|------|---------|
| Router | `0x9a1ff7FE3a0F69959A3fBa1F1e5ee18e1A9CD7E9` |
| PoolFactory | `0x4947243CC818b627A5D06d14C4eCe7398A23Ce1A` |
| MUSD/BTC-Pool | `0xd16A5Df82120ED8D626a1a15232bFcE2366d6AA9` |
| MUSD/mUSDC-Pool | `0x525F049A4494dA0a6c87E3C4df55f9929765Dc3e` |
| MUSD/mUSDT-Pool | `0x27414B76CF00E24ed087adb56E26bAeEEe93494e` |

### Testnet – CL-Contracts

| Name | Adresse |
|------|---------|
| CLFactory | `0x7B61BC8Aa460476d142F1CD107A47297002f69ff` |
| CLPool (Implementierung) | `0xfB28eA9eC9f01775bD42E92BafeE9584808419CD` |
| CLSwapRouter | `0x3112908bB72ce9c26a321Eeb22EC8e051F3b6E6a` |
| NonfungiblePositionManager | `0x9B753e11bFEd0D88F6e1D2777E3c7dac42F96062` |
| NonfungibleTokenPositionDescriptor | `0xD6018646aE1d7fAA849D2369e6157050051F0e51` |
| CLGaugeFactory | `0x5b0dbAfdcE363d6662F36163D91862B0a3808373` |
| CLGauge (Implementierung) | `0x1aE1a27b709A5eb4BbcF7B7AA2c28620c593a3EE` |

### Testnet – Governance-Contracts

| Name | Adresse |
|------|---------|
| VeBTC | `0xB63fcCd03521Cf21907627bd7fA465C129479231` |
| VeBTCVoter | `0x72F8dd7F44fFa19E45955aa20A5486E8EB255738` |
| VeBTCRewardsDistributor | `0x10B0E7b3411F4A38ca2F6BB697aA28D607924729` |
| VeBTCEpochGovernor | `0x12fda93041aD8aB6d133aE4d038b5159033d937a` |
| ChainFeeSplitter | `0x63aD4D014246eaD52408dF3BC8F046107cbf6065` |
