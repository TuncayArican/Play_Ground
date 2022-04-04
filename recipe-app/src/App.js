import './App.css';
import Navbar from './components/navbar/Navbar';
import About from "./components/about/About";
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/recipe/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
