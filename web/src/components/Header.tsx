import { Flex, Text } from '@chakra-ui/react'

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
    </Flex>
  )
}
