import { Button, Flex, VStack } from '@chakra-ui/react'
import { Input } from '../components/form/Input'

export default function Home() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        as="form"
        flexDirection="column"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
      >
        <VStack spacing="4">
          <Input name="email" label="Digite seu E-mail" type="email" />
          <Input name="password" label="Digite sua Senha" type="password" />
        </VStack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
