import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./pages/Form";
import EmployeeList from './pages/EmployeeList';
import Root from './components/Root';

 
function App() {
    return (
      <Route path="/" element={<Root />}>
        < Route index element={<Form />} />
        <Route path='/employee-list' element={<EmployeeList />} />
       </Route>
  );
}
  export default App;
  