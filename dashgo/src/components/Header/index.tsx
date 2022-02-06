import {
  Avatar,
  Box,
  Flex,
  HStack,
  Icon,
  Input as ChakraInput,
  Text,
} from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from "react-icons/ri";

export function Header() {
  return (
    <Flex
      width="100%"
      maxWidth={1480}
      height="20"
      mx="auto"
      marginTop="4"
      align="center"
      px="6"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        DashGo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>
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

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Hugo Alves</Text>
            <Text color="gray.300" fontSize="small">
              hugovarellaa@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Hugo Alves"
            src="https://github.com/Hugovarellaa.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
