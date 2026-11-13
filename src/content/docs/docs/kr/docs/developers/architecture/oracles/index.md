---
title: '개발자 가이드: 오라클 인프라'
description: Mezo 오라클이 애플리케이션에 안전하고 탈중앙화된 데이터 피드를 제공하는 방법을 알아보세요.
topic: developers
---

Mezo는 검증자 노드의 일부로 오라클을 포함하고 있습니다. 서드파티 오라클도 사용할 수 있습니다.

## Skip Connect

Mezo는 주요 오라클 서비스로 [Skip Connect](https://github.com/skip-mev/connect)를 사용합니다. Skip은 블록 합의 과정에서 자산 쌍의 가격을 결정하고 이를 [x/oracle](https://github.com/skip-mev/connect/tree/main/x/oracle) Cosmos 모듈의 온체인 상태에 기록합니다. 이 모듈은 Skip에서 제공하며 Mezo 클라이언트에 통합되어 있습니다.

사이드카는 검증자 노드와 동일한 시스템에서 실행되므로 데이터 검색 및 집계가 동일한 시스템에서 완료되고 gRPC를 통해 검증자 노드에 전달됩니다.

![Skip이 여러 소스에서 시장 데이터를 집계하고 Mezo 검증자가 Skip Connect 및 x/oracle을 실행하여 최신 값으로 온체인 상태를 업데이트하는 프로세스를 보여주는 다이어그램](/docs/images/oracle/mezo-oracle.avif)

Skip이 데이터를 집계하는 방법에 대한 자세한 설명은 [Skip Providers](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go) 문서를 참조하세요.

Skip Connect에는 사이드카에서 설정할 수 있는 여러 [프로바이더](https://github.com/skip-mev/connect/blob/main/providers/README.md)가 포함되어 있습니다. 사용 가능한 프로바이더의 전체 목록은 Skip Connect 문서에서 확인할 수 있습니다:

- [Skip 프로바이더 (API)](https://github.com/skip-mev/connect/blob/main/providers/apis/README.md)
- [Skip 프로바이더 (Websocket)](https://github.com/skip-mev/connect/blob/main/providers/websockets/README.md)
- Skip 프로바이더 및 마켓 맵 참조:
    - [프로바이더](https://github.com/skip-mev/connect/blob/main/cmd/constants/providers.go)
    - [마켓](https://github.com/skip-mev/connect/blob/main/cmd/constants/marketmaps/markets.go)

## Stork

Stork는 데이터 제공자와 온체인 및 오프체인 애플리케이션 간의 초저지연 연결을 가능하게 하는 오라클 프로토콜입니다. Stork의 가장 일반적인 사용 사례는 DeFi를 위한 실시간 가격 피드 형태의 시장 데이터를 가져와 활용하는 것입니다. Stork는 [Mezo 테스트넷에서 사용 가능합니다](https://docs.stork.network/resources/contract-addresses/evm#mezo).

- **[Stork 문서](https://docs.stork.network/)**
- **[Mezo 테스트넷 배포 컨트랙트](https://docs.stork.network/resources/contract-addresses/evm#mezo)**

## Supra

Supra는 빠르고 안전하며 탈중앙화되고 확장 가능한 데이터 솔루션으로 블록체인 생태계 전반의 dApp을 지원하도록 설계된 크로스체인 오라클 네트워크입니다. Supra의 [분산 오라클 합의 (DORA)](https://docs.supra.com/oracles/data-feeds#distributed-oracle-agreement-dora)는 Mezo 테스트넷에서 사용할 수 있습니다. 올바른 pull 컨트랙트 및 스토리지 컨트랙트 주소를 찾으려면 Supra의 [사용 가능한 네트워크](https://docs.supra.com/oracles/data-feeds/pull-oracle/networks) 페이지를 참조하세요.

- **[Supra 문서](https://docs.supra.com/)**

## Pyth

[Pyth Network](https://pyth.network/)는 최대 규모의 퍼스트파티 오라클 네트워크 중 하나로 Mezo를 포함한 여러 체인에 실시간 데이터를 제공합니다. Pyth는 사용자가 필요할 때 온체인으로 가격 업데이트를 가져올 수 있는 혁신적인 저지연 [풀(pull) 오라클 설계](https://docs.pyth.network/documentation/pythnet-price-feeds/on-demand)를 도입했습니다. 이를 통해 온체인 환경의 모든 참여자가 효율적으로 데이터 포인트에 접근할 수 있습니다. Pyth 네트워크는 400ms마다 가격을 업데이트하므로 가장 빠른 온체인 오라클 중 하나로 꼽힙니다.

Pyth 오라클 컨트랙트:
- Mezo 메인넷 (프록시): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)
- Mezo 테스트넷 (프록시): [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

dApp에서 Pyth를 사용하는 방법은 [Pyth 문서](https://docs.pyth.network/home)를 참조하세요.
