---
title: Reading Market Data with Oracles
description: How to access and interpret market data using Mezo's oracle infrastructure.
topic: developers
---

Mezo provides market data through two oracle systems: [Skip Connect](https://docs.skip.build/connect/introduction) for BTC/USD and [Pyth Network](https://docs.pyth.network/home) for additional price feeds.

## Overview

### Skip Oracle

The Skip oracle provides native BTC/USD price feeds on Mezo through a Chainlink-compatible aggregator interface.

- **Supported pair:** BTC/USD only
- **Update frequency:** Every block
- **Interface:** [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol)

### Pyth Oracle

The Pyth oracle provides multiple price feeds beyond BTC/USD.

**Update frequency:** Depends on the tokens pair.

- On Mezo see [configuration file](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler/configmap.yaml) for details.
- On Ethereum see [configuration file](https://github.com/mezo-org/mezod/blob/main/infrastructure/kubernetes/common/pyth-scheduler-ethereum/configmap.yaml) for details.

Price is being updated when `price_deviation` deviates more than a set threshold (in percentage points) or every `time_difference` seconds, whichever is first.

## Best Practices

When building dApps that consume oracle data, follow these guidelines:

- **Validate freshness:** Always check timestamps and block numbers to detect stale data. Set appropriate staleness thresholds for your use case.
- **Set price bounds:** Implement sanity checks on price values to detect anomalies or manipulation attempts.
- **Monitor market conditions:** Be aware of volatility, liquidity, and potential manipulation events that may require pausing your application.
- **Security audits:** Ensure your contracts and dependencies meet security standards. Audit code that handles oracle data to prevent exploits.

## Reading Price Feeds

### Using Skip Oracle (BTC/USD)

The Skip oracle implements a Chainlink-compatible interface. Call `latestRoundData()` to retrieve the latest price:

**Contract:** [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015)

**Return values:**

- `roundId`: The round ID when the price was updated
- `answer`: The BTC/USD price (use `decimals()` to get the decimal precision)
- `startedAt`: Unix timestamp when the round started
- `updatedAt`: Unix timestamp when the round was last updated

### Using Pyth Oracle (Multiple Feeds)

Pyth provides multiple price feeds through its EVM contracts. Use `getPriceNoOlderThan(pair_id, maxAgeSeconds)` to fetch prices with built-in staleness checks.

**Contract Mezo Mainnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Mezo Testnet:** [0x2880aB155794e7179c9eE2e38200202908C17B43](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43)

**Contract Ethereum Mainnet:** [0x4305FB66699C3B2702D4d05CF36551390A4c69C6](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6)

**Contract Ethereum Sepolia:** [0xDd24F84d36BF92C65F92307595335bdFab5Bbd21](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21)

**Example to fetch the price for a given price id:**

```solidity
import "@pythnetwork/pyth-sdk-solidity/IPyth.sol";
import "@pythnetwork/pyth-sdk-solidity/PythStructs.sol";

contract ReadPythPrice {
    IPyth public immutable pyth;

    constructor(address pythContract) {
        pyth = IPyth(pythContract); // 0x2880aB155794e7179c9eE2e38200202908C17B43 on Mezo
    }

    function getPrice(bytes32 priceId, uint256 maxAgeSeconds)
        external
        view
        returns (int64 price, uint64 conf, int32 expo, uint256 publishTime)
    {
        PythStructs.Price memory priceData = pyth.getPriceNoOlderThan(priceId, maxAgeSeconds);
        return (priceData.price, priceData.conf, priceData.expo, priceData.publishTime);
    }

    // Example: Get MUSD/USD price
    function getMUSDPrice() external view returns (int64, uint256) {
        bytes32 musdPriceId = 0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de;
        PythStructs.Price memory price = pyth.getPriceNoOlderThan(musdPriceId, 3600); // Max 1 hour old
        return (price.price, price.publishTime);
    }
}
```

**Reference:** getPriceNoOlderThan API [documentation](https://api-reference.pyth.network/price-feeds/evm/getPriceNoOlderThan)

## Offchain Price Data

You can query price feeds and metadata directly from the Pyth Network without interacting with the blockchain:

- **Hermes API:** [https://hermes.pyth.network/docs/#/rest/price_feeds_metadata](https://hermes.pyth.network/docs/#/rest/price_feeds_metadata)
- **Price feed IDs:** [https://docs.pyth.network/price-feeds/price-feeds#feed-ids](https://docs.pyth.network/price-feeds/price-feeds#feed-ids)

## Available Price Feeds

### Skip Oracle Feeds

Available on both Mezo mainnet and testnet:

| Pair | Contract Address | Network |
|------|-----------------|---------|
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Mainnet |
| BTC/USD | [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015) | Testnet |

**Node API (Testnet only):** [http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD)

### Pyth Oracle Feeds

Available on:

- Mezo [Mainnet](https://explorer.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) at `0x2880aB155794e7179c9eE2e38200202908C17B43`
- Mezo [Testnet](https://explorer.test.mezo.org/address/0x2880aB155794e7179c9eE2e38200202908C17B43) at `0x2880aB155794e7179c9eE2e38200202908C17B43`.
- Ethereum [Mainnet](https://etherscan.io/address/0x4305FB66699C3B2702D4d05CF36551390A4c69C6) at `0x4305FB66699C3B2702D4d05CF36551390A4c69C6`
- Ethereum [Sepolia](https://sepolia.etherscan.io/address/0xDd24F84d36BF92C65F92307595335bdFab5Bbd21) at `0xDd24F84d36BF92C65F92307595335bdFab5Bbd21`.

**Supported price feed IDs Mezo:**

| Pair | Price Feed ID |
|------|---------------|
| SolvBTC/USD | `0xf253cf87dc7d5ed5aa14cba5a6e79aee8bcfaef885a0e1b807035a0bbecc36fa` |
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| MEZO/USD | `0x80beaaedbdd228e77c5d62dfcd74b0305674b7e27a5cc6a46e71bd3a696826df` |
| BTC/USD | `0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43` |
| cbBTC/USD | `0x2817d7bfe5c64b8ea956e9a26f573ef64e72e4d7891f2d6af9bcc93f7aff9a97` |
| USDC/USD | `0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |
| T/USD | `0x7a072b799215196b0ecb6a58636ec312bce8461dcc33c28c3a046b1e636d121d` |
| NVDA/USD | `0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593` |
| GOOGL/USD | `0x5a48c03e9b9cb337801073ed9d166817473697efff0d138874e0f6a33d6d5aa6` |
| TSLA/USD | `0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1` |
| MSTR/USD | `0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09` |
| COIN/USD | `0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245` |
| CRCL/USD | `0x92b8527aabe59ea2b12230f7b532769b133ffb118dfbd48ff676f14b273f1365` |

**Supported price feed IDs Ethereum:**

| Pair | Price Feed ID |
|------|---------------|
| MUSD/USD | `0x0617a9b725011a126a2b9fd53563f4236501f32cf76d877644b943394606c6de` |
| USDT/USD | `0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b` |

**Requesting additional price feeds:** To enable additional Pyth price feeds, browse the complete list of available [price feed IDs](https://docs.pyth.network/price-feeds/price-feeds#feed-ids) and contact the Mezo team to request onchain activation.
