import React,{useEffect} from 'react';
import './CoursesDetails.css';

export default function CoursesDetails({CoursesDetails,setaddCart,addCart}) {


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="courses-details">
      <h1>Course Details</h1>
      <img src={CoursesDetails.Banner} alt={CoursesDetails.CourseTitle} className="courses-banner" />
      <h2 className="card-titles">{CoursesDetails.CourseTitle}</h2>
      <div className="card-prices">Price: {CoursesDetails.CoursePrice}</div>
      <div className="card-durations">Duration: {CoursesDetails.CourseDuration}</div>
      <div className="card-languages">Language: {CoursesDetails.CourseLanguage}</div>
      <div className="card-levels">Level: {CoursesDetails.courseLevel}</div>
      <div className="card-prerequisites">
        <h3>Prerequisites:</h3>
        <ol>
          <li>{CoursesDetails.prerequisites[0]}</li>
          <li>{CoursesDetails.prerequisites[1]}</li>
        </ol>
      </div>
      <div className="card-objectives">
        <h3>Course Objectives:</h3>
        <ul>
          {CoursesDetails.courseObjectives.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </div>
      <p className="course-description">{CoursesDetails.CourseDescription}</p>
      <button  onClick={()=>setaddCart([...addCart,CoursesDetails])}>Add To Cart</button>
    {console.log(addCart)}
    </div>
  );
}