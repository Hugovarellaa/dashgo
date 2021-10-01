import { Flex } from "@chakra-ui/react";
import { Logo } from "../Header/Logo";
import { NotifcationsNav } from "../Header/NoticationsNav";
import { Profile } from "../Header/Profile";
import { SearchBox } from "../Header/SearchBox";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />
      <SearchBox />

      <Flex align="center" ml="auto">
        <NotifcationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
}
