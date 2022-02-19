import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/axios/api";
import { queryClient } from "../../services/react-query/queryClient";
import { useRouter } from "next/router";

const createUseFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha inválida")
    .min(6, "Sua senha tem ter no mínimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

interface IFormValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export default function CreateUser() {
  const router = useRouter();

  const createUser = useMutation(
    async (user: IFormValues) => {
      const response = await api.post("users", {
        user: {
          ...user,
          create_at: new Date(),
        },
      });
      return response.data.user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("users");
        router.push("/users");
      },
    }
  );

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUseFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<IFormValues> = async (values) => {
    await createUser.mutateAsync(values);
  };

  return (
    <>
      <Box>
        <Header />

        <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="10">
          <Sidebar />

          <Box
            as="form"
            onSubmit={handleSubmit(handleCreateUser)}
            flex="1"
            borderRadius={8}
            background="gray.800"
            p={["6", "8"]}
          >
            <Heading size="lg" fontWeight="normal">
              Criar usuário
            </Heading>

            <Divider my="6" borderColor="gray.700" />

            <VStack spacing="8">
              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <Input
                  label="Nome completo"
                  {...register("name")}
                  error={errors.name}
                />
                <Input
                  label="E-mail"
                  type="email"
                  {...register("email")}
                  error={errors.email}
                />
              </SimpleGrid>

              <SimpleGrid
                minChildWidth="240px"
                spacing={["6", "8"]}
                width="100%"
              >
                <Input
                  label="Senha"
                  type="password"
                  {...register("password")}
                  error={errors.password}
                />
                <Input
                  label="Confirme sua senha"
                  type="password"
                  {...register("password_confirmation")}
                  error={errors.password_confirmation}
                />
              </SimpleGrid>
            </VStack>
            <Flex mt="8" justify="flex-end">
              <HStack spacing="4">
                <Link href="/users" passHref>
                  <Button colorScheme="whiteAlpha">Cancelar</Button>
                </Link>
                <Button
                  type="submit"
                  colorScheme="pink"
                  isLoading={formState.isSubmitting}
                >
                  Salvar
                </Button>
              </HStack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
