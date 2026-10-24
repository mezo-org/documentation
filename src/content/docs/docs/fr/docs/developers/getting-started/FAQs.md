---
title: FAQ
topic: developers
---

#### Qu'est-ce que Mezo ? La proposition de valeur pour les développeurs <a href="#what-is-mezo-the-value-proposition-for-builders" id="what-is-mezo-the-value-proposition-for-builders"></a>

Mezo est une plateforme de finance Bitcoin sans permission et sans banque, conçue pour transformer Bitcoin, simple réserve de valeur passive, en un actif financier productif et dynamique. La mission fondamentale de la plateforme est de permettre aux plus de 100 millions de détenteurs de Bitcoin dans le monde de HODL avec un objectif, en utilisant la valeur de leurs actifs sans avoir à les vendre. Pour y parvenir, elle met en place une infrastructure robuste qui facilite des transactions peu coûteuses, rapides et sécurisées pour une grande variété d'applications concrètes.

La vision ultime de Mezo est de rendre l'utilisation de Bitcoin « supernormal » : un état dans lequel utiliser Bitcoin pour les activités financières du quotidien est si fluide et si intégré que cela devient une évidence, un geste banal de la vie courante, comme utiliser une carte de débit.

Pour les développeurs, Mezo offre une proposition de valeur distincte et convaincante. Thesis, le studio à l'origine de Mezo, a également créé tBTC, le plus grand pont Bitcoin décentralisé ; Acre, un protocole de rendement natif Bitcoin ; et Fold, une application de dépenses grand public. Cette suite de produits interconnectés fournit aux développeurs, dès le premier jour, un ensemble puissant, déjà éprouvé et hautement interopérable de « money legos ». Cette pile intégrée réduit considérablement les frictions de développement et le risque systémique par rapport à d'autres plateformes, sur lesquelles des briques essentielles comme les ponts, les stablecoins et les sources de rendement sont souvent fournies par des tiers disparates et sans lien entre eux. En développant sur Mezo, les développeurs peuvent s'appuyer sur un écosystème financier complet et auto-renforçant, conçu pour alimenter une nouvelle couche d'activité économique centrée sur l'actif le plus sécurisé et le plus décentralisé au monde.

#### Qu'est-ce que MUSD ?

Au cœur de l'écosystème Mezo se trouve MUSD, son stablecoin natif. MUSD est conçu pour être adossé à 100 % à des réserves de Bitcoin et pour maintenir une parité stable de 1:1 avec le dollar américain. Sa fonction première est de servir de moyen d'échange liquide qui alimente l'économie Mezo, en permettant aux utilisateurs de libérer la valeur de leurs avoirs en Bitcoin. Le mécanisme est simple : les utilisateurs peuvent déposer leurs Bitcoin (sous forme de tBTC) dans un coffre onchain sécurisé et frapper des MUSD en contrepartie. Ces MUSD nouvellement frappés peuvent ensuite être utilisés dans tout l'écosystème pour un large éventail d'activités, notamment payer des biens et services, trader sur des plateformes d'échange décentralisées, fournir de la liquidité pour générer du rendement ou participer à d'autres protocoles DeFi.

Pour les développeurs, Mezo et MUSD forment un écosystème « tout compris » qui offre des avantages stratégiques :

* **Frictions radicalement réduites grâce à des outils familiers (EVM et RainbowKit) :** Mezo est entièrement compatible EVM, ce qui permet aux développeurs Solidity de déployer des contrats existants et d'utiliser leurs outils préférés, comme Hardhat et Foundry, sans aucune courbe d'apprentissage.
* **Intégration fluide des utilisateurs avec Mezo Passport :** [Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) résout le problème critique du cloisonnement des portefeuilles en permettant aux utilisateurs de signer des transactions EVM avec leurs portefeuilles Bitcoin natifs (comme Xverse ou Unisat). Grâce à cette abstraction de compte, vous pouvez concevoir une seule UX épurée pour toucher l'ensemble de la communauté Bitcoin, sans écrire de logique de portefeuille personnalisée complexe.
* [Des primitives financières puissantes avec MUSD :](https://www.npmjs.com/package/@mezo-org/passport) [MUSD](https://mezo.org/feature/borrow) est une brique de base puissante. Ses taux d'intérêt fixes et bas, ainsi que son LTV élevé (jusqu'à 90 %), rendent possibles des produits financiers prévisibles (par exemple, des prêts à durée déterminée).

#### Qu'est-ce qu'une économie Bitcoin circulaire ?

Une économie Bitcoin circulaire est un système autonome dans lequel Bitcoin sert à la fois à gagner et à dépenser, sans devoir être converti en monnaie fiduciaire. Elle crée une boucle fermée dans laquelle particuliers et entreprises effectuent leurs transactions directement en BTC pour les salaires, les biens et les services.

L'association de Mezo et de MUSD crée une boucle économique qui s'auto-renforce :

1. **Libérer :** les détenteurs de Bitcoin déposent leurs BTC et frappent des MUSD, ce qui active leur capital sans vendre leur actif principal.
2. **Échanger :** ils utilisent ces MUSD pour tout, du trading et du prêt jusqu'aux paiements du quotidien.
3. **Renforcer :** cette activité onchain génère des frais de transaction (payés en BTC), qui sécurisent le réseau et renforcent l'utilité de Bitcoin en tant qu'actif transactionnel, en plus de sa fonction de réserve de valeur.

Mezo fournit les rails et MUSD le carburant, offrant aux développeurs une plateforme unique pour créer des applications qui apportent une valeur tangible à l'immense marché, encore mal desservi, des bitcoiners.

#### Quelle est l'architecture de la chaîne Mezo ?

La chaîne Mezo repose sur une architecture hybride conçue pour maximiser à la fois l'accessibilité pour les développeurs et les performances du réseau. Il s'agit d'une blockchain entièrement compatible EVM, construite avec le Cosmos SDK et fonctionnant sur le moteur de consensus CometBFT. Sa base de code est un fork fortement modifié d'Evmos.

Cette pile technique offre une combinaison puissante de fonctionnalités :

* **Compatibilité EVM** : elle permet à la vaste communauté mondiale des développeurs Ethereum et Solidity de déployer leurs contrats intelligents et applications décentralisées (dApps) existants sur Mezo avec peu ou pas de modifications de code. Ils peuvent continuer à utiliser les chaînes d'outils familières et matures auxquelles ils sont habitués, notamment MetaMask, Hardhat, Remix et Foundry, ce qui abaisse considérablement la barrière à l'entrée pour développer au sein de l'écosystème Bitcoin.
* **Cosmos SDK** : s'appuyer sur le Cosmos SDK confère à Mezo la souveraineté de sa chaîne, ce qui lui permet de personnaliser sa logique et sa gouvernance.

#### Quel jeton est utilisé pour les frais de gaz sur Mezo ? <a href="#what-token-is-used-for-gas-fees-on-mezo" id="what-token-is-used-for-gas-fees-on-mezo"></a>

BTC ([via tBTC](https://mezo.org/blog/how-bitcoin-native-gas-turbocharges-the-bitcoinfi-engine/) en coulisses).

#### Comment obtenir des BTC de testnet pour Mezo ? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

Obtenez des fonds de testnet avec le faucet Mezo : [https://faucet.test.mezo.org/](https://faucet.test.mezo.org/)

#### Comment intégrer Mezo Passport ? <a href="#how-do-i-integrate-with-mezo-passport" id="how-do-i-integrate-with-mezo-passport"></a>

​[Mezo Passport](https://www.npmjs.com/package/@mezo-org/passport) est la bibliothèque officielle de connexion de portefeuilles, conçue spécifiquement pour offrir une expérience utilisateur fluide et unifiée sur le réseau Mezo. Elle gère la complexité de la connexion à votre dApp des portefeuilles natifs Bitcoin (comme Xverse et Unisat) comme des portefeuilles EVM standard (comme MetaMask). Pour le guide d'intégration le plus à jour et le plus détaillé, comprenant les instructions d'installation, la configuration, les hooks disponibles et des exemples de code, les développeurs doivent se référer à la [**documentation officielle de Mezo Passport**](https://www.npmjs.com/package/@mezo-org/passport)**.**

#### Comment obtenir du financement et du soutien pour mon projet ? <a href="#how-can-i-get-funding-and-support-for-my-project" id="how-can-i-get-funding-and-support-for-my-project"></a>

**La Supernormal Foundation**

​[La Supernormal Foundation](https://www.supernormal.foundation/) est l'organisation chargée de construire, de gouverner et de développer le réseau Mezo et l'économie MUSD. Elle fonctionne selon une philosophie portée par la communauté et constitue la principale source de soutien formel pour les développeurs.

**Mezo Founder Program**

​[Le Mezo Founder Program](https://www.supernormal.foundation/initiative/mezo-founder-program) est l'initiative phare destinée aux développeurs et projets en phase de démarrage (le MVP doit être en ligne sur le testnet) qui souhaitent développer sur Mezo et intégrer MUSD. Le programme est conçu pour catalyser l'innovation dans l'espace BitcoinFi.

* **Avantages :** les équipes qualifiées bénéficient d'un accès prioritaire à un ensemble complet de ressources, notamment :
  * **Subventions :** un soutien financier pour accélérer le développement.
  * **Co-marketing :** des actions marketing conjointes pour accroître la visibilité du projet.
  * **Mise en réseau :** des mises en relation avec d'autres développeurs et des leaders de l'écosystème.
  * **Accompagnement pratique à l'intégration :** une assistance technique directe pour garantir un déploiement sans accroc sur Mezo.

​[**Postuler maintenant**](https://form.typeform.com/to/eMtcxecA?typeform-source=www.supernormal.foundation#form_name=xxxxx&form_type=xxxxx)​

**​**[**BitcoinFi Accelerator**](https://bitcoinfi.network/)

Pour les projets plus matures ou ayant des ambitions de croissance importantes, la Supernormal Foundation s'associe à des sociétés de capital-risque de premier plan, **Boost VC, Draper Associates et Thesis**, pour proposer un programme d'accélération dédié. Ce programme intensif apporte un investissement initial et un accompagnement sur mesure, notamment un mentorat approfondi sur la stratégie produit et la mise sur le marché (go-to-market), afin d'aider les équipes à passer d'un produit fonctionnel à une entreprise capable de passer à l'échelle.

#### Où trouver du soutien auprès de la communauté et poser des questions techniques ? <a href="#where-can-i-find-community-support-and-ask-technical-questions" id="where-can-i-find-community-support-and-ask-technical-questions"></a>

Le point de rassemblement central de toutes les interactions de la communauté et des développeurs au sein de l'écosystème Mezo est le [serveur Discord officiel.](https://discord.com/invite/mezo)​

#### Qui sont vos partenaires et comment les intégrer ? <a href="#who-are-your-partners-and-how-do-i-integrate-them" id="who-are-your-partners-and-how-do-i-integrate-them"></a>

Consultez la liste à jour dans [Intégrations et partenaires](https://mezo.org/docs/developers/getting-started/integrations-and-partners).
