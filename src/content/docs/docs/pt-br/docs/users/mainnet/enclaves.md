---
title: Enclaves
description: Como funcionam os depósitos institucionais de BTC no Mezo por meio de enclaves
topic: users
---

Os Mezo Enclaves são uma via de depósito institucional que permite a instituições com requisitos regulatórios de custódia aplicar BTC no Mezo sem usar a ponte padrão.

## Como os Enclaves funcionam

Instituições sujeitas a regulamentações de custódia podem não conseguir depositar BTC pela ponte padrão do Mezo. Os Enclaves resolvem isso ao permitir que o BTC seja representado no Mezo enquanto o Bitcoin subjacente permanece em arranjos de custódia que atendem aos requisitos regulatórios.

Pontos principais:

- Cada enclave é incluído individualmente na lista de permissões pelo multisig de governança do Mezo
- Os depósitos em enclaves são respaldados por acordos jurídicos associados que definem os valores transferidos pela ponte e as limitações de uso
- Todos os depósitos em enclaves continuam respaldados por UTXOs reais de Bitcoin na cadeia do Bitcoin

## Como verificar o lastro em BTC dos Enclaves

Cada depósito em enclave é respaldado por UTXOs na blockchain do Bitcoin. Esses UTXOs são registrados na transação de depósito da ponte tripartite e mantidos no estado onchain, o que torna o lastro em BTC subjacente transparente e verificável.

Os desenvolvedores podem consultar os dados de UTXO dos enclaves usando a função `getTripartyUtxos` para verificar o Bitcoin que respalda qualquer posição em enclave. Consulte a [documentação de ponte para desenvolvedores](/docs/pt-br/docs/developers/bridge/mezo-bridge) para ver os detalhes técnicos.
