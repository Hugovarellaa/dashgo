import { useQuery } from 'react-query'
import { api } from '../services/axios'

interface UserDataFetch {
  id: string
  name: string
  email: string
  createdAt: string
}

export function useUsers() {
  return useQuery(
    'users',
    async () => {
      const { data } = await api.get('users')

      // Formatação de dados
      const users = data.users.map((user: UserDataFetch) => {
        return {
          id: user.id,
          name: user.name,
          email: user.email,
          created_at: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          }),
        }
      })

      return users
    },
    {
      // Tempo que a lib nao faz um Re-fetch
      staleTime: 1000 * 10, // 5 seg
    },
  )
}
