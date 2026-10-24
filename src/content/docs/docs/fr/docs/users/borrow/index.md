---
title: Aperçu du stablecoin MUSD
description: >-
  Tout ce que vous devez savoir sur MUSD, le stablecoin de Mezo adossé au
  Bitcoin.
topic: users
---

## Qu'est-ce que MUSD ?

Les détenteurs de Bitcoin ont toujours été confrontés à un choix impossible : vendre leurs BTC pour couvrir leurs dépenses, confier la garde de leurs bitcoins à un prêteur centralisé, ou les conserver indéfiniment et se priver de la liquidité dont ils ont besoin au quotidien.

MUSD change la donne. Il s'agit d'un stablecoin sans permission, adossé à 100 % à des réserves de Bitcoin et conçu pour maintenir un ancrage 1:1 avec le dollar américain. Frappez des MUSD en déposant des BTC en garantie, dépensez-les partout où le dollar est accepté et conservez à tout moment votre pleine exposition au Bitcoin. Lorsque vous avez terminé, remboursez les MUSD empruntés ainsi que les intérêts, et récupérez vos BTC.

![MUSD vous permet de conserver et de dépenser vos BTC](/docs/images/musd/musd-keep-and-spend-btc.png)

### Pourquoi MUSD ?

1. **Ne vendez jamais vos bitcoins** : empruntez jusqu'à 90 % de la valeur de vos BTC. Gardez vos sats, tirez parti de la valeur de vos bitcoins et remboursez votre prêt quand vous le souhaitez.
2. **Des taux fixes de 1 à 5 %** : votre taux d'intérêt est fixé à l'ouverture de votre prêt et ne change jamais. Pas de taux variables, pas de mauvaises surprises. À comparer aux 7 à 20 % d'APR des banques traditionnelles ou aux 8 à 9 % d'autres plateformes DeFi.
3. **Entièrement onchain et vérifiable** : chaque prêt et chaque dollar de garantie sont visibles onchain, 24 h/24 et 7 j/7. Pas de réserves opaques, pas de dépositaires : simplement des bitcoins dans un coffre de contrat intelligent. [Consultez la garantie en direct sur l'explorateur Mezo](https://explorer.mezo.org/address/0x3012C2fE1240e3754E5C200A0946bb0E07474876).
4. **Sans permission** : pas de vérification de solvabilité, pas de dossier à remplir, aucun minimum hormis le plancher de 1 800 MUSD. Si vous avez des BTC, vous pouvez emprunter.

## Fonctionnement de MUSD

![Le cycle de vie de MUSD](/docs/images/musd/musd-lifecycle.png)

MUSD repose sur un modèle de CDP (position de dette garantie). Chaque MUSD en circulation peut être racheté contre du Bitcoin, et 1 \$ de garantie en BTC permet de frapper 1 MUSD.

C'est ce modèle de frappe et de rachat qui maintient l'ancrage du MUSD à 1 \$, même sur des marchés volatils :

* **MUSD s'échange sous 1 \$** : les arbitragistes achètent des MUSD décotés sur le marché et les rachètent contre 1 \$ de BTC sous-jacent, en payant des frais de rachat de 0,75 %, ce qui reste rentable jusqu'à ce que le MUSD atteigne 0,995 \$.
* **MUSD s'échange au-dessus de 1 \$** : les arbitragistes frappent de nouveaux MUSD en fournissant des BTC au protocole et les revendent sur le marché avec un bénéfice. Cette opération reste rentable jusqu'à ce que le MUSD revienne à 1,005 \$.

![](/docs/images/musd/musd-redemption-and-peg-process.png)

Pour garantir le maintien de l'ancrage en période de volatilité, toutes les positions de prêt doivent conserver un ratio de garantie supérieur à 110 %. Le système intègre des mécanismes de liquidation et un Stability Pool pour faire respecter cette règle : ainsi, même avec des LTV élevés, le protocole reste sûr et résilient.

Pour en savoir plus sur le fonctionnement de ces mécanismes de sécurité, consultez la page [Liquidations et rachats MUSD](/docs/fr/docs/users/borrow/liquidation-mechanics).

### Avantages du modèle MUSD

**Une liquidité générée par l'offre**

Contrairement aux protocoles de prêt traditionnels à deux faces, qui ont besoin d'un pool de dollars préexistant et utilisent des taux d'intérêt variables pour équilibrer l'offre et la demande, MUSD est frappé directement à partir d'une garantie en Bitcoin. La liquidité croît de manière organique à mesure que les utilisateurs déposent des BTC : le système génère lui-même son offre, si bien que de la liquidité est toujours disponible pour les nouveaux emprunteurs.

**Des taux d'emprunt fixes et bas**

Comme MUSD est frappé plutôt qu'emprunté à un pool, aucune concurrence sur les taux ne fait grimper les coûts. Résultat : des taux fixes à partir de 1 %, garantis pendant toute la durée de votre prêt. MUSD est ainsi nettement moins coûteux que les marchés de prêt classiques, où les taux sont variables et peuvent s'envoler de manière imprévisible.

**Efficacité du capital**

MUSD accepte un ratio de collatéralisation minimum de seulement 110 %, ce qui signifie que les emprunteurs peuvent accéder à jusqu'à 90 % de la valeur de leurs bitcoins. Pour les détenteurs de Bitcoin, c'est la manière la plus efficace en capital de débloquer de la liquidité sans vendre. Cela dit, un ratio de garantie plus élevé offre une marge de sécurité plus importante : tenez toujours compte du profil de risque de votre position.

## MUSD face à la finance traditionnelle

Pour les détenteurs de Bitcoin, le système financier a toujours été synonyme de compromis : frais élevés, conservation opaque, taux variables et intermédiaires centralisés. MUSD apporte directement à vos bitcoins les avantages de la finance onchain : transparence, faibles coûts et auto-conservation.

![MUSD face à la finance traditionnelle](/docs/images/musd/musd-vs-traditional.png)

Pas de frais de virement, pas d'écarts de change, pas de frais de tenue de compte mensuels. Simplement vos bitcoins dans un coffre de contrat intelligent décentralisé, qui travaillent pour vous.

## Comparaison de MUSD avec les stablecoins existants

Le marché des stablecoins est vaste : il va des stablecoins adossés à des monnaies fiduciaires (USDT et USDC) aux stablecoins synthétiques (USDe), en passant par d'autres CDP algorithmiques (Liquity, Sky). Si la croissance de ces stablecoins a été remarquable ces dernières années, il reste un manque sur le marché pour les bitcoiners.

MUSD vise à répondre à ces risques grâce à un adossement exclusif au Bitcoin.

**Stablecoins adossés à des monnaies fiduciaires**

Les stablecoins adossés à des monnaies fiduciaires, comme USDT et USDC, représentent plus de 90 % du marché actuel des stablecoins. Non seulement ils sont en totale contradiction avec l'éthos de la crypto, puisqu'ils sont adossés au dollar américain, mais leurs réserves en dollars doivent être conservées en sécurité par une entité unique.

Tether, l'entité émettrice d'USDT (environ 150 Md\$ en circulation), n'a jamais publié d'audit de preuve de réserves. L'entreprise a enregistré un bénéfice de 13 Md\$ en 2024.

Circle, entreprise américaine émettrice d'USDC, peut [mettre des adresses sur liste noire à sa discrétion](https://www.circle.com/legal/usdc-risk-factors) et [rémunère les plateformes d'échange pour qu'elles détiennent son actif](https://x.com/inkymaze/status/1907187020293980599?s=46). À mesure que l'économie américaine passe onchain, cela devient un point de centralisation dangereux.

**Stablecoins synthétiques**

Les stablecoins synthétiques (par exemple USDe) dépendent souvent de plateformes d'échange centralisées et de solutions de conservation pour maintenir leur valeur. Le risque lié à cette exposition est devenu manifeste lorsque [Bybit a récemment subi le plus important piratage jamais enregistré](https://apnews.com/article/bybit-exchange-crypto-hack-north-korea-7c8335c1397261554138090c2c38f457).

Par ailleurs, les stablecoins adossés de manière synthétique au rendement d'un basis trade sont imprévisibles et n'ont pas fait leurs preuves. Les taux de financement sont variables, et ces systèmes n'ont pas été éprouvés face à diverses pressions de marché externes.

**Stablecoins de type CDP comme USDS**

Les stablecoins fondés sur des CDP garantissent généralement leurs positions avec un panier de jetons, comprenant des stablecoins adossés à des monnaies fiduciaires et divers altcoins.

Si cette diversification peut répartir le risque, elle pose aussi des défis importants. La garantie, souvent composée d'actifs volatils comme des jetons liés à ETH ou d'autres stablecoins, peut réagir de manière imprévisible en période de tension sur les marchés et se révèle souvent nettement plus volatile que le BTC. Cela peut compromettre l'ancrage du stablecoin et compliquer les processus de rachat et de liquidation.
