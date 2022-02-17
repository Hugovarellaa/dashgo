import { Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import {
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
        mt="4"
        px="10"
        align="center"
      >
        {/* Logo */}
        <Text fontSize="3xl" letterSpacing="tight" width="64">
          DashGo
          <Text as="span" color="pink.500" m="1">
            .
          </Text>
        </Text>

        {/* SearchBox */}
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

        {/* Notification */}
        <Flex alignItems="center" ml="auto">
          <Stack
            spacing="8"
            direction="row"
            mx="8"
            pr="8"
            py="1"
            color="gray.300"
            borderRightWidth={1}
            borderColor="gray.700"
          >
            <Icon as={RiNotificationLine} fontSize="20" />
            <Icon as={RiUserAddLine} fontSize="20" />
          </Stack>
        </Flex>
      </Flex>
    </>
  );
}
