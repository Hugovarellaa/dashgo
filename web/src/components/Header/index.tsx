import { useSidebarDrawer } from '@/src/context/SidebarDrawerContext'
import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { Logo } from './Logo'
import { Notification } from './Notification'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()
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
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="32"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        />
      )}

      <Logo />
      {isWideVersion && <SearchBox />}

      <Flex alignItems="center" marginLeft="auto">
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
