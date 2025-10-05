import React from "react";
import "./Menu.css"; 
import Footer1 from "./Footer1";

const menuItems = [
    { name: "ONION SOUP", description: "A classic, rich onion soup with melted Gruyere cheese", price: "160/-" },
    { name: "STEAK TARTARE", description: "Finely chopped raw steak with capers, onions and a quail egg yolk", price: "500/-" },
    { name: "PAN-SEARED SCALLOPS", description: "Scallops served with a delicate lemon beurre blanc sauce", price: "300/-" },
    { name: "BEEF WELLINGTON", description: "A tender filet mignon encased in puff pastry with mushroom duxelles", price: "400/-" },
    { name: "SALMON ROULADE", description: "Rolled salmon fillet with a creamy dill sauce and asparagus", price: "350/-" },
    { name: "DUCK CONFIT", description: "Slow-cooked duck leg served with a cherry reduction", price: "450/-" },
    { name: "TRUFFLE RISOTTO", description: "Creamy risotto with black truffle and Parmesan", price: "475/-" },
    { name: "CHEESE PLATE", description: "An assortement of fine cheeses with figs and a toasted baguette", price: "200/-" }
];

const menuItems1 =[
    { name: "CRÈME BRÛLÉE", description: "A freshly baked brownie loaded with dark chocolate chips and walnuts", price: "600/-" },
    { name: "TIRAMISU", description: "A traditional Italian dessert with layers of coffee-soaked ladyfingers and mascarpone", price: "400/-" },
];

const menuItems2 =[
    { name: "MARTINI", description: "Gin or vodka, dry vermouth, choice of garnish", price: "200/-" },
    { name: "MANHATTAN", description: "Bourbon or rye, sweet vermouth, bitters, cherry garnish", price: "250/-" },
    { name: "NEGRONI", description: "Gin, Campari, sweet vermouth, orange twist", price: "350/-" },
    { name: "WHISKEY SOUR", description: "Bourbon, lemon juice, simple syrup, cherry and orange slice", price: "400/-" },
    { name: "GIMLET", description: "Gin or vodka, lime juice, simple syrup", price: "335/-" }
];

function Menu() {
    return (
        <div>
            <div className="menu-container" id="m1">
                <div className="menu-image">
                <img src="/Menuimg/mainimg.webp" alt="Restaurant Menu"  className="w-full h-full object-cover"  />
                </div>
                <div className="menu-content">
                    <h1>MENU</h1>
                    <h2>FOOD</h2>
                    <p className="menu-description">These dishes are lingering over.</p>
                    <div className="menu-list">
                        {menuItems.map((item, index) => (
                            <div key={index} className="menu-item">
                                <div className="menu-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="menu-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <h2>DESSERT</h2>
                    <p className="menu-description">Our desserts are made in-house by our expert pastry chef.</p>
                    <div className="menu-list">
                        {menuItems1.map((item, index) => (
                            <div key={index} className="menu-item">
                                <div className="menu-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="menu-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                    <h2>COCKTAILS</h2>
                    <div className="menu-list">
                        {menuItems2.map((item, index) => (
                            <div key={index} className="menu-item">
                                <div className="menu-text">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                </div>
                                <span className="menu-price">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer1/>
            </div>
    );
}

export default Menu;
