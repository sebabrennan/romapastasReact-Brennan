import CartWidget from "./CartWidget";
import './NavBar.css';
import navBarOptions from "./helpers/strings";

const NavBar = ({ name }) => {

    return (
    <nav className="navbar navbar-expand-lg bg-warning nav-bar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{ name }</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
	            {navBarOptions.map(navBarOption => <li className="nav-item" key={navBarOption.id}>	
                    <a className="nav-link" aria-current="page" href="#">{navBarOption.category}</a>
		        </li>)}
            <li>
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>)
};

export default NavBar;