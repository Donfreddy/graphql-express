import express, { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schemasMap';

async function startApolloServer(): Promise<{ server: ApolloServer; app: Express }> {
  const app = express();

  const server = new ApolloServer({ schema: schema });

  server.applyMiddleware({ app });

  await new Promise((resolve: any) => app.listen({ port: 4000 }, resolve));

  console.log(`\n🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}

startApolloServer();
