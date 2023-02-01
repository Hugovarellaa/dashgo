import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem numberPage={1} isCurrentPage />
        <PaginationItem numberPage={2} />
        <PaginationItem numberPage={3} />
        <PaginationItem numberPage={4} />
        <PaginationItem numberPage={5} />
        <PaginationItem numberPage={6} />
      </Stack>
    </Stack>
  )
}
