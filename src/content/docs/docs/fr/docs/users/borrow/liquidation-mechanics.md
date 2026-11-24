---
title: Liquidations et rachats MUSD
description: Découvrez le fonctionnement des liquidations et des rachats.
topic: users
---

## Aperçu
Lorsque vous empruntez en utilisant vos bitcoins comme garantie, vous créez une position de prêt (également appelée « trove »). Deux événements clés du système peuvent affecter votre prêt :

- **Liquidation** : clôture forcée de votre prêt, qui ne se produit que si sa santé, mesurée par le ratio de garantie, passe sous un minimum critique de 110 %. En cas de liquidation, vous perdez votre garantie.
- **Rachat** : toute personne détenant des MUSD peut les échanger auprès du protocole contre des BTC à raison de 1 \$ par MUSD (moins des frais de rachat, actuellement de 0,75 %), ce qui maintient le prix du MUSD proche de 1 \$ grâce à l'arbitrage. Les rachats prélèvent en priorité les BTC du trove dont le ratio de garantie est le plus faible (tant qu'il reste au-dessus du seuil de liquidation de 110 %) : un rachat peut donc réduire votre prêt même lorsque votre trove ne risque pas la liquidation. Si le montant du rachat est inférieur à la dette de ce trove, il est traité comme un rachat partiel, ce qui signifie que seule une partie de la dette est annulée. S'il est supérieur, le trove fait l'objet d'un rachat complet et le montant restant est reporté sur le trove dont le CR est immédiatement supérieur. Dans les deux cas, la dette et la garantie sont retirées pour des montants égaux en dollars, ce qui augmente le ratio de collatéralisation du trove concerné, mais l'emprunteur perd au passage son exposition au BTC.

---

## Liquidations ⚠️

### Qu'est-ce qu'une liquidation ?
Une liquidation est un mécanisme de sécurité qui clôture automatiquement un prêt lorsqu'il devient trop risqué. Cela évite que l'ensemble du système ne devienne instable.

### Quand une liquidation se produit-elle ?

:::danger
Votre prêt risque d'être liquidé si son ratio de garantie passe sous 110 %. Considérez ce seuil comme la marge de sécurité minimale absolue exigée pour votre prêt.
:::

### Que se passe-t-il lors d'une liquidation ?
Le système dispose de deux moyens de traiter une liquidation :

#### Recours au Stability Pool (méthode par défaut) :
- Le système utilise les stablecoins de sa réserve de sécurité, le Stability Pool, pour rembourser intégralement votre dette.
- La personne ou le bot qui a déclenché la liquidation reçoit une petite récompense (200 MUSD de frais de gaz et 0,5 % de votre garantie).
- Le reste de votre garantie (99,5 %) est transféré au Stability Pool pour rembourser ses déposants.
- Votre prêt est clôturé et vous perdez la totalité de votre garantie.

#### Redistribution (méthode de repli) :
- Si le Stability Pool est vide, le système répartit votre dette et votre garantie entre tous les autres titulaires de prêts actifs.
- Il s'agit d'une méthode de secours qui garantit que le système reste toujours équilibré.

### Exemple de liquidation :
- Imaginons que votre prêt présente une dette de 10 000 MUSD.
- La valeur de votre garantie en BTC tombe à 10 900 \$.
- Votre ratio de garantie est désormais de 109 %, soit en dessous du minimum de 110 %.
- Résultat : votre prêt est liquidé. Votre dette de 10 000 MUSD est soldée, mais vous perdez la totalité de votre garantie en BTC, d'une valeur de 10 900 \$.

---

## Rachats 🛡️

### Qu'est-ce qu'un rachat ?
Un rachat est une fonctionnalité qui permet à toute personne détenant un stablecoin de l'échanger, directement auprès du protocole, contre une valeur équivalente en dollars de BTC (moins les frais de rachat). Ce processus contribue à maintenir le stablecoin proche de son ancrage à 1 \$. Il ne s'agit pas d'une pénalité et cela ne signifie pas que votre prêt est en danger.

### Quand un rachat se produit-il ?
Les rachats peuvent avoir lieu à tout moment. Lorsqu'un utilisateur souhaite racheter son stablecoin contre des BTC, le système recherche des prêts auprès desquels prélever la garantie.

### Quels prêts sont choisis pour un rachat ?
Le système commence toujours par le prêt dont le ratio de garantie est le plus faible, tout en restant au-dessus du seuil de liquidation de 110 %, même si ce ratio est sain et nettement supérieur à 110 %. Si votre prêt est moins bien garanti que les autres, il a plus de chances d'être choisi pour un rachat.

### Que se passe-t-il lors d'un rachat ?

#### Rachat complet :
- Si un rachat rembourse l'intégralité de votre dette, votre prêt est clôturé.
- Une valeur équivalente de vos BTC est remise au racheteur.
- Les BTC restants éventuels vous appartiennent. C'est ce qu'on appelle votre surplus de garantie : il est envoyé vers un compte de conservation spécial, où vous pouvez le récupérer.

#### Rachat partiel (plus courant) :
- Une partie de votre dette est remboursée par le racheteur.
- Une valeur équivalente de votre garantie en BTC lui est remise.
- Résultat : votre prêt reste ouvert, mais il est désormais plus petit et plus sain, avec un ratio de garantie plus élevé.

### Exemple de rachat :
- Imaginons que votre prêt présente une dette de 10 000 MUSD et une garantie en BTC de 13 000 \$ (un ratio sain de 130 %).
- Un autre utilisateur rachète 5 000 MUSD, et votre prêt est choisi.
- Résultat :
  - Votre dette est ramenée à 5 000 MUSD.
  - Votre garantie est ramenée à 8 000 \$.
  - Votre nouveau ratio de garantie est désormais de 160 % (8 000 \$ / 5 000 MUSD), ce qui rend votre prêt bien plus sûr !

### Comment récupérer votre garantie restante après un rachat complet
Si votre prêt est entièrement remboursé par un rachat, votre surplus de garantie est en sécurité. Vous pouvez le récupérer à tout moment via l'application Mezo.

Remarque importante : il est possible que l'interface utilisateur actuelle n'affiche pas votre surplus disponible. Si l'alerte « Loan redeemed » ne s'affiche pas sur la page Borrow, suivez notre guide [Comment récupérer votre garantie après un rachat complet](/docs/fr/docs/users/borrow/claim-collateral-after-redemption/) pour la récupérer manuellement via le Mezo Explorer.

---

## Principales différences en un coup d'œil

| Caractéristique | Liquidation (clôture forcée) | Rachat (remboursement de la dette) |
| --- | --- | --- |
| Quand elle se produit | Uniquement lorsque votre ratio est inférieur à 110 % | Peut se produire lorsque votre ratio est supérieur à 110 % |
| Qui la déclenche ? | N'importe qui (généralement des bots) | Tout utilisateur détenant des MUSD |
| Effet sur la dette | Entièrement éliminée | Réduite ou éliminée |
| Effet sur la garantie | Perte totale | Partiellement retirée, l'éventuel surplus pouvant être récupéré par vous |
| Effet pour vous | Événement négatif : le prêt est clôturé et les actifs sont perdus | Neutre ou positif : le prêt devient plus petit et plus sain |

---

## Qu'est-ce que le mode de récupération ?

:::note
Le mode de récupération (Recovery Mode) est un état de sécurité temporaire qui s'active si le ratio de garantie total (TCR) de l'ensemble du système passe sous 150 %. Il s'agit d'un état particulier du système, assorti de règles d'emprunt plus strictes.
:::

En mode de récupération :
- **Les liquidations ne sont pas affectées.** Le seuil de liquidation reste fixé à 110 %, comme en mode normal. Contrairement à Liquity v1, MUSD n'étend pas les liquidations à des ratios de collatéralisation plus élevés en mode de récupération.
- Il est impossible d'ouvrir de nouveaux prêts avec un ratio de garantie inférieur à 150 %.
- Le refinancement est bloqué.
- Le système incite les utilisateurs à ajouter de la garantie ou à rembourser leur dette afin de ramener le TCR au-dessus de 150 %.

---

## Comment protéger votre prêt

:::tip
La meilleure protection contre la liquidation comme contre le rachat consiste à maintenir un ratio de garantie élevé : visez un ratio nettement supérieur à 150 %.
:::

### Pour éviter la liquidation :
- Conservez une marge confortable. Visez un ratio de garantie nettement supérieur à 110 % pour rester à l'abri de la volatilité des marchés. Un ratio supérieur à 150 % vous permet en outre d'emprunter et de refinancer librement, même si le système entre en mode de récupération.
- Surveillez régulièrement la santé de votre prêt, en particulier si le prix du BTC baisse.
- Soyez proactif : ajoutez de la garantie ou remboursez une partie de votre dette si votre ratio devient trop faible.

### Pour réduire la probabilité d'un rachat :
- Maintenez un ratio de garantie élevé. Contrairement aux liquidations, qui se déclenchent à un seuil fixe, les rachats sont relatifs : le système sélectionne en priorité les troves dont le ratio de garantie est le plus faible. Plus votre ratio est élevé par rapport à celui des autres troves, moins le vôtre a de chances de faire l'objet d'un rachat. Si 150 % constitue généralement un bon objectif de référence, le positionnement optimal dépend des conditions de marché du moment et des ratios de garantie des autres troves ouverts. Il est utile de surveiller régulièrement les troves en cours et d'ajuster votre ratio en conséquence pour rester nettement au-dessus du bas du classement.

### Suivez votre prêt avec MUSD Monitor
Pour une surveillance avancée, vous pouvez utiliser [mezotools.cc](https://mezotools.cc).

Cet outil vous permet de :
- vérifier en temps réel la santé des troves et les ratios de garantie ;
- consulter les rachats et liquidations récents à l'échelle du système ;
- suivre les prix du BTC et des stablecoins directement depuis les oracles onchain de Mezo.

---

Pour la liste complète des termes et définitions relatifs à MUSD, consultez la page [Architecture et terminologie](/docs/fr/docs/users/borrow/architecture-and-terminology#définitions).
