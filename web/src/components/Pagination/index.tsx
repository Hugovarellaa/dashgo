import { Box, Button, Stack } from '@chakra-ui/react'

export function Pagination() {
  return (
    <Stack
      spacing="6"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            backgroundColor: 'pink.500',
            cursor: 'default',
          }}
        >
          1
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          disabled
          _hover={{
            backgroundColor: 'pink.500',
          }}
        >
          2
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          disabled
          _hover={{
            backgroundColor: 'pink.500',
          }}
        >
          3
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          backgroundColor="gray.700"
          disabled
          _hover={{
            backgroundColor: 'pink.500',
          }}
        >
          4
        </Button>
      </Stack>
    </Stack>
  )
}
