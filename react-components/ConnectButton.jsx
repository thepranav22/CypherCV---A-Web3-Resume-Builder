import { RainbowKitProvider, chain, configureChains, createRainbowKit } from '@rainbow-me/rainbowkit';
import { getDefaultWallets, RainbowKit } from '@rainbow-me/rainbowkit';


const { chains, provider } = configureChains(
  [chain.mainnet], // Add supported chains here
  () => undefined
);


const { connectors } = getDefaultWallets({
  appName: 'resume-builder',
  chains,
});
const { rainbowKit: { connect, disconnect } } = createRainbowKit({
  connectors,
  initialChain: chain.mainnet,
});

function ConnectButton() {
  const { account, isLoading, shouldConnect } = useRainbowKit();

  return (
    <button onClick={() => (shouldConnect ? connect : disconnect())}>
      {isLoading ? 'Connecting...' : (account ? 'Connected' : 'Connect Wallet')}
    </button>
  );
}
