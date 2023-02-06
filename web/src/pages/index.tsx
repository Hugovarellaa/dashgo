import { Button, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import { Input } from '../components/form/Input'

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
            <Input name="email" type="email" label="Digite seu E-mail" />
            <Input name="password" type="password" label="Digite sua Senha" />
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="purple" size="lg">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
