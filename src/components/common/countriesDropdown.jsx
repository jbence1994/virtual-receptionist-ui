import React from "react";
import { useQuery } from "@apollo/client";

import Dropdown from "./dropdown";

import GET_ALL_COUNTRIES_QUERY from "../../graphql/queries/getAllCountriesQuery";

const CountriesDropdown = () => {
  const { loading, error, data } = useQuery(GET_ALL_COUNTRIES_QUERY);

  if (loading) {
    return <p>Betöltés...</p>;
  }

  if (error) {
    return <p>Hiba történt ...</p>;
  }

  const { countries } = data;

  return (
    <Dropdown
      data={countries}
      keyPropertyName="id"
      displayPropertyName="name"
    />
  );
};

export default CountriesDropdown;
