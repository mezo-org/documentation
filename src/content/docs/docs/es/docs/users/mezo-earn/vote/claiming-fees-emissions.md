---
title: Preguntas frecuentes sobre la votación
description: Preguntas frecuentes sobre la votación en Mezo
topic: users
---

## General

**¿Tengo que votar cada semana?**

No. Tu asignación de votos se mantiene de una época a otra hasta que la cambies o la restablezcas, y sigue ganando su parte de las comisiones e incentivos en cada época. Volver a votar sirve para cambiar la asignación, no para conservarla.

**¿Puedo cambiar mis votos durante una época?**

Cada bloqueo puede votar una vez por época. Si el bloqueo todavía no ha votado en esta época, puedes enviar un nuevo reparto en cualquier momento del periodo de votación, y este reemplaza tu asignación vigente. Una vez confirmado un voto, la asignación de ese bloqueo queda fijada hasta el siguiente cambio de época (jueves 00:00 UTC).

**¿Puedo repartir mis votos entre varios gauges?**

Por supuesto. Puedes asignar tu poder de voto como quieras: 50% a BTC/MUSD, 30% a MUSD Savings Rate y 20% a otro pool.

**¿Qué diferencia hay entre votar con veBTC y con veMEZO?**

Los titulares de veBTC votan en los gauges de staking. Ganan comisiones de trading, incentivos y comisiones pasivas de puente.

Los titulares de veMEZO votan en los gauges de boost de veBTC. Ganan los incentivos que publican los titulares de veBTC que buscan boost, además de las distribuciones de rebase.

---

## Boost y veMEZO

**¿Qué es el boost?**

El boost es un multiplicador (entre 1x y 5x) que amplifica el poder de voto de tu veBTC. Lo proporcionan los votos de veMEZO dirigidos al gauge de boost de tu posición de veBTC.

**¿Necesito veMEZO para ganar como titular de veBTC?**

No. Un veBTC sin boost sigue ganando comisiones de trading, incentivos y comisiones pasivas de puente, solo que con un multiplicador de 1x. veMEZO aumenta tu poder de voto efectivo (hasta 5x), pero no es obligatorio.

**¿Cómo consigo boost para mi posición de veBTC?**

Hay dos formas:
1. **Autoboost:** bloquea MEZO para obtener veMEZO y dirígelo a tu propia posición
2. **Atraer boost:** publica incentivos en tu gauge de boost para atraer votos de veMEZO de otros usuarios

**¿Qué ganan los titulares de veMEZO?**

Los titulares de veMEZO ganan:
- Los incentivos publicados en los gauges de boost por los que votan
- Distribuciones de rebase que los protegen frente a la dilución

**No** ganan comisiones de trading, ingresos de MUSD ni comisiones de puente: estos van a los titulares de veBTC.

**¿Cómo se calcula el boost máximo?**

Alcanzas un boost de 5x cuando tu participación en el total de veMEZO es igual o superior a tu participación en el total de veBTC. Las posiciones de BTC más grandes requieren proporcionalmente más veMEZO para llegar al máximo.

**¿Qué pasa si tengo veMEZO pero no veBTC?**

Aun así puedes obtener rendimiento votando en los gauges de boost de otros usuarios. Ganas los incentivos que hayan publicado, de forma proporcional a tu participación en los votos de ese gauge.

---

## Incentivos

**¿Cómo funcionan los incentivos?**

Los protocolos o los usuarios depositan incentivos en gauges específicos para atraer votos. Al final de la época, los incentivos se distribuyen de forma proporcional entre todos los votantes de ese gauge según su peso de voto. Los incentivos se suman a las comisiones de trading.

**¿Puedo publicar incentivos en mi propio gauge de boost?**

Sí. Así es como atraes votos de veMEZO a tu posición de veBTC si quieres boost pero no tienes MEZO.

**¿Qué tokens se pueden usar como incentivos?**

Cualquier token ERC-20 se puede depositar como incentivo.

---

## Poder de voto

**¿Mi poder de voto disminuye con el tiempo?**

Sí. El poder de voto decae de forma lineal a medida que tu bloqueo se acerca a su vencimiento. Si bloqueaste durante 28 días, el día 14 tendrás aproximadamente el 50% de tu poder de voto inicial. Extender tu bloqueo restablece todo el peso.

**¿Qué pasa si tengo varias posiciones de veBTC?**

Puedes votar con cada posición por separado. Cada NFT tiene su propio poder de voto y puede asignarse a gauges distintos o a los mismos: tú decides.

**¿Qué pasa si no extiendo mi bloqueo?**

Tu poder de voto sigue decayendo hasta llegar a cero en el vencimiento. A partir de ese momento, ya no puedes votar ni ganar recompensas. Debes extender tu bloqueo antes de que venza o crear uno nuevo.

**¿Durante cuánto tiempo puedo bloquear veMEZO?**

El bloqueo máximo de veMEZO es de 4 años (frente a 28 días para veBTC). El bloqueo más largo refleja el papel de MEZO como activo de coordinación de la cadena.

---

## Poke

**¿Qué es el poke?**

El poke es una transacción que actualiza el poder de voto de tu posición para que refleje su estado actual. Si no haces poke, los cambios en tu boost no surten efecto.

**¿Cuándo tengo que hacer poke?**

Haz poke después de:
- Recibir nuevos votos de veMEZO en tu gauge de boost
- Dirigir tu propio veMEZO a tu posición
- Reclamar distribuciones de rebase de veMEZO
- Extender la duración de tu bloqueo
- Añadir más BTC/MEZO a tu bloqueo

**¿Cualquiera puede hacer poke a mi posición?**

Sí. El poke no requiere permisos. Otras personas pueden hacer poke a tu posición si tu poder de voto ha decaído de forma significativa.

---

## Recompensas

**¿Cuándo puedo reclamar mis recompensas?**

Las comisiones y los incentivos se pueden reclamar cuando termina la época. Durante la época, puedes ver cómo se acumulan tus recompensas estimadas, pero no puedes reclamarlas hasta que la época se complete.

**¿Gano recompensas en pools por los que no voto?**

No. Solo ganas comisiones e incentivos de los gauges específicos a los que asignaste poder de voto. Si votaste el 100% por BTC/MUSD, no ganas ninguna recompensa del pool MUSD/USDC.

Excepción: las comisiones pasivas de puente se distribuyen entre todos los titulares de veBTC de forma proporcional a su peso con boost, independientemente de si votan.

**¿Qué son los rebases y cómo los reclamo?**

Los rebases son distribuciones antidilución para los titulares de veMEZO. Una parte de las emisiones semanales se destina a rebases cuando el ratio de bloqueo es bajo. Se reclaman por separado y se suman al peso de tu posición de veMEZO.

---

## Gauges

**¿Cómo se calculan los pesos de los gauges?**

Peso del gauge = poder de voto total asignado a ese gauge / poder de voto total asignado a todos los gauges. Si el gauge BTC/MUSD recibe 1,000 de poder de voto y todos los gauges juntos reciben 10,000, BTC/MUSD obtiene el 10% de las emisiones de esa época.

**¿Puede un gauge recibir cero emisiones?**

Sí. Si nadie vota por un gauge, este recibe cero emisiones en esa época. Por eso existen los mercados de incentivos: los protocolos necesitan votos para atraer emisiones.

**¿Qué son los gauges de boost?**

Cada NFT veBTC tiene su propio gauge de boost. Los titulares de veMEZO votan en estos gauges para dar boost a esa posición de veBTC concreta. El titular del veBTC puede publicar incentivos en su gauge de boost para atraer votos.

**¿Dónde puedo ver los pesos actuales de los gauges y los incentivos?**

Visita la [página Vote](https://mezo.org/vote) para ver en tiempo real los pesos de los gauges, las cantidades de incentivos, las APY proyectadas y el rendimiento histórico.
