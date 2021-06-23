import { gql } from '@apollo/client';

export const PRODUCTS = gql`
  query Products {
    products {
      id
      name
      price
      image
    }
  }
`;

export const ORDERS = gql`
  query Orders {
    orders {
      id
      total
    }
  }
`;
