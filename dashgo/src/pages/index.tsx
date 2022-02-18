import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
interface IFormValues {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha inválida"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<FieldValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <>
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
          background="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing="6">
            <Input
              label="E-mail"
              type="email"
              {...register("email")}
              error={errors.email}
            />
            <Input
              label="Senha"
              type="password"
              {...register("password")}
              error={errors.password}
            />
          </Stack>
          <Button
            type="submit"
            marginTop="6"
            colorScheme="pink"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
