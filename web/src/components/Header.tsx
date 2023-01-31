import { Flex, Icon, Input, Text } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

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
    </Flex>
  )
}
