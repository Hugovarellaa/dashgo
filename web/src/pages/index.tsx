import { Button, Flex, VStack } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '../components/form/Input'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Digite um email valido')
      .required('E-mail e obrigatório'),
    password: yup.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
  })
  .required()

type FormData = {
  email: string
  password: string
}

export default function Home() {
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  })
  const { isSubmitting, errors } = formState

  async function handleSignIn(data: FormData) {
    // return new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>Home | Ig.news</title>
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
          maxWidth="360px"
          backgroundColor="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <VStack spacing="4">
            <Input
              id="email"
              type="email"
              label="Digite seu E-mail"
              {...register('email')}
              error={errors.email}
            />
            <Input
              id="password"
              type="password"
              label="Digite sua senha"
              {...register('password')}
              error={errors.password}
            />
          </VStack>
          <Button
            type="submit"
            marginTop="6"
            colorScheme="pink"
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
