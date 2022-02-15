import { Flex, Text } from "@chakra-ui/react";

export function Header() {
  return (
    <>
      <Flex
        as="header"
        width="100%"
        maxWidth={1480}
        height="20"
        mx="auto"
        px="6"
        mt="4"
        align="center"
      >
        {/* Logo */}
        <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
          DashGo
          <Text as="span" color="pink.500" ml="1">
            .
          </Text>
        </Text>
      </Flex>
    </>
  );
}
