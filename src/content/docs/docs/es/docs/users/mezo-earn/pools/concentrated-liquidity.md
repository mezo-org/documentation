---
title: Liquidez concentrada
description: >-
  Aporta liquidez dentro de rangos de precios personalizados para ganar más
  comisiones con menos capital.
topic: users
---

Los pools de liquidez concentrada (CL) te permiten depositar liquidez dentro de un rango de precios específico en lugar de hacerlo en todos los precios posibles. Al concentrar tu capital donde realmente ocurre la actividad de trading, puedes ganar muchas más comisiones por cada dólar depositado en comparación con los [pools básicos](/docs/es/docs/users/mezo-earn/pools).

## En qué se diferencia la liquidez concentrada de los pools básicos

En un **pool básico**, tu liquidez se reparte de manera uniforme a lo largo de toda la curva de precios, desde cero hasta infinito. Esto significa que la mayor parte de tu capital permanece inactivo en rangos de precios donde nunca se producen operaciones.

En un **pool de liquidez concentrada**, eliges un rango de precios; por ejemplo, BTC entre 80,000 y 120,000 MUSD. Todo tu capital está activo dentro de ese rango, lo que lo hace mucho más eficiente en capital. La contrapartida es que, si el precio sale de tu rango, tu posición deja de ganar comisiones hasta que el precio vuelva a él.

| | Pools básicos | Pools CL |
|---|---|---|
| **Rango de liquidez** | Toda la curva de precios (de 0 a infinito) | Rango de precios personalizado que tú defines |
| **Eficiencia de capital** | Menor: la mayor parte del capital está inactivo | Mayor: todo el capital está activo dentro del rango |
| **Tipo de posición** | Tokens LP fungibles (ERC-20) | Posiciones NFT (ERC-721) |
| **Gestión** | Configurar y olvidarse | Requiere supervisión y reajuste |
| **Pérdida impermanente** | Estándar | Amplificada dentro del rango elegido |

## Pools CL activos

| Pool | Tipo | Tick spacing |
|---|---|---|
| BTC/MUSD-200 | Concentrado volátil | 200 |

Visita [Mezo Pools](https://mezo.org/explore/pools) para ver estadísticas en tiempo real, como TVL, volumen, comisiones y APR.

## Tick spacing

Los pools CL usan el **tick spacing** para definir la granularidad de los rangos de precios que puedes establecer. Un tick spacing más pequeño permite rangos más estrechos (más precisión), mientras que un tick spacing más grande implica rangos mínimos más amplios.

Los pools se clasifican como **estables** (tick spacing inferior a 100) o **volátiles** (tick spacing de 100 o superior), siguiendo la misma convención que usa Aerodrome.

| Tick spacing | Comisión predeterminada | Clasificación |
|---|---|---|
| 1 | 0.01% | Estable |
| 10 | 0.05% | Estable |
| 50 | 0.05% | Estable |
| 100 | 0.05% | Volátil |
| 200 | 0.30% | Volátil |
| 2,000 | 1.00% | Volátil |

El pool BTC/MUSD-200 usa un tick spacing de 200 con una comisión de swap del 0.30%.

## Primeros pasos (próximamente)

1. Ve a [Mezo Pools](https://mezo.org/explore/pools) y selecciona el pool CL al que quieres aportar liquidez.
2. Elige tu rango de precios: establece los precios mínimo y máximo entre los que tu liquidez estará activa.
3. Introduce la cantidad de cada token que vas a depositar. La proporción depende del precio actual en relación con el rango que hayas elegido.
4. Revisa y confirma la transacción. Recibirás un NFT que representa tu posición.

### Cómo elegir un rango de precios (próximamente)

- **Rango más amplio**: gana comisiones de forma más constante, pero con menor eficiencia de capital. Es mejor si prefieres no intervenir activamente.
- **Rango más estrecho**: gana más comisiones mientras el precio está dentro del rango, pero requiere supervisión y reajustes activos. El riesgo de quedar fuera del rango es mayor.
- **El precio actual debe estar dentro de tu rango**: si el precio actual está fuera de tu rango, tu posición estará íntegramente en un solo token y no ganará comisiones hasta que el precio vuelva a entrar en el rango.

## Staking para obtener emisiones (próximamente)

Las posiciones CL se pueden poner en staking en gauges para ganar emisiones de MEZO además de las comisiones de trading. Las posiciones en staking obtienen una mayor parte de las comisiones de swap gracias al mecanismo de comisiones de posiciones sin staking, que redirige una parte de las comisiones de las posiciones sin staking hacia las que están en staking.

Para hacer staking:

1. Ve a tu posición CL.
2. Haz clic en **Stake** para depositar el NFT de tu posición en el gauge.
3. Gana emisiones de MEZO mientras tu liquidez esté dentro del rango.

Las emisiones se distribuyen de forma proporcional a la liquidez en staking que está dentro del rango. Si tu posición queda fuera del rango, dejas de ganar emisiones hasta que el precio vuelva a él.

## Comisiones

Las comisiones de los pools CL funcionan igual que las de los pools básicos: se descuentan del token de entrada en cada swap y se acumulan para que los proveedores de liquidez las reclamen.

La diferencia clave: en los pools CL, solo ganan comisiones las posiciones que están **dentro del rango** en el momento del swap. Las posiciones fuera del rango de precios activo no ganan nada hasta que el precio vuelva a él.

Consulta [Comisiones de los pools](/docs/es/docs/users/mezo-earn/pools/pools-fees) para obtener más detalles sobre el modelo de comisiones.

## Riesgos

### Pérdida impermanente

La liquidez concentrada **amplifica** la pérdida impermanente en comparación con los pools básicos. Como tu capital está concentrado en un rango estrecho, los movimientos de precio dentro de ese rango tienen un mayor impacto en la proporción de tokens de tu posición. Cuanto más estrecho sea tu rango, mayor será la posible pérdida impermanente.

### Riesgo de quedar fuera del rango

Si el precio de mercado sale del rango que elegiste, tu posición se convierte íntegramente en un solo token y deja de ganar comisiones o emisiones. Tendrás que esperar a que el precio vuelva o retirar tu liquidez y reposicionarla.

### Riesgo de contratos inteligentes

Como ocurre con todos los contratos inteligentes, existe un riesgo inherente. Revisa las auditorías en [mezo.org/audits](https://mezo.org/audits) y deposita solo cantidades con las que te sientas cómodo.
