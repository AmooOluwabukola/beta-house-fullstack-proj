import React , {useState} from "react";
import Hero from "../layouts/Hero";
import Properties from "./Properties";
import { properties } from "../db";
import Propertiescarousel from "../components/Propertiescarousel";
import "../styles/Layout.css";
import Footer from "../layouts/Footer";
const Home = () => {

  return (
    <>
      <Hero />
      <Properties   />
     <Propertiescarousel/>
     <Footer/>
       
     
    </>
  );
};

export default Home;
