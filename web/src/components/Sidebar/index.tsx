import { useSidebarDrawer } from '@/src/context/SidebarDrawerContext'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from '@chakra-ui/react'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { disclosure } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={disclosure.isOpen}
        placement="left"
        onClose={disclosure.onClose}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.900" padding="8">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" width="64" marginRight={8}>
      <SidebarNav />
    </Box>
  )
}
