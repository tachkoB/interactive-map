import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      languages {
        name
      }
    }
  }
`;
