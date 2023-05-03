import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Importar el icono de usuario de react-icons
import style from "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.collapse + " collapse navbar-collapse"} id="navbarNav">
          <ul className={style.navbarNav + " navbar-nav ml-auto"}>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/">
                Inicio
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/form">
                Crear formulario
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/cards">
                Ofertas y paquetes
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/reservas">
                Reservas
              </Link>
            </li>
            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/activitycards">
                Activities
              </Link>
            </li>

            <li className={style.navItem + " nav-item"}>
              <Link className={style.navLink + " nav-link"} to="/carrito">
                carrito
              </Link>
            </li>
            <li className={style.navItem + " nav-item ml-auto"}>
              <Link className={style.navLink + " nav-link"} to="/login">
                <FaUser /> Iniciar sesión {/* Icono de usuario de react-icons */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

