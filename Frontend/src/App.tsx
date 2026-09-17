import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import Academy from "./Pages/Academy";
import About from "./Pages/About";
import Lookbook from "./Pages/Lookbook";
import Contact from "./Pages/Contact";
import PrivacyTermsConditions from "./Pages/PrivacyTermsConditions";

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<About />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/privacy&terms&conditions" element={<PrivacyTermsConditions />} />
        <Route path="/privacy-terms" element={<PrivacyTermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyTermsConditions />} />
        <Route path="/terms-conditions" element={<PrivacyTermsConditions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App