import { useSidebarDrawer } from '@/src/context/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { Notification } from './Notification'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { disclosure } = useSidebarDrawer()

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
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="32"
          variant="unstyled"
          onClick={disclosure.onOpen}
          marginRight="2"
        />
      )}

      <Logo />

      {isWideVersion && <Search />}

      <Flex alignItems="center" marginLeft="auto">
        <Notification />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
