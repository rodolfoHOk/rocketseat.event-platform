import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4nl3p6g087g01xpaa2e6x5p/master',
  cache: new InMemoryCache(),
});
