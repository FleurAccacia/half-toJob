import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import EnterprisePage from "./pages/EnterprisePage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="/entreprises" element={<EnterprisePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
