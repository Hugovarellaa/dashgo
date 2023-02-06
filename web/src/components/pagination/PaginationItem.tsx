import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrentPage?: boolean
  pageNumber: number
}

export function PaginationItem({
  isCurrentPage = false,
  pageNumber,
}: PaginationItemProps) {
  return isCurrentPage ? (
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
      {pageNumber}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      backgroundColor="gray.700"
      _hover={{ backgroundColor: 'pink.500' }}
    >
      {pageNumber}
    </Button>
  )
}
