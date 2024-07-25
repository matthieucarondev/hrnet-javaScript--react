import React from 'react';
import "../css/Form.css";

const FormInput = ({ id, label, register, error, type = 'text', requiredMessage }) => {
  return (
    <section>
      <label htmlFor={id}>{label}</label>
      <input {...register(id, { required: requiredMessage })} id={id} type={type} />
      {error && <span>{error.message}</span>}
    </section>
  );
};

export default FormInput;