import { Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-brand">

            <a href="#" class="navbar-brand">
                <Link to="/">
                    <span>PU<span style={{ fontFamily: "'Times New Roman', serif", color: "grey", display: `inline`, marginLeft: `0px`, fontSize: `78px` }}>R</span>EMENT</span>
                </Link>
            </a>
            <ul class="navbar-nav mx-auto">
                <li className="nav-item"><Link to="/Menu">Menu</Link></li>
                <li className="nav-item"><Link to="/About">About Us</Link></li>
                <li className="nav-item"><Link to="/Contact">Contact</Link></li>
                <li className="nav-item"><Link to="/BookTable">Book A Table</Link></li>
                <li className="nav-item"><Link to="/OurProducts">Our Products</Link></li>
                <li className="nav-item"><Link to="/Cart">🛒</Link></li>
            </ul>
        </nav>


    );
}

export default Layout;
