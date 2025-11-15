import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Define Celo Mainnet
const celo: AppKitNetwork = {
  id: 42220,
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:42220',
  name: 'Celo',
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'CELO',
  },
  rpcUrls: {
    default: { http: ['https://forno.celo.org'] },
  },
  blockExplorers: {
    default: { name: 'Celo Explorer', url: 'https://celoscan.io' },
  },
};

// Define Celo Sepolia testnet
const celoSepolia: AppKitNetwork = {
  id: 11142220,
  chainNamespace: 'eip155',
  caipNetworkId: 'eip155:11142220',
  name: 'Celo Sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'CELO',
    symbol: 'CELO',
  },
  rpcUrls: {
    default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
  },
  blockExplorers: {
    default: { name: 'Celo Explorer', url: 'https://sepolia.celoscan.io' },
  },
  testnet: true,
};

// Get projectId from https://dashboard.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks: [AppKitNetwork, ...AppKitNetwork[]] = [celo, celoSepolia]

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks
})

export const config = wagmiAdapter.wagmiConfig
