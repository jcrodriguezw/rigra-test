import { gql } from '@apollo/client';

export const ADD_ORDER = gql`
  mutation AddOrder {
    addOrder @client {
      id
    }
  }
`;
