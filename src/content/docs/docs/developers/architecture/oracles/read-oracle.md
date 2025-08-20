---
title: Reading Market Data with Oracles
description: How to access and interpret market data using Mezo’s Oracle infrastructure.
topic: developers
---

Mezo makes market data available through different interfaces. 

## Best practices

When reading market data and building dApps that rely on this information, consider the following best practices:

- **Data freshness:** In the unlikely event of an oracle failure, your application must identify if the oracle provides stale data. Before executing functions that rely on accurate market data, verify that oracle answers have valid timestamps and block numbers. Also check oracle answers against reasonable limits.
- **Monitoring:** Monitor market conditions for volatility, liquidity, and manipulation. During these events, the oracle continues to provide accurate data but it might not be suitable for your application to continue operating.
- **Application risks:** Ensure your applications and dependencies meet the security standards required for your use case. Audit your code and dependencies to ensure they are secure from attacks or market manipulation events. 

## Read from an onchain contract

Mezo provides onchain contracts so your dApps can access market data. The contract is a modified version of the [Chainlink Aggregator](https://github.com/smartcontractkit/libocr/blob/9e4afd8896f365b964bdf769ca28f373a3fb0300/contract/AccessControlledOffchainAggregator.sol) contract.

The `latestRoundData()` function returns the following values:

- **`roundId`**: The round in which the answer was updated
- **`answer`**: The data provided by the oracle for this specific asset pair. Usually this is the price of the asset pair. Use the `decimals()` function to get the number of decimals present in the answer value.
- **`startedAt`**: The unix timestamp when the round started
- **`updatedAt`**: The unix timestamp when the round was updated

See [Available Markets](#available-markets) to find what assets have their data provided onchain. 

## Read from a Mezo node

You can read market data directly from a Mezo node. For example, you can get BTC/USD answers from [mezo-node-0.test.mezo.org](http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD).

The API returns the following JSON structure similar to the following example:

```
{"price":{"price":"8146719580","block_timestamp":"2025-03-12T15:57:11.148843Z","block_height":"3078793"},"nonce":"1984245","decimals":"5","id":"0"}
```

Note that the `price` answer has a different `decimals` value when compared to the values stored in the onchain contract.

To find answers for different asset pairs, specify a different `currency_pair` value in the URL. See [Available Markets](#available-markets) to find what assets are provided by Mezo's implementation of Skip Connect.


## Available markets

Mezo's implementation of the Skip Connect module tracks specific asset pairs. This is the full list of currently-available data on Mezo matsnet.

### Testnet

- BTC/USD
    - Onchain: [0x7b7c000000000000000000000000000000000015](https://explorer.test.mezo.org/address/0x7b7c000000000000000000000000000000000015)
    - Node: http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=BTC/USD
- ETH/USD:
    - Onchain: Not Available
    - Node: http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=ETH/USD
- USDT/USD: 
    - Onchain: Not Available
    - Node: http://mezo-node-0.test.mezo.org:1317/connect/oracle/v2/get_price?currency_pair=USDT/USD
