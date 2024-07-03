import React from 'react';
import FormInput from './FormImput';
import FormSelect from './FormSelect';
import { states } from '../data/data';

const FormAddress = ({ register, errors, selectedState, setSelectedState, formErrors, setFormErrors }) => {
  return (
    <div className="address">
      <div className="title-address">Address</div>

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
        register={register} 
        error={errors.zipCode}
        requiredMessage="Zip Code is required"
      />
    </div>
  );
};

export default FormAddress;