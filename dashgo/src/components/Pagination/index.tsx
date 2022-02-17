import { Box, Button, HStack, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      flexDirection="row"
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong> 10 </strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{ background: "pink.500", cursor: "default" }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: "pink.500",
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          background="gray.700"
          _hover={{
            background: "pink.500",
          }}
        >
          3
        </Button>
      </HStack>
    </Stack>
  );
}
