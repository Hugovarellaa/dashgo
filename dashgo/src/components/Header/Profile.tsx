import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box mr="6" textAlign="right">
          <Text>Hugo Alves Varella</Text>
          <Text color="gray.300" fontSize="small">
            hugovarellaa@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Hugo Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  );
}
