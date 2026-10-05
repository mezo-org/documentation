---
title: Rachats de MUSD
topic: developers
---

# Comment racheter des MUSD sur Mezo

## Aperçu rapide
Le rachat vous permet de brûler 1 MUSD pour recevoir `$1` en BTC (moins des frais de rachat de 0,75 % et les frais de gaz). Le système effectue le rachat en commençant par le trove dont le ratio de garantie est le plus bas au-dessus de 110 %. Si le montant de MUSD dépasse ce que couvre un seul trove, le rachat se poursuit par ordre croissant de ratio de collatéralisation.

Les troves dont le ratio de collatéralisation est inférieur à 110 % peuvent être liquidés et ne peuvent pas faire l'objet d'un rachat.

---

## Prérequis

Avant de commencer, vérifiez les points suivants :

1. **Le système accepte les rachats** : accédez à TroveManager → "Read as Proxy" → appelez `getTCR()` avec le prix actuel du BTC. Le résultat doit être ≥ `1100000000000000000` (110 %)
2. **Vous détenez des MUSD** : vérifiez votre solde sur le contrat du jeton MUSD
3. **Obtenez le prix actuel du BTC** : accédez à PriceFeed → "Read as Proxy" → appelez `fetchPrice()`
4. **Obtenez les bonnes adresses de contrats** : consultez les adresses de contrats en bas de page, pour le Mainnet comme pour le Testnet.

---

## Instructions étape par étape

### 1. Accédez au contrat TroveManager
Ouvrez le contrat TroveManager dans votre explorateur de blocs et cliquez sur l'onglet **"Write as Proxy"**.

### 2. Trouvez la fonction 11 : `redeemCollateral`

Vous verrez 6 champs de saisie. Voici comment les remplir :

---

## Option A : rapide et simple (gaz plus élevé)

Utilisez cette option si vous souhaitez effectuer un rachat rapidement sans calculer de hints.

- `_amount` : [votre montant en wei – voir la conversion ci-dessous]   
- `_firstRedemptionHint` : 0x0000000000000000000000000000000000000000   
- `_upperPartialRedemptionHint` : [l'adresse de votre portefeuille]   
- `_lowerPartialRedemptionHint` : [l'adresse de votre portefeuille]   
- `_partialRedemptionHintNICR` : 1100000000000000000000   
- `_maxIterations` : 0

**Convertir des MUSD en wei :**
- 100 MUSD = `100000000000000000000`
- 5 005 MUSD = `5005000000000000000000`

**Formule** : votre montant × 1000000000000000000

---

## Option B : avec hints (gaz moins élevé)

Utilisez cette option pour réduire les coûts de gaz.

### Étape 1 : obtenir les hints de rachat

Accédez à HintHelpers → "Read as Proxy" → `getRedemptionHints()`

Renseignez :
- `_amount` : votre montant en wei (comme ci-dessus)
- `_price` : le prix actuel du BTC obtenu depuis PriceFeed
- `_maxIterations` : 50

Copiez les valeurs renvoyées :
- `firstRedemptionHint`
- `partialRedemptionHintNICR`

### Étape 2 : obtenir les hints de position

Accédez à SortedTroves → "Read as Proxy" → `findInsertPosition()`

Renseignez :
- `_NICR` : utilisez la valeur `partialRedemptionHintNICR` de l'étape 1
- `_prevId` : l'adresse de votre portefeuille
- `_nextId` : l'adresse de votre portefeuille

Copiez les valeurs renvoyées :
- `upperHint`
- `lowerHint`

### Étape 3 : appeler redeemCollateral

Revenez à TroveManager → "Write as Proxy" → `redeemCollateral`

- `_amount` : [votre montant en wei]
- `_firstRedemptionHint` : [issu de l'étape 1]
- `_upperPartialRedemptionHint` : [upperHint issu de l'étape 2]
- `_lowerPartialRedemptionHint` : [lowerHint issu de l'étape 2]
- `_partialRedemptionHintNICR` : [issu de l'étape 1]
- `_maxIterations` : 50

---

## Ce que vous recevrez

**Exemple : rachat de 100 MUSD**
- Vous brûlez : 100 MUSD
- Vous recevez : l'équivalent de `$99.25` en BTC (les frais de 0,75 % reviennent au protocole)

**Formule** : (votre montant de MUSD ÷ prix du BTC) × 0,9925 = BTC reçus

---

## Problèmes courants

**"Cannot redeem when TCR < MCR"**
→ Le TCR du système est inférieur à 110 %. Attendez qu'il remonte.

**"Unable to redeem any amount"**
→ Plusieurs raisons sont possibles :
- Aucun trove disponible avec un ratio de garantie supérieur à 110 %
- Les hints sont obsolètes (en particulier le hint NICR)
- Le montant du rachat laisserait le trove ciblé avec une dette inférieure à la dette minimale requise de 1 800 MUSD
- Le nombre maximal d'itérations est trop faible pour le montant du rachat

**La transaction tombe à court de gaz**
→ Réduisez `_maxIterations` à 10 ou divisez l'opération en rachats plus petits.

**La transaction est annulée (revert) de manière inattendue**
→ Obtenez de nouveaux hints et réessayez. Quelqu'un a peut-être effectué un rachat avant vous.

**Montant reçu inférieur au montant attendu**
→ Vérifiez l'événement `Redemption` de votre transaction. Une partie des MUSD a peut-être été restituée si le dernier trove serait passé sous le minimum de 1 800 MUSD.

---

## Conseils

- **Générez les hints immédiatement avant le rachat** – ils deviennent obsolètes si quelqu'un d'autre effectue un rachat avant vous
- **Utilisez l'option A pour les petits montants** (< `$10,000`) – le surcoût en gaz est négligeable
- **Utilisez l'option B pour les gros montants** – elle permet d'économiser beaucoup de gaz sur les rachats importants
- **Augmentez maxIterations pour les rachats plus importants** :
  - Petit (< 10 troves) : 10
  - Moyen (10-30 troves) : 50
  - Grand (30+ troves) : 100

---

## Adresses des contrats

| Contrat | Mainnet | Testnet |
|----------|---------|---------|
| TroveManager | `0x94AfB503dBca74aC3E4929BACEeDfCe19B93c193` | `0xE47c80e8c23f6B4A1aE41c34837a0599D5D16bb0` |
| HintHelpers | `0xD267b3bE2514375A075fd03C3D9CBa6b95317DC3` | `0x4e4cBA3779d56386ED43631b4dCD6d8EacEcBCF6` |
| SortedTroves | `0x8C5DB4C62BF29c1C4564390d10c20a47E0b2749f` | `0x722E4D24FD6Ff8b0AC679450F3D91294607268fA` |
| BorrowerOperations | `0x44b1bac67dDA612a41a58AAf779143B181dEe031` | `0xCdF7028ceAB81fA0C6971208e83fa7872994beE5` |
| PriceFeed | `0xc5aC5A8892230E0A3e1c473881A2de7353fFcA88` | `0x86bCF0841622a5dAC14A313a15f96A95421b9366` |
| Jeton MUSD | `0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186` | `0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503` |

Toutes les adresses sont des contrats proxy. Utilisez toujours les onglets "Read as Proxy" ou "Write as Proxy".

---

## Besoin d'aide ?

- Consultez votre transaction sur l'explorateur de blocs pour voir les événements et les messages d'erreur
- Rejoignez notre Discord et ouvrez un ticket : https://discord.com/invite/mezo
