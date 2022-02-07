import { Box } from "@chakra-ui/react";
import { SiderBarNav } from "./SiderBarNav";

export function Siderbar() {
  return (
    <Box as="aside" width="64" mr="8">
      <SiderBarNav />
    </Box>
  );
}
