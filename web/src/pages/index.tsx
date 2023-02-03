import { Button, Flex, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { Input } from '../components/form/Input'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
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
          flexDirection="column"
          bg="gray.800"
          padding="8"
          borderRadius={8}
        >
          <VStack spacing="4">
            <Input
              name="email"
              id="email"
              type="email"
              label="Digite seu E-mail"
            />
            <Input
              name="password"
              id="password"
              type="password"
              label="Digite sua Senha"
            />
          </VStack>
          <Button type="submit" marginTop="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
