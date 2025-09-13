---
title: Contracts and Token Addresses
description: Detailed reference for Mezo’s smart contracts and their role in the ecosystem.
topic: users
---

## Token Contracts

You can add these tokens to your wallet in the Mezo Explorer. Open the token address in the explorer and click the **Add token to MetaMask** button next to the MUSD token address.

Some of the token contracts are `TransparentUpgradableProxy` contracts. Add the proxy address to your browser wallet manually rather than the token address behind the proxy. For example, in MetaMask, follow the instructions to [Import a Token](https://support.metamask.io/manage-crypto/portfolio/how-to-import-a-token-in-metamask-portfolio/). These tokens are not visible on your EOA in the [Mezo Explorer](https://explorer.mezo.org/) until you complete your first transfer and approval on the given token. 

### Bridged tokens

| Token Name | Name on Ethereum | Mezo Addresss | Ethereum Address |
| ---------- | ---------------- | ------------- | ---------------- |
| mcbBTC | cbBTC | [0x6a7CD8E1384d49f502b4A4CE9aC9eb320835c5d7](https://explorer.mezo.org/token/0x6a7CD8E1384d49f502b4A4CE9aC9eb320835c5d7) | [0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf](https://etherscan.io/address/0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf) |
| mDAI | DAI | [0x1531b6e3d51BF80f634957dF81A990B92dA4b154](https://explorer.mezo.org/address/0x1531b6e3d51BF80f634957dF81A990B92dA4b154) | [0x6B175474E89094C44Da98b954EedeAC495271d0F](https://etherscan.io/address/0x6B175474E89094C44Da98b954EedeAC495271d0F) |
| mFBTC | FBTC | [0x812fcC0Bb8C207Fd8D6165a7a1173037F43B2dB8](https://explorer.mezo.org/address/0x812fcC0Bb8C207Fd8D6165a7a1173037F43B2dB8) | [0xC96dE26018A54D51c097160568752c4E3BD6C364](https://etherscan.io/address/0xC96dE26018A54D51c097160568752c4E3BD6C364) |
| mSolvBTC | SolvBTC | [0xa10aD2570ea7b93d19fDae6Bd7189fF4929Bc747](https://explorer.mezo.org/address/0xa10aD2570ea7b93d19fDae6Bd7189fF4929Bc747) | [0x7A56E1C57C7475CCf742a1832B028F0456652F97](https://etherscan.io/address/0x7A56E1C57C7475CCf742a1832B028F0456652F97) |
| mswBTC | swBTC | [0x29fA8F46CBB9562b87773c8f50a7F9F27178261c](https://explorer.mezo.org/address/0x29fA8F46CBB9562b87773c8f50a7F9F27178261c) | [0x8DB2350D78aBc13f5673A411D4700BCF87864dDE](https://etherscan.io/address/0x8DB2350D78aBc13f5673A411D4700BCF87864dDE) |
| mT | T | [0xaaC423eDC4E3ee9ef81517e8093d52737165b71F](https://explorer.mezo.org/address/0xaaC423eDC4E3ee9ef81517e8093d52737165b71F) | [0xCdF7028ceAB81fA0C6971208e83fa7872994beE5](https://etherscan.io/address/0xCdF7028ceAB81fA0C6971208e83fa7872994beE5) |
| mUSDC | USDC | [0x04671C72Aab5AC02A03c1098314b1BB6B560c197](https://explorer.mezo.org/token/0x04671C72Aab5AC02A03c1098314b1BB6B560c197) | [0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48](https://etherscan.io/address/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48) |
| mUSDe | USDe | [0xdf6542260a9F768f07030E4895083F804241F4C4](https://explorer.mezo.org/address/0xdf6542260a9F768f07030E4895083F804241F4C4) | [0x4c9EDD5852cd905f086C759E8383e09bff1E68B3](https://etherscan.io/address/0x4c9EDD5852cd905f086C759E8383e09bff1E68B3) |
| mUSDT | USDT | [0xeB5a5d39dE4Ea42C2Aa6A57EcA2894376683bB8E](https://explorer.mezo.org/token/0xeB5a5d39dE4Ea42C2Aa6A57EcA2894376683bB8E) | [0xdAC17F958D2ee523a2206206994597C13D831ec7](https://etherscan.io/address/0xdAC17F958D2ee523a2206206994597C13D831ec7) |
| mxSolvBTC | xSolvBTC | [0xdF708431162Ba247dDaE362D2c919e0fbAfcf9DE](https://explorer.mezo.org/address/0xdF708431162Ba247dDaE362D2c919e0fbAfcf9DE) | [0xd9D920AA40f578ab794426F5C90F6C731D159DEf](https://etherscan.io/address/0xd9D920AA40f578ab794426F5C90F6C731D159DEf) |
| BTC | tBTC | [0x7b7C000000000000000000000000000000000000](https://explorer.mezo.org/address/0x7b7C000000000000000000000000000000000000) | [0x18084fbA666a33d37592fA2633fD49a74DD93a88](https://etherscan.io/address/0x18084fbA666a33d37592fA2633fD49a74DD93a88) |

### MUSD tokens

- Mainnet MUSD: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://explorer.mezo.org/token/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)
- Testnet MUSD: [0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503](https://explorer.test.mezo.org/token/0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503)

### MUSD bridge

The MUSD bridge is powered by Wormhole's Native Token Transfer (NTT) protocol, which enables secure cross-chain transfers while maintaining token fungibility. NTT allows tokens to be locked on the source chain and minted on the destination chain, or burned and unlocked when bridging back. Use the [Portal UI](https://portalbridge.com/) to bridge tokens.

For more information about NTT, see the [official Wormhole documentation](https://wormhole.com/docs/products/native-token-transfers/overview/).

**Mezo:**
- Ntt manager: [0x7efb386675d75280D39Aae42964A6776DE0ee0bD](https://explorer.mezo.org/address/0x7efb386675d75280D39Aae42964A6776DE0ee0bD)
- Wormhole Transceiver: [0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71](https://explorer.mezo.org/address/0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71)

**Ethereum:**
- Ntt manager: [0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E](https://etherscan.io/address/0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E)
- Wormhole Transceiver: [0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E](https://etherscan.io/address/0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E)

## Pool Contracts

| Name | Address |
|----- | ------- |
| PoolFactory | [0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248](https://explorer.mezo.org/address/0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248) |
| MUSD/BTC Pool | [0x52e604c44417233b6CcEDDDc0d640A405Caacefb](https://explorer.mezo.org/address/0x52e604c44417233b6CcEDDDc0d640A405Caacefb) |
| MUSD/mUSDC Pool | [0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356](https://explorer.mezo.org/address/0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356) |
| MUSD/mUSDT Pool | [0x10906a9E9215939561597b4C8e4b98F93c02031A](https://explorer.mezo.org/address/0x10906a9E9215939561597b4C8e4b98F93c02031A) |

## Pre-Mainnet contracts

These contracts were used for deposits before the Mezo Mainnet launch when assets were bridged to the new network.

* **Mezo App deposit contract:** [**0x2dFdEb833c199ba5D166C90A3B25B0E72288076B**](https://etherscan.io/address/0x2dfdeb833c199ba5d166c90a3b25b0e72288076b)
* **Mezo App proxy contract:** [**0xAB13B8eecf5AA2460841d75da5d5D861fD5B8A39**](https://etherscan.io/address/0xab13b8eecf5aa2460841d75da5d5d861fd5b8a39)
* **Multisig:** [**0x98D8899c3030741925BE630C710A98B57F397C7a**](https://etherscan.io/address/0x98D8899c3030741925BE630C710A98B57F397C7a)
* **Timelock contract:** [**0x82f08041f1Bc1aa399320743F33f75CcA482b25a**](https://etherscan.io/address/0x82f08041f1Bc1aa399320743F33f75CcA482b25a)
* **Portal Proxy Admin contract:** [**0x260cA2abeF5d38181E2562F00FA92AD1DC681734**](https://etherscan.io/address/0x260ca2abef5d38181e2562f00fa92ad1dc681734)

## Portal Contract Addresses

The Mezo Portal is the original deposit contract for Mezo on Ethereum. The official mainnet and testnet contract addresses are listed below.

### Mainnet

| Contract                        | Address                                      |
| ------------------------------- | -------------------------------------------- |
| tBTC                            | `0x18084fbA666a33d37592fA2633fD49a74DD93a88` |
| Bridge (tBTC)                   | `0x5e4861a80B55f035D899f66772117F00FA0E8e7B` |
| TBTCVault (tBTC)                | `0x9C070027cdC9dc8F82416B2e5314E11DFb4FE3CD` |
| WBTC                            | `0x2260fac5e5542a773aa44fbcfedf7c193bc2c599` |
| Portal Proxy                    | `0xAB13B8eecf5AA2460841d75da5d5D861fD5B8A39` |
| Portal Implementation           | `0xD7097AF27b14e204564C057c636022fae346fE60` |
| Portal ProxyAdmin               | `0x260cA2abeF5d38181E2562F00FA92AD1DC681734` |
| BitcoinDepositor Proxy          | `0x1D50D75933b7b7C8AD94dbfb748B5756E3889C24` |
| BitcoinDepositor Implementation | `0x04B94f55780682478c8D8329368AAAfD320F4D32` |
| BitcoinDepositor ProxyAdmin     | `0x66cE24B68D9fEb092Bc8E6C47C0FA318e48F1267` |
| MezoBridge Proxy                | `0xF6680EA3b480cA2b72D96ea13cCAF2cFd8e6908c` |
| MezoBridge Implementation       | `0x3D282Cc0d69e27fBd4aa59DfD08D6a72B45Ce889` |
| MezoBridge ProxyAdmin           | `0xef619B73F424506b8aDa0E05C2935aB36ec096A2` |

### Sepolia

| Contract                        | Address                                      |
| ------------------------------- | -------------------------------------------- |
| tBTC                            | `0x517f2982701695D4E52f1ECFBEf3ba31Df470161` |
| Bridge (tBTC)                   | `0x9b1a7fE5a16A15F2f9475C5B231750598b113403` |
| TBTCVault (tBTC)                | `0xB5679dE944A79732A75CE556191DF11F489448d5` |
| WBTC (mock)                     | `0xdc5558c2873C6375d5a90551c9D0F853794D357D` |
| Portal Proxy                    | `0x6978E3e11b8Bc34ea836C1706fC742aC4Cb6b0Db` |
| Portal Implementation           | `0x5581c79ac00164D04De090eB72A9B0B08f89643d` |
| Portal ProxyAdmin               | `0x9Aa2e895ABb717822fb72FEeb64010dB6739D720` |
| BitcoinDepositor Proxy          | `0x7205535961649C4F94e1b4BAfBe26d23e2bbDd84` |
| BitcoinDepositor Implementation | `0x6617C61355cA32141950B8F6610C40C613CA7F38` |
| BitcoinDepositor ProxyAdmin     | `0x93c4E8eB2813FD3C13254C31B43a30a9ca9693eC` |
| MezoBridge Proxy                | `0x3a3BaE133739f92a885070DbF3300d61B232497C` |
| MezoBridge Implementation       | `0x2de0566A26B74DcD501Ff5c3b213Bf5a01aC3aC1` |
| MezoBridge ProxyAdmin           | `0xAB940Ce533883a521F467B872a8eD699311c7d86` |
