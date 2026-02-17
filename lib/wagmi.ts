import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { base, arbitrum, optimism } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ChainFarmer',
  projectId: 'YOUR_PROJECT_ID_HERE',
  chains: [base, arbitrum, optimism],
  ssr: true,
});
