import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Academy from "./Pages/Academy";
import About from "./Pages/About";
import Lookbook from "./Pages/Lookbook";
import Contact from "./Pages/Contact";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<About />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App