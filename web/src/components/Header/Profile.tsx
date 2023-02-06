import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box marginRight="4" textAlign="right">
        <Text>Hugo Alves Varella</Text>
        <Text color="gray.300" fontSize="small">
          hugovarella@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Hugo Alves Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  )
}
