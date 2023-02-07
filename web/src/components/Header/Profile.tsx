import { useAuth } from '@/src/context/AuthContext'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = false }: ProfileProps) {
  const { user } = useAuth()
  return (
    <Flex alignItems="center">
      {showProfileData && (
        <Box marginRight="4" textAlign="right">
          <Text>Hugo Alves Varella</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Hugo Alves Varella"
        src="https://github.com/Hugovarellaa.png"
      />
    </Flex>
  )
}
