import CartWidget from "./CartWidget";
import './NavBar.css';
import navBarOptions from "./helpers/strings";

const NavBar = ({ name }) => {

    return (
    <nav class="navbar navbar-expand-lg bg-warning nav-bar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{ name }</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
	            {navBarOptions.map(navBarOption => <li class="nav-item" key={navBarOption.id}>	
                    <a class="nav-link" aria-current="page" href="#">{navBarOption.category}</a>
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