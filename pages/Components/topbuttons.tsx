import { IconButton, Flex, HStack } from "@chakra-ui/react";
import { FaMoon, FaSun, FaGithub, FaTwitter } from "react-icons/fa";
import { useColorMode } from "@chakra-ui/react";

export default function Topbuttons() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="end">
      <HStack pt="3">
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
