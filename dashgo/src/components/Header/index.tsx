import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
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
      <Logo />

      {isWiderVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWiderVersion} />
      </Flex>
    </Flex>
  );
}
