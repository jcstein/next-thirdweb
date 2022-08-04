import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
  useSigner,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import {
  connectorsForWallets,
  wallet,
  RainbowKitProvider,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { ThirdwebSDKProvider, ChainId } from "@thirdweb-dev/react";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const activeChainId = ChainId.Rinkeby;

const { chains, provider } = configureChains(
  [chain.rinkeby],
  [
    jsonRpcProvider({
      rpc: () => {
        return {
          http: "https://rpc.ankr.com/eth_rinkeby",
        };
      },
    }),
    publicProvider(),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      wallet.metaMask({ chains, shimDisconnect: true }),
      wallet.walletConnect({ chains }),
      wallet.coinbase({ appName: "Ankr Multichain NFT Gallery", chains }),
      wallet.rainbow({ chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      wallet.argent({ chains }),
      wallet.brave({
        chains,
        shimDisconnect: true,
      }),
      wallet.imToken({ chains }),
      wallet.injected({
        chains,
        shimDisconnect: true,
      }),
      wallet.ledger({
        chains,
      }),
      wallet.steak({ chains }),
      wallet.trust({ chains, shimDisconnect: true }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

function ThirdwebProvider({ wagmiClient, children }: any) {
  const { data: signer } = useSigner();
  return (
    <ThirdwebSDKProvider
      desiredChainId={activeChainId}
      signer={signer as any}
      provider={wagmiClient.provider}
      queryClient={wagmiClient.queryClient as any}
    >
      {children}
    </ThirdwebSDKProvider>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={midnightTheme()} coolMode>
          <ThirdwebProvider wagmiClient={wagmiClient}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
          </ThirdwebProvider>
        </RainbowKitProvider>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default MyApp;
