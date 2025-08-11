import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <Link to="/" onClick={closeMenu}>
                <img src="./jump-logo.svg" alt="Jump Juice logo" width={100} />
            </Link>
            <button
                className={`navbar-toggle ${menuOpen ? "open" : ""}`}
                onClick={handleToggle}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
                <span />
                <span />
                <span />
            </button>
            <div className={`navbar-routes ${menuOpen ? "open" : ""}`}>
                <Link to="/" onClick={closeMenu}>
                    Home
                </Link>
               
                <Link to="/menu" onClick={closeMenu}>
                   Menu
                </Link>
                   <Link to="/menu" onClick={closeMenu}>
                   Merchandise
                </Link>
                   <Link to="/menu" onClick={closeMenu}>
                   Our Stores
                </Link>
                <Link to="/about" onClick={closeMenu}>
                    About Us
                </Link>
                <Link to="/contact" onClick={closeMenu}>
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
