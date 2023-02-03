import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>Hugo Alves Varella</Text>
        <Text color="gray.300" fontSize="sm">
          hugovarellaa@gmail.com
        </Text>
      </Box>

      <Avatar
        name="Hugo Alves Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  )
}
