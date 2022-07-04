import CartWidget from "./CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (
    <nav class="navbar navbar-expand-lg bg-warning nav-bar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ROMA PASTAS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link linkUnstyled" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link linkUnstyled" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
  </nav>)
};

export default NavBar;