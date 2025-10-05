import "./Home.css";
import { Link } from "react-router-dom";
import Footer1 from "./Footer1";

const images = [
    "/Images/fourteen.jpg",
    "/Images/fifth.avif",
    "/Images/sixth.avif",
    "/Images/seventh.avif",
    "/Images/eight.avif",
    "/Images/nine.avif",
    "/Images/ten.avif",
    "/Images/eleven.avif",
    "/Images/twelve.avif",
    "/Images/thirteen.avif",
];


function Home() {
    return (
        <div className="body">
            <p id="p1">BRASSERIE<br></br> & Bar</p>
            <section className="menu-section">
                <div className="menu-container1">
                    <h1>OUR MENU</h1>
                    <p>
                        At Purement, every dish is a celebration of purity, flavor, and artistry.
                        Our carefully curated menu blends innovation with tradition, offering a
                        refined selection of dishes crafted from the freshest, high-quality ingredients.
                        Whether you seek comforting classics or adventurous culinary creations, our menu is designed to satisfy every palate.
                    </p>
                    <a href="#" className="menu-link"><Link to="/Menu" id="l1">EXPLORE MENU</Link></a>
                </div>
            </section>

            <ul>
                <li>
                    <img id="i1" src="/Images/second.avif" alt=""></img>
                    <img id="i2" src="/Images/third.avif"></img>
                </li>
            </ul>

            <section className="hero-section">
                <div className="content">
                    <h1>
                        IT'S ALWAYS <br />
                        MORE THAN <br />
                        GOOD FOOD
                    </h1>
                    <div className="text-container">
                        <p>
                            At Purement, we believe in the beauty of simplicity—sourcing the finest seasonal ingredients,
                            embracing innovative techniques, and curating dishes that celebrate natural flavors.
                            Whether you're indulging in our meticulously designed tasting menus or savoring a casual
                            yet refined meal, every bite is a testament to our passion for excellence.
                        </p>
                        <Link to="/about" className="about-link"><Link to="/About" id="l2">ABOUT US</Link></Link>
                    </div>
                </div>
            </section>

            <div id="d2">
                <p id="p2">PUREMENT MOMENTS</p>
            </div>

            <div className="image-gallery">
                {images.map((src, index) => (
                    <div key={index} className="image-wrapper">
                        <img src={src} alt={`gallery-img-${index}`} />
                    </div>
                ))}
            </div>
            <Footer1 />
        </div>
    );
}
export default Home;