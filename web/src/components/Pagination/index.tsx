import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      spacing="6"
      alignItems="center"
      justifyContent="space-between"
      marginTop="8"
      direction={['column', 'row']}
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction={['row']} spacing="2">
        <PaginationItem page={1} isCurrent />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
        <PaginationItem page={5} />
        <PaginationItem page={6} />
      </Stack>
    </Stack>
  )
}
