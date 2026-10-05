---
title: Liquidaciones y redenciones de MUSD
description: Aprende cómo funcionan las liquidaciones y las redenciones.
topic: users
---

## Descripción general
Cuando pides prestado usando tu Bitcoin como colateral, creas una posición de préstamo (también llamada "Trove"). Hay dos eventos clave del sistema que pueden afectar a tu préstamo:

- **Liquidación**: cierre forzoso de tu préstamo que solo se produce si su salud, medida por el ratio de colateral, cae por debajo de un mínimo crítico del 110%. En una liquidación, pierdes tu colateral.
- **Redención**: cualquier persona que tenga MUSD puede cambiarlo con el protocolo por BTC a \$1 por MUSD (menos una comisión de redención, actualmente del 0.75%), lo que mantiene el precio de MUSD cerca de \$1 mediante el arbitraje. Las redenciones toman BTC primero del trove con el ratio de colateral más bajo (siempre que siga por encima del umbral de liquidación del 110%), por lo que una redención puede reducir tu préstamo aunque tu trove esté a salvo de la liquidación. Si la cantidad de la redención es menor que la deuda de ese trove, se procesa como una redención parcial, es decir, solo se cancela una parte de la deuda. Si es mayor, el trove se redime por completo y la cantidad sobrante pasa al siguiente trove con el CR más bajo. En ambos casos, la deuda y el colateral se retiran en cantidades iguales en dólares, lo que aumenta el ratio de colateralización del trove afectado, aunque el prestatario pierde exposición a BTC en el proceso.

---

## Liquidaciones ⚠️

### ¿Qué es una liquidación?
Una liquidación es un mecanismo de seguridad que cierra automáticamente un préstamo cuando se vuelve demasiado arriesgado. Esto evita que todo el sistema se vuelva inestable.

### ¿Cuándo se produce una liquidación?

:::danger
Tu préstamo corre riesgo de liquidación si su ratio de colateral cae por debajo del 110%. Considéralo el margen de seguridad mínimo absoluto que se exige a tu préstamo.
:::

### ¿Qué ocurre durante una liquidación?
El sistema puede gestionar una liquidación de dos formas:

#### Uso del Stability Pool (método predeterminado):
- El sistema usa stablecoins de su reserva de seguridad, el Stability Pool, para saldar por completo tu deuda.
- La persona o el bot que activó la liquidación recibe una pequeña recompensa (una comisión de gas de 200 MUSD y el 0.5% de tu colateral).
- El resto de tu colateral (99.5%) se transfiere al Stability Pool para compensar a sus depositantes.
- Tu préstamo se cierra y pierdes todo tu colateral.

#### Redistribución (método alternativo):
- Si el Stability Pool está vacío, el sistema reparte tu deuda y tu colateral entre todos los demás titulares de préstamos activos.
- Es un método de respaldo para garantizar que el sistema se mantenga siempre equilibrado.

### Ejemplo de liquidación:
- Imagina que tu préstamo tiene 10,000 MUSD de deuda.
- El valor de tu colateral en BTC cae a \$10,900.
- Tu ratio de colateral es ahora del 109%, por debajo del mínimo del 110%.
- Resultado: tu préstamo se liquida. Se cancela tu deuda de 10,000 MUSD, pero pierdes todo tu colateral en BTC, valorado en \$10,900.

---

## Redenciones 🛡️

### ¿Qué es una redención?
Una redención es una función que permite a cualquier persona que tenga una stablecoin cambiarla por un valor equivalente en dólares de BTC (menos la comisión de redención) directamente con el protocolo. Este proceso ayuda a mantener la stablecoin cerca de su paridad de \$1. No es una penalización y no significa que tu préstamo no sea seguro.

### ¿Cuándo se produce una redención?
Las redenciones pueden producirse en cualquier momento. Cuando un usuario quiere redimir su stablecoin por BTC, el sistema busca préstamos de los que obtener el colateral.

### ¿Qué préstamos se eligen para la redención?
El sistema siempre empieza por el préstamo con el ratio de colateral más bajo que siga por encima del umbral de liquidación del 110%, incluso si ese ratio es saludable y está muy por encima del 110%. Si tu préstamo está menos colateralizado que otros, es más probable que se elija para una redención.

### ¿Qué ocurre durante una redención?

#### Redención completa:
- Si una redención salda toda tu deuda, tu préstamo se cierra.
- Se entrega al redentor un valor equivalente de tu BTC.
- El BTC sobrante es tuyo. Se denomina excedente de colateral (Surplus Collateral) y se envía a una cuenta de custodia especial para que lo reclames.

#### Redención parcial (más habitual):
- El redentor salda una parte de tu deuda.
- Se le entrega un valor equivalente de tu colateral en BTC.
- Resultado: tu préstamo sigue abierto, pero ahora es más pequeño y está más saludable, con un ratio de colateral más alto.

### Ejemplo de redención:
- Imagina que tu préstamo tiene 10,000 MUSD de deuda y \$13,000 de colateral en BTC (un ratio saludable del 130%).
- Otro usuario redime 5,000 MUSD y se elige tu préstamo.
- Resultado:
  - Tu deuda se reduce a 5,000 MUSD.
  - Tu colateral se reduce a \$8,000.
  - Tu nuevo ratio de colateral es ahora del 160% (\$8,000 / 5,000 MUSD), ¡lo que hace que tu préstamo sea mucho más seguro!

### Cómo recuperar tu colateral sobrante después de una redención completa
Si tu préstamo se salda por completo mediante una redención, tu excedente de colateral está seguro. Puedes reclamarlo en cualquier momento a través de la Mezo App.

Nota importante: es posible que la interfaz de usuario actual no muestre tu excedente disponible. Si no ves una alerta "Loan redeemed" en la página Borrow, sigue nuestra guía [Cómo reclamar tu colateral después de una redención completa](/docs/es/docs/users/borrow/claim-collateral-after-redemption/) para reclamarlo manualmente a través del Mezo Explorer.

---

## Principales diferencias de un vistazo

| Característica | Liquidación (cierre forzoso) | Redención (reducción de la deuda) |
| --- | --- | --- |
| Cuándo se produce | Solo cuando tu ratio está por debajo del 110% | Puede producirse cuando tu ratio está por encima del 110% |
| ¿Quién la inicia? | Cualquiera (normalmente bots) | Cualquier usuario que tenga MUSD |
| Efecto en la deuda | Se elimina por completo | Se reduce o se elimina |
| Efecto en el colateral | Pérdida total | Se retira una parte, y puedes reclamar el excedente |
| Efecto para ti | Evento negativo; el préstamo se cierra y pierdes los activos | Neutral o positivo; el préstamo se reduce y está más saludable |

---

## ¿Qué es el Recovery Mode?

:::note
El Recovery Mode es un estado de seguridad temporal que se activa si el ratio de colateral total (TCR) de todo el sistema cae por debajo del 150%. Es un estado especial del sistema con reglas de préstamo más estrictas.
:::

Durante el Recovery Mode:
- **Las liquidaciones no se ven afectadas.** El umbral de liquidación se mantiene en el 110%, igual que en el modo normal. A diferencia de Liquity v1, MUSD no amplía las liquidaciones a ratios de colateral más altos durante el Recovery Mode.
- No se pueden abrir nuevos préstamos con un ratio de colateral inferior al 150%.
- La refinanciación está bloqueada.
- El sistema anima a los usuarios a añadir colateral o reembolsar deuda para que el TCR vuelva a superar el 150%.

---

## Cómo mantener tu préstamo seguro

:::tip
La mejor defensa tanto frente a la liquidación como frente a la redención es mantener un ratio de colateral alto: procura que esté muy por encima del 150%.
:::

### Para evitar la liquidación:
- Mantén un margen saludable. Procura tener un ratio de colateral muy por encima del 110% para protegerte de la volatilidad del mercado. Un ratio superior al 150% también te garantiza poder pedir prestado y refinanciar libremente aunque el sistema entre en Recovery Mode.
- Vigila la salud de tu préstamo con regularidad, sobre todo si el precio de BTC está bajando.
- Actúa de forma proactiva: añade más colateral o reembolsa parte de tu deuda si tu ratio baja demasiado.

### Para reducir la probabilidad de redención:
- Mantén un ratio de colateral alto. A diferencia de las liquidaciones, que se activan en un umbral fijo, las redenciones son relativas: el sistema selecciona primero los troves con los ratios de colateral más bajos. Cuanto más alto sea tu ratio en comparación con otros troves, menos probable será que se redima el tuyo. Aunque el 150% suele ser un buen objetivo de referencia, la posición óptima depende de las condiciones actuales del mercado y de los ratios de colateral de los demás troves abiertos. Conviene revisar periódicamente los troves abiertos y ajustar tu ratio en consecuencia para mantenerte muy por encima de los últimos del grupo.

### Sigue de cerca tu préstamo con MUSD Monitor
Para un monitoreo avanzado, puedes usar [mezotools.cc](https://mezotools.cc).

Esta herramienta te permite:
- Consultar en tiempo real la salud de los Troves y los ratios de colateral.
- Ver las redenciones y liquidaciones recientes de todo el sistema.
- Seguir los precios de BTC y de las stablecoins directamente desde los oráculos onchain de Mezo.

---

Para ver la lista completa de términos y definiciones de MUSD, consulta [Arquitectura y terminología](/docs/es/docs/users/borrow/architecture-and-terminology#definiciones).
