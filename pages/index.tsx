import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEditionDrop, useClaimNFT } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import { Button } from "@chakra-ui/react";
import { Topbuttons } from "./Components/topbuttons";

const Home: NextPage = () => {
  const { address } = useAccount();
  const editionDrop = useEditionDrop(
    "0xF1cC36db8b8C48cCe1ebb41Ca8050dd0C36c0897"
  );
  const { mutate: claimNft, isLoading, error } = useClaimNFT(editionDrop);
  if (error) {
    console.error("failed to claim nft", error);
  }

  return (
    <div className={styles.container}>
      <Topbuttons />
      <Head>
        <title>Probably Nothing Edition Mint</title>
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="canonical" href="https://probablynothing.ink" />

        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Claim your Probably Nothing NFT here."
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@developer_dao" />
        <meta name="twitter:title" content="Probably Nothing NFT Drop" />
        <meta
          name="twitter:description"
          content="Claim your Probably Nothing NFT here."
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta name="twitter:url" content="https://probablynothing.ink" />
        <meta name="twitter:site:domain" content="probablynothing.ink" />

        <meta property="og:site_name" content="Probably Nothing NFT Drop" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta property="og:title" content="Probably Nothing NFT Drop" />
        <meta property="og:url" content="https://probablynothing.ink" />
        <meta
          property="og:description"
          content="Claim your Probably Nothing NFT here."
        />
        <meta
          property="og:image:url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Probably Nothing NFT Drop" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <script
          defer
          data-domain="probablynothing.ink"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <Button
          colorScheme="purple"
          disabled={isLoading}
          onClick={() => claimNft({ to: address, tokenId: 0, quantity: 1 })}
          _hover={{ transform: "scale(1.1)" }}
          size="lg"
          mt="3"
        >
          Claim JCS!
        </Button>
        <Button
          colorScheme="purple"
          disabled={isLoading}
          onClick={() => claimNft({ to: address, tokenId: 1, quantity: 1 })}
          _hover={{ transform: "scale(1.1)" }}
          size="lg"
          mt="3"
        >
          Claim Probably Nothing!
        </Button>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
