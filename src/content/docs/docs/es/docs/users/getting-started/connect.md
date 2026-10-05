---
title: Conectar tu billetera a Mezo
topic: users
---

Para conectar la billetera de tu navegador, usa los datos de red de Mainnet o de Testnet.

Puedes añadir Mezo a tu billetera con el botón **Connect Wallet** de Chainlist:

- Mainnet: [https://chainlist.org/chain/31612](https://chainlist.org/chain/31612)
- Testnet: [https://chainlist.org/chain/31611](https://chainlist.org/chain/31611)

Si Chainlist no funciona, añade la red manualmente con los datos de red que aparecen a continuación.

## Mezo Mainnet

### Endpoints RPC públicos

| Proveedor | HTTPS | WSS |
|----------|-------|-----|
| Boar | `https://mezo-mainnet.boar.network` | `wss://mezo-mainnet.boar.network` |
| Imperator | `https://rpc_evm-mezo.imperator.co` | `wss://ws_evm-mezo.imperator.co` |
| Validation Cloud | `https://mainnet.mezo.public.validationcloud.io` | `wss://mainnet.mezo.public.validationcloud.io` |

Para obtener límites de solicitudes más altos, Boar ofrece una clave de API gratuita en [boar.network/mezo](https://boar.network/mezo). También hay un plan Enterprise disponible: visita [https://dashboard.boar.network/](https://dashboard.boar.network/) para empezar.

Para obtener límites de solicitudes más altos, consigue tu clave de API gratuita de Validation Cloud en [validationcloud.io/mezo](https://www.validationcloud.io/mezo) o contáctalos en [validationcloud.io/contact](https://validationcloud.io/contact) para planes Enterprise.

### Datos de la red

| Parámetro | Valor |
|-----------|-------|
| Chain ID | `31612` |
| Moneda | BTC (18 decimales) |
| Explorador de bloques | [explorer.mezo.org](https://explorer.mezo.org/) |

## Mezo Testnet

### Endpoints RPC públicos

| Protocolo | URL |
|----------|-----|
| HTTPS | `https://rpc.test.mezo.org` |
| WSS | `wss://rpc-ws.test.mezo.org` |

### Datos de la red

| Parámetro | Valor |
|-----------|-------|
| Chain ID | `31611` |
| Moneda | BTC (18 decimales) |
| Explorador de bloques | [explorer.test.mezo.org](https://explorer.test.mezo.org/) |

:::tip[¿Desarrollas en Mezo?]
Consulta la guía [Configurar el entorno de desarrollo](/docs/es/docs/developers/getting-started/configure-environment) para ver la configuración de Hardhat y Foundry.
:::

## Añadir Mezo a tu billetera manualmente

Si necesitas añadir la red a tu billetera manualmente, sigue estas instrucciones para agregar una red personalizada según tu billetera:

* MetaMask: [Cómo añadir una red RPC personalizada](https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/)
* Brave Wallet: [Añadir una red personalizada](https://support.brave.com/hc/en-us/articles/15614704959757-Adding-a-New-Chain)
* TrustWallet: [Añadir una red personalizada (móvil)](https://trustwallet.com/blog/guides/how-to-add-a-custom-network-on-the-trust-wallet-app)

## Billeteras BTC

Las billeteras BTC son compatibles con la Mezo App y pueden recibir una dirección de la red Mezo asociada a tu billetera BTC. Actualmente, las billeteras BTC pueden realizar las siguientes tareas en Mezo:

- Transferir activos BTC mediante un puente
- Transferir activos EVM mediante un puente
- Pedir prestado, reembolsar o gestionar el colateral de un préstamo
- Comprar artículos en el MUSD Market
- Recibir y enviar activos en la red Mezo
- Participar en Mezo Earn (bloquear, votar, depositar en bóvedas y pools o retirar de ellos, reclamar recompensas)

## Desarrolladores

Para aprender a desarrollar y desplegar dApps en Mezo, consulta la documentación [Primeros pasos para desarrolladores](/docs/es/docs/developers/getting-started/).
