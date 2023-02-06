import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

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
          backgroundColor="gray.800"
          padding=" 8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack>
            <FormControl>
              <FormLabel htmlFor="email">Digite seu E-mail</FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                focusBorderColor="purple.500"
                backgroundColor="gray.900"
                variant="filled"
                _hover={{
                  backgroundColor: "gray.900",
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Digite sua senha</FormLabel>
              <Input
                name="password"
                id="password"
                type="password"
                focusBorderColor="purple.500"
                backgroundColor="gray.900"
                variant="filled"
                _hover={{
                  backgroundColor: "gray.900",
                }}
              />
            </FormControl>
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="purple">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
