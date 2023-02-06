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
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'

const schema = zod
  .object({
    name: zod.string().min(4, 'O nome precisa ter no mínimo 4 caracteres'),
    email: zod.string().email('Digite um email valido'),
    password: zod.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
    password_confirmation: zod.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As senhas precisam ser iguais',
    path: ['password_confirmation'], // path of error
  })

type formData = zod.infer<typeof schema>

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<formData>({
    resolver: zodResolver(schema),
  })

  const { errors, isSubmitting } = formState

  async function handleCreateUsers(data: formData) {
    return new Promise((resolve) => setTimeout(resolve, 3000))
    // console.log(data)
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
          flex={1}
          borderRadius={8}
          backgroundColor="gray.800"
          padding={['6', '8']}
          as="form"
          onSubmit={handleSubmit(handleCreateUsers)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider marginY="6" borderColor="gray.700" />

          <VStack spacing={['6', '8']}>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="name"
                label="Nome Completo"
                {...register('name')}
                error={errors.name}
              />
              <Input
                name="email"
                label="E-mail"
                type="email"
                {...register('email')}
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} width="100%">
              <Input
                name="password"
                label="Senha"
                type="password"
                {...register('password')}
                error={errors.password}
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmação de senha"
                {...register('password_confirmation')}
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex align="center" justifyContent="flex-end" marginTop={['6', '8']}>
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
                colorScheme="purple"
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
