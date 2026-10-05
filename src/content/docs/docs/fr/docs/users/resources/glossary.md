---
title: Glossaire
description: 'Une référence complète, de A à Z, des termes utilisés dans l''écosystème Mezo.'
topic: users
---

Une référence complète des termes utilisés dans l'écosystème Mezo. Pour les termes propres à Mezo Earn, consultez le [glossaire Mezo Earn](/docs/fr/docs/users/mezo-earn/overview/glossary).

---

## AMM

Automated Market Maker (teneur de marché automatisé). Type d'échange décentralisé qui utilise des pools de liquidité et des formules mathématiques, plutôt que des carnets d'ordres, pour déterminer le prix des actifs et exécuter les transactions. Mezo Pools utilise un AMM de type Aerodrome, avec des courbes à produit constant pour les paires volatiles et des courbes stables pour les paires corrélées. Consultez l'[aperçu de Mezo Pools](/docs/fr/docs/users/mezo-earn/pools).

## Explorateur de blocs

Outil web permettant de consulter les transactions, les adresses et les données onchain. L'explorateur du mainnet de Mezo est disponible sur [explorer.mezo.org](https://explorer.mezo.org/) et celui du testnet sur [explorer.test.mezo.org](https://explorer.test.mezo.org/).

## Boost

Multiplicateur appliqué à une position veBTC lorsque des votes veMEZO lui sont attribués. Sans boost, veBTC fonctionne à 1x. Avec le boost maximal, veBTC fonctionne à 5x. Le boost dépend de votre part relative du total de veBTC et du total de veMEZO dans le système. Consultez la page [Mécanisme de boost](/docs/fr/docs/users/mezo-earn/lock/vemezo/boost-mechanism).

## Poids boosté

Poids de vote combiné lorsque veBTC et veMEZO sont associés. Il se calcule en multipliant votre poids veBTC par votre multiplicateur de boost (entre 1x et 5x). Le poids boosté détermine votre part des frais et votre influence sur les émissions.

## BTC

Bitcoin. BTC est le jeton de gaz natif de Mezo (avec 18 décimales) et la principale garantie pour frapper des [MUSD](#musd). Toutes les transactions sur Mezo sont payées en BTC.

## Portefeuille BTC

Portefeuille natif Bitcoin utilisé pour déposer des BTC directement sur Mezo. Les portefeuilles pris en charge incluent UniSat, OKX et Xverse. Les formats d'adresse pris en charge sont Legacy (P2PKH), Native SegWit (P2WPKH) et Nested SegWit (P2SH-P2WPKH). Consultez la page [Déposer des actifs](/docs/fr/docs/users/getting-started/deposit-assets).

## Chain ID

Identifiant numérique d'un réseau blockchain. Mezo Mainnet utilise le chain ID `31612` et Mezo Testnet le chain ID `31611`. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## Chain Splitter

Premier splitter de la hiérarchie des émissions. Il détermine le pourcentage des émissions de MEZO attribué aux validateurs (20 %) par rapport au reste de l'écosystème (80 %). Ce ratio est actuellement fixe et verrouillé par la gouvernance. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Période de blocage (cliff)

Période d'attente avant que les jetons ne commencent à être débloqués. Dans le calendrier de vesting de Mezo, les allocations de l'équipe et des investisseurs sont soumises à une période de blocage d'un an à compter du TGE : aucun jeton n'est donc débloqué pendant les 12 premiers mois. Consultez la page [Distribution des jetons](/docs/fr/docs/users/mezo/token-distribution).

## Garantie

Actifs engagés pour garantir un prêt. Sur Mezo, des BTC sont déposés en garantie pour emprunter des [MUSD](#musd). Si la valeur de la garantie devient trop faible par rapport à la dette, la position peut être [liquidée](#liquidation). Consultez la page [Emprunter et frapper des MUSD](/docs/fr/docs/users/borrow/mint-musd).

## Surplus de garantie

Excédent de garantie qui subsiste après le rachat complet d'un [trove](#trove). Ce surplus est envoyé vers un contrat de conservation, où l'emprunteur peut le récupérer. Consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).

## Ratio de collatéralisation (ICR)

Individual Collateralization Ratio (ratio de collatéralisation individuel). Rapport entre la valeur en dollars de la garantie d'un trove et sa dette totale. Par exemple, si votre garantie en BTC vaut 13 000 \$ et que votre dette s'élève à 10 000 \$, votre ICR est de 130 %. Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## CometBFT

Moteur de consensus sur lequel repose Mezo, anciennement connu sous le nom de Tendermint. CometBFT fournit un consensus tolérant aux pannes byzantines (BFT), qui permet une finalité rapide des blocs sur le réseau Mezo.

## Cosmos SDK

Framework modulaire utilisé pour construire la blockchain Mezo. Cosmos SDK fournit la couche applicative, tandis que [CometBFT](#cometbft) gère le consensus. Cette architecture permet à Mezo de prendre en charge à la fois des fonctionnalités natives Cosmos et des fonctionnalités compatibles [EVM](#evm).

## Ratio de collatéralisation critique (CCR)

Seuil de garantie à l'échelle du système, fixé à 150 %. Lorsque le ratio de collatéralisation total (TCR) passe sous le CCR, le système entre en [mode de récupération](#mode-de-récupération-recovery-mode). Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## dApp

Application décentralisée. Application logicielle qui s'exécute sur une blockchain plutôt que sur des serveurs centralisés. Les développeurs peuvent créer des dApps sur Mezo avec les outils EVM standard. Consultez la page [Exigences pour les dApps](/docs/fr/docs/developers/getting-started/dapp-requirements).

## Décroissance

Réduction progressive du poids de vote à mesure qu'un verrouillage approche de son expiration. Le pouvoir de vote de veBTC et de veMEZO décroît de manière linéaire au fil du temps. Vous pouvez réinitialiser la décroissance en prolongeant votre verrouillage. Consultez l'[aperçu de veBTC](/docs/fr/docs/users/mezo-earn/lock/vebtc) et l'[aperçu de veMEZO](/docs/fr/docs/users/mezo-earn/lock/vemezo).

## Délégateur

Participant qui délègue sa mise ou son pouvoir de vote à un [validateur](#validateur). Les validateurs peuvent partager leurs récompenses avec leurs délégateurs, sans que cela soit obligatoire.

## Ecosystem Splitter

Deuxième splitter de la hiérarchie des émissions. Il répartit les émissions hors validateurs entre les [gauges de staking](#gauge-de-staking) (90 %) et les [gauges sans staking](#gauge-sans-staking) (10 %), ces derniers finançant les [MEZO Gauges](#mezo-gauge). Ce ratio est fixé par le vote des détenteurs de veBTC. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Émissions

Nouveaux jetons MEZO distribués à chaque époque aux gauges de staking, aux validateurs et aux détenteurs de veMEZO (sous forme de rebases). Les émissions suivent un calendrier de halving inspiré de Bitcoin : elles commencent à 25 % par an et diminuent jusqu'à 2 % après la huitième année. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Époque

Cycle de 7 jours qui régit le vote et la distribution des récompenses dans Mezo Earn. Les époques commencent chaque jeudi à 00:00 UTC. Les votes ne sont pas reportés d'une époque à l'autre. Consultez l'[aperçu de veBTC](/docs/fr/docs/users/mezo-earn/lock/vebtc).

## ERC-20

Interface standard pour les jetons fongibles sur les blockchains compatibles EVM. Les jetons transférés d'Ethereum vers Mezo via un pont sont représentés sous forme de jetons mERC-20 (par exemple mUSDC, mUSDT). Consultez la page [Ponts](/docs/fr/docs/users/mainnet/bridges).

## EVM

Ethereum Virtual Machine (machine virtuelle Ethereum). Environnement d'exécution des contrats intelligents sur les blockchains compatibles Ethereum. Mezo est compatible EVM : les développeurs peuvent donc déployer des contrats Solidity avec des outils familiers comme Hardhat et Foundry. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## Portefeuille EVM

Portefeuille compatible Ethereum (par exemple MetaMask ou Rabby) utilisé pour interagir avec la couche EVM de Mezo. Les portefeuilles EVM servent aux interactions avec les dApps, aux swaps et à la gestion des positions sur Mezo. Consultez la page [Connecter votre portefeuille](/docs/fr/docs/users/getting-started/connect).

## Faucet

Service qui distribue de petites quantités de jetons de testnet à des fins de développement. Le faucet du testnet Mezo fournit des BTC de test pour déployer et tester des dApps sur Mezo Testnet.

## Compensation de gaz

Remboursement de 200 MUSD versé à l'appelant d'une fonction de [liquidation](#liquidation), accompagné de 0,5 % de la garantie liquidée. Ce mécanisme garantit que les liquidations restent rentables pour les appelants, même en période de forte activité du réseau. Les 200 MUSD sont prélevés à l'ouverture d'un prêt et restitués lorsque le prêt est clôturé normalement. Consultez la page [Architecture de MUSD](/docs/fr/docs/users/borrow/architecture-and-terminology).

## Gauge

Contrat intelligent qui reçoit et distribue des récompenses en fonction des votes. Plus un gauge reçoit de poids de vote, plus sa part des émissions de MEZO pour l'époque concernée est importante. Les types de gauges comprennent les [gauges de staking](#gauge-de-staking), les [veBTC boost gauges](#vebtc-boost-gauge) et les [gauges sans staking](#gauge-sans-staking), comme les [MEZO Gauges](#mezo-gauge). Consultez le [glossaire Mezo Earn](/docs/fr/docs/users/mezo-earn/overview/glossary).

## Taux d'intérêt global

Taux d'intérêt unique, fixé par la gouvernance, qui s'applique à tous les nouveaux prêts MUSD. Une fois un prêt ouvert, il conserve le taux en vigueur lors de sa création, même si le taux global change. Les utilisateurs peuvent [refinancer](#refinancement) leur prêt pour adopter le taux global actuel. Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## Gouvernance

Système par lequel les détenteurs de veBTC façonnent les paramètres du protocole et les émissions. veMEZO augmente le pouvoir de vote, mais ne dispose d'aucun droit de gouvernance propre. Consultez la page [Gouvernance](/docs/fr/docs/users/mezo/governance).

## Calendrier de halving

Modèle inspiré de Bitcoin qui régit les émissions de MEZO. Le taux d'émission est divisé par deux environ tous les 2 ans : 25 % pendant les années 0 à 2, 12,5 % pendant les années 2 à 4, 6,25 % pendant les années 4 à 8, puis il se stabilise à 2 % de façon perpétuelle. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Perte impermanente

Perte potentielle que subit un fournisseur de liquidité lorsque le rapport de prix entre les actifs du pool évolue, par rapport à une simple détention de ces actifs. Ce phénomène est inhérent aux pools fondés sur un AMM et est plus marqué dans les [pools volatils](#pool-volatil).

## Incentives

Récompenses publiées sur des gauges pour attirer des votes. Des protocoles ou des utilisateurs déposent des incentives (incitations), dans n'importe quel jeton ERC-20, pour attirer du pouvoir de vote vers des gauges spécifiques. Les incentives créent le [marché d'appariement](#marché-dappariement) entre les détenteurs de veBTC et ceux de veMEZO. Consultez l'[aperçu du vote](/docs/fr/docs/users/mezo-earn/vote).

## Liquidation

Clôture forcée d'un [trove](#trove) insuffisamment garanti. Un trove peut être liquidé lorsque son [ICR](#ratio-de-collatéralisation-icr) passe sous 110 %. Le seuil de liquidation reste fixé à 110 %, y compris en [mode de récupération](#mode-de-récupération-recovery-mode). Le [Stability Pool](#stability-pool) absorbe la dette, et la garantie liquidée est distribuée aux déposants du Stability Pool. Consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).

## Pool de liquidité

Contrat intelligent détenant des réserves de deux jetons, qui permet le trading décentralisé. Les utilisateurs déposent des actifs dans un pool pour devenir fournisseurs de liquidité et gagner des frais de trading. Consultez l'[aperçu de Mezo Pools](/docs/fr/docs/users/mezo-earn/pools).

## Verrouillage

Action d'engager des BTC ou des MEZO pendant une période déterminée afin de recevoir des [veBTC](#vebtc) ou des [veMEZO](#vemezo). Plus un verrouillage est long, plus le poids de vote initial est élevé. Les verrouillages veBTC vont de 1 à 28 jours ; les verrouillages veMEZO vont de 1 semaine à 4 ans. Consultez l'[aperçu de veBTC](/docs/fr/docs/users/mezo-earn/lock/vebtc) et l'[aperçu de veMEZO](/docs/fr/docs/users/mezo-earn/lock/vemezo).

## Jeton LP

Jeton de fournisseur de liquidité (Liquidity Provider). Jeton ERC-20 reçu lorsque vous déposez des actifs dans un [pool de liquidité](#pool-de-liquidité). Les jetons LP représentent votre part proportionnelle des réserves du pool et vous donnent droit à une partie des frais de trading. Consultez l'[aperçu de Mezo Pools](/docs/fr/docs/users/mezo-earn/pools).

## Mainnet

Réseau blockchain de production, sur lequel sont traités les actifs et les transactions réels. Mezo Mainnet a pour chain ID `31612` et utilise des BTC pour le gaz. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## Marché d'appariement

Mécanisme économique par lequel les détenteurs de veBTC peuvent attirer des votes veMEZO en publiant des [incentives](#incentives) sur leurs boost gauges, et les détenteurs de veMEZO peuvent obtenir du rendement en votant pour des gauges offrant des incentives attractives. Consultez la page [Marché d'appariement](/docs/fr/docs/users/mezo-earn/lock/vemezo/matching-market).

## MEZO

Jeton natif de Mezo, utilisé pour augmenter le pouvoir de vote et influencer la destination des frais du protocole et des incentives. Les MEZO peuvent être verrouillés sous forme de [veMEZO](#vemezo) pour multiplier jusqu'à 5x le poids de vote veBTC et gagner des récompenses de rebase. L'offre totale à la genèse est de 1 000 000 000 MEZO. Consultez l'[aperçu de MEZO](/docs/fr/docs/users/mezo).

## Mezo App

Principale interface web, disponible sur [mezo.org](https://mezo.org), pour interagir avec le réseau Mezo. Depuis la Mezo App, les utilisateurs peuvent déposer des actifs, transférer des actifs via un pont, emprunter des MUSD, fournir de la liquidité, verrouiller des jetons et voter pour des gauges.

## Mezo Borrow

Fonctionnalité de la Mezo App qui permet aux utilisateurs de déposer des BTC en garantie et d'emprunter des [MUSD](#musd) en contrepartie. Chaque position d'emprunt est appelée un [trove](#trove). Consultez la page [Emprunter et frapper des MUSD](/docs/fr/docs/users/borrow/mint-musd).

## Mezo Bridge

Pont natif permettant de déposer et de retirer des actifs entre Mezo et Ethereum ou Bitcoin. Il prend en charge les BTC, les tBTC et les jetons mERC-20. Consultez la page [Ponts](/docs/fr/docs/users/mainnet/bridges).

## Mezo Earn

Système complet de revenus et de gouvernance de Mezo, qui englobe le verrouillage ([veBTC](#vebtc), [veMEZO](#vemezo)), le vote pour des [gauges](#gauge), la fourniture de liquidité dans des [pools](#pool-de-liquidité) et le dépôt dans des [coffres](#musd-savings-vault). Consultez l'[aperçu de Mezo Earn](/docs/fr/docs/users/mezo-earn/overview).

## MEZO Gauge

[Gauge sans staking](#gauge-sans-staking) pour lequel votent les détenteurs de veMEZO afin d'orienter les émissions de MEZO vers des pools de liquidité MUSD situés en dehors de Mezo : Curve et Uniswap sur Ethereum, et Aerodrome sur Base. Il est financé par la branche sans staking des émissions (actuellement 8 % des récompenses d'émission hebdomadaires). Consultez la page [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges).

## Mezo Market

Place de marché de la Mezo App dédiée aux swaps de jetons. Elle utilise le [contrat Router](#contrat-router) pour acheminer les transactions à travers les [pools de liquidité](#pool-de-liquidité) disponibles.

## Mezo Passport

Package pour développeurs basé sur RainbowKit, qui propose des options de connexion pour les portefeuilles Bitcoin et EVM. Mezo Passport s'intègre à viem et wagmi pour simplifier la gestion des portefeuilles. Consultez la page [Configurer Mezo Passport](/docs/fr/docs/developers/getting-started/configure-mezo-passport).

## Mezo Pools

Système de pools de liquidité de Mezo, qui fonctionne comme un ensemble de réserves de liquidité onchain automatisées pour les swaps de jetons. Les pools utilisent un AMM de type Aerodrome et se déclinent en deux types : [volatils](#pool-volatil) et [stables](#pool-stable). Consultez l'[aperçu de Mezo Pools](/docs/fr/docs/users/mezo-earn/pools).

## Ratio de collatéralisation minimum (MCR)

Ratio de garantie minimal exigé pour un [trove](#trove), fixé à 110 %. Si l'[ICR](#ratio-de-collatéralisation-icr) d'un trove passe sous le MCR, celui-ci devient susceptible d'être [liquidé](#liquidation). Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## MUSD

Stablecoin de Mezo adossé au Bitcoin, indexé sur 1 \$ US. Les utilisateurs empruntent des MUSD en déposant des BTC en garantie dans un [trove](#trove). L'ancrage est maintenu grâce aux [rachats](#rachat) et au [Stability Pool](#stability-pool). Consultez l'[aperçu de MUSD](/docs/fr/docs/users/borrow).

## MUSD Bridge

Pont inter-chaînes permettant de transférer des MUSD entre Mezo et Ethereum, reposant sur le protocole [Native Token Transfer (NTT)](#wormhole-ntt) de Wormhole. Consultez la page [MUSD Bridge](/docs/fr/docs/users/borrow/musd-bridge).

## MUSD Savings Rate gauge

[Gauge de staking](#gauge-de-staking) associé au [MUSD Savings Vault](#musd-savings-vault). Les utilisateurs qui déposent des MUSD dans le coffre d'épargne peuvent staker leurs jetons de reçu sMUSD pour gagner des émissions de MEZO, tandis que les votants veBTC de ce gauge gagnent un rendement en MUSD issu des frais du protocole. Consultez la page [Coffres](/docs/fr/docs/users/mezo-earn/vaults).

## MUSD Savings Vault

Produit d'épargne natif de Mezo destiné aux détenteurs de MUSD. Déposez des MUSD pour recevoir une part des frais du protocole générés par l'activité d'emprunt (intérêts, frais d'émission, frais de refinancement). Vous recevez des sMUSD, un jeton de reçu qui représente votre part. Consultez la page [Coffres](/docs/fr/docs/users/mezo-earn/vaults).

## Gauge sans staking

[Gauge](#gauge) sans jeton de staking, pour lequel on vote avec des veMEZO. Au lieu de rémunérer des stakers sur Mezo, ses émissions sont acheminées vers une destination désignée par le gauge : pour les [MEZO Gauges](#mezo-gauge), un pool de liquidité sur une autre chaîne. Le vote pour un tel gauge est indépendant du vote pour les gauges veBTC et de l'appariement du [boost](#boost). Consultez la page [MEZO Gauges](/docs/fr/docs/users/mezo-earn/vote/mezo-gauges).

## Nœud

Ordinateur exécutant le client de la chaîne Mezo (mezod) et participant au réseau. Les types de nœuds comprennent les nœuds [validateurs](#validateur) (consensus et production de blocs), les nœuds RPC (endpoints d'API pour les dApps) et les nœuds seed (amorçage du réseau). Consultez la page [Validator Kit](/docs/fr/docs/developers/mezo-nodes/validator-kit).

## Oracle

Service qui fournit des données externes (comme le prix des actifs) aux contrats intelligents onchain. Mezo utilise Skip Connect comme oracle principal, intégré directement dans les nœuds validateurs. Des oracles tiers, dont Pyth, Stork et Supra, sont également disponibles. Consultez la page [Infrastructure des oracles](/docs/fr/docs/developers/architecture/oracles).

## Frais d'origination

Frais uniques facturés lors de l'emprunt de MUSD, calculés à hauteur de 0,1 % du montant emprunté. Ces frais sont ajoutés au capital du prêt et portent intérêt. Des frais d'origination de refinancement (une fraction des frais normaux) sont facturés lors d'un [refinancement](#refinancement). Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## PCV

Protocol Controlled Value (valeur contrôlée par le protocole). Contrat qui gère les frais perçus sur les emprunts et les refinancements en MUSD. Les frais sont répartis entre le remboursement du prêt d'amorçage et le système de gauges. Une fois le prêt d'amorçage remboursé, les frais s'accumulent sous forme de liquidité détenue par le protocole dans le [Stability Pool](#stability-pool). Consultez la page [Architecture de MUSD](/docs/fr/docs/users/borrow/architecture-and-terminology).

## Poke

Transaction qui actualise le poids boosté d'une position veBTC. Elle est nécessaire après une modification des votes veMEZO, une prolongation de verrouillage ou un ajout de BTC. Sans poke, les modifications du boost ne prennent pas effet. Consultez le [glossaire Mezo Earn](/docs/fr/docs/users/mezo-earn/overview/glossary).

## Pool Factory

Contrat intelligent qui déploie les nouveaux pools de liquidité sur Mezo. Il est actuellement géré par l'équipe Mezo, qui prévoit d'ouvrir à l'avenir la création de pools sans permission. Adresse sur le mainnet : `0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248`. Consultez la page [Mezo Pools (développeurs)](/docs/fr/docs/developers/features/mezo-pools).

## Portal Bridge

Interface utilisateur disponible sur [portalbridge.com](https://portalbridge.com/) pour transférer des MUSD entre Mezo et Ethereum via le protocole Wormhole NTT. Consultez la page [MUSD Bridge](/docs/fr/docs/users/borrow/musd-bridge).

## Flux de prix

Données onchain fournies par des [oracles](#oracle), qui indiquent le prix de marché actuel des actifs. Mezo utilise Skip Connect pour déterminer le prix des actifs lors du consensus de bloc et l'inscrire dans l'état onchain. Consultez la page [Infrastructure des oracles](/docs/fr/docs/developers/architecture/oracles).

## Rebase

Distributions anti-dilution versées aux détenteurs de veMEZO à partir des émissions hebdomadaires de MEZO. Lorsque le ratio de verrouillage (offre de veMEZO / offre totale de MEZO) est faible, une part plus importante des émissions est consacrée aux rebases, ce qui protège les premiers verrouilleurs de la dilution. À mesure que davantage de MEZO sont verrouillés, la part des rebases diminue. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Mode de récupération (Recovery Mode)

État de sécurité temporaire qui s'active lorsque le ratio de collatéralisation total (TCR) du système passe sous le [CCR](#ratio-de-collatéralisation-critique-ccr) de 150 %. En mode de récupération, le seuil de liquidation reste fixé à 110 % (contrairement à Liquity v1, MUSD n'étend pas les liquidations en mode de récupération). En revanche, il est impossible d'ouvrir de nouveaux prêts en dessous de 150 %, et le refinancement est bloqué. Consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).

## Rachat

Action d'échanger des MUSD contre une valeur équivalente en dollars de BTC, directement auprès du protocole. Tout détenteur de MUSD peut procéder à un rachat, qu'il soit emprunteur ou non. Les rachats ciblent en priorité le [trove](#trove) dont le ratio de collatéralisation est le plus faible. Ce mécanisme contribue à maintenir l'ancrage du MUSD à 1 \$. Consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).

## Refinancement

Processus qui consiste à mettre à jour le taux d'intérêt d'un prêt en l'alignant sur le [taux d'intérêt global](#taux-dintérêt-global) actuel. Le refinancement entraîne des frais d'origination réduits, mais évite d'avoir à clôturer puis rouvrir un prêt. Vous pouvez également refinancer pour augmenter votre ligne de crédit si le BTC s'est apprécié. Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## Contrat Router

Contrat intelligent qui achemine les swaps de jetons à travers les [pools de liquidité](#pool-de-liquidité) disponibles sur Mezo. Les utilisateurs approuvent des jetons pour le router et appellent les fonctions de swap avec les paramètres souhaités. Adresse sur le mainnet : `0x16A76d3cd3C1e3CE843C6680d6B37E9116b5C706`. Consultez la page [Mezo Pools (développeurs)](/docs/fr/docs/developers/features/mezo-pools).

## Endpoint RPC

URL réseau qu'utilisent les applications pour communiquer avec la blockchain Mezo. Les endpoints RPC prennent en charge les méthodes JSON-RPC standard d'Ethereum. Plusieurs fournisseurs sont disponibles pour le mainnet, dont Boar, Imperator, Validation Cloud et dRPC. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## Fournisseur RPC

Service qui exploite des [endpoints RPC](#endpoint-rpc) pour le réseau Mezo. Des fournisseurs comme Boar, Imperator, Validation Cloud et dRPC proposent des connexions HTTPS et WebSocket pour le mainnet. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## Slippage

Écart entre le prix attendu d'une transaction et son prix d'exécution réel (glissement de prix). Le slippage est plus élevé dans les pools moins liquides ou pour les transactions de grande taille. Les [pools stables](#pool-stable) sont conçus pour minimiser le slippage sur les paires d'actifs corrélés.

## Splitter

Contrat qui répartit les émissions de MEZO entre deux destinations. Les ratios de répartition sont actuellement fixes et verrouillés par la gouvernance. Consultez les sections [Chain Splitter](#chain-splitter) et [Ecosystem Splitter](#ecosystem-splitter).

## Stability Pool

Réserve de MUSD qui constitue la première ligne de défense en cas de [liquidations](#liquidation). Les utilisateurs déposent des MUSD dans le Stability Pool et reçoivent en contrepartie une part de la garantie liquidée. Le contrat [PCV](#pcv) alimente le pool avec un dépôt initial de 100M MUSD. Consultez la page [Concepts clés de MUSD](/docs/fr/docs/users/borrow/concepts).

## Pool stable

[Pool de liquidité](#pool-de-liquidité) optimisé pour les échanges entre actifs dont les valeurs sont fortement corrélées, comme MUSD et USDC. Les pools stables utilisent une formule spécialisée qui offre un [slippage](#slippage) bien plus faible, et facturent des frais de trading de 0,02 %. Consultez la page [Frais des pools](/docs/fr/docs/users/mezo-earn/pools/pools-fees).

## Gauge de staking

[Gauge](#gauge) lié à un jeton de staking (comme des jetons LP ou des jetons de reçu sMUSD). Les stakers gagnent des émissions de MEZO ; les votants veBTC du gauge gagnent des frais de trading ou des revenus du protocole. Les gauges de staking reçoivent environ 72 % des émissions nettes. Consultez le [glossaire Mezo Earn](/docs/fr/docs/users/mezo-earn/overview/glossary).

## Subgraph

Couche de données indexée et interrogeable pour les données blockchain, accessible via des API GraphQL. Mezo utilise Goldsky pour le déploiement de subgraphs, ce qui permet aux dApps d'interroger efficacement des données onchain comme les transferts, l'activité des pools et l'état du protocole. Consultez la page [Déploiement de subgraphs](/docs/fr/docs/developers/subgraphs).

## Frais de swap

Frais facturés sur chaque swap de jetons dans un [pool de liquidité](#pool-de-liquidité). Les pools volatils facturent 0,30 % et les pools stables 0,02 %. Les frais sont perçus dans le jeton d'entrée et conservés dans un contrat PoolFees distinct, où les fournisseurs de liquidité peuvent les réclamer. Consultez la page [Frais des pools](/docs/fr/docs/users/mezo-earn/pools/pools-fees).

## tBTC

Wrapper Bitcoin décentralisé conçu par Thesis et reposant sur le [Threshold Network](#threshold-network). tBTC est adossé 1:1 à du Bitcoin natif et constitue la forme que prend le BTC lorsqu'il est transféré via un pont vers des réseaux compatibles Ethereum. Sur Mezo, les BTC déposés transitent par l'infrastructure de conservation de tBTC. Consultez la page [Architecture de MUSD](/docs/fr/docs/users/borrow/architecture-and-terminology).

## Émissions de traîne (tail emissions)

Taux d'émission annuel perpétuel de 2 % de MEZO, qui commence après la huitième année du [calendrier de halving](#calendrier-de-halving). Les émissions de traîne fournissent indéfiniment des incentives continues aux validateurs, aux fournisseurs de liquidité et aux participants à la gouvernance. Consultez la page [Calendrier des émissions](/docs/fr/docs/users/mezo/emissions).

## Testnet

Réseau de test sur lequel les développeurs peuvent déployer et tester des applications sans utiliser d'actifs réels. Mezo Testnet a pour chain ID `31611`. Consultez la page [Configurer votre environnement](/docs/fr/docs/developers/getting-started/configure-environment).

## TGE

Token Generation Event (événement de génération de jetons). Moment où les jetons MEZO ont été créés et distribués pour la première fois. Les allocations de la communauté et de la Fondation ont été débloquées au TGE, tandis que les allocations de l'équipe et des investisseurs sont soumises à une période de blocage d'un an et à un vesting linéaire sur 3 ans. Consultez la page [Distribution des jetons](/docs/fr/docs/users/mezo/token-distribution).

## Threshold Network

Réseau décentralisé qui fait fonctionner le pont [tBTC](#tbtc). Threshold exploite un ensemble décentralisé de signataires qui a transféré via un pont plus de 28 000 bitcoins depuis début 2020. Consultez la page [Architecture de MUSD](/docs/fr/docs/users/borrow/architecture-and-terminology).

## Distribution des jetons

Répartition de l'offre de genèse de 1 000 000 000 MEZO : communauté (40 %), investisseurs et partenaires (30 %), équipe (20 %) et Fondation (10 %). L'ensemble du vesting s'achève dans les 36 mois suivant le [TGE](#tge). Consultez la page [Distribution des jetons](/docs/fr/docs/users/mezo/token-distribution).

## Frais de trading

Consultez la section [Frais de swap](#frais-de-swap).

## Trove

Position de dette garantie sur Mezo, liée à une seule adresse Ethereum. Les utilisateurs ouvrent un trove en déposant des BTC et en empruntant des [MUSD](#musd) en contrepartie. Également appelé « CDP » dans des protocoles similaires. Consultez la page [Emprunter et frapper des MUSD](/docs/fr/docs/users/borrow/mint-musd).

## Validateur

Opérateur de nœud qui participe au consensus et à la production de blocs sur le réseau Mezo. Les validateurs exécutent le client mezod, sécurisent la chaîne et reçoivent des émissions de MEZO via le Chain Splitter. Consultez la page [Validateurs Mezo](/docs/fr/docs/developers/mezo-nodes/validators).

## Validator Kit

Boîte à outils complète pour déployer et gérer des nœuds Mezo. Elle prend en charge Docker, l'exécution native en tant que daemon, Kubernetes et le déploiement dans le cloud. Elle comprend des modèles de configuration, des outils de supervision et des scripts d'automatisation. Consultez le [guide du Validator Kit](/docs/fr/docs/developers/mezo-nodes/validator-kit).

## veBTC

Vote-escrowed BTC (BTC en séquestre de vote). NFT représentant des bitcoins verrouillés, qui confère un pouvoir de vote et un droit de percevoir des frais dans Mezo Earn. Le poids de vote décroît de manière linéaire sur la période de verrouillage. Le verrouillage maximal est de 28 jours. Consultez l'[aperçu de veBTC](/docs/fr/docs/users/mezo-earn/lock/vebtc).

## veBTC boost gauge

[Gauge](#gauge) rattaché à un NFT veBTC spécifique. Les détenteurs de veMEZO votent pour ces gauges afin d'apporter un [boost](#boost) à la position veBTC concernée en échange d'[incentives](#incentives). Consultez la page [Marché d'appariement](/docs/fr/docs/users/mezo-earn/lock/vemezo/matching-market).

## veMEZO

Vote-escrowed MEZO (MEZO en séquestre de vote). NFT représentant des jetons MEZO verrouillés, qui peut [booster](#boost) jusqu'à 5x le pouvoir de vote de veBTC et qui vote également en son nom propre pour les [veBTC boost gauges](#vebtc-boost-gauge) et les [MEZO Gauges](#mezo-gauge). Il ne dispose d'aucun poids de gouvernance propre et ne peut pas voter pour les [gauges de staking](#gauge-de-staking) sans veBTC. Le verrouillage maximal est de 4 ans. Consultez l'[aperçu de veMEZO](/docs/fr/docs/users/mezo-earn/lock/vemezo).

## Calendrier de vesting

Échéancier selon lequel les allocations de jetons verrouillées deviennent progressivement disponibles. L'ensemble du vesting de MEZO s'achève dans les 36 mois suivant le [TGE](#tge). Les allocations de l'équipe et des investisseurs sont soumises à une [période de blocage](#période-de-blocage-cliff) d'un an, suivie d'un déblocage mensuel linéaire sur 2 ans. Consultez la page [Distribution des jetons](/docs/fr/docs/users/mezo/token-distribution).

## Pool volatil

[Pool de liquidité](#pool-de-liquidité) conçu pour les paires d'actifs dont les prix ne sont pas corrélés, comme BTC et MUSD. Les pools volatils utilisent une formule à produit constant (x * y = k) et facturent des [frais de swap](#frais-de-swap) de 0,30 %. Consultez la page [Frais des pools](/docs/fr/docs/users/mezo-earn/pools/pools-fees).

## Poids de vote

Influence dont dispose une position lors du vote pour des gauges. Pour veBTC, il se calcule en multipliant les BTC verrouillés par la durée de verrouillage restante, divisée par la durée de verrouillage maximale (28 jours). Pour veMEZO, la même formule s'applique, mais avec un verrouillage maximal de 4 ans. Consultez l'[aperçu du vote](/docs/fr/docs/users/mezo-earn/vote).

## Wormhole

Protocole de messagerie inter-chaînes sur lequel repose le [MUSD Bridge](#musd-bridge). Wormhole permet des transferts de jetons sécurisés entre Mezo et Ethereum. Consultez la page [MUSD Bridge](/docs/fr/docs/users/borrow/musd-bridge).

## Wormhole NTT

Wormhole Native Token Transfer. Protocole Wormhole spécifique utilisé pour le [MUSD Bridge](#musd-bridge). NTT préserve la fongibilité du jeton en verrouillant les jetons sur la chaîne source et en les frappant sur la chaîne de destination, ce qui maintient l'offre totale constante d'une chaîne à l'autre. Consultez la page [MUSD Bridge](/docs/fr/docs/users/borrow/musd-bridge).
