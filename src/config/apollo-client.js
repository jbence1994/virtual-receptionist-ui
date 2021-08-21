import { ApolloClient, InMemoryCache } from "@apollo/client";

import endpoint from "./endpoints.json";

const getApolloClient = () => {
  return new ApolloClient({
    uri: endpoint.GraphQL,
    cache: new InMemoryCache(),
  });
};

export default getApolloClient;
