import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSiderbarDrawer } from "../../contexts/SiderbarContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSiderbarDrawer();
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      width="100%"
      maxWidth={1480}
      height="20"
      mx="auto"
      marginTop="4"
      align="center"
      px="6"
    >
      {!isWiderVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          aria-label="Open Navigation"
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          marginRight="2"
        ></IconButton>
      )}
      <Logo />

      {isWiderVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWiderVersion} />
      </Flex>
    </Flex>
  );
}
