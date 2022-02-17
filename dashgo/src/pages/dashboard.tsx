import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="10">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="300px"
          alignItems="flex-start"
        >
          <Box p="8" background="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>

          <Box p="8" background="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
