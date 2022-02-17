import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
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
        <Logo />
        <SearchBox />

        <Flex alignItems="center" ml="auto">
          <Notification />
          <Profile showProfileData={isWiderVersion} />
        </Flex>
      </Flex>
    </>
  );
}
