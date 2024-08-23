import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/*_______________________________import page_______________________________ */
import Footer from "../../Pages/Footer";
import "./Courses.css";
import CorusesDetails from "./CorusesDetails";
import Card from "./Card";

/*_______________________________________import img____________________________ */
import courses_img from "../../assets/courses img.gif";
import html_and_css from "../../assets/html and css.jpg";
import javascript from "../../assets/javascript.jpg";
import react from "../../assets/ReactJS.png";
import advanced_css from "../../assets/advanced css.jpg";
import responsive from "../../assets/responsive-websites.jpg";
import js from "../../assets/JS-Concepts.png";
import grid_flexbox from "../../assets/grid and flexbox.jpg";


export default function Courses({ setCoursesDetails, CoursesDetails, addCart, setaddCart }) {
  let [CoursesData, setCoursesData] = useState([
    {
      Banner: html_and_css,
      CoursePrice: "12000",
      CourseDuration: "12Hr",
      CourseLanguage: "English",
      CourseTitle: "Introduction to HTML & CSS",
      CourseDescription:
        "Learn the basics of HTML and CSS to build simple web pages.",
      courseLevel: "Beginner",
      prerequisites: [
        "Basic computer skills",
        "Familiarity with using a text editor",
      ],
      courseObjectives: [
        "Understand the structure of HTML documents",
        "Learn essential HTML tags and elements",
        "Grasp the basics of CSS styling",
        "Create responsive layouts using CSS",
        "Build and style simple web pages from scratch",
      ],
    },
    {
      Banner: javascript,
      CoursePrice: "15000",
      CourseDuration: "20Hr",
      CourseLanguage: "English",
      CourseTitle: "JavaScript for Beginners",
      CourseDescription:
        "Understand the fundamentals of JavaScript and start creating interactive web applications.",
      courseLevel: "Beginner",
      prerequisites: [
        "Basic HTML and CSS knowledge",
        "Familiarity with using a text editor",
      ],
      courseObjectives: [
        "Understand JavaScript syntax and data types",
        "Learn to use variables, functions, and control structures",
        "Manipulate the DOM to create dynamic web pages",
        "Handle events and user interactions",
        "Introduce asynchronous programming concepts",
      ],
    },
    {
      Banner: react,
      CoursePrice: "18000",
      CourseDuration: "25Hr",
      CourseLanguage: "English",
      CourseTitle: "React Basics",
      CourseDescription:
        "Get started with React and learn to build dynamic user interfaces.",
      courseLevel: "Intermediate",
      prerequisites: [
        "Solid understanding of JavaScript",
        "Familiarity with ES6+ syntax",
        "Basic understanding of HTML and CSS",
      ],
      courseObjectives: [
        "Understand React components and JSX",
        "Learn state management and props",
        "Create functional and class components",
        "Use React Hooks for state and side effects",
        "Build a single-page application with React Router",
      ],
    },
    {
      Banner: advanced_css,
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
      CourseTitle: "Advanced CSS Techniques",
      CourseDescription:
        "Master advanced CSS techniques to create responsive and modern web designs.",
      courseLevel: "Advanced",
      prerequisites: [
        "Strong understanding of CSS basics",
        "Experience with responsive design principles",
        "Familiarity with CSS preprocessors (e.g., Sass) is beneficial",
      ],
      courseObjectives: [
        "Master CSS Grid and Flexbox for complex layouts",
        "Implement CSS animations and transitions",
        "Use CSS custom properties (variables) effectively",
        "Create responsive designs with advanced media queries",
        "Optimize CSS for performance and maintainability",
      ],
    },
    {
      Banner: responsive,
      CoursePrice: "22000",
      CourseDuration: "35Hr",
      CourseLanguage: "English",
      CourseTitle: "Responsive Web Design",
      CourseDescription:
        "Learn how to make your web pages look great on all devices with responsive design techniques.",
      courseLevel: "Intermediate",
      prerequisites: [
        "Solid understanding of HTML and CSS",
        "Basic JavaScript knowledge",
        "Familiarity with mobile-first design concepts",
      ],
      courseObjectives: [
        "Implement mobile-first responsive design",
        "Use CSS media queries effectively",
        "Create flexible layouts with percentage-based widths",
        "Optimize images and media for different screen sizes",
        "Implement responsive navigation patterns",
      ],
    },
    {
      Banner: js,
      CoursePrice: "20000",
      CourseDuration: "30Hr",
      CourseLanguage: "English",
      CourseTitle: "Advanced JavaScript Concepts",
      CourseDescription:
        "Dive deeper into JavaScript to understand advanced concepts and patterns.",
      courseLevel: "Advanced",
      prerequisites: [
        "Strong foundation in JavaScript basics",
        "Experience with ES6+ features",
        "Familiarity with asynchronous programming",
      ],
      courseObjectives: [
        "Master closures and scope in JavaScript",
        "Understand prototypal inheritance and the 'this' keyword",
        "Implement advanced asynchronous patterns (Promises, async/await)",
        "Use design patterns in JavaScript applications",
        "Optimize JavaScript code for performance",
      ],
    },
    {
      Banner: grid_flexbox,
      CoursePrice: "26000",
      CourseDuration: "40Hr",
      CourseLanguage: "English",
      CourseTitle: "CSS Grid and Flexbox",
      CourseDescription:
        "Master CSS Grid and Flexbox to create complex, responsive web layouts with ease.",
      courseLevel: "Intermediate",
      prerequisites: [
        "Solid understanding of CSS basics",
        "Experience with responsive design principles",
        "Familiarity with browser developer tools",
      ],
      courseObjectives: [
        "Understand the CSS Grid layout system",
        "Master Flexbox for one-dimensional layouts",
        "Combine Grid and Flexbox for complex layouts",
        "Create responsive designs using Grid and Flexbox",
        "Implement common UI patterns using these layout techniques",
      ],
    },
  ]);

  return (
    <>
      <Routes>

        <Route
          path="/"   element={
            <div className="courses">
              <center>
                <h1 className="courses-heading">Top Courses</h1>
                <div className="courses_img">
                  <img src={courses_img} alt="courses_img" />
                </div>

                {CoursesData.map((e, i) => (
                  <Card key={i} e={e} setCoursesDetails={setCoursesDetails} />
                ))}

              </center>

              <Footer />

            </div>
          } />


        <Route path="/CorusesDetails"  element={<CorusesDetails CoursesDetails={CoursesDetails} addCart={addCart} setaddCart={setaddCart} />} />

      </Routes>
      
    </>
  );
}
