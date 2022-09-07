import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const URL = 'https://countries.trevorblades.com';

const client = new ApolloClient({
  link: new HttpLink({ uri: URL, fetch }),
  cache: new InMemoryCache(),
});

export default client;
