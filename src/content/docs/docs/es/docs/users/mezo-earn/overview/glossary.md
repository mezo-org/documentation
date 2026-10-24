---
title: Glosario
description: Glosario de términos de Mezo Earn
topic: users
---

A continuación encontrarás una lista de términos relacionados con el sistema Mezo Earn.

---

## veBTC

BTC en custodia de voto (vote-escrowed BTC). Un NFT que representa Bitcoin bloqueado y que otorga poder de voto base (multiplicador de 1x) y derecho a ganar comisiones en Mezo Earn. El peso de voto decae de forma lineal durante el período de bloqueo. El bloqueo máximo es de 28 días.

## veMEZO

MEZO en custodia de voto (vote-escrowed MEZO). Un NFT que representa tokens MEZO bloqueados que pueden aplicar un boost de hasta 5x al poder de voto de veBTC, y que vota por sí mismo en los gauges de boost de veBTC y en los [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges). No tiene peso de gobernanza propio y no puede votar en gauges de staking sin veBTC. El bloqueo máximo es de 4 años.

## Boost

El multiplicador que se aplica a una posición de veBTC cuando se dirigen votos de veMEZO hacia ella. Sin boost, veBTC funciona a 1x. Con el boost máximo, veBTC funciona a 5x. El boost depende de tu participación relativa en el total de veBTC y en el total de veMEZO del sistema.

## Peso con boost

El peso de voto combinado cuando veBTC y veMEZO se emparejan. Se calcula como tu peso de veBTC multiplicado por tu multiplicador de boost (entre 1x y 5x). El peso con boost determina tu parte de las comisiones y tu influencia sobre las emisiones.

## Época

Un ciclo de 7 días que rige la votación y la distribución de recompensas. Las épocas comienzan cada jueves a las 00:00 UTC.

## Gauge

Un contrato inteligente que recibe y distribuye recompensas según los votos. Cuanto más peso de voto recibe un gauge, mayor es su parte de las recompensas de esa época.

## Bloqueo

La acción de comprometer BTC o MEZO durante un período determinado para recibir veBTC o veMEZO. Los bloqueos más largos otorgan un peso de voto inicial más alto.

## Gauge de staking

Un gauge vinculado a un token de staking (como los tokens LP o los recibos de ahorro de MUSD). Quienes hacen staking ganan emisiones de MEZO; quienes votan ganan comisiones de trading.

## Gauge de boost de veBTC

Un gauge vinculado a un NFT veBTC específico. Los titulares de veMEZO votan en estos gauges para dar boost a esa posición de veBTC a cambio de incentivos.

## Gauge sin staking

Un gauge sin token de staking, en el que se vota con veMEZO. Sus emisiones se envían a un destino que el propio gauge designa, en lugar de pagarse a quienes hacen staking en Mezo. Votar en uno de ellos es independiente de la votación en gauges con veBTC y del emparejamiento de boost.

## MEZO Gauge

Un gauge sin staking que dirige emisiones de MEZO a pools de liquidez de MUSD fuera de Mezo: Curve y Uniswap en Ethereum, y Aerodrome en Base. Consulta [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges).

## Peso de voto

La influencia que tiene una posición al votar por gauges. En veBTC, se calcula como el BTC bloqueado multiplicado por la duración restante del bloqueo dividida entre la duración máxima del bloqueo. En veMEZO se aplica la misma fórmula, pero con un bloqueo máximo de 4 años.

## Decaimiento

La reducción gradual del peso de voto a medida que un bloqueo se acerca a su vencimiento. Se puede restablecer extendiendo el bloqueo.

## Poke

Una transacción que actualiza el peso con boost de una posición de veBTC. Es necesaria después de cambios en los votos de veMEZO, extensiones del bloqueo o al añadir BTC. Si no haces poke, los cambios en el boost no surten efecto.

## Mercado de emparejamiento

El mecanismo económico mediante el cual los titulares de veBTC pueden atraer votos de veMEZO publicando incentivos en sus gauges de boost, y los titulares de veMEZO pueden obtener rendimiento votando en gauges con incentivos atractivos.

## Incentivos

Recompensas publicadas en los gauges para atraer votos. Los protocolos o usuarios depositan incentivos (en cualquier token ERC-20) para atraer poder de voto hacia gauges específicos.

## Rebase

Distribuciones antidilución para los titulares de veMEZO. Cuando el ratio de bloqueo (suministro de veMEZO / suministro total de MEZO) es bajo, una mayor parte de las emisiones se destina a rebases, lo que protege de la dilución a quienes bloquearon primero.

## Splitter

Un contrato que divide las emisiones entre dos destinos (por ejemplo, validadores frente a ecosistema). Las proporciones de reparto están actualmente fijas y bloqueadas mediante gobernanza.

## MUSD

La stablecoin respaldada por bitcoin de Mezo. Los usuarios pueden pedir prestado MUSD usando su BTC como colateral.

## MUSD Savings Rate Gauge

Un gauge de staking para la bóveda de ahorro de MUSD. Los usuarios que depositan MUSD en la bóveda de ahorro pueden hacer staking de sus tokens de recibo para ganar emisiones de MEZO, mientras que quienes votan en este gauge obtienen rendimiento en MUSD.

## Emisiones

Nuevos tokens MEZO que se distribuyen en cada época a los gauges de staking, a los validadores y a los titulares de veMEZO (como rebases). Las emisiones siguen un calendario de halving: 25% anualizado en los años 0-2, que disminuye hasta ~2% después del año 8.

## Chain Splitter

El primer splitter de la jerarquía de emisiones. Controla qué porcentaje de las emisiones va a los validadores (inicialmente 20%) frente al resto del sistema.

## Ecosystem Splitter

El segundo splitter. Dirige las emisiones que no van a los validadores hacia los gauges de staking. Esta proporción está actualmente fija y bloqueada mediante gobernanza.
