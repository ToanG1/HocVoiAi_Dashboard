import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/RoadmapDashboard/RoadmapDashboard";
import Login from "./pages/Login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="admin/roadmap" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
