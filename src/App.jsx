import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import EnterprisePage from "./pages/EnterprisePage";
import DashboardPage from "./pages/DashboardPage";
import MissionsPage from "./pages/MissionsPage";
import NewMissionPage from "./pages/NewMissionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="/entreprises" element={<EnterprisePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/missions" element={<MissionsPage />} />
        <Route path="/missions/nouveau" element={<NewMissionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
