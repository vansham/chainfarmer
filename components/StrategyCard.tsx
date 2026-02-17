'use client';

import { Strategy } from '@/types';

interface StrategyCardProps {
  strategy: Strategy;
  onSelect: (strategy: Strategy) => void;
}

export function StrategyCard({ strategy, onSelect }: StrategyCardProps) {
  const difficultyColors = {
    easy: 'bg-green-500/20 text-green-400',
    medium: 'bg-yellow-500/20 text-yellow-400',
    hard: 'bg-red-500/20 text-red-400'
  };

  const chainColors = {
    base: 'bg-blue-500',
    arbitrum: 'bg-blue-400',
    optimism: 'bg-red-500'
  };

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all hover:scale-105">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold mb-1">{strategy.name}</h3>
          <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${chainColors[strategy.chain]}`}>
            {strategy.chain.toUpperCase()}
          </span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[strategy.difficulty]}`}>
          {strategy.difficulty}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm mb-4">{strategy.description}</p>

      {/* Actions */}
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-2 font-semibold">Actions:</p>
        <ul className="space-y-1">
          {strategy.actions.slice(0, 3).map((action, i) => (
            <li key={i} className="text-xs text-gray-300 flex items-start">
              <span className="text-green-400 mr-2">✓</span>
              {action}
            </li>
          ))}
          {strategy.actions.length > 3 && (
            <li className="text-xs text-gray-400">+{strategy.actions.length - 3} more...</li>
          )}
        </ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white/5 rounded p-2">
          <p className="text-xs text-gray-400">Cost/Month</p>
          <p className="text-lg font-bold">${strategy.estimatedCost}</p>
        </div>
        <div className="bg-white/5 rounded p-2">
          <p className="text-xs text-gray-400">Transactions</p>
          <p className="text-lg font-bold">{strategy.transactions}</p>
        </div>
      </div>

      {/* Potential Airdrops */}
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-2">Potential Airdrops:</p>
        <div className="flex flex-wrap gap-1">
          {strategy.potentialAirdrop.map((airdrop, i) => (
            <span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">
              {airdrop}
            </span>
          ))}
        </div>
      </div>

      {/* Select Button */}
      <button
        onClick={() => onSelect(strategy)}
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all"
      >
        Start Farming 🌾
      </button>
    </div>
  );
}
