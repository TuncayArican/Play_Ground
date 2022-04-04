import {Link} from "react-router-dom";
import "./navbarStyle.css";


const Navbar = () => {
  return (
    <div className="NavbarAll">
      <div className="navbarLeft"><Link to="/">Tuncay Usta's Recipe</Link></div>
      <div className="navbarRight">      
      <Link to="/about">About</Link>
      <a href="https://github.com/TuncayArican"
        >GitHub
        </a> 
      <Link to="/login">LOGIN</Link></div>

    </div>
  );
};

export default Navbar;
