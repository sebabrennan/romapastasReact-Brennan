import CartWidget from "./Cart/CartWidget";
import './NavBar.css';
import { Link } from "react-router-dom";

const NavBar = ({ name }) => {

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>
              { name }
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><Link to={"category/Fideos"} className="linkUnstyled">Fideos</Link></a></li>
                    <li><a className="dropdown-item" href="#"><Link to={"category/Panzottis"} className="linkUnstyled">Panzottis</Link></a></li>
                    <li><a className="dropdown-item" href="#"><Link to={"category/Sorrentinos"} className="linkUnstyled">Sorrentinos</Link></a></li>
                  </ul>
                </li>
                <li className="nav-item linkUnstyled">
                  <a className="navlink linkUnstyled" aria-current="page" href="#">
                    <Link to={"cart"} className="linkUnstyled">{<CartWidget />}</Link></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
};

export default NavBar;