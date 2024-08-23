import React,{useState} from "react";
import "./home.css";
import Footer from "./Footer";
import StarRatings from 'react-star-ratings';
import {Button} from '@mui/material'

import icon1 from "../assets/error-circle-regular-24.png";
import icon2 from "../assets/globe-regular-24.png";
import icon3 from "../assets/check-regular-24.png"; 
import icon4 from "../assets/videos-solid-24.png";
import icon5 from "../assets/mobile-regular-24.png";
import icon6 from "../assets/memory-card-regular-24.png";
import icon7 from "../assets/infinite-regular-24.png";
import icon8 from "../assets/download-solid-24.png";
import icon9 from "../assets/trophy-regular-24.png";


import Rating from "./Rating";

export default function Home() {
 let learn = [
  {
    
    description: "Go from Zero skills to building Powerful Web Applications on a highly professional level using the latest 2024 Web Technologies.",
  },

  {
   
    description: "Use a Portfolio of over 15 highly professional websites, Games and Mobile apps you would have developed during the course to take your career to the next level.",
  },
  {
    
    description: "Use HTML5, CSS3, Flexbox, Grid & SASS to build website content and add stunning styling and decoration.",
  },
  {
   
    description: "Use Javascript, jQuery & jQuery User Interface to create Interactive Websites.",
  },

  {
   
    description: "Use Twitter Bootstrap to produce Responsive Websites that will adapt to any device size.",
  },
  {
    
    description: "Use advanced skills to connect your websites to APIs ",
  },
 ]

 let info = [
  {
     img: icon4,
    description: "90 hours on-demand video",
  },

  {
    img: icon5,
    description: "Access on mobile and TV",
  },
  {
    img: icon6,
    description: "15 articles",
  },
  {
    img: icon7,
    description: "Full lifetime access",
  },

  {
   
   img: icon8,
    description: "114 downloadable resources",
  },
  {
    img: icon9,
    description: "Certificate of completion",
  },
 ]

 const aggregateRating = 4.4;

  return (
    <div>
    <div className="_main">
      <div className="main-div"> </div>
      <div className="reletive">
        <header className="head">
          <p>
            <a href="#">Development , Web Development , Front-End Development</a>
          </p>
          <h1>The Complete Front-End Development Course - Build 15 Projects</h1>
          <p>
            The only course you need to become a Front-End developer. Covers
            HTML5, CSS3, JS, ES6, APIs, & more!
          </p>
          <div className="rating">
          <span className="rating_num">4.4</span>
          <StarRatings
          
      rating={aggregateRating}
      starDimension="18px"
      starSpacing="5px"
      starRatedColor="gold"
      
    />
            <p>41,897 students</p>
          </div>
          <div className="updated">
            <img className="icon" src={icon1} />
            <p>Last updated 05/2024</p>
          </div>

          <div className="updated">
            <img className="icon" src={icon2} />
            <p className="lag">English</p>
          </div>
     
          <Button>
            <a href="#" className="button">
              Enroll Now
            </a>
          </Button>
        </header>
      </div>
      </div>
     
     {/* ____________________________________________________________________________ */}

     <div className="learn">
       <h2>What you'll learn</h2>

       <div className="learn-item">
        
        {
          
          learn.map((item, index) => (
            <div className="learn-card">
            <div className="updated" key={index}>
        <div className="card-icon">  <img className="icon" src={icon3} /> </div>
          <p className="description">{item.description}</p>
          </div>
          </div>))
        }
        
       </div>

     </div>

        {/* ________________________________________________________________________________________ */}
     
      
      <div className="extra_info">
       <h2>This course includes:</h2>
       <div className="learn-item">
        
        {
          
          info.map((item, index) => (
            <div className="info-card">
            <div className="updated" key={index}>
        <div className="card-icon">  <img className="icon" src={item.img} /> </div>
          <p className="description">{item.description}</p>
          </div>
          </div>))
        }
        
       </div>

         
      </div>
 

     
     <Rating/>

     <Footer/>

    </div>
  );
}
