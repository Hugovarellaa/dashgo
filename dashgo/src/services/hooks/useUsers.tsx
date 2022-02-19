import { useQuery } from "react-query";
import { api } from "../axios/api";

export function useUsers() {
  return useQuery(
    "users",
    async () => {
      const { data } = await api.get("http://localhost:3000/api/users");
      //formatação dos dados
      const users = data.users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          createAt: new Date(user.createAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        };
      });

      return users;
    },
    {
      staleTime: 1000 * 5,
    }
  );
}
