'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { useState } from 'react';
import { StrategyCard } from '@/components/StrategyCard';
import { strategies } from '@/lib/strategies';
import { Strategy, Chain } from '@/types';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [selectedChain, setSelectedChain] = useState<Chain>('base');
  const [selectedStrategy, setSelectedStrategy] = useState<Strategy | null>(null);

  const chainStrategies = strategies.filter(
    s => s.chain === selectedChain || s.id === 'multi-chain'
  );

  const handleSelectStrategy = (strategy: Strategy) => {
    setSelectedStrategy(strategy);
    alert(`Selected: ${strategy.name}\n\nThis will be functional in next update!`);
  };

  if (!isConnected) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
        <header className="p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">🌾 ChainFarmer</h1>
          <ConnectButton />
        </header>

        <div className="container mx-auto px-6 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl font-bold mb-6">
              Automate Your Airdrop Farming
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              Farm airdrops across Base, Arbitrum, and Optimism while you sleep
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-xl mb-6">Connect your wallet to get started</p>
              <ConnectButton />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Auto-Execution</h3>
              <p className="text-gray-400">Set it once, runs forever</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-2">Multi-Wallet</h3>
              <p className="text-gray-400">Manage unlimited wallets</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2">Track Progress</h3>
              <p className="text-gray-400">Real-time airdrop eligibility</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-3xl font-bold">🌾 ChainFarmer</h1>
        <div className="flex items-center gap-4">
          <div className="text-sm">
            <p className="text-gray-400">Connected</p>
            <p className="font-mono">{address?.slice(0, 6)}...{address?.slice(-4)}</p>
          </div>
          <ConnectButton />
        </div>
      </header>

      {/* Chain Selector */}
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Select Chain</h2>
        <div className="flex gap-4">
          <button
            onClick={() => setSelectedChain('base')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedChain === 'base'
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🔵 Base
          </button>
          <button
            onClick={() => setSelectedChain('arbitrum')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedChain === 'arbitrum'
                ? 'bg-blue-400 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🔷 Arbitrum
          </button>
          <button
            onClick={() => setSelectedChain('optimism')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedChain === 'optimism'
                ? 'bg-red-500 text-white'
                : 'bg-white/10 text-gray-300 hover:bg-white/20'
            }`}
          >
            🔴 Optimism
          </button>
        </div>
      </div>

      {/* Strategies */}
      <div className="container mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold mb-6">Available Strategies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chainStrategies.map(strategy => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
              onSelect={handleSelectStrategy}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
