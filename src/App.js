import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Employee from "./pages/Employee";
import AddEmployee from "./pages/AddEmployee";
import ListAllEmployees from "./pages/ListAllEmployees";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/empleados/*" element={<Employee />}>
          <Route path="create" element={<AddEmployee />} />
          <Route path="edit" element={<AddEmployee />} />
          <Route path="delete" element={<AddEmployee />} />
          <Route path="list" element={<AddEmployee />} />
          <Route path="listAll" element={<ListAllEmployees />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
