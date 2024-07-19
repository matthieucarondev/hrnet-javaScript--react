import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EmployeeCreate from "./pages/EmployeeCreate";
import EmployeeList from './pages/EmployeeList';
import Root from './components/Root';
 
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<EmployeeCreate/>} />
            <Route path="/employee-list" element={<EmployeeList />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
  