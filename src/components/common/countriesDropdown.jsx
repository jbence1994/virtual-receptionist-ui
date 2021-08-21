import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_COUNTRIES_QUERY } from "../../graphql/queries/query";
import Dropdown from "./dropdown";

const CountriesDropdown = () => {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);

  if (loading) {
    return <p>{loading}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { countries } = data;

  return (
    <Dropdown
      dataCollection={countries}
      keyPropertyName="id"
      displayPropertyName="name"
    />
  );
};

export default CountriesDropdown;
