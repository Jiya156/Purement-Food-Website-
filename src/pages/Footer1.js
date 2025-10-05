import React from "react";
import { Link } from "react-router-dom";
import "./Footer1.css"; 

function Footer1() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="logo">𓌉◯𓇋</div>
                    <h2>BRASSERIE & BAR</h2>
                    <h1>PUREMENT</h1>
                    <p>A :456, Linking Road, Bandra West,</p>
                    <p>Mumbai, Maharashtra - 400050</p>
                    <p>T: 123-456-7890</p>
                </div>

                <div className="footer-right">
                    <nav>
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/menu">MENU</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/contact">CONTACT</Link></li>
                            <li><Link to="/BookTable">BOOK A TABLE</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Made By : Jiya Modi</p>
            </div>
        </footer>
    );
}

export default Footer1;
