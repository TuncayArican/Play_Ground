import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <Link to="/"  className="navbar-brand">
            recap/şaban/ramazan
          </Link>

          <div>
            <div className="" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item text-uppercase">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item text-uppercase">
                  <a href="https://github.com/hamzapala" className="nav-link">
                    GitHub
                  </a>
                </li>
                <li className="nav-item text-uppercase">
                  <Link to="/login" className="nav-link">
                    LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
