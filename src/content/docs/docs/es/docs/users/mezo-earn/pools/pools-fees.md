---
title: Comisiones de los pools
description: Modelo de comisiones de Mezo Pools
topic: users
---

## Comisiones

[Mezo Pools](https://mezo.org/explore/pools) emplea un modelo de comisiones dinámico optimizado para distintos pares de trading:

### Tasas de comisión estándar

- **Pools volátiles**: 0.30%
- **Pools estables**: 0.02%

### Comisiones personalizadas de los pools

Algunos pools pueden tener tasas de comisión personalizadas establecidas por la gobernanza. Estas tasas especiales suelen aplicarse a:

- **Pools de alianzas estratégicas**
- **Pools promocionales durante los periodos de lanzamiento**
- **Pares de trading institucionales de alto volumen**

### Cómo se cobran las comisiones

Cuando un trader ejecuta un swap a través de un Mezo Pool:

1. **Deducción de la comisión**: la comisión se deduce automáticamente de la cantidad del token de entrada.
   - Ejemplo: al intercambiar 1,000 MUSD en un pool estable, se deducen 0.2 MUSD como comisión.
2. **Separación inmediata**: las comisiones cobradas se transfieren al instante a un contrato PoolFees dedicado.
   - Las comisiones nunca se mezclan con las reservas de liquidez principales del pool

### ¿En qué tokens se pagan las comisiones?

Las comisiones siempre se cobran en el token que se vende (token de entrada) en cada swap. Como LP, ganas comisiones en los dos tokens del par:

- Cuando los traders intercambian Token A → Token B, las comisiones se cobran en Token A
- Cuando los traders intercambian Token B → Token A, las comisiones se cobran en Token B
- Acumulas comisiones en ambos tokens y puedes reclamarlas según tu participación en el pool

Ejemplo: en un pool MUSD/tBTC:

- Un trader intercambia MUSD → BTC: se cobra MUSD como comisión (para todos los LP)
- Un trader intercambia BTC → MUSD: se cobra BTC como comisión (para todos los LP)
- Como LP, ganas una parte de las comisiones tanto en MUSD como en BTC

### Cómo reclamar tus comisiones

1. Ve a tu posición en la interfaz de Mezo Pools
2. Haz clic en "Claim Fees"
3. Confirma la transacción
4. Las comisiones se envían directamente a tu billetera

### Ejemplos de cálculo de comisiones

#### Ejemplo 1: pool volátil (BTC/MUSD)

- **Volumen diario**: $1,000,000
- **Tasa de comisión**: 0.30%
- **Comisiones diarias generadas**: $3,000
- **Tu participación**: 5% del pool
- **Tus comisiones diarias**: ~$150

#### Ejemplo 2: pool estable (MUSD/USDC)

- **Volumen diario**: $5,000,000
- **Tasa de comisión**: 0.02%
- **Comisiones diarias generadas**: $1,000
- **Tu participación**: 2% del pool
- **Tus comisiones diarias**: ~$20

### Preguntas frecuentes

#### ¿En qué moneda o token se pagan las comisiones?
Las comisiones se pagan en el token de entrada de cada swap (el token que se vende). En un pool USDC/MEZO, los swaps de USDC → MEZO generan comisiones en USDC, mientras que los swaps de MEZO → USDC generan comisiones en MEZO. Como LP, acumulas y reclamas comisiones en ambos tokens.

#### ¿Puedo perder las comisiones acumuladas?
No. Las comisiones se almacenan por separado en contratos PoolFees y solo pueden reclamarlas los titulares de tokens LP.

#### ¿Las comisiones se capitalizan automáticamente?
No. Debes reclamar y volver a depositar las comisiones manualmente para lograr la capitalización.
