import { useQuery } from "react-query";
import { api } from "../axios/api";

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
};

type IGetUserResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<IGetUserResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });
  const totalCount = Number(headers["x-total-count"]);

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

  return {
    users,
    totalCount,
  };
}

export function useUsers(page: number) {
  return useQuery(
    ["users", page],
    () => getUsers(page),

    {
      staleTime: 1000 * 60 * 5, //5 minutes
    }
  );
}
