import { createSlice } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],  // L'état initial
  },
  reducers: {
    // Action pour ajouter un employé
    addEmployee(state, action) {
      state.employees.push(action.payload);
    },
    
   
  },
});


export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;