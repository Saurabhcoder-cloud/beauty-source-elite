import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Wholesale from "@/pages/wholesale";
import About from "@/pages/about";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import Cosmetics from "@/pages/cosmetics";
import Healthcare from "@/pages/healthcare";
import OralCare from "@/pages/oral-care";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/oral-care" element={<OralCare />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
