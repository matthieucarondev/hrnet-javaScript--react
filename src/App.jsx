import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Form from "./pages/Form";
import EmployeeList from './pages/EmployeeList';
import Header from './components/Header';
 
function App() {
    return (
      <Router> 
        <div className="App">
       <Routes>
       <Header/>
       < Route index element={<Form />} />
       <Route path='/employee-list' element={<EmployeeList />} />
       </Routes>
       </div> 
      </Router>
  );
}
  export default App;
  