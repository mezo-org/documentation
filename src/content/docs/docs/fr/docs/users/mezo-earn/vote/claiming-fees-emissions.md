---
title: FAQ sur le vote
description: Questions fréquentes sur le vote sur Mezo
topic: users
---

## Généralités

**Dois-je voter chaque semaine ?**

Non. Votre allocation de vote est conservée d'une époque à l'autre jusqu'à ce que vous la modifiiez ou la réinitialisiez, et elle continue de percevoir sa part des frais et des incentives (incitations) à chaque époque. Voter de nouveau sert à modifier l'allocation, et non à la conserver.

**Puis-je modifier mes votes au cours d'une époque ?**

Chaque verrouillage peut voter une fois par époque. Si le verrouillage n'a pas encore voté au cours de cette époque, vous pouvez soumettre une nouvelle répartition à tout moment pendant la fenêtre de vote, et celle-ci remplace votre allocation en vigueur. Une fois un vote confirmé, l'allocation de ce verrouillage est figée jusqu'au prochain changement d'époque (jeudi 00:00 UTC).

**Puis-je répartir mes votes entre plusieurs gauges ?**

Bien sûr. Vous pouvez allouer votre pouvoir de vote comme vous le souhaitez : 50 % à BTC/MUSD, 30 % au MUSD Savings Rate, 20 % à un autre pool.

**Quelle est la différence entre voter avec veBTC et avec veMEZO ?**

Les détenteurs de veBTC votent sur les gauges de staking. Ils perçoivent des frais de trading, des incentives et des frais de pont passifs.

Les détenteurs de veMEZO votent sur les gauges de boost veBTC. Ils perçoivent les incentives publiés par les détenteurs de veBTC en quête de boost, ainsi que des distributions de rebase.

---

## Boost et veMEZO

**Qu'est-ce que le boost ?**

Le boost est un multiplicateur (compris entre 1x et 5x) qui amplifie votre pouvoir de vote veBTC. Il est apporté par les votes veMEZO dirigés vers le gauge de boost de votre position veBTC.

**Ai-je besoin de veMEZO pour gagner des revenus en tant que détenteur de veBTC ?**

Non. Un veBTC sans boost perçoit toujours des frais de trading, des incentives et des frais de pont passifs, simplement avec un multiplicateur de 1x. veMEZO augmente votre pouvoir de vote effectif (jusqu'à 5x), mais n'est pas obligatoire.

**Comment obtenir du boost pour ma position veBTC ?**

De deux façons :
1. **Auto-boost :** verrouillez des MEZO en veMEZO et dirigez-les vers votre propre position
2. **Attirer du boost :** publiez des incentives sur votre gauge de boost pour attirer les votes veMEZO d'autres utilisateurs

**Que gagnent les détenteurs de veMEZO ?**

Les détenteurs de veMEZO perçoivent :
- les incentives publiés sur les gauges de boost pour lesquels ils votent ;
- des distributions de rebase qui les protègent contre la dilution.

Ils ne perçoivent **pas** de frais de trading, de revenus MUSD ni de frais de pont : ceux-ci reviennent aux détenteurs de veBTC.

**Comment le boost maximal est-il calculé ?**

Vous atteignez un boost de 5x lorsque votre part du total de veMEZO est égale ou supérieure à votre part du total de veBTC. Les positions en BTC plus importantes nécessitent proportionnellement plus de veMEZO pour atteindre le maximum.

**Que se passe-t-il si je détiens des veMEZO mais pas de veBTC ?**

Vous pouvez tout de même générer du rendement en votant sur les gauges de boost d'autres utilisateurs. Vous percevez les incentives qu'ils ont publiés, proportionnellement à votre part des votes sur ce gauge.

---

## Incentives

**Comment fonctionnent les incentives ?**

Des protocoles ou des utilisateurs déposent des incentives sur des gauges spécifiques pour attirer des votes. À la fin de l'époque, les incentives sont distribués proportionnellement à tous les votants de ce gauge, en fonction de leur poids de vote. Les incentives s'ajoutent aux frais de trading.

**Puis-je publier des incentives sur mon propre gauge de boost ?**

Oui. C'est ainsi que vous attirez des votes veMEZO vers votre position veBTC si vous souhaitez du boost sans détenir vous-même de MEZO.

**Quels jetons peuvent être utilisés comme incentives ?**

N'importe quel jeton ERC-20 peut être déposé en tant qu'incentive.

---

## Pouvoir de vote

**Mon pouvoir de vote diminue-t-il avec le temps ?**

Oui. Le pouvoir de vote décroît de manière linéaire à mesure que votre verrouillage approche de son expiration. Si vous avez verrouillé pour 28 jours, au 14e jour vous disposerez d'environ 50 % de votre pouvoir de vote initial. Prolonger votre verrouillage rétablit la totalité du poids.

**Que se passe-t-il si je possède plusieurs positions veBTC ?**

Vous pouvez voter avec chaque position séparément. Chaque NFT dispose de son propre pouvoir de vote et peut être alloué à des gauges différents ou aux mêmes : c'est vous qui choisissez.

**Que se passe-t-il si je ne prolonge pas mon verrouillage ?**

Votre pouvoir de vote continue de décroître jusqu'à atteindre zéro à l'expiration. À ce stade, vous ne pouvez plus voter ni gagner de récompenses. Vous devez soit prolonger votre verrouillage avant son expiration, soit en créer un nouveau.

**Pendant combien de temps puis-je verrouiller des veMEZO ?**

Le verrouillage maximum de veMEZO est de 4 ans (contre 28 jours pour veBTC). Ce verrouillage plus long reflète le rôle de MEZO en tant qu'actif de coordination de la chaîne.

---

## Poke

**Qu'est-ce que le poke ?**

Le poke est une transaction qui actualise le pouvoir de vote de votre position pour refléter son état actuel. Sans poke, les modifications de votre boost ne prennent pas effet.

**Quand dois-je effectuer un poke ?**

Effectuez un poke après :
- avoir reçu de nouveaux votes veMEZO sur votre gauge de boost ;
- avoir dirigé vos propres veMEZO vers votre position ;
- avoir réclamé des distributions de rebase veMEZO ;
- avoir prolongé la durée de votre verrouillage ;
- avoir ajouté des BTC/MEZO à votre verrouillage.

**N'importe qui peut-il effectuer un poke de ma position ?**

Oui. Le poke est sans permission. D'autres utilisateurs peuvent effectuer un poke de votre position si votre pouvoir de vote a sensiblement décru.

---

## Récompenses

**Quand puis-je réclamer mes récompenses ?**

Les frais et les incentives deviennent réclamables à la fin de l'époque. Pendant l'époque, vous pouvez voir l'estimation de vos récompenses s'accumuler, mais vous ne pouvez pas les réclamer avant la fin de l'époque.

**Est-ce que je gagne des récompenses sur les pools pour lesquels je ne vote pas ?**

Non. Vous ne percevez des frais et des incentives que des gauges spécifiques auxquels vous avez alloué du pouvoir de vote. Si vous avez voté à 100 % pour BTC/MUSD, vous ne percevez aucune récompense du pool MUSD/USDC.

Exception : les frais de pont passifs sont distribués à tous les détenteurs de veBTC proportionnellement à leur poids boosté, indépendamment du vote.

**Que sont les rebases et comment les réclamer ?**

Les rebases sont des distributions anti-dilution destinées aux détenteurs de veMEZO. Une partie des émissions hebdomadaires est affectée aux rebases lorsque le ratio de verrouillage est faible. Réclamez-les séparément : ils s'ajoutent au poids de votre position veMEZO.

---

## Gauges

**Comment les poids des gauges sont-ils calculés ?**

Poids du gauge = pouvoir de vote total alloué à ce gauge / pouvoir de vote total alloué à l'ensemble des gauges. Si le gauge BTC/MUSD reçoit 1 000 de pouvoir de vote et que l'ensemble des gauges en reçoit 10 000, BTC/MUSD obtient 10 % des émissions de cette époque.

**Un gauge peut-il ne recevoir aucune émission ?**

Oui. Si personne ne vote pour un gauge, celui-ci ne reçoit aucune émission pour cette époque. C'est la raison d'être des marchés d'incentives : les protocoles ont besoin de votes pour attirer des émissions.

**Que sont les gauges de boost ?**

Chaque NFT veBTC possède son propre gauge de boost. Les détenteurs de veMEZO votent sur ces gauges pour apporter du boost à cette position veBTC spécifique. Le détenteur de veBTC peut publier des incentives sur son gauge de boost pour attirer des votes.

**Où puis-je consulter les poids actuels des gauges et les incentives ?**

Rendez-vous sur la [page Vote](https://mezo.org/vote) pour consulter en temps réel les poids des gauges, les montants des incentives, les APY prévisionnels et l'historique des performances.
