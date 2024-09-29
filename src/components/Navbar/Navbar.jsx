import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuIconPath = "/src/assets/images/menu.png";

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <ul className={isOpen ? "open" : ""}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/presentation">Parcours</Link>
                    </li>
                    <li>
                        <Link to="/projets">Projets</Link>
                    </li>
                    <li>
                        <Link to="/competences">Compétences</Link>
                    </li>
                    <li>
                        <Link to="/certifications">Certifications</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                    </li>
                </ul>
            </div>
            <div className="navbar-menu">
                <img src={menuIconPath} onClick={toggleMenu}/>
            </div>
        </nav>
        
    )
}

export default Navbar;