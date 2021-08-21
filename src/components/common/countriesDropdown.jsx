import React from "react";
import { useQuery } from "@apollo/client";

import { GET_ALL_COUNTRIES_QUERY } from "../../graphql/queries/query";

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
    <div className="bp3-select">
      <select>
        <option></option>
        {countries.map((country) => (
          <option key={country["id"]}>{country["name"]}</option>
        ))}
      </select>
    </div>
  );
};

export default CountriesDropdown;
