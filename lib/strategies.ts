import { Strategy, Chain } from '@/types';

export const strategies: Strategy[] = [
  {
    id: 'base-basic',
    name: 'Base Basic Farmer',
    description: 'Daily swaps on Base DEXes to build transaction history',
    chain: 'base',
    actions: ['Swap $5 on Uniswap', 'Swap $5 on Aerodrome', 'Random small transactions'],
    frequency: 'daily',
    estimatedCost: 15,
    estimatedGas: 3,
    difficulty: 'easy',
    potentialAirdrop: ['Base'],
    transactions: 30
  },
  {
    id: 'base-power',
    name: 'Base Power User',
    description: 'Comprehensive Base ecosystem interaction',
    chain: 'base',
    actions: ['Daily DEX swaps', 'Weekly LP provision', 'NFT mints on Base', 'Bridge in/out', 'Protocol interactions'],
    frequency: 'daily',
    estimatedCost: 50,
    estimatedGas: 10,
    difficulty: 'medium',
    potentialAirdrop: ['Base', 'Multiple protocols'],
    transactions: 60
  },
  {
    id: 'base-whale',
    name: 'Base Whale',
    description: 'High volume trading and liquidity provision',
    chain: 'base',
    actions: ['High volume swaps ($100+)', 'Large LP positions', 'Multiple protocol usage', 'Governance participation'],
    frequency: 'daily',
    estimatedCost: 200,
    estimatedGas: 20,
    difficulty: 'hard',
    potentialAirdrop: ['Base', 'DeFi protocols', 'Bonus tiers'],
    transactions: 90
  },
  {
    id: 'arb-basic',
    name: 'Arbitrum Basic',
    description: 'Daily activity on Arbitrum DEXes',
    chain: 'arbitrum',
    actions: ['Swap on Uniswap V3', 'Camelot DEX swaps', 'Bridge interactions'],
    frequency: 'daily',
    estimatedCost: 12,
    estimatedGas: 2,
    difficulty: 'easy',
    potentialAirdrop: ['Future Arbitrum rounds'],
    transactions: 30
  },
  {
    id: 'arb-defi',
    name: 'Arbitrum DeFi Pro',
    description: 'Advanced DeFi strategies on Arbitrum',
    chain: 'arbitrum',
    actions: ['GMX trading', 'Radiant lending', 'LP on multiple DEXes', 'Yield farming'],
    frequency: 'daily',
    estimatedCost: 40,
    estimatedGas: 5,
    difficulty: 'medium',
    potentialAirdrop: ['Arbitrum', 'GMX', 'Radiant'],
    transactions: 50
  },
  {
    id: 'op-basic',
    name: 'Optimism Basic',
    description: 'Daily Optimism ecosystem engagement',
    chain: 'optimism',
    actions: ['Velodrome swaps', 'Uniswap trading', 'OP governance'],
    frequency: 'daily',
    estimatedCost: 10,
    estimatedGas: 2,
    difficulty: 'easy',
    potentialAirdrop: ['Future OP rounds'],
    transactions: 30
  },
  {
    id: 'op-power',
    name: 'Optimism Power User',
    description: 'Comprehensive OP Superchain activity',
    chain: 'optimism',
    actions: ['Multi-DEX swaps', 'Synthetix perps', 'NFT activity', 'Governance voting'],
    frequency: 'daily',
    estimatedCost: 35,
    estimatedGas: 4,
    difficulty: 'medium',
    potentialAirdrop: ['Optimism', 'Synthetix', 'Protocols'],
    transactions: 45
  },
  {
    id: 'multi-chain',
    name: 'Multi-Chain Farmer',
    description: 'Farm all three chains simultaneously',
    chain: 'base',
    actions: ['Daily swaps on all chains', 'Cross-chain bridges', 'Multi-chain LP', 'Diversified activity'],
    frequency: 'daily',
    estimatedCost: 80,
    estimatedGas: 15,
    difficulty: 'hard',
    potentialAirdrop: ['Base', 'Arbitrum', 'Optimism', 'Bridge protocols'],
    transactions: 120
  }
];

export const getStrategiesByChain = (chain: Chain) => {
  return strategies.filter(s => s.chain === chain || s.id === 'multi-chain');
};
