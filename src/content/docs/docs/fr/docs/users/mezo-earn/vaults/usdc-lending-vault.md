---
title: USDC Lending Vault
description: >-
  Fournissez des mUSDC au marché de prêt Morpho adossé au BTC sur Mezo et gagnez
  les intérêts des emprunteurs ou des émissions de MEZO
topic: users
---

L'USDC Lending Vault vous donne une exposition directe à un marché transparent de crédit adossé au BTC. Déposez des mUSDC : votre capital est prêté à des emprunteurs qui apportent des BTC en garantie. Les intérêts payés par les emprunteurs constituent la source du rendement des déposants.

En coulisses, les dépôts sont placés dans un Morpho Vault V2 géré par un curateur (le Morpho BTC-mUSDC Vault), qui alimente pour votre compte le marché Morpho Blue BTC / mUSDC. Vous n'interagissez pas directement avec Morpho : vous détenez un jeton de part dont la valeur augmente à mesure que les intérêts s'accumulent.

Accédez au coffre sur [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B). Pour emprunter des mUSDC en garantie de BTC, consultez [Comment emprunter des mUSDC](/docs/fr/docs/users/borrow/how-to-borrow-musdc).

**Fonctionnement :**

- Déposez des mUSDC et recevez des `morphoBTC-mUSDC`, un jeton de part représentant votre créance sur le coffre
- Le rendement s'accumule dans le prix de la part : un même nombre de parts devient échangeable contre davantage de mUSDC au fil du temps
- Les prêts sont surcollatéralisés en BTC (LTV de liquidation de 86 %). Les actifs déposés ne font pas l'objet d'une réhypothécation
- Il n'y a pas de dépôt minimum ni de frais de protocole à l'entrée ou à la sortie
- L'APR est variable et dépend de la demande des emprunteurs : consultez le taux actuel sur [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)

---

## Comprendre vos parts

`morphoBTC-mUSDC` est votre jeton de part du coffre. Quelques points à savoir :

- **Le rendement se reflète dans le taux de change, pas dans votre solde.** Votre solde de parts reste identique après le dépôt, mais chaque part devient échangeable contre davantage de mUSDC à mesure que les emprunteurs paient des intérêts. Vous constaterez la différence lors du retrait.
- **Les parts ne sont pas équivalentes 1:1 aux mUSDC.** Si le coffre a déjà généré des intérêts, un dépôt de 100 mUSDC vous donne moins de 100 parts, et chaque part vaut plus de 1 mUSDC.
- **Si vous stakez pour obtenir des émissions, vos intérêts sont redirigés.** Les parts stakées rapportent des MEZO au lieu des intérêts des emprunteurs. Les intérêts qui vous auraient été versés sont redirigés vers les votants veBTC du gauge du Lending Vault.

---

## Détails du coffre

| Paramètre | Valeur |
|-----------|-------|
| Jeton de dépôt | mUSDC |
| Jeton de part | `morphoBTC-mUSDC` |
| Marché sous-jacent | Morpho Blue BTC / mUSDC |
| LTV de liquidation | 86% |
| Curateur | Gouvernance de Mezo |
| Frais de retrait | Aucun |
| APR actuel | Variable : consultez [mezo.org/earn/vaults](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |

---

## Deux façons de gagner

Comme pour les autres produits Earn de Mezo, vous choisissez comment chaque part est rémunérée :

- **Conserver pour les intérêts** : gardez vos `morphoBTC-mUSDC` dans votre portefeuille. Vos parts prennent de la valeur à mesure que les emprunteurs paient des intérêts.
- **Staker pour les émissions de MEZO** : stakez vos parts dans le gauge du Lending Vault. Vous gagnez des MEZO ; les intérêts que ces parts auraient générés reviennent alors aux votants.

Une même part ne peut pas rapporter les deux à la fois, mais vous pouvez répartir vos avoirs : staker une partie pour les émissions et conserver le reste pour les intérêts. Le dépôt et le staking sont des étapes distinctes dans l'application : déposez d'abord pour recevoir des parts, puis stakez si vous le souhaitez.

**Pour sortir d'une position stakée :** retirez vos parts du staking, reconvertissez-les en parts du coffre, puis retirez-les en mUSDC. Le retrait du staking ne vous fait pas perdre les MEZO réclamables.

---

## Retraits

Les retraits vous restituent vos mUSDC (plus les intérêts accumulés si vous conserviez vos parts). Comme vos mUSDC sont prêtés à des emprunteurs, le coffre ne peut verser que ce qui est actuellement disponible, c'est-à-dire non emprunté.

- L'application affiche un montant **Available to withdraw** basé sur la liquidité actuelle du coffre
- Lorsque le taux d'utilisation est élevé, un retrait important peut n'être que partiellement exécutable ou temporairement bloqué jusqu'à ce que des emprunteurs remboursent ou qu'une nouvelle offre arrive
- Les parts stakées doivent d'abord être sorties du staking avant de pouvoir être retirées

Il s'agit du comportement normal d'un marché de prêt, et non d'une défaillance du coffre.

---

## Risques

### Risque lié aux contrats intelligents

Les fonds transitent par l'adaptateur du Lending Vault, le Morpho Vault V2 et le marché Morpho Blue. Un bug ou une exploitation de faille dans l'un d'eux pourrait entraîner une perte de fonds.

### Risque d'illiquidité

Lorsque le taux d'utilisation par les emprunteurs est élevé, il se peut que vous ne puissiez pas retirer la totalité de vos mUSDC à la demande. Ne fournissez que des fonds que vous pouvez vous permettre de voir temporairement immobilisés.

### Risque lié au marché de prêt

Les emprunteurs sont liquidés à un LTV de 86 %. En cas de baisse sévère et rapide du BTC, des créances irrécouvrables peuvent apparaître ; elles sont alors partagées entre les fournisseurs par une baisse du prix de la part, car il n'existe pas de fonds d'assurance. Votre position est par ailleurs libellée en mUSDC : une perte de parité affecte donc vos avoirs.

### Risque lié au curateur

La gouvernance de Mezo choisit les marchés que le coffre alimente ainsi que les plafonds d'offre. Les modifications apportées par le curateur sur Morpho Vault V2 sont soumises à un timelock.

---

## Contrats

| Contrat | Adresse |
| -------- | ------- |
| Morpho Vault V2 (`morphoBTC-mUSDC`) | [0x06291b67e3d7660240ab44Afc9a708d82b976a8B](https://explorer.mezo.org/address/0x06291b67e3d7660240ab44Afc9a708d82b976a8B) |
| Adaptateur du Lending Vault | [0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788](https://explorer.mezo.org/address/0xd3f6F147662Bf2943ca09ee16beDaEa28AE28788) |
| Gauge du coffre | [0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7](https://explorer.mezo.org/address/0x11E98DEc5B1965E4eB872552E64Ef8580bBBbae7) |
| mUSDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) |

Pour plus de détails sur le marché Morpho Blue, consultez la [documentation de Morpho](https://docs.morpho.org/).
