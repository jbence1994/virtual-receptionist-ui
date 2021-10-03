const Dropdown = ({ data, keyPropertyName, displayPropertyName }) => {
  return (
    <div className="bp3-select">
      <select>
        <option value={0}></option>
        {data.map((item) => (
          <option key={item[keyPropertyName]}>
            {item[displayPropertyName]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
