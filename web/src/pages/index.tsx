import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'

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
            <FormControl>
              <FormLabel htmlFor="email">Digite seu E-mail</FormLabel>
              <Input
                name="email"
                id="email"
                type="email"
                focusBorderColor="pink.500"
                backgroundColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                  backgroundColor: 'gray.900',
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="password">Digite sua senha</FormLabel>
              <Input
                name="password"
                id="password"
                type="password"
                focusBorderColor="pink.500"
                backgroundColor="gray.900"
                variant="filled"
                size="lg"
                _hover={{
                  backgroundColor: 'gray.900',
                }}
              />
            </FormControl>
          </VStack>
          <Button type="submit" marginTop="6" colorScheme="pink">
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
