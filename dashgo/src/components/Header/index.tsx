import { Avatar, Box, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import {
  RiNotification2Line,
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

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

        {/* Notificações */}
        <Flex align="center" ml="auto">
          <Stack
            direction="row"
            spacing="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiNotificationLine} />
            <Icon as={RiUserAddLine} />
          </Stack>
          {/* Profile */}
          <Flex align="center">
            <Box mr="4" textAlign="right">
              <Text>Hugo Alves Varella</Text>
              <Text color="gray.300" fontSize="sm">
                hugovarellaa@gmail.com
              </Text>
            </Box>
            <Avatar
              fontSize="md"
              name="Hugo Varella"
              src="https://github.com/Hugovarellaa.png"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
