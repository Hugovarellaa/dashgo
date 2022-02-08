/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from "react-query";
import { api } from "../../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createAt: string;
};

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("http://localhost:3000/api/users");

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

  console.log(users);

  return users;
}

export function userUsers() {
  return useQuery("users", getUsers, {
    // Tempo que os dados serao considerado como fresh
    staleTime: 1000 * 5, // 5seconds
  });
}
