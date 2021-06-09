import { IResolvers } from 'graphql-tools';
import { merge } from 'lodash';
import { UserResolvers } from './resolvers/UserResolver';

export const resolverMap: IResolvers = merge(UserResolvers);

export default resolverMap;
