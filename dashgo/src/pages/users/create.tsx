import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <HStack spacing="8">
            <SimpleGrid minChildWidth="240" spacing={["6", "8"]} width="100%">
              <Input name="name" label="Nome Completo" />
              <Input type="email" name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240" spacing="8" width="100%">
              <Input type="password" name="password" label="password" />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirme seu password"
              />
            </SimpleGrid>
          </HStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
