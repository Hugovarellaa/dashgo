import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex alignItems="center">
      <Box mr="6" textAlign="right">
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
  );
}
