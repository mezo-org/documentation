---
title: 常见问题
description: 关于 Mezo App、Mezo 验证者等方面的常见问题。
topic: users
---

## 什么是 Mezo？

Mezo 是一款比特币金融应用，让人们无需花掉比特币就能依靠比特币生活。其旗舰功能包括 Mezo Borrow 和 MUSD。

## 我可以用 Mezo 做什么？

Mezo 致力于打造各类产品，让 BTC 无需被花掉也能发挥用途。您可以通过 Mezo Borrow 设立贷款来铸造 MUSD，而 MUSD 可用于多种场景。我们的愿景是最终建立并引领比特币循环经济，让 MUSD 既可用于购房等大额消费，也可用于购买日常杂货或每天一杯咖啡等日常消费。

## 我为什么应该使用 Mezo？

如果您希望真正做到依靠比特币生活而无需花掉它，Mezo 正是您的不二之选。通过将比特币用作抵押品，您可以借助 Mezo Borrow 开立信贷额度，享受业内最低的固定利率（1-5%）。这样，您就可以进入 BitcoinFi，也可以购买 Mezo Market 中的各类日常用品。

## Mezo 的旗舰功能有哪些？

Mezo 的产品与其使命保持一致：为大众而非少数人打造以比特币为支撑的金融范式。Mezo 打造产品，与社区一起共建这一未来。基于这一理念，以下产品支撑着这一方向：

* Mezo Borrow
* MUSD 
* Mezo Earn（即将推出）

## 如何以我的比特币为抵押借款？

MUSD 是 Mezo 以比特币为支撑的稳定币，1 MUSD 可赎回价值 $1 的 BTC。要借入 MUSD，您需要锁定 BTC 作为抵押品。

* 如果协议的系统总抵押率保持稳健（支撑率超过 150%）：
  * 新贷款需要至少 110% 的抵押率（例如，每 100 MUSD 债务需要价值 $110 的 BTC）。
  * 如果您的抵押率降至 110% 以下，您的仓位可能会被清算。
* 如果总支撑率降至 150% 以下：
  * 新贷款必须以 150% 的抵押率作担保。

## 如何在我的 dApp/项目中使用 Mezo？

Passport 让开发者能够轻松地为构建在 Mezo 上的 dApp 集成比特币钱包支持。它基于 RainbowKit 构建，支持 Unisat、Xverse 和 OKX 等主流比特币钱包，以及 Taho 和 MetaMask 等兼容 EVM 的钱包。该软件包包含辅助 hook，可用于读取余额、管理钱包连接，以及发送比特币交易和 Mezo 交易。如果您以前使用过 RainbowKit 或 wagmi，设置过程会让您感到很熟悉。您可以按照 Mezo Passport README 中的步骤开始使用。

## 如何投资 Mezo？

如果您有意成为投资者，请联系 [IR@thesis.co](IR@thesis.co)。

## 我可以在 Mezo 上使用哪些钱包？

您可以在 Mezo 上使用以下兼容比特币和兼容 EVM 的钱包：

兼容比特币：

* Unisat
* OKX（不支持 Ledger）
* Xverse

兼容 EVM：

* Taho
* MetaMask
* Zerion
* OKX

## 交易费用使用哪种代币支付？

在 Mezo 上，交易费用使用 BTC 支付。您可以直接从比特币钱包存入 BTC，或从以太坊钱包存入 tBTC，从而在 Mezo 上获得 BTC。

## 为什么我持有的某些代币没有显示在 Mezo Explorer 中？

这是 BlockScout 索引器在处理带有代理合约的代币时的已知限制。在您针对该代币完成首次转账和授权之前，这些代币不会显示在 [Mezo Explorer](https://explorer.mezo.org/) 中您的 EOA 下。
