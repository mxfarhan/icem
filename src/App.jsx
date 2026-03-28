import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingNav from "./components/ui/floating-nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="pb-[5.5rem] pt-16 md:pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
      </main>

      <FloatingNav />

      <Footer />
    </Router>
  );
}

export default App;
