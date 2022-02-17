import { Avatar, Box, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { profile } from "console";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
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
        {/* Logo */}
        <Text fontSize="3xl" letterSpacing="tight" width="64">
          DashGo
          <Text as="span" color="pink.500" m="1">
            .
          </Text>
        </Text>

        <SearchBox />
        <Notification />
        <Profile />
      </Flex>
    </>
  );
}
