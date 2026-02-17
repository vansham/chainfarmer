export const CONTRACT_ADDRESS = '0xA1018EcB6aDe7423B8701097FdBe782Ec65551B0';

export const CONTRACT_ABI = [
  {
    "inputs": [{"internalType": "address","name": "_uniswapRouter","type": "address"}],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true,"internalType": "address","name": "user","type": "address"},
      {"indexed": false,"internalType": "uint256","name": "swapAmount","type": "uint256"},
      {"indexed": false,"internalType": "uint256","name": "frequency","type": "uint256"}
    ],
    "name": "StrategyActivated",
    "type": "event"
  },
  {
    "inputs": [
      {"internalType": "uint256","name": "_swapAmount","type": "uint256"},
      {"internalType": "uint256","name": "_frequency","type": "uint256"}
    ],
    "name": "activateStrategy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "deactivateStrategy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address","name": "user","type": "address"}],
    "name": "getStrategy",
    "outputs": [
      {
        "components": [
          {"internalType": "bool","name": "active","type": "bool"},
          {"internalType": "uint256","name": "lastExecuted","type": "uint256"},
          {"internalType": "uint256","name": "swapAmount","type": "uint256"},
          {"internalType": "uint256","name": "frequency","type": "uint256"}
        ],
        "internalType": "struct SwapAutomator.UserStrategy",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
