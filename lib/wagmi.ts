import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, arbitrum, optimism } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ChainFarmer',
  projectId: 'b54f3633a6a3d5820f83a1b21b955757',
  chains: [base, arbitrum, optimism],
  ssr: true,
});
