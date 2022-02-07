import { Flex, Icon, Input as ChakraInput } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
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
      backgroundColor="gray.800"
      borderRadius="full"
    >
      <ChakraInput
        color="gray.50"
        placeholder="Buscar na plataforma"
        px="4"
        mx="4"
        variant="unstyled"
        _placeholder={{
          color: "gray.400",
        }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}