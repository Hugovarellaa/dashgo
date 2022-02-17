import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text fontSize="3xl" letterSpacing="tight" width="64">
      DashGo
      <Text as="span" color="pink.500" m="1">
        .
      </Text>
    </Text>
  );
}
