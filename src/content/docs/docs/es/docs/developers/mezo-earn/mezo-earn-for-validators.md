---
title: Mezo Earn para validadores
description: >-
  Cómo participan los validadores en el motor económico de Mezo, cómo reciben
  incentivos y cómo interactúan con veBTC, veMEZO, los gauges y el staking de
  LP.
topic: developers
---

Esta página explica cómo participan los validadores en el motor económico de Mezo (Mezo Earn), cómo reciben incentivos y cómo se relaciona todo esto con veBTC, veMEZO, los gauges y el staking de LP.

Está dirigida a:

- Validadores de Mezo actuales y potenciales
- Proveedores de infraestructura y socios
- Titulares de veBTC/veMEZO y LP que quieran entender cómo funcionan las recompensas de los validadores

:::note

El whitepaper de Mezo es la fuente de referencia sobre la mecánica y las fórmulas de veBTC, veMEZO, los gauges, los splitters y las emisiones.

:::

---

## Descripción general

A grandes rasgos:

- Los validadores protegen la cadena de Mezo y ganan recompensas en MEZO a través del Chain Splitter de Mezo Earn.
- Los titulares de veBTC son el ancla de la gobernanza. Votan en los gauges de staking para dirigir las emisiones.

**Mecánica clave:**

- **Reparto de emisiones:** las proporciones de los splitters (Chain Splitter y Ecosystem Splitter) actualmente son fijas y están bloqueadas mediante gobernanza. Es posible que pasen a ser ajustables mediante futuros mecanismos de gobernanza.
- **Rol de veMEZO:** veMEZO actúa como un boost sobre el poder de veBTC (hasta un multiplicador con tope), pero nunca sustituye a BTC como ancla.

---

## Conceptos básicos

### Definiciones clave

Para entender Mezo Earn, distinguimos entre tres términos económicos:

- **Recompensas:** lo que reciben los actores a cambio de su trabajo (por ejemplo, las emisiones de MEZO).
- **Incentivos:** las reglas o beneficios diseñados para fomentar comportamientos específicos (por ejemplo, obtener un boost por tener veMEZO).
- **Bribes:** un presupuesto temporal que aportan protocolos o usuarios para promover una acción específica (por ejemplo, votar por un gauge concreto).

### Actores de Mezo Earn

Mezo Earn coordina a cinco actores principales:

1. **Usuarios finales / quienes bloquean veBTC y veMEZO:** bloquean BTC o MEZO, reciben NFT de veBTC y veMEZO, votan en los gauges y reclaman comisiones/emisiones.
2. **Proveedores de liquidez (LP):** aportan liquidez al DEX y reciben tokens LP y comisiones; opcionalmente, pueden poner sus tokens LP en staking en gauges de staking para cambiar comisiones por emisiones de MEZO.
3. **Validadores:** ejecutan nodos de la cadena de Mezo, participan en el consenso y reciben emisiones de MEZO a través del Chain Splitter.
4. **Protocolos:** despliegan bribes en los gauges para atraer liquidez o votos de gobernanza.
5. **La cadena:** recauda las comisiones de swap y las comisiones de la cadena y de puente, y las redistribuye a través de Earn.

---

## Cómo reciben emisiones los validadores

El chain splitter envía una parte fija de las emisiones de recompensas a los validadores, establecida actualmente en el 20% de las emisiones de recompensas. Esta proporción está bloqueada mediante gobernanza.

Las emisiones de los validadores se distribuyen a partes iguales entre los validadores activos. Actualmente no existe ningún mecanismo para que los titulares de veBTC voten por validadores individuales ni dirijan las emisiones a validadores específicos.

---

## Gauges de boost de veBTC y mercado de emparejamiento

Aunque no son específicos de los validadores, los gauges de boost de veBTC y el mercado de emparejamiento influyen directamente en la eficiencia con la que los validadores y los LP pueden atraer votos.

- Cada NFT de veBTC tiene su propio gauge de boost (sin staking).
- Los titulares de veMEZO emiten votos en estos gauges con su peso de veMEZO.

**Dinámica del mercado:**

- **Participantes con mucho BTC y poco MEZO:** ofrecen incentivos (bribes) en sus gauges de boost de veBTC para atraer votos de veMEZO y aumentar su multiplicador (hasta 5x).
- **Participantes con mucho MEZO y poco BTC:** dirigen sus votos de veMEZO a gauges de boost de veBTC para ganar esos incentivos sin tener BTC.

---

## El staking de LP y su relación con los validadores

### ¿Qué es el staking de LP?

Los LP aportan liquidez a los pools del DEX en Mezo y reciben tokens LP que representan su participación en el pool. Pueden elegir entre dos modos:

**1. LP sin staking:**

- Los LP conservan los tokens LP en su billetera.
- Ganan la parte proporcional de las comisiones de swap que les corresponde directamente del pool.
- No se les dirige ninguna emisión de MEZO.

**2. LP en staking:**

- Los LP ponen sus tokens LP en staking en un gauge de staking.
- La parte de las comisiones subyacentes de los tokens LP en staking se desvía a los votantes de veBTC que votan por ese gauge.
- A cambio, los LP reciben las emisiones de MEZO dirigidas a ese gauge.

**El intercambio económico:**

- Los LP cambian rendimiento real directo (comisiones) por emisiones de MEZO.
- Los votantes de veBTC + veMEZO cambian su poder de voto por el derecho a esas comisiones desviadas y a cualquier incentivo añadido al gauge.

### Cómo afecta el staking de LP a los validadores

A través del árbol de splitters:

- El **chain splitter** determina qué parte del fondo de recompensas se destina a actividades de validadores frente a actividades no relacionadas con validadores. Esta proporción actualmente es fija, de 20% para validadores / 80% para el ecosistema, y está bloqueada mediante gobernanza.
- El **ecosystem splitter** dirige el fondo no destinado a validadores a los gauges de staking (pools de LP + ahorros en MUSD). Esta proporción actualmente es fija y está bloqueada mediante gobernanza.
- Después, los gauges de LP compiten por las emisiones de su rama con el gauge de ahorros en MUSD y con otros gauges de LP.

---

## Paso a paso: staking de LP

1. **Aporta liquidez:** elige un pool en el DEX de Mezo, deposita activos y recibe tokens LP.

2. **Localiza el gauge de staking:** abre el frontend de Earn o del DEX, busca el gauge de staking del pool y confirma que acepta tokens LP.

3. **Pon los tokens LP en staking:** aprueba el contrato y pon en staking la cantidad que quieras. Esto desvía las comisiones del pool al fondo de comisiones del gauge y distribuye emisiones de MEZO a quienes tienen tokens LP en staking.

4. **Votación de veBTC en el gauge de LP:** los titulares de veBTC (+veMEZO) pueden votar en el gauge de LP. Un mayor peso de voto dirige más emisiones de MEZO al gauge y más comisiones/bribes del pool a los votantes.

5. **Reclamar recompensas:**
   - **LP:** reclaman las emisiones de MEZO (asignadas por época).
   - **Votantes de veBTC:** reclaman su parte de las comisiones de swap desviadas y de los incentivos.

---

## Gauge de ahorros en MUSD

La tasa de ahorro de MUSD se implementa como otro gauge de staking.

- Los usuarios depositan MUSD en una bóveda de ahorros y reciben un token de recibo.
- Si ponen el token de recibo en staking en el gauge de ahorros en MUSD:
  - Su rendimiento directo en MUSD se desvía al fondo de comisiones del gauge.
  - A cambio, ganan las emisiones de MEZO dirigidas a ese gauge.
- Los titulares de veBTC que votan en el gauge de ahorros en MUSD reciben:
  - Rendimiento en MUSD (procedente de intereses, comisiones de originación y comisiones de refinanciación).
  - Cualquier incentivo en MEZO dirigido a ese gauge.

Este gauge compite directamente con los gauges de LP por las emisiones de la rama de staking y por la atención de los votantes.

---

## Contacto y soporte en Discord

Para preguntas específicas sobre validadores, incorporación y coordinación: únete al [Discord de Mezo](https://discord.mezo.org) y participa en el canal #developers.
