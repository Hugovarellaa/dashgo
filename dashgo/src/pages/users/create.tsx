import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
} from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Siderbar } from "../../components/Siderbar";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";
import { useRouter } from "next/router";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup
    .string()
    .required("Senha obrigatório")
    .min(6, "A senha precisa ter no minimo 6 caracteres"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais"),
});

export default function CreateUser() {
  const router = useRouter();
  const createUser = useMutation(
    async (user: CreateUserFormData) => {
      const response = await api.post("/users", {
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
      },
    }
  );

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (value) => {
    await createUser.mutateAsync(value);
    router.push("/users");
  };

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <Box
          as="form"
          flex="1"
          borderRadius={8}
          backgroundColor="gray.800"
          padding={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>
          <Divider my="6" borderColor="gray.700"></Divider>
          <HStack spacing="8">
            <SimpleGrid minChildWidth="240" spacing={["6", "8"]} width="100%">
              <Input
                name="name"
                label="Nome Completo"
                {...register("name")}
                err={errors.name}
              />
              <Input
                type="email"
                name="email"
                label="E-mail"
                {...register("email")}
                err={errors.email}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240" spacing="8" width="100%">
              <Input
                type="password"
                name="password"
                label="password"
                {...register("password")}
                err={errors.password}
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirme seu password"
                {...register("password_confirmation")}
                err={errors.password_confirmation}
              />
            </SimpleGrid>
          </HStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>

              <Button
                colorScheme="pink"
                type="submit"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
