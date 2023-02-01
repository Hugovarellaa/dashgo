import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrentPage?: boolean
  numberPage: number
}

export function PaginationItem({
  isCurrentPage = false,
  numberPage,
}: PaginationItemProps) {
  return isCurrentPage ? (
    <Button
      size="sm"
      fontSize="xs"
      colorScheme="pink"
      disabled
      _disabled={{
        backgroundColor: 'pink.500',
        cursor: 'default',
      }}
    >
      {numberPage}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      backgroundColor="gray.700"
      _hover={{
        backgroundColor: 'gray.500',
      }}
    >
      {numberPage}
    </Button>
  )
}
