import React from 'react';
import Select from 'react-select';

const FormSelect = ({ id, label, options, value, onChange, error, requiredMessage }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Select
        id={id}
        name={id}
        options={options}
        value={value}
        onChange={onChange}
      />
      {error && <span>{requiredMessage}</span>}
    </div>
  );
};

export default FormSelect;