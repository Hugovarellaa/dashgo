import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text fontSize="3xl" letterSpacing="tight" width="64" fontWeight="bold">
      DashGo
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  )
}
