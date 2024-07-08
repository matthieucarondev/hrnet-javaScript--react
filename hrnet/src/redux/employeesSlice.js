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
    // Action pour définir des employés (par exemple pour le chargement initial)
    setEmployees(state, action) {
      state.employees = action.payload;
    },
  },
});

// Exportez les actions
export const { addEmployee, setEmployees } = employeesSlice.actions;

// Exportez le réducteur par défaut
export default employeesSlice.reducer;