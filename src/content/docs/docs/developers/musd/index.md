---
title: MUSD Development Guide
description: >-
  Complete guide for developing with MUSD, the Bitcoin-backed stablecoin on
  Mezo.
topic: developers
---

# MUSD Development Guide

MUSD (Mezo USD) is a Bitcoin-backed stablecoin that provides a stable value store while maintaining Bitcoin's security and decentralization. This guide covers how to integrate and develop with MUSD contracts.

## Overview

MUSD is designed to be:
- **Bitcoin-backed**: Collateralized by Bitcoin deposits
- **Stable**: Maintains 1:1 peg with USD
- **Decentralized**: No central authority controls issuance
- **Transparent**: All operations are on-chain and verifiable

### Key Features

- **Minting**: Create MUSD by depositing Bitcoin collateral
- **Redemption**: Redeem MUSD for Bitcoin collateral
- **Liquidation**: Automated liquidation system for undercollateralized positions
- **Governance**: Community-driven parameter updates

## Repository Structure

The [MUSD repository](https://github.com/mezo-org/musd.git) contains:

- **Smart Contracts**: Core MUSD protocol contracts
- **Integration Examples**: Sample implementations
- **Testing Suite**: Comprehensive test coverage
- **Documentation**: Technical specifications

## Development Setup

### Prerequisites

- Node.js 16+
- Hardhat or Foundry
- Git
- Mezo testnet access

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mezo-org/musd.git
cd musd
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment:
```bash
cp .env.example .env
# Edit .env with your configuration
```

## Smart Contract Architecture

### Core Contracts

1. **MUSD Token**: ERC20 implementation of MUSD
2. **Collateral Manager**: Manages Bitcoin collateral deposits
3. **Oracle**: Price feeds for Bitcoin/USD
4. **Liquidation Engine**: Automated liquidation system
5. **Governance**: Parameter management and upgrades

### Contract Interactions

```solidity
// Example: Minting MUSD
contract MUSDIntegration {
    IMUSD public musd;
    ICollateralManager public collateralManager;
    
    function mintMUSD(uint256 btcAmount) external {
        // 1. Deposit Bitcoin collateral
        collateralManager.depositCollateral{value: btcAmount}();
        
        // 2. Calculate MUSD amount based on collateral ratio
        uint256 musdAmount = calculateMUSDAmount(btcAmount);
        
        // 3. Mint MUSD tokens
        musd.mint(msg.sender, musdAmount);
    }
}
```

## Integration Guide

### Basic Integration

1. **Import Contracts**: Add MUSD contracts to your project
2. **Configure Network**: Set up Mezo network configuration
3. **Initialize Contracts**: Deploy or connect to existing contracts
4. **Implement Logic**: Add MUSD functionality to your dApp

### Example Integration

```typescript
import { ethers } from 'ethers';
import MUSD_ABI from './abis/MUSD.json';

class MUSDClient {
  private provider: ethers.providers.Provider;
  private musdContract: ethers.Contract;
  
  constructor(rpcUrl: string, musdAddress: string) {
    this.provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    this.musdContract = new ethers.Contract(musdAddress, MUSD_ABI, this.provider);
  }
  
  async getBalance(address: string): Promise<string> {
    const balance = await this.musdContract.balanceOf(address);
    return ethers.utils.formatEther(balance);
  }
  
  async mintMUSD(amount: string, signer: ethers.Signer): Promise<ethers.ContractTransaction> {
    const tx = await this.musdContract.connect(signer).mint(ethers.utils.parseEther(amount));
    return tx;
  }
}
```

## Minting MUSD

### Process Overview

1. **Deposit Collateral**: Send Bitcoin to the collateral contract
2. **Verify Deposit**: Confirm Bitcoin deposit on-chain
3. **Calculate Amount**: Determine MUSD amount based on collateral ratio
4. **Mint Tokens**: Create MUSD tokens for the user

### Implementation

```solidity
function mintMUSD(uint256 collateralAmount) external {
    require(collateralAmount > 0, "Invalid amount");
    
    // Deposit Bitcoin collateral
    IERC20(btcToken).transferFrom(msg.sender, address(this), collateralAmount);
    
    // Calculate MUSD amount (example: 1 BTC = 50,000 MUSD)
    uint256 musdAmount = collateralAmount * getBTCPrice() / 1e18;
    
    // Mint MUSD tokens
    _mint(msg.sender, musdAmount);
    
    emit MUSDMinted(msg.sender, collateralAmount, musdAmount);
}
```

## Redemption Process

### How Redemption Works

1. **Burn MUSD**: User burns MUSD tokens
2. **Calculate Collateral**: Determine Bitcoin amount to return
3. **Release Collateral**: Transfer Bitcoin back to user
4. **Update State**: Update collateralization ratios

### Example Implementation

```solidity
function redeemMUSD(uint256 musdAmount) external {
    require(musdAmount > 0, "Invalid amount");
    require(balanceOf(msg.sender) >= musdAmount, "Insufficient balance");
    
    // Burn MUSD tokens
    _burn(msg.sender, musdAmount);
    
    // Calculate Bitcoin collateral to return
    uint256 collateralAmount = musdAmount * 1e18 / getBTCPrice();
    
    // Transfer Bitcoin back to user
    IERC20(btcToken).transfer(msg.sender, collateralAmount);
    
    emit MUSDRedeemed(msg.sender, musdAmount, collateralAmount);
}
```

## Liquidation System

### Liquidation Triggers

- **Undercollateralization**: Collateral ratio below minimum threshold
- **Price Volatility**: Rapid Bitcoin price changes
- **Manual Triggers**: Governance or emergency liquidation

### Liquidation Process

```solidity
function liquidatePosition(address user) external {
    uint256 collateralRatio = getCollateralRatio(user);
    require(collateralRatio < liquidationThreshold, "Position not liquidatable");
    
    uint256 musdDebt = balanceOf(user);
    uint256 collateralValue = getCollateralValue(user);
    
    // Calculate liquidation penalty
    uint256 penalty = musdDebt * liquidationPenalty / 10000;
    
    // Transfer collateral to liquidator
    IERC20(btcToken).transfer(msg.sender, collateralValue);
    
    // Burn MUSD debt
    _burn(user, musdDebt);
    
    emit PositionLiquidated(user, musdDebt, collateralValue, penalty);
}
```

## Oracle Integration

### Price Feeds

MUSD relies on accurate Bitcoin price feeds for:
- Collateral valuation
- Liquidation calculations
- Minting/redeeming operations

### Oracle Implementation

```solidity
contract PriceOracle {
    mapping(address => uint256) public prices;
    uint256 public constant PRICE_PRECISION = 1e18;
    
    function updatePrice(address token, uint256 price) external onlyOracle {
        require(price > 0, "Invalid price");
        prices[token] = price;
        emit PriceUpdated(token, price);
    }
    
    function getPrice(address token) external view returns (uint256) {
        return prices[token];
    }
}
```

## Testing

### Unit Tests

```javascript
describe('MUSD Contract', () => {
  let musd, collateralManager, oracle;
  
  beforeEach(async () => {
    // Deploy contracts
    musd = await MUSD.deploy();
    collateralManager = await CollateralManager.deploy();
    oracle = await PriceOracle.deploy();
  });
  
  it('should mint MUSD correctly', async () => {
    const collateralAmount = ethers.utils.parseEther('1');
    const expectedMUSD = ethers.utils.parseEther('50000');
    
    await musd.mintMUSD(collateralAmount);
    
    const balance = await musd.balanceOf(owner.address);
    expect(balance).to.equal(expectedMUSD);
  });
});
```

### Integration Tests

```javascript
describe('MUSD Integration', () => {
  it('should handle complete mint/redeem cycle', async () => {
    // Mint MUSD
    await musd.mintMUSD(ethers.utils.parseEther('1'));
    
    // Redeem MUSD
    await musd.redeemMUSD(ethers.utils.parseEther('50000'));
    
    // Verify final state
    const balance = await musd.balanceOf(owner.address);
    expect(balance).to.equal(0);
  });
});
```

## Security Considerations

### Best Practices

1. **Access Control**: Implement proper role-based permissions
2. **Reentrancy Protection**: Use checks-effects-interactions pattern
3. **Oracle Security**: Validate price feeds and implement circuit breakers
4. **Upgrade Safety**: Use proxy patterns for contract upgrades

### Audit Checklist

- [ ] Collateral ratio calculations
- [ ] Liquidation logic
- [ ] Oracle price validation
- [ ] Access control mechanisms
- [ ] Reentrancy protection
- [ ] Integer overflow/underflow

## Deployment

### Testnet Deployment

1. Deploy contracts to Mezo testnet
2. Configure oracle with test price feeds
3. Set initial parameters (collateral ratios, fees)
4. Test minting and redemption flows

### Mainnet Deployment

1. Complete security audit
2. Deploy contracts to mainnet
3. Initialize with real Bitcoin collateral
4. Configure production oracle feeds
5. Enable public minting

## Monitoring

### Key Metrics

- **Total Supply**: Total MUSD in circulation
- **Collateral Ratio**: Average collateralization
- **Liquidation Events**: Number and value of liquidations
- **Oracle Updates**: Price feed accuracy and frequency

### Alerting

- Collateral ratio below threshold
- Oracle price deviation
- Large mint/redeem transactions
- Contract upgrade events

## Resources

- [MUSD Repository](https://github.com/mezo-org/musd.git)
- [MUSD User Guide](/docs/users/musd/)
- [Mezo Network Documentation](/docs/developers/getting-started/configure-environment)
- [Smart Contract Security](/docs/developers/security)

## Support

For development support:
- Join the [Mezo Discord](https://discord.com/invite/mezo)
- Check the [GitHub Issues](https://github.com/mezo-org/musd/issues)
- Review the [FAQ](/docs/developers/getting-started/FAQs)
