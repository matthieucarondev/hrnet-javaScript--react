import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormImput.jsx";
import FormSelect from "../components/FormSelect.jsx";
import FormAddress from "../components/FormAddress.jsx";
import { departments} from "../data/data";
import ReactModal  from "react-modal-mc";
import {  useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../reducer/employeesReducer.js";
import Header from "../components/Header";


export default function Form() {
  const { register, handleSubmit,  formState: { errors } ,reset } = useForm();
const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [selectedState, setSelectedState] = React.useState(null);
  const [formErrors, setFormErrors] = useState({ state: false, department: false });
  const [modalIsOpen, setModalIsOpen] = useState(false); // État pour contrôler l'affichage du modal
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const onSubmit = (data) => {
    if (!selectedState || !selectedDepartment) {
      setFormErrors({
        state: !selectedState,
        department: !selectedDepartment
      });
      return;
    }

    data.state = selectedState.value;
    data.department = selectedDepartment.value;

    dispatch(addEmployee(data));
    setModalIsOpen(true);
  };
  // Fonction pour fermer le modal
  const close = () => {
    setModalIsOpen(false); 
    reset();
    setSelectedDepartment(null); 
    setSelectedState(null);
    setFormErrors({state: false, department: false});
    navigate('/employee-list');
  };
  return (
    <div className="App">
       <Header />
        <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Create Employee</h2>
          <FormInput 
            id="firstName" 
            label="First Name" 
            register={register} 
            error={errors.firstName}
            requiredMessage="First Name is required"
          />
          <FormInput 
            id="lastName" 
            label="Last Name" 
            register={register} 
            error={errors.lastName}
            requiredMessage="Last Name is required"
          />
          <FormInput 
            id="dateOfBirth" 
            label="Date of Birth" 
            register={register} 
            type="date"
            error={errors.dateOfBirth}
            requiredMessage="Date of Birth is required"
          />
          <FormInput 
            id="startDate" 
            label="Start Date" 
            register={register} 
            type="date"
            error={errors.startDate}
            requiredMessage="Start Date is required"
          />
          <FormAddress 
            register={register}
            errors={errors}
            selectedState={selectedState}
            setSelectedState={setSelectedState}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
          <FormSelect 
            id="department" 
            label="Department" 
            options={departments} 
            value={selectedDepartment} 
            onChange={setSelectedDepartment} 
            error={formErrors.department}
            requiredMessage="Department is required"
          />
          <div className="button-container">
            <button type="submit">Save</button>
          </div>
        </form>
<ReactModal 
      isOpen={modalIsOpen}
      onClose={() => close()}
      message="Employee Created!"
      title="Employee Created!"
      modalBackground="white"
      closeButtonBackground="#5E6E21"
      >
      </ReactModal>
    </div>
  );
}