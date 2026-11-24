---
title: Visão geral dos nós do Mezo
description: >-
  Saiba como os nós do Mezo funcionam e dão suporte às funcionalidades da rede
  para finanças baseadas em Bitcoin.
topic: developers
---

Os nós do Mezo são componentes essenciais da rede e são totalmente open source. O [Mezo Validator Kit](./validator-kit) configura o [cliente mezod](https://github.com/mezo-org/mezod) e os demais requisitos para executar um nó como validador, nó RPC ou nó seed. O kit simplifica várias opções de implantação, como Docker, daemon nativo e Helm para Kubernetes.

- Veja o [mezod](https://github.com/mezo-org/mezod) no GitHub.
- Use o [Validator Kit](./validator-kit) para executar seu próprio nó seed local.

## Requisitos de hardware

Os requisitos de hardware variam conforme o tipo de nó. Consulte a seção [Requisitos de hardware](./validator-kit#requisitos-de-hardware) para conhecer os requisitos mínimos de cada tipo de nó.

## Validadores

Os validadores do Mezo são responsáveis por executar nós que verificam transações, propõem e atestam novos blocos e participam do mecanismo de consenso. Os validadores do Mezo precisam se candidatar à [Prova de Autoridade (PoA)](./validator-kit#configuração-do-validador) antes que seus nós possam participar como validadores.

Os validadores aprovados podem seguir as instruções do [Validator Kit](./validator-kit) para aprender a executar um nó validador.

## Nós RPC

Os nós RPC podem ser usados para criar um endpoint local para desenvolvimento ou como parte de uma plataforma de infraestrutura de blockchain como serviço (IaaS). O processo de configuração de um nó seed é o mesmo de um nó validador, mas não é necessário solicitar a Prova de Autoridade (PoA).

Para executar um nó RPC, siga as instruções do guia de configuração do [Validator Kit](./validator-kit), mas aplique as etapas de configuração adicionais definidas na seção de configuração do [nó RPC](./validator-kit#configuração-do-nó-rpc).

## Nós seed

Os nós seed ajudam na descoberta de pares (peers) da rede. O processo de configuração de um nó seed é o mesmo de um nó validador, mas não é necessário solicitar a Prova de Autoridade (PoA).

Para executar um nó seed, siga as instruções do guia de configuração do [Validator Kit](./validator-kit), mas pule a candidatura à PoA e defina o parâmetro `p2p.seed_mode` no arquivo config.toml do nó como `true`. Consulte a seção [Network seed nodes](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) para mais detalhes.
