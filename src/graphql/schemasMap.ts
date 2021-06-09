import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import * as userTypeDefs from './schemas/user.graphql';
import * as emptyTypeDefs from './schemas/empty.graphql';
import resolvers from './resolversMap';
import { GraphQLSchema } from 'graphql';

/**
 * Be careful here with the order in the typeDefs array. the emptyTypeDefs MUST
 * be the first in the array or this is not going to work.
 */
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [emptyTypeDefs, userTypeDefs],
  resolvers,
});

export default schema;
