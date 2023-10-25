// eslint-disable-next-line react/prop-types
const Select = ({ options, value, onChange }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <select value={value} onChange={handleChange}>
      {/* eslint-disable-next-line react/prop-types */}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
export default Select;