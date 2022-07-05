import CartWidget from "./CartWidget";
import './NavBar.css';

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
            <li class="nav-item">
              <a class="nav-link linkUnstyled" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">About us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>)
};

export default NavBar;