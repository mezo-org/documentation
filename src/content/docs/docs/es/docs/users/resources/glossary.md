---
title: Glosario
description: >-
  Referencia completa de la A a la Z de los términos que se usan en el
  ecosistema de Mezo.
topic: users
---

Referencia completa de los términos que se usan en el ecosistema de Mezo. Para los términos específicos de Mezo Earn, consulta el [glosario de Mezo Earn](/docs/es/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker (creador de mercado automatizado). Tipo de exchange descentralizado que usa pools de liquidez y fórmulas matemáticas, en lugar de libros de órdenes, para determinar los precios de los activos y ejecutar operaciones. Mezo Pools usa un AMM al estilo de Aerodrome, con curvas de producto constante para los pares volátiles y curvas estables para los pares correlacionados. Consulta la [descripción general de Mezo Pools](/docs/es/docs/users/mezo-earn/pools).

## Explorador de bloques

Herramienta web para ver transacciones, direcciones y datos onchain. El explorador de mainnet de Mezo está en [explorer.mezo.org](https://explorer.mezo.org/) y el de testnet, en [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

Multiplicador que se aplica a una posición de veBTC cuando se dirigen votos de veMEZO hacia ella. Sin boost, veBTC opera a 1x. Con el boost máximo, veBTC opera a 5x. El boost depende de tu participación relativa en el total de veBTC y en el total de veMEZO del sistema. Consulta [Mecanismo de boost](/docs/es/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Peso con boost

Peso de voto combinado cuando se emparejan veBTC y veMEZO. Se calcula multiplicando tu peso de veBTC por tu multiplicador de boost (entre 1x y 5x). El peso con boost determina tu participación en las comisiones y tu influencia sobre las emisiones.

## BTC

Bitcoin. BTC es el token de gas nativo de Mezo (con 18 decimales) y el principal colateral para acuñar [MUSD](#musd). Todas las transacciones en Mezo se pagan en BTC.

## Billetera BTC

Billetera nativa de Bitcoin que se usa para depositar BTC directamente en Mezo. Entre las billeteras compatibles están UniSat, OKX y Xverse. Los formatos de dirección compatibles son Legacy (P2PKH), Native SegWit (P2WPKH) y Nested SegWit (P2SH-P2WPKH). Consulta [Depositar activos](/docs/es/docs/users/getting-started/deposit-assets).

## ID de cadena

Identificador numérico de una red blockchain. Mezo Mainnet usa el ID de cadena `31612` y Mezo Testnet usa el ID de cadena `31611`. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## Chain Splitter

Primer splitter de la jerarquía de emisiones. Controla qué porcentaje de las emisiones de MEZO va a los validadores (20%) y cuál al resto del ecosistema (80%). Actualmente, esta proporción es fija y está bloqueada mediante gobernanza. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Cliff

Período de espera antes de que los tokens empiecen a desbloquearse. En el calendario de vesting de Mezo, las asignaciones del equipo y de los inversores tienen un cliff de 1 año desde el TGE, lo que significa que no se desbloquea ningún token durante los primeros 12 meses. Consulta [Distribución de tokens](/docs/es/docs/users/mezo/token-distribution).

## Colateral

Activos que se comprometen para garantizar un préstamo. En Mezo, se deposita BTC como colateral para pedir prestado [MUSD](#musd). Si el valor del colateral cae demasiado en relación con la deuda, la posición puede ser [liquidada](#liquidación). Consulta [Pedir prestado y acuñar MUSD](/docs/es/docs/users/borrow/mint-musd).

## Excedente de colateral

Colateral sobrante que queda después de que un [trove](#trove) se redime por completo. Este excedente se envía a un contrato de custodia para que el prestatario lo reclame. Consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).

## Ratio de colateralización (ICR)

Individual Collateralization Ratio (ratio de colateralización individual). Relación entre el valor en dólares del colateral de un trove y su deuda total. Por ejemplo, si tu colateral en BTC vale \$13,000 y tu deuda es de \$10,000, tu ICR es del 130%. Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## CometBFT

Motor de consenso sobre el que funciona Mezo, antes conocido como Tendermint. CometBFT proporciona consenso con tolerancia a fallas bizantinas, lo que permite una finalidad de bloques rápida en la red Mezo.

## Cosmos SDK

Framework modular que se usa para construir la blockchain de Mezo. Cosmos SDK proporciona la capa de aplicación, mientras que [CometBFT](#cometbft) se encarga del consenso. Esta arquitectura permite que Mezo admita tanto funcionalidad nativa de Cosmos como funcionalidad compatible con [EVM](#evm).

## Ratio de colateralización crítico (CCR)

Umbral de colateral de todo el sistema, fijado en el 150%. Cuando el ratio de colateralización total (TCR) cae por debajo del CCR, el sistema entra en [Recovery Mode](#recovery-mode). Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## dApp

Aplicación descentralizada. Aplicación de software que se ejecuta en una blockchain en lugar de en servidores centralizados. Los desarrolladores pueden crear dApps en Mezo con las herramientas EVM estándar. Consulta [Requisitos para dApps](/docs/es/docs/developers/getting-started/dapp-requirements).

## Decaimiento

Reducción gradual del peso de voto a medida que un bloqueo se acerca a su vencimiento. El poder de voto de veBTC y veMEZO decae linealmente con el tiempo. Puedes restablecer el decaimiento extendiendo tu bloqueo. Consulta [Descripción general de veBTC](/docs/es/docs/users/mezo-earn/lock/vebtc) y [Descripción general de veMEZO](/docs/es/docs/users/mezo-earn/lock/vemezo).

## Delegador

Participante que delega su stake o su poder de voto en un [validador](#validador). Los validadores pueden compartir recompensas con los delegadores, aunque no están obligados a hacerlo.

## Ecosystem Splitter

Segundo splitter de la jerarquía de emisiones. Reparte las emisiones que no van a los validadores entre los [gauges de staking](#gauge-de-staking) (90%) y los [gauges sin staking](#gauge-sin-staking) (10%); estos últimos financian los [MEZO Gauges](#mezo-gauge). Se fija por votación de veBTC. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Emisiones

Nuevos tokens MEZO que se distribuyen en cada época a los gauges de staking, a los validadores y a los titulares de veMEZO (como rebases). Las emisiones siguen un calendario de halving inspirado en Bitcoin: empiezan en un 25% anualizado y bajan al 2% después del año 8. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Época

Ciclo de 7 días que rige la votación y la distribución de recompensas en Mezo Earn. Las épocas empiezan cada jueves a las 00:00 UTC. Los votos no se trasladan de una época a otra. Consulta [Descripción general de veBTC](/docs/es/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Interfaz estándar para tokens fungibles en blockchains compatibles con EVM. Los tokens transferidos mediante el puente desde Ethereum a Mezo se representan como tokens mERC-20 (p. ej., mUSDC, mUSDT). Consulta [Puentes](/docs/es/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine (máquina virtual de Ethereum). Entorno de ejecución de los contratos inteligentes en blockchains compatibles con Ethereum. Mezo es compatible con EVM, lo que significa que los desarrolladores pueden desplegar contratos en Solidity con herramientas conocidas como Hardhat y Foundry. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## Billetera EVM

Billetera compatible con Ethereum (p. ej., MetaMask, Rabby) que se usa para interactuar con la capa EVM de Mezo. Las billeteras EVM se usan para interactuar con dApps, hacer swaps y gestionar posiciones en Mezo. Consulta [Conectar tu billetera](/docs/es/docs/users/getting-started/connect).

## Faucet

Servicio que distribuye pequeñas cantidades de tokens de testnet con fines de desarrollo. El faucet de testnet de Mezo proporciona BTC de prueba para desplegar y probar dApps en Mezo Testnet.

## Compensación de gas

Reembolso de 200 MUSD que se paga a quien llama a una función de [liquidación](#liquidación), junto con el 0.5% del colateral liquidado. Esto garantiza que las liquidaciones sigan siendo rentables para quienes las ejecutan, incluso cuando la actividad de la red es alta. Los 200 MUSD se descuentan al abrir un préstamo y se devuelven cuando el préstamo se cierra de forma normal. Consulta [Arquitectura de MUSD](/docs/es/docs/users/borrow/architecture-and-terminology).

## Gauge

Contrato inteligente que recibe y distribuye recompensas en función de los votos. Cuanto más peso de voto recibe un gauge, mayor es su participación en las emisiones de MEZO de esa época. Entre los tipos de gauge están los [gauges de staking](#gauge-de-staking), los [gauges de boost de veBTC](#gauge-de-boost-de-vebtc) y los [gauges sin staking](#gauge-sin-staking), como los [MEZO Gauges](#mezo-gauge). Consulta el [glosario de Mezo Earn](/docs/es/docs/users/mezo-earn/overview/glossary).

## Tasa de interés global

Tasa de interés única fijada por la gobernanza que se aplica a todos los préstamos en MUSD que se abran a partir de entonces. Una vez abierto un préstamo, este conserva la tasa con la que se creó, aunque la tasa global cambie. Los usuarios pueden [refinanciar](#refinanciación) para adoptar la tasa global vigente. Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## Gobernanza

Sistema mediante el cual los titulares de veBTC definen los parámetros del protocolo y las emisiones. veMEZO potencia el poder de voto, pero no tiene derechos de gobernanza propios. Consulta [Gobernanza](/docs/es/docs/users/mezo/governance).

## Calendario de halving

Modelo inspirado en Bitcoin que rige las emisiones de MEZO. La tasa de emisión se reduce a la mitad aproximadamente cada 2 años: 25% en los años 0-2, 12.5% en los años 2-4, 6.25% en los años 4-8 y, después, se estabiliza de forma permanente en el 2%. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Pérdida impermanente

Pérdida potencial que sufre un proveedor de liquidez cuando la relación de precios de los activos del pool cambia, en comparación con simplemente mantenerlos. Es inherente a los pools basados en AMM y es más pronunciada en los [pools volátiles](#pool-volátil).

## Incentivos

Recompensas publicadas en los gauges para atraer votos. Los protocolos o los usuarios depositan incentivos (en cualquier token ERC-20) para atraer poder de voto hacia gauges específicos. Los incentivos crean el [mercado de emparejamiento](#mercado-de-emparejamiento) entre los titulares de veBTC y de veMEZO. Consulta [Descripción general de la votación](/docs/es/docs/users/mezo-earn/vote).

## Liquidación

Cierre forzoso de un [trove](#trove) con colateral insuficiente. Un trove puede liquidarse cuando su [ICR](#ratio-de-colateralización-icr) cae por debajo del 110%. El umbral de liquidación se mantiene en el 110% incluso durante el [Recovery Mode](#recovery-mode). El [Stability Pool](#stability-pool) absorbe la deuda, y el colateral liquidado se distribuye entre los depositantes del Stability Pool. Consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).

## Pool de liquidez

Contrato inteligente que guarda reservas de dos tokens y permite el trading descentralizado. Los usuarios depositan activos en un pool para convertirse en proveedores de liquidez y ganar comisiones de trading. Consulta la [descripción general de Mezo Pools](/docs/es/docs/users/mezo-earn/pools).

## Bloqueo

Acción de comprometer BTC o MEZO durante un período determinado para recibir [veBTC](#vebtc) o [veMEZO](#vemezo). Los bloqueos más largos otorgan un peso de voto inicial mayor. Los bloqueos de veBTC van de 1 a 28 días; los de veMEZO, de 1 semana a 4 años. Consulta [Descripción general de veBTC](/docs/es/docs/users/mezo-earn/lock/vebtc) y [Descripción general de veMEZO](/docs/es/docs/users/mezo-earn/lock/vemezo).

## Token LP

Token de proveedor de liquidez (Liquidity Provider). Token ERC-20 que recibes cuando depositas activos en un [pool de liquidez](#pool-de-liquidez). Los tokens LP representan tu parte proporcional de las reservas del pool y te dan derecho a una parte de las comisiones de trading. Consulta la [descripción general de Mezo Pools](/docs/es/docs/users/mezo-earn/pools).

## Mainnet

Red blockchain de producción en la que se procesan activos y transacciones reales. Mezo Mainnet tiene el ID de cadena `31612` y usa BTC para el gas. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## Mercado de emparejamiento

Mecanismo económico en el que los titulares de veBTC pueden atraer votos de veMEZO publicando [incentivos](#incentivos) en sus gauges de boost, y los titulares de veMEZO pueden obtener rendimiento votando en gauges con incentivos atractivos. Consulta [Mercado de emparejamiento](/docs/es/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Token nativo de Mezo que se usa para potenciar el poder de voto e influir en el destino de las comisiones y los incentivos del protocolo. MEZO puede bloquearse como [veMEZO](#vemezo) para multiplicar el peso de voto de veBTC hasta 5x y ganar recompensas de rebase. El suministro total de génesis es de 1,000,000,000 MEZO. Consulta [Descripción general de MEZO](/docs/es/docs/users/mezo).

## Mezo App

Interfaz web principal en [mezo.org](https://mezo.org) para interactuar con la red Mezo. Desde la Mezo App, los usuarios pueden depositar activos, usar el puente, pedir prestado MUSD, aportar liquidez, bloquear tokens y votar en gauges.

## Mezo Borrow

Función de la Mezo App que permite a los usuarios depositar BTC como colateral y pedir prestado [MUSD](#musd) con ese respaldo. Cada posición de préstamo se denomina [trove](#trove). Consulta [Pedir prestado y acuñar MUSD](/docs/es/docs/users/borrow/mint-musd).

## Mezo Bridge

Puente nativo para depositar y retirar activos entre Mezo y Ethereum o Bitcoin. Admite BTC, tBTC y tokens mERC-20. Consulta [Puentes](/docs/es/docs/users/mainnet/bridges).

## Mezo Earn

Sistema integral de rendimiento y gobernanza de Mezo, que abarca el bloqueo ([veBTC](#vebtc), [veMEZO](#vemezo)), la votación en [gauges](#gauge), el aporte de liquidez en [pools](#pool-de-liquidez) y los depósitos en [bóvedas](#musd-savings-vault). Consulta la [descripción general de Mezo Earn](/docs/es/docs/users/mezo-earn/overview).

## MEZO Gauge

[Gauge sin staking](#gauge-sin-staking) en el que votan los titulares de veMEZO para dirigir las emisiones de MEZO a pools de liquidez de MUSD fuera de Mezo: Curve y Uniswap en Ethereum, y Aerodrome en Base. Se financia con la rama sin staking de las emisiones (actualmente el 8% de las recompensas de emisión semanales). Consulta [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

Mercado de la Mezo App para hacer swaps de tokens. Usa el [contrato router](#contrato-router) para enrutar las operaciones a través de los [pools de liquidez](#pool-de-liquidez) disponibles.

## Mezo Passport

Paquete para desarrolladores construido sobre RainbowKit que ofrece opciones de conexión tanto para billeteras de Bitcoin como para billeteras EVM. Mezo Passport se integra con viem y wagmi para simplificar la gestión de billeteras. Consulta [Configurar Mezo Passport](/docs/es/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

Sistema de pools de liquidez de Mezo, que funciona como reservas de liquidez onchain automatizadas para los swaps de tokens. Los pools usan un AMM al estilo de Aerodrome y son de dos tipos: [volátiles](#pool-volátil) y [estables](#pool-estable). Consulta la [descripción general de Mezo Pools](/docs/es/docs/users/mezo-earn/pools).

## Ratio de colateralización mínimo (MCR)

Ratio de colateral mínimo exigido para un [trove](#trove), fijado en el 110%. Si el [ICR](#ratio-de-colateralización-icr) de un trove cae por debajo del MCR, pasa a ser elegible para [liquidación](#liquidación). Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## MUSD

Stablecoin de Mezo respaldada por Bitcoin y vinculada a \$1 USD. Los usuarios piden prestado MUSD depositando BTC como colateral en un [trove](#trove). La paridad se mantiene mediante las [redenciones](#redención) y el [Stability Pool](#stability-pool). Consulta [Descripción general de MUSD](/docs/es/docs/users/borrow).

## MUSD Bridge

Puente cross-chain para transferir MUSD entre Mezo y Ethereum, impulsado por el protocolo [Native Token Transfer (NTT)](#wormhole-ntt) de Wormhole. Consulta [MUSD Bridge](/docs/es/docs/users/borrow/musd-bridge).

## MUSD Savings Rate Gauge

[Gauge de staking](#gauge-de-staking) del [MUSD Savings Vault](#musd-savings-vault). Los usuarios que depositan MUSD en la bóveda de ahorro pueden hacer staking de sus tokens de recibo sMUSD para ganar emisiones de MEZO, mientras que quienes votan con veBTC en este gauge obtienen rendimiento en MUSD procedente de las comisiones del protocolo. Consulta [Bóvedas](/docs/es/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Producto de ahorro nativo de Mezo para los titulares de MUSD. Deposita MUSD para ganar una parte de las comisiones del protocolo generadas por la actividad de préstamo (intereses, comisiones de emisión, comisiones de refinanciación). Recibes sMUSD como token de recibo que representa tu participación. Consulta [Bóvedas](/docs/es/docs/users/mezo-earn/vaults).

## Gauge sin staking

[Gauge](#gauge) sin token de staking en el que se vota con veMEZO. En lugar de pagar a stakers en Mezo, sus emisiones se envían al destino que indica el gauge; en el caso de los [MEZO Gauges](#mezo-gauge), un pool de liquidez en otra cadena. Votar en uno de ellos es independiente de la votación de gauges con veBTC y del emparejamiento de [boost](#boost). Consulta [MEZO Gauges](/docs/es/docs/users/mezo-earn/vote/mezo-gauges).

## Nodo

Computadora que ejecuta el cliente de la cadena Mezo (mezod) y participa en la red. Entre los tipos de nodo están los nodos [validadores](#validador) (consenso y producción de bloques), los nodos RPC (endpoints de API para dApps) y los nodos semilla (arranque de la red). Consulta [Validator Kit](/docs/es/docs/developers/mezo-nodes/validator-kit).

## Oráculo

Servicio que proporciona datos externos (como precios de activos) a los contratos inteligentes onchain. Mezo usa Skip Connect como oráculo principal, integrado directamente en los nodos validadores. También están disponibles oráculos de terceros, como Pyth, Stork y Supra. Consulta [Infraestructura de oráculos](/docs/es/docs/developers/architecture/oracles).

## Comisión de originación

Comisión única que se cobra al pedir prestado MUSD, calculada como el 0.1% de la cantidad prestada. La comisión se suma al principal del préstamo y genera intereses. Al [refinanciar](#refinanciación) se cobra una comisión de originación por refinanciación (una fracción de la comisión normal). Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value (valor controlado por el protocolo). Contrato que gestiona las comisiones recaudadas por los préstamos y las refinanciaciones de MUSD. Las comisiones se reparten entre el pago del préstamo de arranque (bootstrap loan) y el sistema de gauges. Una vez reembolsado el préstamo de arranque, las comisiones se acumulan como liquidez propiedad del protocolo en el [Stability Pool](#stability-pool). Consulta [Arquitectura de MUSD](/docs/es/docs/users/borrow/architecture-and-terminology).

## Poke

Transacción que actualiza el peso con boost de una posición de veBTC. Es necesaria después de cambiar los votos de veMEZO, extender un bloqueo o añadir BTC. Si no haces poke, los cambios de boost no surten efecto. Consulta el [glosario de Mezo Earn](/docs/es/docs/users/mezo-earn/overview/glossary).

## Pool Factory

Contrato inteligente que despliega nuevos pools de liquidez en Mezo. Actualmente lo gestiona el equipo de Mezo, con planes de abrir en el futuro la creación de pools sin permisos. Dirección en Mainnet: `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Consulta [Mezo Pools (desarrolladores)](/docs/es/docs/developers/features/mezo-pools).

## Portal Bridge

Interfaz de usuario en [portalbridge.com](https://portalbridge.com/) para transferir MUSD mediante el puente entre Mezo y Ethereum con el protocolo Wormhole NTT. Consulta [MUSD Bridge](/docs/es/docs/users/borrow/musd-bridge).

## Feed de precios

Datos onchain proporcionados por [oráculos](#oráculo) que informan del precio de mercado actual de los activos. Mezo usa Skip Connect para determinar los precios de los activos durante el consenso de bloques y escribirlos en el estado onchain. Consulta [Infraestructura de oráculos](/docs/es/docs/developers/architecture/oracles).

## Rebase

Distribuciones antidilución para los titulares de veMEZO procedentes de las emisiones semanales de MEZO. Cuando el ratio de bloqueo (suministro de veMEZO / suministro total de MEZO) es bajo, una mayor parte de las emisiones va a los rebases, lo que protege de la dilución a quienes bloquearon primero. A medida que se bloquea más MEZO, la parte destinada a rebases se reduce. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Recovery Mode

Estado de seguridad temporal que se activa cuando el ratio de colateralización total (TCR) de todo el sistema cae por debajo del [CCR](#ratio-de-colateralización-crítico-ccr) del 150%. Durante el Recovery Mode, el umbral de liquidación se mantiene en el 110% (a diferencia de Liquity v1, MUSD no amplía las liquidaciones durante el Recovery Mode). Sin embargo, no se pueden abrir nuevos préstamos por debajo del 150% y la refinanciación queda bloqueada. Consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).

## Redención

Acción de cambiar MUSD por un valor equivalente en dólares de BTC directamente con el protocolo. Cualquier titular de MUSD puede redimir, sea o no prestatario. Las redenciones se dirigen primero al [trove](#trove) con el ratio de colateralización más bajo. Este mecanismo ayuda a mantener la paridad de MUSD en \$1. Consulta [Liquidaciones y redenciones de MUSD](/docs/es/docs/users/borrow/liquidation-mechanics).

## Refinanciación

Proceso de actualizar la tasa de interés de un préstamo a la [tasa de interés global](#tasa-de-interés-global) vigente. La refinanciación conlleva una comisión de originación reducida, pero evita tener que cerrar y volver a abrir un préstamo. También puedes refinanciar para ampliar tu línea de crédito si el BTC se ha revalorizado. Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## Contrato router

Contrato inteligente que enruta los swaps de tokens a través de los [pools de liquidez](#pool-de-liquidez) disponibles en Mezo. Los usuarios aprueban tokens para el router y llaman a las funciones de swap con los parámetros que deseen. Dirección en Mainnet: `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Consulta [Mezo Pools (desarrolladores)](/docs/es/docs/developers/features/mezo-pools).

## Endpoint RPC

URL de red que usan las aplicaciones para comunicarse con la blockchain de Mezo. Los endpoints RPC admiten los métodos JSON-RPC estándar de Ethereum. Hay varios proveedores disponibles para mainnet, entre ellos Boar, Imperator, Validation Cloud y dRPC. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## Proveedor RPC

Servicio que opera [endpoints RPC](#endpoint-rpc) para la red Mezo. Proveedores como Boar, Imperator, Validation Cloud y dRPC ofrecen conexiones HTTPS y WebSocket para mainnet. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## Deslizamiento (slippage)

Diferencia entre el precio esperado de una operación y el precio real de ejecución. El deslizamiento es mayor en los pools con menos liquidez o en las operaciones de mayor tamaño. Los [pools estables](#pool-estable) están diseñados para minimizar el deslizamiento en los pares de activos correlacionados.

## Splitter

Contrato que divide las emisiones de MEZO entre dos destinos. Actualmente, las proporciones de reparto son fijas y están bloqueadas mediante gobernanza. Consulta [Chain Splitter](#chain-splitter) y [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Reserva de MUSD que actúa como primera línea de defensa frente a las [liquidaciones](#liquidación). Los usuarios depositan MUSD en el Stability Pool y, a cambio, reciben una parte del colateral liquidado. El contrato [PCV](#pcv) aporta al pool un depósito inicial de 100M MUSD. Consulta [Conceptos clave de MUSD](/docs/es/docs/users/borrow/concepts).

## Pool estable

[Pool de liquidez](#pool-de-liquidez) optimizado para operar entre activos con valores muy correlacionados, como MUSD y USDC. Los pools estables usan una fórmula especializada para ofrecer un [deslizamiento](#deslizamiento-slippage) mucho menor y cobran una comisión de trading del 0.02%. Consulta [Comisiones de los pools](/docs/es/docs/users/mezo-earn/pools/pools-fees).

## Gauge de staking

[Gauge](#gauge) vinculado a un token de staking (como los tokens LP o los tokens de recibo sMUSD). Quienes hacen staking ganan emisiones de MEZO; quienes votan con veBTC en el gauge obtienen comisiones de trading o ingresos del protocolo. Los gauges de staking reciben aproximadamente el 72% de las emisiones netas. Consulta el [glosario de Mezo Earn](/docs/es/docs/users/mezo-earn/overview/glossary).

## Subgraph

Capa de datos indexada y consultable para datos de blockchain, a la que se accede mediante API de GraphQL. Mezo usa Goldsky para desplegar subgraphs, lo que permite a las dApps consultar de forma eficiente datos onchain como transferencias, actividad de los pools y estado del protocolo. Consulta [Despliegue de subgraphs](/docs/es/docs/developers/subgraphs).

## Comisiones de swap

Comisiones que se cobran en cada swap de tokens en un [pool de liquidez](#pool-de-liquidez). Los pools volátiles cobran un 0.30% y los pools estables, un 0.02%. Las comisiones se cobran en el token de entrada y se guardan en un contrato PoolFees independiente para que los proveedores de liquidez las reclamen. Consulta [Comisiones de los pools](/docs/es/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Wrapper descentralizado de Bitcoin creado por Thesis e impulsado por [Threshold Network](#threshold-network). tBTC está respaldado 1:1 por Bitcoin nativo y es la forma que adopta BTC cuando se transfiere mediante un puente a redes compatibles con Ethereum. En Mezo, el BTC depositado se canaliza a través de la infraestructura de custodia de tBTC. Consulta [Arquitectura de MUSD](/docs/es/docs/users/borrow/architecture-and-terminology).

## Emisiones de cola

Tasa de emisión anual perpetua del 2% de MEZO que empieza después del año 8 del [calendario de halving](#calendario-de-halving). Las emisiones de cola proporcionan incentivos continuos e indefinidos para validadores, proveedores de liquidez y participantes de la gobernanza. Consulta [Calendario de emisiones](/docs/es/docs/users/mezo/emissions).

## Testnet

Red de pruebas en la que los desarrolladores pueden desplegar y probar aplicaciones sin usar activos reales. Mezo Testnet tiene el ID de cadena `31611`. Consulta [Configurar tu entorno](/docs/es/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event (evento de generación de tokens). Momento en que se crearon y distribuyeron por primera vez los tokens MEZO. Las asignaciones de la comunidad y de la Fundación se desbloquearon en el TGE, mientras que las asignaciones del equipo y de los inversores están sujetas a un cliff de 1 año y a un vesting lineal de 3 años. Consulta [Distribución de tokens](/docs/es/docs/users/mezo/token-distribution).

## Threshold Network

Red descentralizada que impulsa el puente de [tBTC](#tbtc). Threshold opera un conjunto descentralizado de firmantes que ha transferido mediante su puente más de 28,000 Bitcoin desde principios de 2020. Consulta [Arquitectura de MUSD](/docs/es/docs/users/borrow/architecture-and-terminology).

## Distribución de tokens

Asignación del suministro de génesis de 1,000,000,000 MEZO: comunidad (40%), inversores y socios (30%), equipo (20%) y Fundación (10%). Todo el vesting finaliza en un plazo de 36 meses desde el [TGE](#tge). Consulta [Distribución de tokens](/docs/es/docs/users/mezo/token-distribution).

## Comisiones de trading

Consulta [Comisiones de swap](#comisiones-de-swap).

## Trove

Posición de deuda colateralizada en Mezo, vinculada a una única dirección de Ethereum. Los usuarios abren un trove depositando BTC y pidiendo prestado [MUSD](#musd) con ese respaldo. En protocolos similares también se denomina "CDP". Consulta [Pedir prestado y acuñar MUSD](/docs/es/docs/users/borrow/mint-musd).

## Validador

Operador de nodo que participa en el consenso y la producción de bloques en la red Mezo. Los validadores ejecutan el cliente mezod, protegen la cadena y reciben emisiones de MEZO a través del Chain Splitter. Consulta [Validadores de Mezo](/docs/es/docs/developers/mezo-nodes/validators).

## Validator Kit

Kit de herramientas completo para desplegar y gestionar nodos de Mezo. Admite Docker, daemon nativo, Kubernetes y despliegue en la nube. Incluye plantillas de configuración, monitoreo y scripts de automatización. Consulta la [guía del Validator Kit](/docs/es/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC (BTC en custodia de voto). NFT que representa Bitcoin bloqueado y que otorga poder de voto y derecho a ganar comisiones en Mezo Earn. El peso de voto decae linealmente durante el período de bloqueo. El bloqueo máximo es de 28 días. Consulta [Descripción general de veBTC](/docs/es/docs/users/mezo-earn/lock/vebtc).

## Gauge de boost de veBTC

[Gauge](#gauge) asociado a un NFT de veBTC concreto. Los titulares de veMEZO votan en estos gauges para dar [boost](#boost) a esa posición de veBTC a cambio de [incentivos](#incentivos). Consulta [Mercado de emparejamiento](/docs/es/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO (MEZO en custodia de voto). NFT que representa tokens MEZO bloqueados que puede aplicar [boost](#boost) al poder de voto de veBTC hasta 5x y que vota por sí mismo en los [gauges de boost de veBTC](#gauge-de-boost-de-vebtc) y en los [MEZO Gauges](#mezo-gauge). No tiene peso de gobernanza propio y no puede votar en los [gauges de staking](#gauge-de-staking) sin veBTC. El bloqueo máximo es de 4 años. Consulta [Descripción general de veMEZO](/docs/es/docs/users/mezo-earn/lock/vemezo).

## Calendario de vesting

Cronograma según el cual las asignaciones de tokens bloqueadas pasan a estar disponibles gradualmente. Todo el vesting de MEZO finaliza en un plazo de 36 meses desde el [TGE](#tge). Las asignaciones del equipo y de los inversores tienen un [cliff](#cliff) de 1 año, seguido de un desbloqueo lineal mensual durante 2 años. Consulta [Distribución de tokens](/docs/es/docs/users/mezo/token-distribution).

## Pool volátil

[Pool de liquidez](#pool-de-liquidez) diseñado para pares de activos con precios no correlacionados, como BTC y MUSD. Los pools volátiles usan una fórmula de producto constante (x * y = k) y cobran una [comisión de swap](#comisiones-de-swap) del 0.30%. Consulta [Comisiones de los pools](/docs/es/docs/users/mezo-earn/pools/pools-fees).

## Peso de voto

Influencia que tiene una posición al votar por gauges. En veBTC, se calcula como el BTC bloqueado multiplicado por la duración restante del bloqueo dividida entre la duración máxima del bloqueo (28 días). En veMEZO se aplica la misma fórmula, pero con un bloqueo máximo de 4 años. Consulta [Descripción general de la votación](/docs/es/docs/users/mezo-earn/vote).

## Wormhole

Protocolo de mensajería cross-chain que impulsa el [MUSD Bridge](#musd-bridge). Wormhole permite transferencias seguras de tokens entre Mezo y Ethereum. Consulta [MUSD Bridge](/docs/es/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. Protocolo específico de Wormhole que se usa para el [MUSD Bridge](#musd-bridge). NTT mantiene la fungibilidad del token bloqueando tokens en la cadena de origen y acuñándolos en la de destino, de modo que el suministro total se mantiene constante entre cadenas. Consulta [MUSD Bridge](/docs/es/docs/users/borrow/musd-bridge).
