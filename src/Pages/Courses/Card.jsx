import React from "react";
import CorusesDetails from "./CorusesDetails";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ e, setCoursesDetails }) {

  
  function Details() {
    setCoursesDetails(e);
  }

  return (
    <div className="card">
      <div className="card-hover">
        <p className="card-description">{e.CourseDescription}</p>
        <Link onClick={() => Details()} to="CorusesDetails">
          <button className="card-btn">Course Details</button> 
        </Link>
      </div>
      <img src={e.Banner} alt={e.CourseTitle} className="card-banner" />
      <div className="card-details">
        <h2 className="card-title">{e.CourseTitle}</h2>

        <div className="card-info">
          <div className="card-price">Price: {e.CoursePrice}</div>
          <div className="card-duration">Duration: {e.CourseDuration}</div>
          <div className="card-language">Language: {e.CourseLanguage}</div>
        </div>
      </div>
    </div>
  );
}
