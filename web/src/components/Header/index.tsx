import { useSidebarDrawer } from '@/src/context/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { NotificationNav } from './NotificationNav'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const { disclosure } = useSidebarDrawer()

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

      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={disclosure.onOpen}
          marginRight="2"
        />
      )}

      {isWideVersion && <Search />}

      <Flex alignItems="center" marginLeft="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
