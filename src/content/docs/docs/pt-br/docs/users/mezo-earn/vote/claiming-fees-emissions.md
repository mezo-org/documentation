---
title: Perguntas frequentes sobre votação
description: Perguntas frequentes sobre a votação no Mezo
topic: users
---

## Geral

**Preciso votar toda semana?**

Não. Sua alocação de votos permanece válida de uma época para outra até que você a altere ou a redefina, e continua rendendo sua parcela de taxas e incentivos a cada época. Votar de novo serve para mudar a alocação, não para mantê-la.

**Posso mudar meus votos durante uma época?**

Cada bloqueio pode votar uma vez por época. Se o bloqueio ainda não votou nesta época, você pode enviar uma nova divisão a qualquer momento da janela de votação, e ela substitui sua alocação vigente. Depois que um voto é confirmado, a alocação desse bloqueio fica fixada até a próxima virada de época (quinta-feira às 00:00 UTC).

**Posso dividir meus votos entre vários gauges?**

Com certeza. Você pode alocar seu poder de voto como quiser: 50% em BTC/MUSD, 30% em MUSD Savings Rate e 20% em outro pool.

**Qual é a diferença entre votar com veBTC e com veMEZO?**

Os detentores de veBTC votam em gauges de staking. Eles ganham taxas de negociação, incentivos e taxas de ponte passivas.

Os detentores de veMEZO votam em gauges de boost de veBTC. Eles ganham os incentivos publicados por detentores de veBTC que buscam boost, além das distribuições de rebase.

---

## Boost e veMEZO

**O que é boost?**

O boost é um multiplicador (entre 1x e 5x) que amplia o poder de voto do seu veBTC. Ele é fornecido pelos votos de veMEZO direcionados ao gauge de boost da sua posição de veBTC.

**Preciso de veMEZO para ganhar como detentor de veBTC?**

Não. Um veBTC sem boost continua ganhando taxas de negociação, incentivos e taxas de ponte passivas, só que com multiplicador de 1x. O veMEZO aumenta seu poder de voto efetivo (até 5x), mas não é obrigatório.

**Como consigo boost para minha posição de veBTC?**

De duas formas:
1. **Autoboost:** bloqueie MEZO em veMEZO e direcione-o para sua própria posição
2. **Atrair boost:** publique incentivos no seu gauge de boost para atrair votos de veMEZO de outras pessoas

**O que os detentores de veMEZO ganham?**

Os detentores de veMEZO ganham:
- Os incentivos publicados nos gauges de boost em que votam
- Distribuições de rebase que protegem contra a diluição

Eles **não** ganham taxas de negociação, receita de MUSD nem taxas de ponte; essas vão para os detentores de veBTC.

**Como o boost máximo é calculado?**

Você atinge o boost de 5x quando sua participação no total de veMEZO é igual ou maior que sua participação no total de veBTC. Posições de BTC maiores exigem proporcionalmente mais veMEZO para chegar ao máximo.

**O que acontece se eu tiver veMEZO, mas não tiver veBTC?**

Você ainda pode obter rendimento votando nos gauges de boost de outros usuários. Você ganha os incentivos que eles publicaram, proporcionalmente à sua participação nos votos desse gauge.

---

## Incentivos

**Como funcionam os incentivos?**

Protocolos ou usuários depositam incentivos em gauges específicos para atrair votos. No fim da época, os incentivos são distribuídos proporcionalmente entre todos os votantes daquele gauge, com base no peso de voto. Os incentivos se somam às taxas de negociação.

**Posso publicar incentivos no meu próprio gauge de boost?**

Sim. É assim que você atrai votos de veMEZO para sua posição de veBTC se quiser boost, mas não tiver MEZO.

**Quais tokens podem ser usados como incentivos?**

Qualquer token ERC-20 pode ser depositado como incentivo.

---

## Poder de voto

**Meu poder de voto diminui com o tempo?**

Sim. O poder de voto decai linearmente à medida que o bloqueio se aproxima da expiração. Se você bloqueou por 28 dias, no 14º dia terá cerca de 50% do seu poder de voto inicial. Estender o bloqueio restaura o peso total.

**E se eu tiver várias posições de veBTC?**

Você pode votar com cada posição separadamente. Cada NFT tem seu próprio poder de voto e pode ser alocado em gauges diferentes ou nos mesmos; a escolha é sua.

**O que acontece se eu não estender meu bloqueio?**

Seu poder de voto continua decaindo até chegar a zero na expiração. A partir daí, você não pode mais votar nem ganhar recompensas. Você precisa estender o bloqueio antes que ele expire ou criar um novo.

**Por quanto tempo posso bloquear veMEZO?**

O bloqueio máximo de veMEZO é de 4 anos (contra 28 dias no veBTC). O bloqueio mais longo reflete o papel do MEZO como ativo de coordenação da rede.

---

## Poke

**O que é poke?**

Poke é uma transação que atualiza o poder de voto da sua posição para refletir o estado atual dela. Sem fazer poke, as alterações no seu boost não entram em vigor.

**Quando preciso fazer poke?**

Faça poke depois de:
- Receber novos votos de veMEZO no seu gauge de boost
- Direcionar seu próprio veMEZO para sua posição
- Reivindicar distribuições de rebase do veMEZO
- Estender a duração do seu bloqueio
- Adicionar mais BTC/MEZO ao seu bloqueio

**Qualquer pessoa pode fazer poke na minha posição?**

Sim. O poke não exige permissão. Outras pessoas podem fazer poke na sua posição se o seu poder de voto tiver decaído significativamente.

---

## Recompensas

**Quando posso reivindicar minhas recompensas?**

As taxas e os incentivos ficam disponíveis para reivindicação quando a época termina. Durante a época, você vê suas recompensas estimadas se acumulando, mas só pode reivindicá-las quando a época for concluída.

**Ganho recompensas em pools nos quais não votei?**

Não. Você só ganha taxas e incentivos dos gauges específicos em que alocou poder de voto. Se votou 100% em BTC/MUSD, você não ganha nenhuma recompensa do pool MUSD/USDC.

Exceção: as taxas de ponte passivas são distribuídas a todos os detentores de veBTC proporcionalmente ao peso com boost de cada um, independentemente da votação.

**O que são rebases e como faço para reivindicá-los?**

Rebases são distribuições antidiluição para detentores de veMEZO. Uma parte das emissões semanais vai para os rebases quando a proporção de bloqueio está baixa. Reivindique-os separadamente; eles aumentam o peso da sua posição de veMEZO.

---

## Gauges

**Como os pesos dos gauges são calculados?**

Peso do gauge = poder de voto total alocado nesse gauge / poder de voto total alocado em todos os gauges. Se o gauge BTC/MUSD recebe 1.000 de poder de voto e todos os gauges juntos recebem 10.000, o BTC/MUSD fica com 10% das emissões daquela época.

**Um gauge pode receber zero emissões?**

Sim. Se ninguém votar em um gauge, ele não recebe nenhuma emissão naquela época. É por isso que existem mercados de incentivos: os protocolos precisam de votos para atrair emissões.

**O que são gauges de boost?**

Cada NFT de veBTC tem seu próprio gauge de boost. Os detentores de veMEZO votam nesses gauges para dar boost àquela posição de veBTC específica. O detentor do veBTC pode publicar incentivos no seu gauge de boost para atrair votos.

**Onde posso ver os pesos atuais dos gauges e os incentivos?**

Acesse a [página Vote](https://mezo.org/vote) para ver em tempo real os pesos dos gauges, os valores dos incentivos, os APYs projetados e o desempenho histórico.
