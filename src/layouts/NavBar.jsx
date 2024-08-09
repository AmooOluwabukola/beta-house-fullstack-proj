import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Layout.css";
import logoimg from "../assets/logoimg.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import Bag from "../components/Bag";
import aisha from "../assets/aisha.svg";
const NavBar = ({ userId }) => {
  const [bioProfile, setBioProfile] = useState([]);
  const [bagShow, SetBagShow] = useState(false);
  const token = localStorage.getItem("clientToken");
  console.log("userId:", userId);
  function handleDrop() {
    !bagShow ? SetBagShow(true) : SetBagShow(false);
  }
  const getBioProfile = async () => {
    try {
      const request = await fetch(`https://beta-house-server.onrender.com/user/getuser`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await request.json();
      console.log(response);
      if (response) {
        setBioProfile({
          firstName: response.firstName,
          lastName: response.lastName,
          profilePhoto: response.profilePhoto,
        });
      } else {
        console.error("Error fetching user data:", response);
        console.log(token);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  useEffect(() => {
    getBioProfile();
  }, []);
  return (
    <>
      <main>
        {/* <nav className="navbar navbar-expand-lg text-white container">
      <div className="d-flex mt-3 ps-3">
        <img src={logoimg} alt="" />
        <div className="d-flex">
         
        </div>
      </div>

        </nav> */}
        <Navbar expand="lg" className="show={show} onHide={handleClose}">
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src={logoimg} alt="" className="logo" />
            </Navbar.Brand>
            <div
              className="d-flex d-lg-none align-items-center  "
              role="button"
              onClick={handleDrop}
            >
              <img
                src={bioProfile.profilePhoto}
                alt=""
                className=" border rounded-pill me-2"
                style={{
                  borderRadius: "100%",
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              />
              <div className="d-flex flex-row">
                <span className="text-white">
                
                  {token ? <>  {bioProfile.firstName} {bioProfile.lastName}</> : <>get in </>}
                </span>
                <span className="" role="button" onClick={handleDrop}>
                  {" "}
                  {bagShow ? (
                    <GoChevronUp className="text-white d-none d-lg-block mt-2" />
                  ) : (
                    <GoChevronDown className="text-white d-none d-lg-block mt-1" />
                  )}{" "}
                </span>
              </div>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-between"
            >
              <Nav className="mx-auto text-white text-center nav">
                <Nav.Link
                  href="#home"
                  className="text-white nav-link text-center"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#property"
                  className="text-white nav-link text-center"
                >
                  Properties
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  className="text-white nav-link text-center"
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#blog"
                  className="text-white nav-link text-center"
                >
                  Blog
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="text-white nav-link text-center"
                >
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div
              className="d-flex d-none d-lg-block align-items-center  "
              role="button"
              onClick={handleDrop}
            >
              <img
                src={bioProfile.profilePhoto}
                alt=""
                className=" border rounded-pill me-2"
                style={{
                  borderRadius: "100%",
                  height: "2.5rem",
                  width: "2.5rem",
                }}
              />
              <div className="d-flex flex-row">
                <span className="text-white">
                
                  {token ? <>  {bioProfile.firstName} {bioProfile.lastName}</> : <>get in </>}
                </span>
                <span className="" role="button" onClick={handleDrop}>
                  {" "}
                  {bagShow ? (
                    <GoChevronUp className="text-white d-none d-lg-block mt-2" />
                  ) : (
                    <GoChevronDown className="text-white d-none d-lg-block mt-1" />
                  )}{" "}
                </span>
              </div>
            </div>
            <div className="position-absolute nav-bag">
              {bagShow && <Bag />}
            </div>
          </Container>
        </Navbar>
      </main>
    </>
  );
};

export default NavBar;
