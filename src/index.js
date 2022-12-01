import { 
    createServer,
    createPubSub 
  } from '@graphql-yoga/node'
import db from './db'
import Mensagem from './resolvers/Mensagem'
import Mutation from './resolvers/Mutation'
import Query from './resolvers/Query'
import Topico from './resolvers/Topico'
import Subscription from './resolvers/Subscription'
import Usuario from './resolvers/Usuario'
import * as fs from 'fs'
import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';


const pubSub = createPubSub()

const resolvers = {
    Query,
    Mensagem,
    Topico,
    Usuario,
    Mutation,
    Subscription
}

const server = createServer({
    schema: {
      typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'), 
      resolvers
    },
    context: {
      db: db,
      pubSub: pubSub
    }
  })

server.start(() => {
 'Servidor funcionando...'
})
