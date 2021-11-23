import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Hugo Alves Varella</Text>
        <Text color="gray.300" fontSize="small">
          hugovarellaa@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Hugo Alves Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  );
}
