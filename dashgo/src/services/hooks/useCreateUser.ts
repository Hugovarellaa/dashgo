import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { api } from "../axios/api";
import { queryClient } from "../react-query/queryClient";

interface IFormValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export function useCreateUser() {
  const router = useRouter();
  return useMutation(
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
}
