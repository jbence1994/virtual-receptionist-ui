const Dropdown = ({ dataCollection, keyPropertyName, displayPropertyName }) => {
  return (
    <div className="bp3-select">
      <select>
        <option></option>
        {dataCollection.map((item) => (
          <option key={item[keyPropertyName]}>
            {item[displayPropertyName]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
