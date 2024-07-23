import React from 'react';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { states } from '../data/data';

const FormAddress = ({ register, errors, selectedState, setSelectedState, formErrors, setFormErrors }) => {
  return (
    <section className="address">
      <h3 className="title-address">Address</h3>
      <FormInput 
        id="street" 
        label="Street" 
        register={register} 
        error={errors.street}
        requiredMessage="Street is required"
      />
      <FormInput 
        id="city" 
        label="City" 
        register={register} 
        error={errors.city}
        requiredMessage="City is required"
      />
      <FormSelect 
        id="state" 
        label="State" 
        options={states} 
        value={selectedState} 
        onChange={setSelectedState} 
        error={formErrors.state}
        requiredMessage="State is required"
      />
      <FormInput 
        id="zipCode" 
        label="Zip Code" 
        type="number"
        register={register} 
        error={errors.zipCode}
        requiredMessage="Zip Code is required"
      />
    </section>
  );
};

export default FormAddress;