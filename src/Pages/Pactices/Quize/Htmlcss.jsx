import React,{ useEffect, useState } from 'react'
import { Box, Card, Button, Fab } from '@mui/material';

import "./Htmlcss.css"

export default function Htmlcss() {


  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleAnswerSelect = (questionIndex, optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionId
    });
  };
  const handleSubmit = () => {
    setIsSubmitted(true);
  };

    
  const questions = [
    {
      text: "What does HTML stand for?",
      options: [
        { id: 1, text: "Hyper Trainer Marking Language" },
        { id: 2, text: "Hyper Text Marketing Language" },
        { id: 3, text: "Hyper Text Markup Language" },
        { id: 4, text: "Hyper Text Markup Leveler" }
      ],
      correctAnswerId: 3
    },
    {
      text: "What does CSS stand for?",
      options: [
        { id: 1, text: "Computing Style Sheet" },
        { id: 2, text: "Creative Style System" },
        { id: 3, text: "Cascading Style Sheet" },
        { id: 4, text: "Creative Styling Sheet" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which HTML tag is used to define an internal style sheet?",
      options: [
        { id: 1, text: "<style>" },
        { id: 2, text: "<css>" },
        { id: 3, text: "<script>" },
        { id: 4, text: "<link>" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which property is used to change the background color in CSS?",
      options: [
        { id: 1, text: "color" },
        { id: 2, text: "background-color" },
        { id: 3, text: "bgcolor" },
        { id: 4, text: "background" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you insert a comment in a CSS file?",
      options: [
        { id: 1, text: "// this is a comment" },
        { id: 2, text: "' this is a comment" },
        { id: 3, text: "/* this is a comment */" },
        { id: 4, text: "// this is a comment //" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which HTML attribute is used to define inline styles?",
      options: [
        { id: 1, text: "class" },
        { id: 2, text: "style" },
        { id: 3, text: "font" },
        { id: 4, text: "styles" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which CSS property controls the text size?",
      options: [
        { id: 1, text: "font-style" },
        { id: 2, text: "text-style" },
        { id: 3, text: "font-size" },
        { id: 4, text: "text-size" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which HTML element is used to specify a footer for a document or section?",
      options: [
        { id: 1, text: "<bottom>" },
        { id: 2, text: "<footer>" },
        { id: 3, text: "<section>" },
        { id: 4, text: "<foot>" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you make each word in a text start with a capital letter in CSS?",
      options: [
        { id: 1, text: "text-transform: capitalize" },
        { id: 2, text: "text-style: capitalize" },
        { id: 3, text: "transform: capitalize" },
        { id: 4, text: "text-capitalize: capitalize" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which HTML element is used to specify a header for a document or section?",
      options: [
        { id: 1, text: "<header>" },
        { id: 2, text: "<head>" },
        { id: 3, text: "<h1>" },
        { id: 4, text: "<top>" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you add a background color for all <h1> elements?",
      options: [
        { id: 1, text: "h1 {background-color:#FFFFFF;}" },
        { id: 2, text: "all.h1 {background-color:#FFFFFF;}" },
        { id: 3, text: "h1.all {background-color:#FFFFFF;}" },
        { id: 4, text: "h1 {background-color: white;}" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which CSS property is used to change the text color of an element?",
      options: [
        { id: 1, text: "fgcolor" },
        { id: 2, text: "text-color" },
        { id: 3, text: "color" },
        { id: 4, text: "font-color" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which CSS property is used to change the font of an element?",
      options: [
        { id: 1, text: "font-style" },
        { id: 2, text: "font-family" },
        { id: 3, text: "font-weight" },
        { id: 4, text: "text-style" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you make the text bold in CSS?",
      options: [
        { id: 1, text: "font: bold;" },
        { id: 2, text: "style: bold;" },
        { id: 3, text: "font-weight: bold;" },
        { id: 4, text: "font-bold: true;" }
      ],
      correctAnswerId: 3
    },
    {
      text: "How do you display hyperlinks without an underline in CSS?",
      options: [
        { id: 1, text: "a {text-decoration:none;}" },
        { id: 2, text: "a {decoration:no-underline;}" },
        { id: 3, text: "a {underline:none;}" },
        { id: 4, text: "a {text-underline:none;}" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you make a list that lists its items with squares in CSS?",
      options: [
        { id: 1, text: "list-type: square;" },
        { id: 2, text: "list-style-type: square;" },
        { id: 3, text: "list: square;" },
        { id: 4, text: "list-square: true;" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you select elements with class name 'example' in CSS?",
      options: [
        { id: 1, text: "#example" },
        { id: 2, text: ".example" },
        { id: 3, text: "example" },
        { id: 4, text: "*example" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you select elements with id 'demo' in CSS?",
      options: [
        { id: 1, text: "#demo" },
        { id: 2, text: ".demo" },
        { id: 3, text: "demo" },
        { id: 4, text: "*demo" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you group selectors in CSS?",
      options: [
        { id: 1, text: "Separate each selector with a comma" },
        { id: 2, text: "Separate each selector with a space" },
        { id: 3, text: "Separate each selector with a plus sign" },
        { id: 4, text: "Separate each selector with a dash" }
      ],
      correctAnswerId: 1
    },
    {
      text: "What is the default value of the position property in CSS?",
      options: [
        { id: 1, text: "relative" },
        { id: 2, text: "absolute" },
        { id: 3, text: "fixed" },
        { id: 4, text: "static" }
      ],
      correctAnswerId: 4
    },
    {
      text: "Which CSS property is used to control the layout of elements in a container?",
      options: [
        { id: 1, text: "display" },
        { id: 2, text: "layout" },
        { id: 3, text: "position" },
        { id: 4, text: "container" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which property is used to float elements in CSS?",
      options: [
        { id: 1, text: "float" },
        { id: 2, text: "align" },
        { id: 3, text: "clear" },
        { id: 4, text: "display" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which HTML element is used to define a navigation section?",
      options: [
        { id: 1, text: "<nav>" },
        { id: 2, text: "<navigate>" },
        { id: 3, text: "<menu>" },
        { id: 4, text: "<navigation>" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which CSS property is used to create space around elements, outside of any defined borders?",
      options: [
        { id: 1, text: "margin" },
        { id: 2, text: "padding" },
        { id: 3, text: "spacing" },
        { id: 4, text: "border" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which CSS property is used to create space around elements, inside of any defined borders?",
      options: [
        { id: 1, text: "margin" },
        { id: 2, text: "padding" },
        { id: 3, text: "spacing" },
        { id: 4, text: "border" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you change the font size of an element in CSS?",
      options: [
        { id: 1, text: "font: size;" },
        { id: 2, text: "font-size: 16px;" },
        { id: 3, text: "size: 16px;" },
        { id: 4, text: "text-size: 16px;" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which CSS property is used to change the left margin of an element?",
      options: [
        { id: 1, text: "padding-left" },
        { id: 2, text: "margin-left" },
        { id: 3, text: "indent" },
        { id: 4, text: "margin" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you make the text italic in CSS?",
      options: [
        { id: 1, text: "font: italic;" },
        { id: 2, text: "style: italic;" },
        { id: 3, text: "font-style: italic;" },
        { id: 4, text: "font-italic: true;" }
      ],
      correctAnswerId: 3
    },
    {
      text: "How do you create a flex container in CSS?",
      options: [
        { id: 1, text: "display: flex;" },
        { id: 2, text: "flex: container;" },
        { id: 3, text: "container: flex;" },
        { id: 4, text: "display: flexbox;" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you change the width of an element in CSS?",
      options: [
        { id: 1, text: "element-width: 100px;" },
        { id: 2, text: "width: 100px;" },
        { id: 3, text: "set-width: 100px;" },
        { id: 4, text: "size-width: 100px;" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you set the background image of an element in CSS?",
      options: [
        { id: 1, text: "background: image(url);" },
        { id: 2, text: "background-image: url(image.jpg);" },
        { id: 3, text: "image: url(image.jpg);" },
        { id: 4, text: "image-background: url(image.jpg);" }
      ],
      correctAnswerId: 2
    },
    {
      text: "Which CSS property is used to set the color of a border?",
      options: [
        { id: 1, text: "border-color" },
        { id: 2, text: "border-style" },
        { id: 3, text: "border-background" },
        { id: 4, text: "color-border" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you make a grid container in CSS?",
      options: [
        { id: 1, text: "display: grid;" },
        { id: 2, text: "grid: container;" },
        { id: 3, text: "container: grid;" },
        { id: 4, text: "display: gridbox;" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which CSS property is used to set the space between the border and the content?",
      options: [
        { id: 1, text: "padding" },
        { id: 2, text: "margin" },
        { id: 3, text: "spacing" },
        { id: 4, text: "border-spacing" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you select elements with attribute name 'data' in CSS?",
      options: [
        { id: 1, text: "[data]" },
        { id: 2, text: "#data" },
        { id: 3, text: ".data" },
        { id: 4, text: "data" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which CSS property is used to set the height of an element?",
      options: [
        { id: 1, text: "element-height: 100px;" },
        { id: 2, text: "height: 100px;" },
        { id: 3, text: "set-height: 100px;" },
        { id: 4, text: "size-height: 100px;" }
      ],
      correctAnswerId: 2
    },
    {
      text: "How do you create a transition effect in CSS?",
      options: [
        { id: 1, text: "transition: effect;" },
        { id: 2, text: "create-transition: effect;" },
        { id: 3, text: "transition: all 0.5s;" },
        { id: 4, text: "effect: transition;" }
      ],
      correctAnswerId: 3
    },
    {
      text: "Which CSS property is used to control the order of flexible items?",
      options: [
        { id: 1, text: "order" },
        { id: 2, text: "flex-order" },
        { id: 3, text: "item-order" },
        { id: 4, text: "order-flex" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which HTML element is used to display a scalar measurement within a range?",
      options: [
        { id: 1, text: "<meter>" },
        { id: 2, text: "<progress>" },
        { id: 3, text: "<range>" },
        { id: 4, text: "<measure>" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you add a shadow to text in CSS?",
      options: [
        { id: 1, text: "text-shadow: 2px 2px 5px grey;" },
        { id: 2, text: "shadow-text: 2px 2px 5px grey;" },
        { id: 3, text: "text-effect: shadow 2px 2px 5px grey;" },
        { id: 4, text: "text-decor: shadow 2px 2px 5px grey;" }
      ],
      correctAnswerId: 1
    },
    {
      text: "Which HTML element is used to specify a list of pre-defined options for input controls?",
      options: [
        { id: 1, text: "<datalist>" },
        { id: 2, text: "<optionlist>" },
        { id: 3, text: "<selectlist>" },
        { id: 4, text: "<option>" }
      ],
      correctAnswerId: 1
    },
    {
      text: "How do you set the size of a background image in CSS?",
      options: [
        { id: 1, text: "background-size: cover;" },
        { id: 2, text: "background: size cover;" },
        { id: 3, text: "background-image: size cover;" },
        { id: 4, text: "background-size-cover: true;" }
      ],
      correctAnswerId: 1
    },
  ];
  
  return (
    <div>
      <h1>Html</h1>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {
          questions.map((question, questionIndex) => (
            <Card sx={{ width: "300px", height: "300px", ml: "3.9rem", mt: "2rem", maxHeight: "350px" }}>
              <div className="question" key={questionIndex}>
                <br />
                <p>{question.text}</p>
                {question.options.map(option => (
                  <div className="option" key={option.id}>
                    <br />
                    <label>
                      <input className='inputtext'
                        type="radio"
                        name={`question-${questionIndex}`}
                        value={option.id}
                        onChange={() => handleAnswerSelect(questionIndex, option.id)}
                        disabled={isSubmitted}
                      />
                      {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </Card>
          ))}
      </Box>
      
      <Button color='primary' variant='contained' sx={{ width: "4rem", height: "3rem", border: "1px solid black", ml: "35rem", mt: "1rem" }} onClick={handleSubmit} disabled={isSubmitted}>Submit</Button>
      {isSubmitted && (
        <div className='bossresult'>
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="result">
              <p>{question.text}</p>
              {selectedAnswers[questionIndex] === question.correctAnswerId ? (
                <p className="correct">Correct!</p>
              ) : (
                <p className="incorrect">
                  Incorrect. The correct answer is {question.options.find(option => option.id === question.correctAnswerId).text}.
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
