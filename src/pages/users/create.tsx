import {
  Box,
  Flex,
  Heading,
  Divider,
  HStack,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="6">
          <Heading size="lg" fontWeight="normal">
            Cria usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />

          <HStack spacing="8">
            <SimpleGrid minChildWidth="240" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" type="email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240" spacing="8" w="100%">
              <Input name="password" label="Senha" type="password" />
              <Input
                name="password_confirm"
                label="Confirmação de senha"
                type="password"
              />
            </SimpleGrid>
          </HStack>

          <Flex mt="8" justify="flex-end">
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
