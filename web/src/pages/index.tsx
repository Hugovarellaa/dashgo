import { Button, Flex, VStack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/form/Input'

interface SignInFormData {
  email: string
  password: string
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>()

  const { isSubmitting } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <VStack spacing="4">
          <Input
            label="Digite seu E-mail"
            type="email"
            {...register('email')}
          />
          <Input
            label="Digite sua Senha"
            type="password"
            {...register('password')}
          />
        </VStack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
