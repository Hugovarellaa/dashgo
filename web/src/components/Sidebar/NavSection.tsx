import { Box, Stack, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface NavSectionProps {
  name: string
  children: ReactNode
}

export function NavSection({ name, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {name}
      </Text>
      <Stack spacing="4" marginTop="8" alignItems="stretch">
        {children}
      </Stack>
    </Box>
  )
}
