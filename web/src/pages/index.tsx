/* eslint-disable no-new */
import { Button, Flex, Stack } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { Input } from '../components/form/Input'

const schema = zod.object({
  email: zod.string().email('Digite um email valido'),
  password: zod.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
})

type formData = zod.infer<typeof schema>

export default function Home() {
  const { register, handleSubmit, formState } = useForm<formData>({
    resolver: zodResolver(schema),
  })

  const { isSubmitting, errors } = formState

  async function handleSignIn(data: formData) {
    // return new Promise((resolve) => setTimeout(resolve, 3000))
    console.log(data)
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
          width="100%"
          maxWidth={360}
          backgroundColor="gray.800"
          padding=" 8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="6">
            <Input
              name="email"
              type="email"
              label="Digite seu E-mail"
              {...register('email')}
              error={errors.email}
            />
            <Input
              name="password"
              type="password"
              label="Digite sua Senha"
              {...register('password')}
              error={errors.password}
            />
          </Stack>

          <Button
            type="submit"
            marginTop="6"
            colorScheme="purple"
            size="lg"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}
