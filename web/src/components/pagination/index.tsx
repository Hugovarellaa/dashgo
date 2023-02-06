import { Box, Stack } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      marginTop="8"
      justifyContent="space-between"
      alignItems="center"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem isCurrentPage pageNumber={1} />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
        <PaginationItem pageNumber={6} />
        <PaginationItem pageNumber={7} />
      </Stack>
    </Stack>
  )
}
