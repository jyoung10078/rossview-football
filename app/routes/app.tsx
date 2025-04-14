import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "../components/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
