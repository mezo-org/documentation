---
title: Redenciones de MUSD
topic: developers
---

# Cómo redimir MUSD en Mezo

## Descripción rápida
Redimir te permite quemar 1 MUSD para recibir `$1` en BTC (menos una comisión de redención del 0.75% y las comisiones de gas). El sistema realiza la redención empezando por el trove con el ratio de colateralización más bajo por encima del 110%. Si la cantidad de MUSD supera la de un solo trove, la redención continúa en orden ascendente de ratio de colateralización.

Los troves con ratios de colateralización inferiores al 110% se pueden liquidar y no pueden ser objeto de redención.

---

## Requisitos previos

Antes de empezar, verifica lo siguiente:

1. **El sistema acepta redenciones**: ve a TroveManager → "Read as Proxy" → llama a `getTCR()` con el precio actual de BTC. Debe mostrar ≥ `1100000000000000000` (110%)
2. **Tienes MUSD**: consulta tu saldo en el contrato del token MUSD
3. **Obtén el precio actual de BTC**: ve a PriceFeed → "Read as Proxy" → llama a `fetchPrice()`
4. **Obtén las direcciones de contrato correctas**: consulta las direcciones de contratos que aparecen al final para Mainnet y Testnet.

---

## Instrucciones paso a paso

### 1. Ve al contrato TroveManager
Abre el contrato TroveManager en tu explorador de bloques y haz clic en la pestaña **"Write as Proxy"**.

### 2. Busca la función 11: `redeemCollateral`

Verás 6 campos de entrada. Así es como debes completarlos:

---

## Opción A: rápida y sencilla (más gas)

Usa esta opción si quieres redimir rápidamente sin calcular hints.

- `_amount`: [tu cantidad en wei; consulta la conversión más abajo]   
- `_firstRedemptionHint`: 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint`: [la dirección de tu billetera]   
- `_lowerPartialRedemptionHint`: [la dirección de tu billetera]   
- `_partialRedemptionHintNICR`: 1100000000000000000000   
- `_maxIterations`: 0

**Convertir MUSD a wei:**
- 100 MUSD = `100000000000000000000`
- 5,005 MUSD = `5005000000000000000000`

**Fórmula**: tu cantidad × 1000000000000000000

---

## Opción B: con hints (menos gas)

Usa esta opción para ahorrar en costos de gas.

### Paso 1: obtén los hints de redención

Ve a HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Completa:
- `_amount`: tu cantidad en wei (igual que arriba)
- `_price`: precio actual de BTC obtenido de PriceFeed
- `_maxIterations`: 50

Copia los valores devueltos:
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Paso 2: obtén los hints de posición

Ve a SortedTroves → "Read as Proxy" → `findInsertPosition()`

Completa:
- `_NICR`: usa el `partialRedemptionHintNICR` del paso 1
- `_prevId`: la dirección de tu billetera
- `_nextId`: la dirección de tu billetera

Copia los valores devueltos:
- `upperHint`
- `lowerHint`

### Paso 3: llama a redeemCollateral

Vuelve a TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount`: [tu cantidad en wei]
- `_firstRedemptionHint`: [del paso 1]
- `_upperPartialRedemptionHint`: [upperHint del paso 2]
- `_lowerPartialRedemptionHint`: [lowerHint del paso 2]
- `_partialRedemptionHintNICR`: [del paso 1]
- `_maxIterations`: 50

---

## Lo que recibirás

**Ejemplo: redimir 100 MUSD**
- Quemas: 100 MUSD
- Recibes: `$99.25` en BTC (la comisión del 0.75% va al protocolo)

**Fórmula**: (tu cantidad de MUSD ÷ precio de BTC) × 0.9925 = BTC recibido

---

## Problemas comunes

**"Cannot redeem when TCR < MCR"**
→ El TCR del sistema está por debajo del 110%. Espera a que se recupere.

**"Unable to redeem any amount"**
→ Esto puede ocurrir por varios motivos:
- No hay troves disponibles con un ratio de colateralización superior al 110%
- Los hints están desactualizados (en concreto, el hint de NICR)
- La cantidad de la redención dejaría al trove objetivo con menos del requisito de deuda mínima de 1,800 MUSD
- El número máximo de iteraciones es demasiado bajo para el tamaño de la redención

**La transacción se queda sin gas**
→ Reduce `_maxIterations` a 10 o divide la operación en redenciones más pequeñas.

**La transacción revierte de forma inesperada**
→ Obtén hints nuevos y vuelve a intentarlo. Es posible que alguien haya redimido antes que tú.

**Recibiste menos de lo esperado**
→ Revisa el evento `Redemption` de tu transacción. Es posible que se te haya devuelto parte del MUSD si el último trove fuera a quedar por debajo del mínimo de 1,800 MUSD.

---

## Consejos

- **Genera los hints justo antes de redimir**: quedan obsoletos si otra persona redime primero
- **Usa la opción A para cantidades pequeñas** (< `$10,000`): el mayor costo de gas es insignificante
- **Usa la opción B para cantidades grandes**: ahorra una cantidad considerable de gas en redenciones grandes
- **Establece un maxIterations más alto para redenciones más grandes**:
  - Pequeñas (< 10 troves): 10
  - Medianas (10-30 troves): 50
  - Grandes (30+ troves): 100

---

## Direcciones de contratos

| Contrato | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| Token MUSD | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Todas las direcciones son contratos proxy. Usa siempre las pestañas "Read as Proxy" o "Write as Proxy".

---

## ¿Necesitas ayuda?

- Consulta tu transacción en el explorador de bloques para ver los eventos y los mensajes de error
- Únete a nuestro Discord y abre un ticket: https://discord.com/invite/mezo
