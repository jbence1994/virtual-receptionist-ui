import { gql } from "@apollo/client";

const GET_ALL_COUNTRIES_QUERY = gql`
  query {
    countries {
      id
      name
    }
  }
`;

export default GET_ALL_COUNTRIES_QUERY;
