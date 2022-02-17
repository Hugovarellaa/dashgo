import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebar } from "../../context/SidebarDrawerContext";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebar();
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <>
      <Flex
        as="header"
        width="100%"
        maxWidth={1480}
        height="20"
        mx="auto"
        mt="4"
        px="10"
        align="center"
      >
        {!isWiderVersion && (
          <IconButton
            aria-label="Open is menu Navegation"
            icon={<Icon as={RiMenuLine} />}
            fontSize="24"
            variant="unstyled"
            onClick={onOpen}
            mr="2"
          ></IconButton>
        )}
        <Logo />
        {isWiderVersion && <SearchBox />}

        <Flex alignItems="center" ml="auto">
          <Notification />
          <Profile showProfileData={isWiderVersion} />
        </Flex>
      </Flex>
    </>
  );
}
