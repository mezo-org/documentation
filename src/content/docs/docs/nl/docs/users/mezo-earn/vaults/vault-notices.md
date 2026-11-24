---
title: Kluismeldingen
description: Actuele meldingen over het afbouwen en migreren van Mezo-kluizen
topic: users
---

Op deze pagina staan de actuele meldingen over migraties en afbouw van kluizen op Mezo Earn.

| Kluis                | Status                                                     | Wat je moet doen                           |
| -------------------- | ---------------------------------------------------------- | ------------------------------------------ |
| **BTC Vault**        | Wordt afgebouwd. Stortingen zijn gesloten.                 | Neem uiterlijk **28 oktober 2026** op       |
| **cbBTC Vault**      | Stortingen zijn gesloten. De migratie naar de BTC Vault is beëindigd. | Neem je resterende tegoed in de cbBTC Vault op |
| **Stablecoin Vault** | Stortingen zijn gepauzeerd en de kluis wordt afgebouwd     | Start je opname uiterlijk **31 juli 2026**  |

:::caution[Opnames kosten tijd]
Opnames uit de Stablecoin Vault zijn niet direct. Ze verlopen via een opnamewachtrij, waarvan de verwerking ongeveer 48 uur kan duren.
:::

## Afbouw van de BTC Vault

De BTC Vault (mbhBTC), beheerd met Mellow en Sense Capital, wordt afgebouwd. Stortingen zijn gesloten. Neem je tegoed uiterlijk **28 oktober 2026** op.

Opnames komen in een wachtrij, dus begin op tijd. Je moet je opname uiterlijk op 28 oktober aanvragen; de verwerking en het claimen kunnen daarna plaatsvinden. Het aanvragen van een opname zet je tegoed niet direct terug in je wallet.

### Opnemen uit de BTC Vault

1. Open de [BTC Vault](https://mezo.org/earn/vaults/0xE2232789D4cF5bb1ffaDA1a105Cc59B18d639318) en verbind de wallet met je positie.
2. Selecteer **Withdraw**, kies het bedrag en volg de transactieaanwijzingen.
3. Wacht tot je opnameverzoek is verwerkt.
4. Ga terug naar de kluispagina en claim je tokens zodra ze klaarstaan.

Heb je eerder aandelen in de cbBTC Vault naar de BTC Vault gemigreerd, dan gelden deze instructies ook voor die positie. Bij deze afbouw komt er geen vervangende kluis.

### Je positie vinden

Zodra de afbouw is aangekondigd, verschijnt de BTC Vault alleen nog in de kluizenlijst voor wallets met een resterende positie. Houders blijven de kluis ook na 28 oktober zien, ook terwijl een opname in behandeling is of klaarstaat om te worden geclaimd. Je kunt de kluis ook rechtstreeks openen via de bovenstaande link.

### Hulp na 28 oktober

Neem contact op met [Mellow-support op Discord](https://discord.com/invite/mellow) als je na 28 oktober hulp nodig hebt bij het opnemen.

## Opnames uit de cbBTC Vault

Stortingen in de cbBTC Vault zijn gesloten en de migratie naar de BTC Vault is beëindigd. Heb je nog aandelen in de cbBTC Vault (mbhcbBTC), neem dan je resterende tegoed uit de cbBTC Vault op. Opnames blijven beschikbaar in de app.

Open [Mezo Vaults](https://mezo.org/earn/vaults), verbind de wallet met je positie in de cbBTC Vault en selecteer **Withdraw** op de pagina van de cbBTC Vault.

## Afbouw van de Stablecoin Vault

De Stablecoin Vault, beheerd door Lhava op het kluisframework van Mellow, wordt afgebouwd. Stortingen zijn al gepauzeerd.

Heb je een positie in de kluis, start je opname dan uiterlijk **31 juli 2026**. De kluis ondersteunt posities die met mUSDC, mUSDT of MUSD zijn gefinancierd en geeft **msvUSD**-ontvangsttokens uit. Opnames worden in mUSDC verwerkt, ongeacht of je positie met mUSDC, mUSDT of MUSD is gefinancierd.

### Zo neem je op

1. Ga naar [Mezo Vaults](https://mezo.org/earn/vaults) en open de **Stablecoin Vault**.
2. Selecteer **Withdraw** en volg de aanwijzingen voor je positie.
3. Bevestig de transactie en houd rekening met ongeveer 48 uur voor de verwerking van de opnamewachtrij.

Na 31 juli 2026 verschijnt de Stablecoin Vault niet meer in de app. Mellow beheert dan het resterende tegoed en verwerkt late opnames. Heb je de opnameperiode gemist, [open dan een supportticket in de Discord van Mellow](https://discord.com/invite/mellow).

## Waar je je stablecoins nu kunt onderbrengen

Vergelijk in de app het ondersteunde activum, de strategie, de opnamevoorwaarden en het actuele tarief voordat je geld verplaatst. Tarieven zijn variabel en elke optie brengt smart-contract- en strategierisico met zich mee.

| Optie                         | Hoe het werkt                                                                                                       | Waar je op moet letten                                                                                                                                                                                             | Bekijken                                                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- |
| **MUSD Savings Vault**        | Stort MUSD en ontvang sMUSD. Het rendement komt uit activiteit van het MUSD-protocol en wordt opgebouwd in de wisselkoers van sMUSD. | Een optie met één activum, zonder opnamekosten of timelock. Het tarief varieert met de protocolactiviteit. Als je sMUSD staket, verandert de manier waarop je beloningen verdient. | [MUSD Savings Vault bekijken](https://mezo.org/earn/vaults/0xb4D498029af77680cD1eF828b967f010d06C51CC)   |
| **USDC Lending Vault**        | Stort mUSDC in de Morpho-uitleenmarkt BTC/mUSDC. Verdien rente van leners, of stake voor MEZO-emissies.             | Bekijk het actuele tarief, de beschikbare opnameliquiditeit en de risico's van uitlenen. Bij een hoge benutting kunnen opnames beperkt zijn. Zie de handleiding voor de [USDC Lending Vault](/docs/nl/docs/users/mezo-earn/vaults/usdc-lending-vault). | [USDC Lending Vault bekijken](https://mezo.org/earn/vaults/0x06291b67e3d7660240ab44Afc9a708d82b976a8B)   |
| **mUSDC/MUSD Stable CL-pool** | Verschaf mUSDC- en MUSD-liquiditeit binnen een gekozen prijsbereik om handelsvergoedingen en eventuele beschikbare incentives te verdienen. | Vereist actief beheer van het bereik. Een positie die buiten het bereik raakt, verdient geen vergoedingen meer, en liquiditeitsverschaffers lopen het risico op impermanent loss en smart-contractrisico. | [mUSDC/MUSD Stable CL-pool bekijken](https://mezo.org/earn/pools/0xCC372B7E15535aB225fe17c1075831D38ef7aC1a) |

Bekijk meer manieren om te verdienen op de algemene pagina's [Mezo Pools](https://mezo.org/earn/pools) en [Mezo Vaults](https://mezo.org/earn/vaults).
