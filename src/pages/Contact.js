import "./Contact.css"
import { Link } from "react-router-dom";
import Footer1 from "./Footer1";

function Contact() {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="input-group">
              <label>Name</label>
              <input type="text" />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea rows="3"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        
        <div className="contact-info">
          <h2>CONTACT</h2>
          <p>2 Chitrakoot Bangulow, Premchand Nagar Rd,<br />Satellite, Ahmedabad, <br/>Gujarat - 380015, India</p>
          <p>purement@mysite.com</p>
          <p>MON - FRI: 5PM - 12AM<br />SAT - SUN: 4PM - 1AM</p>
          <div className="social-links">
            <a href="#">INSTAGRAM</a> | <a href="#">FACEBOOK</a>
          </div>
          <button className="book-table"><Link to="/BookTable" id="l2">BOOK A TABLE</Link></button>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}
export default Contact;