---
title: Descripción general de veMEZO
description: Bloquear MEZO para potenciar el poder de voto y obtener rebases
topic: users
---

veMEZO es la representación tokenizada (NFT) del MEZO bloqueado en la red Mezo. Bloquear MEZO te permite aplicar un boost de hasta 5x a tu poder de voto de veBTC, lo que amplifica tus ganancias, y obtener rebases antidilución a través de las emisiones de MEZO.

## ¿Qué es veMEZO?

Cuando bloqueas MEZO en Mezo, recibes un NFT veMEZO que representa tu posición bloqueada. Este NFT te da:

- Un multiplicador de boost sobre tu poder de voto de veBTC (hasta 5x)
- Recompensas de rebase procedentes de las emisiones semanales de MEZO para compensar la dilución
- Participación en el mercado de emparejamiento para ganar incentivos de los titulares de veBTC
- Votos en los [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges), que dirigen las emisiones de MEZO a pools de MUSD en Curve, Uniswap y Aerodrome

:::note[Importante]
veMEZO no vota por sí mismo en los **gauges de staking**: allí solo multiplica el poder de voto de las posiciones de veBTC. Sí vota por sí mismo en los gauges de boost de veBTC y en los [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges).
:::

---

## Cómo funciona el peso de veMEZO

Tu peso de veMEZO depende de dos factores: la cantidad de MEZO bloqueada (más MEZO = más peso) y la duración de tu bloqueo (bloqueos más largos = un peso más alto y sostenido).

Tu peso decae de forma lineal con el tiempo. Un usuario que bloquea 1,000 MEZO durante 4 años empieza con un peso de 1,000 veMEZO, que decae a 500 después de 2 años y llega a 0 al vencimiento. Puedes extender tu bloqueo en cualquier momento para mantener todo tu peso.

También puedes activar el bloqueo máximo automático (auto-max lock) de tu veMEZO, lo que te permite mantener el peso de voto máximo de 4 años en cada época sin necesidad de volver a bloquear tus tokens continuamente.

### Parámetros del bloqueo

| Parámetro | Valor |
|---|---|
| Bloqueo mínimo | 1 semana |
| Bloqueo máximo | 4 años (1,456 días) |
| Decaimiento del bloqueo | Lineal: el peso disminuye de forma continua hasta llegar a cero |

---

## Qué ganas

### Recompensas de rebase (todos los titulares de veMEZO)

Los titulares de veMEZO reciben una parte de las emisiones semanales de MEZO en forma de rebases. Esto protege contra la dilución causada por las nuevas emisiones. La parte destinada a rebases es dinámica: más alta cuando hay menos tokens bloqueados y más baja a medida que se bloquea más MEZO.

### Incentivos (a través del mercado de emparejamiento)

Los titulares de veMEZO pueden votar en los gauges de veBTC para ganar incentivos. Cuando un titular de veBTC quiere aplicar un boost a su posición pero no tiene suficiente veMEZO, puede publicar incentivos en su gauge de veBTC. Al votar por ese gauge, ganas esos incentivos a cambio de aportar boost.

Consulta [Mecanismo de boost](/docs/es/docs/users/mezo-earn/lock/vemezo/boost-mechanism) para conocer los detalles de cómo funciona el mercado de emparejamiento.

---

## veMEZO frente a veBTC

|  | veBTC | veMEZO |
|---|---|---|
| Activo subyacente | BTC | MEZO |
| Bloqueo máximo | 28 días | 4 años |
| Poder de voto | Poder de voto base | Multiplica el poder de veBTC (hasta 5x) |
| Gana comisiones | Sí (puente, swap, MUSD) | No |
| Gana rebases | No | Sí |
| Gana incentivos | Sí (de los gauges por los que votas) | Sí (de los gauges de boost de veBTC) |
