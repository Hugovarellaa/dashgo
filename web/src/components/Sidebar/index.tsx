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
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  return isDrawerSidebar ? (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent backgroundColor="gray.800" padding="4">
          <DrawerCloseButton marginTop="6" />
          <DrawerHeader>Navegação</DrawerHeader>
          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  ) : (
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  )
}
