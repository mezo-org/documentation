---
title: Ditto MUSD Savings Vault
description: >-
  Stort MUSD op Mezo en ontvang dMUSD voor een geautomatiseerde cross-chain
  kluis met een initiële toewijzing aan Spark Savings
topic: users
---

De Ditto MUSD Savings Vault geeft MUSD-houders nog een manier om hun activa via Mezo Earn te laten renderen. Stort MUSD op Mezo en ontvang **dMUSD**, een ontvangstbewijstoken dat je positie in de kluis vertegenwoordigt. Ditto Network regelt achter de schermen de swaps, het bridgen en de toewijzing van de kluis, met een initiële toewijzing aan **Spark Savings op Ethereum**.

Je houdt een kluispositie aan op Mezo, terwijl Ditto de stappen beheert die nodig zijn om het onderliggende rendement op een andere chain te benutten.

Bekijk de [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8).

## Hoe het werkt

1. **Stort MUSD op Mezo.** Je ontvangt dMUSD dat je positie in de kluis vertegenwoordigt.
2. **Ditto wijst de activa toe.** Operators regelen de swaps en het bridgen naar Ethereum en wijzen de activa vervolgens toe aan Spark Savings.
3. **De onderliggende strategie levert rendement op.** Je dMUSD vertegenwoordigt een aanspraak op de activa van de kluis. Het rendement hangt af van de onderliggende strategie en is variabel.
4. **Vraag een inwisseling aan om uit te stappen.** Ditto draait het proces terug en geeft MUSD terug op Mezo nadat de opname is verwerkt.

### Hoe de automatisering werkt

Meerdere operators controleren voorgestelde kluisacties onafhankelijk van elkaar voordat ze die ondertekenen. Voor uitvoering is een minimumaantal goedkeuringen van operators nodig, en smart contracts dwingen onchain aanvullende controles af. Ook de waardering van de kluis (de intrinsieke waarde, of NAV) wordt via de ondertekende pipeline onchain gepubliceerd.

Deze controles regelen de geautomatiseerde uitvoering; ze nemen het risico van smart contracts, bridges, operators of de strategie niet weg.

## Gegevens van de kluis

| Parameter | Waarde |
| --- | --- |
| Stortingsactivum | MUSD op Mezo |
| Ontvangstbewijstoken | dMUSD |
| Kluisoperator | Ditto Network |
| Initiële toewijzing | Spark Savings op Ethereum |
| Inwisselingsactivum | MUSD op Mezo |
| Opnames | Asynchroon: houd rekening met verwerkingstijd |
| Huidige APY | Ongeveer 3,60% per 29 september 2026, in lijn met Spark Savings; variabel, raadpleeg de [kluispagina](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) |

Resultaten uit het verleden geven de huidige prestaties niet weer en bieden geen garantie voor toekomstig rendement. Bekijk in de app het actuele tarief, eventuele kosten, de opnamevoorwaarden en de risico's voordat je stort.

## Zo stort je

1. Open de [Ditto MUSD Savings Vault](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8) en verbind je wallet op Mezo.
2. Bekijk de strategie, het actuele tarief en de opnamevoorwaarden.
3. Vul in hoeveel MUSD je wilt storten en volg de aanwijzingen in de app voor goedkeuring en storting.
4. Bevestig de vereiste transacties in je wallet. Je dMUSD-ontvangstbewijstokens vertegenwoordigen je kluispositie.

## Opnames

Vraag een inwisseling aan via de kluispagina en volg de aanwijzingen voor je dMUSD-positie. Ditto bouwt de onderliggende toewijzing af, bridget en swapt waar nodig, en geeft MUSD terug op Mezo.

**Opnames zijn asynchroon.** Als je een inwisselingsverzoek indient, betekent dat niet dat de MUSD direct in je wallet beschikbaar is. Houd rekening met de verwerkingstijd van de onderliggende strategie en de cross-chain bewerkingen, en volg eventuele afrondingsstappen die de app toont. De verwerkingstijd kan variëren; ga niet uit van een vaste opnameperiode.

Heb je hulp nodig bij een lopende inwisseling? Neem dan contact op met [Mezo-ondersteuning](/docs/nl/docs/users/resources/support) en vermeld je walletadres, de transactiehash en het tijdstip van je verzoek.

## Hoe dMUSD verschilt van sMUSD

De Ditto-kluis is een ander product dan de eigen [MUSD Savings Vault](/docs/nl/docs/users/mezo-earn/vaults/musd-savings-vault) van Mezo:

- **dMUSD:** een positie in de kluis die door Ditto wordt beheerd en in eerste instantie is toegewezen aan Spark Savings op Ethereum. Inwisselingen geven via een asynchroon proces MUSD terug op Mezo.
- **sMUSD:** een positie in de eigen spaarkluis van Mezo, die rendement verdient uit de activiteit van het MUSD-protocol.

De ontvangstbewijstokens vertegenwoordigen verschillende kluizen. Bekijk de voorwaarden van elke kluis voordat je stort of inwisselt.

## Risico's

- **Smart-contractrisico:** een bug of exploit in de kluis, de automatiseringscontracten of de onderliggende protocollen kan leiden tot verlies van tegoeden.
- **Cross-chain risico:** swaps en bridgen brengen extra afhankelijkheden met zich mee. Storingen van bridges, netwerkvertragingen of ongunstige uitvoering kunnen invloed hebben op de positie en het inwisselingsproces.
- **Strategie- en stablecoinrisico:** het rendement hangt af van Spark Savings en de activa die de strategie gebruikt. Tarieven kunnen veranderen en stablecoins kunnen hun koppeling verliezen.
- **Operatorrisico:** de verwerking hangt af van voldoende goedkeuringen van operators en een geslaagde uitvoering. Uitval of storingen bij operators kunnen kluisacties vertragen.
- **Opnamerisico:** activa moeten uit de onderliggende toewijzing worden vrijgemaakt en naar Mezo worden teruggebracht. Mogelijk heb je na het aanvragen van een inwisseling niet direct toegang tot je MUSD.

## Links en bronnen

- [Ditto MUSD Savings Vault op Mezo](https://mezo.org/earn/vaults/0x9171Cb787C3fEEbBC808D07CaB62B1d789CE14F8)
- [Documentatie van Ditto Network](https://docs.dittonetwork.io/)
- [Documentatie van Spark Savings](https://docs.spark.finance/products/spark-savings)
- [Mezo-ondersteuning](/docs/nl/docs/users/resources/support)
