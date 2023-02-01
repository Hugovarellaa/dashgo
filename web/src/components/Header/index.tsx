import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      mt="4"
      paddingX="6"
      alignItems="center"
    >
      <Logo />

      {isWideVersion && <Search />}

      <Flex alignItems="center" marginLeft="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
