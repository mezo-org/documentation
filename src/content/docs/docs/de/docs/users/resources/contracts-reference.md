---
title: Contracts und Token-Adressen
description: >-
  Ausführliche Referenz zu den Smart Contracts von Mezo und ihrer Rolle im
  Ökosystem.
topic: users
---

## Token-Contracts

Sie können diese Token im Mezo Explorer zu Ihrer Wallet hinzufügen. Öffnen Sie die Token-Adresse im Explorer und klicken Sie neben der Adresse des MUSD-Tokens auf die Schaltfläche **Add token to MetaMask**.

Einige der Token-Contracts sind `TransparentUpgradableProxy`-Contracts. Fügen Sie in diesem Fall manuell die Proxy-Adresse zu Ihrer Browser-Wallet hinzu und nicht die Token-Adresse hinter dem Proxy. Folgen Sie zum Beispiel in MetaMask der Anleitung [Import a Token](https://support.metamask.io/manage-crypto/portfolio/how-to-import-a-token-in-metamask-portfolio/). Diese Token sind für Ihren EOA im [Mezo Explorer](https://explorer.mezo.org/) erst sichtbar, nachdem Sie Ihren ersten Transfer und Ihre erste Freigabe für den jeweiligen Token ausgeführt haben.

### Gebridgte Token

| Token-Name | Name auf Ethereum | Mezo-Adresse | Ethereum-Adresse |
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
| sUSDat (Staked USDat) | sUSDat | [0xde402D7021f3F7F00be5D0Ab5C238B2bE1d2904F](https://explorer.mezo.org/address/0xde402D7021f3F7F00be5D0Ab5C238B2bE1d2904F) | [0xD166337499E176bbC38a1FBd113Ab144e5bd2Df7](https://etherscan.io/address/0xD166337499E176bbC38a1FBd113Ab144e5bd2Df7) |
| aMUSD | aMUSD | Noch nicht auf Mezo verfügbar* | [0x52317a47585A6ACDfbD7a29B494c3E2baAE96aBc](https://etherscan.io/address/0x52317a47585A6ACDfbD7a29B494c3E2baAE96aBc) |

:::note
aMUSD ist der Beleg-Token (Receipt Token), den Nutzer für Einzahlungen in den Morpho Alpha MUSD Core Vault erhalten. Er ist derzeit nur auf Ethereum verfügbar.
:::



### MUSD-Token und Bridge

Die MUSD Bridge basiert auf dem Native-Token-Transfer-Protokoll (NTT) von Wormhole, das sichere Cross-Chain-Transfers ermöglicht und dabei die Fungibilität des Tokens erhält. Mit NTT können Token auf der Quell-Chain gesperrt und auf der Ziel-Chain gemintet werden – oder beim Zurückbridgen verbrannt und wieder freigegeben werden. Verwenden Sie die [Portal-Oberfläche](https://portalbridge.com/), um Token zu bridgen.

Weitere Informationen zu NTT finden Sie in der [offiziellen Wormhole-Dokumentation](https://wormhole.com/docs/products/native-token-transfers/overview/).

#### Mezo
- Mainnet MUSD: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://explorer.mezo.org/token/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)
- Testnet MUSD: [0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503](https://explorer.test.mezo.org/token/0x118917a40FAF1CD7a13dB0Ef56C86De7973Ac503)
- NTT Manager: [0x7efb386675d75280D39Aae42964A6776DE0ee0bD](https://explorer.mezo.org/address/0x7efb386675d75280D39Aae42964A6776DE0ee0bD)
- Wormhole Transceiver: [0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71](https://explorer.mezo.org/address/0x56E27f1A8425515FFD4BD76A254Ac1a5c0B66D71)

#### Ethereum
- Mainnet MUSD: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://etherscan.io/token/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)
- NTT Manager: [0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E](https://etherscan.io/address/0x5293158bf7a81ED05418DA497a80F7e6Dbf4477E)
- Wormhole Transceiver: [0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E](https://etherscan.io/address/0x76ddB3f1dDe02391Ef0A28664499B74C29d18d3E)

#### Base
- Mainnet MUSD: [0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186](https://basescan.org/token/0xdD468A1DDc392dcdbEf6db6e34E89AA338F9F186)
- NTT Manager: [0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1](https://basescan.org/address/0x3EB418BdBE95b4b9cf465ecfBD8424685ACD1Bc1)
- Wormhole Transceiver: [0x15C465E7dF34f8cA06FDCae0569206cEDf3f4467](https://basescan.org/address/0x15C465E7dF34f8cA06FDCae0569206cEDf3f4467)


### MEZO-Token und Bridge

Die MEZO Bridge basiert auf dem Native-Token-Transfer-Protokoll (NTT) von Wormhole, das sichere Cross-Chain-Transfers ermöglicht und dabei die Fungibilität des Tokens erhält. Verwenden Sie die [Portal-Oberfläche](https://portalbridge.com/) oder die [Mezo dApp](https://mezo.org), um Token zu bridgen.

Weitere Informationen zu NTT finden Sie in der [offiziellen Wormhole-Dokumentation](https://wormhole.com/docs/products/native-token-transfers/overview/).

#### Mezo
- MEZO Token: [0x7B7c000000000000000000000000000000000001](https://explorer.mezo.org/token/0x7B7c000000000000000000000000000000000001)
- NTT Manager: [0x5E668D912F69db0762CD0fE00647dA9fa6b29591](https://explorer.mezo.org/address/0x5E668D912F69db0762CD0fE00647dA9fa6b29591)
- Wormhole Transceiver: [0x528edf2dBbC6Ae6978c88E54B260AB86B682D18c](https://explorer.mezo.org/address/0x528edf2dBbC6Ae6978c88E54B260AB86B682D18c)

#### Ethereum
- MEZO Token: [0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b](https://etherscan.io/address/0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b)
- NTT Manager: [0x13916D0daB357DCBAa1600b594d62C641840686A](https://etherscan.io/address/0x13916D0daB357DCBAa1600b594d62C641840686A)
- Wormhole Transceiver: [0x920871aF2D4106E76d204fEA7122fA129C9283b1](https://etherscan.io/address/0x920871aF2D4106E76d204fEA7122fA129C9283b1)

#### Base
- MEZO Token: [0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b](https://basescan.org/address/0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b)
- NTT Manager: [0x0c46f496C410465975a427e34a976fc15a2edE4f](https://basescan.org/address/0x0c46f496C410465975a427e34a976fc15a2edE4f)
- Wormhole Transceiver: [0x27321f84704a599aB740281E285cc4463d89A3D5](https://basescan.org/address/0x27321f84704a599aB740281E285cc4463d89A3D5)

#### BSC
- MEZO Token: [0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b](https://bscscan.com/address/0x8e4cbBcc33dB6c0a18561fDE1F6bA35906d4848b)
- NTT Manager: [0x09959798B95d00a3183d20FaC298E4594E599eab](https://bscscan.com/address/0x09959798B95d00a3183d20FaC298E4594E599eab)
- Wormhole Transceiver: [0xa10aD2570ea7b93d19fDae6Bd7189fF4929Bc747](https://bscscan.com/address/0xa10aD2570ea7b93d19fDae6Bd7189fF4929Bc747)

#### Solana
- MEZO Token: [8niMFW4yuv3vLoqTtBaC6rchyasmUhgvpgSyPEeeCrw6](https://solscan.io/address/8niMFW4yuv3vLoqTtBaC6rchyasmUhgvpgSyPEeeCrw6)
- NTT Manager: [Ntt4AnEASZ9oLw25PTmXFrwSFD473ufd3rCLWoX5Gg7](https://solscan.io/address/Ntt4AnEASZ9oLw25PTmXFrwSFD473ufd3rCLWoX5Gg7)
- Wormhole Transceiver: [6aVRLvdjgrovCiZa5q5kifUtvD6p2ogaQ2J248MpfCa3](https://solscan.io/address/6aVRLvdjgrovCiZa5q5kifUtvD6p2ogaQ2J248MpfCa3)

### Ihren Kredit mit MUSD Monitor im Blick behalten
Für eine erweiterte Überwachung können Sie [mezotools.cc](https://mezotools.cc) verwenden.

Mit diesem Tool können Sie:
- den Zustand Ihres Troves und Ihre Besicherungsquoten in Echtzeit prüfen.
- aktuelle systemweite Einlösungen und Liquidationen einsehen.
- die Kurse von BTC und MUSD direkt über die Onchain-Orakel von Mezo verfolgen.


## Pool-Contracts

| Name | Adresse |
|----- | ------- |
| PoolFactory | [0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248](https://explorer.mezo.org/address/0x83FE469C636C4081b87bA5b3Ae9991c6Ed104248) |
| MUSD/BTC Pool | [0x52e604c44417233b6CcEDDDc0d640A405Caacefb](https://explorer.mezo.org/address/0x52e604c44417233b6CcEDDDc0d640A405Caacefb) |
| MUSD/mUSDC Pool | [0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356](https://explorer.mezo.org/address/0xEd812AEc0Fecc8fD882Ac3eccC43f3aA80A6c356) |
| MUSD/mUSDT Pool | [0x10906a9E9215939561597b4C8e4b98F93c02031A](https://explorer.mezo.org/address/0x10906a9E9215939561597b4C8e4b98F93c02031A) |

## Contracts vor dem Mainnet-Start

Diese Contracts wurden vor dem Start des Mezo Mainnet für Einzahlungen verwendet, als Vermögenswerte in das neue Netzwerk gebridgt wurden.

* **Einzahlungs-Contract der Mezo App:** [**0x2dFdEb833c199ba5D166C90A3B25B0E72288076B**](https://etherscan.io/address/0x2dfdeb833c199ba5d166c90a3b25b0e72288076b)
* **Proxy-Contract der Mezo App:** [**0xAB13B8eecf5AA2460841d75da5d5D861fD5B8A39**](https://etherscan.io/address/0xab13b8eecf5aa2460841d75da5d5d861fd5b8a39)
* **Multisig:** [**0x98D8899c3030741925BE630C710A98B57F397C7a**](https://etherscan.io/address/0x98D8899c3030741925BE630C710A98B57F397C7a)
* **Timelock-Contract:** [**0x82f08041f1Bc1aa399320743F33f75CcA482b25a**](https://etherscan.io/address/0x82f08041f1Bc1aa399320743F33f75CcA482b25a)
* **Portal-Proxy-Admin-Contract:** [**0x260cA2abeF5d38181E2562F00FA92AD1DC681734**](https://etherscan.io/address/0x260ca2abef5d38181e2562f00fa92ad1dc681734)

## Portal-Contract-Adressen

Das Mezo Portal ist der ursprüngliche Einzahlungs-Contract für Mezo auf Ethereum. Die offiziellen Contract-Adressen für Mainnet und Testnet sind unten aufgeführt.

### Mainnet

| Contract                        | Adresse                                      |
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

| Contract                        | Adresse                                      |
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
