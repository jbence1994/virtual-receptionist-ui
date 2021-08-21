import React from "react";

const Dropdown = ({ data }) => {
  return (
    <div className="bp3-select .modifier">
      <select>
        <option></option>
        {data.map((item) => (
          <option key={item["id"]}>{item["name"]}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
