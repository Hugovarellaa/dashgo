import { Input } from '@/src/components/form/Input'
import { Header } from '@/src/components/Header'
import { Sidebar } from '@/src/components/Sidebar'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required('O nome e obrigatório'),
    email: yup
      .string()
      .email('Digite um email valido')
      .required('E-mail e obrigatório'),
    password: yup.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    password_confirmation: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
  })
  .required()

type FormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const { handleSubmit, register, formState } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const { isSubmitting, errors } = formState

  async function handleCreateUser(data: FormData) {
    // return new Promise((resolve) => setTimeout(resolve, 2000))
    console.log({ data })
  }

  return (
    <Box>
      <Header />

      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding="8"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                label="Nome Completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                label="E-mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password}
              />
              <Input
                label="Confirmação da senha"
                type="password"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex marginTop="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button
                  colorScheme="whiteAlpha"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Cancelar
                </Button>
              </Link>
              <Button
                colorScheme="pink"
                type="submit"
                isLoading={isSubmitting}
                disabled={isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
