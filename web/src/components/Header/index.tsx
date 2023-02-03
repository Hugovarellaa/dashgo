import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Notification } from './Notification'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />

      <Search />

      <Flex alignItems="center" marginLeft="auto">
        <Notification />

        <Profile />
      </Flex>
    </Flex>
  )
}
