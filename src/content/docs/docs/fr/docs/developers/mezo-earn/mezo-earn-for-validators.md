---
title: Mezo Earn pour les validateurs
description: >-
  Comment les validateurs participent au moteur économique de Mezo, reçoivent
  des incentives et interagissent avec veBTC, veMEZO, les gauges et le staking
  de LP.
topic: developers
---

Cette page explique comment les validateurs participent au moteur économique de Mezo (Mezo Earn), comment ils reçoivent des incentives (incitations) et comment cela s'articule avec veBTC, veMEZO, les gauges et le staking de LP.

Elle s'adresse :

- aux validateurs Mezo actuels et potentiels ;
- aux fournisseurs d'infrastructure et aux partenaires ;
- aux détenteurs de veBTC/veMEZO et aux LP qui souhaitent comprendre le fonctionnement des récompenses des validateurs.

:::note

Le livre blanc de Mezo fait référence pour les mécanismes et les formules qui sous-tendent veBTC, veMEZO, les gauges, les splitters et les émissions.

:::

---

## Aperçu général

Dans les grandes lignes :

- Les validateurs sécurisent la chaîne Mezo et reçoivent des récompenses en MEZO via le Chain Splitter de Mezo Earn.
- Les détenteurs de veBTC constituent le point d'ancrage de la gouvernance. Ils votent sur les gauges de staking pour orienter les émissions.

**Mécanismes clés :**

- **Répartition des émissions :** les ratios des splitters (Chain Splitter et Ecosystem Splitter) sont actuellement fixes et verrouillés par la gouvernance. Ils pourraient devenir ajustables grâce à de futurs mécanismes de gouvernance.
- **Rôle de veMEZO :** veMEZO agit comme un boost sur le pouvoir de veBTC (jusqu'à un multiplicateur plafonné), mais ne remplace jamais BTC comme point d'ancrage.

---

## Concepts fondamentaux

### Définitions clés

Pour comprendre Mezo Earn, nous distinguons trois notions économiques :

- **Récompenses :** ce que les acteurs reçoivent en échange de leur travail (par exemple, les émissions de MEZO).
- **Incentives :** les règles ou avantages conçus pour encourager des comportements précis (par exemple, obtenir un boost en détenant du veMEZO).
- **Bribes :** un budget temporaire fourni par des protocoles ou des utilisateurs pour encourager une action précise (par exemple, voter pour un gauge donné).

### Acteurs de Mezo Earn

Mezo Earn coordonne cinq acteurs principaux :

1. **Utilisateurs finaux / verrouilleurs de veBTC et veMEZO :** ils verrouillent des BTC ou des MEZO, reçoivent des NFT veBTC et veMEZO, votent dans les gauges et réclament des frais/émissions.
2. **Fournisseurs de liquidité (LP) :** ils fournissent de la liquidité au DEX et reçoivent des jetons LP ainsi que des frais ; ils peuvent, s'ils le souhaitent, staker leurs jetons LP dans des gauges de staking pour échanger leurs frais contre des émissions de MEZO.
3. **Validateurs :** ils exécutent des nœuds de la chaîne Mezo, participent au consensus et reçoivent des émissions de MEZO via le Chain Splitter.
4. **Protocoles :** ils déploient des bribes sur les gauges pour attirer de la liquidité ou des votes de gouvernance.
5. **La chaîne :** elle collecte les frais de swap et les frais de chaîne/de pont, puis les redistribue via Earn.

---

## Comment les validateurs reçoivent des émissions

Le chain splitter envoie aux validateurs une part fixe des émissions de récompenses, actuellement fixée à 20 % des émissions de récompenses. Ce ratio est verrouillé par la gouvernance.

Les émissions des validateurs sont réparties à parts égales entre les validateurs actifs. Il n'existe actuellement aucun mécanisme permettant aux détenteurs de veBTC de voter pour des validateurs individuels ou d'orienter les émissions vers des validateurs spécifiques.

---

## Gauges de boost veBTC et marché d'appariement

Bien qu'ils ne soient pas propres aux validateurs, les gauges de boost veBTC et le marché d'appariement influent directement sur l'efficacité avec laquelle les validateurs et les LP peuvent attirer des votes.

- Chaque NFT veBTC possède son propre gauge de boost (sans staking).
- Les détenteurs de veMEZO votent sur ces gauges avec leur poids veMEZO.

**Dynamique du marché :**

- **Participants riches en BTC / pauvres en MEZO :** ils proposent des incentives (bribes) sur leurs gauges de boost veBTC pour attirer des votes veMEZO et augmenter leur multiplicateur (jusqu'à 5x).
- **Participants riches en MEZO / pauvres en BTC :** ils orientent leurs votes veMEZO vers des gauges de boost veBTC pour obtenir ces incentives sans détenir de BTC.

---

## Le staking de LP et sa relation avec les validateurs

### Qu'est-ce que le staking de LP ?

Les LP fournissent de la liquidité aux pools du DEX sur Mezo et reçoivent des jetons LP représentant leur part du pool. Ils peuvent choisir entre deux modes :

**1. LP non staké :**

- Les LP conservent leurs jetons LP dans leur portefeuille.
- Ils perçoivent leur quote-part des frais de swap directement depuis le pool.
- Aucune émission de MEZO ne leur est attribuée.

**2. LP staké :**

- Les LP stakent leurs jetons LP dans un gauge de staking.
- La part de frais sous-jacente des jetons LP stakés est redirigée vers les votants veBTC qui votent pour ce gauge.
- En contrepartie, les LP reçoivent les émissions de MEZO attribuées à ce gauge.

**L'échange économique :**

- Les LP échangent un rendement réel direct (les frais) contre des émissions de MEZO.
- Les votants veBTC + veMEZO échangent leur pouvoir de vote contre des droits sur ces frais redirigés et sur les éventuelles incentives ajoutées au gauge.

### Incidence du staking de LP sur les validateurs

Via l'arborescence des splitters :

- Le **chain splitter** détermine la part de l'enveloppe de récompenses attribuée aux activités des validateurs par rapport aux autres activités. Ce ratio est actuellement fixé à 20 % pour les validateurs / 80 % pour l'écosystème et verrouillé par la gouvernance.
- L'**ecosystem splitter** oriente l'enveloppe hors validateurs vers les gauges de staking (pools LP + épargne MUSD). Ce ratio est actuellement fixe et verrouillé par la gouvernance.
- Les gauges LP sont ensuite en concurrence avec le gauge d'épargne MUSD et les autres gauges LP pour les émissions au sein de leur branche.

---

## Étape par étape : staking de LP

1. **Fournir de la liquidité :** choisissez un pool sur le DEX Mezo, déposez des actifs et recevez des jetons LP.

2. **Trouver le gauge de staking :** ouvrez le frontend d'Earn ou du DEX, trouvez le gauge de staking du pool et vérifiez qu'il accepte les jetons LP.

3. **Staker les jetons LP :** approuvez le contrat et stakez le montant souhaité. Les frais du pool sont alors redirigés vers la cagnotte de frais du gauge, et les émissions de MEZO sont distribuées aux stakers de jetons LP.

4. **Vote veBTC sur le gauge LP :** les détenteurs de veBTC (+veMEZO) peuvent voter sur le gauge LP. Un poids de vote plus élevé attribue davantage d'émissions de MEZO au gauge et reverse davantage de frais du pool/de bribes aux votants.

5. **Réclamer les récompenses :**
   - **LP :** réclamez les émissions de MEZO (attribuées à chaque époque).
   - **Votants veBTC :** réclamez votre part des frais de swap redirigés et des incentives.

---

## Gauge d'épargne MUSD

Le taux d'épargne MUSD est implémenté sous la forme d'un autre gauge de staking.

- Les utilisateurs déposent des MUSD dans un coffre d'épargne et reçoivent un jeton de reçu.
- S'ils stakent ce jeton de reçu dans le gauge d'épargne MUSD :
  - leur rendement MUSD direct est redirigé vers la cagnotte de frais du gauge ;
  - en contrepartie, ils reçoivent les émissions de MEZO attribuées à ce gauge.
- Les détenteurs de veBTC qui votent sur le gauge d'épargne MUSD reçoivent :
  - le rendement MUSD (provenant des intérêts et des frais d'origination et de refinancement) ;
  - les éventuelles incentives en MEZO attribuées à ce gauge.

Ce gauge est en concurrence directe avec les gauges LP pour les émissions de la branche staking et pour l'attention des votants.

---

## Contact et assistance Discord

Pour les questions propres aux validateurs, l'intégration et la coordination : rejoignez le [Discord Mezo](https://discord.mezo.org) et retrouvez-nous dans le canal #developers.
