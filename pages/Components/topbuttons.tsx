import { IconButton, Flex, HStack, Button } from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub, FaTwitter, FaCode } from "react-icons/fa";
import { GiSailboat } from "react-icons/gi";
import { useColorMode } from "@chakra-ui/react";

export default function Topbuttons() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="end">
      <HStack pt="3">
        <Button
          colorScheme="green"
          leftIcon={<FaCode />}
          onClick={() =>
            window.open(
              "https://etherscan.io/address/0x4f72c28340c5a18ae59571124a8acd3ad1947141#code",
              "_blank"
            )
          }
        >
          contract
        </Button>
        <IconButton
          colorScheme="blue"
          aria-label="probably nothing on opensea"
          icon={<GiSailboat />}
          onClick={() =>
            window.open(
              "https://opensea.io/assets/0x4f72c28340c5a18Ae59571124a8aCd3aD1947141/0",
              "_blank"
            )
          }
          my="3"
        ></IconButton>
        <IconButton
          colorScheme="purple"
          aria-label="@JoshCStein on Twitter"
          icon={<FaTwitter />}
          onClick={() =>
            window.open("https://twitter.com/JoshCStein", "_blank")
          }
        />
        <IconButton
          colorScheme="purple"
          aria-label="@jcstein on GitHub"
          icon={<FaGithub />}
          onClick={() =>
            window.open("https://github.com/jcstein/next-thirdweb", "_blank")
          }
        />
        <IconButton
          onClick={toggleColorMode}
          aria-label={`Switch from ${colorMode} mode`}
        >
          {colorMode === "light" ? <FaMoon /> : <FaSun />}
        </IconButton>
      </HStack>
    </Flex>
  );
}
