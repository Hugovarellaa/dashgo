import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

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
          <FormControl>
            <FormLabel htmlFor="email">Digite seu E-mail </FormLabel>
            <Input
              type="email"
              name="email"
              id="email"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Digite sua Senha</FormLabel>
            <Input
              type="password"
              name="password"
              id="password"
              focusBorderColor="pink.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{
                backgroundColor: 'gray.900',
              }}
              size="lg"
            />
          </FormControl>
        </VStack>

        <Button type="submit" mt="6" colorScheme="pink">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
