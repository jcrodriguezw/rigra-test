import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { PRODUCTS, ORDERS } from '../graphql/queries';
import { products } from '../utils/data';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
});

cache.writeQuery({
  query: PRODUCTS,
  data: {
    products,
  },
});

cache.writeQuery({
  query: ORDERS,
  data: {
    orders: [],
  },
});

export default client;
