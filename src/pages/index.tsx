import { Flex, Button, Stack } from "@chakra-ui/react"
import { Input } from "../components/Form/Input"

export default function SignIn() {
  return (
    <Flex
      w="100wh"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%" maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="senha" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink"> Entrar </Button>
      </Flex>
    </Flex>
  )
}
