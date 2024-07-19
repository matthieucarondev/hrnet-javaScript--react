import { createSlice } from '@reduxjs/toolkit';

const employeesReducer= createSlice({
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


export const { addEmployee } = employeesReducer.actions;

export default employeesReducer.reducer;