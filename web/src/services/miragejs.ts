import fake from 'faker'
import { createServer, Factory, Model } from 'miragejs'

type User = {
  name: string
  email: string
  created_at: string
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(index) {
          return `User ${index + 1}`
        },
        email() {
          return fake.internet.email().toLocaleLowerCase()
        },
        createdAt() {
          return fake.date.recent()
        },
      }),
    },

    seeds(server) {
      server.createList('user', 10)
    },

    routes() {
      this.namespace = 'api'
      this.timing = 750

      // Shorthand
      this.get('/users')
      this.post('/users')

      // Retorno para vazia as rotas do mirage.js, assim nao prejudicar as API Routes do next
      this.namespace = ''

      this.passthrough()
    },
  })

  return server
}
