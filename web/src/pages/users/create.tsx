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
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Nome e obrigatório'),
  email: yup
    .string()
    .email('Digite um email valido')
    .required('E-mail e obrigatório'),
  password: yup.string().min(6, 'Senha minima tem 6 números ou caracteres'),
  password_confirmation: yup
    .string()
    .min(6, 'Senha minima tem 6 números ou caracteres')
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

type SchemaFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function CreateUser() {
  const { handleSubmit, register, formState } = useForm<SchemaFormData>({
    resolver: yupResolver(schema),
  })

  const { isSubmitting, errors } = formState

  const handleCreateUserForm: SubmitHandler<SchemaFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
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
          bg="gray.800"
          padding={['6', '8']}
          onSubmit={handleSubmit(handleCreateUserForm)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                label="Nome Completo"
                type="text"
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
                label="Digite sua senha"
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
          <Flex mt="8" justifyContent="flex-end">
            <HStack spacing="4">
              <Link href="/users" legacyBehavior>
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
