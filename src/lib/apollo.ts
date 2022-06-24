import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = import.meta.env.VITE_GRAPH_CMS_URL;
const API_TOKEN = import.meta.env.VITE_GRAPH_CMS_TOKEN;

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
