import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>

      <Navbar />

      <ScrollToTop />

      <Routes>

        <Route path="/"element={<Home />}/>

        <Route path="/about"element={<About />}/>

        <Route path="/skills"element={<Skills />}/>

        <Route path="/projects" element={<Projects />}/>

        <Route path="/experience"element={<Experience />}/>

        <Route path="/contact"element={<Contact />}/>

      </Routes>

      <Footer />

    </ThemeProvider>
  );
}

export default App;