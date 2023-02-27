import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Icon.png"

export default function Navigation() {
    return (
        <>
            <nav className="navbar navbar-expand">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item nav-hover" >
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="logo" width="50" height="50" />
                        </Link>
                    </li>
                    <li className="nav-item nav-hover" >
                        <Link to="/gallery" className="nav-link NavLink">Galeria</Link>
                    </li>
                    <li className="nav-item nav-hover" >
                        <Link to="/rates" className="nav-link NavLink">Tarifas</Link>
                    </li>
                    <li className="nav-item nav-hover" >
                        <Link to="/contact" className="nav-link NavLink">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}