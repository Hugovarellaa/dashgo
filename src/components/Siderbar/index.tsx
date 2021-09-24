import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useSiderbarDrawer } from "../../contexts/SiderBarDrawerContext";
import { SiderbarNav } from "./SiderbarNav";

export function Siderbar() {
  const { isOpen, onClose } = useSiderbarDrawer();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SiderbarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SiderbarNav />
    </Box>
  );
}
