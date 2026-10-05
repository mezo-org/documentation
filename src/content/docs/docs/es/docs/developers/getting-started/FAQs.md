---
title: Preguntas frecuentes
topic: developers
---

#### ¿Qué es Mezo? La propuesta de valor para desarrolladores <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo es una plataforma financiera para Bitcoin, sin permisos y sin bancos, diseñada para transformar Bitcoin de una reserva de valor pasiva en un activo financiero productivo y dinámico. La misión central de la plataforma es permitir que los más de 100 millones de titulares de Bitcoin de todo el mundo hagan HODL con un propósito, aprovechando el valor de sus activos sin necesidad de venderlos. Esto se logra creando una infraestructura sólida que facilita transacciones baratas, rápidas y seguras para una gran variedad de aplicaciones del mundo real.

La visión última de Mezo es hacer que el uso de Bitcoin sea supernormal: un estado en el que usar Bitcoin para las actividades financieras cotidianas resulte tan fluido e integrado que se convierta en una parte obvia y corriente de la vida, como usar una tarjeta de débito.

Para los desarrolladores, Mezo ofrece una propuesta de valor diferenciada y convincente. Thesis, el estudio detrás de Mezo, también es el creador de tBTC, el mayor puente descentralizado de Bitcoin; de Acre, un protocolo de rendimiento nativo de Bitcoin, y de Fold, una aplicación de gasto para consumidores. Este conjunto de productos interconectados ofrece a los desarrolladores, desde el primer día, un conjunto potente, previamente verificado y altamente interoperable de "money legos". Este stack integrado reduce considerablemente la fricción en el desarrollo y el riesgo sistémico en comparación con construir en otras plataformas, donde primitivas esenciales como puentes, stablecoins y fuentes de rendimiento suelen provenir de terceros dispares y sin relación entre sí. Al construir en Mezo, los desarrolladores pueden aprovechar un ecosistema financiero completo y que se refuerza a sí mismo, diseñado para impulsar una nueva capa de actividad económica centrada en el activo más seguro y descentralizado del mundo.

#### ¿Qué es MUSD?

En el corazón del ecosistema Mezo se encuentra MUSD, su stablecoin nativa. MUSD está diseñada para estar 100% respaldada por reservas de Bitcoin y mantener una paridad estable 1:1 con el dólar estadounidense. Su función principal es servir como medio de intercambio líquido que impulsa la economía de Mezo, permitiendo a los usuarios liberar el valor de sus tenencias de Bitcoin. El mecanismo es sencillo: los usuarios pueden depositar su Bitcoin (en forma de tBTC) en una bóveda onchain segura y acuñar MUSD contra él. Este MUSD recién acuñado puede usarse después en todo el ecosistema para una amplia variedad de actividades, como gastar en bienes y servicios, operar en exchanges descentralizados, aportar liquidez para obtener rendimiento o participar en otros protocolos DeFi.

Para los desarrolladores, Mezo y MUSD crean un ecosistema "con todo incluido" que ofrece ventajas estratégicas:

* **Fricción radicalmente reducida con herramientas conocidas (EVM y RainbowKit):** Mezo es totalmente compatible con EVM, lo que permite a los desarrolladores de Solidity desplegar contratos existentes y usar sus herramientas favoritas, como Hardhat y Foundry, sin ninguna curva de aprendizaje.
* **Incorporación de usuarios sin fricciones con Mezo Passport:** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) resuelve la desconexión crítica entre billeteras al permitir que los usuarios firmen transacciones EVM con sus billeteras nativas de Bitcoin (como Xverse o Unisat). Esta abstracción de cuentas significa que puedes crear una única UX limpia para llegar a toda la comunidad de Bitcoin sin escribir una lógica de billetera compleja y personalizada.
* [Primitivas financieras potentes con MUSD:](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) es un componente básico potente. Sus tasas de interés bajas y fijas y su LTV alto (hasta el 90%) son tecnologías habilitadoras para productos financieros predecibles (p. ej., préstamos a plazo fijo).

#### ¿Qué es una economía circular de Bitcoin?

Una economía circular de Bitcoin es un sistema autosostenible en el que Bitcoin se usa tanto para ganar como para gastar, sin necesidad de convertirlo a moneda fiat. Crea un circuito cerrado en el que personas y empresas realizan transacciones directamente en BTC para salarios, bienes y servicios.

La combinación de Mezo y MUSD crea un ciclo económico que se refuerza a sí mismo:

1. **Liberar:** los titulares de Bitcoin depositan su BTC y acuñan MUSD, activando su capital sin vender su activo principal.
2. **Operar:** usan este MUSD para todo, desde trading y préstamos hasta pagos cotidianos.
3. **Reforzar:** esta actividad onchain genera comisiones de transacción (pagadas en BTC), que aseguran la red y refuerzan la utilidad de Bitcoin como activo transaccional, además de como reserva de valor.

Mezo aporta las vías y MUSD aporta el combustible, lo que ofrece a los desarrolladores una plataforma única para crear aplicaciones que aporten valor tangible al enorme y desatendido mercado de usuarios de Bitcoin.

#### ¿Cuál es la arquitectura de la cadena Mezo?

La cadena Mezo está diseñada con una arquitectura híbrida pensada para maximizar tanto la accesibilidad para los desarrolladores como el rendimiento de la red. Es una blockchain totalmente compatible con EVM, construida con Cosmos SDK y que funciona sobre el motor de consenso CometBFT. El código es un fork muy modificado de Evmos.

Este stack técnico ofrece una potente combinación de características:

* **Compatibilidad con EVM**: permite que la enorme comunidad global de desarrolladores de Ethereum y Solidity despliegue sus contratos inteligentes y aplicaciones descentralizadas (dApps) existentes en Mezo con cambios mínimos o nulos en el código. Pueden seguir usando las herramientas conocidas y maduras a las que están acostumbrados, como MetaMask, Hardhat, Remix y Foundry, lo que reduce drásticamente la barrera de entrada para construir dentro del ecosistema de Bitcoin.
* **Cosmos SDK**: construir sobre Cosmos SDK otorga a Mezo soberanía de cadena, lo que le permite personalizar su lógica y su gobernanza.

#### ¿Qué token se usa para las comisiones de gas en Mezo? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC (internamente, [mediante tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/)).

#### ¿Cómo obtengo BTC de testnet para Mezo? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Obtén fondos de testnet con el faucet de Mezo: [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### ¿Cómo me integro con Mezo Passport? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) es la biblioteca oficial de conexión de billeteras, creada específicamente para ofrecer una experiencia de usuario fluida y unificada en la red Mezo. Gestiona la complejidad de conectar a tu dApp tanto billeteras nativas de Bitcoin (como Xverse y Unisat) como billeteras EVM estándar (como MetaMask). Para consultar la guía de integración más actual y detallada, incluidas las instrucciones de instalación, la configuración, los hooks disponibles y ejemplos de código, los desarrolladores deben consultar la [**documentación oficial de Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### ¿Cómo puedo obtener financiación y soporte para mi proyecto? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**The Supernormal Foundation**

​[The Supernormal Foundation](https://www.supernormal.foundation/) es la organización dedicada a construir, gobernar y hacer crecer la red Mezo y la economía de MUSD. Opera con una filosofía impulsada por la comunidad y es la principal fuente de apoyo formal para los desarrolladores.

**Mezo Founder Program**

​[El Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) es la iniciativa insignia para desarrolladores y proyectos en fase inicial (el MVP debe estar activo en testnet) que buscan construir en Mezo e integrar MUSD. El programa está diseñado para catalizar la innovación en el ámbito de BitcoinFi.

* **Beneficios:** los equipos que cumplan los requisitos obtienen acceso prioritario a un conjunto completo de recursos, entre ellos:
  * **Subvenciones:** apoyo financiero para acelerar el desarrollo.
  * **Comarketing:** acciones de marketing conjuntas para aumentar la visibilidad del proyecto.
  * **Networking:** contactos con otros desarrolladores y líderes del ecosistema.
  * **Soporte práctico para la integración:** asistencia técnica directa para garantizar un despliegue sin problemas en Mezo.

​[**Solicitar ahora**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Para proyectos más maduros o con planes de crecimiento ambiciosos, la Supernormal Foundation se asocia con las principales firmas de capital de riesgo **Boost VC, Draper Associates y Thesis** para ofrecer un programa de aceleración dedicado. Este programa intensivo proporciona inversión inicial y apoyo a medida, incluida una mentoría profunda sobre estrategia de producto y ejecución de la salida al mercado, y ayuda a los equipos a recorrer el camino desde un producto funcional hasta un negocio escalable.

#### ¿Dónde puedo encontrar soporte de la comunidad y hacer preguntas técnicas? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

El centro principal de toda la interacción de la comunidad y los desarrolladores dentro del ecosistema Mezo es el [servidor oficial de Discord.](https://discord.com/invite/mezo)​

#### ¿Quiénes son los socios de Mezo y cómo los integro? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Consulta la lista actualizada en [Integraciones y socios](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
