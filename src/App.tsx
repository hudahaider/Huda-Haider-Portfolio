import LandingPage from "./pages/LandingPage";
import WorksPage from "./pages/WorksPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
