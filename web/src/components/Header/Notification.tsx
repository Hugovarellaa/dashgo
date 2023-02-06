import { Icon, Stack } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Notification() {
  return (
    <Stack
      spacing="8"
      direction="row"
      marginX="8"
      paddingRight="8"
      paddingY="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </Stack>
  )
}
