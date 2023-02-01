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
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const { disclosure } = useSidebarDrawer()

  if (isDrawerSidebar) {
    return (
      <Drawer
        isOpen={disclosure.isOpen}
        placement="left"
        onClose={disclosure.onClose}
      >
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="8">
            <DrawerCloseButton mt="6" />
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
    <Box as="aside" width="64" marginRight="8">
      <SidebarNav />
    </Box>
  )
}
