---
title: Preguntas frecuentes
description: 'Preguntas frecuentes sobre la Mezo App, los validadores de Mezo y más.'
topic: users
---

## ¿Qué es Mezo?

Mezo es una app financiera de Bitcoin que permite a las personas vivir de su Bitcoin sin gastarlo. Sus funciones estrella incluyen Mezo Borrow y MUSD.

## ¿Qué puedo hacer con Mezo? 

Mezo crea productos que dan utilidad al BTC sin necesidad de gastarlo. Puedes abrir un préstamo con Mezo Borrow para acuñar MUSD, que se puede gastar en una gran variedad de casos de uso. La visión es, en última instancia, crear y liderar la economía circular de Bitcoin, en la que MUSD pueda usarse tanto para compras grandes, como una vivienda, como para compras cotidianas, como el supermercado o tu café diario. 

## ¿Por qué debería usar Mezo?

Si por fin quieres poder vivir de tu Bitcoin sin gastarlo, Mezo es el lugar para ti. Al usar tu Bitcoin como colateral, puedes abrir una línea de crédito con Mezo Borrow y beneficiarte de las tasas de interés más bajas del sector (1-5%) a tasa fija. Esto te permite acceder a BitcoinFi, así como a artículos de uso diario que puedes encontrar en Mezo Market. 

## ¿Cuáles son las funciones estrella de Mezo?

Los productos de Mezo están alineados con la misión de construir un paradigma financiero respaldado por Bitcoin para la mayoría, no para unos pocos. Mezo crea productos para construir este futuro junto con la comunidad. Con esto en mente, los siguientes productos respaldan este enfoque: 

* Mezo Borrow
* MUSD 
* Mezo Earn (próximamente)

## ¿Cómo pido prestado con mi Bitcoin como respaldo?

MUSD es la stablecoin respaldada por Bitcoin de Mezo; 1 MUSD se puede redimir por $1 en BTC. Para pedir prestado MUSD, bloqueas BTC como colateral.

* Si el ratio de colateralización total del protocolo se mantiene sólido (respaldo superior al 150%):
  * Los nuevos préstamos necesitan un colateral mínimo del 110% (por ejemplo, $110 en BTC por cada 100 MUSD de deuda).
  * Si tu colateral baja del 110%, tu posición puede ser liquidada.
* Si el respaldo total cae por debajo del 150%:
  * Los nuevos préstamos deben estar garantizados con un colateral del 150%.

## ¿Cómo puedo usar Mezo para mi dApp o proyecto?

Passport facilita a los desarrolladores la integración de billeteras de Bitcoin en las dApps que se construyen en Mezo. Basado en RainbowKit, es compatible con billeteras de Bitcoin populares como Unisat, Xverse y OKX, además de billeteras compatibles con EVM como Taho y MetaMask. El paquete incluye hooks auxiliares para leer saldos, gestionar conexiones de billeteras y enviar transacciones tanto de Bitcoin como de Mezo. Si ya has usado RainbowKit o wagmi, la configuración te resultará familiar. Puedes seguir los pasos del README de Mezo Passport para empezar.

## ¿Cómo invierto en Mezo?

Si te interesa convertirte en inversor, escribe a [IR@thesis.co](IR@thesis.co).

## ¿Qué billeteras puedo usar con Mezo?

Puedes usar las siguientes billeteras compatibles con Bitcoin y con EVM en Mezo:

Compatibles con Bitcoin:

* Unisat
* OKX (Ledger no es compatible)
* Xverse

Compatibles con EVM:

* Taho
* MetaMask
* Zerion
* OKX

## ¿Qué token se usa para las comisiones de transacción?

En Mezo, las comisiones de transacción se pagan con BTC. Puedes obtener BTC en Mezo depositando BTC directamente desde tu billetera de Bitcoin o tBTC desde tu billetera de Ethereum. 

## ¿Por qué algunos tokens que tengo no aparecen en el Mezo Explorer?

Es una limitación conocida del indexador BlockScout con los tokens que tienen un contrato proxy. Esos tokens no son visibles en tu EOA en el [Mezo Explorer](https://explorer.mezo.org/) hasta que completes tu primera transferencia y aprobación de ese token.
