import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  SimpleGrid,
  HStack,
  Button
} from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";
import { Input } from "../../components/Form/Input";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">
            {" "}
            Criar usuário{" "}
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" type="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input
                name="password_Confirmation"
                type="password"
                label="Confirmação de senha"
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
                <Button colorScheme="whiteAlpha"> Cancelar </Button>
                <Button colorScheme="pink"> Salvar </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
