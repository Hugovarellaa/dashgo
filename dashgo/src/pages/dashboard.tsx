import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header/index";
import { Siderbar } from "../components/Siderbar";

export default function dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />
      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />
      </Flex>
    </Flex>
  );
}
