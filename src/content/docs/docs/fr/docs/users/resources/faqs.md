---
title: FAQ
description: 'Questions fréquentes sur Mezo App, les validateurs Mezo et plus encore.'
topic: users
---

## Qu'est-ce que Mezo ?

Mezo est une application de finance Bitcoin qui permet de vivre de ses bitcoins sans avoir à les dépenser. Ses fonctionnalités phares sont Mezo Borrow et MUSD.

## Que puis-je faire avec Mezo ? 

Mezo développe des produits qui donnent de l'utilité au BTC sans qu'il soit nécessaire de le dépenser. Vous pouvez ouvrir un prêt avec Mezo Borrow pour frapper des MUSD, utilisables pour toute une variété de cas d'usage. L'objectif à terme est de créer et de mener l'économie circulaire du Bitcoin, dans laquelle les MUSD pourront servir aussi bien à des achats importants, comme une maison, qu'à des achats du quotidien, comme les courses ou votre café du matin. 

## Pourquoi utiliser Mezo ?

Si vous souhaitez enfin pouvoir vivre de vos bitcoins sans les dépenser, Mezo est fait pour vous. En utilisant vos bitcoins en garantie, vous pouvez ouvrir une ligne de crédit avec Mezo Borrow et bénéficier des taux d'intérêt les plus bas du secteur (1 à 5 %), à taux fixe. Vous accédez ainsi à la BitcoinFi, ainsi qu'à des articles du quotidien disponibles sur Mezo Market. 

## Quelles sont les fonctionnalités phares de Mezo ?

Les produits de Mezo s'inscrivent dans sa mission : bâtir un paradigme financier adossé au Bitcoin pour le plus grand nombre, et non pour quelques-uns. Mezo développe des produits pour construire cet avenir avec la communauté. Dans cette optique, les produits suivants soutiennent cette approche : 

* Mezo Borrow
* MUSD 
* Mezo Earn (bientôt disponible)

## Comment emprunter avec mes bitcoins en garantie ?

MUSD est le stablecoin de Mezo adossé au Bitcoin : 1 MUSD peut être racheté contre 1 $ de BTC. Pour emprunter des MUSD, vous verrouillez des BTC en garantie.

* Si le ratio de collatéralisation total du protocole reste solide (couverture supérieure à 150 %) :
  * Les nouveaux prêts nécessitent une garantie minimale de 110 % (par exemple, 110 $ de BTC pour 100 MUSD de dette).
  * Si votre garantie passe sous 110 %, votre position peut être liquidée.
* Si la couverture totale passe sous 150 % :
  * Les nouveaux prêts doivent être garantis à 150 %.

## Comment utiliser Mezo pour ma dApp ou mon projet ?

Passport permet aux développeurs d'intégrer facilement la prise en charge des portefeuilles Bitcoin dans les dApps construites sur Mezo. Basé sur RainbowKit, il prend en charge les portefeuilles Bitcoin populaires comme Unisat, Xverse et OKX, ainsi que les portefeuilles compatibles EVM comme Taho et MetaMask. Le package comprend des hooks utilitaires pour lire les soldes, gérer les connexions de portefeuille et envoyer des transactions Bitcoin comme Mezo. Si vous avez déjà utilisé RainbowKit ou wagmi, la configuration vous semblera familière. Vous pouvez suivre les étapes du README de Mezo Passport pour commencer.

## Comment investir dans Mezo ?

Si vous souhaitez devenir investisseur, veuillez écrire à [IR@thesis.co](IR@thesis.co).

## Quels portefeuilles puis-je utiliser avec Mezo ?

Vous pouvez utiliser les portefeuilles compatibles Bitcoin et EVM suivants sur Mezo :

Compatibles Bitcoin :

* Unisat
* OKX (Ledger non pris en charge)
* Xverse

Compatibles EVM :

* Taho
* MetaMask
* Zerion
* OKX

## Quel jeton est utilisé pour les frais de transaction ?

Le BTC sert à payer les frais de transaction sur Mezo. Vous pouvez obtenir des BTC sur Mezo en déposant des BTC directement depuis votre portefeuille Bitcoin, ou des tBTC depuis votre portefeuille Ethereum. 

## Pourquoi certains jetons que je détiens n'apparaissent-ils pas dans le Mezo Explorer ?

Il s'agit d'une limitation connue de l'indexeur BlockScout pour les jetons dotés d'un contrat proxy. Ces jetons ne sont pas visibles sur votre EOA dans le [Mezo Explorer](https://explorer.mezo.org/) tant que vous n'avez pas effectué votre premier transfert et votre première approbation pour le jeton concerné.
