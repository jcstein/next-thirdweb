import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEditionDrop, useClaimNFT } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import { Button } from "@chakra-ui/react";

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
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
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
