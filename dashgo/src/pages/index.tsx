import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Stack,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function Home() {
  return (
    <>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="6">
            <Input name="email" label="E-mail" type="email" />
            <Input name="password" label="Senha" type="password" />
          </Stack>
          <Button type="submit" marginTop="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
