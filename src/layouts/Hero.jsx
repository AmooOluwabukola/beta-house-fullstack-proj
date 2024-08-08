import React, { useState } from "react";
import "../styles/Layout.css";
import NavBar from "./NavBar";
import heroselectimg from "../assets/heroselectimg.svg";
import line from "../assets/Line 6.svg";

const Hero = () => {
  const [bedroomCount, setBedroomCount] = useState(0);

  const handleIncrement = () => {
    setBedroomCount(bedroomCount + 1);
  };

  const handleDecrement = () => {
    if (bedroomCount > 0) {
      setBedroomCount(bedroomCount - 1);
    }
  };
  return (
    <>
      <main className="hero">
        <NavBar />
        <div className="container ">
          <h1 className="text-white text-center p-5">Browse Our Properties</h1>
          <p className="text-white text-center ">
            Find your perfect home among our curated properties. Start browsing
            now!
          </p>
          <div className=" p-4 row container  justify-content-center hero-search ">
            <div
              action=""
              className="col-md-9 d-lg-flex bg-white p-3 justify-content-between search-form align-items-center "
            >
              {/* location div */}
              <div className="d-flex flex-column align-items-center border-done bg-white mx-5  ">
                <label className=" location">LOCATION</label>
                <input
                  type="search" 
                   className="border search bg-white pe-2"
                  placeholder="eg. Gbagada"
                />
              </div>
              <img src={line} alt="" className="d-none d-lg-block" />
              {/* property div */}
              <div className="d-flex flex-column  align-items-center">
                <label className="property"> PROPERTY TYPE</label>
                <input
                  type="search"
                  placeholder="eg. Duplex, Bedroom Flat"
                  className="border search bg-white"
                />
              </div>
              <img src={line} alt=""  className="d-none d-lg-block" />
              {/* div for bedroom */}
              <div className="d-flex flex-column  border-none bg-white bedroom">
                <label className=" bed">BEDROOM</label>
                <div className="d-flex ">
                  <button className="circle-button dec text-center"  onClick={handleDecrement}>
                  -
                  </button>
                  <span className="px-3 py-1 ">{bedroomCount}</span>
                  <button className="circle-button inc "  onClick={handleIncrement}>+</button>
                </div>
              </div>
            </div>
            {/* submit btn div */}
            <div className=" col-md-3 find-property ">
              <button className="text-center rounded p-3 submit-btn text-white mt-3 mx-5">
                Find Property
              </button>
            </div>
          </div>
<p className="mb-5">.</p>
          {/* <img src={heroselectimg} alt="" className="p-3 w-100 mt-3" /> */}
        </div>
      </main>
    </>
  );
};

export default Hero;
