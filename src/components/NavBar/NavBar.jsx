import React from "react";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        BazarOnline
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Inicio
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Comidas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Bebidas
            </a>
          </li>
        </ul>
      </div>

      <CartWidget />
    </nav>
  );
}

export default NavBar;
