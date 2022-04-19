import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Html from './components/Html';
import Css from './components/Css';
import Logo from './components/Logo';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/logo" element={<Logo />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
