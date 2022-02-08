/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
};

type GetUsersResponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const users = data.users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createAt: new Date(user.createAt).toLocaleDateString("pt-br", {
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

export function userUsers(page: number) {
  return useQuery(["users", page], () => getUsers(page), {
    // Tempo que os dados serao considerado como fresh
    staleTime: 1000 * 5, // 5seconds
  });
}
