import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <a
        href="https://github.com/hamzapala"
        >GitHub
        </a> 
      <Link to="/login">LOGIN</Link>
    </div>
  );
};

export default Navbar;
