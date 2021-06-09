import { IResolvers } from 'graphql-tools';
import { AuthenticateResponse, MutationRegisterArgs, QueryLoginArgs } from '../generated';

export const UserResolvers: IResolvers = {
  Query: {
    async login(_: void, _args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return {
        token: 'abcd',
      };
    },
  },

  Mutation: {
    async register(_: void, _args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: 'abcd',
      };
    },
  },
};
