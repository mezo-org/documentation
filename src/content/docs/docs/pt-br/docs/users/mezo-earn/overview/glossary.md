---
title: Glossário
description: Glossário de termos do Mezo Earn
topic: users
---

Abaixo está uma lista de termos relacionados ao sistema Mezo Earn.

---

## veBTC

BTC em vote-escrow (bloqueado para votação). Um NFT que representa Bitcoin bloqueado e concede poder de voto básico (multiplicador de 1x) e o direito de ganhar taxas no Mezo Earn. O peso de voto decai linearmente ao longo do período de bloqueio. O bloqueio máximo é de 28 dias.

## veMEZO

MEZO em vote-escrow (bloqueado para votação). Um NFT que representa tokens MEZO bloqueados, capaz de aumentar o poder de voto do veBTC em até 5x e que vota por conta própria em gauges de boost de veBTC e no [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges). Ele não tem peso de governança próprio e não pode votar em gauges de staking sem veBTC. O bloqueio máximo é de 4 anos.

## Boost

O multiplicador aplicado a uma posição de veBTC quando votos de veMEZO são direcionados a ela. Sem boost, o veBTC opera em 1x. Com o boost máximo, o veBTC opera em 5x. O boost depende da sua participação relativa no total de veBTC e no total de veMEZO do sistema.

## Peso com boost

O peso de voto combinado quando veBTC e veMEZO são pareados. É calculado multiplicando o peso do seu veBTC pelo seu multiplicador de boost (entre 1x e 5x). O peso com boost determina sua parte nas taxas e sua influência sobre as emissões.

## Época

Um ciclo de 7 dias que rege a votação e a distribuição de recompensas. As épocas começam toda quinta-feira às 00:00 UTC.

## Gauge

Um contrato inteligente que recebe e distribui recompensas com base nos votos. Quanto mais peso de voto um gauge recebe, maior é a sua parte nas recompensas daquela época.

## Bloqueio

O ato de comprometer BTC ou MEZO por um período definido para receber veBTC ou veMEZO. Bloqueios mais longos concedem um peso de voto inicial maior.

## Gauge de staking

Um gauge vinculado a um token de staking (como tokens de LP ou recibos de poupança em MUSD). Quem faz staking ganha emissões de MEZO; quem vota ganha as taxas de negociação.

## Gauge de boost de veBTC

Um gauge vinculado a um NFT veBTC específico. Os detentores de veMEZO votam nesses gauges para fornecer boost àquela posição de veBTC em troca de incentivos.

## Gauge sem staking

Um gauge sem token de staking, no qual se vota com veMEZO. Suas emissões são encaminhadas a um destino definido pelo próprio gauge, em vez de serem pagas a quem faz staking no Mezo. Votar nele é independente da votação em gauges com veBTC e da correspondência de boost.

## MEZO Gauge

Um gauge sem staking que direciona emissões de MEZO para pools de liquidez de MUSD fora do Mezo: Curve e Uniswap no Ethereum e Aerodrome na Base. Consulte [MEZO Gauges](/docs/pt-br/docs/users/mezo-earn/vote/mezo-gauges).

## Peso de voto

A influência que uma posição tem ao votar em gauges. Para o veBTC, é calculado como o BTC bloqueado multiplicado pela duração restante do bloqueio, dividido pela duração máxima do bloqueio. Para o veMEZO, aplica-se a mesma fórmula, mas com bloqueio máximo de 4 anos.

## Decaimento

A redução gradual do peso de voto à medida que um bloqueio se aproxima da expiração. Pode ser redefinido estendendo o bloqueio.

## Poke

Uma transação que atualiza o peso com boost de uma posição de veBTC. É necessária após alterações nos votos de veMEZO, extensões do bloqueio ou adição de BTC. Sem fazer poke, as alterações no boost não entram em vigor.

## Mercado de correspondência

O mecanismo econômico em que os detentores de veBTC podem atrair votos de veMEZO publicando incentivos em seus gauges de boost, e os detentores de veMEZO podem obter rendimento votando em gauges com incentivos atrativos.

## Incentivos

Recompensas publicadas em gauges para atrair votos. Protocolos ou usuários depositam incentivos (em qualquer token ERC-20) para atrair poder de voto para gauges específicos.

## Rebase

Distribuições antidiluição para os detentores de veMEZO. Quando o índice de bloqueio (oferta de veMEZO / oferta total de MEZO) está baixo, uma parte maior das emissões vai para os rebases, protegendo da diluição quem bloqueou primeiro.

## Splitter

Um contrato que divide as emissões entre dois destinos (por exemplo, validadores vs. ecossistema). Atualmente, as proporções de divisão são fixas e bloqueadas pela governança.

## MUSD

A stablecoin lastreada em bitcoin do Mezo. Os usuários podem tomar MUSD emprestado usando seu BTC como colateral.

## Gauge MUSD Savings Rate

Um gauge de staking para o cofre de poupança em MUSD. Os usuários que depositam MUSD no cofre de poupança podem fazer staking dos seus tokens de recibo para ganhar emissões de MEZO, enquanto quem vota nesse gauge ganha rendimento em MUSD.

## Emissões

Novos tokens MEZO distribuídos a cada época para os gauges de staking, para os validadores e para os detentores de veMEZO (como rebases). As emissões seguem um cronograma de halving: 25% anualizados nos anos 0-2, caindo para ~2% após o ano 8.

## Chain Splitter

O primeiro splitter na hierarquia de emissões. Controla qual porcentagem das emissões vai para os validadores (inicialmente 20%) em comparação com o restante do sistema.

## Ecosystem Splitter

O segundo splitter. Direciona as emissões que não vão para os validadores aos gauges de staking. Atualmente, essa proporção é fixa e bloqueada pela governança.
