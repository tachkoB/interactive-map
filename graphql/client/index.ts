import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = 'https://countries.trevorblades.com';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default client;
