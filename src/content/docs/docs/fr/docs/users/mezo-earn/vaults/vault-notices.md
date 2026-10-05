---
title: Avis concernant les coffres
description: Avis actuels de fermeture progressive et de migration des coffres Mezo
topic: users
---

Cette page répertorie les avis actuels de migration et de fermeture progressive des coffres sur Mezo Earn.

| Coffre                | Statut                                                     | Ce que vous devez faire                        |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| **BTC Vault**        | Fermeture progressive en cours. Les dépôts sont fermés.                         | Retirez vos fonds au plus tard le **28 octobre 2026**           |
| **cbBTC Vault**      | Les dépôts sont fermés. La migration vers le BTC Vault est terminée. | Retirez les fonds restants de votre cbBTC Vault  |
| **Stablecoin Vault** | Les dépôts sont suspendus et le coffre est en cours de fermeture progressive          | Lancez votre retrait au plus tard le **31 juillet 2026** |

:::caution[Les retraits prennent du temps]
Les retraits du Stablecoin Vault ne sont pas instantanés. Ils passent par une file d'attente de retrait dont le traitement peut prendre environ 48 heures.
:::

## Fermeture progressive du BTC Vault

Le BTC Vault (mbhBTC), opéré avec Mellow et Sense Capital, est en cours de fermeture progressive. Les dépôts sont fermés. Retirez vos fonds au plus tard le **28 octobre 2026**.

Les retraits sont placés dans une file d'attente : commencez donc tôt. Vous devez soumettre votre demande de retrait au plus tard le 28 octobre ; le traitement et la réclamation peuvent avoir lieu ensuite. Une demande de retrait ne restitue pas immédiatement vos fonds dans votre portefeuille.

### Retirer des fonds du BTC Vault

1. Ouvrez le [BTC Vault](https://mezo.org/earn/vaults/0xE2232789D4cF5bb1ffaDA1a105Cc59B18d639318) et connectez le portefeuille qui détient votre position.
2. Sélectionnez **Withdraw**, choisissez le montant et suivez les invites de transaction.
3. Attendez que votre demande de retrait soit traitée.
4. Revenez sur la page du coffre et réclamez vos jetons lorsqu'ils sont prêts.

Si vous avez précédemment migré des parts du cbBTC Vault vers le BTC Vault, ces instructions s'appliquent également à cette position. Aucun coffre de remplacement n'est prévu dans le cadre de cette fermeture progressive.

### Retrouver votre position

Une fois la fermeture progressive annoncée, le BTC Vault n'apparaît dans la liste des coffres que pour les portefeuilles qui y détiennent encore une position. Les détenteurs continuent de le voir après le 28 octobre, y compris lorsqu'un retrait est en attente ou prêt à être réclamé. Vous pouvez également ouvrir directement le coffre à l'aide du lien ci-dessus.

### Aide après le 28 octobre

Contactez le [support de Mellow sur Discord](https://discord.com/invite/mellow) pour obtenir de l'aide sur les retraits après le 28 octobre.

## Retraits du cbBTC Vault

Les dépôts dans le cbBTC Vault sont fermés et la migration vers le BTC Vault est terminée. Si vous détenez encore des parts du cbBTC Vault (mbhcbBTC), retirez vos fonds restants du cbBTC Vault. Les retraits restent disponibles dans l'application.

Ouvrez [Mezo Vaults](https://mezo.org/earn/vaults), connectez le portefeuille qui détient votre position dans le cbBTC Vault et sélectionnez **Withdraw** sur la page du cbBTC Vault.

## Fermeture progressive du Stablecoin Vault

Le Stablecoin Vault, opéré par Lhava sur le framework de coffres de Mellow, est en cours de fermeture progressive. Les dépôts sont déjà suspendus.

Si vous détenez une position dans ce coffre, lancez votre retrait au plus tard le **31 juillet 2026**. Le coffre prend en charge les positions financées en mUSDC, mUSDT ou MUSD et émet des jetons de reçu **msvUSD**. Les retraits sont traités en mUSDC, que votre position ait été financée en mUSDC, en mUSDT ou en MUSD.

### Comment retirer vos fonds

1. Rendez-vous sur [Mezo Vaults](https://mezo.org/earn/vaults) et ouvrez le **Stablecoin Vault**.
2. Sélectionnez **Withdraw** et suivez les invites correspondant à votre position.
3. Confirmez la transaction et prévoyez environ 48 heures pour le traitement de la file d'attente de retrait.

Après le 31 juillet 2026, le Stablecoin Vault n'apparaîtra plus dans l'application. Mellow gérera les fonds restants et traitera les retraits tardifs. Si vous avez manqué la fenêtre de retrait, [ouvrez un ticket de support sur le Discord de Mellow](https://discord.com/invite/mellow).

## Où placer vos stablecoins ensuite

Avant de déplacer vos fonds, comparez dans l'application l'actif pris en charge, la stratégie, les conditions de retrait et le taux actuel. Les taux sont variables, et chaque option comporte des risques liés aux contrats intelligents et à la stratégie.

| Option                        | Fonctionnement                                                                                                        | Points à prendre en compte                                                                                                                                                                                                   | Accès                                                                                                    |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **MUSD Savings Vault**        | Déposez des MUSD et recevez des sMUSD. Le rendement provient de l'activité du protocole MUSD et s'accumule dans le taux de change des sMUSD. | Une option à actif unique, sans frais de retrait ni délai de blocage. Le taux varie selon l'activité du protocole. Staker des sMUSD modifie la manière dont vos récompenses sont générées.                                                              | [Voir le MUSD Savings Vault](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)       |
| **USDC Lending Vault**        | Déposez des mUSDC sur le marché de prêt Morpho BTC/mUSDC. Gagnez les intérêts des emprunteurs, ou stakez pour obtenir des émissions de MEZO.        | Vérifiez le taux en direct, la liquidité disponible pour les retraits et les risques liés au prêt. Les retraits peuvent être limités lorsque le taux d'utilisation est élevé. Consultez le guide de l'[USDC Lending Vault](/docs/fr/docs/users/mezo-earn/vaults/usdc-lending-vault). | [Voir l'USDC Lending Vault](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)       |
| **mUSDC/MUSD Stable CL Pool** | Fournissez de la liquidité en mUSDC et en MUSD dans une fourchette de prix choisie pour gagner des frais de trading et les éventuels incentives disponibles.   | Nécessite une gestion active de la fourchette. Une position qui sort de la fourchette cesse de générer des frais, et les fournisseurs de liquidité sont exposés à la perte impermanente et aux risques liés aux contrats intelligents.                                                    | [Voir le mUSDC/MUSD Stable CL Pool](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a) |

Découvrez d'autres façons de gagner sur les pages générales [Mezo Pools](https://mezo.org/earn/pools) et [Mezo Vaults](https://mezo.org/earn/vaults).
