import { Avatar, Box, Flex, HStack, Icon, Input, Text } from '@chakra-ui/react'
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      mt="4"
      paddingX="6"
      alignItems="center"
    >
      {/* Logo */}
      <Text fontSize="3xl" letterSpacing="tight" width="64" fontWeight="bold">
        DashGo
        <Text as="span" color="pink.500" ml="1">
          .
        </Text>
      </Text>

      {/* SearchBox */}
      <Flex
        as="label"
        flex="1"
        paddingY="4"
        paddingX="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        backgroundColor="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{
            color: 'gray.400',
          }}
          paddingX="4"
          marginRight="4"
        />
        <Icon as={RiSearchLine} fontSize={20} />
      </Flex>

      {/* Profile */}
      <Flex alignItems="center" marginLeft="auto">
        <HStack
          spacing="8"
          marginX="8"
          paddingRight="8"
          paddingY="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize={20} />
          <Icon as={RiUserAddLine} fontSize={20} />
        </HStack>

        <Flex alignItems="center">
          <Box marginRight="4" textAlign="right">
            <Text>Hugo Alves Varella</Text>
            <Text color="gray.300" fontSize="small">
              hugovarellaa@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Hugo Varella"
            src="https://github.com/Hugovarellaa.png"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
