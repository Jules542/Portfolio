import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <ul>
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
                        <Link to="/experience">Expérience</Link> 
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link> 
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;