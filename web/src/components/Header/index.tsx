import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { Logo } from './Logo'
import { Notification } from './Notification'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      width="100%"
      as="header"
      maxWidth={1480}
      height="20"
      marginX="auto"
      paddingX="6"
      marginTop="4"
      alignItems="center"
    >
      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" marginLeft="auto">
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
