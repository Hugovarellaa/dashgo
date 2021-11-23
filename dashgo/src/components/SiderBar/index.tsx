import {
  Box,
  Drawer,
  useBreakpointValue,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useSiderBarDrawer } from "../../contexts/SiderBarDrawerContext";
import { SiderBarNav } from "./SiderBarNav";

export function SiderBar() {
  const { isOpen, onClose } = useSiderBarDrawer();

  const isDraweSideBar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDraweSideBar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navergação</DrawerHeader>
            <DrawerBody>
              <SiderBarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w="64" mr="8">
      <SiderBarNav />
    </Box>
  );
}
