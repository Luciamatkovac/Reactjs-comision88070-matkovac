import "./NavBar.css";
import { CartWidget } from "./CartWidget.jsx";

export const NavBar = () => (
  <nav>
    <div className="nav-left">
      <img
        src="https://images.unsplash.com/photo-1758021878156-3589f6807064?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Logo tienda"
      />
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">PRODUCTOS</a>
        </li>
        <li>
          <a href="#">CONTACTO</a>
        </li>
      </ul>
    </div>
    <div className="nav-right">
      <CartWidget />
    </div>
  </nav>
);
