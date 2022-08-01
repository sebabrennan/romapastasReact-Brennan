import CartWidget from "./Cart/CartWidget";
import './NavBar.css';
import navBarOptions from "./helpers/strings";
import { Link } from "react-router-dom";

const NavBar = ({ name }) => {

    return (
    <nav className="navbar navbar-expand-lg bg-warning nav-bar">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          { name }
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="navlink" aria-current="page" href="#">
                <Link to={"category/Sorrentinos"} >Sorrentinos</Link></a>
            </li>
            <li className="nav-item">
              <a className="navlink" aria-current="page" href="#">
                <Link to={"category/Panzottis"}>Panzottis</Link></a>
            </li>
            <li className="nav-item">
              <a className="navlink" aria-current="page" href="#">
                <Link to={"category/Fideos"}>Fideos</Link></a>
            </li>
            <li className="nav-item">
              <a className="navlink" aria-current="page" href="#">
                <Link to={"cart"}>{<CartWidget />}</Link></a>
            </li>
          </ul>
          {/* <ul className="navbar-nav">
	            {navBarOptions.map(navBarOption => <li className="nav-item" key={navBarOption.id}>	
                    <a className="nav-link" aria-current="page" href="#">{navBarOption.category}</a>
		        </li>)} */}
        </div>
      </div>
    </nav>)
};

export default NavBar;