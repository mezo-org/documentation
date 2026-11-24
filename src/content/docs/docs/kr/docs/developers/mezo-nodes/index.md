---
title: Mezo 노드 개요
description: Mezo 노드가 어떻게 작동하며 비트코인 기반 금융을 위한 네트워크 기능을 어떻게 지원하는지 알아보세요.
topic: developers
---

Mezo 노드는 네트워크의 필수 구성 요소이며 완전한 오픈 소스입니다. [Mezo Validator Kit](./validator-kit)는 [mezod 클라이언트](https://github.com/mezo-org/mezod)와 노드를 검증자, RPC 노드 또는 시드 노드로 실행하는 데 필요한 기타 요소를 설정합니다. 이 키트를 사용하면 Docker, 네이티브 데몬, Kubernetes용 Helm 등 여러 배포 옵션을 간편하게 사용할 수 있습니다.

- GitHub에서 [mezod](https://github.com/mezo-org/mezod)를 확인하세요.
- [Validator Kit](./validator-kit)를 사용해 자체 로컬 시드 노드를 실행하세요.

## 하드웨어 요구 사항

하드웨어 요구 사항은 노드 유형마다 다릅니다. 노드 유형별 최소 요구 사항은 [하드웨어 요구 사항](./validator-kit#하드웨어-요구-사항) 섹션을 참조하세요.

## 검증자

Mezo 검증자는 트랜잭션을 검증하고, 새 블록을 제안 및 증명하며, 합의 메커니즘에 참여하는 노드를 운영할 책임이 있습니다. Mezo 검증자는 노드가 검증자로 참여하기 전에 [권한 증명(PoA)](./validator-kit#검증자-설정)을 신청해야 합니다.

승인된 검증자는 [Validator Kit](./validator-kit)의 안내에 따라 검증자 노드를 실행하는 방법을 알아볼 수 있습니다.

## RPC 노드

RPC 노드는 개발용 로컬 엔드포인트를 만들거나 블록체인 서비스형 인프라(IaaS) 플랫폼의 일부로 사용할 수 있습니다. 시드 노드를 설정하는 과정은 검증자 노드와 동일하지만, 권한 증명(PoA)을 요청할 필요는 없습니다.

RPC 노드를 실행하려면 [Validator Kit](./validator-kit) 설정 가이드의 안내를 따르되, [RPC 노드](./validator-kit#rpc-노드-설정) 설정 섹션에 정의된 추가 구성 단계를 적용하세요.

## 시드 노드

시드 노드는 네트워크 피어 탐색을 돕습니다. 시드 노드를 설정하는 과정은 검증자 노드와 동일하지만, 권한 증명(PoA)을 요청할 필요는 없습니다.

시드 노드를 실행하려면 [Validator Kit](./validator-kit) 설정 가이드의 안내를 따르되, PoA 신청은 건너뛰고 노드의 config.toml 파일에서 `p2p.seed_mode` 매개변수를 `true`로 설정하세요. 자세한 내용은 [네트워크 시드 노드](https://github.com/mezo-org/validator-kit?tab=readme-ov-file#network-seed-nodes) 섹션을 참조하세요.
