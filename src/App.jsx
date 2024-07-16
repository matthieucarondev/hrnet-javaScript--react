import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Form from "./pages/Form";
import EmployeeList from "./pages/EmployeeList";
import Root from "./components/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path=" " element={<Root />}>
          <Route index element={<Form />} />
          <Route path="employee-list" element={<EmployeeList />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
