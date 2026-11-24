---
title: Descripción general de los nodos de Mezo
description: >-
  Descubre cómo funcionan los nodos de Mezo y cómo dan soporte a la red para las
  finanzas basadas en Bitcoin.
topic: developers
---

Los nodos de Mezo son componentes esenciales de la red y son completamente de código abierto. El [Mezo Validator Kit](./validator-kit) configura el [cliente mezod](https://github.com/mezo-org/mezod) y los demás requisitos para ejecutar un nodo como validador, como nodo RPC o como nodo semilla. El kit simplifica varias opciones de despliegue, como Docker, un daemon nativo y Helm para Kubernetes.

- Consulta [mezod](https://github.com/mezo-org/mezod) en GitHub.
- Usa el [Validator Kit](./validator-kit) para ejecutar tu propio nodo semilla local.

## Requisitos de hardware

Los requisitos de hardware son distintos para cada tipo de nodo. Consulta la sección de [requisitos de hardware](./validator-kit#requisitos-de-hardware) para ver los requisitos mínimos de cada tipo de nodo.

## Validadores

Los validadores de Mezo se encargan de ejecutar nodos que verifican transacciones, proponen y atestiguan nuevos bloques y participan en el mecanismo de consenso. Los validadores de Mezo deben solicitar la [Proof of Authority (PoA)](./validator-kit#configuración-del-validador) antes de que sus nodos puedan participar como validadores.

Los validadores aprobados pueden seguir las instrucciones del [Validator Kit](./validator-kit) para aprender a ejecutar un nodo validador.

## Nodos RPC

Los nodos RPC se pueden usar para crear un endpoint local para desarrollo o como parte de una plataforma de infraestructura blockchain como servicio (IaaS). El proceso para configurar un nodo semilla es el mismo que para un nodo validador, pero no necesitas solicitar la Proof of Authority (PoA).

Para ejecutar un nodo RPC, sigue las instrucciones de la guía de configuración del [Validator Kit](./validator-kit), pero aplica los pasos de configuración adicionales que se describen en la sección de configuración del [nodo RPC](./validator-kit#configuración-del-nodo-rpc).

## Nodos semilla

Los nodos semilla ayudan a descubrir pares (peers) en la red. El proceso para configurar un nodo semilla es el mismo que para un nodo validador, pero no necesitas solicitar la Proof of Authority (PoA).

Para ejecutar un nodo semilla, sigue las instrucciones de la guía de configuración del [Validator Kit](./validator-kit), pero omite la solicitud de PoA y establece el parámetro `p2p.seed_mode` en `true` en el archivo config.toml del nodo. Consulta la sección [Nodos semilla de la red](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) para obtener más detalles.
