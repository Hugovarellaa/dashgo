import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

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

        {/* Searchbox */}

        <Flex
          as="label"
          flex="1"
          py="4"
          px="8"
          ml="6"
          maxWidth={400}
          alignSelf="center"
          color="gray.200"
          position="relative"
          background="gray.800"
          borderRadius="full"
        >
          <Input
            type="text"
            color="gray.50"
            variant="unstyled"
            px="4"
            mr="4"
            placeholder="Buscar na plataforma"
            _placeholder={{
              color: "gray.400",
            }}
          />
          <Icon as={RiSearchLine} fontSize="20" />
        </Flex>
      </Flex>
    </>
  );
}
