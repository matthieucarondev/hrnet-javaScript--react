import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../components/FormImput.jsx";
import FormSelect from "../components/FormSelect.jsx";
import FormAddress from "../components/FormAddress.jsx";
import { departments} from "../data/data";




export default function Form() {
  const { register, handleSubmit,  formState: { errors } } = useForm();
const [selectedDepartment, setSelectedDepartment] = React.useState(null);
  const [selectedState, setSelectedState] = React.useState(null);
  const [formErrors, setFormErrors] = useState({ state: false, department: false });


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

    let existingData = JSON.parse(localStorage.getItem("employeeData")) || [];
    if (!Array.isArray(existingData)) {
      console.warn('existingData est un objet, transformation en tableau.');
      existingData = Object.values(existingData); // Convertit en tableau des valeurs de l'objet
    }


    // Vérification si un employé a déjà été enregistré avec au moins une information identique
    const matchingEmployee = existingData.find(item =>
      item.city === data.city ||
      item.dateOfBirth === data.dateOfBirth ||
      item.department === data.department ||
      item.firstName === data.firstName ||
      item.lastName === data.lastName ||
      item.startDate === data.startDate ||
      item.state === data.state ||
      item.street === data.street ||
      item.zipCode === data.zipCode
    );

    if (matchingEmployee) {
      const isConfirm = window.confirm(`An employee with some matching details already exists. Do you want to update the existing information?`);

      if (isConfirm) {
        // Cherche l'employé existant avec les informations exactes pour mise à jour
        const existingEmployeeIndex = existingData.findIndex(item =>
          item.firstName === data.firstName &&
          item.lastName === data.lastName &&
          item.dateOfBirth === data.dateOfBirth
        );

        if (existingEmployeeIndex !== -1) {
          const existingEmployee = existingData[existingEmployeeIndex];
          const updatedEmployee = { ...existingEmployee, ...data };

          existingData[existingEmployeeIndex] = updatedEmployee;
          localStorage.setItem("employeeData", JSON.stringify(existingData));
          alert("Employee information updated.");
        } else {
          // Ajouter un nouvel employé s'il n'existe pas avec les mêmes informations exactes
          existingData.push(data);
          localStorage.setItem("employeeData", JSON.stringify(existingData));
          alert("Employee registered.");
        }
      } else {
        // Ne rien faire si l'utilisateur refuse de mettre à jour
        alert("Employee information was not updated.");
      }
    } else {
      // Ajouter un nouvel employé s'il n'y a pas de doublon
      existingData.push(data);
      localStorage.setItem("employeeData", JSON.stringify(existingData));
      alert("Employee registered.");
    }
    console.log(data);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
      <a href="/employee-list">View Current Employees</a>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
      </div>
    </div>
  );
}