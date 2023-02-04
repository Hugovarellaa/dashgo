import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useAuth();

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();
    const data = { email, password };
    await signIn(data);
  }
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
          backgroundColor="gray.800"
          padding="8"
          borderRadius={8}
          width="100"
          maxWidth={400}
          flexDirection="column"
          onSubmit={handleSignIn}
        >
          <Stack spacing="4">
            <FormControl>
              <FormLabel htmlFor="email">Digite seu E-mail</FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                focusBorderColor="purple.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: "gray.900",
                }}
                size="lg"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Digite sua senha</FormLabel>
              <Input
                name="password"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                focusBorderColor="purple.500"
                bgColor="gray.900"
                variant="filled"
                _hover={{
                  bgColor: "gray.900",
                }}
                size="lg"
              />
            </FormControl>
          </Stack>
          <Button type="submit" colorScheme="purple" marginTop="4">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
