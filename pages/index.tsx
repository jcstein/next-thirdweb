import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEditionDrop, useClaimNFT } from "@thirdweb-dev/react";
import { useAccount } from "wagmi";
import { Button, Heading, Image, Avatar, Text, VStack } from "@chakra-ui/react";
import { GiSailboat } from "react-icons/gi";
import Topbuttons from "./Components/topbuttons";
import { FaCode } from "react-icons/fa";

const Home: NextPage = () => {
  const { address } = useAccount();
  const editionDrop = useEditionDrop(
    "0x4f72c28340c5a18Ae59571124a8aCd3aD1947141"
  );
  const { mutate: claimNft, isLoading, error } = useClaimNFT(editionDrop);
  if (error) {
    console.error("failed to claim nft", error);
  }
  return (
    <div className={styles.container}>
      <Head>
        {/* META */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />

        {/* TITLES */}
        <title>probably nothing edition drop</title>
        <meta name="apple-mobile-web-app-title" content="probably nothing" />
        <meta name="twitter:title" content="probably nothing edition drop" />
        <meta property="og:title" content="probably nothing edition drop" />
        <meta property="og:site_name" content="probably nothing edition drop" />

        {/* LINKS */}
        <link rel="canonical" href="https://probablynothing.ink" />
        <meta name="twitter:url" content="https://probablynothing.ink" />
        <meta property="og:url" content="https://probablynothing.ink" />
        <meta name="twitter:site:domain" content="probablynothing.ink" />

        {/* FAVICONS */}
        <meta name="favicon" content="/favicon.ico" />
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

        {/* THEME */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* DESCRIPTION */}
        <meta
          property="og:description"
          content="Claim your probably nothing NFT here."
        />
        <meta
          name="twitter:description"
          content="Claim your probably nothing NFT here."
        />
        <meta
          name="description"
          content="Claim your probably nothing NFT here."
        />

        {/* TWITTER */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@developer_dao" />

        {/* IMAGE */}
        <meta
          property="og:image:url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/jcstein/jpegs/main/probablynothing-og.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="probably nothing edition drop" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Topbuttons />
      <main className={styles.main}>
        <Heading size="xl" textAlign="center">
          probably nothing edition drop
        </Heading>
        {!address ? (
          <Image
            src="./probablynothing.png"
            rounded="full"
            width="42%"
            mt="5"
            maxW="300px"
            alt="probably nothing"
          />
        ) : null}
        <br />
        {!address ? (
          <VStack>
            <Heading pb="3" size="lg">
              gm
            </Heading>
            <Text textAlign="center" pb="5">
              connect your wallet to mint your probably nothing ✨
            </Text>
          </VStack>
        ) : null}
        <ConnectButton />
        {address ? (
          <>
            <Image
              src="./probablynothing.png"
              rounded="2xl"
              width="42%"
              maxW="300px"
              mt="5"
              mb="3"
              alt="probably nothing"
            />
            {/* <Text>0 out of ∞ Minted</Text> */}
            {isLoading ? (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                isLoading
                loadingText="minting..."
                spinnerPlacement="start"
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              />
            ) : (
              <Button
                colorScheme="purple"
                disabled={isLoading}
                onClick={() =>
                  claimNft({ to: address as any, tokenId: 0, quantity: 1 })
                }
                _hover={{ transform: "scale(1.1)" }}
                size="lg"
                my="3"
              >
                claim probably nothing!
              </Button>
            )}
            <Button
              colorScheme="blue"
              rightIcon={<GiSailboat />}
              onClick={() =>
                window.open(
                  "https://opensea.io/assets/0x4f72c28340c5a18Ae59571124a8aCd3aD1947141/0",
                  "_blank"
                )
              }
              my="3"
            >
              view on opensea
            </Button>
            <Button
              colorScheme="blue"
              rightIcon={<FaCode />}
              onClick={() =>
                window.open(
                  "https://etherscan.io/address/0x4f72c28340c5a18ae59571124a8acd3ad1947141#code",
                  "_blank"
                )
              }
            >
              contract on etherscan
            </Button>
          </>
        ) : null}
      </main>
      <footer className={styles.footer}>
        <a href="https://joshcs.lol" target="_blank" rel="noopener noreferrer">
          <Avatar src="/jcs.png" mx="auto" size="full" width="5%" maxW="50px" />
        </a>
      </footer>
    </div>
  );
};

export default Home;
