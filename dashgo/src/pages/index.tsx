import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Flex width="100vw" height="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          background="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="email">E-mail</FormLabel>
              <Input
                name="email"
                type="email"
                focusBorderColor="pink.500"
                background="gray.900"
                variant="filled"
                _hover={{
                  background: "gray.900",
                }}
                size="lg"
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Senha</FormLabel>
              <Input
                name="password"
                type="password"
                focusBorderColor="pink.500"
                background="gray.900"
                variant="filled"
                _hover={{
                  background: "gray.900",
                }}
                size="lg"
              />
            </FormControl>
          </Stack>
          <Button type="submit" marginTop="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
