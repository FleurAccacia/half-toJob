import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import EnterprisePage from "./pages/EnterprisePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentPage />} />
        <Route path="/entreprises" element={<EnterprisePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
