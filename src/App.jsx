import NotFoundPage from "./pages/404";
import Login from "./pages/auth/Login";
import LandingPage from "./pages/LandinPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPeminjaman from "./pages/Peminjaman";
import Discover from "./pages/Discover";
import DiscoverDetail from "./pages/DiscoverDetail";
import History from "./pages/HistoryBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/peminjaman" element={<FormPeminjaman />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/detail" element={<DiscoverDetail />} />
        <Route path="/discover/detail/form-peminjaman" element={<FormPeminjaman />} />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
