import React from 'react'
import { BrowserRouter as  Route,  RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import Form from "./pages/Form";
import EmployeeList from './pages/EmployeeList';
import Root from './components/Root';

 
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Root />}>
        < Route index element={<Form />} />
        <Route path='/employee-list' element={<EmployeeList />} />
       </Route>
    )
  )
    return (
      <RouterProvider router={router} />
  );
}
  export default App;
  