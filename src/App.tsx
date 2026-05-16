import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Cosmetics from "@/pages/cosmetics";
import Healthcare from "@/pages/healthcare";
import OralCare from "@/pages/oral-care";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/oral-care" element={<OralCare />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
