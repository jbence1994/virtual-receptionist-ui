import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import getApolloClient from "./config/apolloClient";

ReactDOM.render(
  <ApolloProvider client={getApolloClient()}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
