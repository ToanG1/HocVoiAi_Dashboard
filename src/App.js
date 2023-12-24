import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/LoginADmin/LoginAdmin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="admin" />} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
