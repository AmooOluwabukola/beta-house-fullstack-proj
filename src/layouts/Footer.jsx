import React from "react";
import logo from '../assets/logoimg.svg'
import mail from '../assets/mail.svg'
import call from '../assets/call.svg'
import location from '../assets/locationicon.svg'
import '../styles/Layout.css'
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-success">
        <div className="container">
          <div className="row  justify-content-between">
            {/* div 1 */}
            <div className="col-md-4  text-white mb-5 ">
              <div className="d-flex flex-column">
              <img src={logo} alt="" className=" mt-5 footer-logo"/>
              <span className="discover-text mb-2">Discover, rent, and find your ideal home hassle-free with BetaHouse. Take control of your rental journey today!</span>
              </div>
             
              <div className="d-flex mb-2 location">
              <img src={location} alt="" className="mr-2 pe-2 "  />
              <span className="location discover-text">95 Tinubu Estate, Lekki, Lagos</span>
              </div>
              <div className="d-flex mb-2 location">
              <img src={call} alt="" className="mr-2 pe-2 "  />
              <span className="discover-text">+234 675 8935 675</span>
              </div>
              <div className="d-flex mb-2 location">
                <img src={mail} alt="" className="mr-2 pe-2 "  />
                <a href="mailto:support@betahouse.com" className="text-white text-decoration-none discover-text">support@betahouse.com</a>
              </div>
            </div>
            {/* div 2 */}
            <div className="col-md-2 mt-5">
              <div className="d-flex flex-column">
              <h4 className="text-white heading">Quick Links</h4>
             
              <a href="/" className="text-white text-decoration-none footer-links ">Home</a>
                <a href="/" className="text-white text-decoration-none footer-links">Properties</a>
                <a href="/" className="text-white text-decoration-none footer-links">About</a>
                <a href="mailto:support@betahouse.com" className="text-white text-decoration-none footer-links">Contact Us</a>
                <a href="/" className="text-white text-decoration-none footer-links">Blogs</a>
             
             
              </div>
              
     
            </div>
            {/* div 3 */}
            <div className="col-md-2 mt-5">
            <div className="d-flex flex-column">
              <h4 className="text-white heading">More</h4>
             
              <a href="/" className="text-white text-decoration-none footer-links ">Agents</a>
                <a href="/" className="text-white text-decoration-none footer-links">Affordable Houses</a>
                <a href="/" className="text-white text-decoration-none footer-links">FAQ’s</a>
              
             
             
              </div>
            </div>
            {/* div 4 */}
            <div className="col-md-3 mt-5">
           < div className="d-flex flex-column">
              <h4 className="text-white heading">Popular Search</h4>
             
              <a href="/" className="text-white text-decoration-none footer-links ">Apartment for sale</a>
                <a href="/" className="text-white text-decoration-none footer-links">Apartment for rent</a>
                <a href="/" className="text-white text-decoration-none footer-links">3 bedroom flat</a>
                <a href="/" className="text-white text-decoration-none footer-links">Bungalow</a>
             
             
              </div>
            </div>
          </div>
          <hr className="text-white" />
          <div className="d-flex justify-content-between mt-4  ">
<span className="mb-5 text-white footer-links">Copyright {year} Betahouse | Designed by Michael.fig</span>
<span className="mb-5 " ><a href="#" className="text-white text-decoration-none footer-links">Privacy Policy</a></span>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
