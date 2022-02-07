import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ShowProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ShowProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hugo Alves</Text>
          <Text color="gray.300" fontSize="small">
            hugovarellaa@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Hugo Alves"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  );
}
