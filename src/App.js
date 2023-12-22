import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="admin" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
