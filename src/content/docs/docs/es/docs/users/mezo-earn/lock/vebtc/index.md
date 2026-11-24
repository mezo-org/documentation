---
title: Descripción general de veBTC
description: Bloquear BTC para obtener rendimiento con veBTC
topic: users
---

veBTC es la representación tokenizada (NFT) del BTC bloqueado en la red Mezo. Bloquear BTC te otorga poder de gobernanza y una parte de las comisiones del protocolo.

## ¿Qué es veBTC?

Cuando bloqueas BTC en Mezo, recibes un NFT veBTC que representa tu posición bloqueada. Este NFT te da:

- **Poder de voto** para dirigir las emisiones en todo el ecosistema
- **Comisiones del protocolo** procedentes de la actividad de la cadena y de las transferencias por el puente
- **Derechos de gobernanza** para dar forma al futuro económico de Mezo

---

## Cómo funciona el poder de voto

Tu peso de veBTC depende de dos factores: la cantidad de BTC bloqueada (más BTC = más poder de voto) y la duración de tu bloqueo (bloqueos más largos = un peso más alto y sostenido).

Tu poder de voto decae de forma lineal con el tiempo. Un usuario que bloquea 1 BTC durante 28 días empieza con 1 veBTC, que decae a 0.5 después de 14 días y llega a 0 al vencimiento. Puedes extender tu bloqueo en cualquier momento para mantener todo tu poder de voto.

### Parámetros del bloqueo

| Parámetro | Valor |
|-----------|-------|
| Bloqueo mínimo | 1 día |
| Bloqueo máximo | 28 días |
| Decaimiento del bloqueo | Lineal: el peso disminuye de forma continua hasta llegar a cero |

---

## Qué ganas

### Ganancias pasivas (todos los titulares de veBTC)

Todos los titulares de veBTC reciben automáticamente una parte de las **comisiones de la cadena y del puente** proporcional a su peso de voto. Es un rendimiento pasivo que se acumula simplemente por tener veBTC, sin necesidad de votar.

### Ganancias activas (requieren votar)

Al [votar por gauges](/docs/es/docs/users/mezo-earn/vote), obtienes recompensas adicionales según cómo asignes tu voto:

- **Comisiones de swap** de los pools por los que votas (cuando los LP hacen staking en esos gauges)
- **Ingresos por intereses/comisiones de MUSD** si votas por el gauge MUSD Savings Rate
- **Incentivos** que los protocolos o usuarios publican para atraer votos hacia gauges específicos

Cuanto más peso de voto asignes a un gauge, mayor será tu parte de las comisiones e incentivos de ese gauge.

:::note[Importante]
Tu asignación se mantiene de una época a otra y sigue generando ganancias hasta que la cambies: no necesitas volver a votar cada semana. Consulta [Épocas](#épocas) más abajo.
:::


---

## Épocas

Mezo Earn funciona en **ciclos de 7 días llamados épocas**. Cada época comienza el jueves a las 00:00 UTC.

### Por qué importan las épocas

- **Los votos se mantienen.** Tu asignación se conserva de una época a otra hasta que la cambies o la restablezcas. Cada bloqueo puede votar una vez por época, por lo que una asignación confirmada no se puede cambiar hasta el siguiente cambio de época.
- **Los votos emitidos en la época N** determinan la asignación de emisiones de la época N+1
- **Las comisiones generadas en la época N** se distribuyen según los votos emitidos en la época N

### Duración del bloqueo y alineación con las épocas

La duración de los bloqueos se alinea con los límites de las épocas, no con días naturales. Cuando creas un bloqueo, **su duración se redondea hacia abajo a la semana completa más cercana**.

Esto significa que:

- Un bloqueo de 28 días creado a mitad de una época tendrá una duración efectiva de aproximadamente 21–28 días, según el momento en que bloquees
- Los bloqueos siempre vencen en los cambios de época (jueves 00:00 UTC)

**Ejemplo:** si seleccionas un bloqueo máximo de 28 días a mitad de una época, la duración efectiva de tu bloqueo se reducirá según el tiempo que quede de la semana, lo que da como resultado un bloqueo de aproximadamente 21–28 días, según el momento en que bloquees.

Esta normalización garantiza que todos los bloqueos venzan limpiamente en los límites de las épocas y simplifica los cálculos del peso de voto en todo el sistema.

| Parámetro de la época | Valor |
|-----------------|-------|
| Duración | 7 días |
| Hora de inicio | Jueves 00:00 UTC |
| Alineación del bloqueo | Redondeado hacia abajo a semanas completas |
