import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RoadmapDashboard from "./pages/RoadmapDashboard/RoadmapDashboard";
import Login from "./pages/Login/Login";
import SocialDashboard from "./pages/SocialDashBoard/SocialDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="admin/roadmap" element={<RoadmapDashboard />} />
        <Route path="admin/social" element={<SocialDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
