import { Flex, Icon, Input, Stack, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1480}
      height="20"
      marginX="auto"
      paddingX="6"
      marginTop="4"
      alignItems="center"
    >
      {/* Logo */}
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" width="64">
        DashGo
        <Text as="span" marginLeft="1" color="pink.500">
          .
        </Text>
      </Text>

      {/* SearchBox */}
      <Flex
        as="label"
        flex={1}
        paddingY="4"
        paddingX="8"
        marginLeft="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        backgroundColor="gray.800"
        position="relative"
        borderRadius="full"
      >
        <Input
          variant="unstyled"
          color="gray.50"
          paddingX="4"
          marginRight="4"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: 'gray.400',
          }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex alignItems="center" marginLeft="auto">
        {/* Notification */}
        <Stack
          spacing="8"
          direction="row"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </Stack>
        {/* Profile */}
      </Flex>
    </Flex>
  )
}
