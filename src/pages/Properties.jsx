import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
// import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import imageicon from "../assets/image.svg";
import link from "../assets/Link.svg";
import videoimg from "../assets/video.svg";
import locationicon from "../assets/location.svg";
import bed from "../assets/bedroom.svg";
import bath from "../assets/bathroom.svg";
import doublearrow from "../assets/doublearrow.svg";
import share from "../assets/share.svg";
import love from "../assets/love.svg";
import Spinner from "react-bootstrap/Spinner";
import filter from "../assets/filter.svg";
import { properties } from "../db";
import Form from "react-bootstrap/Form";
import Pagination from "../components/Pagination";
import "../styles/Layout.css";


const Properties = () => {
 
  const pageSize = 9; 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(properties.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const currentPageData = properties.slice(startIndex, endIndex);


 

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <main className=" row p-5 " id="property">
        <div className="container">
          <div className="d-flex justify-content-between m-2">
            <div className="d-flex gap-3">
              <div className="d-flex gap-2  ">
                <p>
                  <img src={filter} alt="" />
                </p>
                <p className="d-none d-lg-block ">More Filter</p>
              </div>
              <span className="d-none d-lg-block">
              Showing 1 – {pageSize} of {properties.length} results
              </span>
            </div>
            <div className="d-flex select">
              <p className="mt-1 d-none d-lg-block">Sort by:</p>

              <Form>
                <Form.Select aria-label="Default select example">
                  <option value="1">Default</option>
                  <option value="2">Best Sellers</option>
                </Form.Select>
              </Form>
            </div>
          </div>

          <div className="row justify-content-center">
            {currentPageData.map((property, index) => {
              const {
                id,
                title,
                image,
                description,
                category,
                price,
                location,
                bathrooms,
                bedrooms,
              } = property;

              return (
                <div key={id} className="col-md-4 mb-4">
                  <Card className="rounded-3 card-inner position-relative card-hover">
                    <div className="position-relative">
                      <Card.Img variant="top" src={image} className="w-100" />
                      <div className="position-absolute top-0 start-0 p-3 feature">
                        <button className="feature-btn">Featured</button>
                        <button className="sale-btn">{category}</button>
                      </div>
                      <div
                        className="position-absolute end-0 p-3 d-flex gap-2"
                        style={{ bottom: "5px" }}
                      >
                        <img src={link} alt="" />
                        <img src={videoimg} alt="" />
                        <img src={imageicon} alt="" />
                      </div>
                    </div>

                    <Card.Body>
                      <Card.Title className="fs-6">{title}</Card.Title>

                      <div className="d-flex gap-2">
                        <img src={locationicon} alt="" />
                        <span>{location}</span>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <div className="d-flex gap-2">
                          <img src={bed} alt="" />
                          <span>{bedrooms} Bedrooms</span>
                        </div>
                        <div className="d-flex gap-2">
                          <img src={bath} alt="" />
                          <span>{bathrooms} Bathrooms</span>
                        </div>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="mt-2 py-1">₦{price}</span>
                        <img src={doublearrow} alt="" className="mb-3" />
                        <img src={share} alt="" />
                        <img src={love} alt="" />
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
            
          </div>
          <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
        </div>
      </main>
    </>
  );
};

export default Properties;
