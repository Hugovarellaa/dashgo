import { Button } from '@chakra-ui/react'

interface PaginationItemProps {
  isCurrent?: boolean
  page: number
}

export function PaginationItem({
  isCurrent = false,
  page,
}: PaginationItemProps) {
  return isCurrent ? (
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
      {page}
    </Button>
  ) : (
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
      {page}
    </Button>
  )
}
