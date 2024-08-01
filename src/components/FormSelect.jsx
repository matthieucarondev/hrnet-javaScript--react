import React from 'react';
import Select from 'react-select';
import "../css/Form.css";

const FormSelect = ({ id, label, options, value, onChange, error, requiredMessage }) => {
  return (
    < fieldset>
      <label htmlFor={id}>{label}<span className='star'>*</span></label>
      <Select
        id={id}
        name={id}
        options={options}
        value={value}
        onChange={onChange}
      />
      {error && <span className='error-msg' >{requiredMessage}</span>}
    </ fieldset>
  );
};

export default FormSelect;