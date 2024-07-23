import React from 'react';
import Select from 'react-select';

const FormSelect = ({ id, label, options, value, onChange, error, requiredMessage }) => {
  return (
    <article>
      <label id={`${id}-label`} htmlFor={id}>{label}</label>
      <Select
        id={id}
        name={id}
        aria-labelledby={`${id}-label`}
        options={options}
        value={value}
        onChange={onChange}
      />
      {error && <span>{requiredMessage}</span>}
    </article>
  );
};

export default FormSelect;